"use client";
import { Navbar } from "@/components/layout/Navbar";
import { Footer } from "@/components/layout/Footer";
import { motion, AnimatePresence } from "framer-motion";
import Link from "next/link";
import { useState } from "react";
import { Plus, Minus } from "lucide-react";

const faqs = [
  { q: "¿Necesito conocimientos técnicos?", a: "No. Merlina se adapta completamente a ti. Si puedes escribir una pregunta, puedes usar Merlina. No necesitas saber de datos, programación ni análisis." },
  { q: "¿Cuánto demora la implementación?", a: "Mucho menos de lo que imaginas. En la mayoría de los casos tenemos tu primera conversación funcionando en días, no meses." },
  { q: "¿Es caro?", a: "Más caro es no saber qué decisiones tomar. Merlina está diseñada para pagarse sola con los resultados que genera desde el primer mes." },
  { q: "¿Mis datos están seguros?", a: "Absolutamente. Todo sucede en tu infraestructura. Tus datos nunca se copian a servidores externos. Encriptación end-to-end garantizada." },
  { q: "¿Con qué fuentes de datos se conecta?", a: "ERP, CRM, Excel, bases de datos, APIs y la mayoría de herramientas empresariales. Si tus datos están en algún lado, Merlina puede conectarse." },
  { q: "¿Funciona para mi industria?", a: "Merlina aprende tu negocio específico, no trabaja con plantillas genéricas. Funciona para retail, manufactura, servicios, logística y más." },
];

function FAQItem({ faq, index }: { faq: { q: string; a: string }; index: number }) {
  const [open, setOpen] = useState(false);
  return (
    <motion.div className="border border-violet-900/40 rounded-xl overflow-hidden" initial={{ opacity: 0, y: 10 }} whileInView={{ opacity: 1, y: 0 }} viewport={{ once: true }} transition={{ delay: index * 0.07 }}>
      <button onClick={() => setOpen(!open)} className="w-full flex items-center justify-between p-6 text-left hover:bg-violet-950/20 transition-colors">
        <span className="text-white font-semibold pr-4">{faq.q}</span>
        {open ? <Minus className="text-violet-400 shrink-0" size={20} /> : <Plus className="text-violet-400 shrink-0" size={20} />}
      </button>
      <AnimatePresence>
        {open && (
          <motion.div initial={{ height: 0, opacity: 0 }} animate={{ height: "auto", opacity: 1 }} exit={{ height: 0, opacity: 0 }} transition={{ duration: 0.3 }} className="overflow-hidden">
            <p className="px-6 pb-6 text-gray-400">{faq.a}</p>
          </motion.div>
        )}
      </AnimatePresence>
    </motion.div>
  );
}

export default function FAQ() {
  return (
    <>
      <Navbar />
      <main className="bg-black min-h-screen">
        <section className="py-24 px-4 sm:px-6 lg:px-8 border-b border-violet-900/30">
          <div className="max-w-4xl mx-auto text-center">
            <motion.p className="text-violet-400 text-sm font-semibold uppercase tracking-widest mb-4" initial={{ opacity: 0 }} animate={{ opacity: 1 }}>
              Preguntas frecuentes
            </motion.p>
            <motion.h1 className="text-4xl sm:text-5xl font-bold text-white mb-6" initial={{ opacity: 0, y: 20 }} animate={{ opacity: 1, y: 0 }} transition={{ delay: 0.1 }}>
              Todo lo que necesitas{" "}
              <span className="bg-gradient-to-r from-violet-400 to-violet-600 bg-clip-text text-transparent">saber.</span>
            </motion.h1>
          </div>
        </section>
        <section className="py-20 px-4 sm:px-6 lg:px-8">
          <div className="max-w-3xl mx-auto space-y-4">
            {faqs.map((faq, i) => <FAQItem key={i} faq={faq} index={i} />)}
          </div>
          <div className="max-w-3xl mx-auto mt-10 text-center">
            <p className="text-gray-400">¿Tu pregunta no está aquí?{" "}
              <a href="mailto:hola@merlina.ai" className="text-violet-400 hover:text-violet-300 transition-colors">Escribe a hola@merlina.ai →</a>
            </p>
          </div>
        </section>
        <section className="py-20 px-4 sm:px-6 lg:px-8 bg-gradient-to-b from-black to-violet-950/10">
          <div className="max-w-3xl mx-auto text-center">
            <h2 className="text-2xl font-bold text-white mb-6">Sobre nosotros</h2>
            <div className="bg-violet-950/20 border border-violet-900/40 rounded-2xl p-10">
              <p className="text-gray-400 mb-4">Merlina es desarrollada por</p>
              <p className="text-white text-2xl font-bold mb-2">Evolve DS</p>
              <p className="text-gray-400">Expertos en inteligencia artificial aplicada al negocio.</p>
              <p className="text-violet-400 text-sm mt-4 font-semibold">AI · Business Intelligence</p>
            </div>
          </div>
        </section>
        <section className="py-20 px-4 sm:px-6 lg:px-8 border-t border-violet-900/30">
          <div className="max-w-2xl mx-auto text-center">
            <h2 className="text-3xl font-bold text-white mb-6">¿Listo para empezar?</h2>
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
