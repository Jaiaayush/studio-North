/*
  app/sitemap.ts: SEO (server)
  Builds /sitemap.xml: the list of pages we want search engines to index.
  Add a new page's path to the list when you create one.
*/
import type { MetadataRoute } from "next";
import { site } from "@/lib/site";

export default function sitemap(): MetadataRoute.Sitemap {
  const pages = ["", "/services", "/work", "/pricing", "/about", "/contact", "/privacy", "/work/plumber", "/work/electrician", "/work/salon"];
  return pages.map((path) => ({
    url: `${site.url}${path}`,
    changeFrequency: "monthly",
    priority: path === "" ? 1 : 0.8,
  }));
}
