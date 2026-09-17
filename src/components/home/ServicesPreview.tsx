"use client";

import React, { useState } from "react";
import Image from "next/image";
import Link from "next/link";
import { ArrowUpRight, Clock, Sparkles, ChevronDown } from "lucide-react";
import { motion, AnimatePresence } from "framer-motion";
import { salonConfig, formatPrice } from "@/data/salon";
import { SectionHeading } from "@/components/common/SectionHeading";
import { Button } from "@/components/common/Button";
import { FadeUp } from "@/components/common/MotionWrapper";

export function ServicesPreview() {
  const previewServices = salonConfig.services.filter((s) => s.featured).slice(0, 6);
  const [activeServiceId, setActiveServiceId] = useState<string>(previewServices[0]?.id || "");
  const [expandedMobileId, setExpandedMobileId] = useState<string | null>(null);

  const activeService = previewServices.find((s) => s.id === activeServiceId) || previewServices[0];

  const toggleMobileExpand = (id: string) => {
    setExpandedMobileId(expandedMobileId === id ? null : id);
  };

  return (
    <section className="py-24 sm:py-32 bg-background relative overflow-hidden">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <FadeUp>
          <div className="flex flex-col md:flex-row md:items-end justify-between mb-16 sm:mb-20">
            <SectionHeading
              eyebrow="Curated Artistry"
              title="The Service Runway"
              subtitle="Sculpted precision, luminous color chemistry, and restorative skin rituals crafted with couture patience."
              align="left"
              className="mb-0 max-w-2xl"
            />
            <div className="mt-6 md:mt-0 shrink-0">
              <Button href="/services" variant="outline" size="sm">
                View All Rituals
              </Button>
            </div>
          </div>
        </FadeUp>

        {/* =========================================================================
            DESKTOP: EDITORIAL INTERACTIVE SERVICE RUNWAY
            ========================================================================= */}
        <div className="hidden lg:grid grid-cols-12 gap-12 items-start">
          {/* Stacked Vertical Service Names (7 cols) */}
          <div className="col-span-7 space-y-2">
            {previewServices.map((service, index) => {
              const isActive = service.id === activeServiceId;
              return (
                <div
                  key={service.id}
                  onMouseEnter={() => setActiveServiceId(service.id)}
                  className={`group relative p-6 sm:p-7 border-b border-border/70 transition-all duration-300 cursor-pointer ${
                    isActive
                      ? "bg-card/70 border-accent shadow-sm"
                      : "hover:bg-muted/30"
                  }`}
                >
                  <div className="flex items-center justify-between">
                    <div className="flex items-baseline gap-6">
                      <span className="font-mono text-xs text-accent tracking-widest font-medium">
                        0{index + 1}
                      </span>
                      <div>
                        <h3
                          className={`font-serif text-2xl xl:text-3xl font-normal transition-colors duration-300 ${
                            isActive ? "text-accent" : "text-foreground group-hover:text-accent"
                          }`}
                        >
                          {service.name}
                        </h3>
                        <div className="flex items-center gap-3 text-xs text-muted-foreground mt-1.5 font-light">
                          <span className="uppercase tracking-widest text-[10px] text-accent font-semibold">
                            {service.categoryLabel}
                          </span>
                          <span>•</span>
                          <span className="flex items-center gap-1">
                            <Clock className="w-3 h-3 text-accent" />
                            {service.duration}
                          </span>
                        </div>
                      </div>
                    </div>

                    <div className="text-right">
                      <span className="font-serif text-lg text-foreground font-medium block">
                        {formatPrice(service.startingPrice)}
                      </span>
                      <span className="text-[10px] text-muted-foreground uppercase tracking-widest">
                        Starting
                      </span>
                    </div>
                  </div>
                </div>
              );
            })}
          </div>

          {/* Sticky Visual Showcase Preview (5 cols) */}
          <div className="col-span-5 sticky top-28">
            <AnimatePresence mode="wait">
              {activeService && (
                <motion.div
                  key={activeService.id}
                  initial={{ opacity: 0, scale: 0.96 }}
                  animate={{ opacity: 1, scale: 1 }}
                  exit={{ opacity: 0, scale: 0.96 }}
                  transition={{ duration: 0.35, ease: [0.16, 1, 0.3, 1] }}
                  className="bg-card border border-border overflow-hidden shadow-2xl relative"
                >
                  {/* Photo Frame */}
                  <div className="relative aspect-[4/3] w-full overflow-hidden bg-muted">
                    <Image
                      src={activeService.imageUrl}
                      alt={activeService.name}
                      fill
                      sizes="500px"
                      className="object-cover object-center"
                    />
                    <div className="absolute top-4 left-4 glass-pill px-3 py-1 text-[10px] uppercase tracking-wider font-semibold text-foreground">
                      {activeService.categoryLabel}
                    </div>
                  </div>

                  {/* Details Card */}
                  <div className="p-6 sm:p-8 space-y-4">
                    <div className="flex items-center justify-between">
                      <h4 className="font-serif text-2xl text-foreground font-medium">
                        {activeService.name}
                      </h4>
                      <span className="font-serif text-xl text-accent font-medium">
                        From {formatPrice(activeService.startingPrice)}
                      </span>
                    </div>

                    <p className="text-sm text-muted-foreground font-light leading-relaxed">
                      {activeService.fullDescription}
                    </p>

                    {activeService.benefits && (
                      <ul className="pt-2 space-y-1.5 border-t border-border/60">
                        {activeService.benefits.map((benefit) => (
                          <li
                            key={benefit}
                            className="text-xs text-foreground/85 flex items-center gap-2"
                          >
                            <Sparkles className="w-3 h-3 text-accent shrink-0" />
                            <span>{benefit}</span>
                          </li>
                        ))}
                      </ul>
                    )}

                    <div className="pt-4 border-t border-border flex items-center justify-between">
                      <Link
                        href={`/services#${activeService.id}`}
                        className="text-xs uppercase tracking-widest font-semibold text-foreground hover:text-accent transition-colors flex items-center gap-1"
                      >
                        <span>Full Menu Details</span>
                        <ArrowUpRight className="w-3.5 h-3.5" />
                      </Link>

                      {salonConfig.booking.enabled && (
                        <Button href={salonConfig.booking.url} variant="primary" size="sm">
                          Reserve Ritual
                        </Button>
                      )}
                    </div>
                  </div>
                </motion.div>
              )}
            </AnimatePresence>
          </div>
        </div>

        {/* =========================================================================
            MOBILE: TOUCH-OPTIMIZED INTERACTIVE ACCORDION
            ========================================================================= */}
        <div className="lg:hidden space-y-4">
          {previewServices.map((service, index) => {
            const isExpanded = expandedMobileId === service.id;
            return (
              <div
                key={service.id}
                className="bg-card border border-border overflow-hidden transition-all duration-300"
              >
                {/* Accordion Trigger */}
                <button
                  type="button"
                  onClick={() => toggleMobileExpand(service.id)}
                  aria-expanded={isExpanded}
                  className="w-full p-5 flex items-center justify-between text-left focus-visible:outline-none focus-visible:ring-2 focus-visible:ring-accent"
                >
                  <div className="flex items-center gap-3">
                    <span className="font-mono text-xs text-accent font-semibold">
                      0{index + 1}
                    </span>
                    <div>
                      <h3 className="font-serif text-lg text-foreground font-medium">
                        {service.name}
                      </h3>
                      <span className="text-[10px] uppercase tracking-wider text-muted-foreground font-light">
                        {service.duration} • From {formatPrice(service.startingPrice)}
                      </span>
                    </div>
                  </div>

                  <ChevronDown
                    className={`w-5 h-5 text-muted-foreground transition-transform duration-300 ${
                      isExpanded ? "rotate-180 text-accent" : ""
                    }`}
                  />
                </button>

                {/* Collapsible Content */}
                <AnimatePresence>
                  {isExpanded && (
                    <motion.div
                      initial={{ height: 0, opacity: 0 }}
                      animate={{ height: "auto", opacity: 1 }}
                      exit={{ height: 0, opacity: 0 }}
                      transition={{ duration: 0.3, ease: "easeInOut" }}
                      className="overflow-hidden"
                    >
                      <div className="p-5 pt-0 border-t border-border/50 space-y-4">
                        <div className="relative aspect-[16/10] w-full overflow-hidden mt-4">
                          <Image
                            src={service.imageUrl}
                            alt={service.name}
                            fill
                            sizes="100vw"
                            className="object-cover object-center"
                          />
                        </div>

                        <p className="text-xs text-muted-foreground font-light leading-relaxed">
                          {service.shortDescription}
                        </p>

                        <div className="flex items-center justify-between pt-2">
                          <Link
                            href={`/services#${service.id}`}
                            className="text-[11px] uppercase tracking-wider font-semibold text-foreground underline underline-offset-4"
                          >
                            Details
                          </Link>
                          {salonConfig.booking.enabled && (
                            <Button href={salonConfig.booking.url} variant="primary" size="sm">
                              Book Ritual
                            </Button>
                          )}
                        </div>
                      </div>
                    </motion.div>
                  )}
                </AnimatePresence>
              </div>
            );
          })}
        </div>
      </div>
    </section>
  );
}
