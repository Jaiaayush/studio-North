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
    "Websites for London plumbers, electricians, salons and other local businesses. Clear prices, quick to build, easy for customers to find and call you.",
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
  "Found on Google",
  "Website makeovers",
  "Monthly care",
  "Call buttons",
  "Fixed prices",
];

/* Three facts shown in the hero. Only put things here that are true today.
   When you have real numbers (projects delivered, review score), add them here. */
export const stats = [
  { value: "1 day", label: "to get your price" },
  { value: "Fixed", label: "price, agreed before we start" },
  { value: "Yours", label: "to keep once it is paid for" },
];

export const services = [
  {
    id: "new-websites",
    number: "01",
    title: "New websites",
    summary:
      "A new website that loads fast, looks good on a phone, and shows your best jobs and the areas you work in.",
    outcome: "Customers trust you the moment they see it.",
    includes: [
      "Made to look right on a phone",
      "Buttons to call or WhatsApp you in one tap",
      "A page for each service you offer",
      "A contact form that sends messages to your email",
    ],
  },
  {
    id: "local-seo",
    number: "02",
    title: "Get found on Google",
    summary:
      "We set up your Google listing and add a page for each area you cover, so people nearby can find you. Nobody can promise the top spot on Google, so we do not.",
    outcome: "Easier to find when people search for your trade.",
    includes: [
      "Your Google listing set up (Google checks it is really you)",
      "A page for each town you work in",
      "Page titles written the way people search",
      "A link you can send customers to leave a review",
    ],
  },
  {
    id: "redesigns",
    number: "03",
    title: "Website makeovers",
    summary:
      "Got a slow or old-looking website? We rebuild it at the same web address, keep your words and photos, and point your old links to the new pages.",
    outcome: "A fresh site without losing what you had.",
    includes: [
      "A check of your current site for speed and phone problems",
      "A new look at your same web address",
      "Old links sent to the new pages",
      "A clear call or contact button on every page",
    ],
  },
  {
    id: "care",
    number: "04",
    title: "Monthly care",
    summary:
      "An optional monthly plan. We keep your site online, check it each month, and make small changes when you ask.",
    outcome: "Your site stays working and up to date.",
    includes: [
      "Keeping your site online (hosting) is included",
      "Up to one hour of text and photo changes each month",
      "Safety updates done for you",
      "A monthly check that your contact form still works",
    ],
  },
];

export const processSteps = [
  {
    title: "Get a price",
    text: "Tell us your trade and what you need. We send you a fixed price within one working day.",
  },
  {
    title: "Quick call",
    text: "A 20-minute call to agree which pages you need and what to say on them.",
  },
  {
    title: "We build it",
    text: "We build the site and send you a link, so you can look at it on your own phone.",
  },
  {
    title: "Go live",
    text: "Your site goes online at your web address, we send your details to Google, and the site is yours.",
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

/* PRICES. Set in November 2026, a little under what UK trade web designers publish:
   - One-page sites elsewhere: about £600 to £650. Ours: £575.
   - Sites of about five pages elsewhere: about £995 to £1,250. Ours: £895.
   - Monthly care elsewhere: about £40 to £60. Ours: £35.
   Check competitors again every few months and adjust.
   A third "Lead Engine" plan was removed until there are finished jobs to back it up. */
export const plans = [
  {
    name: "Starter",
    price: "£575",
    who: "One page. Right for a one-person business.",
    features: ["One page that looks right on a phone", "Call and WhatsApp buttons", "Your Google listing set up", "Online about a week after you send your words and photos"],
    featured: false,
  },
  {
    name: "Growth",
    price: "£895",
    who: "Up to 6 pages. Right for a busy local business.",
    features: ["Up to 6 pages", "A page for each area you cover", "A contact form that emails you", "Space for your reviews and past jobs"],
    featured: true,
  },
];

/* The line shown beside the prices. Remove it once the first 5 clients are signed. */
export const foundingOffer =
  "Special prices for our first 5 customers. In return, we ask for an honest review and your OK to show your site as an example.";

/* Price of the optional monthly care plan. */
export const carePlan = { price: "£35 a month", note: "You choose if you want it. Stop any time with one month's notice." };

/* Costs that are NOT part of our price. Shown on the Pricing page so nothing is hidden. */
export const notIncluded = [
  { item: "Your web address", detail: "This is the name people type, like yourbusiness.co.uk. You pay the seller directly and it is in your name. A .co.uk is usually around £10 to £20 a year." },
  { item: "Keeping the site online", detail: "This is called hosting. It is covered if you take the monthly care plan. If not, you pay a hosting company yourself and we give you the files." },
  { item: "Photos", detail: "We use the photos you send us. A photographer or paid photos cost extra, and only if you ask for them." },
  { item: "Adverts", detail: "Google or Facebook adverts are paid by you to those companies. We do not run adverts as part of these plans." },
  { item: "Extra paid tools", detail: "Things like online booking systems are billed to you by the company that makes them. We tell you the cost before adding one." },
  { item: "Extra work", detail: "Want more pages or features later? We give you a price in writing first. Nothing is added to your bill unless you say yes." },
];

export const faqs = [
  { q: "How long does a website take?", a: "A one-page Starter site is usually online within a week of your first payment and your words and photos. Bigger sites take two to four weeks." },
  { q: "Who owns the website?", a: "You do. Your web address is in your name. Once the last bill is paid, the website and everything on it is yours." },
  { q: "What is hosting, and do I pay for it?", a: "Hosting keeps your site online. It is not part of the build price. You get it with the monthly care plan, or you can take the files and use any hosting company you like." },
  { q: "Can I change things after the site is online?", a: "Yes. Small text and photo changes are free for 30 days. After that, the monthly care plan covers up to one hour of changes each month." },
  { q: "Will I be top of Google?", a: "We build every site so Google can find it: clear page titles, a page for each area, and your Google listing set up. We never promise the top spot, because Google decides that, not us." },
  { q: "Are there any extra costs?", a: "Only the ones in the 'Not included in our price' list on this page: your web address, keeping the site online, and anything you choose to add, like paid photos or adverts. We price any extra work in writing before doing it." },
  { q: "How do I pay?", a: "You pay half to start. You pay the other half when you are happy with the site, before it goes online. Both amounts are written in your price." },
];

/* Budget options in the contact form. The backend only accepts values from this list. */
export const budgets = ["Under £500", "£500 to £1,000", "£1,000 to £2,000", "£2,000 or more", "Not sure yet"] as const;
