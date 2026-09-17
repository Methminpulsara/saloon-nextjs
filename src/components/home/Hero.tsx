"use client";

import React from "react";
import Image from "next/image";
import Link from "next/link";
import { ArrowUpRight, Sparkles, MapPin, Clock, Compass } from "lucide-react";
import { motion } from "framer-motion";
import { salonConfig, getPhoneHref } from "@/data/salon";
import { Button } from "@/components/common/Button";

export function Hero() {
  return (
    <section className="relative min-h-[92vh] sm:min-h-[95vh] flex flex-col justify-between overflow-hidden pt-4 pb-12 sm:pb-16">
      {/* Ambient background radiance */}
      <div
        className="absolute top-10 right-10 w-[500px] h-[500px] glow-ambient rounded-full -z-10"
        aria-hidden="true"
      />
      <div
        className="absolute bottom-10 left-10 w-[400px] h-[400px] glow-ambient rounded-full -z-10"
        aria-hidden="true"
      />

      {/* Subtle giant ghost background typography */}
      <div
        className="absolute top-1/2 left-1/2 -translate-x-1/2 -translate-y-1/2 select-none pointer-events-none -z-10 overflow-hidden w-full text-center opacity-[0.035] dark:opacity-[0.05]"
        aria-hidden="true"
      >
        <span className="font-serif text-[18vw] leading-none uppercase tracking-[0.1em] font-light whitespace-nowrap block">
          {salonConfig.brand.shortName}
        </span>
      </div>

      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 w-full flex-1 flex flex-col justify-center py-6 sm:py-10">
        {/* Top Eyebrow Bar */}
        <motion.div
          initial={{ opacity: 0, y: -10 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.6, ease: [0.16, 1, 0.3, 1] }}
          className="flex flex-wrap items-center justify-between gap-4 mb-6 sm:mb-10 pb-4 border-b border-border/50"
        >
          <div className="inline-flex items-center gap-2 text-micro-caps text-accent">
            <Sparkles className="w-3.5 h-3.5" />
            <span>{salonConfig.brand.eyebrow}</span>
          </div>

          <div className="hidden sm:flex items-center gap-6 text-[11px] uppercase tracking-[0.2em] text-muted-foreground font-medium">
            <span>Est. {salonConfig.brand.establishedYear}</span>
            <span>•</span>
            <span>{salonConfig.location.city} Atelier</span>
          </div>
        </motion.div>

        {/* Cinematic Spatial Editorial Composition */}
        <div className="grid grid-cols-1 lg:grid-cols-12 gap-8 lg:gap-12 items-center">
          {/* Main Typography Column (7 cols) */}
          <div className="lg:col-span-7 space-y-6 sm:space-y-8 z-10">
            <motion.div
              initial={{ opacity: 0, y: 30 }}
              animate={{ opacity: 1, y: 0 }}
              transition={{ duration: 0.8, delay: 0.1, ease: [0.16, 1, 0.3, 1] }}
            >
              <h1 className="font-serif text-4xl sm:text-6xl lg:text-7xl xl:text-8xl font-normal leading-[1.04] text-foreground tracking-tight">
                Beauty, <br />
                <span className="italic font-light font-serif text-accent">
                  shaped around
                </span>{" "}
                you.
              </h1>
            </motion.div>

            <motion.p
              initial={{ opacity: 0, y: 20 }}
              animate={{ opacity: 1, y: 0 }}
              transition={{ duration: 0.8, delay: 0.25, ease: [0.16, 1, 0.3, 1] }}
              className="text-base sm:text-lg lg:text-xl text-muted-foreground font-light leading-relaxed max-w-xl"
            >
              {salonConfig.brand.description}
            </motion.p>

            {/* Action Bar */}
            <motion.div
              initial={{ opacity: 0, y: 20 }}
              animate={{ opacity: 1, y: 0 }}
              transition={{ duration: 0.8, delay: 0.35, ease: [0.16, 1, 0.3, 1] }}
              className="flex flex-col sm:flex-row items-stretch sm:items-center gap-4 pt-2"
            >
              {salonConfig.booking.enabled && (
                <Button
                  href={salonConfig.booking.url}
                  variant="primary"
                  size="lg"
                  className="group shadow-lg"
                >
                  <span>{salonConfig.booking.label}</span>
                  <ArrowUpRight className="w-4 h-4 ml-1.5 transition-transform group-hover:translate-x-0.5 group-hover:-translate-y-0.5" />
                </Button>
              )}
              <Button href="/services" variant="outline" size="lg">
                Explore Rituals
              </Button>
            </motion.div>

            {/* Micro-Details Pill */}
            <motion.div
              initial={{ opacity: 0 }}
              animate={{ opacity: 1 }}
              transition={{ duration: 0.8, delay: 0.45 }}
              className="pt-6 flex flex-wrap items-center gap-6 text-xs text-muted-foreground font-light border-t border-border/60"
            >
              <div className="flex items-center gap-1.5">
                <MapPin className="w-3.5 h-3.5 text-accent shrink-0" />
                <span className="text-foreground font-medium">
                  {salonConfig.location.neighborhood || salonConfig.location.city}
                </span>
                <span>• {salonConfig.location.street}</span>
              </div>
              <div className="hidden sm:flex items-center gap-1.5">
                <Clock className="w-3.5 h-3.5 text-accent shrink-0" />
                <span>{salonConfig.hours.summary}</span>
              </div>
            </motion.div>
          </div>

          {/* Editorial Visual Composition Column (5 cols) */}
          <div className="lg:col-span-5 relative mt-4 lg:mt-0">
            <motion.div
              initial={{ opacity: 0, scale: 0.96 }}
              animate={{ opacity: 1, scale: 1 }}
              transition={{ duration: 1, delay: 0.2, ease: [0.16, 1, 0.3, 1] }}
              className="relative mx-auto max-w-md lg:max-w-none"
            >
              {/* Primary Visual Frame */}
              <div className="relative aspect-[4/5] w-full overflow-hidden bg-card border border-border shadow-2xl group">
                <Image
                  src={salonConfig.seo.ogImage}
                  alt={`Haute editorial styling at ${salonConfig.brand.name}`}
                  fill
                  priority
                  sizes="(max-width: 768px) 100vw, (max-width: 1200px) 45vw, 550px"
                  className="object-cover object-center transition-transform duration-1000 ease-out group-hover:scale-105"
                />
                <div className="absolute inset-0 bg-gradient-to-t from-black/60 via-transparent to-transparent pointer-events-none" />

                {/* Floating Glass Atelier Status Capsule */}
                <div className="absolute bottom-5 left-5 right-5 p-4 sm:p-5 glass-card border border-glass-border">
                  <div className="flex items-center justify-between">
                    <div>
                      <div className="flex items-center gap-2 mb-1">
                        <span className="w-2 h-2 rounded-full bg-emerald-500 animate-pulse" />
                        <span className="text-[10px] tracking-[0.25em] uppercase font-semibold text-accent">
                          Atelier Open Today
                        </span>
                      </div>
                      <p className="font-serif text-base sm:text-lg text-foreground font-medium">
                        {salonConfig.location.neighborhood || salonConfig.location.city} Sanctuary
                      </p>
                    </div>

                    <Link
                      href="/about"
                      aria-label="Discover our sanctuary story"
                      className="w-9 h-9 rounded-full border border-border flex items-center justify-center text-foreground hover:bg-foreground hover:text-background transition-colors shadow-sm"
                    >
                      <ArrowUpRight className="w-4 h-4" />
                    </Link>
                  </div>
                </div>
              </div>

              {/* Floating Established Badge */}
              <div className="absolute -top-4 -left-4 sm:-top-6 sm:-left-6 glass-pill px-4 py-2 text-center shadow-lg border border-glass-border z-20">
                <span className="font-serif text-lg text-foreground font-medium block">
                  Est. {salonConfig.brand.establishedYear}
                </span>
                <span className="text-[9px] uppercase tracking-widest text-accent font-semibold block">
                  Couture Care
                </span>
              </div>

              {/* Decorative Architectural Offset Frame */}
              <div
                className="absolute -bottom-5 -right-5 w-full h-full border border-accent/40 -z-10 hidden sm:block pointer-events-none"
                aria-hidden="true"
              />
            </motion.div>
          </div>
        </div>
      </div>

      {/* Bottom Scroll Invitation Indicator */}
      <motion.div
        initial={{ opacity: 0 }}
        animate={{ opacity: 1 }}
        transition={{ delay: 0.8, duration: 0.6 }}
        className="text-center pt-4"
      >
        <a
          href="#philosophy-marquee"
          className="inline-flex flex-col items-center gap-2 text-[10px] uppercase tracking-[0.3em] text-muted-foreground hover:text-accent transition-colors"
        >
          <span>Scroll to explore</span>
          <div className="w-[1px] h-6 bg-border overflow-hidden">
            <motion.div
              animate={{ y: ["-100%", "100%"] }}
              transition={{ repeat: Infinity, duration: 1.6, ease: "easeInOut" }}
              className="w-full h-full bg-accent"
            />
          </div>
        </a>
      </motion.div>
    </section>
  );
}
