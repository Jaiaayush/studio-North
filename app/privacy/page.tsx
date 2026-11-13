/*
  app/privacy/page.tsx: FRONTEND (the Privacy page, address "/privacy")
  Tells visitors what the contact form collects, why, where it is kept and
  what rights they have. UK law (UK GDPR) expects a notice like this.
  This is a plain starting draft, not legal advice. Check it matches what you
  really do, especially how long you keep messages.
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
      `${site.name} is a web design studio in London, run by ${site.founder}. We are responsible for the personal details described on this page. Contact: ${site.email}.`,
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
      "We use your details only to reply to your message and work out a price for you. The law allows this because you asked us for a price, and because a business may answer the messages it is sent.",
      "We do not add you to a mailing list and we never sell your details.",
    ],
  },
  {
    title: "Where it is kept",
    body: [
      "Your message is kept in a secure database run by a company called Supabase, on computers in Ireland. Supabase stores it for us. Only we can read it.",
    ],
  },
  {
    title: "How long we keep it",
    body: [
      "If you do not become a customer, we delete your message within 12 months. If you do become a customer, we keep job and payment records for as long as tax law says we must.",
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
