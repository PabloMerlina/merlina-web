"use client";
import { Navbar } from "@/components/layout/Navbar";
import { Footer } from "@/components/layout/Footer";
import { motion } from "framer-motion";
import Link from "next/link";

const questions = [
  "¿Dónde estoy perdiendo dinero?",
  "¿Qué producto debería potenciar?",
  "¿Cómo reduzco costos operativos?",
  "¿Qué clientes están dejando de comprar?",
  "¿Cuál es mi margen real por producto?",
  "¿Dónde tengo quiebre de stock?",
];

const cases = [
  { area: "Operaciones", icon: "■", desc: "Optimiza procesos, reduce costos y elimina ineficiencias.", examples: ["Detección de cuellos de botella", "Reducción de costos logísticos", "Optimización de turnos y recursos"] },
  { area: "Comercial", icon: "●", desc: "Detecta oportunidades y mejora ventas.", examples: ["Segmentación de clientes", "Análisis de pipeline", "Oportunidades de upsell"] },
  { area: "Gerencia", icon: "◆", desc: "Toma decisiones rápidas con claridad total.", examples: ["Visión 360° del negocio", "KPIs en tiempo real", "Alertas de desviación"] },
  { area: "Supply Chain", icon: "▲", desc: "Mejora inventarios, demanda y planificación.", examples: ["Forecast de demanda", "Control de inventarios", "Gestión de proveedores"] },
];

export default function CasosDeUso() {
  return (
    <>
      <Navbar />
      <main className="bg-black min-h-screen">
        <section className="py-24 px-4 sm:px-6 lg:px-8 border-b border-violet-900/30">
          <div className="max-w-4xl mx-auto text-center">
            <motion.p className="text-violet-400 text-sm font-semibold uppercase tracking-widest mb-4" initial={{ opacity: 0 }} animate={{ opacity: 1 }}>
              Casos de uso
            </motion.p>
            <motion.h1 className="text-4xl sm:text-5xl lg:text-6xl font-bold text-white mb-6" initial={{ opacity: 0, y: 20 }} animate={{ opacity: 1, y: 0 }} transition={{ delay: 0.1 }}>
              Donde yo entro,{" "}
              <span className="bg-gradient-to-r from-violet-400 to-violet-600 bg-clip-text text-transparent">pasan cosas.</span>
            </motion.h1>
            <motion.p className="text-gray-400 text-xl" initial={{ opacity: 0, y: 20 }} animate={{ opacity: 1, y: 0 }} transition={{ delay: 0.2 }}>
              Si puedes preguntarlo, puedo responderlo.
            </motion.p>
          </div>
        </section>
        <section className="py-20 px-4 sm:px-6 lg:px-8">
          <div className="max-w-4xl mx-auto">
            <h2 className="text-2xl font-bold text-white text-center mb-12">Ejemplos reales de lo que puedes preguntarme</h2>
            <div className="grid grid-cols-1 sm:grid-cols-2 gap-4">
              {questions.map((q, i) => (
                <motion.div key={i} className="bg-violet-950/20 border border-violet-900/40 rounded-xl p-5 flex items-center gap-3" initial={{ opacity: 0, x: -10 }} whileInView={{ opacity: 1, x: 0 }} viewport={{ once: true }} transition={{ delay: i * 0.08 }}>
                  <span className="text-violet-400 font-bold text-lg">Q</span>
                  <p className="text-white font-medium">{q}</p>
                  <span className="ml-auto text-violet-500 text-sm whitespace-nowrap">Respondida →</span>
                </motion.div>
              ))}
            </div>
          </div>
        </section>
        <section className="py-20 px-4 sm:px-6 lg:px-8 bg-gradient-to-b from-black to-violet-950/10">
          <div className="max-w-5xl mx-auto">
            <h2 className="text-2xl font-bold text-white text-center mb-12">Por área de negocio</h2>
            <div className="grid grid-cols-1 md:grid-cols-2 gap-6">
              {cases.map((c, i) => (
                <motion.div key={c.area} className="bg-violet-950/20 border border-violet-900/40 rounded-2xl p-8" initial={{ opacity: 0, y: 20 }} whileInView={{ opacity: 1, y: 0 }} viewport={{ once: true }} transition={{ delay: i * 0.1 }}>
                  <div className="flex items-center gap-3 mb-4">
                    <span className="text-violet-400 text-2xl">{c.icon}</span>
                    <h3 className="text-xl font-bold text-white">{c.area}</h3>
                  </div>
                  <p className="text-gray-400 mb-5">{c.desc}</p>
                  <ul className="space-y-2">
                    {c.examples.map((ex) => (
                      <li key={ex} className="flex items-center gap-2 text-gray-300 text-sm">
                        <span className="text-violet-500">✓</span> {ex}
                      </li>
                    ))}
                  </ul>
                </motion.div>
              ))}
            </div>
          </div>
        </section>
        <section className="py-20 px-4 sm:px-6 lg:px-8 border-t border-violet-900/30">
          <div className="max-w-2xl mx-auto text-center">
            <h2 className="text-3xl font-bold text-white mb-6">¿Cuál es tu caso?</h2>
            <p className="text-gray-400 mb-8">Cuéntame tu situación y te muestro cómo puedo ayudarte.</p>
            <Link href="/demo" className="inline-flex items-center gap-2 bg-violet-600 hover:bg-violet-500 text-white font-semibold px-8 py-4 rounded-xl transition-colors text-lg">
              Hablar con Merlina →
            </Link>
          </div>
        </section>
      </main>
      <Footer />
    </>
  );
}
