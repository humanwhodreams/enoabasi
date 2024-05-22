import { ArrowUpRight, AtSign } from "lucide-react";

import { ProjectCard } from "@/components/project-card";
import { Suspense } from "react";
import { WorkCard } from "@/components/work-card";
import { WritingsFeed } from "@/components/writings-feed";
import { buttonVariants } from "@/components/ui/button";
import { cn } from "@/lib/utils";
import { me } from "@/constants/me";
import { ppEditorialNew } from "../fonts-local";
import { projects } from "@/constants/projects";
import { works } from "@/constants/works";

export default function Home() {
  return (
    <>
      <section>
        <div>
          <h1 className={cn(ppEditorialNew.className)}>
            Welcome to my website.
          </h1>
          <p>
            Personal website and portfolio of{" "}
            <a
              href={"https://twitter.com/from_enoabasi"}
              target="_blank"
              rel="noopener noreferrer"
              className="underline decoration-dotted"
            >
              <strong>Enoabasi</strong>
            </a>
            , Software Developer &amp; hobbyist Game developer.
          </p>

          <div>
            <p className="muted">
              &quot;Life is like riding a bicycle. To keep your balance, you
              must keep moving.&quot; &mdash; Albert Einstein.
            </p>
          </div>
        </div>
      </section>

      <section id="works" className="mt-12 space-y-6 md:mt-20">
        {works.map((work, i) => (
          <WorkCard
            key={i}
            position={work.position}
            office={work.office}
            duration={work.duration}
            roles={work.roles}
          />
        ))}
      </section>

      <section id="projects" className="my-12 space-y-6 md:my-20">
        <h2
          className={cn(
            "tracking-wide",
            ppEditorialNew.className
          )}
        >
          Projects
        </h2>
        {projects.map((project, i) => (
          <ProjectCard key={i} project={project} />
        ))}
      </section>
    </>
  );
}
