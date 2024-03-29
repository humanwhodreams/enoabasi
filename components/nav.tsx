"use client";

import { Button } from "./ui/button";
import Link from "next/link";
import { Waves } from "lucide-react";
import { usePathname } from "next/navigation";

interface Props {
  label: string;
  href: string;
}

export function Nav({ href, label }: Props) {
  const pathname = usePathname();
  return (
    <Button
      variant={href === pathname ? "default" : "ghost"}
      size={"sm"}
      asChild
    >
      <Link href={href}>
        {label === "Enoabasi" ? (
          <>
            <Waves className="mr-2 size-4" /> {label}
          </>
        ) : (
          <>{label}</>
        )}
      </Link>
    </Button>
  );
}
