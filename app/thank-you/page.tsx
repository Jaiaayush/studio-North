/*
  app/thank-you/page.tsx — FRONTEND (address "/thank-you")
  The confirmation page a visitor sees after the contact form is sent.
  It is hidden from search engines (robots: noindex) because it is not a real landing page.
*/
import type { Metadata } from "next";
import { Button } from "@/components/Button";
import { Reveal, RiseText } from "@/components/Motion";

export const metadata: Metadata = {
  title: "Enquiry received",
  description: "Your enquiry has been received.",
  robots: { index: false, follow: false },
};

export default function ThankYouPage() {
  return (
    <section className="relative flex min-h-[calc(100svh-4.5rem)] items-center overflow-hidden bg-ink py-20">
      <div aria-hidden="true" className="pointer-events-none absolute -bottom-52 -right-40 size-[40rem] rounded-full bg-violet opacity-50 blur-[130px]" />
      <div className="wrap relative">
        <p className="mb-6 font-medium text-lime">Enquiry received</p>
        <h1 className="display max-w-[12ch]">
          <RiseText text="Thanks. Your enquiry is in." highlight={["Thanks"]} />
        </h1>
        <Reveal delay={0.4}>
          <p className="mt-8 max-w-xl text-lg leading-relaxed text-mute md:text-xl">
            You will get a fixed-price proposal by email within one working day. If it is urgent, reply to that email and we will call you.
          </p>
          <div className="mt-8 flex flex-wrap gap-4">
            <Button href="/work">See our work</Button>
            <Button href="/" variant="ghost">
              Back to home
            </Button>
          </div>
        </Reveal>
      </div>
    </section>
  );
}
