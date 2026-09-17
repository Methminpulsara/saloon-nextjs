import React from "react";
import Image from "next/image";
import { Instagram } from "lucide-react";
import { businessData } from "@/data/business";
import { FadeUp, StaggerContainer, StaggerItem } from "@/components/common/MotionWrapper";

export function InstagramGrid() {
  const instagramUrl =
    businessData.socialLinks.find((s) => s.platform.toLowerCase() === "instagram")?.url ||
    "https://instagram.com";

  const feedImages = [
    {
      url: "https://images.unsplash.com/photo-1560869713-7d0a29430803?q=80&w=800&auto=format&fit=crop",
      alt: "Natural dimensional hair waves at Lumière Salon",
    },
    {
      url: "https://images.unsplash.com/photo-1595476108010-b4d1f102b1b1?q=80&w=800&auto=format&fit=crop",
      alt: "French bob precision haircut",
    },
    {
      url: "https://images.unsplash.com/photo-1519699047748-de8e457a634e?q=80&w=800&auto=format&fit=crop",
      alt: "Balayage highlight glow",
    },
    {
      url: "https://images.unsplash.com/photo-1604654894610-df63bc536371?q=80&w=800&auto=format&fit=crop",
      alt: "Minimalist glazed manicure details",
    },
    {
      url: "https://images.unsplash.com/photo-1570172619644-dfd03ed5d881?q=80&w=800&auto=format&fit=crop",
      alt: "Restorative facial treatment in private suite",
    },
    {
      url: "https://images.unsplash.com/photo-1594744803329-e58b31de8bf5?q=80&w=800&auto=format&fit=crop",
      alt: "Bridal hair chignon with pearls",
    },
  ];

  return (
    <section className="py-20 sm:py-24 bg-muted/20 border-t border-border overflow-hidden">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <FadeUp>
          <div className="text-center max-w-xl mx-auto mb-12">
            <div className="inline-flex items-center justify-center w-10 h-10 rounded-full bg-accent/10 border border-accent/20 text-accent mb-3">
              <Instagram className="w-5 h-5" />
            </div>
            <span className="text-xs uppercase tracking-[0.25em] font-semibold text-accent block mb-2">
              Social Sanctuary
            </span>
            <h2 className="font-serif text-3xl sm:text-4xl font-normal text-foreground mb-3">
              Follow our work
            </h2>
            <p className="text-sm text-muted-foreground font-light mb-6">
              Behind the scenes, transformation reels, hair inspiration, and daily studio life.
            </p>
            <a
              href={instagramUrl}
              target="_blank"
              rel="noopener noreferrer"
              className="inline-flex items-center gap-2 px-6 py-2.5 border border-foreground text-xs uppercase tracking-widest font-semibold text-foreground hover:bg-foreground hover:text-background transition-all duration-300"
            >
              <Instagram className="w-3.5 h-3.5" />
              <span>@lumieresalon.demo</span>
            </a>
          </div>
        </FadeUp>

        {/* 6-Item Responsive Grid with StaggerContainer */}
        <StaggerContainer className="grid grid-cols-2 md:grid-cols-3 lg:grid-cols-6 gap-3 sm:gap-4">
          {feedImages.map((item, idx) => (
            <StaggerItem key={idx}>
              <a
                href={instagramUrl}
                target="_blank"
                rel="noopener noreferrer"
                className="group relative aspect-square overflow-hidden bg-card border border-border shadow-xs block"
                aria-label={`View Instagram post: ${item.alt}`}
              >
                <Image
                  src={item.url}
                  alt={item.alt}
                  fill
                  sizes="(max-width: 640px) 50vw, (max-width: 1024px) 33vw, 16vw"
                  className="object-cover object-center transition-transform duration-500 group-hover:scale-110"
                />
                <div className="absolute inset-0 bg-black/40 opacity-0 group-hover:opacity-100 transition-opacity duration-300 flex items-center justify-center text-white">
                  <Instagram className="w-6 h-6" />
                </div>
              </a>
            </StaggerItem>
          ))}
        </StaggerContainer>
      </div>
    </section>
  );
}
