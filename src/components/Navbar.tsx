"use client";

import { useState } from "react";
import Link from "next/link";
import { usePathname } from "next/navigation";
import { Menu, X } from "lucide-react";
import ThemeToggle from "./ThemeToggle";

export const Navbar = () => {
  const [isOpen, setIsOpen] = useState(false);
  const pathname = usePathname();

  const navItems = [
    { path: "/", label: "Home" },
    { path: "/projects", label: "Projects" },
    { path: "/skills", label: "Skills" },
    { path: "/experience", label: "Experience" },
  ];

  return (
    <header className="w-full h-16">
      <nav className="fixed top-0 w-full bg-background/80 backdrop-blur-sm z-50 border-b border-border">
        <div className=" px-4 sm:px-6 lg:px-8">
          <div className="flex items-center justify-between h-16">
            <Link href="/" className="text-2xl font-bold text-primary">
              Portfolio
            </Link>

            <div className="flex items-center gap-4">
              {/* Desktop menu */}
              <div className="hidden md:flex space-x-8">
                {navItems.map(item => (
                  <Link
                    key={item.path}
                    href={item.path}
                    className={`${
                      pathname === item.path
                        ? "text-primary"
                        : "text-foreground hover:text-primary"
                    } px-3 py-2 rounded-md text-lg font-semibold uppercase tracking-wide hover:bg-gray-600 hover:text-primary`}>
                    {item.label}
                  </Link>
                ))}
              </div>

              <ThemeToggle />

              {/* Mobile menu button */}
              <div className="md:hidden">
                <button
                  onClick={() => setIsOpen(!isOpen)}
                  className="inline-flex items-center justify-center p-2 rounded-md text-foreground hover:text-primary focus:outline-none">
                  {isOpen ? (
                    <X className="h-6 w-6" />
                  ) : (
                    <Menu className="h-6 w-6" />
                  )}
                </button>
              </div>
            </div>
          </div>
        </div>

        {/* Mobile menu */}
        {isOpen && (
          <div className="md:hidden">
            <div className="px-2 pt-2 pb-3 space-y-1 bg-background/80 backdrop-blur-sm">
              {navItems.map(item => (
                <Link
                  key={item.path}
                  href={item.path}
                  className={`${
                    location.pathname === item.path
                      ? "text-primary"
                      : "text-foreground hover:text-primary"
                  } block px-3 py-2 rounded-md text-base font-medium uppercase tracking-wide transition-colors duration-200`}
                  onClick={() => setIsOpen(false)}>
                  {item.label}
                </Link>
              ))}
            </div>
          </div>
        )}
      </nav>
    </header>
  );
};
