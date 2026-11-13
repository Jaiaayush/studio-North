/*
  components/ContactForm.tsx: FRONTEND (runs in the browser)
  The proposal form on the Contact page.
  What happens when someone presses "Send my enquiry":
  1. The form collects the fields and sends them to our own server at /api/contact.
  2. The SERVER checks every field (the browser is never trusted to do that).
  3. If the server finds problems, each message is shown under its own field.
  4. If all is well, the visitor is taken to the thank-you page.
  No keys or secrets live in this file. It only talks to /api/contact.
*/
"use client";

import { useState } from "react";
import { useRouter } from "next/navigation";
import { budgets } from "@/lib/site";
import { Arrow } from "./Button";

type Errors = Partial<Record<"name" | "email" | "phone" | "business" | "budget" | "message", string>>;

/* Shared look for the text boxes */
const inputClass =
  "mt-2 block w-full rounded-2xl border-0 bg-ink-2 px-5 py-4 text-paper shadow-[inset_0_0_0_1.5px_var(--color-line)] placeholder:text-mute aria-[invalid=true]:shadow-[inset_0_0_0_2px_var(--color-danger)]";

export function ContactForm() {
  const router = useRouter();
  const [status, setStatus] = useState<"idle" | "sending" | "sent" | "error">("idle");
  const [errors, setErrors] = useState<Errors>({});
  const [message, setMessage] = useState("");

  async function onSubmit(e: React.FormEvent<HTMLFormElement>) {
    e.preventDefault(); // stop the browser's default full-page form submit
    if (status === "sending") return; // ignore double clicks

    setStatus("sending");
    setErrors({});
    setMessage("");

    /* Read every field out of the form as plain text */
    const data = Object.fromEntries(new FormData(e.currentTarget).entries());

    try {
      const res = await fetch("/api/contact", {
        method: "POST",
        headers: { "Content-Type": "application/json" },
        body: JSON.stringify(data),
      });
      const body = await res.json().catch(() => ({}));

      if (res.ok && body.ok) {
        setStatus("sent");
        router.push("/thank-you");
        return;
      }

      /* The server said no: show its field messages and its summary */
      setErrors(body.errors ?? {});
      setMessage(body.message ?? "Something went wrong. Please try again.");
      setStatus("error");
    } catch {
      /* The request never reached the server (for example, no internet) */
      setMessage("We could not reach the server. Check your connection and try again.");
      setStatus("error");
    }
  }

  /* Builds the small red message under a field, if that field has an error */
  const fieldError = (name: keyof Errors) =>
    errors[name] ? (
      <p id={`${name}-error`} className="mt-2 text-sm font-medium text-danger">
        {errors[name]}
      </p>
    ) : null;

  /* Extra attributes that link a field to its error for screen readers */
  const aria = (name: keyof Errors) => ({
    "aria-invalid": errors[name] ? true : undefined,
    "aria-describedby": errors[name] ? `${name}-error` : undefined,
  });

  return (
    /* noValidate: we show the server's messages instead of the browser's own pop-ups */
    <form onSubmit={onSubmit} noValidate className="grid gap-6 sm:grid-cols-2">
      <div>
        <label htmlFor="name" className="font-medium">Your name</label>
        <input id="name" name="name" type="text" autoComplete="name" className={inputClass} {...aria("name")} />
        {fieldError("name")}
      </div>

      <div>
        <label htmlFor="email" className="font-medium">Email</label>
        <input id="email" name="email" type="email" autoComplete="email" className={inputClass} {...aria("email")} />
        {fieldError("email")}
      </div>

      <div>
        <label htmlFor="phone" className="font-medium">
          Phone <span className="font-normal text-mute">(optional)</span>
        </label>
        <input id="phone" name="phone" type="tel" autoComplete="tel" className={inputClass} {...aria("phone")} />
        {fieldError("phone")}
      </div>

      <div>
        <label htmlFor="business" className="font-medium">Your trade or business</label>
        <input id="business" name="business" type="text" placeholder="Plumber, salon, builder" className={inputClass} {...aria("business")} />
        {fieldError("business")}
      </div>

      <div className="sm:col-span-2">
        <label htmlFor="budget" className="font-medium">Rough budget</label>
        <select id="budget" name="budget" defaultValue="" className={inputClass} {...aria("budget")}>
          <option value="" disabled>Choose a range</option>
          {budgets.map((b) => (
            <option key={b} value={b}>{b}</option>
          ))}
        </select>
        {fieldError("budget")}
      </div>

      <div className="sm:col-span-2">
        <label htmlFor="message" className="font-medium">What do you need?</label>
        <textarea id="message" name="message" rows={5} placeholder="A few lines about your business and what the site should do" className={inputClass} {...aria("message")} />
        {fieldError("message")}
      </div>

      {/* HONEYPOT: a field real people never see or fill in. Spam robots fill in every
          field they find, so if this one has a value the server quietly drops the message. */}
      <div className="absolute -left-[9999px] h-0 w-0 overflow-hidden" aria-hidden="true">
        <label htmlFor="company_website">Leave this field empty</label>
        <input id="company_website" name="company_website" type="text" tabIndex={-1} autoComplete="off" />
      </div>

      <div className="flex flex-wrap items-center gap-5 sm:col-span-2">
        <button type="submit" className="btn btn-lime" disabled={status === "sending" || status === "sent"}>
          {status === "sending" ? "Sending" : status === "sent" ? "Sent" : "Send my enquiry"}
          <Arrow />
        </button>

        {/* role="status"/"alert" makes screen readers read the result out loud */}
        {status === "sent" && (
          <p role="status" className="font-medium text-lime">Enquiry sent. Taking you to the confirmation page.</p>
        )}
        {status === "error" && (
          <p role="alert" className="font-medium text-danger">{message}</p>
        )}
      </div>
    </form>
  );
}
