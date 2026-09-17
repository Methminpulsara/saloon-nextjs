import React from "react";
import { Hero } from "@/components/home/Hero";
import { StatsSection } from "@/components/home/StatsSection";
import { ServicesPreview } from "@/components/home/ServicesPreview";
import { AboutPreview } from "@/components/home/AboutPreview";
import { FeaturedGallery } from "@/components/home/FeaturedGallery";
import { TestimonialsSection } from "@/components/home/TestimonialsSection";
import { WhyChooseUs } from "@/components/home/WhyChooseUs";
import { InstagramGrid } from "@/components/home/InstagramGrid";
import { BookingCTA } from "@/components/home/BookingCTA";
import { LocationSection } from "@/components/home/LocationSection";

export default function HomePage() {
  return (
    <>
      {/* 1. Hero Section */}
      <Hero />

      {/* 2. Trust / Demo Stats */}
      <StatsSection />

      {/* 3. Signature Services Preview */}
      <ServicesPreview />

      {/* 4. Editorial About & Philosophy Split Layout */}
      <AboutPreview />

      {/* 5. Featured Curated Gallery */}
      <FeaturedGallery />

      {/* 6. Why Choose Us / Core Pillars */}
      <WhyChooseUs />

      {/* 7. Client Testimonials & Stories */}
      <TestimonialsSection />

      {/* 8. Instagram & Social Portfolio Grid */}
      <InstagramGrid />

      {/* 9. Booking CTA Section */}
      <BookingCTA />

      {/* 10. Location, Hours & Interactive Map */}
      <LocationSection />
    </>
  );
}
