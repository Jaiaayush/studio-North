/*
  components/Header.tsx: FRONTEND (runs in the browser)
  The bar at the top of every page: logo, page links, the main button,
  and the full-screen menu that opens on phones.
  It runs in the browser because it needs to know which page you are on
  (to underline the current link) and to open and close the mobile menu.
*/
"use client";

import Link from "next/link";
import { usePathname } from "next/navigation";
import { useEffect, useState } from "react";
import { AnimatePresence, motion } from "motion/react";
import { nav, site } from "@/lib/site";
import { Button } from "./Button";

export function Header() {
  const pathname = usePathname();
  const [open, setOpen] = useState(false);

  /* While the phone menu is open: stop the page behind it scrolling,
     and let the Escape key close it. Both are undone when it closes. */
  useEffect(() => {
    if (!open) return;
    document.body.style.overflow = "hidden";
    const onKey = (e: KeyboardEvent) => e.key === "Escape" && setOpen(false);
    window.addEventListener("keydown", onKey);
    return () => {
      document.body.style.overflow = "";
      window.removeEventListener("keydown", onKey);
    };
  }, [open]);

  return (
    <header className="sticky top-0 z-50 bg-ink/85 backdrop-blur-md">
      <div className="wrap flex h-[4.5rem] items-center justify-between gap-6">
        {/* Logo: a lime dot and the (placeholder) studio name */}
        <Link href="/" onClick={() => setOpen(false)} className="flex min-h-11 items-center gap-2.5 text-lg font-bold tracking-tight">
          <span className="block size-3 rounded-full bg-lime" aria-hidden="true" />
          {site.name}
        </Link>

        {/* Desktop links (hidden on phones) */}
        <nav aria-label="Main" className="hidden items-center gap-9 md:flex">
          {nav.map((item) => (
            <Link
              key={item.href}
              href={item.href}
              aria-current={pathname === item.href ? "page" : undefined}
              className="link-draw text-[0.95rem] font-medium"
            >
              {item.label}
            </Link>
          ))}
        </nav>

        <div className="flex items-center gap-3">
          <Button href="/contact" className="hidden md:inline-flex">
            Get a proposal
          </Button>

          {/* Menu button (phones only). aria-expanded tells screen readers its state. */}
          <button
            type="button"
            className="grid size-12 place-items-center rounded-full bg-paper text-ink transition-transform duration-150 active:scale-95 md:hidden"
            aria-expanded={open}
            aria-controls="mobile-menu"
            aria-label={open ? "Close menu" : "Open menu"}
            onClick={() => setOpen((v) => !v)}
          >
            {/* Two bars that cross into an X when the menu is open */}
            <span className="relative block h-3 w-5" aria-hidden="true">
              <span className={`absolute left-0 top-0 h-0.5 w-5 bg-ink transition-transform duration-200 ${open ? "translate-y-[5px] rotate-45" : ""}`} />
              <span className={`absolute bottom-0 left-0 h-0.5 w-5 bg-ink transition-transform duration-200 ${open ? "-translate-y-[5px] -rotate-45" : ""}`} />
            </span>
          </button>
        </div>
      </div>

      {/* Full-screen phone menu. AnimatePresence lets it fade out before it is removed. */}
      <AnimatePresence>
        {open && (
          <motion.div
            id="mobile-menu"
            className="fixed inset-x-0 bottom-0 top-[4.5rem] z-40 flex h-[calc(100dvh-4.5rem)] flex-col justify-between overflow-y-auto bg-ink px-5 pb-8 pt-6 md:hidden"
            initial={{ opacity: 0, y: -12 }}
            animate={{ opacity: 1, y: 0 }}
            exit={{ opacity: 0, y: -12 }}
            transition={{ duration: 0.25, ease: [0.23, 1, 0.32, 1] }}
          >
            <nav aria-label="Mobile" className="flex flex-col">
              {[{ label: "Home", href: "/" }, ...nav, { label: "Contact", href: "/contact" }].map((item, i) => (
                <motion.div
                  key={item.href}
                  initial={{ opacity: 0, y: 16 }}
                  animate={{ opacity: 1, y: 0 }}
                  transition={{ duration: 0.4, ease: [0.23, 1, 0.32, 1], delay: 0.04 * i }}
                >
                  <Link
                    href={item.href}
                    onClick={() => setOpen(false)}
                    aria-current={pathname === item.href ? "page" : undefined}
                    className="block border-b border-line py-4 text-4xl font-bold tracking-tight aria-[current=page]:text-lime"
                  >
                    {item.label}
                  </Link>
                </motion.div>
              ))}
            </nav>
            <div onClick={() => setOpen(false)} className="mt-8">
              <Button href="/contact" className="w-full">
                Get a proposal
              </Button>
            </div>
          </motion.div>
        )}
      </AnimatePresence>
    </header>
  );
}
