/*
  components/Button.tsx — FRONTEND
  A link that looks like a pill button, with an arrow that nudges on hover.
  Used for every call-to-action so all buttons look and behave the same.
  The colours and hover animation live in app/globals.css under ".btn".
*/
import Link from "next/link";

type Props = {
  href: string;
  children: React.ReactNode;
  /** lime = main action, ink = dark button for light sections, ghost = outlined */
  variant?: "lime" | "ink" | "ghost" | "ghost-ink";
  className?: string;
};

/* The small arrow drawn with SVG, shared by link buttons and the form button. */
export function Arrow() {
  return (
    <svg className="btn-arrow" width="18" height="18" viewBox="0 0 18 18" fill="none" aria-hidden="true">
      <path d="M3 9h12M10 4l5 5-5 5" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round" />
    </svg>
  );
}

export function Button({ href, children, variant = "lime", className = "" }: Props) {
  return (
    <Link href={href} className={`btn btn-${variant} ${className}`}>
      {children}
      <Arrow />
    </Link>
  );
}
