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
            Welcome to my personal website.
          </h1>
          <p>
            Personal website and blog of{" "}
            <a
              href={"https://twitter.com/from_enoabasi"}
              target="_blank"
              rel="noopener noreferrer"
              className="underline decoration-dotted"
            >
              <strong>Enoabasi</strong>
            </a>
            , Software Developer &amp; hobbist Game developer.
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

      <section id="projects" className="mt-12 space-y-6 md:mt-20">
        <h2
          className={cn(
            "text-lg tracking-wide font-normal",
            ppEditorialNew.className
          )}
        >
          Projects
        </h2>
        {projects.map((project, i) => (
          <ProjectCard key={i} project={project} />
        ))}
      </section>

      <section id="writings" className="mt-12 space-y-6 md:mt-20">
        <h2
          className={cn(
            "text-lg tracking-wide font-normal",
            ppEditorialNew.className
          )}
        >
          Writings
        </h2>
        <Suspense fallback={<p>loading writes...</p>}>
          <WritingsFeed />
        </Suspense>
      </section>

      <section id="connect" className="mt-12">
          <h2
          className={cn(
            "text-lg tracking-wide font-normal",
            ppEditorialNew.className
          )}
        >
          Connect with me
        </h2>
        <ul className="flex flex-col items-start mt-4 md:flex-row md:items-center">
          {me.socials.map((social) => (
            <li key={social.name}>
              <a
                href={social.link}
                className={cn(buttonVariants({ variant: "ghost", size: "lg", className: "group" }))}
                target="_blank"
                rel="noopenner noreferrer"
              >
                <AtSign className="flex-shrink-0 mr-2 size-4" />
                {social.name}
                <ArrowUpRight className="ml-2 transition-all duration-150 ease-in-out scale-0 size-4 group-hover:scale-100" />
              </a>
            </li>
          ))}
        </ul>
      </section>
    </>
  );
}
