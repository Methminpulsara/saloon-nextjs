import React from "react";
import Image from "next/image";
import Link from "next/link";
import { Star, ArrowUpRight, Sparkles, Clock, MapPin } from "lucide-react";
import { businessData } from "@/data/business";
import { Button } from "@/components/common/Button";
import { FadeUp, FadeIn } from "@/components/common/MotionWrapper";

export function Hero() {
  return (
    <section className="relative overflow-hidden pt-4 pb-16 sm:pb-24 lg:pt-8 lg:pb-32">
      {/* Ambient background glow */}
      <div
        className="absolute -top-32 right-0 w-96 h-96 bg-accent/10 rounded-full blur-3xl pointer-events-none -z-10"
        aria-hidden="true"
      />
      <div
        className="absolute top-1/2 -left-32 w-80 h-80 bg-accent/5 rounded-full blur-2xl pointer-events-none -z-10"
        aria-hidden="true"
      />

      <div className="relative max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className="grid grid-cols-1 lg:grid-cols-12 gap-12 lg:gap-8 items-center">
          {/* Content Column (7 cols) */}
          <div className="lg:col-span-7 flex flex-col justify-center space-y-6 sm:space-y-8 z-10">
            <FadeUp delay={0.05}>
              <div className="inline-flex items-center gap-2 px-3 py-1.5 glass-pill text-xs font-semibold uppercase tracking-[0.25em] text-accent">
                <Sparkles className="w-3.5 h-3.5" />
                <span>{businessData.eyebrow}</span>
              </div>
            </FadeUp>

            {/* Headline */}
            <FadeUp delay={0.15}>
              <h1 className="font-serif text-4xl sm:text-6xl lg:text-7xl font-normal leading-[1.08] text-foreground tracking-tight">
                Beauty, <br />
                <span className="italic font-normal font-serif text-accent">
                  shaped around
                </span>{" "}
                you.
              </h1>
            </FadeUp>

            {/* Supporting Copy */}
            <FadeUp delay={0.25}>
              <p className="text-base sm:text-lg lg:text-xl text-muted-foreground font-light leading-relaxed max-w-xl">
                Thoughtful styling, modern beauty treatments and personalized care in a tranquil sanctuary designed around your individual essence.
              </p>
            </FadeUp>

            {/* CTAs */}
            <FadeUp delay={0.35}>
              <div className="flex flex-col sm:flex-row items-stretch sm:items-center gap-4 pt-2">
                <Button href="/contact" variant="primary" size="lg" className="group">
                  <span>Book an Appointment</span>
                  <ArrowUpRight className="w-4 h-4 ml-1.5 transition-transform duration-300 group-hover:translate-x-0.5 group-hover:-translate-y-0.5" />
                </Button>
                <Button href="/services" variant="outline" size="lg">
                  Explore Services
                </Button>
              </div>
            </FadeUp>

            {/* Trust Indicator & Editorial Detail */}
            <FadeUp delay={0.45}>
              <div className="pt-6 border-t border-border flex flex-wrap items-center gap-6 sm:gap-8">
                <div className="flex items-center gap-1 text-accent">
                  {[...Array(5)].map((_, i) => (
                    <Star key={i} className="w-4 h-4 fill-current" />
                  ))}
                </div>
                <div className="text-xs sm:text-sm text-foreground">
                  <span className="font-semibold">4.9 / 5.0</span> Client Rating
                  <span className="text-xs text-muted-foreground ml-1.5 font-light">
                    (Demonstration metric)
                  </span>
                </div>
                <div className="hidden sm:block text-border">•</div>
                <div className="hidden sm:inline-flex items-center gap-1.5 text-xs text-muted-foreground">
                  <Clock className="w-3.5 h-3.5 text-accent" />
                  <span>Tue – Sat: 9am – 7pm</span>
                </div>
              </div>
            </FadeUp>
          </div>

          {/* Editorial Asymmetric Visual Column (5 cols) */}
          <div className="lg:col-span-5 relative">
            <FadeIn delay={0.2}>
              <div className="relative mx-auto max-w-md lg:max-w-none">
                {/* Main Hero Image */}
                <div className="relative aspect-[4/5] w-full overflow-hidden shadow-2xl bg-card border border-border group">
                  <Image
                    src="https://images.unsplash.com/photo-1560869713-7d0a29430803?q=80&w=1200&auto=format&fit=crop"
                    alt="Modern editorial hair styling at Lumière Salon"
                    fill
                    priority
                    sizes="(max-width: 768px) 100vw, (max-width: 1200px) 45vw, 500px"
                    className="object-cover object-center transition-transform duration-1000 ease-out group-hover:scale-105"
                  />
                  <div className="absolute inset-0 bg-gradient-to-t from-black/60 via-black/10 to-transparent" />

                  {/* Overlaid Floating Glass Capsule */}
                  <div className="absolute bottom-6 left-6 right-6 p-4 glass-card border border-glass-border">
                    <div className="flex items-center justify-between">
                      <div>
                        <div className="flex items-center gap-1.5 mb-1">
                          <MapPin className="w-3 h-3 text-accent" />
                          <p className="text-[10px] tracking-[0.2em] uppercase font-semibold text-accent">
                            Sanctuary Atelier
                          </p>
                        </div>
                        <p className="font-serif text-base text-foreground font-medium">
                          Union Square • San Francisco
                        </p>
                      </div>
                      <Link
                        href="/about"
                        aria-label="Discover our salon sanctuary"
                        className="w-8 h-8 rounded-full border border-border flex items-center justify-center text-foreground hover:bg-foreground hover:text-background transition-colors"
                      >
                        <ArrowUpRight className="w-4 h-4" />
                      </Link>
                    </div>
                  </div>
                </div>

                {/* Floating Established Badge */}
                <div className="absolute -top-4 -left-4 sm:-top-6 sm:-left-6 glass-pill px-4 py-2 text-center shadow-lg border border-glass-border z-20">
                  <span className="font-serif text-lg text-foreground font-medium block">
                    Est. 2018
                  </span>
                  <span className="text-[9px] uppercase tracking-widest text-accent font-semibold block">
                    Paris • SF
                  </span>
                </div>

                {/* Decorative Offset Border Frame */}
                <div
                  className="absolute -bottom-6 -right-6 w-full h-full border border-accent/40 -z-10 hidden sm:block pointer-events-none"
                  aria-hidden="true"
                />
              </div>
            </FadeIn>
          </div>
        </div>
      </div>
    </section>
  );
}
