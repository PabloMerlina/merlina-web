"use client";

import React from "react";
import { motion } from "framer-motion";
import { SectionHeader } from "@/components/shared/SectionHeader";
import { ContactForm } from "@/components/shared/ContactForm";

export const CTAFinal: React.FC = () => {
  return (
    <section className="py-20 px-4 sm:px-6 lg:px-8 bg-gradient-to-b from-black to-violet-950/20">
      <div className="max-w-3xl mx-auto">
        <motion.div
          initial={{ opacity: 0, y: 20 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          transition={{ duration: 0.6 }}
          className="mb-16 text-center"
        >
          <h2 className="text-4xl md:text-5xl font-bold text-white mb-6">
            ¿Listo para transformar tus datos en decisiones?
          </h2>
          <p className="text-xl text-gray-400 mb-4">
            En menos de 24 horas, Merlina estará conectada a tus datos y respondiendo preguntas.
          </p>
          <div className="flex flex-wrap justify-center gap-4 text-sm text-gray-500 mt-8">
            <div className="flex items-center gap-2">
              <span className="text-green-500">✓</span> Sin integración técnica compleja
            </div>
            <div className="flex items-center gap-2">
              <span className="text-green-500">✓</span> ROI garantizado
            </div>
            <div className="flex items-center gap-2">
              <span className="text-green-500">✓</span> Soporte dedicado
            </div>
          </div>
        </motion.div>

        <motion.div
          className="p-8 bg-gradient-to-br from-violet-950/40 to-violet-950/10 border border-violet-900/30 rounded-2xl"
          initial={{ opacity: 0, y: 30 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          transition={{ duration: 0.6, delay: 0.2 }}
        >
          <ContactForm onSuccess={() => {
            // Optional: track conversion event
            console.log("Lead submitted");
          }} />
        </motion.div>

        <motion.p
          className="text-center text-gray-500 text-sm mt-8"
          initial={{ opacity: 0 }}
          whileInView={{ opacity: 1 }}
          viewport={{ once: true }}
          transition={{ duration: 0.6, delay: 0.4 }}
        >
          Tus datos son seguros. Usamos encriptación de extremo a extremo.
        </motion.p>
      </div>
    </section>
  );
};
