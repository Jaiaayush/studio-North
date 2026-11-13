/*
  app/page.tsx: FRONTEND (the Home page, address "/")
  Sections, top to bottom:
  1. Hero: the big headline and the two main buttons
  2. Marquee: scrolling strip of services
  3. Services overview
  4. Selected work
  5. Process (four steps)
  6. Client reviews
  7. Pricing teaser
  8. Call-to-action band
  Words and numbers come from lib/site.ts.
*/
import Link from "next/link";
import { Button } from "@/components/Button";
import { Reveal, RiseText } from "@/components/Motion";
import { CtaBand, Marquee, PlanCards, ProcessSteps, ProjectCard, Testimonials } from "@/components/Sections";
import { projects, services, stats } from "@/lib/site";

export default function HomePage() {
  return (
    <>
      {/* 1. HERO: fills the first screen (minus the header height) */}
      <section className="relative flex min-h-[calc(100svh-4.5rem)] flex-col overflow-hidden bg-ink">
        {/* Two blurred colour glows in the background. Decoration only. */}
        <div aria-hidden="true" className="pointer-events-none absolute -right-48 -top-48 size-[46rem] rounded-full bg-violet opacity-55 blur-[130px]" />
        <div aria-hidden="true" className="pointer-events-none absolute -bottom-64 -left-40 size-[30rem] rounded-full bg-lime opacity-15 blur-[130px]" />

        <div className="wrap relative flex flex-1 flex-col justify-center py-14 md:py-20">
          <Reveal>
            <p className="mb-6 inline-flex items-center gap-3 font-medium text-mute">
              <span className="block size-2 rounded-full bg-lime" aria-hidden="true" />
              Web design studio, London
            </p>
          </Reveal>

          <h1 className="display max-w-[13ch]">
            <RiseText text="Websites that get London trades booked." highlight={["booked"]} delay={0.1} />
          </h1>

          <div className="mt-10 grid items-end gap-10 lg:grid-cols-[1.1fr_1fr]">
            <Reveal delay={0.5}>
              <p className="max-w-xl text-lg leading-relaxed text-mute md:text-xl">
                Fast, easy-to-find sites for plumbers, electricians, salons and other local businesses. You get a fixed-price proposal within one working day.
              </p>
              <div className="mt-8 flex flex-wrap gap-4">
                <Button href="/contact">Get a proposal</Button>
                <Button href="/work" variant="ghost">
                  See our work
                </Button>
              </div>
            </Reveal>

            {/* Headline numbers. Bracketed ones are placeholders. */}
            <Reveal delay={0.65}>
              <dl className="grid grid-cols-3 gap-4 border-t border-line pt-6">
                {stats.map((s) => (
                  <div key={s.label}>
                    <dt className="sr-only">{s.label}</dt>
                    <dd className="text-3xl font-bold tracking-tighter md:text-5xl">{s.value}</dd>
                    <dd className="mt-2 text-sm text-mute">{s.label}</dd>
                  </div>
                ))}
              </dl>
            </Reveal>
          </div>
        </div>

        {/* 2. MARQUEE sits at the bottom edge of the hero */}
        <Marquee />
      </section>

      {/* 3. SERVICES: light section. Each row links to its part of the Services page. */}
      <section className="bg-paper py-20 text-ink md:py-32">
        <div className="wrap">
          <Reveal>
            <div className="flex flex-wrap items-end justify-between gap-6">
              <h2 className="heading max-w-[14ch]">
                Four services, <span className="text-violet">one goal</span>
              </h2>
              <p className="max-w-sm text-lg text-mute-ink">More of the right enquiries, and less time chasing them.</p>
            </div>
          </Reveal>

          <ul className="mt-14 border-t border-ink/15">
            {services.map((s, i) => (
              <li key={s.id} className="border-b border-ink/15">
                <Reveal delay={i * 0.05}>
                  <Link href={`/services#${s.id}`} className="group grid items-center gap-x-8 gap-y-2 py-8 md:grid-cols-[5rem_1fr_1.2fr_3.5rem] md:py-10">
                    <span className="font-semibold text-violet">{s.number}</span>
                    <h3 className="text-3xl transition-transform duration-300 ease-out-strong group-hover:translate-x-3 md:text-5xl">{s.title}</h3>
                    <p className="text-lg text-mute-ink">{s.summary}</p>
                    {/* Round arrow that turns lime-on-black and nudges right on hover */}
                    <span aria-hidden="true" className="hidden size-14 place-items-center rounded-full bg-ink text-lime transition-transform duration-300 ease-out-strong group-hover:translate-x-1 group-hover:scale-110 md:grid">
                      <svg width="20" height="20" viewBox="0 0 18 18" fill="none">
                        <path d="M3 9h12M10 4l5 5-5 5" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round" />
                      </svg>
                    </span>
                  </Link>
                </Reveal>
              </li>
            ))}
          </ul>
        </div>
      </section>

      {/* 4. SELECTED WORK: first three projects from lib/site.ts */}
      <section className="bg-ink py-20 md:py-32">
        <div className="wrap">
          <Reveal>
            <div className="flex flex-wrap items-end justify-between gap-6">
              <h2 className="heading">
                Selected <span className="text-lime">work</span>
              </h2>
              <Button href="/work" variant="ghost">
                See all work
              </Button>
            </div>
          </Reveal>
          <div className="mt-14 grid gap-x-6 gap-y-12 md:grid-cols-3">
            {projects.slice(0, 3).map((p, i) => (
              <Reveal key={p.slug} delay={i * 0.07}>
                <ProjectCard project={p} />
              </Reveal>
            ))}
          </div>
        </div>
      </section>

      {/* 5. PROCESS */}
      <ProcessSteps />

      {/* 6. REVIEWS */}
      <Testimonials />

      {/* 7. PRICING TEASER */}
      <section className="bg-paper py-20 text-ink md:py-32">
        <div className="wrap">
          <Reveal>
            <div className="flex flex-wrap items-end justify-between gap-6">
              <h2 className="heading max-w-[14ch]">
                Fixed prices, <span className="text-violet">no surprises</span>
              </h2>
              <p className="max-w-sm text-lg text-mute-ink">
                Guide prices. Your proposal confirms the exact figure. <span className="placeholder-tag ml-1">Placeholder prices</span>
              </p>
            </div>
          </Reveal>
          <div className="mt-14">
            <PlanCards />
          </div>
          <div className="mt-10">
            <Button href="/pricing" variant="ghost-ink">
              Compare the plans
            </Button>
          </div>
        </div>
      </section>

      {/* 8. CALL TO ACTION */}
      <CtaBand />
    </>
  );
}
