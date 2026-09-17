import React from "react";
import Image from "next/image";
import Link from "next/link";
import { ArrowUpRight, Clock, Sparkles } from "lucide-react";
import { servicesData } from "@/data/services";
import { formatPrice } from "@/lib/utils";
import { SectionHeading } from "@/components/common/SectionHeading";
import { Button } from "@/components/common/Button";
import { FadeUp, StaggerContainer, StaggerItem } from "@/components/common/MotionWrapper";

export function ServicesPreview() {
  const previewServices = servicesData.filter((s) => s.featured).slice(0, 6);

  return (
    <section className="py-20 sm:py-28 bg-background relative">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <FadeUp>
          <SectionHeading
            eyebrow="Curated Artistry"
            title="Signature services"
            subtitle="From sculpted precision cuts and French balayage to restorative facials and bridal transformations, each ritual is crafted with editorial poise."
            align="center"
          />
        </FadeUp>

        {/* Editorial Asymmetrical Services Grid */}
        <StaggerContainer className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8">
          {previewServices.map((service, index) => {
            const isLarge = index === 0;

            return (
              <StaggerItem
                key={service.id}
                className={`group flex flex-col justify-between bg-card border border-border overflow-hidden transition-all duration-500 hover:shadow-xl hover:border-accent ${
                  isLarge ? "md:col-span-2 lg:col-span-1" : ""
                }`}
              >
                {/* Image Container */}
                <div className="relative aspect-[16/10] sm:aspect-[4/3] w-full overflow-hidden bg-muted">
                  <Image
                    src={service.imageUrl}
                    alt={service.name}
                    fill
                    sizes="(max-width: 768px) 100vw, (max-width: 1200px) 50vw, 33vw"
                    className="object-cover object-center transition-transform duration-700 ease-out group-hover:scale-105"
                  />
                  <div className="absolute top-4 left-4 glass-pill px-3 py-1 text-[10px] uppercase tracking-wider font-semibold text-foreground">
                    {service.categoryLabel}
                  </div>
                  <div className="absolute bottom-4 right-4 bg-primary text-primary-foreground px-3 py-1 text-xs font-serif font-medium tracking-wide shadow-sm">
                    From {formatPrice(service.startingPrice)}
                  </div>
                </div>

                {/* Content Details */}
                <div className="p-6 sm:p-7 flex flex-col justify-between flex-1">
                  <div>
                    <div className="flex items-center gap-2 text-xs text-muted-foreground mb-2 font-light">
                      <Clock className="w-3.5 h-3.5 text-accent" />
                      <span>{service.duration}</span>
                      <span>•</span>
                      <span>{service.subcategory}</span>
                    </div>
                    <h3 className="font-serif text-xl sm:text-2xl font-normal text-foreground mb-2.5 group-hover:text-accent transition-colors">
                      {service.name}
                    </h3>
                    <p className="text-sm text-muted-foreground font-light leading-relaxed mb-6">
                      {service.shortDescription}
                    </p>
                  </div>

                  <div className="pt-4 border-t border-border flex items-center justify-between">
                    <Link
                      href={`/services#${service.id}`}
                      className="inline-flex items-center gap-1.5 text-xs uppercase tracking-widest font-semibold text-foreground group-hover:text-accent transition-colors"
                    >
                      <span>Explore details</span>
                      <ArrowUpRight className="w-3.5 h-3.5 transition-transform group-hover:translate-x-0.5 group-hover:-translate-y-0.5" />
                    </Link>
                    <Link
                      href="/contact"
                      className="text-xs uppercase tracking-wider text-accent hover:underline underline-offset-4 transition-colors font-medium"
                    >
                      Book
                    </Link>
                  </div>
                </div>
              </StaggerItem>
            );
          })}
        </StaggerContainer>

        {/* Explore All CTA */}
        <FadeUp delay={0.2} className="mt-14 text-center">
          <Button href="/services" variant="outline" size="lg">
            View Complete Service Catalogue & Pricing
          </Button>
        </FadeUp>
      </div>
    </section>
  );
}
