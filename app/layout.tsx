import "@/styles/globals.css";

import type { Metadata } from "next";
import { TailwindIndicator } from "@/components/tailwind-indicator";
import { ThemeProvider } from "@/components/theme-provider";
import { cn } from "@/lib/utils";
import { inter } from "./fonts";

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
      <body className={cn("relative antialiased", inter.className)}>
        <ThemeProvider attribute="class" defaultTheme="system" enableSystem>
          
    
    <div className="bg-[radial-gradient(at_20.67%_30.80%,rgb(204,251,241)_0,transparent_12%),radial-gradient(at_83.67%_81.17%,rgb(224,242,254)_0,transparent_28%)] dark:hidden inset-0 -z-10 absolute"></div>
  
          {children}
          <TailwindIndicator />
        </ThemeProvider>
      </body>
    </html>
  );
}
