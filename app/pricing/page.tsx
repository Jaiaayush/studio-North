/*
  app/pricing/page.tsx — FRONTEND (the Pricing page, address "/pricing")
  The three plans plus common questions. Prices and answers come from
  "plans" and "faqs" in lib/site.ts. Prices are placeholders until confirmed.
*/
import type { Metadata } from "next";
import { Reveal } from "@/components/Motion";
import { CtaBand, FaqList, PageHero, PlanCards } from "@/components/Sections";

export const metadata: Metadata = {
  title: "Website prices for local businesses",
  description: "Fixed-price website plans for London trades and local businesses. See guide prices for Starter, Growth and Lead Engine.",
  alternates: { canonical: "/pricing" },
  openGraph: { title: "Website prices for local businesses", url: "/pricing" },
};

export default function PricingPage() {
  return (
    <>
      <PageHero
        label="Pricing"
        title="Fixed prices, agreed up front."
        highlight={["Fixed"]}
        lede="These are guide prices. Your proposal gives one fixed figure before any work starts, so the invoice never surprises you."
      />

      <section className="bg-paper py-20 text-ink md:py-28">
        <div className="wrap">
          <div className="mb-10 flex flex-wrap items-end justify-between gap-4">
            <h2 className="heading">Three plans</h2>
            <span className="placeholder-tag">Placeholder prices</span>
          </div>
          <PlanCards />
        </div>
      </section>

      <section className="bg-paper pb-20 text-ink md:pb-32">
        <div className="wrap grid gap-10 lg:grid-cols-[1fr_1.6fr] lg:gap-20">
          <Reveal>
            <h2 className="heading">
              Common <span className="text-violet">questions</span>
            </h2>
          </Reveal>
          <Reveal delay={0.1}>
            <FaqList />
          </Reveal>
        </div>
      </section>

      <CtaBand />
    </>
  );
}
