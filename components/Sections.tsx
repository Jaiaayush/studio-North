/*
  components/Sections.tsx: FRONTEND
  The building blocks that pages are assembled from. Each one is a full-width
  section or a card, and several pages reuse them:
  - PageHero: the big title at the top of every inner page
  - Marquee: the scrolling strip of services
  - ProjectCard: the screenshot and card for one piece of work
  - ConceptBar / ConceptOutro: the label above and the band below each concept page
  - ProcessSteps, Testimonials, PlanCards, FaqList: content blocks
  - CtaBand: the lime "get a proposal" band at the bottom of each page
  All the words come from lib/site.ts.
*/
import Image from "next/image";
import Link from "next/link";
import { faqs, marqueeWords, plans, processSteps, projects, testimonials } from "@/lib/site";
import { Button } from "./Button";
import { Reveal, RiseText } from "./Motion";

/* ---------- PageHero ---------- */
export function PageHero({
  label,
  title,
  highlight,
  lede,
}: {
  label: string;
  title: string;
  highlight?: string[];
  lede: string;
}) {
  return (
    <section className="relative overflow-hidden bg-ink pb-16 pt-16 md:pb-24 md:pt-28">
      {/* Soft violet glow behind the title. Decoration only. */}
      <div aria-hidden="true" className="pointer-events-none absolute -right-40 -top-40 size-[38rem] rounded-full bg-violet opacity-40 blur-[120px]" />
      <div className="wrap relative">
        <p className="mb-6 font-medium text-lime">{label}</p>
        <h1 className="display max-w-[14ch]">
          <RiseText text={title} highlight={highlight} />
        </h1>
        <Reveal delay={0.35}>
          <p className="mt-8 max-w-2xl text-lg leading-relaxed text-mute md:text-xl">{lede}</p>
        </Reveal>
      </div>
    </section>
  );
}

/* ---------- Marquee ---------- */
export function Marquee() {
  /* The list is printed twice in a row. The CSS animation slides the row left by
     exactly half, then restarts, so the loop has no visible jump. */
  const row = [...marqueeWords, ...marqueeWords];
  return (
    <div className="marquee overflow-hidden bg-lime py-5 text-ink" aria-label="Our services">
      <div className="marquee-track flex w-max animate-marquee">
        {[0, 1].map((copy) => (
          <ul key={copy} className="flex shrink-0" aria-hidden={copy === 1}>
            {row.map((word, i) => (
              <li key={i} className="flex items-center gap-8 pr-8 text-2xl font-bold tracking-tight md:text-4xl">
                {word}
                <span className="block size-3 rounded-full bg-violet" aria-hidden="true" />
              </li>
            ))}
          </ul>
        ))}
      </div>
    </div>
  );
}

/* ---------- ProjectCard ---------- */
/* One piece of work: a real screenshot of the page, its name, and a link to it.
   Concept work carries a "Concept project" tag so nobody mistakes it for a client. */
export function ProjectCard({ project }: { project: (typeof projects)[number] }) {
  return (
    <Link href={`/work/${project.slug}`} className="group block">
      {/* The screenshot zooms slightly inside its frame on hover */}
      <div className="relative aspect-[4/3] overflow-hidden rounded-3xl bg-ink-2">
        <Image
          src={project.image}
          alt={`Screenshot of the ${project.title} website design`}
          fill
          sizes="(min-width: 1024px) 33vw, (min-width: 640px) 50vw, 100vw"
          className="object-cover object-top transition-transform duration-500 ease-out-strong group-hover:scale-[1.04]"
        />
      </div>
      <div className="mt-5 flex items-start justify-between gap-4">
        <div>
          <h3 className="text-xl font-bold tracking-tight md:text-2xl">{project.title}</h3>
          <p className="mt-1 text-mute">{project.summary}</p>
        </div>
        {project.concept && <span className="placeholder-tag mt-1 shrink-0 text-mute">Concept project</span>}
      </div>
    </Link>
  );
}

/* ---------- ConceptBar ---------- */
/* The strip at the top of every concept page. It says plainly that the business
   is invented, and gives a way back to the Work page. */
export function ConceptBar({ name }: { name: string }) {
  return (
    <div className="concept-bar bg-ink py-4 text-paper">
      <div className="wrap flex flex-wrap items-center justify-between gap-x-6 gap-y-2">
        <p className="text-sm">
          <strong className="text-lime">Concept project, not a real client.</strong> {name} is an invented business. Any likeness to a real company is a coincidence.
        </p>
        <Link href="/work" className="link-draw text-sm font-semibold">
          Back to all work
        </Link>
      </div>
    </div>
  );
}

/* ---------- ConceptOutro ---------- */
/* The Studio North band under every concept page. */
export function ConceptOutro() {
  return (
    <section className="bg-lime py-16 text-ink md:py-24">
      <div className="wrap flex flex-wrap items-end justify-between gap-8">
        <h2 className="heading max-w-[14ch]">Want a site like this one?</h2>
        <Button href="/contact" variant="ink" className="px-8 py-5 text-lg">
          Get a proposal
        </Button>
      </div>
    </section>
  );
}

