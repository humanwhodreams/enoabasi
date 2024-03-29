"use client";

import { Button, buttonVariants } from "./ui/button";
import { Menu, Paintbrush2, Waves } from "lucide-react";
import {
  Sheet,
  SheetContent,
  SheetHeader,
  SheetTrigger,
} from "@/components/ui/sheet";

import Link from "next/link";
import React from "react";
import { cn } from "@/lib/utils";
import { navItems } from "@/constants/navigations";
import { usePathname } from "next/navigation";
import { useTheme } from "next-themes";

export function SiteHeaderNavMobile() {
  const [toggle, setToggle] = React.useState(false);
  const pathname = usePathname();
  const { setTheme, theme } = useTheme();

  return (
    <Sheet open={toggle} onOpenChange={setToggle}>
      <SheetTrigger
        className={cn(buttonVariants({ variant: "outline", size: "icon" }))}
      >
        <Menu className="flex-shrink-0 text-muted-foreground" />
        <span className="sr-only">Toggle menu</span>
      </SheetTrigger>
      <SheetContent side={"left"}>
        <SheetHeader>
          <Button
            className={"w-full justify-start"}
            variant={"/" === pathname ? "default" : "ghost"}
            size={"sm"}
            asChild
          >
            <Link href={"/"}>
              <Waves className="mr-2 size-4" />
              Enoabasi
            </Link>
          </Button>
        </SheetHeader>
        <div className="flex flex-col items-start justify-between w-full h-full">
          <div className="grid w-full gap-4 py-4">
            {navItems.map((item) => (
              <div key={item.href}>
                <Button
                  className={"w-full justify-start"}
                  variant={item.href === pathname ? "default" : "ghost"}
                  size={"sm"}
                  onClick={() => setToggle(false)}
                  asChild
                >
                  <Link href={item.href}>{item.label}</Link>
                </Button>
              </div>
            ))}
          </div>

          <div className="w-full mb-12">
            <Button
              variant={"ghost"}
              size={"lg"}
              className="justify-start w-full"
              onClick={() => {
                setTheme(theme === "light" ? "dark" : "light");
                setToggle(false);
              }}
            >
              <Paintbrush2 className="flex-shrink-0 mr-2 text-muted-foreground" />
              Theme &mdash; {theme}
            </Button>
          </div>
        </div>
      </SheetContent>
    </Sheet>
  );
}
