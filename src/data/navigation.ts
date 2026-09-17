import { salonConfig } from "@/data/salon";
import { NavItem } from "@/types";

/**
 * Re-exports navigation links from the single source of truth: salonConfig in @/data/salon.
 */
export const mainNavItems: NavItem[] = salonConfig.navigation.mainNav;
export const footerServiceLinks: NavItem[] = salonConfig.navigation.footerServices;
export const legalLinks: NavItem[] = salonConfig.navigation.legal;
