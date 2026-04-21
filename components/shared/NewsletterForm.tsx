"use client";

import React, { useState } from "react";
import { useForm } from "react-hook-form";
import { supabase, isSupabaseConfigured } from "@/lib/supabase";

interface NewsletterFormProps {
  onSuccess?: () => void;
}

export const NewsletterForm: React.FC<NewsletterFormProps> = ({ onSuccess }) => {
  const { register, handleSubmit, reset, formState: { isSubmitting } } = useForm<{
    email: string;
  }>();
  const [status, setStatus] = useState<"idle" | "loading" | "success" | "error">(
    "idle"
  );

  const onSubmit = async (data: { email: string }) => {
    setStatus("loading");

    try {
      if (!isSupabaseConfigured()) {
        setStatus("success");
        reset();
        onSuccess?.();
        return;
      }

      const { error } = await (supabase as any)
        .from("email_subscribers")
        .insert([{ email: data.email }]);

      if (error) {
        if (error.message.includes("duplicate")) {
          setStatus("success");
        } else {
          setStatus("error");
        }
        return;
      }

      setStatus("success");
      reset();
      onSuccess?.();

      setTimeout(() => setStatus("idle"), 3000);
    } catch {
      setStatus("error");
    }
  };

  return (
    <form onSubmit={handleSubmit(onSubmit)} className="flex gap-2">
      <input
        {...register("email", {
          required: true,
          pattern: { value: /^\S+@\S+$/i, message: "" },
        })}
        type="email"
        placeholder="Tu email"
        className="flex-1 px-4 py-2 bg-white/10 border border-white/20 rounded-lg text-white placeholder:text-gray-500 focus:outline-none focus:border-violet-600"
      />
      <button
        type="submit"
        disabled={isSubmitting || status === "loading"}
        className="px-6 py-2 bg-violet-600 hover:bg-violet-700 text-white rounded-lg font-semibold transition-colors disabled:opacity-50"
      >
        {status === "loading" ? "..." : "Suscribir"}
      </button>
      {status === "success" && (
        <span className="text-green-400 text-sm whitespace-nowrap">✓ Listo</span>
      )}
    </form>
  );
};
