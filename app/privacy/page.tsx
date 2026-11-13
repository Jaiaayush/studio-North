/*
  app/privacy/page.tsx: FRONTEND (the Privacy page, address "/privacy")
  Tells visitors what the contact form collects, why, where it is kept and
  what rights they have. UK law (UK GDPR) expects a notice like this.
  This is a plain starting draft, not legal advice. Check it matches what you
  really do, especially how long you keep enquiries.
*/
import type { Metadata } from "next";
import { PageHero } from "@/components/Sections";
import { site } from "@/lib/site";

export const metadata: Metadata = {
  title: "Privacy notice",
  description: `How ${site.name} collects, uses and stores the details you send through the contact form.`,
  alternates: { canonical: "/privacy" },
  openGraph: { title: "Privacy notice", url: "/privacy" },
};

/* Each block is one heading and its paragraphs. Edit the wording here. */
const sections = [
  {
    title: "Who we are",
    body: [
      `${site.name} is a web design studio in London, run by ${site.founder}. We are the controller of the personal data described on this page. Contact: ${site.email}.`,
    ],
  },
  {
    title: "What we collect",
    body: [
      "When you send the contact form we collect your name, email address, phone number (if you give one), your trade or business, your rough budget and your message.",
      "The site does not use advertising or tracking cookies, and has no visitor accounts.",
    ],
  },
  {
    title: "Why we collect it",
    body: [
      "We use your details only to reply to your enquiry and prepare a proposal. Our lawful basis is taking steps at your request before entering a contract, and our legitimate interest in answering enquiries.",
      "We do not add you to a mailing list and we never sell your details.",
    ],
  },
  {
    title: "Where it is kept",
    body: [
      "Enquiries are stored in a database provided by Supabase, hosted in the EU (Ireland). Supabase acts as our processor. Only we can read the enquiries.",
    ],
  },
  {
    title: "How long we keep it",
    body: [
      "If you do not become a client, we delete your enquiry within 12 months. If you become a client, we keep project and invoice records for as long as tax law requires.",
    ],
  },
  {
    title: "Your rights",
    body: [
      `You can ask for a copy of your data, ask us to correct or delete it, or object to how we use it. Email ${site.email} and we will reply within one month.`,
      "If you are unhappy with our answer, you can complain to the Information Commissioner's Office at ico.org.uk.",
    ],
  },
];

export default function PrivacyPage() {
  return (
    <>
      <PageHero
        label="Privacy"
        title="Your details, used for one thing."
        highlight={["one", "thing"]}
        lede="We collect what you type into the contact form, use it to reply to you, and nothing else. The full detail is below."
      />
      <section className="bg-paper py-20 text-ink md:py-28">
        <div className="wrap">
          <div className="max-w-3xl">
            {sections.map((s) => (
              <div key={s.title} className="border-t border-ink/15 py-10 first:border-t-0 first:pt-0">
                <h2 className="text-3xl md:text-4xl">{s.title}</h2>
                {s.body.map((p) => (
                  <p key={p} className="mt-4 text-lg leading-relaxed text-mute-ink">
                    {p}
                  </p>
                ))}
              </div>
            ))}
          </div>
        </div>
      </section>
    </>
  );
}
