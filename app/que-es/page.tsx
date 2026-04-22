"use client";
import { Navbar } from "@/components/layout/Navbar";
import { Footer } from "@/components/layout/Footer";
import { motion } from "framer-motion";
import Link from "next/link";

export default function QueEsMerlina() {
  return (
    <>
      <Navbar />
      <main className="bg-black min-h-screen">
        <section className="py-24 px-4 sm:px-6 lg:px-8 border-b border-violet-900/30">
          <div className="max-w-4xl mx-auto text-center">
            <motion.p className="text-violet-400 text-sm font-semibold uppercase tracking-widest mb-4" initial={{ opacity: 0 }} animate={{ opacity: 1 }}>
              Qué es Merlina
            </motion.p>
            <motion.h1 className="text-4xl sm:text-5xl lg:text-6xl font-bold text-white mb-6 leading-tight" initial={{ opacity: 0, y: 20 }} animate={{ opacity: 1, y: 0 }} transition={{ delay: 0.1 }}>
              Soy la evolución de cómo las empresas{" "}
              <span className="bg-gradient-to-r from-violet-400 to-violet-600 bg-clip-text text-transparent">toman decisiones.</span>
            </motion.h1>
            <motion.p className="text-gray-400 text-xl leading-relaxed" initial={{ opacity: 0, y: 20 }} animate={{ opacity: 1, y: 0 }} transition={{ delay: 0.2 }}>
              Durante años, las empresas han usado herramientas para visualizar datos. Pero ver datos no es suficiente. Merlina no muestra información. La interpreta, la explica y te dice qué hacer.
            </motion.p>
          </div>
        </section>
        <section className="py-20 px-4 sm:px-6 lg:px-8">
          <div className="max-w-5xl mx-auto">
            <h2 className="text-3xl font-bold text-white text-center mb-16">¿Qué soy exactamente?</h2>
            <div className="grid grid-cols-1 md:grid-cols-3 gap-8">
              {[
                { number: "01", title: "Tu analista de datos", desc: "Proceso y entiendo toda tu información automáticamente, sin pipelines manuales ni configuración compleja." },
                { number: "02", title: "Tu estratega de negocio", desc: "No solo te digo qué pasó, te digo por qué pasó y qué debes hacer al respecto." },
                { number: "03", title: "Tu copiloto en decisiones", desc: "Disponible en todo momento para responder cualquier pregunta sobre tu negocio." },
              ].map((item) => (
                <motion.div key={item.number} className="bg-violet-950/20 border border-violet-900/40 rounded-2xl p-8 text-center" initial={{ opacity: 0, y: 20 }} whileInView={{ opacity: 1, y: 0 }} viewport={{ once: true }} transition={{ duration: 0.6 }}>
                  <span className="text-5xl font-bold text-violet-600/30 block mb-4">{item.number}</span>
                  <h3 className="text-xl font-bold text-white mb-3">{item.title}</h3>
                  <p className="text-gray-400">{item.desc}</p>
                </motion.div>
              ))}
            </div>
            <p className="text-center text-violet-400 font-semibold text-lg mt-10">Todo en una sola conversación.</p>
          </div>
        </section>
        <section className="py-20 px-4 sm:px-6 lg:px-8 border-t border-violet-900/30">
          <div className="max-w-2xl mx-auto text-center">
            <h2 className="text-3xl font-bold text-white mb-6">¿Lista para conocerme?</h2>
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
