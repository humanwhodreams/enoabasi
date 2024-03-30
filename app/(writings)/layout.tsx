import React from "react";
import { SiteFooter } from "@/components/site-footer";
import { SiteHeader } from "@/components/site-header";

type Props = {
  children: React.ReactNode;
};

export default function WritingsLayout({ children }: Props) {
  return (
    <main className="flex flex-col items-center justify-between min-h-dvh">
      <SiteHeader />
      <section
        role="as-main"
        className="flex flex-col flex-grow flex-shrink-0 w-full max-w-4xl px-4 mx-auto"
      >
        {children}
      </section>
      <SiteFooter />
    </main>
  );
}
