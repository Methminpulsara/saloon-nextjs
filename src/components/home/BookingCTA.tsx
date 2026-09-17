import React from "react";
import { businessData } from "@/data/business";
import { Button } from "@/components/common/Button";
import { WhatsAppButton } from "@/components/common/WhatsAppButton";
import { FadeUp } from "@/components/common/MotionWrapper";

export function BookingCTA() {
  return (
    <section className="relative overflow-hidden py-20 sm:py-28 bg-primary text-primary-foreground">
      {/* Ambient background glow */}
      <div
        className="absolute inset-0 opacity-15 pointer-events-none bg-[radial-gradient(var(--accent)_1px,transparent_1px)] [background-size:24px_24px]"
        aria-hidden="true"
      />
      <div
        className="absolute top-0 right-1/4 w-96 h-96 bg-accent/15 rounded-full blur-3xl pointer-events-none"
        aria-hidden="true"
      />

      <div className="relative max-w-5xl mx-auto px-4 sm:px-6 lg:px-8 text-center">
        <FadeUp>
          <span className="text-xs uppercase tracking-[0.25em] font-semibold text-accent mb-4 inline-block">
            Your Transformation Begins Here
          </span>
        </FadeUp>

        <FadeUp delay={0.1}>
          <h2 className="font-serif text-3xl sm:text-4xl lg:text-6xl font-normal leading-tight mb-6 tracking-tight">
            Ready for your next look?
          </h2>
        </FadeUp>

        <FadeUp delay={0.2}>
          <p className="text-base sm:text-xl text-primary-foreground/80 font-light max-w-2xl mx-auto mb-10 leading-relaxed">
            Tell us what you&apos;re looking for and we&apos;ll help you find the right service. Whether it&apos;s a subtle refresh or a complete couture metamorphosis, our sanctuary welcomes you.
          </p>
        </FadeUp>

        <FadeUp delay={0.3}>
          <div className="flex flex-col sm:flex-row items-center justify-center gap-4 max-w-md mx-auto">
            <Button
              href="/contact"
              variant="secondary"
              size="lg"
              className="w-full sm:w-auto"
            >
              Book an Appointment
            </Button>

            <WhatsAppButton
              className="w-full sm:w-auto"
              message={`Hello ${businessData.name}, I am interested in booking an appointment for a salon service.`}
              label="WhatsApp Us"
            />
          </div>
        </FadeUp>

        <FadeUp delay={0.4}>
          <div className="mt-10 flex flex-wrap items-center justify-center gap-6 text-xs text-primary-foreground/70 font-light">
            <span>Complimentary Consultations</span>
            <span>•</span>
            <span>Zero Obligation Inquiries</span>
            <span>•</span>
            <span>Private Salon Experience</span>
          </div>
        </FadeUp>
      </div>
    </section>
  );
}
