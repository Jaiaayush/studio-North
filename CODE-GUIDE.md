# Code guide

A plain-English map of this project. Every code file also starts with a comment that says what it does.

## How the site works in one minute

1. A visitor opens a page. **Frontend** code draws it: layout, text, colours, animation.
2. The visitor fills in the contact form. The browser sends the answers to `/api/contact`.
3. **Backend** code on the server checks the answers, blocks spam, saves the enquiry in the **Supabase database**, and (if set up) emails it to you.
4. The visitor lands on the thank-you page.

Frontend runs in the visitor's browser, so anyone can read it. Backend runs only on the server, so visitors never see it. Secrets belong in the backend only.

## Run it

| Command | What it does |
| --- | --- |
| `npm run dev` | Starts the site at http://localhost:3000 and reloads when you save a file |
| `npm run build` | Builds the fast production version and reports any errors |
| `npm run start` | Runs the production version after a build |
| `npm run lint` | Checks the code for mistakes |

## Quick edits

| I want to change... | Edit this |
| --- | --- |
| Any wording, services, FAQs | `lib/site.ts` |
| Prices and plans | `plans` and `carePlan` in `lib/site.ts` |
| The "Not included in our price" list | `notIncluded` in `lib/site.ts` |
| Privacy notice wording | `sections` in `app/privacy/page.tsx` |
| Projects on the Work page | `projects` in `lib/site.ts` |
| Reviews | `testimonials` in `lib/site.ts` |
| Name, email, phone | `site` at the top of `lib/site.ts` |
| Colours | Section 1 of `app/globals.css` (the `--color-...` lines) |
| Font | `Poppins` in `app/layout.tsx` |
| Button style | `.btn` in `app/globals.css` |
| Images | No photos are used yet. Project pictures are drawn in code by `ProjectVisual` in `components/Sections.tsx`. To use real images, put files in `public/` and swap `ProjectVisual` for the Next.js `<Image>` component with `alt` text |
| Form fields | `components/ContactForm.tsx` (the boxes) and `lib/contact-schema.ts` (the rules). A new field also needs a new column in the database |
| Header and footer links | `nav` in `lib/site.ts` |

## Every file

### Pages (`app/`): frontend

| File | Side | What it does |
| --- | --- | --- |
| `app/layout.tsx` | Frontend | Frame around every page: font, header, footer, default SEO tags, LocalBusiness data |
| `app/template.tsx` | Frontend | Plays the fade-in when you move between pages |
| `app/globals.css` | Frontend | All colours, the font setup, buttons, marquee and page animation |
| `app/page.tsx` | Frontend | Home page |
| `app/services/page.tsx` | Frontend | Services page |
| `app/work/page.tsx` | Frontend | Work page |
| `app/about/page.tsx` | Frontend | About page, including the founder block |
| `app/pricing/page.tsx` | Frontend | Pricing page with plans and FAQs |
| `app/contact/page.tsx` | Frontend | Contact page that holds the form |
| `app/privacy/page.tsx` | Frontend | Privacy notice: what the form collects and why |
| `app/thank-you/page.tsx` | Frontend | Confirmation page after the form is sent |
| `app/not-found.tsx` | Frontend | Custom 404 page |
| `app/icon.svg` | Frontend | The small icon in the browser tab |

### Reusable pieces (`components/`): frontend

| File | Side | What it does |
| --- | --- | --- |
| `components/Header.tsx` | Frontend | Top bar, page links, phone menu |
| `components/Footer.tsx` | Frontend | Bottom of every page |
| `components/Button.tsx` | Frontend | The pill button with the arrow |
| `components/Motion.tsx` | Frontend | Animations: scroll reveal and the rising headline |
| `components/Sections.tsx` | Frontend | Shared blocks: page hero, marquee, project cards, process, reviews, price cards, FAQ, call-to-action band |
| `components/WorkGrid.tsx` | Frontend | Project grid with the filter buttons |
| `components/ContactForm.tsx` | Frontend | The form. Sends data to the backend and shows errors |

### Backend

| File | Side | What it does |
| --- | --- | --- |
| `app/api/contact/route.ts` | Backend | Receives the form: same-site check, rate limit, validation, honeypot, save to Supabase, optional email |
| `lib/contact-schema.ts` | Backend | The rules each form field must pass (Zod) |
| `lib/rate-limit.ts` | Backend | Limits each visitor to 5 enquiries per 10 minutes |
| `lib/supabase/server.ts` | Backend | Opens the connection to the Supabase database |
| `supabase/migrations/*.sql` | Database | The SQL that created the `enquiries` table and its access rules |

### Content, SEO and settings

| File | Side | What it does |
| --- | --- | --- |
| `lib/site.ts` | Content | Every word, price and link on the site |
| `app/sitemap.ts` | SEO | Builds `/sitemap.xml` for search engines |
| `app/robots.ts` | SEO | Builds `/robots.txt` |
| `app/opengraph-image.tsx` | SEO | Draws the preview picture for social sharing |
| `next.config.ts` | Settings | Security headers and Next.js options |
| `.env.local` | Settings | Your private values on this computer. Never uploaded |
| `.env.production` | Settings | Public values for the live site. Uploaded to GitHub, so no secrets here |
| `.env.example` | Settings | Empty template that lists every variable |
| `package.json` | Settings | The list of libraries the project uses |
| `tsconfig.json`, `eslint.config.mjs` | Settings | TypeScript and lint settings. Rarely touched |
| `AGENTS.md` | Settings | Written by Next.js for AI coding tools. Leave it |

## Where enquiries go

Open the Supabase dashboard, choose the **Studio North** project, then **Table Editor**, then **enquiries**. Each row is one form submission.
