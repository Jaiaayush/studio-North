/*
  app/template.tsx: FRONTEND
  The page transition. Next.js builds a fresh copy of this wrapper every time you
  move to another page, so the "page-enter" animation (in app/globals.css) replays
  and the new page fades and rises into place.
  It is plain CSS, so it cannot fail when the browser tab is hidden.
*/
export default function Template({ children }: { children: React.ReactNode }) {
  return <div className="page-enter">{children}</div>;
}
