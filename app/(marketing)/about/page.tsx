import { ArrowUpRight, AtSign } from "lucide-react";

import { Tag } from "@/components/tag";
import { buttonVariants } from "@/components/ui/button";
import { cn } from "@/lib/utils";
import { me } from "@/constants/me";

export default function About() {
  return (
    <>
      <section>
        <article>
          <p>
            I am a{" "}
            <Tag
              label="🧪Software developer"
              href="https://simple.wikipedia.org/wiki/Software_developer"
            />{" "}
            with 4 years of learning at{" "}
            <Tag label="🎓UOWD" href="https://www.uowdubai.ac.ae/" />. From Design &rarr;
            Development &rarr; Deployment. Spending time making software that
            contributes to the world. I am a smart worker. Finding smart ways to
            solve my problems ensuring guaranted result. View my{" "}
            <Tag label="💼projects" href="/#projects" target="_self" />.
          </p>
        </article>
      </section>
      <section className="mt-12">
        <h3>Connect with me</h3>
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
      <section>
        
      </section>
    </>
  );
}
