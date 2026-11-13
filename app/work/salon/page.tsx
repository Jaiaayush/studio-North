/*
  app/work/salon/page.tsx: FRONTEND (concept site, address "/work/salon")
  A full one-page website design for an INVENTED hair salon, "Maison Fern Hair".
  Not a real client. Prices and hours are examples of how a real salon's would look.
  The phone number is from the range Ofcom reserves for TV and film.
  Look: cream, deep green and blush. Layout: calm, with a full price list.
*/
import type { Metadata } from "next";
import { ConceptBar, ConceptOutro } from "@/components/Sections";

export const metadata: Metadata = {
  title: "Concept: hair salon website design",
  description: "A concept one-page website for an invented London hair salon, designed by Studio North with a full price list and opening hours.",
  alternates: { canonical: "/work/salon" },
  openGraph: { title: "Concept: hair salon website design", url: "/work/salon" },
};

const PHONE = "020 7946 0512"; // fictional number (Ofcom drama range)

/* Example price list. Each group is one column on the page. */
const menu = [
  {
    group: "Cut and style",
    items: [
      { name: "Cut and blow-dry", price: "£48" },
      { name: "Restyle", price: "£58" },
      { name: "Fringe trim", price: "£8" },
      { name: "Blow-dry", price: "£30" },
    ],
  },
  {
    group: "Colour",
    items: [
      { name: "Root tint", price: "£55" },
      { name: "Full head colour", price: "£75" },
      { name: "Half head highlights", price: "£90" },
      { name: "Balayage", price: "from £130" },
    ],
  },
  {
    group: "Care",
    items: [
      { name: "Deep conditioning", price: "£20" },
      { name: "Scalp treatment", price: "£25" },
      { name: "Gloss and tone", price: "£35" },
      { name: "Bridal trial", price: "£60" },
    ],
  },
];

const hours = [
  { day: "Monday", time: "Closed" },
  { day: "Tuesday to Friday", time: "9am to 7pm" },
  { day: "Saturday", time: "9am to 6pm" },
  { day: "Sunday", time: "10am to 4pm" },
];

export default function SalonConcept() {
  return (
    <>
      <ConceptBar name="Maison Fern Hair" />

      <div id="shot" className="bg-[#F6EFE7] text-[#1F3A2E]">
        {/* HERO: name set large, with a tall blush panel beside it */}
        <section className="wrap grid gap-10 py-14 lg:grid-cols-[1.5fr_1fr] lg:py-24">
          <div className="flex flex-col justify-between gap-10">
            <p className="text-lg font-medium">Hair salon, Stoke Newington</p>
            <div>
              <h1 className="text-[clamp(3rem,10vw,8.5rem)] font-bold leading-[0.88] tracking-[-0.05em]">
                Maison
                <br />
                Fern Hair
              </h1>
              <p className="mt-8 max-w-lg text-xl leading-relaxed text-[#3F5A4C]">
                Cuts and colour in a quiet room off Church Street. Every price is listed below, so you know the cost before you sit down.
              </p>
              <a href="#prices" className="btn mt-8 bg-[#1F3A2E] text-[#F6EFE7] [--btn-hover:#3F5A4C]">
                See the price list
              </a>
            </div>
          </div>

          {/* Blush panel: opening hours */}
          <div className="rounded-[2.5rem] bg-[#E8B4A0] p-8 md:p-10">
            <h2 className="text-3xl">Opening hours</h2>
            <ul className="mt-6 divide-y divide-[#1F3A2E]/25 text-lg">
              {hours.map((h) => (
                <li key={h.day} className="flex justify-between gap-4 py-4">
                  <span>{h.day}</span>
                  <span className="font-semibold">{h.time}</span>
                </li>
              ))}
            </ul>
            <p className="mt-6 text-lg">Book by phone</p>
            <p className="text-3xl font-bold tracking-tight">{PHONE}</p>
          </div>
        </section>

        {/* PRICE LIST: green section, three columns */}
        <section id="prices" className="scroll-mt-24 bg-[#1F3A2E] py-16 text-[#F6EFE7] md:py-28">
          <div className="wrap">
            <div className="flex flex-wrap items-end justify-between gap-4">
              <h2 className="text-5xl md:text-7xl">Price list</h2>
              <p className="max-w-xs text-lg text-[#F6EFE7]/80">Example prices. Long or thick hair may cost a little more, and we say so first.</p>
            </div>
            <div className="mt-12 grid gap-12 lg:grid-cols-3">
              {menu.map((m) => (
                <div key={m.group}>
                  <h3 className="text-2xl text-[#E8B4A0]">{m.group}</h3>
                  <ul className="mt-4 border-t border-[#F6EFE7]/25">
                    {m.items.map((item) => (
                      <li key={item.name} className="flex items-baseline justify-between gap-4 border-b border-[#F6EFE7]/25 py-4 text-lg">
                        <span>{item.name}</span>
                        <span className="font-semibold">{item.price}</span>
                      </li>
                    ))}
                  </ul>
                </div>
              ))}
            </div>
          </div>
        </section>

        {/* THREE PROMISES */}
        <section className="py-16 md:py-28">
          <div className="wrap grid gap-10 md:grid-cols-3">
            {[
              { title: "A proper consultation", text: "Ten minutes to talk before any scissors come out." },
              { title: "Honest colour advice", text: "If a shade will not suit your hair, we tell you and suggest one that will." },
              { title: "No rush", text: "One client per stylist at a time, so your slot is yours." },
            ].map((p) => (
              <article key={p.title} className="border-t-2 border-[#1F3A2E] pt-6">
                <h3 className="text-3xl">{p.title}</h3>
                <p className="mt-3 text-lg leading-relaxed text-[#3F5A4C]">{p.text}</p>
              </article>
            ))}
          </div>
        </section>

        {/* CLOSING BAND */}
        <section className="bg-[#E8B4A0] py-16 md:py-24">
          <div className="wrap flex flex-wrap items-end justify-between gap-6">
            <h2 className="max-w-[12ch] text-5xl md:text-7xl">Book your chair</h2>
            <p className="text-4xl font-bold tracking-tight md:text-5xl">{PHONE}</p>
          </div>
        </section>
      </div>

      <ConceptOutro />
    </>
  );
}
