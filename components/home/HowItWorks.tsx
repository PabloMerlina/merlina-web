"use client";

import React from "react";
import { motion } from "framer-motion";
import { SectionHeader } from "@/components/shared/SectionHeader";
import { CONTENT } from "@/lib/content";
import { Database, Settings, MessageCircle, ArrowRight } from "lucide-react";

const icons = [Database, Settings, MessageCircle];

export const HowItWorks: React.FC = () => {
  const containerVariants = {
    hidden: { opacity: 0 },
    visible: {
      opacity: 1,
      transition: { staggerChildren: 0.2 },
    },
  };

  const itemVariants = {
    hidden: { opacity: 0, y: 20 },
    visible: { opacity: 1, y: 0, transition: { duration: 0.6 } },
  };

  return (
    <section className="py-20 px-4 sm:px-6 lg:px-8 bg-gradient-to-b from-black to-violet-950/10">
      <div className="max-w-6xl mx-auto">
        <SectionHeader title={CONTENT.howItWorks.title} />

        <motion.div
          className="grid grid-cols-1 md:grid-cols-3 gap-8 mt-16 relative"
          variants={containerVariants}
          initial="hidden"
          whileInView="visible"
          viewport={{ once: true, margin: "-100px" }}
        >
          {/* Connection lines (desktop only) */}
          <div className="hidden md:block absolute top-1/3 left-0 right-0 h-1 bg-gradient-to-r from-transparent via-violet-600 to-transparent" />

          {CONTENT.howItWorks.steps.map((step, index) => {
            const Icon = icons[index];
            return (
              <motion.div
                key={step.number}
                variants={itemVariants}
                className="relative z-10"
              >
                <div className="flex flex-col items-center text-center">
                  {/* Number circle */}
                  <motion.div
                    className="w-16 h-16 bg-gradient-to-br from-violet-600 to-violet-800 rounded-full flex items-center justify-center mb-6 shadow-lg shadow-violet-600/50"
                    whileHover={{ scale: 1.1 }}
                  >
                    <Icon className="text-white" size={28} />
                  </motion.div>

                  {/* Step number */}
                  <span className="text-6xl font-bold text-violet-600/30 mb-2">
                    {step.number}
                  </span>

                  {/* Content */}
                  <h3 className="text-2xl font-bold text-white mb-3">
                    {step.title}
                  </h3>
                  <p className="text-gray-400">{step.description}</p>
                </div>

                {/* Arrow (desktop only) */}
                {index < CONTENT.howItWorks.steps.length - 1 && (
                  <motion.div
                    className="hidden md:flex absolute -right-4 top-1/3 z-20 text-violet-600"
                    animate={{ x: [0, 4, 0] }}
                    transition={{ duration: 2, repeat: Infinity }}
                  >
                    <ArrowRight size={24} />
                  </motion.div>
                )}
              </motion.div>
            );
          })}
        </motion.div>

        {/* Call out box */}
        <motion.div
          className="mt-16 p-8 bg-violet-950/30 border border-violet-900/50 rounded-2xl text-center"
          initial={{ opacity: 0 }}
          whileInView={{ opacity: 1 }}
          viewport={{ once: true }}
          transition={{ duration: 0.8, delay: 0.4 }}
        >
          <p className="text-white text-lg">
            <span className="font-semibold">Todo sucede en tu infraestructura</span>
            . Tus datos nunca se copian. Encriptación end-to-end garantizada.
          </p>
        </motion.div>
      </div>
    </section>
  );
};
