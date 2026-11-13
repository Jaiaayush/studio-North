/*
  app/about/page.tsx: FRONTEND (the About page, address "/about")
  Explains how the studio works: four promises, then a short founder block.
  The founder name comes from lib/site.ts.
*/
import type { Metadata } from "next";
import { Button } from "@/components/Button";
import { Reveal } from "@/components/Motion";
import { CtaBand, PageHero } from "@/components/Sections";
import { site } from "@/lib/site";

export const metadata: Metadata = {
  title: "About our London web design studio",
  description: "A small London studio that builds websites for trades and local service businesses, with fixed prices and plain English.",
  alternates: { canonical: "/about" },
  openGraph: { title: "About our London web design studio", url: "/about" },
};

/* The four promises shown on this page. Edit the wording here. */
const promises = [
  { title: "Fixed prices", text: "You see the full price in your proposal before any work starts. It does not change unless you change the job." },
  { title: "Plain English", text: "No jargon and no hidden extras. If something is not included, the proposal says so." },
  { title: "You own the site", text: "The domain is in your name. After the final invoice, the design, files and words are yours." },
  { title: "Built for phones", text: "Most local searches happen on a phone, so every page is designed and tested there first." },
];

export default function AboutPage() {
  return (
    <>
      <PageHero
        label="About"
        title="A small studio for local businesses."
        highlight={["local"]}
        lede="We build websites for London plumbers, electricians, salons, builders and other firms that live on local enquiries. That is all we do, so we do it properly."
      />

      <section className="bg-paper py-20 text-ink md:py-32">
        <div className="wrap">
          <Reveal>
            <h2 className="heading max-w-[14ch]">
              Four promises on <span className="text-violet">every project</span>
            </h2>
          </Reveal>
          <div className="mt-14 grid gap-6 sm:grid-cols-2">
            {promises.map((p, i) => (
              <Reveal key={p.title} delay={i * 0.06}>
                <article className="h-full rounded-3xl bg-ink p-8 text-paper transition-transform duration-300 ease-out-strong hover:-translate-y-1.5 md:p-10">
                  <span className="block size-4 rounded-full bg-lime" aria-hidden="true" />
                  <h3 className="mt-8 text-3xl">{p.title}</h3>
                  <p className="mt-4 text-lg leading-relaxed text-mute">{p.text}</p>
                </article>
              </Reveal>
            ))}
          </div>
        </div>
      </section>

      <section className="bg-violet py-20 text-paper md:py-32">
        <div className="wrap grid gap-10 lg:grid-cols-2 lg:gap-20">
          <Reveal>
            <h2 className="heading">
              The person <span className="text-lime">behind the studio</span>
            </h2>
          </Reveal>
          <Reveal delay={0.1}>
            <p className="text-3xl font-bold tracking-tight">{site.founder}</p>
            <p className="mt-2 font-medium text-lime">Founder, {site.name}</p>
            <p className="mt-5 text-xl leading-relaxed">
              {site.founder} runs {site.name} from London. You deal with one person from the first email to launch day, and that person also builds your site.
            </p>
            <div className="mt-8">
              <Button href="/contact">Talk to us</Button>
            </div>
          </Reveal>
        </div>
      </section>

      <CtaBand />
    </>
  );
}
