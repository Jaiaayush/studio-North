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
  url: "https://www.example.co.uk", // placeholder: your real domain goes here
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

/* Headline numbers. Bracketed values are placeholders: put your real numbers in. */
export const stats = [
  { value: "[00]", label: "projects delivered" },
  { value: "[0.0]", label: "average client rating" },
  { value: "1 day", label: "to get your proposal" },
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
      "Area pages and a tidy Google Business Profile, so you appear when people nearby search for your trade.",
    outcome: "Get found by people ready to book.",
    includes: [
      "Google Business Profile set-up",
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
      "We rebuild a slow or dated site and keep your domain, your content and your ranking.",
    outcome: "Turn more of your visitors into enquiries.",
    includes: [
      "Speed and mobile audit of your current site",
      "New design on your existing domain",
      "Old pages redirected so rankings hold",
      "Clear calls to action on every page",
    ],
  },
  {
    id: "care",
    number: "04",
    title: "Care and edits",
    summary:
      "Hosting, monthly checks and changes on request, so the site keeps earning after launch.",
    outcome: "Never run a stale site again.",
    includes: [
      "Fast, secure hosting",
      "Text and photo edits each month",
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
    text: "The site goes live on your domain, Google is set up, and you own all of it.",
  },
];

/* Work categories used by the filter buttons on the Work page. */
export const workCategories = ["All", "New website", "Redesign", "Local SEO"] as const;
export type WorkCategory = (typeof workCategories)[number];

/* PLACEHOLDER projects. None of these are real clients. Swap in real work when you have it. */
export const projects: {
  slug: string;
  title: string;
  category: Exclude<WorkCategory, "All">;
  result: string;
  look: "violet" | "lime" | "paper" | "ink";
}[] = [
  { slug: "plumber", title: "Plumbing site, Croydon", category: "New website", result: "[+00%] enquiries", look: "violet" },
  { slug: "electrician", title: "Electrician rebuild, Bromley", category: "Redesign", result: "[0.0s] load time", look: "lime" },
  { slug: "roofer", title: "Roofer area pages, Enfield", category: "Local SEO", result: "[Top 0] local ranking", look: "paper" },
  { slug: "salon", title: "Salon booking site, Hackney", category: "New website", result: "[+00] bookings a month", look: "lime" },
  { slug: "builder", title: "Builder rebuild, Ealing", category: "Redesign", result: "[+00%] enquiries", look: "ink" },
  { slug: "locksmith", title: "Locksmith area pages, Lewisham", category: "Local SEO", result: "[+00] calls a month", look: "violet" },
];

/* PLACEHOLDER testimonials. Replace with real quotes you have permission to use. */
export const testimonials = [
  { quote: "[Short client quote about the result and how easy the project was.]", name: "[Client name]", role: "[Trade], [Town]" },
  { quote: "[Short client quote that mentions a number, a deadline met or more calls.]", name: "[Client name]", role: "[Trade], [Town]" },
  { quote: "[Short client quote giving a reason to recommend you to another trade.]", name: "[Client name]", role: "[Trade], [Town]" },
];

/* PLACEHOLDER prices. Confirm every figure before launch. */
export const plans = [
  {
    name: "Starter",
    price: "from £900",
    who: "One strong page for a sole trader.",
    features: ["One-page site, mobile-first", "Tap-to-call and WhatsApp", "Google Business Profile set-up", "Live in about a week"],
    featured: false,
  },
  {
    name: "Growth",
    price: "from £2,400",
    who: "A multi-page site for an established local business.",
    features: ["Up to 6 pages", "Local SEO pages for your area", "Enquiry form to your inbox", "Reviews and case-study sections"],
    featured: true,
  },
  {
    name: "Lead Engine",
    price: "from £5,000",
    who: "For businesses that want a site built to generate leads.",
    features: ["Everything in Growth", "Landing pages per service and town", "Analytics and call tracking", "Ongoing optimisation"],
    featured: false,
  },
];

export const faqs = [
  { q: "How long does a website take?", a: "A one-page Starter site is usually live within a week of the deposit and your content. Larger sites take two to four weeks, depending on pages and photos." },
  { q: "Who owns the website?", a: "You do. The domain is registered in your name and, once the final invoice is paid, the files and words belong to you." },
  { q: "What about hosting?", a: "Hosting and a care plan are optional monthly extras. You can also take the files and host them anywhere you like." },
  { q: "Can I make edits after launch?", a: "Yes. Small text and photo edits are included for 30 days. The optional care plan covers changes every month after that." },
  { q: "Do you do SEO?", a: "Every site is built to be found locally: proper titles, descriptions, area pages and Google Business Profile set-up. Ongoing SEO comes with the Lead Engine plan." },
];

/* Budget options in the contact form. The backend only accepts values from this list. */
export const budgets = ["Under £1,000", "£1,000 to £3,000", "£3,000 to £8,000", "£8,000 or more", "Not sure yet"] as const;
