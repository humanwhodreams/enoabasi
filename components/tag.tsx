import Link from "next/link";
import { cn } from "@/lib/utils";

export function Tag({
  label,
  href,
  className,
  target = "_blank",
}: {
  label: string;
  href: string;
  className?: string;
  target?: "_blank" | "_self";
}) {
  return (
    <Link
      href={href}
      rel="noopener noreferrer"
      target={target}
      className={cn(
        "border text-sm font-medium border-border px-2 bg-muted py-1 rounded-md",
        className
      )}
    >
      {label}
    </Link>
  );
}
