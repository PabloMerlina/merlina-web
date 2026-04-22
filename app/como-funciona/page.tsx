"use client";
import { Navbar } from "@/components/layout/Navbar";
import { Footer } from "@/components/layout/Footer";
import { motion } from "framer-motion";
import Link from "next/link";
import { Database, Brain, MessageCircle } from "lucide-react";

const steps = [
  { number: "01", icon: Database, title: "Conectas tus datos", desc: "ERP, CRM, Excel o donde sea que estén. Me adapto a tu infraestructura, sin migraciones ni configuraciones complejas." },
  { number: "02", icon: Brain, title: "Aprendo tu negocio", desc: "Entiendo cómo funciona tu operación, tus métricas clave y lo que importa en tu industria." },
  { number: "03", icon: MessageCircle, title: "Conversamos", desc: "Me preguntas lo que quieras y te doy respuestas claras y accionables. Sin dashboards, sin curvas de aprendizaje." },
];

export default function ComoFunciona() {
  return (
    <>
      <Navbar />
      <main className="bg-black min-h-screen">
        <section className="py-24 px-4 sm:px-6 lg:px-8 border-b border-violet-900/30">
          <div className="max-w-4xl mx-auto text-center">
            <motion.p className="text-violet-400 text-sm font-semibold uppercase tracking-widest mb-4" initial={{ opacity: 0 }} animate={{ opacity: 1 }}>
              Cómo funciona
            </motion.p>
            <motion.h1 className="text-4xl sm:text-5xl lg:text-6xl font-bold text-white mb-6" initial={{ opacity: 0, y: 20 }} animate={{ opacity: 1, y: 0 }} transition={{ delay: 0.1 }}>
              Así de <span className="bg-gradient-to-r from-violet-400 to-violet-600 bg-clip-text text-transparent">simple.</span>
            </motion.h1>
            <motion.p className="text-gray-400 text-xl" initial={{ opacity: 0, y: 20 }} animate={{ opacity: 1, y: 0 }} transition={{ delay: 0.2 }}>
              Sin dashboards complejos. Sin curvas de aprendizaje. Solo conversación.
            </motion.p>
          </div>
        </section>
        <section className="py-20 px-4 sm:px-6 lg:px-8">
          <div className="max-w-5xl mx-auto">
            <div className="grid grid-cols-1 md:grid-cols-3 gap-8 relative">
              <div className="hidden md:block absolute top-16 left-0 right-0 h-px bg-gradient-to-r from-transparent via-violet-600 to-transparent" />
              {steps.map((step, i) => {
                const Icon = step.icon;
                return (
                  <motion.div key={step.number} className="relative z-10 flex flex-col items-center text-center" initial={{ opacity: 0, y: 30 }} whileInView={{ opacity: 1, y: 0 }} viewport={{ once: true }} transition={{ duration: 0.6, delay: i * 0.15 }}>
                    <div className="w-16 h-16 bg-gradient-to-br from-violet-600 to-violet-800 rounded-full flex items-center justify-center mb-6 shadow-lg shadow-violet-600/40">
                      <Icon className="text-white" size={28} />
                    </div>
                    <span className="text-5xl font-bold text-violet-600/30 mb-3">{step.number}</span>
                    <h3 className="text-xl font-bold text-white mb-3">{step.title}</h3>
                    <p className="text-gray-400">{step.desc}</p>
                  </motion.div>
                );
              })}
            </div>
          </div>
        </section>
        <section className="py-12 px-4 sm:px-6 lg:px-8">
          <div className="max-w-3xl mx-auto">
            <div className="bg-violet-950/30 border border-violet-900/50 rounded-2xl p-8 text-center">
              <p className="text-white text-lg">
                <span className="font-semibold">Todo sucede en tu infraestructura.</span>{" "}
                <span className="text-gray-400">Tus datos nunca se copian. Encriptación end-to-end garantizada.</span>
              </p>
            </div>
          </div>
        </section>
        <section className="py-20 px-4 sm:px-6 lg:px-8 border-t border-violet-900/30">
          <div className="max-w-2xl mx-auto text-center">
            <h2 className="text-3xl font-bold text-white mb-6">¿Quieres verlo en acción?</h2>
            <Link href="/demo" className="inline-flex items-center gap-2 bg-violet-600 hover:bg-violet-500 text-white font-semibold px-8 py-4 rounded-xl transition-colors text-lg">
              Probar ahora →
            </Link>
          </div>
        </section>
      </main>
      <Footer />
    </>
  );
}
