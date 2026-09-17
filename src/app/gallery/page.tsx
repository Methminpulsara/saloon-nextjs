import React from "react";
import type { Metadata } from "next";
import { GalleryGrid } from "@/components/gallery/GalleryGrid";
import { FadeUp } from "@/components/common/MotionWrapper";

export const metadata: Metadata = {
  title: "Visual Portfolio & Gallery | Lumière Salon",
  description:
    "Browse our curated gallery of hair transformations, French balayage, bespoke haircuts, bridal hairstyles, and clean editorial beauty artistry.",
};

export default function GalleryPage() {
  return (
    <div className="bg-background text-foreground py-16 sm:py-24">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        {/* Page Header */}
        <FadeUp className="text-center max-w-3xl mx-auto mb-16">
          <span className="text-xs uppercase tracking-[0.25em] font-semibold text-accent mb-3 block">
            Visual Anthology
          </span>
          <h1 className="font-serif text-4xl sm:text-5xl lg:text-6xl font-normal text-foreground mb-6 tracking-tight">
            Moments of craft & transformation.
          </h1>
          <p className="text-base sm:text-lg text-muted-foreground font-light leading-relaxed">
            Each image in our portfolio reflects hours of thoughtful dialogue, custom formulation, and artistic patience. Click any work to inspect details or inquire about a similar transformation.
          </p>
        </FadeUp>

        {/* Interactive Filterable Gallery Grid */}
        <GalleryGrid />
      </div>
    </div>
  );
}
