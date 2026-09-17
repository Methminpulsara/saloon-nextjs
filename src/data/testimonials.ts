import { salonConfig } from "@/data/salon";
import { TestimonialItem } from "@/types";

/**
 * Re-exports testimonials from the single source of truth: salonConfig in @/data/salon.
 */
export const testimonialsData: TestimonialItem[] = salonConfig.testimonials;
