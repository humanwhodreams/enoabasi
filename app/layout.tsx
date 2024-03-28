import "@/styles/globals.css";

import { Inter } from "next/font/google";
import type { Metadata } from "next";
import { cn } from "@/lib/utils";

const inter = Inter({ subsets: ["latin"] });

export const metadata: Metadata = {
  title: "Enoabasi | Software Engineering Portfolio.",
  description: "Perosnal website and blog of Enoabasi, Software Engineer.",
};

export default function RootLayout({
  children,
}: Readonly<{
  children: React.ReactNode;
}>) {
  return (
    <html lang="en">
      <body className={cn('',inter.className)}>{children}</body>
    </html>
  );
}
