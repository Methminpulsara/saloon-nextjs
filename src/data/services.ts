import { salonConfig } from "@/data/salon";
import { ServiceItem } from "@/types";

/**
 * Re-exports services from the single source of truth: salonConfig in @/data/salon.
 */
export const servicesData: ServiceItem[] = salonConfig.services;
