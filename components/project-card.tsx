import Link from "next/link";
import { Projects } from "@/constants/projects";
import { Separator } from "@/components/ui/separator";
import { cn } from "@/lib/utils";

interface Props {
  project: Projects;
}

export function ProjectCard({ project }: Props) {
  return (
    <Link
      target="_blank"
      href={project.source}
      rel="noopener noreferrer"
      className={cn(
        "flex items-center justify-between w-full hover:bg-muted rounded px-2 py-1 text-muted-foreground"
      )}
    >
      <div>
        <span className="font-semibold text-primary">{project.title}</span>{" "}
        <span>{project.description}</span>
      </div>
      <div className="flex items-center justify-between flex-1">
        <Separator
          orientation="horizontal"
          className="flex-1 flex-shrink-0 mx-2"
        />
        <span>{project.year}</span>
      </div>
    </Link>
  );
}
