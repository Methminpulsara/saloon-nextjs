import { salonConfig } from "@/data/salon";
import { GalleryItem } from "@/types";

/**
 * Re-exports gallery from the single source of truth: salonConfig in @/data/salon.
 */
export const galleryData: GalleryItem[] = salonConfig.gallery;
