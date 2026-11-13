/*
  app/work/plumber/page.tsx: FRONTEND (concept site, address "/work/plumber")
  A full one-page website design for an INVENTED plumber, "Harrow Lane Plumbing".
  It shows a prospect what we would build for a trade that lives on phone calls.
  Not a real client. The phone number is from the range Ofcom reserves for
  TV and film, so it can never reach a real person.
  Look: white, deep blue and orange. Layout: split hero with a call panel.
*/
import type { Metadata } from "next";
import { ConceptBar, ConceptOutro } from "@/components/Sections";

export const metadata: Metadata = {
  title: "Concept: plumber website design",
  description: "A concept one-page website for an invented London plumber, designed by Studio North around a single call button.",
  alternates: { canonical: "/work/plumber" },
  openGraph: { title: "Concept: plumber website design", url: "/work/plumber" },
};

const PHONE = "020 7946 0143"; // fictional number (Ofcom drama range)

const jobs = [
  { title: "Leaks and burst pipes", text: "Found, fixed and tested before we leave." },
  { title: "Boiler repairs", text: "Fault finding and repair on most common boilers." },
  { title: "Blocked drains", text: "Sinks, toilets and outside drains cleared." },
  { title: "Bathroom fitting", text: "Taps, toilets, showers and full refits." },
  { title: "Radiators", text: "New radiators, bleeding, balancing and valves." },
  { title: "Landlord jobs", text: "Planned repairs with photos sent to you after." },
];

const areas = ["Harrow", "Wembley", "Pinner", "Ruislip", "Northolt", "Stanmore"];

const steps = [
  { n: "1", title: "Call or message", text: "Tell us what is wrong. A photo helps." },
  { n: "2", title: "Get a price", text: "A fixed price for the job, before we set off." },
  { n: "3", title: "Job done", text: "We fix it, tidy up and show you the work." },
];

export default function PlumberConcept() {
  return (
    <>
      <ConceptBar name="Harrow Lane Plumbing" />

      <div id="shot" className="bg-white text-[#0B1B33]">
        {/* The concept's own header */}
        <div className="border-b border-[#0B3D91]/15">
          <div className="wrap flex items-center justify-between gap-4 py-5">
            <p className="text-xl font-bold tracking-tight text-[#0B3D91]">Harrow Lane Plumbing</p>
            <nav aria-label="Concept page sections" className="hidden gap-8 font-medium sm:flex">
              <a href="#jobs" className="link-draw">Jobs</a>
              <a href="#areas" className="link-draw">Areas</a>
              <a href="#how" className="link-draw">How it works</a>
            </nav>
          </div>
        </div>

        {/* HERO: headline on the left, a call panel on the right */}
        <section className="wrap grid gap-10 py-14 lg:grid-cols-[1.3fr_1fr] lg:items-center lg:py-24">
          <div>
            <p className="inline-block rounded-full bg-[#FF6B1A] px-4 py-2 text-sm font-semibold text-[#0B0B0F]">Open today until 8pm</p>
            <h1 className="mt-6 text-[clamp(2.5rem,7vw,5.5rem)] font-bold leading-[0.98] tracking-[-0.04em] text-[#0B3D91]">
              A plumber in Harrow who turns up on time.
            </h1>
            <p className="mt-6 max-w-xl text-xl leading-relaxed text-[#3D4A5F]">
              Leaks, boilers, drains and bathrooms. You get a fixed price before we start, and the job is tidied before we go.
            </p>
            <a href="#jobs" className="btn mt-8 bg-[#0B3D91] text-white [--btn-hover:#0B1B33]">
              See what we fix
            </a>
          </div>

          <div className="rounded-3xl bg-[#0B3D91] p-8 text-white md:p-10">
            <p className="font-medium text-white/85">Call or WhatsApp</p>
            <p className="mt-2 text-4xl font-bold tracking-tight md:text-5xl">{PHONE}</p>
            <ul className="mt-8 space-y-4 border-t border-white/25 pt-6 text-lg">
              <li className="flex justify-between gap-4"><span>Monday to Friday</span><span className="font-semibold">7am to 8pm</span></li>
              <li className="flex justify-between gap-4"><span>Saturday</span><span className="font-semibold">8am to 5pm</span></li>
              <li className="flex justify-between gap-4"><span>Sunday</span><span className="font-semibold">Emergencies</span></li>
            </ul>
          </div>
        </section>

        {/* JOBS: six cards in a grid */}
        <section id="jobs" className="scroll-mt-24 bg-[#F1F5FB] py-16 md:py-24">
          <div className="wrap">
            <h2 className="text-4xl text-[#0B3D91] md:text-6xl">What we fix</h2>
            <div className="mt-10 grid gap-5 sm:grid-cols-2 lg:grid-cols-3">
              {jobs.map((j) => (
                <article key={j.title} className="rounded-2xl bg-white p-7 transition-transform duration-300 ease-out-strong hover:-translate-y-1">
                  <span className="block h-1.5 w-12 rounded-full bg-[#FF6B1A]" aria-hidden="true" />
                  <h3 className="mt-5 text-2xl">{j.title}</h3>
                  <p className="mt-2 text-lg text-[#3D4A5F]">{j.text}</p>
                </article>
              ))}
            </div>
          </div>
        </section>

        {/* AREAS */}
        <section id="areas" className="scroll-mt-24 py-16 md:py-24">
          <div className="wrap grid gap-8 lg:grid-cols-[1fr_1.4fr] lg:items-center">
            <h2 className="text-4xl text-[#0B3D91] md:text-6xl">Areas we cover</h2>
            <ul className="flex flex-wrap gap-3">
              {areas.map((a) => (
                <li key={a} className="rounded-full border-2 border-[#0B3D91] px-6 py-3 text-lg font-semibold text-[#0B3D91]">{a}</li>
              ))}
            </ul>
          </div>
        </section>

        {/* HOW IT WORKS: orange band */}
        <section id="how" className="scroll-mt-24 bg-[#FF6B1A] py-16 text-[#0B0B0F] md:py-24">
          <div className="wrap">
            <h2 className="text-4xl md:text-6xl">Three steps, no surprises</h2>
            <ol className="mt-10 grid gap-8 md:grid-cols-3">
              {steps.map((s) => (
                <li key={s.n}>
                  <span className="grid size-14 place-items-center rounded-full bg-[#0B0B0F] text-2xl font-bold text-white">{s.n}</span>
                  <h3 className="mt-5 text-2xl">{s.title}</h3>
                  <p className="mt-2 text-lg">{s.text}</p>
                </li>
              ))}
            </ol>
          </div>
        </section>

        {/* CLOSING CALL BAND */}
        <section className="bg-[#0B3D91] py-16 text-white md:py-20">
          <div className="wrap flex flex-wrap items-center justify-between gap-6">
            <h2 className="text-4xl md:text-5xl">Got a leak right now?</h2>
            <p className="text-4xl font-bold tracking-tight md:text-5xl">{PHONE}</p>
          </div>
        </section>
      </div>

      <ConceptOutro />
    </>
  );
}
