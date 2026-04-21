"use client";

import React from "react";
import { motion } from "framer-motion";
import { SectionHeader } from "@/components/shared/SectionHeader";
import { CONTENT } from "@/lib/content";
import { TrendingUp } from "lucide-react";

export const KPIResults: React.FC = () => {
  const containerVariants = {
    hidden: { opacity: 0 },
    visible: {
      opacity: 1,
      transition: { staggerChildren: 0.2 },
    },
  };

  const itemVariants = {
    hidden: { opacity: 0, scale: 0.8 },
    visible: { opacity: 1, scale: 1, transition: { duration: 0.6 } },
  };

  return (
    <section className="py-20 px-4 sm:px-6 lg:px-8 bg-black">
      <div className="max-w-6xl mx-auto">
        <SectionHeader title={CONTENT.kpis.title} />

        <motion.div
          className="grid grid-cols-1 md:grid-cols-3 gap-8 mt-16"
          variants={containerVariants}
          initial="hidden"
          whileInView="visible"
          viewport={{ once: true, margin: "-100px" }}
        >
          {CONTENT.kpis.metrics.map((metric, index) => (
            <motion.div
              key={index}
              variants={itemVariants}
              className="relative p-8 bg-gradient-to-br from-green-950/40 to-green-950/10 border border-green-900/30 rounded-2xl text-center overflow-hidden group"
              whileHover={{ scale: 1.05 }}
            >
              {/* Background glow */}
              <div className="absolute inset-0 bg-gradient-to-br from-green-600/10 to-transparent opacity-0 group-hover:opacity-100 transition-opacity duration-300" />

              <div className="relative z-10">
                <motion.div
                  className="text-5xl md:text-6xl font-bold bg-gradient-to-r from-green-400 to-emerald-400 bg-clip-text text-transparent mb-4"
                  initial={{ scale: 0 }}
                  whileInView={{ scale: 1 }}
                  viewport={{ once: true }}
                  transition={{ type: "spring", delay: index * 0.15 }}
                >
                  {metric.value}
                </motion.div>

                <p className="text-gray-300 text-lg font-semibold">
                  {metric.label}
                </p>

                <div className="mt-4 flex justify-center">
                  <TrendingUp className="text-green-500 animate-bounce" size={24} />
                </div>
              </div>
            </motion.div>
          ))}
        </motion.div>

        {/* Impact statement */}
        <motion.div
          className="mt-16 text-center"
          initial={{ opacity: 0, y: 20 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          transition={{ duration: 0.8, delay: 0.4 }}
        >
          <p className="text-gray-400 text-lg max-w-2xl mx-auto mb-6">
            Estos son resultados reales de nuestros clientes en los primeros 90 días.
          </p>
          <p className="text-xl text-white font-semibold">
            ¿Cuál sería el impacto en <span className="text-green-400">tu empresa</span>?
          </p>
        </motion.div>
      </div>
    </section>
  );
};
