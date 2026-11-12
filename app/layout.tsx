/*
  app/layout.tsx — FRONTEND (rendered on the server)
  The frame around every page. It:
  - loads the Poppins font,
  - sets the default SEO title, description and social-share tags,
  - adds the LocalBusiness data that helps Google understand the business,
  - puts the Header above and the Footer below whatever page is showing,
  - animates the change when you move from one page to another.
*/
import type { Metadata, Viewport } from "next";
import { Poppins } from "next/font/google";
import { ViewTransition } from "react";
import { Header } from "@/components/Header";
import { Footer } from "@/components/Footer";
import { MotionProvider } from "@/components/Motion";
import { site } from "@/lib/site";
import "./globals.css";

/* next/font downloads Poppins at build time and serves it from our own domain,
   so no request goes to Google when a visitor opens the site. */
const poppins = Poppins({
  subsets: ["latin"],
  weight: ["400", "500", "600", "700"],
  variable: "--font-poppins",
  display: "swap",
});

/* Default SEO tags. Each page adds its own title, which fills the %s below. */
export const metadata: Metadata = {
  metadataBase: new URL(site.url),
  title: {
    default: `${site.name} | Web design for London trades`,
    template: `%s | ${site.name}`,
  },
  description: site.description,
  openGraph: {
    type: "website",
    locale: "en_GB",
    siteName: site.name,
    title: `${site.name} | Web design for London trades`,
    description: site.description,
    url: "/",
  },
  twitter: { card: "summary_large_image" },
};

export const viewport: Viewport = { themeColor: "#0b0b0f" };

/* Structured data (JSON-LD) read by search engines. Values are placeholders from lib/site.ts. */
const localBusiness = {
  "@context": "https://schema.org",
  "@type": "LocalBusiness",
  "@id": `${site.url}/#business`,
  name: site.name,
  description: site.description,
  url: site.url,
  email: site.email,
  areaServed: site.area,
  address: { "@type": "PostalAddress", addressLocality: "London", addressCountry: "GB" },
  priceRange: "£££",
};

export default function RootLayout({ children }: { children: React.ReactNode }) {
  return (
    <html lang="en-GB" className={poppins.variable}>
      <body>
        <a href="#main" className="skip-link">
          Skip to content
        </a>
        {/* This script holds data only, never code, and is built from our own fixed values
            (no visitor input). The replace() stops "<" from ever closing the tag early. */}
        <script
          type="application/ld+json"
          dangerouslySetInnerHTML={{ __html: JSON.stringify(localBusiness).replace(/</g, "\\u003c") }}
        />
        <MotionProvider>
          <Header />
          {/* ViewTransition animates the swap between pages. The "page" class is styled in globals.css. */}
          <ViewTransition default="page">
            <main id="main">{children}</main>
          </ViewTransition>
          <Footer />
        </MotionProvider>
      </body>
    </html>
  );
}
