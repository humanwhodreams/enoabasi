import { cn } from "@/lib/utils";

export function SiteFooter() {
  return (
    <footer>
      <div className="p-4">
        <p className={cn("text-muted-foreground font-medium text-sm")}>&copy;2024. Enoabasi</p>
      </div>
    </footer>
  );
}
