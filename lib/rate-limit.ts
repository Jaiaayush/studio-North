/*
  lib/rate-limit.ts — BACKEND (server only)
  A simple spam brake: each visitor (identified by IP address) may send the
  contact form at most LIMIT times per WINDOW. After that they get a
  "too many requests" answer until the window resets.

  Note: the counts are kept in the server's memory. That is fine for one server.
  On hosts that run many copies of the app (for example Vercel), each copy keeps
  its own count, so add a shared limiter there. SECURITY.md explains this.
*/

const LIMIT = 5; // enquiries allowed...
const WINDOW_MS = 10 * 60 * 1000; // ...per 10 minutes

type Entry = { count: number; resetAt: number };
const hits = new Map<string, Entry>();

export function rateLimit(ip: string): { allowed: boolean; retryAfterSeconds: number } {
  const now = Date.now();

  /* Housekeeping: if the list grows large, throw away entries that have expired */
  if (hits.size > 5000) {
    for (const [key, entry] of hits) if (entry.resetAt <= now) hits.delete(key);
  }

  const entry = hits.get(ip);

  /* First visit, or their window has ended: start a fresh count */
  if (!entry || entry.resetAt <= now) {
    hits.set(ip, { count: 1, resetAt: now + WINDOW_MS });
    return { allowed: true, retryAfterSeconds: 0 };
  }

  entry.count += 1;
  return {
    allowed: entry.count <= LIMIT,
    retryAfterSeconds: Math.ceil((entry.resetAt - now) / 1000),
  };
}
