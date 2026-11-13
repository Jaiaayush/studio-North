/*
  app/work/electrician/page.tsx: FRONTEND (concept site, address "/work/electrician")
  A full one-page website design for an INVENTED electrician, "Voltline Electrical".
  Not a real client. The phone number is from the range Ofcom reserves for
  TV and film. No real accreditation logos are shown, because the business is invented.
  Look: black and signal yellow. Layout: centred giant type and a numbered job list.
*/
import type { Metadata } from "next";
import { ConceptBar, ConceptOutro } from "@/components/Sections";

export const metadata: Metadata = {
  title: "Concept: electrician website design",
  description: "A concept one-page website for an invented London electrician, designed by Studio North with bold type and a clear list of jobs.",
  alternates: { canonical: "/work/electrician" },
  openGraph: { title: "Concept: electrician website design", url: "/work/electrician" },
};

const PHONE = "020 7946 0871"; // fictional number (Ofcom drama range)

const jobs = [
  { title: "Fuse board upgrades", text: "Old boards replaced with modern, safer units." },
  { title: "Full and part rewires", text: "Planned room by room so you can stay at home." },
  { title: "Safety reports (EICR)", text: "For landlords and home buyers, with a clear written report." },
  { title: "EV charger fitting", text: "Home chargers fitted and tested." },
  { title: "Lights and sockets", text: "Extra sockets, downlights and outdoor lighting." },
  { title: "Fault finding", text: "Tripping power traced and repaired." },
];

const facts = [
  { big: "Fixed", small: "price before work starts" },
  { big: "Tested", small: "and certified on completion" },
  { big: "Tidy", small: "dust sheets down, mess cleared" },
];

export default function ElectricianConcept() {
  return (
    <>
      <ConceptBar name="Voltline Electrical" />

      <div id="shot" className="bg-[#111111] text-white">
        {/* HERO: everything centred, one huge line */}
        <section className="wrap py-16 text-center md:py-28">
          <p className="text-lg font-semibold uppercase tracking-[0.2em] text-[#FFD60A]">Voltline Electrical</p>
          <h1 className="mx-auto mt-6 max-w-[11ch] text-[clamp(3rem,11vw,9rem)] font-bold leading-[0.9] tracking-[-0.05em]">
            Safe power, <span className="text-[#FFD60A]">done right.</span>
          </h1>
          <p className="mx-auto mt-8 max-w-xl text-xl leading-relaxed text-white/80">
            Domestic electricians for South London homes and landlords. Every job is tested and certified when we finish.
          </p>
          <div className="mt-10 flex flex-wrap items-center justify-center gap-5">
            <a href="#jobs" className="btn bg-[#FFD60A] text-[#111111] [--btn-hover:#ffffff]">
              See our jobs
            </a>
            <p className="text-2xl font-bold tracking-tight">{PHONE}</p>
          </div>
        </section>

        {/* FACT STRIP: yellow band */}
        <section className="bg-[#FFD60A] py-10 text-[#111111]">
          <ul className="wrap grid gap-8 sm:grid-cols-3">
            {facts.map((f) => (
              <li key={f.big}>
                <p className="text-5xl font-bold tracking-tighter">{f.big}</p>
                <p className="mt-1 text-lg font-medium">{f.small}</p>
              </li>
            ))}
          </ul>
        </section>

        {/* JOBS: a numbered list, not cards */}
        <section id="jobs" className="scroll-mt-24 py-16 md:py-28">
          <div className="wrap">
            <h2 className="text-4xl md:text-7xl">Jobs we take on</h2>
            <ol className="mt-12 border-t border-white/20">
              {jobs.map((j, i) => (
                <li key={j.title} className="group grid gap-2 border-b border-white/20 py-7 md:grid-cols-[5rem_1fr_1.3fr] md:items-baseline md:gap-8">
                  <span className="text-xl font-bold text-[#FFD60A]">0{i + 1}</span>
                  <h3 className="text-2xl transition-transform duration-300 ease-out-strong group-hover:translate-x-2 md:text-4xl">{j.title}</h3>
                  <p className="text-lg text-white/75">{j.text}</p>
                </li>
              ))}
            </ol>
          </div>
        </section>

        {/* ACCREDITATION: honest empty slots */}
        <section className="pb-16 md:pb-28">
          <div className="wrap rounded-3xl border border-white/20 p-8 md:p-12">
            <h2 className="text-3xl md:text-5xl">Checked and insured</h2>
            <p className="mt-4 max-w-2xl text-lg text-white/75">
              On a real client site, this block shows the electrician&apos;s own registration body, insurance cover and certificate numbers, so customers can check them.
            </p>
            <ul className="mt-8 grid gap-4 sm:grid-cols-3">
              {["Registration body", "Public liability cover", "Certificate number"].map((slot) => (
                <li key={slot} className="rounded-2xl bg-white/10 px-6 py-5 text-lg font-semibold">{slot}</li>
              ))}
            </ul>
          </div>
        </section>

        {/* CLOSING BAND */}
        <section className="border-t border-white/20 py-16 text-center md:py-24">
          <div className="wrap">
            <h2 className="text-4xl md:text-6xl">Need an electrician this week?</h2>
            <p className="mt-6 text-5xl font-bold tracking-tight text-[#FFD60A] md:text-7xl">{PHONE}</p>
          </div>
        </section>
      </div>

      <ConceptOutro />
    </>
  );
}
