import React from "react";
import Image from "next/image";
import Link from "next/link";
import { ArrowUpRight } from "lucide-react";
import { galleryData } from "@/data/gallery";
import { SectionHeading } from "@/components/common/SectionHeading";
import { Button } from "@/components/common/Button";
import { FadeUp, StaggerContainer, StaggerItem } from "@/components/common/MotionWrapper";

export function FeaturedGallery() {
  const previewItems = galleryData.slice(0, 6);

  return (
    <section className="py-20 sm:py-28 bg-background relative">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <FadeUp>
          <div className="flex flex-col md:flex-row md:items-end justify-between mb-12 sm:mb-16">
            <SectionHeading
              eyebrow="Visual Portfolio"
              title="Moments of transformation"
              subtitle="Explore recent hair transformations, dimensional color, clean skin therapies, and couture bridal styling."
              align="left"
              className="mb-0 max-w-2xl"
            />
            <div className="mt-6 md:mt-0 shrink-0">
              <Button href="/gallery" variant="outline" size="sm">
                View Full Gallery
              </Button>
            </div>
          </div>
        </FadeUp>

        {/* Varied Editorial Image Collage */}
        <StaggerContainer className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 gap-6 sm:gap-8">
          {previewItems.map((item, index) => {
            const aspectClasses = [
              "aspect-[3/4]",
              "aspect-square",
              "aspect-[3/4]",
              "aspect-[4/5]",
              "aspect-square",
              "aspect-[16/10]",
            ];

            return (
              <StaggerItem
                key={item.id}
                className="group relative overflow-hidden bg-card border border-border shadow-xs hover:border-accent transition-colors duration-300"
              >
                <div className={`relative w-full ${aspectClasses[index % aspectClasses.length]}`}>
                  <Image
                    src={item.imageUrl}
                    alt={item.alt}
                    fill
                    sizes="(max-width: 640px) 100vw, (max-width: 1024px) 50vw, 33vw"
                    className="object-cover object-center transition-transform duration-700 ease-out group-hover:scale-105"
                  />
                  {/* Subtle Dark Vignette Overlay on Hover */}
                  <div className="absolute inset-0 bg-gradient-to-t from-black/80 via-black/20 to-transparent opacity-0 group-hover:opacity-100 transition-opacity duration-300 flex flex-col justify-end p-6">
                    <span className="text-[10px] uppercase tracking-[0.2em] font-semibold text-accent mb-1 block">
                      {item.categoryLabel}
                    </span>
                    <h4 className="font-serif text-lg text-white font-normal">
                      {item.title}
                    </h4>
                    {item.description && (
                      <p className="text-xs text-white/80 font-light mt-1 line-clamp-2">
                        {item.description}
                      </p>
                    )}
                  </div>
                </div>

                {/* Mobile Caption Bar */}
                <div className="sm:hidden p-3 bg-card flex items-center justify-between border-t border-border">
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
        <div className="mt-10 text-center sm:hidden">
          <Button href="/gallery" variant="outline" size="md" className="w-full">
            View All Categories & Photos
          </Button>
        </div>
      </div>
    </section>
  );
}
