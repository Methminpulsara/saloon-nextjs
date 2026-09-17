import React from "react";
import Link from "next/link";
import { Instagram, Facebook, Pin, ArrowUpRight, Phone, Mail, MapPin } from "lucide-react";
import { businessData } from "@/data/business";
import { mainNavItems, footerServiceLinks, legalLinks } from "@/data/navigation";

export function Footer() {
  const currentYear = new Date().getFullYear();

  const getSocialIcon = (platform: string) => {
    switch (platform.toLowerCase()) {
      case "instagram":
        return <Instagram className="w-4 h-4" />;
      case "facebook":
        return <Facebook className="w-4 h-4" />;
      case "pinterest":
        return <Pin className="w-4 h-4" />;
      default:
        return <ArrowUpRight className="w-4 h-4" />;
    }
  };

  return (
    <footer className="bg-card text-foreground border-t border-border">
      {/* Upper Editorial Newsletter & Invitation */}
      <div className="border-b border-border py-12 sm:py-16 bg-muted/20">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="grid grid-cols-1 lg:grid-cols-12 gap-8 items-center">
            <div className="lg:col-span-7">
              <span className="text-xs uppercase tracking-[0.25em] text-accent font-semibold mb-2 block">
                {businessData.businessType}
              </span>
              <h3 className="font-serif text-2xl sm:text-3xl lg:text-4xl font-normal text-foreground">
                {businessData.tagline}
              </h3>
              <p className="mt-2 text-sm text-muted-foreground max-w-xl font-light">
                Discover bespoke hair styling, luminous balayage, restorative skin therapies, and bridal artistry in our sanctuary.
              </p>
            </div>
            <div className="lg:col-span-5 flex flex-col sm:flex-row gap-3">
              <Link
                href="/contact"
                className="inline-flex items-center justify-center px-6 py-3.5 bg-foreground text-background text-xs font-semibold uppercase tracking-widest hover:opacity-90 transition-opacity"
              >
                Schedule Consultation
              </Link>
              <Link
                href="/services"
                className="inline-flex items-center justify-center px-6 py-3.5 border border-border text-foreground text-xs font-semibold uppercase tracking-widest hover:bg-muted transition-colors"
              >
                View Services
              </Link>
            </div>
          </div>
        </div>
      </div>

      {/* Main Multi-Column Footer Grid */}
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 py-16">
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-5 gap-10 lg:gap-8">
          {/* Brand & Mission (Col 1 & 2) */}
          <div className="lg:col-span-2 space-y-4">
            <Link href="/" className="inline-block">
              <span className="font-serif text-2xl sm:text-3xl tracking-[0.2em] text-foreground font-medium">
                {businessData.name}
              </span>
            </Link>
            <p className="text-sm text-muted-foreground leading-relaxed max-w-sm font-light">
              {businessData.shortAbout}
            </p>
            <div className="pt-2 flex items-center space-x-3">
              {businessData.socialLinks.map((social) => (
                <a
                  key={social.platform}
                  href={social.url}
                  target="_blank"
                  rel="noopener noreferrer"
                  aria-label={`Follow Lumière Salon on ${social.platform}`}
                  className="w-9 h-9 flex items-center justify-center rounded-none border border-border text-muted-foreground hover:border-accent hover:text-accent transition-colors"
                >
                  {getSocialIcon(social.platform)}
                </a>
              ))}
            </div>
          </div>

          {/* Quick Navigation (Col 3) */}
          <div>
            <h4 className="text-xs uppercase tracking-[0.2em] font-semibold text-accent mb-4">
              Explore
            </h4>
            <ul className="space-y-2.5 text-sm font-light text-muted-foreground">
              {mainNavItems.map((item) => (
                <li key={item.href}>
                  <Link
                    href={item.href}
                    className="hover:text-foreground transition-colors inline-block"
                  >
                    {item.label}
                  </Link>
                </li>
              ))}
            </ul>
          </div>

          {/* Signature Services (Col 4) */}
          <div>
            <h4 className="text-xs uppercase tracking-[0.2em] font-semibold text-accent mb-4">
              Signature Services
            </h4>
            <ul className="space-y-2.5 text-sm font-light text-muted-foreground">
              {footerServiceLinks.map((service) => (
                <li key={service.label}>
                  <Link
                    href={service.href}
                    className="hover:text-foreground transition-colors inline-block"
                  >
                    {service.label}
                  </Link>
                </li>
              ))}
            </ul>
          </div>

          {/* Contact & Hours (Col 5) */}
          <div>
            <h4 className="text-xs uppercase tracking-[0.2em] font-semibold text-accent mb-4">
              Sanctuary
            </h4>
            <address className="not-italic space-y-3 text-sm font-light text-muted-foreground">
              <div className="flex items-start gap-2.5">
                <MapPin className="w-4 h-4 text-accent shrink-0 mt-0.5" />
                <span>{businessData.address.full}</span>
              </div>
              <div className="flex items-center gap-2.5">
                <Phone className="w-4 h-4 text-accent shrink-0" />
                <a
                  href={`tel:${businessData.phone}`}
                  className="hover:text-foreground transition-colors"
                >
                  {businessData.displayPhone}
                </a>
              </div>
              <div className="flex items-center gap-2.5">
                <Mail className="w-4 h-4 text-accent shrink-0" />
                <a
                  href={`mailto:${businessData.email}`}
                  className="hover:text-foreground transition-colors"
                >
                  {businessData.email}
                </a>
              </div>
            </address>

            <div className="mt-5 pt-4 border-t border-border">
              <p className="text-xs font-medium uppercase tracking-wider text-foreground mb-1">
                Hours of Quietude
              </p>
              <p className="text-xs text-muted-foreground leading-relaxed font-light">
                Tue – Fri: 9am – 7pm <br />
                Sat: 9am – 6pm • Sun: 10am – 4pm
              </p>
            </div>
          </div>
        </div>

        {/* Bottom Bar */}
        <div className="mt-16 pt-8 border-t border-border flex flex-col md:flex-row items-center justify-between gap-4 text-xs text-muted-foreground font-light">
          <div>
            © {currentYear} {businessData.name}. All rights reserved. Master Template for Luxury Salons.
          </div>
          <div className="flex flex-wrap items-center gap-6">
            {legalLinks.map((link) => (
              <Link
                key={link.label}
                href={link.href}
                className="hover:text-foreground transition-colors"
              >
                {link.label}
              </Link>
            ))}
          </div>
        </div>
      </div>
    </footer>
  );
}
