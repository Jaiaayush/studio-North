/*
  lib/site.ts: CONTENT (used by frontend pages)
  Every piece of text, price and link on the site lives in this one file.
  To change wording, prices, services or projects: edit here, save, and the pages update.

  IMPORTANT: anything written in [square brackets] or marked placeholder is NOT real.
  Replace it with your true details before the site goes live.
*/

/* Basic business details. All placeholders until you confirm them. */
export const site = {
  name: "Studio North",
  founder: "Jaiaayush Ghosh",
  tagline: "Websites that get London trades booked.",
  description:
    "A London web design studio for trades and local service businesses. Fast, easy-to-find websites that turn a search into a booked job.",
  url: "https://studio-north-ochre.vercel.app", // the live address. Swap for your own domain when you buy one
  email: "ghoshaayush89@gmail.com",
  phone: "", // not set yet: add your business number here and it appears on the site
  area: "London, United Kingdom",
};

/* Links shown in the header and footer. */
export const nav = [
  { label: "Services", href: "/services" },
  { label: "Work", href: "/work" },
  { label: "Pricing", href: "/pricing" },
  { label: "About", href: "/about" },
];

/* The scrolling strip of words under the hero. */
export const marqueeWords = [
  "New websites",
  "Local SEO",
  "Redesigns",
  "Care plans",
  "Google Business Profile",
  "Landing pages",
];

/* Three facts shown in the hero. Only put things here that are true today.
   When you have real numbers (projects delivered, review score), add them here. */
export const stats = [
  { value: "1 day", label: "to get your proposal" },
  { value: "Fixed", label: "price, agreed up front" },
  { value: "Yours", label: "to keep after the final invoice" },
];

export const services = [
  {
    id: "new-websites",
    number: "01",
    title: "New websites",
    summary:
      "A fast, mobile-first site built around your best jobs and the areas you cover.",
    outcome: "Look credible the moment someone lands.",
    includes: [
      "Design made for phones first",
      "Tap-to-call and WhatsApp buttons",
      "Pages for each service you offer",
      "Enquiry form sent straight to your inbox",
    ],
  },
  {
    id: "local-seo",
    number: "02",
    title: "Local SEO",
    summary:
      "Area pages and a tidy Google Business Profile, built to help you appear when people nearby search for your trade. No one can promise a ranking, so we do not.",
    outcome: "Easier to find for people ready to book.",
    includes: [
      "Google Business Profile set-up (Google verifies you directly)",
      "A page for each town you serve",
      "Titles and descriptions written for search",
      "Review request link for happy customers",
    ],
  },
  {
    id: "redesigns",
    number: "03",
    title: "Redesigns",
    summary:
      "We rebuild a slow or dated site on your existing domain, keep your content, and redirect old pages to protect your search position.",
    outcome: "Built to turn more visitors into enquiries.",
    includes: [
      "Speed and mobile audit of your current site",
      "New design on your existing domain",
      "Old pages redirected to the new ones",
      "Clear calls to action on every page",
    ],
  },
  {
    id: "care",
    number: "04",
    title: "Care and edits",
    summary:
      "An optional monthly plan: hosting, a monthly check and a set amount of edits, so the site stays current after launch.",
    outcome: "A site that stays up to date.",
    includes: [
      "Hosting included in the monthly price",
      "Up to one hour of text and photo edits each month",
      "Security and software updates",
      "A monthly check that forms still work",
    ],
  },
];

export const processSteps = [
  {
    title: "Proposal",
    text: "Tell us your trade, goal and budget. A fixed-price proposal reaches you within one working day.",
  },
  {
    title: "Plan",
    text: "A 20-minute call to agree the pages, your best jobs and the words that win work.",
  },
  {
    title: "Build",
    text: "We design and build, then send a live draft to review on your own phone.",
  },
  {
    title: "Launch",
    text: "The site goes live on your domain, your Google profile is submitted, and you own all of it.",
  },
];

/* Work categories used by the filter buttons on the Work page. */
export const workCategories = ["All", "Trades", "Salons"] as const;
export type WorkCategory = (typeof workCategories)[number];

/* CONCEPT projects. These are designs for invented businesses, made to show what
   we build. They are NOT real clients, and every card and page says so.
   Each one has its own page at /work/<slug> and a screenshot in public/work/.
   When you finish a real client site, add it here and set concept to false. */
