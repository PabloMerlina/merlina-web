import type { Metadata } from "next";

export const metadata: Metadata = {
  title: "¿Qué es Merlina? | IA para Análisis de Datos Empresariales",
  description: "Descubre cómo Merlina transforma los datos de tu empresa en decisiones claras. Un agente de IA que entiende tu negocio y responde como tu mejor analista.",
};

export default function Layout({ children }: { children: React.ReactNode }) {
  return children;
}
