"use client";

import React, { useEffect, useRef } from "react";
import Link from "next/link";
import { usePathname } from "next/navigation";
import { X, Phone, Clock, MapPin, ArrowUpRight } from "lucide-react";
import { motion, AnimatePresence } from "framer-motion";
import { salonConfig, getPhoneHref } from "@/data/salon";
import { WhatsAppButton } from "@/components/common/WhatsAppButton";
import { Button } from "@/components/common/Button";
import { ThemeSwitcher } from "@/components/common/ThemeSwitcher";

interface MobileNavProps {
  isOpen: boolean;
  onClose: () => void;
}

export function MobileNav({ isOpen, onClose }: MobileNavProps) {
  const pathname = usePathname();
  const drawerRef = useRef<HTMLDivElement>(null);
  const closeButtonRef = useRef<HTMLButtonElement>(null);

  // Handle ESC key, body scroll lock, and Lenis pause
  useEffect(() => {
    if (isOpen) {
      // Pause smooth scroll
      window.__lenis?.stop();

      // Lock body scroll safely
      const originalOverflow = document.body.style.overflow;
      const originalTouchAction = document.body.style.touchAction;
      document.body.style.overflow = "hidden";
      document.body.style.touchAction = "none";

      closeButtonRef.current?.focus();

      const handleKeyDown = (e: KeyboardEvent) => {
        if (e.key === "Escape") {
          onClose();
        }
      };

      window.addEventListener("keydown", handleKeyDown);

      return () => {
        document.body.style.overflow = originalOverflow;
        document.body.style.touchAction = originalTouchAction;
        window.__lenis?.start();
        window.removeEventListener("keydown", handleKeyDown);
      };
    }
  }, [isOpen, onClose]);

  return (
    <AnimatePresence>
      {isOpen && (
        <div
          className="fixed inset-0 z-50 lg:hidden"
          role="dialog"
          aria-modal="true"
          aria-label="Mobile Navigation Menu"
        >
          {/* Backdrop with Click to Close */}
          <motion.div
            initial={{ opacity: 0 }}
            animate={{ opacity: 1 }}
            exit={{ opacity: 0 }}
            transition={{ duration: 0.25, ease: "easeOut" }}
            className="fixed inset-0 bg-black/70 backdrop-blur-md"
            onClick={onClose}
            aria-hidden="true"
          />

          {/* Luxury Slide-in Drawer */}
          <motion.div
            ref={drawerRef}
            initial={{ x: "100%" }}
            animate={{ x: 0 }}
            exit={{ x: "100%" }}
            transition={{
              duration: 0.35,
              ease: [0.16, 1, 0.3, 1],
            }}
            className="fixed inset-y-0 right-0 w-full max-w-[360px] sm:max-w-md bg-card border-l border-border p-6 sm:p-8 flex flex-col justify-between overflow-y-auto shadow-2xl z-55"
          >
            <div>
              {/* Header */}
              <div className="flex items-center justify-between pb-5 border-b border-border">
                <Link
                  href="/"
                  onClick={onClose}
                  className="group flex flex-col items-start"
                >
                  <span className="font-serif text-2xl tracking-[0.18em] font-medium text-foreground uppercase">
                    {salonConfig.brand.name}
                  </span>
                  <span className="text-[9px] tracking-[0.25em] uppercase text-accent font-medium -mt-0.5">
                    {salonConfig.location.city} • Atelier
                  </span>
                </Link>

                <button
                  ref={closeButtonRef}
                  type="button"
                  onClick={onClose}
                  aria-label="Close navigation menu"
                  className="p-2 -mr-2 text-foreground hover:text-accent transition-colors focus-visible:outline-none focus-visible:ring-2 focus-visible:ring-accent"
                >
                  <X className="w-6 h-6" />
                </button>
              </div>

              {/* Navigation Links with Editorial Numbers */}
              <nav className="flex flex-col py-6 space-y-1" aria-label="Mobile main navigation">
                {salonConfig.navigation.mainNav.map((item, index) => {
                  const isActive = pathname === item.href;
                  return (
                    <Link
                      key={item.href}
                      href={item.href}
                      onClick={onClose}
                      className={`flex items-center justify-between py-3.5 text-lg sm:text-xl font-serif tracking-wider transition-all border-b border-border/40 ${
                        isActive
                          ? "text-accent font-medium pl-2 border-accent"
                          : "text-foreground hover:text-accent hover:pl-2"
                      }`}
                    >
                      <span>{item.label}</span>
                      <span className="text-[10px] text-muted-foreground font-sans tracking-widest">
                        0{index + 1}
                      </span>
                    </Link>
                  );
                })}
              </nav>

              {/* Action CTAs */}
              <div className="pt-2 flex flex-col gap-3">
                {salonConfig.booking.enabled && (
                  <Button
                    href={salonConfig.booking.url}
                    variant="primary"
                    size="md"
                    className="w-full text-center group"
                    onClick={onClose}
                  >
                    <span>{salonConfig.booking.label}</span>
                    <ArrowUpRight className="w-4 h-4 ml-1.5 transition-transform group-hover:translate-x-0.5 group-hover:-translate-y-0.5" />
                  </Button>
                )}
                <WhatsAppButton
                  className="w-full justify-center"
                  label="Concierge WhatsApp"
                />
              </div>

              {/* Integrated Theme Switcher for Mobile */}
              <ThemeSwitcher isMobile />
            </div>

            {/* Salon Coordinates Brief */}
            <div className="pt-6 mt-6 border-t border-border text-xs text-muted-foreground space-y-2.5">
              <div className="flex items-center gap-2.5">
                <Phone className="w-3.5 h-3.5 text-accent shrink-0" />
                <a href={getPhoneHref()} className="hover:text-foreground">
                  {salonConfig.contact.displayPhone}
                </a>
              </div>
              <div className="flex items-center gap-2.5">
                <MapPin className="w-3.5 h-3.5 text-accent shrink-0" />
                <span className="truncate">{salonConfig.location.full}</span>
              </div>
              <div className="flex items-center gap-2.5">
                <Clock className="w-3.5 h-3.5 text-accent shrink-0" />
                <span>{salonConfig.hours.summary}</span>
              </div>
            </div>
          </motion.div>
        </div>
      )}
    </AnimatePresence>
  );
}
