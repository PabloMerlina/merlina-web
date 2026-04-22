"use client";
import { Navbar } from "@/components/layout/Navbar";
import { Footer } from "@/components/layout/Footer";
import { motion } from "framer-motion";
import Link from "next/link";

const kpis = [
  { value: "+25%", label: "Eficiencia en decisiones operativas" },
  { value: "-30%", label: "Tiempo en análisis" },
  { value: "+15%", label: "Aumento en oportunidades comerciales" },
  { value: "+18%", label: "Rentabilidad en 3 meses" },
];

export default function Resultados() {
  return (
    <>
      <Navbar />
      <main className="bg-black min-h-screen">
        <section className="py-24 px-4 sm:px-6 lg:px-8 border-b border-violet-900/30">
          <div className="max-w-4xl mx-auto text-center">
            <motion.p className="text-violet-400 text-sm font-semibold uppercase tracking-widest mb-4" initial={{ opacity: 0 }} animate={{ opacity: 1 }}>
              Resultados
            </motion.p>
            <motion.h1 className="text-4xl sm:text-5xl lg:text-6xl font-bold text-white mb-6" initial={{ opacity: 0, y: 20 }} animate={{ opacity: 1, y: 0 }} transition={{ delay: 0.1 }}>
              Esto no es tecnología.{" "}
              <span className="bg-gradient-to-r from-violet-400 to-violet-600 bg-clip-text text-transparent">Es impacto en tu negocio.</span>
            </motion.h1>
            <motion.p className="text-gray-400 text-xl" initial={{ opacity: 0, y: 20 }} animate={{ opacity: 1, y: 0 }} transition={{ delay: 0.2 }}>
              Cada insight está pensado para una sola cosa: que ganes más dinero o pierdas menos.
            </motion.p>
          </div>
        </section>
        <section className="py-20 px-4 sm:px-6 lg:px-8">
          <div className="max-w-5xl mx-auto">
            <div className="grid grid-cols-2 md:grid-cols-4 gap-6">
              {kpis.map((kpi, i) => (
                <motion.div key={kpi.label} className="bg-violet-950/20 border border-violet-900/40 rounded-2xl p-8 text-center" initial={{ opacity: 0, y: 20 }} whileInView={{ opacity: 1, y: 0 }} viewport={{ once: true }} transition={{ delay: i * 0.1 }}>
                  <span className="text-4xl sm:text-5xl font-bold bg-gradient-to-r from-violet-400 to-violet-600 bg-clip-text text-transparent block mb-3">{kpi.value}</span>
                  <p className="text-gray-400 text-sm">{kpi.label}</p>
                </motion.div>
              ))}
            </div>
          </div>
        </section>
        <section className="py-20 px-4 sm:px-6 lg:px-8 bg-gradient-to-b from-black to-violet-950/10">
          <div className="max-w-3xl mx-auto">
            <h2 className="text-2xl font-bold text-white text-center mb-12">Caso de éxito</h2>
            <motion.div className="bg-violet-950/30 border border-violet-900/50 rounded-2xl p-10" initial={{ opacity: 0, y: 20 }} whileInView={{ opacity: 1, y: 0 }} viewport={{ once: true }}>
              <div className="grid grid-cols-1 md:grid-cols-3 gap-8 text-center">
                {[
                  { label: "PROBLEMA", value: "Baja visibilidad de márgenes" },
                  { label: "SOLUCIÓN", value: "Implementación de Merlina" },
                  { label: "RESULTADO", value: "+18% rentabilidad en 3 meses" },
                ].map((item) => (
                  <div key={item.label}>
                    <p className="text-violet-400 text-xs font-bold uppercase tracking-widest mb-2">{item.label}</p>
                    <p className="text-white font-semibold">{item.value}</p>
                  </div>
                ))}
              </div>
              <p className="text-center text-violet-400 font-bold text-lg mt-10">Merlina se paga sola.</p>
            </motion.div>
          </div>
        </section>
        <section className="py-20 px-4 sm:px-6 lg:px-8 border-t border-violet-900/30">
          <div className="max-w-2xl mx-auto text-center">
            <h2 className="text-3xl font-bold text-white mb-6">¿Quieres estos resultados?</h2>
            <Link href="/demo" className="inline-flex items-center gap-2 bg-violet-600 hover:bg-violet-500 text-white font-semibold px-8 py-4 rounded-xl transition-colors text-lg">
              Quiero mi demo →
            </Link>
          </div>
        </section>
      </main>
      <Footer />
    </>
  );
}
