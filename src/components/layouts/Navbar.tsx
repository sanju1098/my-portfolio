"use client";
import { useState } from "react";
import Link from "next/link";
import { Close, Menu as MenuIcon } from "@mui/icons-material";

const Navbar = () => {
  const [isOpen, setIsOpen] = useState(false);

  const toggleMenu = () => {
    setIsOpen(!isOpen);
  };

  const navbarItems = [
    { id: 1, name: "Home", redirectLink: "/" },
    { id: 2, name: "Projects", redirectLink: "/projects" },
    { id: 3, name: "Skills", redirectLink: "/skills" },
    { id: 4, name: "Experience", redirectLink: "/experience" },
  ];

  return (
    <header className="w-full px-8 shadow-sm shadow-neutral-500 flex items-center mb-4">
      <nav className="text-white w-full">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="flex items-center justify-between h-16">
            {/* Logo */}
            <div className="flex-shrink-0">
              <Link href="/" className="text-xl font-bold">
                SK | Portfolio
              </Link>
            </div>

            {/* Hamburger Menu (Mobile) */}
            <div className="sm:hidden">
              <button
                onClick={toggleMenu}
                className="font-rubik hover:text-white focus:outline-none">
                {isOpen ? <Close /> : <MenuIcon />}
              </button>
            </div>

            {/* Desktop Menu */}
            <div className="hidden sm:flex sm:space-x-4">
              {navbarItems.map(navItem => (
                <Link
                  key={navItem.id}
                  href={navItem.redirectLink}
                  className="font-rubik px-3 py-2 rounded-md text-xl font-normal hover:bg-gray-700 hover:text-[#00dcff]">
                  {navItem.name}
                </Link>
              ))}
            </div>
          </div>
        </div>

        {/* Mobile Menu */}
        {isOpen && (
          <div className="sm:hidden">
            <div className="px-2 pt-2 pb-3 space-y-1">
              {navbarItems.map(navItem => (
                <Link
                  key={navItem.id}
                  href={navItem.redirectLink}
                  className="block px-3 py-2 rounded-md text-xl font-medium hover:bg-gray-700 hover:text-[#00dcff]">
                  {navItem.name}
                </Link>
              ))}
            </div>
          </div>
        )}
      </nav>
    </header>
  );
};

export default Navbar;
