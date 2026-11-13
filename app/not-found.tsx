/*
  app/not-found.tsx: FRONTEND (the custom 404 page)
  Shown automatically whenever someone visits an address that does not exist.
*/
import type { Metadata } from "next";
import { Button } from "@/components/Button";

export const metadata: Metadata = {
  title: "Page not found",
  description: "This page does not exist.",
};

export default function NotFound() {
  return (
    <section className="relative flex min-h-[calc(100svh-4.5rem)] items-center overflow-hidden bg-ink py-20">
      <div aria-hidden="true" className="pointer-events-none absolute -left-40 -top-52 size-[40rem] rounded-full bg-violet opacity-50 blur-[130px]" />
      <div className="wrap relative">
        <p aria-hidden="true" className="text-[32vw] font-bold leading-[0.8] tracking-[-0.07em] text-lime md:text-[20rem]">
          404
        </p>
        <h1 className="heading mt-8">This page does not exist</h1>
        <p className="mt-5 max-w-xl text-lg text-mute">The link may be old, or the address may have a typo. These two will get you back on track.</p>
        <div className="mt-8 flex flex-wrap gap-4">
          <Button href="/">Back to home</Button>
          <Button href="/contact" variant="ghost">
            Contact us
          </Button>
        </div>
      </div>
    </section>
  );
}
