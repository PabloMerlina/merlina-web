import type { Metadata } from "next";
import { Inter, Geist_Mono } from "next/font/google";
import { GTM } from "@/components/GTM";
import "./globals.css";

const inter = Inter({
  variable: "--font-inter",
  subsets: ["latin"],
  weight: ["400", "500", "600", "700"],
});

const geistMono = Geist_Mono({
  variable: "--font-geist-mono",
  subsets: ["latin"],
});

export const metadata: Metadata = {
  title: "Merlina - Inteligencia Artificial para tus Decisiones Empresariales",
  description: "Convierte tus datos en decisiones y tus decisiones en resultados. Merlina es una plataforma de IA que conecta con tus datos empresariales para ayudarte a tomar mejores decisiones.",
  keywords: "IA, inteligencia artificial, business intelligence, decisiones empresariales, análisis de datos",
};

export default function RootLayout({
  children,
}: Readonly<{
  children: React.ReactNode;
}>) {
  return (
    <html
      lang="es"
      className={`${inter.variable} ${geistMono.variable} scroll-smooth`}
    >
      <head>
        <meta name="viewport" content="width=device-width, initial-scale=1.0" />
        <GTM />
      </head>
      <body className="antialiased">{children}</body>
    </html>
  );
}
