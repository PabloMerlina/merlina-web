"use client";

import React, { useState } from "react";
import Link from "next/link";
import { Menu, X } from "lucide-react";
import { Button } from "@/components/shared/Button";

const navLinks = [
  { label: "Qué es Merlina", href: "/que-es-merlina" },
  { label: "Cómo funciona", href: "/como-funciona" },
  { label: "Soluciones", href: "/soluciones" },
  { label: "Resultados", href: "/resultados" },
  { label: "Clientes", href: "/clientes" },
  { label: "Recursos", href: "/recursos" },
  { label: "Precios", href: "/precios" },
  { label: "FAQ", href: "/faq" },
];

export const Navbar: React.FC = () => {
  const [isOpen, setIsOpen] = useState(false);

  return (
    <nav className="sticky top-0 z-50 bg-black/80 backdrop-blur border-b border-violet-900/30">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className="flex justify-between items-center h-16">
          {/* Logo */}
          <Link href="/" className="text-2xl font-bold text-white">
            <span className="bg-gradient-to-r from-violet-400 to-violet-600 bg-clip-text text-transparent">
              Merlina
            </span>
          </Link>

          {/* Desktop Menu */}
          <div className="hidden md:flex items-center gap-1">
            {navLinks.map((link) => (
              <Link
                key={link.href}
                href={link.href}
                className="px-3 py-2 rounded-lg text-sm text-gray-400 hover:text-white hover:bg-violet-900/20 transition-colors"
              >
                {link.label}
              </Link>
            ))}
          </div>

          {/* CTA Button + Mobile Menu */}
          <div className="flex items-center gap-4">
            <Link href="/demo" className="hidden md:block">
              <Button>Hablar con Merlina</Button>
            </Link>

            {/* Mobile Menu Toggle */}
            <button
              onClick={() => setIsOpen(!isOpen)}
              className="md:hidden p-2 rounded-lg hover:bg-violet-900/20 transition-colors"
            >
              {isOpen ? (
                <X className="text-white" size={24} />
              ) : (
                <Menu className="text-white" size={24} />
              )}
            </button>
          </div>
        </div>

        {/* Mobile Menu */}
        {isOpen && (
          <div className="md:hidden pb-4 border-t border-violet-900/30">
            {navLinks.map((link) => (
              <Link
                key={link.href}
                href={link.href}
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
