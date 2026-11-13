/*
  app/services/page.tsx: FRONTEND (the Services page, address "/services")
  One block per service, taken from the "services" list in lib/site.ts.
  Each block has an id (for example #local-seo) so the Home page can link straight to it.
*/
import type { Metadata } from "next";
import { Button } from "@/components/Button";
import { Reveal } from "@/components/Motion";
import { CtaBand, PageHero, ProcessSteps } from "@/components/Sections";
import { services } from "@/lib/site";

export const metadata: Metadata = {
  title: "Web design and local SEO services",
  description: "New websites, local SEO, redesigns and care plans for London trades and local service businesses.",
  alternates: { canonical: "/services" },
  openGraph: { title: "Web design and local SEO services", url: "/services" },
};

export default function ServicesPage() {
  return (
    <>
      <PageHero
        label="Services"
        title="Four ways we help you get work."
        highlight={["work"]}
        lede="Each one has the same aim: help more local people find you, and make it easy for them to call."
      />

      <section className="bg-paper text-ink">
        <div className="wrap">
          {services.map((s) => (
            /* scroll-mt leaves room for the sticky header when a link jumps here */
            <article key={s.id} id={s.id} className="scroll-mt-24 border-b border-ink/15 py-16 last:border-b-0 md:py-24">
              <Reveal>
                <div className="grid gap-10 lg:grid-cols-[1fr_1fr] lg:gap-20">
                  <div>
                    <span className="font-semibold text-violet">{s.number}</span>
                    <h2 className="heading mt-3">{s.title}</h2>
                    <p className="mt-6 max-w-xl text-xl leading-relaxed text-mute-ink">{s.summary}</p>
                    <p className="mt-6 inline-block rounded-full bg-lime px-5 py-2.5 font-semibold">{s.outcome}</p>
                  </div>
                  <div>
                    <h3 className="text-lg font-semibold tracking-normal">What you get</h3>
                    <ul className="mt-5 border-t border-ink/15">
                      {s.includes.map((item) => (
                        <li key={item} className="flex items-center gap-4 border-b border-ink/15 py-4 text-lg">
                          <span className="block size-2.5 shrink-0 rounded-full bg-violet" aria-hidden="true" />
                          {item}
                        </li>
                      ))}
                    </ul>
                    <div className="mt-8">
                      <Button href="/contact" variant="ink">
                        Get a price for this
                      </Button>
                    </div>
                  </div>
                </div>
              </Reveal>
            </article>
          ))}
        </div>
      </section>

      <ProcessSteps />
      <CtaBand />
    </>
  );
}
