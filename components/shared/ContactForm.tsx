"use client";

import React, { useState } from "react";
import { useForm } from "react-hook-form";
import { motion } from "framer-motion";
import { supabase, isSupabaseConfigured } from "@/lib/supabase";

interface ContactFormData {
  name: string;
  email: string;
  company: string;
  position: string;
  message?: string;
}

interface ContactFormProps {
  variant?: "default" | "compact";
  onSuccess?: () => void;
}

export const ContactForm: React.FC<ContactFormProps> = ({
  variant = "default",
  onSuccess,
}) => {
  const {
    register,
    handleSubmit,
    reset,
    formState: { errors, isSubmitting },
  } = useForm<ContactFormData>();

  const [submitStatus, setSubmitStatus] = useState<
    "idle" | "loading" | "success" | "error"
  >("idle");
  const [errorMessage, setErrorMessage] = useState("");

  const onSubmit = async (data: ContactFormData) => {
    setSubmitStatus("loading");
    setErrorMessage("");

    try {
      if (!isSupabaseConfigured()) {
        setSubmitStatus("error");
        setErrorMessage("Supabase no está configurado. Por favor intenta en unos momentos.");
        return;
      }

      const { error } = await (supabase as any).from("leads").insert([
        {
          name: data.name,
          email: data.email,
          company: data.company || null,
          position: data.position || null,
          message: data.message || null,
        },
      ]);

      if (error) {
        setSubmitStatus("error");
        setErrorMessage(error.message);
        return;
      }

      setSubmitStatus("success");
      reset();
      onSuccess?.();

      setTimeout(() => {
        setSubmitStatus("idle");
      }, 3000);
    } catch (err) {
      setSubmitStatus("error");
      setErrorMessage("Ocurrió un error. Intenta de nuevo.");
    }
  };

  if (variant === "compact") {
    return (
      <form onSubmit={handleSubmit(onSubmit)} className="flex flex-col gap-3">
        <input
          {...register("name", { required: "Nombre requerido" })}
          placeholder="Tu nombre"
          className="px-4 py-2 bg-violet-950/20 border border-violet-900/30 rounded-lg text-white placeholder:text-gray-500 focus:outline-none focus:border-violet-600"
        />
        <input
          {...register("email", {
            required: "Email requerido",
            pattern: { value: /^\S+@\S+$/i, message: "Email inválido" },
          })}
          placeholder="tu@email.com"
          type="email"
          className="px-4 py-2 bg-violet-950/20 border border-violet-900/30 rounded-lg text-white placeholder:text-gray-500 focus:outline-none focus:border-violet-600"
        />
        <input
          {...register("company")}
          placeholder="Tu empresa (opcional)"
          className="px-4 py-2 bg-violet-950/20 border border-violet-900/30 rounded-lg text-white placeholder:text-gray-500 focus:outline-none focus:border-violet-600"
        />
        <button
          type="submit"
          disabled={isSubmitting || submitStatus === "loading"}
          className="px-6 py-2 bg-gradient-to-r from-violet-600 to-violet-700 text-white rounded-full font-semibold hover:from-violet-700 hover:to-violet-800 transition-all disabled:opacity-50"
        >
          {submitStatus === "loading" ? "Enviando..." : "Quiero hablar con Merlina"}
        </button>

        {submitStatus === "success" && (
          <p className="text-green-400 text-sm">
            ✓ ¡Gracias! Pronto te contactaremos.
          </p>
        )}
        {submitStatus === "error" && (
          <p className="text-red-400 text-sm">{errorMessage}</p>
        )}
      </form>
    );
  }

  return (
    <motion.form
      onSubmit={handleSubmit(onSubmit)}
      className="flex flex-col gap-6 max-w-md mx-auto"
      initial={{ opacity: 0, y: 20 }}
      whileInView={{ opacity: 1, y: 0 }}
      viewport={{ once: true }}
    >
      <div>
        <label className="block text-sm text-gray-400 mb-2">Nombre</label>
        <input
          {...register("name", { required: "Nombre requerido" })}
          placeholder="Tu nombre completo"
          className="w-full px-4 py-3 bg-violet-950/20 border border-violet-900/30 rounded-lg text-white placeholder:text-gray-500 focus:outline-none focus:border-violet-600 transition-colors"
        />
        {errors.name && (
          <p className="text-red-400 text-xs mt-1">{errors.name.message}</p>
        )}
      </div>

      <div>
        <label className="block text-sm text-gray-400 mb-2">Email</label>
        <input
          {...register("email", {
            required: "Email requerido",
            pattern: { value: /^\S+@\S+$/i, message: "Email inválido" },
          })}
          type="email"
          placeholder="tu@empresa.com"
          className="w-full px-4 py-3 bg-violet-950/20 border border-violet-900/30 rounded-lg text-white placeholder:text-gray-500 focus:outline-none focus:border-violet-600 transition-colors"
        />
        {errors.email && (
          <p className="text-red-400 text-xs mt-1">{errors.email.message}</p>
        )}
      </div>

      <div className="grid grid-cols-2 gap-4">
        <div>
          <label className="block text-sm text-gray-400 mb-2">Empresa</label>
          <input
            {...register("company")}
            placeholder="Tu empresa"
            className="w-full px-4 py-3 bg-violet-950/20 border border-violet-900/30 rounded-lg text-white placeholder:text-gray-500 focus:outline-none focus:border-violet-600 transition-colors"
          />
        </div>
        <div>
          <label className="block text-sm text-gray-400 mb-2">Cargo</label>
          <input
            {...register("position")}
            placeholder="Tu cargo"
            className="w-full px-4 py-3 bg-violet-950/20 border border-violet-900/30 rounded-lg text-white placeholder:text-gray-500 focus:outline-none focus:border-violet-600 transition-colors"
          />
        </div>
      </div>

      <div>
        <label className="block text-sm text-gray-400 mb-2">
          Mensaje (opcional)
        </label>
        <textarea
          {...register("message")}
          placeholder="¿Qué desafío quieres resolver con Merlina?"
          rows={4}
          className="w-full px-4 py-3 bg-violet-950/20 border border-violet-900/30 rounded-lg text-white placeholder:text-gray-500 focus:outline-none focus:border-violet-600 transition-colors resize-none"
        />
      </div>

      <motion.button
        type="submit"
        disabled={isSubmitting || submitStatus === "loading"}
        className="w-full px-6 py-4 bg-gradient-to-r from-violet-600 to-violet-700 text-white rounded-full font-bold hover:from-violet-700 hover:to-violet-800 transition-all disabled:opacity-50 text-lg"
        whileHover={{ scale: 1.02 }}
        whileTap={{ scale: 0.98 }}
      >
        {submitStatus === "loading" ? "Enviando..." : "Quiero hablar con Merlina"}
      </motion.button>

      <AnimatedStatus status={submitStatus} errorMessage={errorMessage} />
    </motion.form>
  );
};

const AnimatedStatus: React.FC<{
  status: "idle" | "loading" | "success" | "error";
  errorMessage: string;
}> = ({ status, errorMessage }) => {
  if (status === "idle" || status === "loading") return null;

  return (
    <motion.div
      initial={{ opacity: 0, y: -10 }}
      animate={{ opacity: 1, y: 0 }}
      className={`p-4 rounded-lg text-center font-semibold ${
        status === "success"
          ? "bg-green-900/20 border border-green-600/50 text-green-400"
          : "bg-red-900/20 border border-red-600/50 text-red-400"
      }`}
    >
      {status === "success"
        ? "✓ ¡Gracias! En breve nos pondremos en contacto."
        : errorMessage}
    </motion.div>
  );
};
