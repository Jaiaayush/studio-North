/*
  app/work/page.tsx: FRONTEND (the Work page, address "/work")
  Shows every project with filter buttons. The grid itself is components/WorkGrid.tsx.
  The projects are concept work (invented businesses), listed in lib/site.ts.
*/
import type { Metadata } from "next";
import { CtaBand, PageHero } from "@/components/Sections";
import { WorkGrid } from "@/components/WorkGrid";

export const metadata: Metadata = {
  title: "Website projects for local businesses",
  description: "Examples of the kinds of websites, redesigns and local SEO projects we build for London trades.",
  alternates: { canonical: "/work" },
  openGraph: { title: "Website projects for local businesses", url: "/work" },
};

export default function WorkPage() {
  return (
    <>
      <PageHero
        label="Work"
        title="Sites built to win local jobs."
        highlight={["local", "jobs"]}
        lede="These are concept projects: full designs for invented businesses, made to show what we build. Open one to see the whole page. Real client work will join them here."
      />
      <section className="bg-ink pb-20 md:pb-32">
        <div className="wrap">
          <h2 className="sr-only">Projects</h2>
          <WorkGrid />
        </div>
      </section>
      <CtaBand />
    </>
  );
}
