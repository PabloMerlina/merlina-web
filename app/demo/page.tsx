"use client";
import { motion } from "framer-motion";
import { ArrowRight, Zap, TrendingUp, Clock } from "lucide-react";
import { useState } from "react";
import { useForm } from "react-hook-form";

interface FormData {
  name: string;
  company: string;
  role: string;
  email: string;
  message?: string;
}

export default function DemoPage() {
  const { register, handleSubmit, formState: { errors } } = useForm<FormData>();
  const [submitted, setSubmitted] = useState(false);

  const onSubmit = async (data: FormData) => {
    try {
      const response = await fetch("/api/lead", {
        method: "POST",
        headers: { "Content-Type": "application/json" },
        body: JSON.stringify(data),
      });
      if (response.ok) {
        setSubmitted(true);
        setTimeout(() => window.location.href = "https://calendly.com/pablo-merlina", 2000);
      }
    } catch (error) {
      console.error("Error:", error);
    }
  };

  const containerVariants = {
    hidden: { opacity: 0 },
    visible: {
      opacity: 1,
      transition: { staggerChildren: 0.1, delayChildren: 0.2 },
    },
  };

  const itemVariants = {
    hidden: { opacity: 0, y: 20 },
    visible: { opacity: 1, y: 0, transition: { duration: 0.5 } },
  };

  return (
    <div className="min-h-screen bg-[#0A0A0F] text-white overflow-hidden">
      {/* Background gradient */}
      <div className="fixed inset-0 pointer-events-none">
        <div className="absolute top-0 right-0 w-96 h-96 bg-violet-600/10 rounded-full blur-3xl opacity-50" />
        <div className="absolute bottom-0 left-0 w-96 h-96 bg-violet-600/5 rounded-full blur-3xl opacity-30" />
      </div>

      {/* Main content */}
      <motion.div
        variants={containerVariants}
        initial="hidden"
        animate="visible"
        className="relative z-10 min-h-screen flex flex-col items-center justify-center px-4 sm:px-6 lg:px-8"
      >
        {/* Header */}
        <motion.div variants={itemVariants} className="text-center max-w-2xl mb-12">
          <h1 className="text-5xl sm:text-6xl lg:text-7xl font-bold mb-6 bg-gradient-to-r from-white via-violet-200 to-violet-500 bg-clip-text text-transparent">
            Hablemos de tu negocio
          </h1>
          <p className="text-lg sm:text-xl text-gray-300 mb-8">
            En 20 minutos, te mostraré cómo Merlina puede convertir tus datos en decisiones reales.
          </p>
        </motion.div>

        {/* Value propositions */}
        <motion.div variants={itemVariants} className="grid grid-cols-1 sm:grid-cols-3 gap-6 mb-12 w-full max-w-3xl">
          {[
            { icon: Zap, text: "Sin configuración técnica" },
            { icon: TrendingUp, text: "+25% eficiencia" },
            { icon: Clock, text: "Resultados en días" },
          ].map((item, idx) => (
            <div
              key={idx}
              className="flex flex-col items-center p-4 bg-white/5 border border-violet-500/20 rounded-xl backdrop-blur"
            >
              <item.icon className="w-8 h-8 text-violet-400 mb-3" />
              <p className="text-sm text-gray-300 text-center">{item.text}</p>
            </div>
          ))}
        </motion.div>

        {/* Form */}
        <motion.div
          variants={itemVariants}
          className="w-full max-w-md bg-gradient-to-b from-white/10 to-white/5 border border-violet-500/30 rounded-2xl p-8 backdrop-blur-xl"
        >
          {submitted ? (
            <div className="text-center py-8">
              <div className="inline-flex items-center justify-center w-16 h-16 bg-green-500/20 rounded-full mb-4">
                <ArrowRight className="w-8 h-8 text-green-400" />
              </div>
              <h3 className="text-xl font-bold mb-2">¡Perfecto!</h3>
              <p className="text-gray-300 text-sm">Te estamos redirigiendo a agendar la demo...</p>
            </div>
          ) : (
            <form onSubmit={handleSubmit(onSubmit)} className="space-y-4">
              <div>
                <input
                  {...register("name", { required: "Nombre requerido" })}
                  placeholder="Tu nombre"
                  className="w-full px-4 py-3 bg-white/10 border border-violet-500/30 rounded-lg text-white placeholder-gray-400 focus:outline-none focus:border-violet-500 focus:ring-1 focus:ring-violet-500"
                />
                {errors.name && <p className="text-red-400 text-xs mt-1">{errors.name.message}</p>}
              </div>

              <div>
                <input
                  {...register("company", { required: "Empresa requerida" })}
                  placeholder="Nombre de tu empresa"
                  className="w-full px-4 py-3 bg-white/10 border border-violet-500/30 rounded-lg text-white placeholder-gray-400 focus:outline-none focus:border-violet-500 focus:ring-1 focus:ring-violet-500"
                />
                {errors.company && <p className="text-red-400 text-xs mt-1">{errors.company.message}</p>}
              </div>

              <div>
                <input
                  {...register("role", { required: "Cargo requerido" })}
                  placeholder="Tu cargo (ej: Gerente Operaciones)"
                  className="w-full px-4 py-3 bg-white/10 border border-violet-500/30 rounded-lg text-white placeholder-gray-400 focus:outline-none focus:border-violet-500 focus:ring-1 focus:ring-violet-500"
                />
                {errors.role && <p className="text-red-400 text-xs mt-1">{errors.role.message}</p>}
              </div>

              <div>
                <input
                  {...register("email", {
                    required: "Email requerido",
                    pattern: { value: /^\S+@\S+$/i, message: "Email inválido" },
                  })}
                  placeholder="tu@email.com"
                  type="email"
                  className="w-full px-4 py-3 bg-white/10 border border-violet-500/30 rounded-lg text-white placeholder-gray-400 focus:outline-none focus:border-violet-500 focus:ring-1 focus:ring-violet-500"
                />
                {errors.email && <p className="text-red-400 text-xs mt-1">{errors.email.message}</p>}
              </div>

              <div>
                <textarea
                  {...register("message")}
                  placeholder="¿Qué desafío tienes? (opcional)"
                  rows={3}
                  className="w-full px-4 py-3 bg-white/10 border border-violet-500/30 rounded-lg text-white placeholder-gray-400 focus:outline-none focus:border-violet-500 focus:ring-1 focus:ring-violet-500 resize-none"
                />
              </div>

              <button
                type="submit"
                className="w-full py-3 px-4 bg-gradient-to-r from-violet-600 to-violet-700 hover:from-violet-700 hover:to-violet-800 text-white font-semibold rounded-lg transition-all duration-200 flex items-center justify-center gap-2 group"
              >
                Agendar demo
                <ArrowRight className="w-5 h-5 group-hover:translate-x-1 transition-transform" />
              </button>

              <p className="text-xs text-gray-400 text-center">
                Te contactaremos en menos de 24 horas
              </p>
            </form>
          )}
        </motion.div>

        {/* Social proof */}
        <motion.div variants={itemVariants} className="mt-16 text-center max-w-2xl">
          <p className="text-gray-400 text-sm mb-6">Empresas que confían en Merlina</p>
          <div className="flex items-center justify-center gap-8 flex-wrap opacity-60">
            {["Empresas", "Pymes", "Corporativos"].map((text) => (
              <div key={text} className="px-4 py-2 bg-white/5 border border-white/10 rounded-lg">
                <p className="text-xs font-medium text-gray-300">{text}</p>
              </div>
            ))}
          </div>
        </motion.div>

        {/* Bottom CTA */}
        <motion.div variants={itemVariants} className="mt-16 text-center">
          <p className="text-gray-400 text-sm">
            ¿Preguntas?{" "}
            <a href="mailto:hola@merlina.ai" className="text-violet-400 hover:text-violet-300 underline">
              Escribe aquí
            </a>
          </p>
        </motion.div>
      </motion.div>
    </div>
  );
}
