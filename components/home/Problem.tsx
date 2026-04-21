"use client";

import React from "react";
import { motion } from "framer-motion";
import { SectionHeader } from "@/components/shared/SectionHeader";
import { CONTENT } from "@/lib/content";
import { AlertCircle } from "lucide-react";

export const Problem: React.FC = () => {
  const containerVariants = {
    hidden: { opacity: 0 },
    visible: {
      opacity: 1,
      transition: { staggerChildren: 0.15 },
    },
  };

  const itemVariants = {
    hidden: { opacity: 0, x: -20 },
    visible: { opacity: 1, x: 0, transition: { duration: 0.6 } },
  };

  return (
    <section className="py-20 px-4 sm:px-6 lg:px-8 bg-black">
      <div className="max-w-4xl mx-auto">
        <SectionHeader title={CONTENT.problem.title} centered />

        <motion.div
          className="mt-16 space-y-6"
          variants={containerVariants}
          initial="hidden"
          whileInView="visible"
          viewport={{ once: true, margin: "-100px" }}
        >
          {CONTENT.problem.points.map((point, index) => (
            <motion.div
              key={index}
              variants={itemVariants}
              className="flex gap-4 p-6 bg-violet-950/20 border border-violet-900/30 rounded-2xl hover:bg-violet-950/40 transition-colors"
            >
              <div className="flex-shrink-0">
                <AlertCircle className="text-red-500" size={24} />
              </div>
              <div className="flex-1">
                <p className="text-lg text-gray-300">{point}</p>
              </div>
            </motion.div>
          ))}
        </motion.div>

        {/* Impact statement */}
        <motion.div
          className="mt-12 text-center"
          initial={{ opacity: 0, y: 20 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          transition={{ duration: 0.8, delay: 0.4 }}
        >
          <p className="text-gray-400 text-lg mb-4">
            El resultado: <span className="text-red-500">decisiones tardías y oportunidades perdidas</span>
          </p>
          <p className="text-2xl font-bold bg-gradient-to-r from-red-500 to-orange-500 bg-clip-text text-transparent">
            Pero hay una solución…
          </p>
        </motion.div>
      </div>
    </section>
  );
};
