"use client"

import { Button } from "@/components/ui/button";
import {
  Sheet,
  SheetContent,
  SheetTrigger,
} from "@/components/ui/sheet";
import { Menu, Moon, Sun } from "lucide-react";
import { useTheme } from "next-themes";
import Link from "next/link";
import { usePathname } from "next/navigation";

const routes = [
  { name: "Home", path: "/" },
  { name: "Projects", path: "/#projects" },
  { name: "Experience", path: "/#experience" },
  { name: "Contact", path: "/contact" },
];

export function Navbar() {
  const pathname = usePathname();
  const { theme, setTheme } = useTheme();

  return (
    <header className="sticky top-0 z-50 w-full border-b bg-background/95 backdrop-blur supports-[backdrop-filter]:bg-background/60 px-10">
      <div className="container flex h-16 items-center">
        <div className="mr-4 flex">
          <Link href="/" className="flex items-center space-x-2">
            <span className="text-xl font-bold">Portfolio</span>
          </Link>
        </div>
        <div className="flex flex-1 items-center justify-end md:justify-between">
          <nav className="hidden md:flex items-center space-x-6">
            {routes.map((route) => (
              <Link
                key={route.path}
                href={route.path}
                className={`text-sm font-medium transition-colors hover:text-primary ${
                  pathname === route.path ? "text-foreground" : "text-muted-foreground"
                }`}
              >
                {route.name}
              </Link>
            ))}
          </nav>
          <div className="flex items-center space-x-4">
          <Button 
              variant="ghost" 
              size="icon" 
              onClick={() => setTheme(theme === "dark" ? "light" : "dark")}
              aria-label="Toggle theme"
            >
              {theme === "dark" ? (
                <Sun className="h-5 w-5" />
              ) : (
                <Moon className="h-5 w-5" />
              )}
            </Button>
            <Button variant="outline" asChild>
              <a href="documents/resume_final.pdf" target="_blank" rel="noopener noreferrer">
                Resume
              </a>
            </Button>
            <Sheet>
              <SheetTrigger asChild>
                <Button variant="ghost" size="icon" className="md:hidden">
                  <Menu className="h-5 w-5" />
                  <span className="sr-only">Toggle menu</span>
                </Button>
              </SheetTrigger>
              <SheetContent side="right">
                <nav className="flex flex-col space-y-4 mt-8">
                  {routes.map((route) => (
                    <Link
                      key={route.path}
                      href={route.path}
                      className="text-base font-medium transition-colors hover:text-primary"
                    >
                      {route.name}
                    </Link>
                  ))}
                  <Link
                    href="/api/placeholder/resume.pdf"
                    target="_blank"
                    rel="noopener noreferrer"
                    className="text-base font-medium transition-colors hover:text-primary"
                  >
                    Resume
                  </Link>
                </nav>
              </SheetContent>
            </Sheet>
          </div>
        </div>
      </div>
    </header>
  );
}
