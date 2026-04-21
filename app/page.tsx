"use client";

import { Navbar } from "@/components/layout/Navbar";
import { Footer } from "@/components/layout/Footer";
import { Hero } from "@/components/home/Hero";
import { Problem } from "@/components/home/Problem";
import { WhatIsMerlina } from "@/components/home/WhatIsMerlina";
import { HowItWorks } from "@/components/home/HowItWorks";
import { KPIResults } from "@/components/home/KPIResults";
import { UseCases } from "@/components/home/UseCases";
import { CTAFinal } from "@/components/home/CTAFinal";

export default function Home() {
  return (
    <>
      <Navbar />
      <main className="bg-black">
        <Hero />
        <Problem />
        <WhatIsMerlina />
        <HowItWorks />
        <KPIResults />
        <UseCases />
        <CTAFinal />
        {/* Próximas secciones: ComparisonTable, Testimonials */}
      </main>
      <Footer />
    </>
  );
}
