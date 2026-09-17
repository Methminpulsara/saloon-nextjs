import React from "react";
import { businessData } from "@/data/business";
import { StaggerContainer, StaggerItem, FadeUp } from "@/components/common/MotionWrapper";

export function StatsSection() {
  return (
    <section
      aria-label="Salon Milestones"
      className="border-y border-border bg-muted/40 py-12 sm:py-16"
    >
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <StaggerContainer className="grid grid-cols-2 md:grid-cols-4 gap-8 lg:gap-12">
          {businessData.stats.map((stat, idx) => (
            <StaggerItem
              key={stat.label}
              className={`flex flex-col items-center text-center ${
                idx !== 0 ? "border-l-0 md:border-l border-border" : ""
              } px-2 sm:px-4`}
            >
              <span className="font-serif text-3xl sm:text-4xl lg:text-5xl font-normal text-foreground tracking-tight mb-1.5">
                {stat.value}
              </span>
              <span className="text-xs uppercase tracking-[0.2em] font-semibold text-muted-foreground mb-1">
                {stat.label}
              </span>
              {stat.description && (
                <span className="text-[11px] text-muted-foreground/80 font-light hidden sm:inline">
                  {stat.description}
                </span>
              )}
            </StaggerItem>
          ))}
        </StaggerContainer>

        <FadeUp delay={0.2}>
          <p className="mt-8 text-center text-[11px] uppercase tracking-widest text-muted-foreground/60 font-light">
            • Master Template Showcase Metrics •
          </p>
        </FadeUp>
      </div>
    </section>
  );
}
