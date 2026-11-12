/*
  app/opengraph-image.tsx — SEO (server)
  Draws the preview picture shown when the site is shared on WhatsApp,
  LinkedIn, X and similar. Next.js turns this layout into a 1200x630 PNG at build time.
*/
import { ImageResponse } from "next/og";
import { site } from "@/lib/site";

export const alt = `${site.name}: websites that get London trades booked`;
export const size = { width: 1200, height: 630 };
export const contentType = "image/png";

export default function OpengraphImage() {
  return new ImageResponse(
    (
      <div style={{ width: "100%", height: "100%", display: "flex", flexDirection: "column", justifyContent: "space-between", background: "#0b0b0f", color: "#f5f5f0", padding: 72 }}>
        <div style={{ display: "flex", alignItems: "center", fontSize: 34, fontWeight: 700 }}>
          <div style={{ width: 22, height: 22, borderRadius: 22, background: "#c6ff3d", marginRight: 16 }} />
          {site.name}
        </div>
        <div style={{ display: "flex", flexWrap: "wrap", fontSize: 104, fontWeight: 700, lineHeight: 1, letterSpacing: -4 }}>
          Websites that get London trades <span style={{ color: "#c6ff3d", marginLeft: 24 }}>booked.</span>
        </div>
        <div style={{ display: "flex", height: 18, width: "100%", background: "#6c2bff", borderRadius: 18 }} />
      </div>
    ),
    size,
  );
}
