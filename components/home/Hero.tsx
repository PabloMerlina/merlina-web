"use client";

import React from "react";
import { motion } from "framer-motion";
import Link from "next/link";
import { Button } from "@/components/shared/Button";
import { CONTENT } from "@/lib/content";

export const Hero: React.FC = () => {
  const containerVariants = {
    hidden: { opacity: 0 },
    visible: {
      opacity: 1,
      transition: { staggerChildren: 0.2, delayChildren: 0.1 },
    },
  };

  const itemVariants = {
    hidden: { opacity: 0, y: 20 },
    visible: { opacity: 1, y: 0, transition: { duration: 0.8 } },
  };

  return (
    <section className="min-h-screen flex items-center justify-center bg-gradient-to-b from-black via-violet-950/10 to-black pt-20 pb-20">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 w-full">
        <motion.div
          className="text-center"
          variants={containerVariants}
          initial="hidden"
          animate="visible"
        >
          {/* Main Headline */}
          <motion.h1
            variants={itemVariants}
            className="text-5xl sm:text-6xl md:text-7xl font-bold mb-6 leading-tight"
          >
            <span className="text-white">{CONTENT.hero.headline}</span>
            <br />
            <span className="bg-gradient-to-r from-violet-400 via-violet-300 to-violet-500 bg-clip-text text-transparent">
              {CONTENT.hero.subheadline}
            </span>
          </motion.h1>

          {/* Subheadline */}
          <motion.p
            variants={itemVariants}
            className="text-xl md:text-2xl text-gray-400 max-w-3xl mx-auto mb-8"
          >
            Desde métricas hasta enviar correos. Capa de decisiones, un solo
            agente, un solo chat.
          </motion.p>

          {/* CTA Buttons */}
          <motion.div
            variants={itemVariants}
            className="flex flex-col sm:flex-row gap-4 justify-center items-center mb-12"
          >
            <Link href="/demo">
              <Button size="lg">Hablar con Merlina</Button>
            </Link>
            <Link href="/resultados">
              <Button variant="secondary" size="lg">
                Ver resultados →
              </Button>
            </Link>
          </motion.div>

          {/* Animated Chat Simulation */}
          <motion.div
            variants={itemVariants}
            className="relative w-full max-w-2xl mx-auto"
          >
            <div className="bg-gradient-to-b from-violet-950/30 to-transparent border border-violet-900/50 rounded-2xl p-8 backdrop-blur-sm">
              {/* Chat bubbles */}
              <div className="space-y-4">
                {/* User message */}
                <motion.div
                  className="flex justify-end"
                  initial={{ opacity: 0, x: 20 }}
                  animate={{ opacity: 1, x: 0 }}
                  transition={{ delay: 0.5, duration: 0.6 }}
                >
                  <div className="bg-violet-600 text-white rounded-2xl rounded-tr-sm px-4 py-3 max-w-xs text-sm">
                    ¿Dónde estoy perdiendo dinero?
                  </div>
                </motion.div>

                {/* Assistant message */}
                <motion.div
                  className="flex justify-start"
                  initial={{ opacity: 0, x: -20 }}
                  animate={{ opacity: 1, x: 0 }}
                  transition={{ delay: 1.2, duration: 0.6 }}
                >
                  <div className="bg-violet-900/40 text-gray-200 rounded-2xl rounded-tl-sm px-4 py-3 max-w-xs text-sm border border-violet-900/50">
                    <p>
                      Analizo tus datos: <strong>3 áreas críticas</strong>
                    </p>
                    <ul className="mt-2 space-y-1 text-violet-300">
                      <li>• Costos operativos: +18%</li>
                      <li>• Margen en producto B: -22%</li>
                      <li>• Rotación inventario: lenta</li>
                    </ul>
                    <p className="mt-2 font-semibold">Impacto: $250K/mes</p>
                  </div>
                </motion.div>
              </div>
            </div>
          </motion.div>

          {/* Trust indicators */}
          <motion.div
            variants={itemVariants}
            className="mt-16 flex flex-col sm:flex-row justify-center items-center gap-8 text-sm text-gray-500"
          >
            <div className="flex items-center gap-2">
              <span className="text-2xl">🔒</span>
              <span>Encriptación end-to-end</span>
            </div>
            <div className="flex items-center gap-2">
              <span className="text-2xl">⚡</span>
              <span>Implementación en 3-5 días</span>
            </div>
            <div className="flex items-center gap-2">
              <span className="text-2xl">💰</span>
              <span>ROI en 3 meses</span>
            </div>
          </motion.div>
        </motion.div>
      </div>
    </section>
  );
};
