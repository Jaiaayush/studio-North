/*
  app/pricing/page.tsx: FRONTEND (the Pricing page, address "/pricing")
  The three plans plus common questions. Prices and answers come from
  "plans" and "faqs" in lib/site.ts. Prices are placeholders until confirmed.
*/
import type { Metadata } from "next";
import { Reveal } from "@/components/Motion";
import { CtaBand, FaqList, PageHero, PlanCards } from "@/components/Sections";
import { carePlan, notIncluded } from "@/lib/site";

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
          {/* Optional monthly plan, shown apart so it is never mistaken for part of the build price */}
          <p className="mt-8 text-lg text-mute-ink">
            Optional care plan: <strong className="text-ink">{carePlan.price}</strong>. {carePlan.note}
          </p>
        </div>
      </section>

      {/* NOT INCLUDED: every cost that sits outside our price, listed openly */}
      <section className="bg-ink py-20 md:py-28">
        <div className="wrap grid gap-10 lg:grid-cols-[1fr_1.6fr] lg:gap-20">
          <Reveal>
            <h2 className="heading">
              Not included <span className="text-lime">in our price</span>
            </h2>
            <p className="mt-6 max-w-md text-lg leading-relaxed text-mute">
              No hidden costs means listing them. These are the only things you may pay for on top of your proposal.
            </p>
          </Reveal>
          <Reveal delay={0.1}>
            <dl className="border-t border-line">
              {notIncluded.map((n) => (
                <div key={n.item} className="grid gap-2 border-b border-line py-6 sm:grid-cols-[14rem_1fr] sm:gap-8">
                  <dt className="text-xl font-semibold tracking-tight">{n.item}</dt>
                  <dd className="leading-relaxed text-mute">{n.detail}</dd>
                </div>
              ))}
            </dl>
          </Reveal>
        </div>
      </section>

      <section className="bg-paper py-20 text-ink md:py-28">
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
