/*
  components/Motion.tsx — FRONTEND (runs in the browser)
  The three animation helpers used across the site, built with the Motion library.
  - MotionProvider: tells Motion to respect the visitor's "reduce motion" setting.
  - Reveal: fades and lifts a block into place the first time it scrolls into view.
  - RiseText: the hero headline effect, where each word rises up from behind a mask.
  Only transform and opacity are animated, which keeps scrolling smooth.
*/
"use client";

import { MotionConfig, motion } from "motion/react";

/* The site-wide easing curve: fast start, soft landing. */
const EASE = [0.23, 1, 0.32, 1] as const;

export function MotionProvider({ children }: { children: React.ReactNode }) {
  /* reducedMotion="user": if the device asks for less motion, movement is switched off
     automatically and only gentle fades remain. */
  return <MotionConfig reducedMotion="user">{children}</MotionConfig>;
}

export function Reveal({
  children,
  delay = 0,
  className,
}: {
  children: React.ReactNode;
  /** seconds to wait, used to stagger neighbouring items */
  delay?: number;
  className?: string;
}) {
  return (
    <motion.div
      className={className}
      initial={{ opacity: 0, y: 36 }}
      whileInView={{ opacity: 1, y: 0 }}
      /* once: true = animate the first time only, never again on scroll back */
      viewport={{ once: true, margin: "0px 0px -80px 0px" }}
      transition={{ duration: 0.8, ease: EASE, delay }}
    >
      {children}
    </motion.div>
  );
}

export function RiseText({
  text,
  highlight = [],
  delay = 0,
}: {
  text: string;
  /** words to colour lime */
  highlight?: string[];
  delay?: number;
}) {
  const words = text.split(" ");
  return (
    <>
      {/* Screen readers get the plain sentence; the animated copy is hidden from them. */}
      <span className="sr-only">{text}</span>
      <span aria-hidden="true">
        {words.map((word, i) => {
          const isHighlight = highlight.includes(word.replace(/[.,?!]/g, ""));
          return (
            /* The outer span is a mask (overflow hidden). The inner word slides up into it. */
            <span key={i}>
              <span className="inline-block overflow-hidden pb-[0.12em] -mb-[0.12em] align-bottom">
                <motion.span
                  className={`inline-block ${isHighlight ? "text-lime" : ""}`}
                  initial={{ y: "110%" }}
                  animate={{ y: 0 }}
                  transition={{ duration: 0.95, ease: EASE, delay: delay + i * 0.06 }}
                >
                  {word}
                </motion.span>
              </span>{" "}
            </span>
          );
        })}
      </span>
    </>
  );
}
