"use client";

import React, { useState, useEffect } from "react";
import Link from "next/link";
import { usePathname } from "next/navigation";
import { Menu, ArrowUpRight } from "lucide-react";
import { salonConfig } from "@/data/salon";
import { Button } from "@/components/common/Button";
import { MobileNav } from "@/components/layout/MobileNav";
import { ThemeSwitcher } from "@/components/common/ThemeSwitcher";
import { cn } from "@/lib/utils";

export function Navbar() {
  const [isScrolled, setIsScrolled] = useState(false);
  const [mobileMenuOpen, setMobileMenuOpen] = useState(false);
  const pathname = usePathname();

  useEffect(() => {
    const handleScroll = () => {
      setIsScrolled(window.scrollY > 20);
    };

    window.addEventListener("scroll", handleScroll, { passive: true });
    return () => window.removeEventListener("scroll", handleScroll);
  }, []);

  return (
    <>
      <header
        className={cn(
          "sticky top-0 z-40 w-full transition-all duration-500",
          isScrolled
            ? "glass-nav py-3 shadow-md"
            : "bg-transparent py-4 sm:py-6 border-b border-transparent"
        )}
      >
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 flex items-center justify-between">
          {/* Centralized Brand Wordmark */}
          <Link
            href="/"
            className="group flex flex-col items-start focus-visible:outline-none"
            aria-label={`${salonConfig.brand.name} - Home`}
          >
            <span className="font-serif text-2xl sm:text-3xl font-medium tracking-[0.2em] uppercase text-foreground group-hover:text-accent transition-colors duration-300">
              {salonConfig.brand.name}
            </span>
            <span className="text-[9px] sm:text-[10px] tracking-[0.35em] uppercase text-accent -mt-1 font-sans font-medium">
              {salonConfig.brand.shortName} • {salonConfig.location.city}
            </span>
          </Link>

          {/* Desktop Navigation Links */}
          <nav
            className="hidden lg:flex items-center space-x-8"
            aria-label="Main Navigation"
          >
            {salonConfig.navigation.mainNav.map((item) => {
              const isActive = pathname === item.href;
              return (
                <Link
                  key={item.href}
                  href={item.href}
                  className={cn(
                    "text-[11px] uppercase tracking-[0.22em] font-medium transition-all duration-200 py-1 relative",
                    isActive
                      ? "text-foreground font-semibold"
                      : "text-muted-foreground hover:text-foreground"
                  )}
                >
                  <span>{item.label}</span>
                  {isActive && (
                    <span
                      className="absolute bottom-0 left-0 right-0 h-[1.5px] bg-accent rounded-full"
                      aria-hidden="true"
                    />
                  )}
                </Link>
              );
            })}
          </nav>

          {/* Right Action Bar (Theme Switcher + Book CTA + Mobile Hamburger) */}
          <div className="flex items-center space-x-3 sm:space-x-4">
            {/* Desktop Theme Switcher */}
            <div className="hidden sm:block">
              <ThemeSwitcher />
            </div>

            {/* Desktop Booking CTA */}
            {salonConfig.booking.enabled && (
              <div className="hidden lg:block">
                <Button href={salonConfig.booking.url} variant="primary" size="sm" className="group">
                  <span>{salonConfig.booking.label}</span>
                  <ArrowUpRight className="w-3.5 h-3.5 ml-1 transition-transform group-hover:translate-x-0.5 group-hover:-translate-y-0.5" />
                </Button>
              </div>
            )}

            {/* Mobile Hamburger Button */}
            <div className="flex lg:hidden items-center">
              <button
                type="button"
                onClick={() => setMobileMenuOpen(true)}
                aria-label="Open main navigation menu"
                aria-expanded={mobileMenuOpen}
                aria-controls="mobile-nav"
                className="p-2 -mr-1.5 text-foreground hover:text-accent transition-colors focus-visible:outline-none focus-visible:ring-2 focus-visible:ring-accent"
              >
                <Menu className="w-6 h-6" />
              </button>
            </div>
          </div>
        </div>
      </header>

      {/* Full-Screen Luxury Mobile Navigation Drawer */}
      <MobileNav
        isOpen={mobileMenuOpen}
        onClose={() => setMobileMenuOpen(false)}
      />
    </>
  );
}
