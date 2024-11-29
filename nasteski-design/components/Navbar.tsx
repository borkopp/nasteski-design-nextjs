"use client";

import Link from "next/link";
import Image from "next/image";
import { cn } from "@/lib/utils";
import { useScroll } from "@/hooks/useScroll";

const navItems = [
  { label: "Почетна", href: "/" },
  { label: "Услуги", href: "#services" },
  { label: "Галерија", href: "#gallery" },
  { label: "Контакт", href: "#contact" },
];

export default function Navbar() {
  const scrolled = useScroll(20);

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

          <ul className="flex items-center gap-8">
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
        </nav>
      </div>
    </header>
  );
}
