"use client";

import React from "react";
import { motion } from "framer-motion";
import { SectionHeader } from "@/components/shared/SectionHeader";
import { CONTENT } from "@/lib/content";
import { Sparkles, Brain, Zap } from "lucide-react";

const icons = [Sparkles, Brain, Zap];

export const WhatIsMerlina: React.FC = () => {
  const containerVariants = {
    hidden: { opacity: 0 },
    visible: {
      opacity: 1,
      transition: { staggerChildren: 0.15 },
    },
  };

  const itemVariants = {
    hidden: { opacity: 0, y: 20 },
    visible: { opacity: 1, y: 0, transition: { duration: 0.6 } },
  };

  return (
    <section className="py-20 px-4 sm:px-6 lg:px-8 bg-black">
      <div className="max-w-6xl mx-auto">
        <SectionHeader
          title={CONTENT.whatIsMerlina.title}
          subtitle={CONTENT.whatIsMerlina.description}
        />

        <motion.div
          className="grid grid-cols-1 md:grid-cols-3 gap-8 mt-16"
          variants={containerVariants}
          initial="hidden"
          whileInView="visible"
          viewport={{ once: true, margin: "-100px" }}
        >
          {CONTENT.whatIsMerlina.features.map((feature, index) => {
            const Icon = icons[index];
            return (
              <motion.div
                key={index}
                variants={itemVariants}
                className="p-8 bg-gradient-to-br from-violet-950/40 to-violet-950/10 border border-violet-900/30 rounded-2xl hover:bg-violet-950/60 transition-all duration-300 group cursor-pointer"
              >
                <Icon className="text-violet-400 mb-4 group-hover:scale-110 transition-transform" size={32} />
                <p className="text-white text-lg font-semibold">{feature}</p>
              </motion.div>
            );
          })}
        </motion.div>

        {/* Bottom insight */}
        <motion.div
          className="mt-16 text-center"
          initial={{ opacity: 0 }}
          whileInView={{ opacity: 1 }}
          viewport={{ once: true }}
          transition={{ duration: 0.8, delay: 0.3 }}
        >
          <p className="text-gray-400 text-lg max-w-2xl mx-auto">
            <span className="text-violet-400 font-semibold">
              Es como tener a tu mejor analista disponible 24/7
            </span>
            , respondiendo preguntas sobre tu negocio en segundos.
          </p>
        </motion.div>
      </div>
    </section>
  );
};
