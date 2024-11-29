"use client";

import Link from "next/link";
import Image from "next/image";
import { cn } from "@/lib/utils";
import { useScroll } from "@/hooks/useScroll";
import { useState } from "react";

const navItems = [
  { label: "Почетна", href: "/" },
  { label: "Услуги", href: "#services" },
  { label: "Галерија", href: "#gallery" },
  { label: "Контакт", href: "#contact" },
];

export default function Navbar() {
  const scrolled = useScroll(20);
  const [isOpen, setIsOpen] = useState(false);

  const toggleMenu = () => {
    setIsOpen(!isOpen);
  };

  const closeMenu = () => {
    setIsOpen(false);
  };

  return (
    <header
      className={cn(
        "fixed top-0 w-full z-50 transition-all duration-300",
        scrolled
          ? "bg-white shadow-md py-4"
          : "bg-transparent py-6"
      )}
    >
      <div className="container mx-auto px-4">
        <nav className="flex items-center justify-between">
          <Link 
            href="/" 
            className={cn(
              "text-xl font-bold transition-colors",
              scrolled ? "text-black" : "text-black"
            )}
          >
            <Image src="/logo-black.png" alt="Nasteski Design" width={100} height={100} />
          </Link>

          {/* Hamburger Menu Button */}
          <button
            className="lg:hidden text-black p-2"
            onClick={toggleMenu}
            aria-label="Toggle menu"
          >
            <svg
              className="w-6 h-6"
              fill="none"
              strokeLinecap="round"
              strokeLinejoin="round"
              strokeWidth="2"
              viewBox="0 0 24 24"
              stroke="currentColor"
            >
              {isOpen ? (
                <path d="M6 18L18 6M6 6l12 12" />
              ) : (
                <path d="M4 6h16M4 12h16M4 18h16" />
              )}
            </svg>
          </button>

          {/* Desktop Menu */}
          <ul className="hidden lg:flex items-center gap-8">
            {navItems.map((item) => (
              <li key={item.href}>
                <Link
                  href={item.href}
                  className={cn(
                    "font-semibold transition-colors hover:text-black/70 uppercase",
                    scrolled ? "text-black" : "text-black"
                  )}
                >
                  {item.label}
                </Link>
              </li>
            ))}
          </ul>

          {/* Mobile Menu */}
          <div
            className={cn(
              "fixed inset-0 bg-white z-50 lg:hidden transition-transform duration-300 ease-in-out",
              isOpen ? "translate-x-0" : "translate-x-full"
            )}
          >
            <div className="flex flex-col h-full">
              <div className="flex justify-between items-center p-4">
                <Link href="/" onClick={closeMenu}>
                  <Image src="/logo-black.png" alt="Nasteski Design" width={100} height={100} />
                </Link>
                <button
                  className="p-2"
                  onClick={toggleMenu}
                  aria-label="Close menu"
                >
                  <svg
                    className="w-6 h-6"
                    fill="none"
                    strokeLinecap="round"
                    strokeLinejoin="round"
                    strokeWidth="2"
                    viewBox="0 0 24 24"
                    stroke="currentColor"
                  >
                    <path d="M6 18L18 6M6 6l12 12" />
                  </svg>
                </button>
              </div>
              <ul className="flex flex-col items-center gap-8 pt-8">
                {navItems.map((item) => (
                  <li key={item.href}>
                    <Link
                      href={item.href}
                      onClick={closeMenu}
                      className="font-semibold text-black text-xl uppercase"
                    >
                      {item.label}
                    </Link>
                  </li>
                ))}
              </ul>
            </div>
          </div>
        </nav>
      </div>
    </header>
  );
}
