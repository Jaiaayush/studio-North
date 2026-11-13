/*
  lib/supabase/server.ts: BACKEND (server only)
  Creates the connection to the Supabase database for code that runs on the server.

  The two values it needs come from the environment (.env.local / .env.production):
  - NEXT_PUBLIC_SUPABASE_URL: the address of the Studio North database
  - NEXT_PUBLIC_SUPABASE_PUBLISHABLE_KEY: the PUBLIC key. It is safe to show because
    the database's own rules (Row Level Security) only let it ADD enquiries,
    never read, change or delete them.

  There is no login yet. The cookie code below is what @supabase/ssr needs so that
  sign-in can be switched on later without rewriting this file.
*/
import { createServerClient } from "@supabase/ssr";
import { cookies } from "next/headers";

/* Returns null when the env vars are missing, so callers can fall back gracefully. */
export async function createSupabaseServerClient() {
  const url = process.env.NEXT_PUBLIC_SUPABASE_URL;
  const key = process.env.NEXT_PUBLIC_SUPABASE_PUBLISHABLE_KEY;
  if (!url || !key) return null;

  const cookieStore = await cookies();

  return createServerClient(url, key, {
    cookies: {
      getAll() {
        return cookieStore.getAll();
      },
      setAll(cookiesToSet) {
        try {
          cookiesToSet.forEach(({ name, value, options }) => cookieStore.set(name, value, options));
        } catch {
          /* Cookies cannot be set from some server contexts. Safe to ignore without login. */
        }
      },
    },
  });
}
