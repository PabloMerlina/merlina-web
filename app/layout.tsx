import type { Metadata } from "next";
import { Inter, Geist_Mono } from "next/font/google";
import Script from "next/script";
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
        {/* Meta Pixel */}
        <Script
          id="fb-pixel"
          strategy="afterInteractive"
          dangerouslySetInnerHTML={{
            __html: `
              !function(f,b,e,v,n,t,s)
              {if(f.fbq)return;n=f.fbq=function(){n.callMethod?
              n.callMethod.apply(n,arguments):n.queue.push(arguments)};
              if(!f._fbq)f._fbq=n;n.push=n;n.loaded=!0;n.version='2.0';
              n.queue=[];t=b.createElement(e);t.async=!0;
              t.src=v;s=b.getElementsByTagName(e)[0];
              s.parentNode.insertBefore(t,s)}(window, document,'script',
              'https://connect.facebook.net/en_US/fbevents.js');
              fbq('init', '1069839642886186');
              fbq('track', 'PageView');
            `,
          }}
        />
        <noscript>
          <img
            height="1"
            width="1"
            style={{ display: "none" }}
            src="https://www.facebook.com/tr?id=1069839642886186&ev=PageView&noscript=1"
            alt="Meta Pixel"
          />
        </noscript>
      </head>
      <body className="antialiased">{children}</body>
    </html>
  );
}
