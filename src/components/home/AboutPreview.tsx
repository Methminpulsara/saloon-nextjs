"use client";

import React from "react";
import Image from "next/image";
import Link from "next/link";
import { ArrowRight, Check } from "lucide-react";
import { salonConfig } from "@/data/salon";
import { Button } from "@/components/common/Button";
import { FadeUp, FadeIn } from "@/components/common/MotionWrapper";

export function AboutPreview() {
  const pillars = [
    "Unrushed 1-on-1 consultations before every appointment",
    "Low-tox, biocompatible and clean botanical formulations",
    "A tranquil sanctuary setting with private wash suites",
    "Continuous international training in Paris & London academies",
  ];

  return (
    <section className="py-24 sm:py-32 bg-muted/40 border-t border-border overflow-hidden relative">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        {/* Large Opening Statement */}
        <FadeUp className="max-w-4xl mb-16 sm:mb-20">
          <span className="text-micro-caps text-accent mb-4 block">
            The Sanctuary Creed
          </span>
          <h2 className="font-serif text-3xl sm:text-5xl lg:text-6xl font-normal text-foreground leading-[1.12] tracking-tight">
            &ldquo;{salonConfig.brand.philosophyTitle}&rdquo;
          </h2>
        </FadeUp>

        <div className="grid grid-cols-1 lg:grid-cols-12 gap-12 lg:gap-16 items-center">
          {/* Overlapping Editorial Photography Composition (6 cols) */}
          <div className="lg:col-span-6 relative">
            <FadeIn>
              <div className="relative mx-auto max-w-md lg:max-w-none">
                {/* Primary Large Image */}
                <div className="relative aspect-[3/4] w-4/5 overflow-hidden shadow-2xl bg-card border border-border">
                  <Image
                    src="https://images.unsplash.com/photo-1527799820374-dcf8d9d4a388?q=80&w=1200&auto=format&fit=crop"
                    alt={`Peaceful styling station at ${salonConfig.brand.name}`}
                    fill
                    sizes="(max-width: 768px) 80vw, 420px"
                    className="object-cover object-center"
                  />
                </div>

                {/* Secondary Overlapping Image */}
                <div className="absolute -bottom-8 -right-2 sm:-bottom-10 sm:right-2 w-3/5 aspect-[4/5] overflow-hidden shadow-2xl border-4 border-background bg-card">
                  <Image
                    src="https://images.unsplash.com/photo-1522337360788-8b13dee7a37e?q=80&w=1200&auto=format&fit=crop"
                    alt={`Stylist washing hair with clean botanical lather at ${salonConfig.brand.name}`}
                    fill
                    sizes="(max-width: 768px) 50vw, 280px"
                    className="object-cover object-center"
                  />
                </div>

                {/* Experience Badge */}
                <div className="absolute top-8 right-6 sm:right-12 glass-card p-5 shadow-xl text-center max-w-[160px] border border-glass-border">
                  <span className="font-serif text-3xl sm:text-4xl font-normal text-foreground block">
                    {salonConfig.stats[0]?.value || "8+"}
                  </span>
                  <span className="text-[9px] uppercase tracking-[0.2em] text-accent font-semibold block mt-1">
                    Years of Pure Craft
                  </span>
                </div>
              </div>
            </FadeIn>
          </div>

          {/* Narrative Content Column (6 cols) */}
          <div className="lg:col-span-6 flex flex-col justify-center space-y-6">
            <FadeUp delay={0.1}>
              <span className="text-micro-caps text-accent">
                Our Philosophy
              </span>
            </FadeUp>

            <FadeUp delay={0.2}>
              <h3 className="font-serif text-3xl sm:text-4xl font-normal text-foreground leading-[1.2] tracking-tight">
                An intentional alternative to rushed salon beauty.
              </h3>
            </FadeUp>

            <FadeUp delay={0.3}>
              <p className="text-base sm:text-lg text-muted-foreground font-light leading-relaxed">
                {salonConfig.brand.philosophyQuote}
              </p>
            </FadeUp>

            <FadeUp delay={0.35}>
              <p className="text-sm sm:text-base text-muted-foreground/90 font-light leading-relaxed">
                {salonConfig.brand.shortAbout}
              </p>
            </FadeUp>

            {/* Core Values Checklist */}
            <FadeUp delay={0.4}>
              <ul className="space-y-3 pt-2">
                {pillars.map((pillar) => (
                  <li key={pillar} className="flex items-start gap-3 text-sm text-foreground/90 font-light">
                    <div className="w-5 h-5 rounded-full bg-accent/15 flex items-center justify-center shrink-0 mt-0.5">
                      <Check className="w-3 h-3 text-accent" />
                    </div>
                    <span>{pillar}</span>
                  </li>
                ))}
              </ul>
            </FadeUp>

            <FadeUp delay={0.45}>
              <div className="pt-4 flex flex-col sm:flex-row items-stretch sm:items-center gap-4">
                <Button href="/about" variant="primary" size="md">
                  <span>Discover Our Story & Artists</span>
                </Button>
                <Link
                  href="/services"
                  className="inline-flex items-center justify-center gap-2 text-xs uppercase tracking-widest font-semibold text-foreground hover:text-accent transition-colors py-3"
                >
                  <span>Browse Our Offerings</span>
                  <ArrowRight className="w-4 h-4" />
                </Link>
              </div>
            </FadeUp>
          </div>
        </div>
      </div>
    </section>
  );
}
