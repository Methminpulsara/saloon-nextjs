import React from "react";
import type { Metadata } from "next";
import Image from "next/image";
import Link from "next/link";
import { Sparkles, Heart, Shield, Award, Droplet, Sun, Wind, Coffee } from "lucide-react";
import { businessData } from "@/data/business";
import { SectionHeading } from "@/components/common/SectionHeading";
import { Button } from "@/components/common/Button";
import { WhatsAppButton } from "@/components/common/WhatsAppButton";
import { TeamSection } from "@/components/about/TeamSection";
import { FadeUp, FadeIn, StaggerContainer, StaggerItem } from "@/components/common/MotionWrapper";

export const metadata: Metadata = {
  title: "About Our Sanctuary | Lumière Salon",
  description:
    "Discover the philosophy, master artisans, and tranquil environment behind Lumière Salon in San Francisco.",
};

export default function AboutPage() {
  const values = [
    {
      icon: Heart,
      title: "Individual Uniqueness",
      description:
        "We reject one-size-fits-all beauty. We honor your hair's unique density, natural wave patterns, and bone structure with custom architectural cuts.",
    },
    {
      icon: Droplet,
      title: "Low-Tox Chemistry",
      description:
        "Every toner, serum, and glaze is carefully vetted for ingredient transparency, minimizing chemical load while providing breathtaking luminosity.",
    },
    {
      icon: Award,
      title: "Continuous Craft",
      description:
        "Our team participates in regular masterclasses across Europe and New York to refine progressive balayage, dry-cutting, and scalp renewal techniques.",
    },
    {
      icon: Shield,
      title: "Sanctuary Standards",
      description:
        "A peaceful, unrushed space. We intentionally cap daily client capacity to ensure each guest receives our undivided, unhurried attention.",
    },
  ];

  const environmentFeatures = [
    {
      icon: Sun,
      title: "Diffused Natural Daylight",
      description: "Carefully positioned northern skylights allow us to evaluate hair color and skin tones in pure, accurate natural light.",
    },
    {
      icon: Wind,
      title: "Private Wash Haven",
      description: "A softly lit acoustic haven with lie-flat Italian shampoo beds, scalp aromatherapy, and ambient rainfall sounds.",
    },
    {
      icon: Coffee,
      title: "Artisanal Refreshment Lounge",
      description: "Enjoy seasonal herbal teas, locally roasted pour-over coffee, sparkling mineral water, and wholesome bites.",
    },
    {
      icon: Sparkles,
      title: "Botanical Apothecary Bar",
      description: "Custom-blended conditioning masks and scalp elixirs freshly formulated for your appointment.",
    },
  ];

  return (
    <div className="bg-background text-foreground">
      {/* 1. About Hero Section */}
      <section className="relative py-20 sm:py-28 bg-muted/30 border-b border-border overflow-hidden">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <FadeUp className="max-w-3xl">
            <span className="text-xs uppercase tracking-[0.25em] font-semibold text-accent mb-4 block">
              About Lumière
            </span>
            <h1 className="font-serif text-4xl sm:text-5xl lg:text-6xl font-normal text-foreground leading-[1.12] mb-6">
              Crafted with intention. <br />
              <span className="italic font-light font-serif text-accent">
                Created for your calm.
              </span>
            </h1>
            <p className="text-lg sm:text-xl text-muted-foreground font-light leading-relaxed">
              Founded on the premise that a salon visit should feel like a deep breath, Lumière blends Parisian artistry with a serene boutique sanctuary.
            </p>
          </FadeUp>
        </div>
      </section>

      {/* 2. Brand Story Section */}
      <section className="py-20 sm:py-28">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="grid grid-cols-1 lg:grid-cols-12 gap-12 lg:gap-16 items-center">
            {/* Story Imagery (6 cols) */}
            <div className="lg:col-span-6 space-y-6">
              <FadeIn>
                <div className="relative aspect-[4/3] w-full overflow-hidden shadow-lg bg-card border border-border">
                  <Image
                    src="https://images.unsplash.com/photo-1527799820374-dcf8d9d4a388?q=80&w=1200&auto=format&fit=crop"
                    alt="Lumière Salon peaceful styling station and warm aesthetic"
                    fill
                    sizes="(max-width: 1024px) 100vw, 50vw"
                    className="object-cover object-center"
                  />
                </div>
              </FadeIn>
              <div className="grid grid-cols-2 gap-6">
                <FadeIn delay={0.1}>
                  <div className="relative aspect-[4/3] overflow-hidden shadow-md bg-card border border-border">
                    <Image
                      src="https://images.unsplash.com/photo-1522337360788-8b13dee7a37e?q=80&w=800&auto=format&fit=crop"
                      alt="Stylist washing hair with botanical shampoo"
                      fill
                      sizes="(max-width: 1024px) 50vw, 25vw"
                      className="object-cover object-center"
                    />
                  </div>
                </FadeIn>
                <FadeIn delay={0.2}>
                  <div className="relative aspect-[4/3] overflow-hidden shadow-md bg-card border border-border">
                    <Image
                      src="https://images.unsplash.com/photo-1570172619644-dfd03ed5d881?q=80&w=800&auto=format&fit=crop"
                      alt="Facial skincare treatment"
                      fill
                      sizes="(max-width: 1024px) 50vw, 25vw"
                      className="object-cover object-center"
                    />
                  </div>
                </FadeIn>
              </div>
            </div>

            {/* Story Narrative (6 cols) */}
            <div className="lg:col-span-6 space-y-6">
              <FadeUp>
                <span className="text-xs uppercase tracking-[0.25em] font-semibold text-accent">
                  Our Genesis
                </span>
                <h2 className="font-serif text-3xl sm:text-4xl lg:text-5xl font-normal text-foreground leading-[1.15] mt-1 mb-4">
                  An antidote to rushed beauty.
                </h2>
                <p className="text-base sm:text-lg text-muted-foreground font-light leading-relaxed mb-4">
                  For too long, traditional hair salons have operated like assembly lines: fluorescent lighting, loud chatter, multiple overlapping appointments, and chemical odors.
                </p>
                <p className="text-sm sm:text-base text-muted-foreground font-light leading-relaxed mb-4">
                  In 2018, Genevieve Laurent set out to construct an intentional alternative. She envisioned a luminous, quiet atelier where guest comfort is sacred, consultations are comprehensive conversations, and services are executed with couture patience.
                </p>
                <p className="text-sm sm:text-base text-muted-foreground font-light leading-relaxed">
                  Today, Lumière is home to a selective team of colorists, stylists, and skin therapists who share a common devotion: highlighting what makes you inherently radiant without stripping away hair health or peace of mind.
                </p>

                <div className="pt-6 border-t border-border flex items-center gap-8 mt-6">
                  <div>
                    <span className="font-serif text-3xl text-foreground font-normal">
                      2018
                    </span>
                    <span className="text-xs text-muted-foreground uppercase tracking-wider block mt-1">
                      Year Established
                    </span>
                  </div>
                  <div className="border-l border-border pl-8">
                    <span className="font-serif text-3xl text-foreground font-normal">
                      100%
                    </span>
                    <span className="text-xs text-muted-foreground uppercase tracking-wider block mt-1">
                      Dedicated 1-on-1 Focus
                    </span>
                  </div>
                </div>
              </FadeUp>
            </div>
          </div>
        </div>
      </section>

      {/* 3. Core Philosophy & Values */}
      <section className="py-20 sm:py-28 bg-muted/30 border-y border-border">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <FadeUp>
            <SectionHeading
              eyebrow="Guiding Principles"
              title="What we stand for"
              subtitle="Four unwavering pillars that define our client experience, our formulations, and our craft."
              align="center"
            />
          </FadeUp>

          <StaggerContainer className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-8">
            {values.map((val) => {
              const Icon = val.icon;
              return (
                <StaggerItem
                  key={val.title}
                  className="bg-card border border-border p-8 flex flex-col justify-between hover:border-accent transition-colors shadow-xs"
                >
                  <div>
                    <div className="w-12 h-12 rounded-full bg-accent/10 border border-accent/20 flex items-center justify-center text-accent mb-6">
                      <Icon className="w-6 h-6" />
                    </div>
                    <h3 className="font-serif text-xl font-normal text-foreground mb-3">
                      {val.title}
                    </h3>
                    <p className="text-sm text-muted-foreground font-light leading-relaxed">
                      {val.description}
                    </p>
                  </div>
                </StaggerItem>
              );
            })}
          </StaggerContainer>
        </div>
      </section>

      {/* 4. Team Showcase */}
      <TeamSection />

      {/* 5. Salon Environment Tour */}
      <section className="py-20 sm:py-28 bg-muted/20 border-t border-border">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <FadeUp>
            <SectionHeading
              eyebrow="The Atelier Environment"
              title="A space designed around you"
              subtitle="Every architectural detail—from acoustic plaster to curated organic aromatherapy—is curated to nurture your senses."
              align="center"
            />
          </FadeUp>

          <StaggerContainer className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-8">
            {environmentFeatures.map((feat) => {
              const Icon = feat.icon;
              return (
                <StaggerItem
                  key={feat.title}
                  className="bg-card border border-border p-8 flex flex-col justify-between hover:border-accent transition-colors shadow-xs"
                >
                  <div>
                    <div className="w-12 h-12 rounded-none bg-accent/10 border border-accent/20 flex items-center justify-center text-accent mb-6">
                      <Icon className="w-6 h-6" />
                    </div>
                    <h3 className="font-serif text-xl font-normal text-foreground mb-3">
                      {feat.title}
                    </h3>
                    <p className="text-sm text-muted-foreground font-light leading-relaxed">
                      {feat.description}
                    </p>
                  </div>
                </StaggerItem>
              );
            })}
          </StaggerContainer>
        </div>
      </section>

      {/* 6. About Page CTA */}
      <section className="py-20 sm:py-28 bg-primary text-primary-foreground text-center">
        <div className="max-w-4xl mx-auto px-4 sm:px-6 lg:px-8">
          <FadeUp>
            <span className="text-xs uppercase tracking-[0.25em] font-semibold text-accent mb-4 inline-block">
              Experience Lumière
            </span>
            <h2 className="font-serif text-3xl sm:text-4xl lg:text-5xl font-normal leading-tight mb-6">
              Begin your hair & beauty journey with us.
            </h2>
            <p className="text-base sm:text-lg text-primary-foreground/80 font-light max-w-xl mx-auto mb-10 leading-relaxed">
              Reserve your consultation online or connect directly with our concierge team via WhatsApp for personalized guidance.
            </p>
            <div className="flex flex-col sm:flex-row items-center justify-center gap-4">
              <Button
                href="/contact"
                variant="secondary"
                size="lg"
              >
                Book an Appointment
              </Button>
              <WhatsAppButton
                message="Hello Lumière Salon, I would like to book an appointment after reading your story."
                label="WhatsApp Us"
              />
            </div>
          </FadeUp>
        </div>
      </section>
    </div>
  );
}