export const projects: {
  slug: string;
  title: string;
  category: Exclude<WorkCategory, "All">;
  summary: string;
  image: string;
  concept: boolean;
}[] = [
  { slug: "plumber", title: "Harrow Lane Plumbing", category: "Trades", summary: "One-page site built around a big call button", image: "/work/plumber.png", concept: true },
  { slug: "electrician", title: "Voltline Electrical", category: "Trades", summary: "Bold dark site with a clear list of jobs", image: "/work/electrician.png", concept: true },
  { slug: "salon", title: "Maison Fern Hair", category: "Salons", summary: "Calm site with a full price list and hours", image: "/work/salon.png", concept: true },
];

/* PLACEHOLDER testimonials. Not shown anywhere on the site right now.
   Replace with real quotes you have permission to use, then add <Testimonials /> back to app/page.tsx. */
export const testimonials = [
  { quote: "[Short client quote about the result and how easy the project was.]", name: "[Client name]", role: "[Trade], [Town]" },
  { quote: "[Short client quote that mentions a number, a deadline met or more calls.]", name: "[Client name]", role: "[Trade], [Town]" },
  { quote: "[Short client quote giving a reason to recommend you to another trade.]", name: "[Client name]", role: "[Trade], [Town]" },
];

/* PRICES. These are the founding-client prices for the first 5 clients.
   Planned rise after 5 clients with reviews: Starter £750, Growth £1,500.
   A third "Lead Engine" plan was removed until there are finished jobs to back it up. */
export const plans = [
  {
    name: "Starter",
    price: "£450",
    who: "One strong page for a sole trader.",
    features: ["One-page site, mobile-first", "Tap-to-call and WhatsApp", "Google Business Profile set-up", "Live about a week after your content arrives"],
    featured: false,
  },
  {
    name: "Growth",
    price: "£950",
    who: "A multi-page site for an established local business.",
    features: ["Up to 6 pages", "Local SEO pages for your area", "Enquiry form to your inbox", "Space for your reviews and past jobs"],
    featured: true,
  },
];

/* The line that explains why the prices are low right now. Remove it, and raise
   the prices above, once the first 5 clients are signed. */
export const foundingOffer =
  "Founding client prices for our first 5 clients. In return we ask for an honest review and permission to show your site as an example.";

/* Price of the optional monthly care plan. */
export const carePlan = { price: "£35 a month", note: "Optional. Cancel with one month's notice." };

/* Costs that are NOT part of our price. Shown on the Pricing page so nothing is hidden. */
export const notIncluded = [
  { item: "Your domain name", detail: "Paid by you, straight to the registrar, and registered in your name. A .co.uk is usually around £10 to £20 a year." },
  { item: "Hosting after launch", detail: "Covered if you take the optional care plan. Otherwise you pay your own host, and we hand over the files." },
  { item: "Photography and paid images", detail: "We use your photos. A photographer or paid stock images cost extra, and only if you ask for them." },
  { item: "Advertising spend", detail: "Google Ads or social ads are paid by you to the platform. We do not run ads as part of these plans." },
  { item: "Paid third-party tools", detail: "Booking systems, call tracking numbers or paid plugins are billed to you by their makers. We tell you the cost before adding one." },
  { item: "Work outside the proposal", detail: "Extra pages or features are quoted in writing first. Nothing is added to an invoice without your yes." },
];

export const faqs = [
  { q: "How long does a website take?", a: "A one-page Starter site is usually live within a week of the deposit and your content. Larger sites take two to four weeks, depending on pages and photos." },
  { q: "Who owns the website?", a: "You do. The domain is registered in your name and, once the final invoice is paid, the files and words belong to you." },
  { q: "What about hosting?", a: "Hosting is not part of the build price. It comes with the optional monthly care plan, or you can take the files and host them anywhere you like." },
  { q: "Can I make edits after launch?", a: "Yes. Small text and photo edits are included for 30 days. The optional care plan covers up to one hour of changes every month after that." },
  { q: "Do you do SEO?", a: "Every site is built to be found locally: proper titles, descriptions, area pages and Google Business Profile set-up. We never promise a ranking, because Google decides that." },
  { q: "Are there any extra costs?", a: "Only the ones listed under 'Not included in our price' on this page: your domain, hosting after launch, and anything you choose to add, such as paid photos or adverts. We quote any extra work in writing before doing it." },
  { q: "How do payments work?", a: "A deposit starts the project and the balance is due before the site goes live. Your proposal states both amounts." },
];

/* Budget options in the contact form. The backend only accepts values from this list. */
export const budgets = ["Under £500", "£500 to £1,000", "£1,000 to £2,000", "£2,000 or more", "Not sure yet"] as const;
