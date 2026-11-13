/*
  app/api/contact/route.ts: BACKEND (runs only on the server, address "/api/contact")
  Receives the contact form. Visitors can never see this code or the keys it uses.
  Steps for every enquiry, in order:
  1. Check the request really came from our own website.
  2. Apply the rate limit (lib/rate-limit.ts).
  3. Read the data, refusing anything oversized or not JSON.
  4. Validate every field with Zod (lib/contact-schema.ts).
  5. If the hidden honeypot field is filled, pretend success and send nothing.
  6. Save the enquiry in the Supabase database (lib/supabase/server.ts).
  7. Email the enquiry with Resend. With no API key (local development),
     log the enquiry in the server terminal instead and still report success.
*/
import { Resend } from "resend";
import { createSupabaseServerClient } from "@/lib/supabase/server";
import { contactSchema } from "@/lib/contact-schema";
import { rateLimit } from "@/lib/rate-limit";

const MAX_BODY_BYTES = 10_000; // a real enquiry is far smaller than this

/* Small helper: every answer is JSON and must never be stored by a cache */
function json(body: object, status: number, extraHeaders: Record<string, string> = {}) {
  return Response.json(body, { status, headers: { "Cache-Control": "no-store", ...extraHeaders } });
}

/* Removes line breaks so a visitor cannot smuggle extra lines into the email subject */
const oneLine = (value: string) => value.replace(/[\r\n]+/g, " ");

export async function POST(request: Request) {
  /* 1. SAME-SITE CHECK. Browsers attach an Origin header to form posts.
        If it names a different website, another site is trying to post here. */
  const origin = request.headers.get("origin");
  const host = request.headers.get("x-forwarded-host") ?? request.headers.get("host");
  if (origin) {
    let originHost = "";
    try {
      originHost = new URL(origin).host;
    } catch {
      /* unreadable Origin: originHost stays empty and fails the check below */
    }
    if (originHost !== host) return json({ ok: false, message: "Request not allowed." }, 403);
  }

  /* 2. RATE LIMIT by IP address. Hosting platforms pass the visitor's IP in these headers. */
  const ip = request.headers.get("x-forwarded-for")?.split(",")[0]?.trim() || request.headers.get("x-real-ip") || "unknown";
  const limit = rateLimit(ip);
  if (!limit.allowed) {
    return json(
      { ok: false, message: "Too many messages sent. Please try again in a few minutes." },
      429,
      { "Retry-After": String(limit.retryAfterSeconds) },
    );
  }

  /* 3. READ THE BODY safely */
  if (!request.headers.get("content-type")?.includes("application/json")) {
    return json({ ok: false, message: "Unsupported request." }, 415);
  }
  const raw = await request.text();
  if (raw.length > MAX_BODY_BYTES) return json({ ok: false, message: "Message is too large." }, 413);

  let payload: unknown;
  try {
    payload = JSON.parse(raw);
  } catch {
    return json({ ok: false, message: "Unreadable request." }, 400);
  }

  /* 4. VALIDATE. safeParse never throws: it returns success or a list of problems. */
  const result = contactSchema.safeParse(payload);
  if (!result.success) {
    /* Turn Zod's list into { fieldName: "message" } so the form can show each one */
    const errors: Record<string, string> = {};
    for (const issue of result.error.issues) {
      const field = String(issue.path[0] ?? "");
      if (field && !errors[field]) errors[field] = issue.message;
    }
    return json({ ok: false, message: "Please check the boxes marked in red.", errors }, 400);
  }
  const data = result.data;

  /* 5. HONEYPOT. A filled hidden field means a robot. Answer "ok" so it learns nothing. */
  if (data.company_website) {
    console.warn("[contact] Honeypot triggered, enquiry dropped.");
    return json({ ok: true }, 200);
  }

  /* 6. SAVE to the Supabase database (table "enquiries"). No login is needed:
        the database allows anyone to add a row, and nobody outside to read one.
        Only the validated fields are stored. The honeypot field is left out. */
  const supabase = await createSupabaseServerClient();
  if (supabase) {
    const { error } = await supabase.from("enquiries").insert({
      name: data.name,
      email: data.email,
      phone: data.phone,
      business: data.business,
      budget: data.budget,
      message: data.message,
    });
    if (error) {
      console.error("[contact] Database save failed:", error.message);
      return json({ ok: false, message: "We could not save your message. Please email us instead." }, 502);
    }
  } else {
    console.info("[contact] Supabase env vars not set. Enquiry not saved to the database.");
  }

  /* 7. EMAIL (optional). Plain text only, so nothing a visitor types can run as HTML in the inbox. */
  const subject = oneLine(`New website enquiry from ${data.name} (${data.business})`);
  const text = [
    `Name: ${oneLine(data.name)}`,
    `Email: ${data.email}`,
    `Phone: ${data.phone || "not given"}`,
    `Business: ${oneLine(data.business)}`,
    `Budget: ${data.budget}`,
    "",
    data.message,
  ].join("\n");

  /* Secrets are read from the server's environment (.env.local), never from code */
  const apiKey = process.env.RESEND_API_KEY;
  const to = process.env.CONTACT_TO_EMAIL;
  const from = process.env.CONTACT_FROM_EMAIL || "Website enquiries <onboarding@resend.dev>";

  if (!apiKey || !to) {
    /* Development fallback: no key set, so print the enquiry in the terminal */
    console.info("[contact] RESEND_API_KEY or CONTACT_TO_EMAIL not set. Enquiry logged instead of emailed:\n" + text);
    return json({ ok: true }, 200);
  }

  try {
    const resend = new Resend(apiKey);
    const { error } = await resend.emails.send({ from, to, replyTo: data.email, subject, text });
    if (error) throw new Error(error.message);
    return json({ ok: true }, 200);
  } catch (err) {
    /* Log the real reason for us; show the visitor a safe, general message */
    console.error("[contact] Email failed:", err instanceof Error ? err.message : err);
    /* If the enquiry is already safe in the database, the visitor still succeeded */
    if (supabase) return json({ ok: true }, 200);
    return json({ ok: false, message: "We could not send your message. Please email us instead." }, 502);
  }
}
