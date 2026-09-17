import React from "react";
import Image from "next/image";
import Link from "next/link";
import { Check, ArrowRight } from "lucide-react";
import { Button } from "@/components/common/Button";
import { FadeUp, FadeIn } from "@/components/common/MotionWrapper";

export function AboutPreview() {
  const pillars = [
    "Unrushed 1-on-1 consultations before every treatment",
    "Low-tox, biocompatible and clean botanical formulations",
    "A tranquil sanctuary setting with private wash suites",
    "Continuous international training in Paris & London academies",
  ];

  return (
    <section className="py-20 sm:py-28 bg-muted/40 border-t border-border overflow-hidden">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className="grid grid-cols-1 lg:grid-cols-12 gap-12 lg:gap-16 items-center">
          {/* Overlapping Editorial Image Composition (6 cols) */}
          <div className="lg:col-span-6 relative">
            <FadeIn>
              <div className="relative mx-auto max-w-md lg:max-w-none">
                {/* Primary Image */}
                <div className="relative aspect-[3/4] w-4/5 overflow-hidden shadow-xl bg-card border border-border">
                  <Image
                    src="https://images.unsplash.com/photo-1527799820374-dcf8d9d4a388?q=80&w=1200&auto=format&fit=crop"
                    alt="Lumière Salon peaceful styling station and warm aesthetic"
                    fill
                    sizes="(max-width: 768px) 80vw, 400px"
                    className="object-cover object-center"
                  />
                </div>

                {/* Secondary Overlapping Image */}
                <div className="absolute -bottom-8 -right-2 sm:-bottom-10 sm:right-2 w-3/5 aspect-[4/5] overflow-hidden shadow-2xl border-4 border-background bg-card">
                  <Image
                    src="https://images.unsplash.com/photo-1522337360788-8b13dee7a37e?q=80&w=1200&auto=format&fit=crop"
                    alt="Stylist washing hair with botanical lather"
                    fill
                    sizes="(max-width: 768px) 50vw, 280px"
                    className="object-cover object-center"
                  />
                </div>

                {/* Experience Badge */}
                <div className="absolute top-8 right-8 sm:right-16 glass-card p-4 shadow-lg text-center max-w-[150px] border border-glass-border">
                  <span className="font-serif text-3xl font-medium text-foreground block">
                    8+
                  </span>
                  <span className="text-[10px] uppercase tracking-widest text-accent font-semibold block mt-0.5">
                    Years of Intentional Craft
                  </span>
                </div>
              </div>
            </FadeIn>
          </div>

          {/* Narrative Content Column (6 cols) */}
          <div className="lg:col-span-6 flex flex-col justify-center space-y-6">
            <FadeUp delay={0.1}>
              <span className="text-xs uppercase tracking-[0.25em] font-semibold text-accent">
                Our Philosophy
              </span>
            </FadeUp>

            <FadeUp delay={0.2}>
              <h2 className="font-serif text-3xl sm:text-4xl lg:text-5xl font-normal text-foreground leading-[1.15] tracking-tight">
                More than a salon. <br />
                <span className="italic font-serif text-accent font-light">
                  A sanctuary for renewal.
                </span>
              </h2>
            </FadeUp>

            <FadeUp delay={0.3}>
              <p className="text-base sm:text-lg text-muted-foreground font-light leading-relaxed">
                We conceived Lumière as an antidote to hurried, noisy salon spaces. Here, time slows down so that your hair, skin, and personal aesthetic receive the undivided attention and thoughtful precision they deserve.
              </p>
            </FadeUp>

            <FadeUp delay={0.35}>
              <p className="text-sm sm:text-base text-muted-foreground/90 font-light leading-relaxed">
                Every appointment begins with an intentional consultation—listening to your lifestyle, examining your natural growth patterns, and formulating customized techniques that maintain lasting vitality long after you leave our chair.
              </p>
            </FadeUp>

            {/* Core Values List */}
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
                  <span>Meet The Team & Story</span>
                </Button>
                <Link
                  href="/services"
                  className="inline-flex items-center justify-center gap-1.5 text-xs uppercase tracking-widest font-semibold text-foreground hover:text-accent transition-colors py-3"
                >
                  <span>Browse our rituals</span>
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
