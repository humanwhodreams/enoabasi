import { Calendar } from "lucide-react";
import Link from "next/link";
import type { Writing } from "@velite/content";
import { cn } from "@/lib/utils";
import { formatDate } from "@/utils/fns";

interface Props extends Omit<Writing, "published" | "slugAsParams" | "body"> {}

export function WritingCard({ slug, title, description, date }: Props) {
  return (
    <Link
      target="_blank"
      href={slug}
      rel="noopener noreferrer"
      className={cn(
        "flex items-center justify-between w-full hover:bg-green-50 dark:hover:bg-muted rounded-md p-3 text-muted-foreground hover:text-primary"
      )}
    >
      <span className="font-medium">{title}</span>
      <span className="flex items-center">
        <Calendar className="mr-2 size-4" />
        {formatDate(date)}
      </span>
    </Link>
  );
}
