import type { Metadata } from "next";

export const metadata: Metadata = {
  title: "Casos de Uso | Merlina IA para Comercial, Operaciones y Finanzas",
  description: "Descubre cómo Merlina ayuda a equipos comerciales, operativos y financieros a tomar mejores decisiones con inteligencia artificial.",
};

export default function Layout({ children }: { children: React.ReactNode }) {
  return children;
}
