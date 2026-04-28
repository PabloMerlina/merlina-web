import type { Metadata } from "next";

export const metadata: Metadata = {
  title: "Cómo Funciona Merlina | Conecta tus Datos y Decide con IA",
  description: "Merlina se conecta a tu ERP, CRM o Excel en menos de 5 días. Sin integraciones complejas. Obtén respuestas accionables al instante.",
};

export default function Layout({ children }: { children: React.ReactNode }) {
  return children;
}
