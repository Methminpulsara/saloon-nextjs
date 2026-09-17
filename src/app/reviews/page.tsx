import React from "react";
import type { Metadata } from "next";
import { Star, Quote, Sparkles, CheckCircle2, ShieldAlert } from "lucide-react";
import { testimonialsData } from "@/data/testimonials";
import { businessData } from "@/data/business";
import { SectionHeading } from "@/components/common/SectionHeading";
import { Button } from "@/components/common/Button";
import { WhatsAppButton } from "@/components/common/WhatsAppButton";
import { FadeUp, StaggerContainer, StaggerItem } from "@/components/common/MotionWrapper";

export const metadata: Metadata = {
  title: "Client Stories & Reviews | Lumière Salon",
  description:
    "Read reflections, experiences, and transformation stories from guests of Lumière Salon in San Francisco.",
};

export default function ReviewsPage() {
  return (
    <div className="bg-background text-foreground py-16 sm:py-24">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        {/* Page Header */}
        <FadeUp className="text-center max-w-3xl mx-auto mb-16">
          <span className="text-xs uppercase tracking-[0.25em] font-semibold text-accent mb-3 block">
            Guest Reflections
          </span>
          <h1 className="font-serif text-4xl sm:text-5xl lg:text-6xl font-normal text-foreground mb-6 tracking-tight">
            Kind words, cherished bonds.
          </h1>
          <p className="text-base sm:text-lg text-muted-foreground font-light leading-relaxed">
            We measure our success not simply in beautiful silhouettes, but in how relaxed, uplifted, and confident our guests feel walking out into the world.
          </p>
        </FadeUp>

        {/* Rating Scoreboard Banner */}
        <FadeUp delay={0.1}>
          <div className="bg-card border border-border p-8 sm:p-12 mb-16 shadow-xs">
            <div className="grid grid-cols-1 md:grid-cols-12 gap-8 items-center">
              {/* Left Score (4 cols) */}
              <div className="md:col-span-4 text-center md:text-left md:border-r border-border md:pr-8">
                <span className="font-serif text-5xl sm:text-6xl font-normal text-foreground block tracking-tight">
                  {businessData.trustRating.score}
                </span>
                <div className="flex items-center justify-center md:justify-start gap-1 text-accent my-3">
                  {[...Array(5)].map((_, i) => (
                    <Star key={i} className="w-5 h-5 fill-current" />
                  ))}
                </div>
                <p className="text-xs uppercase tracking-widest font-semibold text-foreground">
                  Overall Guest Satisfaction
                </p>
                <p className="text-[11px] text-muted-foreground mt-1 font-light">
                  {businessData.trustRating.reviewsCount}
                </p>
              </div>

              {/* Middle Feature Highlights (8 cols) */}
              <div className="md:col-span-8 grid grid-cols-1 sm:grid-cols-3 gap-6 text-center sm:text-left">
                <div className="space-y-1.5">
                  <div className="w-8 h-8 rounded-full bg-accent/15 flex items-center justify-center text-accent mx-auto sm:mx-0">
                    <Sparkles className="w-4 h-4" />
                  </div>
                  <h2 className="font-serif text-lg font-normal text-foreground">
                    Personalized Artistry
                  </h2>
                  <p className="text-xs text-muted-foreground font-light leading-relaxed">
                    Tailored face-framing cuts and custom tonal formulations.
                  </p>
                </div>

                <div className="space-y-1.5">
                  <div className="w-8 h-8 rounded-full bg-accent/15 flex items-center justify-center text-accent mx-auto sm:mx-0">
                    <CheckCircle2 className="w-4 h-4" />
                  </div>
                  <h2 className="font-serif text-lg font-normal text-foreground">
                    Low-Tox Chemistry
                  </h2>
                  <p className="text-xs text-muted-foreground font-light leading-relaxed">
                    Botanical extracts, ammonia-free color, and bond preservation.
                  </p>
                </div>

                <div className="space-y-1.5">
                  <div className="w-8 h-8 rounded-full bg-accent/15 flex items-center justify-center text-accent mx-auto sm:mx-0">
                    <Quote className="w-4 h-4" />
                  </div>
                  <h2 className="font-serif text-lg font-normal text-foreground">
                    Serene Sanctuary
                  </h2>
                  <p className="text-xs text-muted-foreground font-light leading-relaxed">
                    Private washing suites, peaceful acoustics, and relaxed pace.
                  </p>
                </div>
              </div>
            </div>
          </div>
        </FadeUp>

        {/* Demo Content Disclosure Callout */}
        <FadeUp delay={0.15}>
          <div className="mb-14 p-4 sm:p-5 bg-muted/40 border border-accent/40 flex items-start gap-3.5">
            <ShieldAlert className="w-5 h-5 text-accent shrink-0 mt-0.5" />
            <div className="text-xs text-muted-foreground font-light leading-relaxed">
              <strong className="font-semibold text-foreground">Master Template Notice:</strong> The testimonials below are simulated client stories prepared as layout and typographic examples for salon website customization. In compliance with web transparency standards, no aggregate rating schema or fake verified credentials are transmitted to search engines.
            </div>
          </div>
        </FadeUp>

        {/* Testimonials Grid */}
        <StaggerContainer className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8 mb-20">
          {testimonialsData.map((review) => (
            <StaggerItem
              key={review.id}
              className="bg-card border border-border p-8 flex flex-col justify-between shadow-xs hover:shadow-md hover:border-accent transition-all duration-300"
            >
              <div>
                <div className="flex items-center justify-between mb-4">
                  <div className="flex items-center gap-1 text-accent">
                    {[...Array(review.rating)].map((_, i) => (
                      <Star
                        key={i}
                        className="w-3.5 h-3.5 fill-current"
                      />
                    ))}
                  </div>
                  <span className="text-[10px] uppercase tracking-wider text-muted-foreground font-medium">
                    {review.date}
                  </span>
                </div>

                <p className="font-serif text-base sm:text-lg text-foreground leading-relaxed italic mb-6">
                  &ldquo;{review.comment}&rdquo;
                </p>
              </div>

              <div className="pt-4 border-t border-border flex flex-col">
                <span className="font-sans text-xs uppercase tracking-wider font-semibold text-foreground">
                  {review.name}
                </span>
                <span className="text-xs text-accent font-light mt-0.5">
                  Service: {review.service}
                </span>
              </div>
            </StaggerItem>
          ))}
        </StaggerContainer>

        {/* Bottom Booking Invitation */}
        <FadeUp delay={0.2}>
          <div className="p-10 sm:p-16 bg-primary text-primary-foreground text-center">
            <SectionHeading
              eyebrow="Join Our Guests"
              title="Experience the Lumière difference"
              subtitle="Book an unhurried consultation to discover tailored hair artistry and restorative therapies designed specifically for you."
              align="center"
              isLight
            />
            <div className="flex flex-col sm:flex-row items-center justify-center gap-4 mt-8">
              <Button
                href="/contact"
                variant="secondary"
                size="lg"
              >
                Book an Appointment
              </Button>
              <WhatsAppButton
                message="Hello Lumière Salon, I would like to book an appointment after browsing your client reviews."
                label="WhatsApp Us"
              />
            </div>
          </div>
        </FadeUp>
      </div>
    </div>
  );
}
