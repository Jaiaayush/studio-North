/*
  components/WorkGrid.tsx — FRONTEND (runs in the browser)
  The project grid on the Work page, with the category filter buttons above it.
  It runs in the browser because clicking a filter changes what is shown
  without loading a new page. Projects come from lib/site.ts.
*/
"use client";

import { useState } from "react";
import { AnimatePresence, motion } from "motion/react";
import { projects, workCategories, type WorkCategory } from "@/lib/site";
import { ProjectCard } from "./Sections";

export function WorkGrid() {
  /* "active" remembers which filter button is selected. It starts on "All". */
  const [active, setActive] = useState<WorkCategory>("All");
  const shown = active === "All" ? projects : projects.filter((p) => p.category === active);

  return (
    <div>
      <div role="group" aria-label="Filter projects by type" className="flex flex-wrap gap-3">
        {workCategories.map((cat) => (
          <button
            key={cat}
            type="button"
            /* aria-pressed tells screen readers which filter is on */
            aria-pressed={active === cat}
            onClick={() => setActive(cat)}
            className={`btn ${active === cat ? "btn-lime" : "btn-ghost"}`}
          >
            {cat}
          </button>
        ))}
      </div>

      {/* Announces the result count to screen readers when the filter changes */}
      <p className="mt-6 text-mute" aria-live="polite">
        Showing {shown.length} placeholder {shown.length === 1 ? "project" : "projects"}
      </p>

      <div className="mt-8 grid gap-x-6 gap-y-12 sm:grid-cols-2 lg:grid-cols-3">
        {/* popLayout: cards that leave fade out while the remaining cards slide into place */}
        <AnimatePresence mode="popLayout" initial={false}>
          {shown.map((p) => (
            <motion.div
              key={p.slug}
              layout
              initial={{ opacity: 0, scale: 0.96 }}
              animate={{ opacity: 1, scale: 1 }}
              exit={{ opacity: 0, scale: 0.96 }}
              transition={{ duration: 0.35, ease: [0.23, 1, 0.32, 1] }}
            >
              <ProjectCard project={p} />
            </motion.div>
          ))}
        </AnimatePresence>
      </div>
    </div>
  );
}
