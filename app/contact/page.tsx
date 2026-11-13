/*
  app/contact/page.tsx: FRONTEND (the Contact page, address "/contact")
  The proposal form (components/ContactForm.tsx) beside the contact details.
  Contact details come from lib/site.ts and are placeholders.
*/
import type { Metadata } from "next";
import { ContactForm } from "@/components/ContactForm";
import { Reveal } from "@/components/Motion";
import { PageHero } from "@/components/Sections";
import { site } from "@/lib/site";

export const metadata: Metadata = {
  title: "Get a website proposal",
  description: "Tell us about your business and get a fixed-price website proposal within one working day.",
  alternates: { canonical: "/contact" },
  openGraph: { title: "Get a website proposal", url: "/contact" },
};

export default function ContactPage() {
  return (
    <>
      <PageHero
        label="Contact"
        title="Get your proposal in one day."
        highlight={["one", "day"]}
        lede="Answer a few questions about your business. A fixed-price proposal comes back within one working day, with no obligation."
      />

      <section className="bg-ink pb-20 md:pb-32">
        <div className="wrap grid gap-14 lg:grid-cols-[1.6fr_1fr] lg:gap-20">
          <Reveal>
            <h2 className="mb-8 text-3xl">Proposal form</h2>
            <ContactForm />
          </Reveal>

          <Reveal delay={0.1}>
            <aside className="rounded-3xl bg-violet p-8 md:p-10">
              <h2 className="text-3xl">Prefer email?</h2>
              <ul className="mt-5 space-y-3 text-lg">
                <li>{site.founder}</li>
                <li>
                  <a href={`mailto:${site.email}`} className="link-draw break-all py-1 font-semibold">
                    {site.email}
                  </a>
                </li>
                {site.phone && <li>{site.phone}</li>}
                <li>London, UK</li>
              </ul>
              <p className="mt-8 border-t border-paper/30 pt-6 leading-relaxed text-paper/90">
                We only use your details to reply to this enquiry. Nothing is added to a mailing list.
              </p>
            </aside>
          </Reveal>
        </div>
      </section>
    </>
  );
}
