import React from "react";
import Link from "next/link";
import { NewsletterForm } from "@/components/shared/NewsletterForm";

export const Footer: React.FC = () => {
  const year = new Date().getFullYear();

  return (
    <footer className="bg-black border-t border-violet-900/30 mt-20">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 py-12">
        <div className="grid grid-cols-1 md:grid-cols-4 gap-8 mb-8">
          {/* Brand */}
          <div>
            <h3 className="text-xl font-bold text-white mb-4">
              <span className="bg-gradient-to-r from-violet-400 to-violet-600 bg-clip-text text-transparent">
                Merlina
              </span>
            </h3>
            <p className="text-gray-400 text-sm">
              Inteligencia artificial para tomar mejores decisiones empresariales.
            </p>
            <p className="text-gray-500 text-xs mt-2">
              Desarrollado por <span className="text-violet-400">Evolve DS</span>
            </p>
          </div>

          {/* Product */}
          <div>
            <h4 className="font-semibold text-white mb-4">Producto</h4>
            <ul className="space-y-2">
              <li>
                <Link href="/que-es-merlina" className="text-gray-400 hover:text-white text-sm transition-colors">
                  Qué es Merlina
                </Link>
              </li>
              <li>
                <Link href="/como-funciona" className="text-gray-400 hover:text-white text-sm transition-colors">
                  Cómo funciona
                </Link>
              </li>
              <li>
                <Link href="/precios" className="text-gray-400 hover:text-white text-sm transition-colors">
                  Precios
                </Link>
              </li>
            </ul>
          </div>

          {/* Solutions */}
          <div>
            <h4 className="font-semibold text-white mb-4">Soluciones</h4>
            <ul className="space-y-2">
              <li>
                <Link href="/soluciones/comercial" className="text-gray-400 hover:text-white text-sm transition-colors">
                  Comercial
                </Link>
              </li>
              <li>
                <Link href="/soluciones/operaciones" className="text-gray-400 hover:text-white text-sm transition-colors">
                  Operaciones
                </Link>
              </li>
              <li>
                <Link href="/soluciones/supply-chain" className="text-gray-400 hover:text-white text-sm transition-colors">
                  Supply Chain
                </Link>
              </li>
              <li>
                <Link href="/soluciones/finanzas" className="text-gray-400 hover:text-white text-sm transition-colors">
                  Finanzas
                </Link>
              </li>
            </ul>
          </div>

          {/* Resources */}
          <div>
            <h4 className="font-semibold text-white mb-4">Recursos</h4>
            <ul className="space-y-2">
              <li>
                <Link href="/casos-de-uso" className="text-gray-400 hover:text-white text-sm transition-colors">
                  Casos de uso
                </Link>
              </li>
              <li>
                <Link href="/clientes" className="text-gray-400 hover:text-white text-sm transition-colors">
                  Clientes
                </Link>
              </li>
              <li>
                <Link href="/recursos" className="text-gray-400 hover:text-white text-sm transition-colors">
                  Blog
                </Link>
              </li>
              <li>
                <Link href="/faq" className="text-gray-400 hover:text-white text-sm transition-colors">
                  FAQ
                </Link>
              </li>
            </ul>
          </div>
        </div>

        {/* Newsletter */}
        <div className="border-t border-violet-900/20 py-8 mb-8">
          <div className="max-w-md">
            <h4 className="font-semibold text-white mb-2">Mantente actualizado</h4>
            <p className="text-gray-400 text-sm mb-4">
              Recibe tips de IA y casos de éxito directamente en tu inbox.
            </p>
            <NewsletterForm />
          </div>
        </div>

        {/* Divider */}
        <div className="border-t border-violet-900/20 pt-8">
          <div className="flex flex-col md:flex-row justify-between items-center">
            <p className="text-gray-500 text-sm">
              © {year} Merlina. Todos los derechos reservados.
            </p>
            <div className="flex gap-6 mt-4 md:mt-0">
              <Link href="#" className="text-gray-400 hover:text-white text-sm transition-colors">
                Privacidad
              </Link>
              <Link href="#" className="text-gray-400 hover:text-white text-sm transition-colors">
                Términos
              </Link>
              <Link href="#" className="text-gray-400 hover:text-white text-sm transition-colors">
                Contacto
              </Link>
            </div>
          </div>
        </div>
      </div>
    </footer>
  );
};
