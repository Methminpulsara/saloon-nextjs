"use client";

import React, { useState, useEffect, useCallback } from "react";
import Image from "next/image";
import { X, ChevronLeft, ChevronRight, Maximize2, MessageCircle, Sparkles } from "lucide-react";
import { motion, AnimatePresence } from "framer-motion";
import { galleryData } from "@/data/gallery";
import { GalleryCategory, GalleryItem } from "@/types";
import { businessData, getWhatsAppUrl } from "@/data/business";
import { cn } from "@/lib/utils";

export function GalleryGrid() {
  const [selectedCategory, setSelectedCategory] = useState<GalleryCategory>("all");
  const [activeModalIndex, setActiveModalIndex] = useState<number | null>(null);

  const categories: { id: GalleryCategory; label: string }[] = [
    { id: "all", label: "All Works" },
    { id: "hair", label: "Hair" },
    { id: "colour", label: "Colour" },
    { id: "bridal", label: "Bridal" },
    { id: "makeup", label: "Makeup" },
    { id: "nails", label: "Nails" },
  ];

  const filteredItems =
    selectedCategory === "all"
      ? galleryData
      : galleryData.filter((item) => item.category === selectedCategory);

  const openModal = (index: number) => {
    setActiveModalIndex(index);
  };

  const closeModal = () => {
    setActiveModalIndex(null);
  };

  const nextImage = useCallback(() => {
    if (activeModalIndex !== null) {
      setActiveModalIndex((activeModalIndex + 1) % filteredItems.length);
    }
  }, [activeModalIndex, filteredItems.length]);

  const prevImage = useCallback(() => {
    if (activeModalIndex !== null) {
      setActiveModalIndex(
        (activeModalIndex - 1 + filteredItems.length) % filteredItems.length
      );
    }
  }, [activeModalIndex, filteredItems.length]);

  // Handle keyboard events (ESC, Arrow keys) and lock scrolling
  useEffect(() => {
    if (activeModalIndex === null) return;

    window.__lenis?.stop();
    const originalOverflow = document.body.style.overflow;
    const originalTouchAction = document.body.style.touchAction;
    document.body.style.overflow = "hidden";
    document.body.style.touchAction = "none";

    const handleKeyDown = (e: KeyboardEvent) => {
      if (e.key === "Escape") closeModal();
      if (e.key === "ArrowRight") nextImage();
      if (e.key === "ArrowLeft") prevImage();
    };

    window.addEventListener("keydown", handleKeyDown);

    return () => {
      window.__lenis?.start();
      document.body.style.overflow = originalOverflow;
      document.body.style.touchAction = originalTouchAction;
      window.removeEventListener("keydown", handleKeyDown);
    };
  }, [activeModalIndex, nextImage, prevImage]);

  const activeItem: GalleryItem | null =
    activeModalIndex !== null ? filteredItems[activeModalIndex] : null;

  return (
    <div>
      {/* Category Filter Tabs */}
      <div className="flex flex-wrap items-center justify-center gap-2 sm:gap-3 mb-12 sm:mb-16">
        {categories.map((cat) => {
          const isActive = selectedCategory === cat.id;
          const count =
            cat.id === "all"
              ? galleryData.length
              : galleryData.filter((i) => i.category === cat.id).length;

          return (
            <button
              key={cat.id}
              type="button"
              onClick={() => setSelectedCategory(cat.id)}
              className={cn(
                "px-5 py-2.5 text-xs uppercase tracking-widest font-semibold transition-all duration-300 border",
                isActive
                  ? "bg-foreground text-background border-foreground shadow-sm"
                  : "glass-pill text-muted-foreground hover:text-foreground hover:border-accent"
              )}
            >
              {cat.label} ({count})
            </button>
          );
        })}
      </div>

      {/* Editorial Varied Asymmetric Portfolio Composition */}
      <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-12 gap-6 sm:gap-8">
        {filteredItems.map((item, index) => {
          // Create varied spans: some items take 7 or 5 cols, others take 4 or 6 cols
          const spanPatterns = [
            "lg:col-span-7 aspect-[16/11]", // 0: Large wide feature
            "lg:col-span-5 aspect-[3/4]",   // 1: Editorial portrait
            "lg:col-span-4 aspect-[3/4]",   // 2: Portrait
            "lg:col-span-4 aspect-square",  // 3: Square detail
            "lg:col-span-4 aspect-[3/4]",   // 4: Portrait
            "lg:col-span-5 aspect-[3/4]",   // 5: Portrait
            "lg:col-span-7 aspect-[16/11]", // 6: Large wide feature
            "lg:col-span-6 aspect-square",  // 7: Balanced square
            "lg:col-span-6 aspect-square",  // 8: Balanced square
          ];

          const currentSpan = spanPatterns[index % spanPatterns.length];

          return (
            <div
              key={item.id}
              onClick={() => openModal(index)}
              className={cn(
                "group relative cursor-pointer overflow-hidden bg-card border border-border shadow-xs transition-all duration-500 hover:shadow-xl hover:border-accent",
                currentSpan
              )}
              role="button"
              tabIndex={0}
              onKeyDown={(e) => {
                if (e.key === "Enter" || e.key === " ") {
                  e.preventDefault();
                  openModal(index);
                }
              }}
              aria-label={`View full image: ${item.title}`}
            >
              <div className="relative w-full h-full min-h-[280px]">
                <Image
                  src={item.imageUrl}
                  alt={item.alt}
                  fill
                  sizes="(max-width: 640px) 100vw, (max-width: 1024px) 50vw, 60vw"
                  className="object-cover object-center transition-transform duration-700 ease-out group-hover:scale-105"
                />

                {/* Glassmorphic Gradient Overlay on Hover */}
                <div className="absolute inset-0 bg-gradient-to-t from-black/80 via-black/25 to-transparent opacity-0 group-hover:opacity-100 transition-opacity duration-300 flex flex-col justify-between p-6 sm:p-8">
                  <div className="flex items-center justify-between">
                    <span className="px-3 py-1 glass-pill text-[10px] uppercase tracking-[0.2em] font-semibold text-white">
                      {item.categoryLabel}
                    </span>
                    <span className="w-9 h-9 rounded-full bg-white/20 backdrop-blur-md text-white flex items-center justify-center transition-transform group-hover:scale-110">
                      <Maximize2 className="w-4 h-4" />
                    </span>
                  </div>

                  <div>
                    <h3 className="font-serif text-xl sm:text-2xl text-white font-normal mb-1">
                      {item.title}
                    </h3>
                    {item.description && (
                      <p className="text-xs text-white/80 font-light line-clamp-2 max-w-lg">
                        {item.description}
                      </p>
                    )}
                  </div>
                </div>
              </div>

              {/* Mobile details caption bar */}
              <div className="sm:hidden p-3.5 bg-card border-t border-border flex items-center justify-between">
                <span className="font-serif text-sm text-foreground font-medium">
                  {item.title}
                </span>
                <span className="text-[10px] uppercase tracking-wider text-accent font-semibold">
                  {item.categoryLabel}
                </span>
              </div>
            </div>
          );
        })}
      </div>

      {/* Immersive Lightbox Modal */}
      <AnimatePresence>
        {activeItem && (
          <div
            className="fixed inset-0 z-50 flex items-center justify-center p-3 sm:p-6 lg:p-10"
            role="dialog"
            aria-modal="true"
            aria-label={`Photo detail: ${activeItem.title}`}
          >
            {/* Backdrop */}
            <motion.div
              initial={{ opacity: 0 }}
              animate={{ opacity: 1 }}
              exit={{ opacity: 0 }}
              transition={{ duration: 0.2 }}
              className="fixed inset-0 bg-black/90 backdrop-blur-md"
              onClick={closeModal}
              aria-hidden="true"
            />

            {/* Modal Dialog Card */}
            <motion.div
              initial={{ opacity: 0, scale: 0.95, y: 15 }}
              animate={{ opacity: 1, scale: 1, y: 0 }}
              exit={{ opacity: 0, scale: 0.95, y: 15 }}
              transition={{ duration: 0.28, ease: [0.21, 0.47, 0.32, 0.98] }}
              className="relative z-10 max-w-5xl w-full bg-card border border-glass-border shadow-2xl overflow-hidden flex flex-col lg:flex-row max-h-[92vh]"
            >
              {/* Image Preview Container */}
              <div className="relative flex-1 bg-black/95 min-h-[300px] sm:min-h-[420px] lg:min-h-[580px] aspect-[4/3] lg:aspect-auto">
                <Image
                  src={activeItem.imageUrl}
                  alt={activeItem.alt}
                  fill
                  priority
                  sizes="(max-width: 1024px) 100vw, 70vw"
                  className="object-contain"
                />

                {/* Image Navigation Arrows */}
                <button
                  type="button"
                  onClick={(e) => {
                    e.stopPropagation();
                    prevImage();
                  }}
                  aria-label="Previous photograph (Left Arrow)"
                  className="absolute left-3 sm:left-4 top-1/2 -translate-y-1/2 w-11 h-11 rounded-full bg-black/60 backdrop-blur-md text-white flex items-center justify-center hover:bg-black/90 transition-colors focus-visible:outline-none focus-visible:ring-2 focus-visible:ring-accent"
                >
                  <ChevronLeft className="w-6 h-6" />
                </button>
                <button
                  type="button"
                  onClick={(e) => {
                    e.stopPropagation();
                    nextImage();
                  }}
                  aria-label="Next photograph (Right Arrow)"
                  className="absolute right-3 sm:right-4 top-1/2 -translate-y-1/2 w-11 h-11 rounded-full bg-black/60 backdrop-blur-md text-white flex items-center justify-center hover:bg-black/90 transition-colors focus-visible:outline-none focus-visible:ring-2 focus-visible:ring-accent"
                >
                  <ChevronRight className="w-6 h-6" />
                </button>

                {/* Index Counter Pill */}
                <div className="absolute top-4 left-4 px-3 py-1 rounded-full bg-black/60 backdrop-blur-md text-white text-[11px] font-mono tracking-wider">
                  {(activeModalIndex ?? 0) + 1} / {filteredItems.length}
                </div>
              </div>

              {/* Lightbox Sidebar Details */}
              <div className="w-full lg:w-84 p-6 sm:p-8 flex flex-col justify-between bg-card border-t lg:border-t-0 lg:border-l border-border overflow-y-auto">
                <div>
                  <div className="flex items-center justify-between pb-4 border-b border-border mb-6">
                    <span className="text-[10px] uppercase tracking-[0.25em] font-semibold text-accent flex items-center gap-1.5">
                      <Sparkles className="w-3 h-3" />
                      <span>{activeItem.categoryLabel}</span>
                    </span>
                    <button
                      type="button"
                      onClick={closeModal}
                      aria-label="Close photo preview (Escape)"
                      className="p-1 text-muted-foreground hover:text-foreground transition-colors focus-visible:outline-none focus-visible:ring-2 focus-visible:ring-accent"
                    >
                      <X className="w-6 h-6" />
                    </button>
                  </div>

                  <h2 className="font-serif text-2xl font-normal text-foreground mb-3">
                    {activeItem.title}
                  </h2>
                  <p className="text-sm text-muted-foreground font-light leading-relaxed mb-6">
                    {activeItem.description || activeItem.alt}
                  </p>

                  <div className="text-xs text-muted-foreground space-y-2 pt-4 border-t border-border">
                    <p>
                      <strong className="font-semibold text-foreground">Sanctuary:</strong> {businessData.name}
                    </p>
                    <p>
                      <strong className="font-semibold text-foreground">Location:</strong> {businessData.address.city}
                    </p>
                    <p>
                      <strong className="font-semibold text-foreground">Category:</strong> {activeItem.categoryLabel}
                    </p>
                  </div>
                </div>

                <div className="pt-6 border-t border-border mt-6 space-y-3">
                  <a
                    href={getWhatsAppUrl(
                      businessData.whatsapp,
                      `Hello Lumière Salon, I saw "${activeItem.title}" in your gallery and would like to request this style.`
                    )}
                    target="_blank"
                    rel="noopener noreferrer"
                    className="w-full inline-flex items-center justify-center gap-2 px-4 py-3 bg-[#25D366] text-white text-xs uppercase tracking-widest font-semibold hover:bg-[#20ba59] transition-colors shadow-sm"
                  >
                    <MessageCircle className="w-4 h-4 fill-current" />
                    <span>Inquire About This Look</span>
                  </a>
                </div>
              </div>
            </motion.div>
          </div>
        )}
      </AnimatePresence>
    </div>
  );
}
