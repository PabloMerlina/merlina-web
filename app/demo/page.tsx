"use client";

import { ContactForm } from "@/components/shared/ContactForm";
import { motion } from "framer-motion";

export default function DemoPage() {
  return (
    <div className="min-h-screen bg-black flex flex-col">
      {/* Hero Section */}
      <div className="flex-1 flex items-center justify-center px-4 py-20">
        <div className="max-w-2xl w-full">
          {/* Logo/Brand */}
          <div className="text-center mb-8">
            <div className="text-5xl font-bold bg-gradient-to-r from-violet-400 to-violet-600 bg-clip-text text-transparent">
              Merlina
            </div>
            <p className="text-gray-400 mt-2 text-sm tracking-wide">
              INTELIGENCIA ARTIFICIAL PARA DECISIONES EMPRESARIALES
            </p>
          </div>

          {/* Main Headline */}
          <div className="text-center mb-12">
            <h1 className="text-4xl md:text-5xl font-bold text-white mb-6 leading-tight">
              Tus datos merecen{" "}
              <span className="bg-gradient-to-r from-violet-400 to-violet-600 bg-clip-text text-transparent">
                respuestas inteligentes
              </span>
            </h1>

            <p className="text-xl text-gray-400 mb-8">
              En menos de 24 horas, Merlina estará conectada a tu ERP, CRM o datos,
              respondiendo preguntas que hoy no puedes responder rápido.
            </p>

            {/* Trust Indicators */}
            <div className="flex flex-wrap justify-center gap-8 text-sm text-gray-400 my-8">
              <div className="flex items-center gap-2">
                <span className="text-2xl">🔒</span>
                <span>Datos encriptados</span>
              </div>
              <div className="flex items-center gap-2">
                <span className="text-2xl">⚡</span>
                <span>Setup en 24h</span>
              </div>
              <div className="flex items-center gap-2">
                <span className="text-2xl">📈</span>
                <span>ROI garantizado</span>
              </div>
            </div>
          </div>

          {/* Form */}
          <div className="bg-gradient-to-br from-violet-950/40 to-violet-950/10 border border-violet-900/30 rounded-2xl p-8 md:p-12">
            <h2 className="text-2xl font-bold text-white mb-2 text-center">
              Programa tu demo
            </h2>
            <p className="text-gray-400 text-center mb-8">
              Un especialista te mostrará cómo Merlina transforma tus datos en decisiones.
            </p>

            <ContactForm />
          </div>

          {/* Social Proof */}
          <div className="mt-12 text-center">
            <p className="text-gray-500 text-sm mb-4">Confiado por líderes empresariales</p>
            <div className="flex justify-center gap-6 flex-wrap">
              {[
                "Empresas Fortune 500",
                "Startups B2B",
                "Consultoras",
              ].map((company, idx) => (
                <div
                  key={idx}
                  className="px-4 py-2 bg-violet-950/20 border border-violet-900/30 rounded-full text-gray-400 text-xs"
                >
                  {company}
                </div>
              ))}
            </div>
          </div>

          {/* Footer */}
          <div className="mt-16 text-center text-gray-500 text-xs border-t border-violet-900/20 pt-8">
            <p className="mb-4">
              Al enviar este formulario aceptas nuestra{" "}
              <span className="text-gray-400 hover:text-white cursor-pointer">
                política de privacidad
              </span>
            </p>
            <p>© 2026 Merlina by Evolve DS. Todos los derechos reservados.</p>
          </div>
        </div>
      </div>
    </div>
  );
}
