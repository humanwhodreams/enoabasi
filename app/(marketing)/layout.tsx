import * as React from "react";

import { SiteFooter } from "@/components/site-footer";
import { SiteHeader } from "@/components/site-header";

export default function MarketingLayout({
  children,
}: {
  children: React.ReactNode;
}) {
  return (
    <main className="flex flex-col items-center justify-between min-h-dvh">
      <SiteHeader />
      <section className="flex-1 w-full max-w-4xl px-4 mx-auto my-12 md:my-24 lg:px-0">
        {children}
      </section>
      <SiteFooter />
    </main>
  );
}
