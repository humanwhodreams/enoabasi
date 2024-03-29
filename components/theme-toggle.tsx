"use client";

import { Button } from "./ui/button";
import { Paintbrush2 } from "lucide-react";
import { useTheme } from "next-themes";

export function ThemeToggle() {
  const { theme, setTheme } = useTheme();
  return (
    <Button
      variant={"ghost"}
      size={"icon"}
      onClick={() => setTheme(theme === "light" ? "dark" : "light")}
    >
      <Paintbrush2 className="flex-shrink-0 text-muted-foreground" />
      <span className="sr-only">change theme</span>
    </Button>
  );
}
