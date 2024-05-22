import { Suspense } from "react";
import { WritingsFeed } from "@/components/writings-feed";
import { cn } from "@/lib/utils";
import { ppEditorialNew } from "@/app/fonts-local";

export default function Writings() {
  return (
    <>
      <section className="mt-12 md:mt-24">
        <div>
          <h1 className={cn(ppEditorialNew.className)}>
            Welcome to my <span className="italic font-light">wiritings</span>.
          </h1>
          <p>
            I write on topics related to tech and my daily learnings. Gate
            keeping knowledge is never a good thing & inspirations could be
            found in the strangest of places.
          </p>
        </div>
      </section>

      <section id="all" className="mt-12">
        <Suspense fallback={<p>loading writes...</p>}>
          <WritingsFeed />
        </Suspense>
      </section>
    </>
  );
}
