export interface Address {
  street: string;
  suite?: string;
  city: string;
  state: string;
  postalCode: string;
  country: string;
  full: string;
  neighborhood?: string;
  mapUrl?: string;
  googleMapsDirectionsUrl?: string;
  latitude?: string;
  longitude?: string;
}

export interface BusinessHour {
  days: string;
  hours: string;
  isClosed?: boolean;
}

export interface SocialLinks {
  instagram: string;
  instagramHandle: string;
  facebook: string;
  tiktok: string;
  youtube: string;
  pinterest?: string;
}

export interface SocialLink {
  platform: string;
  url: string;
  handle: string;
  icon: string;
}

export interface StatItem {
  value: string;
  label: string;
  description?: string;
}

export interface BenefitItem {
  title: string;
  description: string;
  iconName: string;
}

export type ServiceCategory = "hair" | "beauty" | "bridal";

export interface ServiceItem {
  id: string;
  name: string;
  category: ServiceCategory;
  categoryLabel: string;
  subcategory?: string;
  shortDescription: string;
  fullDescription: string;
  startingPrice: number;
  duration: string;
  featured: boolean;
  imageUrl: string;
  benefits?: string[];
}

export type GalleryCategory = "all" | "hair" | "colour" | "bridal" | "makeup" | "nails";

export interface GalleryItem {
  id: string;
  title: string;
  category: "hair" | "colour" | "bridal" | "makeup" | "nails";
  categoryLabel: string;
  imageUrl: string;
  aspectRatio: "portrait" | "square" | "landscape";
  alt: string;
  description?: string;
}

export interface TestimonialItem {
  id: string;
  name: string;
  service: string;
  rating: number;
  comment: string;
  date: string;
  isDemo?: boolean;
}

export interface TeamMember {
  id: string;
  name: string;
  role: string;
  bio: string;
  experience: string;
  specialties: string[];
  imageUrl: string;
}

export interface NavItem {
  label: string;
  href: string;
  isCta?: boolean;
}

export interface SalonConfig {
  brand: {
    name: string;
    shortName: string;
    tagline: string;
    eyebrow: string;
    description: string;
    shortAbout: string;
    logo?: string;
    favicon?: string;
    establishedYear: string;
    philosophyTitle: string;
    philosophyQuote: string;
  };
  contact: {
    phone: string;
    displayPhone: string;
    whatsapp: string;
    displayWhatsapp: string;
    email: string;
  };
  location: Address;
  hours: {
    monday: string;
    tuesday: string;
    wednesday: string;
    thursday: string;
    friday: string;
    saturday: string;
    sunday: string;
    summary: string;
    formattedList: BusinessHour[];
  };
  social: SocialLinks;
  services: ServiceItem[];
  gallery: GalleryItem[];
  testimonials: TestimonialItem[];
  team: TeamMember[];
  navigation: {
    mainNav: NavItem[];
    footerServices: NavItem[];
    legal: NavItem[];
  };
  booking: {
    enabled: boolean;
    url: string;
    label: string;
    ctaHeadline: string;
    ctaDescription: string;
    phoneBookingNote: string;
  };
  seo: {
    title: string;
    titleTemplate: string;
    description: string;
    keywords: string[];
    ogImage: string;
    canonicalUrl: string;
  };
  theme: {
    defaultTheme: string;
    accent: string;
  };
  stats: StatItem[];
  benefits: BenefitItem[];
  trustRating: {
    score: string;
    label: string;
    reviewsCount: string;
  };
  announcement: {
    text: string;
    actionText: string;
    href: string;
  };
}

export type BusinessInfo = {
  name: string;
  tagline: string;
  businessType: string;
  eyebrow: string;
  description: string;
  shortAbout: string;
  phone: string;
  displayPhone: string;
  whatsapp: string;
  displayWhatsapp: string;
  email: string;
  address: Address;
  hours: BusinessHour[];
  socialLinks: SocialLink[];
  mapEmbedUrl: string;
  stats: StatItem[];
  benefits: BenefitItem[];
  trustRating: {
    score: string;
    label: string;
    reviewsCount: string;
  };
  announcement: {
    text: string;
    actionText: string;
    href: string;
  };
};
