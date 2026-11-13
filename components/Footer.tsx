/*
  components/Footer.tsx — FRONTEND
  The bottom of every page: the studio name set very large, page links,
  and contact details. Contact details come from lib/site.ts and are placeholders.
*/
import Link from "next/link";
import { nav, site } from "@/lib/site";

export function Footer() {
  return (
    <footer className="border-t border-line bg-ink pb-8 pt-16 md:pt-24">
      <div className="wrap">
        <div className="grid gap-12 md:grid-cols-[1.4fr_1fr_1fr]">
          <div>
            <p className="max-w-sm text-2xl font-bold leading-tight tracking-tight md:text-3xl">
              Websites for London trades and local businesses.
            </p>
          </div>

          <nav aria-label="Footer">
            <h2 className="mb-4 text-sm font-medium tracking-normal text-mute">Pages</h2>
            <ul className="space-y-1">
              {[...nav, { label: "Contact", href: "/contact" }].map((item) => (
                <li key={item.href}>
                  <Link href={item.href} className="link-draw py-2 font-medium">
                    {item.label}
                  </Link>
                </li>
              ))}
            </ul>
          </nav>

          <div>
            <h2 className="mb-4 text-sm font-medium tracking-normal text-mute">
              Contact
            </h2>
            <ul className="space-y-1 font-medium">
              <li>
                <a href={`mailto:${site.email}`} className="link-draw py-2">
                  {site.email}
                </a>
              </li>
              {site.phone && <li className="py-2">{site.phone}</li>}
              <li className="py-2">{site.founder}, founder</li>
              <li className="py-2">London, UK</li>
            </ul>
          </div>
        </div>

        {/* The studio name as one huge line. Decorative, so hidden from screen readers. */}
        <p aria-hidden="true" className="mt-16 select-none whitespace-nowrap text-[13.5vw] font-bold leading-none tracking-[-0.06em] text-lime min-[1400px]:text-[11.8rem]">
          {site.name}
        </p>

        <p className="mt-6 text-sm text-mute">
          © {site.name}. Prices, projects and reviews on this site are placeholders.
        </p>
      </div>
    </footer>
  );
}
