import { salonConfig, getWhatsAppHref } from "@/data/salon";
import { BusinessInfo } from "@/types";

/**
 * Backwards compatibility layer for businessData.
 * ALL values are derived directly from the single source of truth: salonConfig in @/data/salon.
 */
export const businessData: BusinessInfo = {
  name: salonConfig.brand.name,
  tagline: salonConfig.brand.tagline,
  businessType: "Hair & Beauty Sanctuary",
  eyebrow: salonConfig.brand.eyebrow,
  description: salonConfig.brand.description,
  shortAbout: salonConfig.brand.shortAbout,
  phone: salonConfig.contact.phone,
  displayPhone: salonConfig.contact.displayPhone,
  whatsapp: salonConfig.contact.whatsapp,
  displayWhatsapp: salonConfig.contact.displayWhatsapp,
  email: salonConfig.contact.email,
  address: salonConfig.location,
  hours: salonConfig.hours.formattedList,
  socialLinks: [
    { platform: "Instagram", url: salonConfig.social.instagram, handle: salonConfig.social.instagramHandle, icon: "Instagram" },
    { platform: "Pinterest", url: salonConfig.social.pinterest || "#", handle: salonConfig.brand.shortName.toLowerCase(), icon: "Pin" },
    { platform: "Facebook", url: salonConfig.social.facebook, handle: salonConfig.brand.name, icon: "Facebook" },
  ],
  mapEmbedUrl: salonConfig.location.mapUrl || "",
  stats: salonConfig.stats,
  benefits: salonConfig.benefits,
  trustRating: salonConfig.trustRating,
  announcement: salonConfig.announcement,
};

export function getWhatsAppUrl(
  phone: string = salonConfig.contact.whatsapp,
  message?: string
): string {
  return getWhatsAppHref(message);
}
