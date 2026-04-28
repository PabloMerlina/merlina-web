import type { Metadata } from "next";

export const metadata: Metadata = {
  title: "Preguntas Frecuentes | Merlina Agente de IA Empresarial",
  description: "Resuelve tus dudas sobre Merlina: cómo funciona, qué datos necesita, cuánto tarda en implementarse y qué resultados puedes esperar.",
};

export default function Layout({ children }: { children: React.ReactNode }) {
  return children;
}