/* ---------- ProcessSteps ---------- */
export function ProcessSteps() {
  return (
    <section className="bg-violet py-20 text-paper md:py-32">
      <div className="wrap">
        <Reveal>
          <h2 className="heading max-w-[16ch]">
            Enquiry to live site in <span className="text-lime">four steps</span>
          </h2>
        </Reveal>
        <ol className="mt-14 grid gap-x-8 gap-y-12 sm:grid-cols-2 lg:grid-cols-4">
          {processSteps.map((step, i) => (
            <li key={step.title}>
              <Reveal delay={i * 0.07}>
                <span className="block text-7xl font-bold leading-none tracking-tighter text-lime md:text-8xl">{i + 1}</span>
                <h3 className="mt-6 text-2xl">{step.title}</h3>
                <p className="mt-3 leading-relaxed text-paper/90">{step.text}</p>
              </Reveal>
            </li>
          ))}
        </ol>
      </div>
    </section>
  );
}

/* ---------- Testimonials ---------- */
export function Testimonials() {
  return (
    <section className="bg-ink py-20 md:py-32">
      <div className="wrap">
        <Reveal>
          <div className="flex flex-wrap items-end justify-between gap-4">
            <h2 className="heading">Client reviews</h2>
            <span className="placeholder-tag text-mute">Placeholder quotes</span>
          </div>
        </Reveal>
        <div className="mt-14 grid gap-6 md:grid-cols-3">
          {testimonials.map((t, i) => (
            <Reveal key={i} delay={i * 0.07}>
              <figure className="flex h-full flex-col justify-between rounded-3xl bg-ink-2 p-8 transition-transform duration-300 ease-out-strong hover:-translate-y-1.5">
                <blockquote className="text-xl font-medium leading-snug">{t.quote}</blockquote>
                <figcaption className="mt-10 text-mute">
                  <span className="block font-semibold text-paper">{t.name}</span>
                  {t.role}
                </figcaption>
              </figure>
            </Reveal>
          ))}
        </div>
      </div>
    </section>
  );
}

/* ---------- PlanCards ---------- */
/* The price cards, one per plan in lib/site.ts. The "featured" plan is filled violet to stand out. */
export function PlanCards() {
  return (
    <div className="grid gap-6 md:grid-cols-2">
      {plans.map((plan, i) => (
        <Reveal key={plan.name} delay={i * 0.07}>
          <article
            className={`flex h-full flex-col rounded-3xl p-8 transition-transform duration-300 ease-out-strong hover:-translate-y-1.5 md:p-10 ${
              plan.featured ? "bg-violet text-paper" : "bg-ink text-paper"
            }`}
          >
            <div className="flex items-center justify-between gap-3">
              <h3 className="text-2xl">{plan.name}</h3>
              {plan.featured && <span className="rounded-full bg-lime px-3 py-1.5 text-xs font-semibold text-ink">Most popular</span>}
            </div>
            <p className="mt-8 text-5xl font-bold tracking-tighter">{plan.price}</p>
            <p className={`mt-3 ${plan.featured ? "text-paper/90" : "text-mute"}`}>{plan.who}</p>
            <ul className="mb-10 mt-8 space-y-3">
              {plan.features.map((f) => (
                <li key={f} className="flex gap-3">
                  <span className="mt-2 block size-2 shrink-0 rounded-full bg-lime" aria-hidden="true" />
                  {f}
                </li>
              ))}
            </ul>
            <Button href="/contact" variant={plan.featured ? "lime" : "ghost"} className="mt-auto w-full">
              Get a proposal
            </Button>
          </article>
        </Reveal>
      ))}
    </div>
  );
}

/* ---------- FaqList ---------- */
/* Uses the browser's built-in <details> element, so it opens and closes with
   no JavaScript and works with a keyboard out of the box. */
export function FaqList() {
  return (
    <div className="divide-y divide-ink/15 border-y border-ink/15">
      {faqs.map((f) => (
        <details key={f.q} className="group">
          <summary className="flex min-h-11 cursor-pointer list-none items-center justify-between gap-6 py-6 text-xl font-semibold tracking-tight md:text-2xl [&::-webkit-details-marker]:hidden">
            {f.q}
            <span aria-hidden="true" className="grid size-10 shrink-0 place-items-center rounded-full bg-ink text-2xl font-normal leading-none text-lime transition-transform duration-200 group-open:rotate-45">
              +
            </span>
          </summary>
          <p className="max-w-3xl pb-8 text-lg leading-relaxed text-mute-ink">{f.a}</p>
        </details>
      ))}
    </div>
  );
}

/* ---------- CtaBand ---------- */
export function CtaBand() {
  return (
    <section className="bg-lime py-20 text-ink md:py-32">
      <div className="wrap">
        <Reveal>
          <h2 className="display max-w-[12ch]">Need more booked jobs?</h2>
          <div className="mt-10 flex flex-wrap items-center gap-x-8 gap-y-5">
            <Button href="/contact" variant="ink" className="px-8 py-5 text-lg">
              Get a proposal
            </Button>
            <p className="max-w-xs font-medium">Fixed price, sent within one working day.</p>
          </div>
        </Reveal>
      </div>
    </section>
  );
}
