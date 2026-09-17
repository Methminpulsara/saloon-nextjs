import React from "react";
import Link from "next/link";
import { Star, Quote, ArrowRight } from "lucide-react";
import { testimonialsData } from "@/data/testimonials";
import { SectionHeading } from "@/components/common/SectionHeading";
import { FadeUp, StaggerContainer, StaggerItem } from "@/components/common/MotionWrapper";

export function TestimonialsSection() {
  const spotlightReviews = testimonialsData.slice(0, 3);

  return (
    <section className="py-20 sm:py-28 bg-background border-t border-border">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <FadeUp>
          <SectionHeading
            eyebrow="Client Reflections"
            title="Stories of craft & care"
            subtitle="A glimpse into how thoughtful consultations and attentive artistry transform our guests' daily rituals."
            align="center"
          />
        </FadeUp>

        {/* 3-Column Luxury Testimonials Grid */}
        <StaggerContainer className="grid grid-cols-1 md:grid-cols-3 gap-8">
          {spotlightReviews.map((review) => (
            <StaggerItem
              key={review.id}
              className="bg-card border border-border p-8 sm:p-10 flex flex-col justify-between relative shadow-xs hover:shadow-md hover:border-accent transition-all duration-300"
            >
              <div>
                {/* Decorative Quote Icon & Rating */}
                <div className="flex items-center justify-between mb-6">
                  <Quote className="w-8 h-8 text-accent/40" />
                  <div className="flex items-center gap-1 text-accent">
                    {[...Array(review.rating)].map((_, i) => (
                      <Star key={i} className="w-3.5 h-3.5 fill-current" />
                    ))}
                  </div>
                </div>

                {/* Review Text */}
                <p className="font-serif text-lg text-foreground leading-relaxed italic mb-8 font-normal">
                  &ldquo;{review.comment}&rdquo;
                </p>
              </div>

              {/* Author and Service Info */}
              <div className="pt-6 border-t border-border flex flex-col">
                <span className="font-sans text-xs uppercase tracking-wider font-semibold text-foreground">
                  {review.name}
                </span>
                <span className="text-xs text-accent font-light mt-0.5">
                  {review.service}
                </span>
                <span className="text-[10px] text-muted-foreground uppercase tracking-widest mt-2">
                  {review.date}
                </span>
              </div>
            </StaggerItem>
          ))}
        </StaggerContainer>

        {/* Demo Notice & Reviews Page Link */}
        <FadeUp delay={0.2} className="mt-14 flex flex-col sm:flex-row items-center justify-center gap-4 text-center">
          <Link
            href="/reviews"
            className="inline-flex items-center gap-2 text-xs uppercase tracking-widest font-semibold text-foreground hover:text-accent underline underline-offset-8 transition-colors"
          >
            <span>Read all client stories</span>
            <ArrowRight className="w-3.5 h-3.5" />
          </Link>
          <span className="hidden sm:inline text-border">•</span>
          <span className="text-xs text-muted-foreground font-light">
            Simulated guest reviews for salon master template demonstration.
          </span>
        </FadeUp>
      </div>
    </section>
  );
}
