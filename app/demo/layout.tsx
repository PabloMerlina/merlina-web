import type { Metadata } from "next";

export const metadata: Metadata = {
  title: "Habla con Merlina | Demo Gratuita del Agente de IA",
  description: "Agenda una demo gratuita y descubre cómo Merlina puede transformar los datos de tu empresa en decisiones en menos de 24 horas.",
};

export default function Layout({ children }: { children: React.ReactNode }) {
  return children;
}
