/*
  next.config.ts — CONFIGURATION (server)
  Settings for the whole app. The important part is SECURITY HEADERS:
  instructions sent with every page that tell the browser what it must refuse to do.
*/
import type { NextConfig } from "next";

const isDev = process.env.NODE_ENV === "development";

/* CONTENT SECURITY POLICY: the list of places the browser may load things from.
   'self' means "only our own website". Anything not listed is blocked, so a script
   injected from another site cannot run and data cannot be sent elsewhere.
   - 'unsafe-inline' is needed because Next.js and the animation library write small
     inline scripts/styles. SECURITY.md explains the stricter "nonce" upgrade.
   - 'unsafe-eval' and ws: are added in development only (hot reload needs them). */
const csp = [
  "default-src 'self'",
  `script-src 'self' 'unsafe-inline'${isDev ? " 'unsafe-eval'" : ""}`,
  "style-src 'self' 'unsafe-inline'",
  "img-src 'self' data: blob:",
  "font-src 'self'",
  `connect-src 'self'${isDev ? " ws:" : ""}`,
  "object-src 'none'", // no Flash or other plugins
  "base-uri 'self'",
  "form-action 'self'", // forms may only post to our own site
  "frame-ancestors 'none'", // nobody may embed this site in a frame
  ...(isDev ? [] : ["upgrade-insecure-requests"]),
].join("; ");

const securityHeaders = [
  { key: "Content-Security-Policy", value: csp },
  { key: "X-Frame-Options", value: "DENY" }, // blocks clickjacking in older browsers
  { key: "X-Content-Type-Options", value: "nosniff" }, // browser must not guess file types
  { key: "Referrer-Policy", value: "strict-origin-when-cross-origin" },
  { key: "Permissions-Policy", value: "camera=(), microphone=(), geolocation=(), payment=(), usb=(), browsing-topics=()" },
  /* Always use HTTPS for the next two years. Only takes effect on a real HTTPS domain. */
  { key: "Strict-Transport-Security", value: "max-age=63072000; includeSubDomains; preload" },
];

const nextConfig: NextConfig = {
  cacheComponents: true,
  partialPrefetching: true,

  poweredByHeader: false, // do not advertise "X-Powered-By: Next.js"
  productionBrowserSourceMaps: false, // do not publish readable source code maps

  async headers() {
    return [{ source: "/:path*", headers: securityHeaders }];
  },

  turbopack: {
    rules: {
      "*.css": {
        loaders: ["@tailwindcss/turbopack"],
        as: "*.css",
      },
    },
  },
};

export default nextConfig;
