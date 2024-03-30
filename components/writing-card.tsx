import { Calendar } from "lucide-react";
import Link from "next/link";
import type { Writing } from "@velite/content";
import { cn } from "@/lib/utils";
import { formatDate } from "@/utils/fns";

interface Props
  extends Omit<
    Writing,
    "description" | "published" | "slugAsParams" | "body"
  > {}

export function WritingCard({ slug, title, date }: Props) {
  return (
    <Link
      href={slug}
      className={cn(
        "flex items-center justify-between w-full hover:bg-green-50 dark:hover:bg-muted rounded-md p-2 md:p-3 text-muted-foreground hover:text-primary"
      )}
    >
      <span className="font-medium truncate">{title}</span>
      <div className="flex justify-end">
        <span className="flex items-center ml-4 whitespace-nowrap w-fit">
          <Calendar className="hidden mr-2 size-4 sm:block" />
          {formatDate(date)}
        </span>
      </div>
    </Link>
  );
}
