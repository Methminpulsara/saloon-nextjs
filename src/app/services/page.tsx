import React from "react";
import type { Metadata } from "next";
import { ServicesCatalogue } from "@/components/services/ServicesCatalogue";
import { FadeUp } from "@/components/common/MotionWrapper";

export const metadata: Metadata = {
  title: "Services & Pricing Menu | Lumière Salon",
  description:
    "Explore our complete service menu: precision haircuts, dimensional French balayage, organic hair treatments, hydro-glow facials, and couture bridal packages.",
};

export default function ServicesPage() {
  return (
    <div className="bg-background text-foreground py-16 sm:py-24">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        {/* Page Header */}
        <FadeUp className="text-center max-w-3xl mx-auto mb-16">
          <span className="text-xs uppercase tracking-[0.25em] font-semibold text-accent mb-3 block">
            Our Menu of Rituals
          </span>
          <h1 className="font-serif text-4xl sm:text-5xl lg:text-6xl font-normal text-foreground mb-6 tracking-tight">
            Services, crafted with care.
          </h1>
          <p className="text-base sm:text-lg text-muted-foreground font-light leading-relaxed">
            Every service at Lumière includes an individual consultation, luxurious botanical wash with scalp massage, and custom finishing. Select a category below to explore our offerings.
          </p>
        </FadeUp>

        {/* Interactive Catalogue */}
        <ServicesCatalogue />
      </div>
    </div>
  );
}
