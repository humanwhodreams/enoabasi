import { Nav } from "./nav";
import { SiteHeaderNavMobile } from "./site-header-nav-mobile";
import { ThemeToggle } from "./theme-toggle";
import { navItems } from "@/constants/navigations";

export function SiteHeader() {
  return (
    <header className="z-10 sticky top-0 w-full bg-background/95 backdrop-blur supports-[backdrop-filter]:bg-background/60">
      <nav className="flex items-center justify-between max-w-5xl px-4 py-2 mx-auto lg:px-0">
        <Nav label="Enoabasi" href="/" />

        <div className="hidden md:space-x-4 md:flex">
          {navItems.map((item) => (
            <Nav key={item.href} label={item.label} href={item.href} />
          ))}
          <ThemeToggle />
        </div>

        <div className="block md:hidden">
          <SiteHeaderNavMobile />
        </div>
      </nav>
    </header>
  );
}
