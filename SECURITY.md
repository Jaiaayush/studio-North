# Security

What protects this site today, what does not, and what you must do before it goes live.

## One thing to understand first

Frontend code (pages, components, animations) is downloaded by every visitor's browser. It cannot be hidden, on this site or any other. Security comes from keeping **secrets and decisions on the server**, and that is how this project is built.

## What is protected

| Protection | Where | What it stops |
| --- | --- | --- |
| No secrets in browser code | Checked in the built files | Keys being read from the page source |
| Secrets only in `.env.local` | `.gitignore` | Keys being uploaded to GitHub |
| Content Security Policy | `next.config.ts` | Scripts, frames and data loading from other websites |
| `X-Frame-Options: DENY` and `frame-ancestors 'none'` | `next.config.ts` | Your site being framed inside a fake page (clickjacking) |
| `X-Content-Type-Options: nosniff` | `next.config.ts` | Browsers guessing file types |
| `Referrer-Policy`, `Permissions-Policy` | `next.config.ts` | Leaking addresses, and use of camera, microphone, location |
| `Strict-Transport-Security` | `next.config.ts` | Visits over insecure HTTP (works once on a real HTTPS domain) |
| No `X-Powered-By` header | `next.config.ts` | Advertising which framework runs the site |
| No public source maps | `next.config.ts` | Readable copies of the original code |
| Server-side validation (Zod) | `lib/contact-schema.ts` | Bad, oversized or malicious form data |
| Same-site check | `app/api/contact/route.ts` | Other websites posting to your form |
| Rate limit, 5 per 10 minutes per IP | `lib/rate-limit.ts` | Form flooding |
| Honeypot field | `ContactForm.tsx` and `route.ts` | Simple spam robots |
| Size limit and JSON-only requests | `app/api/contact/route.ts` | Oversized or malformed requests |
| Plain-text email, line breaks stripped from subject | `app/api/contact/route.ts` | Code or extra headers injected into emails |
| Row Level Security, insert only | `supabase/migrations/` | Visitors reading, changing or deleting enquiries |
| Database length checks | `supabase/migrations/` | Oversized rows, even if someone skips the website |

## Tested

- Public key trying to read enquiries: blocked (401).
- Invalid data, bad JSON, wrong content type, oversized body: all rejected.
- Honeypot filled: accepted silently, nothing saved.
- Sixth request from one IP: blocked (429).
- Request from another website's origin: blocked (403).
- Built browser files searched for key names and server code: none found.
- Supabase security advisor: 0 warnings.
- `npm audit` on production dependencies: 0 vulnerabilities.

## Known limits (honest list)

1. **The Supabase publishable key is public, on purpose.** Anyone can use it to add rows to `enquiries` directly, skipping the website's rate limit and honeypot. They cannot read or delete anything, and the database caps field lengths. If spam rows become a problem, switch the server to a secret key and remove the public insert rule.
2. **The rate limit lives in server memory.** On hosts that run many copies of the app (Vercel and similar), each copy counts separately, and counts reset on restart. Use a shared store such as Upstash Redis for a firm limit.
3. **The rate limit trusts the `X-Forwarded-For` header.** This is correct behind a host that sets it (Vercel does). On a bare server, an attacker could fake it.
4. **The Content Security Policy allows inline scripts and styles** (`'unsafe-inline'`), because Next.js and the animation library need them. A stricter nonce-based policy is possible, but it makes every page render on demand instead of being prebuilt.
5. **7 moderate `npm audit` findings remain in development tools** (ESLint's `minimatch`). They are not part of the live site.
6. **No CAPTCHA.** The honeypot stops basic robots only.
7. **Your email address is public** on the site and in the GitHub repo. Expect some spam, or swap it for a business address in `lib/site.ts`.

## Before you go live

- [ ] Replace `https://www.example.co.uk` in `lib/site.ts` with your real domain.
- [ ] Add the two Supabase variables in your host's settings (or rely on `.env.production`).
- [ ] To receive emails: create a Resend account, verify your domain, then set `RESEND_API_KEY`, `CONTACT_TO_EMAIL` and `CONTACT_FROM_EMAIL` in the host's settings. Never put these in `.env.production`.
- [ ] Never put a Supabase `secret` or `service_role` key in any `NEXT_PUBLIC_` variable or in `.env.production`.
- [ ] Make sure the site is served over HTTPS.
- [ ] Add a privacy notice. The form collects names, emails and phone numbers, so UK GDPR applies.
- [ ] Delete the test rows in the `enquiries` table.
- [ ] Turn on two-factor sign-in for GitHub and Supabase.
- [ ] Run `npm audit` now and then, and update dependencies.
