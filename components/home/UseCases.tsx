"use client";

import React, { useState } from "react";
import { motion, AnimatePresence } from "framer-motion";
import { SectionHeader } from "@/components/shared/SectionHeader";
import { CONTENT } from "@/lib/content";

const verticals = [
  {
    id: "comercial",
    name: "Comercial",
    icon: "🎯",
    cases: [
      {
        question: "¿Por qué bajaron mis ventas?",
        answer: "Análisis de caída en canales específicos",
        result: "Decisiones correctivas en 24h",
      },
      {
        question: "¿Dónde debo enfocar esfuerzos?",
        answer: "Segmentación de clientes por potencial",
        result: "+25% en propuestas ganadas",
      },
      {
        question: "¿Qué precio es óptimo?",
        answer: "Análisis de elasticidad de precio",
        result: "+18% en ingresos",
      },
    ],
  },
  {
    id: "operaciones",
    name: "Operaciones",
    icon: "⚙️",
    cases: [
      {
        question: "¿Dónde estoy perdiendo dinero?",
        answer: "Identificación de ineficiencias",
        result: "+30% en margen operativo",
      },
      {
        question: "¿Cómo optimizo procesos?",
        answer: "Benchmark vs industria",
        result: "-35% en costos operativos",
      },
      {
        question: "¿Quién son mis proveedores críticos?",
        answer: "Análisis de riesgo de cadena",
        result: "Planes de contingencia listos",
      },
    ],
  },
  {
    id: "supply",
    name: "Supply Chain",
    icon: "📦",
    cases: [
      {
        question: "¿Cuánto inventario necesito?",
        answer: "Forecasting inteligente",
        result: "-25% en costos de almacén",
      },
      {
        question: "¿Dónde hay stockout?",
        answer: "Predicción de demanda por SKU",
        result: "+20% en disponibilidad",
      },
      {
        question: "¿Cuál es mi mejor ruta?",
        answer: "Optimización logística",
        result: "-40% en costo de distribución",
      },
    ],
  },
  {
    id: "finanzas",
    name: "Finanzas",
    icon: "💰",
    cases: [
      {
        question: "¿Cómo optimizo mi cash flow?",
        answer: "Proyecciones inteligentes",
        result: "Mejor gestión de liquidez",
      },
      {
        question: "¿Cuál es mi rentabilidad real?",
        answer: "Desglose por línea/cliente",
        result: "Decisiones de pricing correctas",
      },
      {
        question: "¿Dónde está mi dinero?",
        answer: "Análisis de capas de flujo",
        result: "Liberación de $500K en capital",
      },
    ],
  },
];

export const UseCases: React.FC = () => {
  const [activeVertical, setActiveVertical] = useState(0);

  const containerVariants = {
    hidden: { opacity: 0 },
    visible: {
      opacity: 1,
      transition: { staggerChildren: 0.1 },
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
          title="Casos de Uso por Vertical"
          subtitle="Merlina se adapta a tu industria"
        />

        {/* Vertical Tabs */}
        <motion.div
          className="flex flex-col sm:flex-row gap-4 justify-center mt-12 mb-12"
          variants={containerVariants}
          initial="hidden"
          whileInView="visible"
          viewport={{ once: true, margin: "-100px" }}
        >
          {verticals.map((vertical, index) => (
            <motion.button
              key={vertical.id}
              variants={itemVariants}
              onClick={() => setActiveVertical(index)}
              className={`px-6 py-3 rounded-full font-semibold transition-all duration-300 flex items-center gap-2 ${
                activeVertical === index
                  ? "bg-gradient-to-r from-violet-600 to-violet-700 text-white shadow-lg"
                  : "bg-violet-950/20 text-gray-400 hover:text-white hover:bg-violet-950/40"
              }`}
            >
              <span className="text-xl">{vertical.icon}</span>
              {vertical.name}
            </motion.button>
          ))}
        </motion.div>

        {/* Cases Grid */}
        <AnimatePresence mode="wait">
          <motion.div
            key={activeVertical}
            className="grid grid-cols-1 md:grid-cols-3 gap-6"
            initial={{ opacity: 0, y: 20 }}
            animate={{ opacity: 1, y: 0 }}
            exit={{ opacity: 0, y: -20 }}
            transition={{ duration: 0.5 }}
          >
            {verticals[activeVertical].cases.map((useCase, idx) => (
              <motion.div
                key={idx}
                className="p-6 bg-gradient-to-br from-violet-950/30 to-violet-950/10 border border-violet-900/30 rounded-xl hover:border-violet-600/50 transition-all duration-300 group"
                whileHover={{ scale: 1.02, translateY: -5 }}
              >
                {/* Question (User) */}
                <div className="mb-4 p-3 bg-violet-600/20 rounded-lg border-l-4 border-violet-600">
                  <p className="text-sm text-gray-400 mb-1">Pregunta</p>
                  <p className="text-white font-semibold">{useCase.question}</p>
                </div>

                {/* Arrow */}
                <div className="text-center mb-4">
                  <span className="text-2xl">↓</span>
                </div>

                {/* Answer (Merlina) */}
                <div className="mb-4 p-3 bg-violet-900/20 rounded-lg border-l-4 border-violet-400">
                  <p className="text-sm text-gray-400 mb-1">Merlina responde</p>
                  <p className="text-violet-300 font-semibold">{useCase.answer}</p>
                </div>

                {/* Result */}
                <div className="p-3 bg-green-900/20 rounded-lg border-l-4 border-green-500">
                  <p className="text-sm text-gray-400 mb-1">Resultado</p>
                  <p className="text-green-400 font-bold">{useCase.result}</p>
                </div>
              </motion.div>
            ))}
          </motion.div>
        </AnimatePresence>

        {/* CTA */}
        <motion.div
          className="mt-16 text-center"
          initial={{ opacity: 0 }}
          whileInView={{ opacity: 1 }}
          viewport={{ once: true }}
          transition={{ duration: 0.8, delay: 0.3 }}
        >
          <p className="text-gray-400 text-lg max-w-2xl mx-auto">
            ¿Tu caso de uso no está aquí? <br />
            <span className="text-violet-400 font-semibold">
              Merlina aprende de tu contexto específico
            </span>
          </p>
        </motion.div>
      </div>
    </section>
  );
};
