import * as React from "react";

import { SiteHeader } from "@/components/site-header";

export default function MarketingLayout({
  children,
}: {
  children: React.ReactNode;
}) {
  return (
    <main className="flex flex-col items-center justify-between min-h-dvh">
      <SiteHeader />
      <section className="flex-1 w-full max-w-3xl px-4 mx-auto mt-12 md:mt-24 lg:px-0">
        {children}
      </section>
    </main>
  );
}
