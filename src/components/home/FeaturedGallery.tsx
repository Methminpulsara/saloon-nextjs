"use client";

import React from "react";
import Image from "next/image";
import Link from "next/link";
import { ArrowUpRight } from "lucide-react";
import { salonConfig } from "@/data/salon";
import { SectionHeading } from "@/components/common/SectionHeading";
import { Button } from "@/components/common/Button";
import { FadeUp, StaggerContainer, StaggerItem } from "@/components/common/MotionWrapper";

export function FeaturedGallery() {
  const previewItems = salonConfig.gallery.slice(0, 6);

  return (
    <section className="py-24 sm:py-32 bg-background relative">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <FadeUp>
          <div className="flex flex-col md:flex-row md:items-end justify-between mb-16 sm:mb-20">
            <SectionHeading
              eyebrow="Visual Portfolio"
              title="The Lookbook"
              subtitle="Dimensional hair transformations, lived-in Parisian balayage, dewy bridal beauty, and minimal nail architecture."
              align="left"
              className="mb-0 max-w-2xl"
            />
            <div className="mt-6 md:mt-0 shrink-0">
              <Button href="/gallery" variant="outline" size="sm">
                View Full Lookbook
              </Button>
            </div>
          </div>
        </FadeUp>

        {/* Asymmetric Editorial Lookbook Collage */}
        <StaggerContainer className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-12 gap-6 sm:gap-8">
          {previewItems.map((item, index) => {
            // Asymmetrical spans for true editorial feel
            const colSpans = [
              "lg:col-span-7 aspect-[16/11]", // 0: Large panoramic hero frame
              "lg:col-span-5 aspect-[3/4]",   // 1: Vertical couture portrait
              "lg:col-span-4 aspect-[3/4]",   // 2: Vertical portrait
              "lg:col-span-4 aspect-square",  // 3: Detail square
              "lg:col-span-4 aspect-[3/4]",   // 4: Vertical portrait
              "lg:col-span-12 aspect-[21/9]", // 5: Wide full-bleed banner
            ];

            const currentSpan = colSpans[index % colSpans.length];

            return (
              <StaggerItem
                key={item.id}
                className={`lookbook-item group relative overflow-hidden bg-card border border-border shadow-xs hover:border-accent transition-all duration-500 ${currentSpan}`}
                data-cursor="view"
              >
                <Link href={`/gallery`} className="block w-full h-full relative">
                  <Image
                    src={item.imageUrl}
                    alt={item.alt}
                    fill
                    sizes="(max-width: 640px) 100vw, (max-width: 1024px) 50vw, 60vw"
                    className="object-cover object-center transition-transform duration-1000 ease-out group-hover:scale-105"
                  />

                  {/* Glassmorphic Gradient Vignette on Hover */}
                  <div className="absolute inset-0 bg-gradient-to-t from-black/80 via-black/20 to-transparent opacity-0 group-hover:opacity-100 transition-opacity duration-300 flex flex-col justify-between p-6 sm:p-8">
                    <div className="flex justify-between items-start">
                      <span className="glass-pill px-3 py-1 text-[10px] uppercase tracking-[0.2em] font-semibold text-white">
                        {item.categoryLabel}
                      </span>
                      <span className="w-8 h-8 rounded-full bg-white/20 backdrop-blur-md text-white flex items-center justify-center">
                        <ArrowUpRight className="w-4 h-4" />
                      </span>
                    </div>

                    <div>
                      <h4 className="font-serif text-xl sm:text-2xl text-white font-normal mb-1">
                        {item.title}
                      </h4>
                      {item.description && (
                        <p className="text-xs text-white/80 font-light line-clamp-2 max-w-md">
                          {item.description}
                        </p>
                      )}
                    </div>
                  </div>
                </Link>

                {/* Mobile Caption Bar */}
                <div className="sm:hidden p-3.5 bg-card flex items-center justify-between border-t border-border">
                  <span className="text-xs font-serif text-foreground font-medium">
                    {item.title}
                  </span>
                  <span className="text-[10px] uppercase tracking-wider text-accent font-semibold">
                    {item.categoryLabel}
                  </span>
                </div>
              </StaggerItem>
            );
          })}
        </StaggerContainer>

        {/* Mobile Full Gallery Link */}
        <div className="mt-12 text-center sm:hidden">
          <Button href="/gallery" variant="outline" size="md" className="w-full">
            Explore All Lookbook Categories
          </Button>
        </div>
      </div>
    </section>
  );
}
