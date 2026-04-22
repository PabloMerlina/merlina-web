"use client";
import React, { useState } from "react";
import Link from "next/link";
import { usePathname } from "next/navigation";
import { Menu, X } from "lucide-react";
import { Button } from "@/components/shared/Button";

const navLinks = [
  { label: "Qué es", hrefHome: "#que-es", hrefPage: "/que-es" },
  { label: "Cómo funciona", hrefHome: "#como-funciona", hrefPage: "/como-funciona" },
  { label: "Casos de uso", hrefHome: "#casos-de-uso", hrefPage: "/casos-de-uso" },
  { label: "Resultados", hrefHome: "#resultados", hrefPage: "/resultados" },
  { label: "FAQ", hrefHome: "#faq", hrefPage: "/faq" },
];

export const Navbar: React.FC = () => {
  const [isOpen, setIsOpen] = useState(false);
  const pathname = usePathname();
  const isHome = pathname === "/";

  return (
    <nav className="sticky top-0 z-50 bg-black/80 backdrop-blur border-b border-violet-900/30">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className="flex justify-between items-center h-16">
          <Link href="/" className="text-2xl font-bold text-white">
            <span className="bg-gradient-to-r from-violet-400 to-violet-600 bg-clip-text text-transparent">
              Merlina
            </span>
          </Link>
          <div className="hidden md:flex items-center gap-1">
            {navLinks.map((link) => (
              <Link
                key={link.hrefPage}
                href={isHome ? link.hrefHome : link.hrefPage}
                className="px-3 py-2 rounded-lg text-sm text-gray-400 hover:text-white hover:bg-violet-900/20 transition-colors"
              >
                {link.label}
              </Link>
            ))}
          </div>
          <div className="flex items-center gap-4">
            <Link href="/demo" className="hidden md:block">
              <Button>Hablar con Merlina</Button>
            </Link>
            <button
              onClick={() => setIsOpen(!isOpen)}
              className="md:hidden p-2 rounded-lg hover:bg-violet-900/20 transition-colors"
            >
              {isOpen ? <X className="text-white" size={24} /> : <Menu className="text-white" size={24} />}
            </button>
          </div>
        </div>
        {isOpen && (
          <div className="md:hidden pb-4 border-t border-violet-900/30">
            {navLinks.map((link) => (
              <Link
                key={link.hrefPage}
                href={isHome ? link.hrefHome : link.hrefPage}
                onClick={() => setIsOpen(false)}
                className="block px-3 py-2 rounded-lg text-sm text-gray-400 hover:text-white hover:bg-violet-900/20 transition-colors"
              >
                {link.label}
              </Link>
            ))}
            <div className="px-3 py-4">
              <Link href="/demo" className="block">
                <Button className="w-full">Hablar con Merlina</Button>
              </Link>
            </div>
          </div>
        )}
      </div>
    </nav>
  );
};
