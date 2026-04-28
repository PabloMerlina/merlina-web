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
  title: "Merlina | Agente de IA para Decisiones Empresariales en Tiempo Real",
  description: "Merlina es el agente de inteligencia artificial que analiza los datos de tu empresa y te dice exactamente qué hacer. Conecta con tu ERP, CRM o Excel y obtén respuestas en segundos.",
  openGraph: {
    title: "Merlina | Agente de IA para Decisiones Empresariales",
    description: "Merlina es el agente de IA que analiza los datos de tu empresa y te dice qué hacer. Conecta ERP, CRM o Excel y obtén respuestas en segundos.",
    url: "https://merlina.ai",
    siteName: "Merlina",
    locale: "es_CL",
    type: "website",
  },
  robots: { index: true, follow: true },
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
        <script
          type="application/ld+json"
          dangerouslySetInnerHTML={{
            __html: JSON.stringify({
              "@context": "https://schema.org",
              "@type": "SoftwareApplication",
              name: "Merlina",
              description: "Agente de inteligencia artificial para toma de decisiones empresariales",
              applicationCategory: "BusinessApplication",
              operatingSystem: "Web",
              url: "https://merlina.ai",
            }),
          }}
        />
      </head>
      <body className="antialiased">{children}</body>
    </html>
  );
}
