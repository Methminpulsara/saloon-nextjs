import React from "react";
import type { Metadata } from "next";
import { Phone, Mail, MapPin, Clock, MessageCircle, Navigation } from "lucide-react";
import { businessData, getWhatsAppUrl } from "@/data/business";
import { ContactForm } from "@/components/contact/ContactForm";
import { WhatsAppButton } from "@/components/common/WhatsAppButton";
import { FadeUp, FadeIn } from "@/components/common/MotionWrapper";

export const metadata: Metadata = {
  title: "Contact & Reservations | Lumière Salon",
  description:
    "Connect with Lumière Salon in San Francisco. Request an appointment, chat on WhatsApp, or view our address, opening hours, and location map.",
};

export default function ContactPage() {
  const whatsappUrl = getWhatsAppUrl(
    businessData.whatsapp,
    "Hello Lumière Salon, I would like to inquire about booking an appointment."
  );

  return (
    <div className="bg-background text-foreground py-16 sm:py-24">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        {/* Page Header */}
        <FadeUp className="text-center max-w-3xl mx-auto mb-16">
          <span className="text-xs uppercase tracking-[0.25em] font-semibold text-accent mb-3 block">
            Reserve Your Visit
          </span>
          <h1 className="font-serif text-4xl sm:text-5xl lg:text-6xl font-normal text-foreground mb-6 tracking-tight">
            We look forward to welcoming you.
          </h1>
          <p className="text-base sm:text-lg text-muted-foreground font-light leading-relaxed">
            Whether you are seeking a complete color metamorphosis, a bespoke precision cut, or full bridal styling, our concierge team is on hand to guide you.
          </p>
        </FadeUp>

        {/* Contact Layout Grid */}
        <div className="grid grid-cols-1 lg:grid-cols-12 gap-12 items-start mb-20">
          {/* Left Column: Contact Cards & Fast WhatsApp (5 cols) */}
          <div className="lg:col-span-5 space-y-8">
            <FadeUp delay={0.1}>
              {/* Quick WhatsApp Action Box */}
              <div className="bg-muted/40 border border-[#25D366]/40 p-6 sm:p-8 space-y-4 shadow-xs">
                <div className="flex items-center gap-3">
                  <div className="w-10 h-10 rounded-full bg-[#25D366] text-white flex items-center justify-center shadow-xs">
                    <MessageCircle className="w-5 h-5 fill-current" />
                  </div>
                  <div>
                    <h2 className="font-serif text-xl font-normal text-foreground">
                      Prefer Instant Messaging?
                    </h2>
                    <p className="text-xs text-muted-foreground font-light">
                      Send inspiration photos or ask questions directly.
                    </p>
                  </div>
                </div>
                <WhatsAppButton
                  className="w-full justify-center"
                  label="Chat with Our Concierge"
                />
              </div>
            </FadeUp>

            <FadeUp delay={0.2}>
              {/* Information Card */}
              <div className="bg-card border border-border p-8 space-y-6 shadow-xs">
                <h2 className="font-serif text-2xl font-normal text-foreground pb-4 border-b border-border">
                  Atelier Coordinates
                </h2>

                {/* Address */}
                <div className="flex items-start gap-4">
                  <MapPin className="w-5 h-5 text-accent shrink-0 mt-1" />
                  <div>
                    <h3 className="text-xs uppercase tracking-wider font-semibold text-foreground mb-1">
                      Address
                    </h3>
                    <p className="text-sm text-muted-foreground font-light leading-relaxed">
                      {businessData.address.full}
                    </p>
                    <a
                      href={`https://maps.google.com/?q=${encodeURIComponent(businessData.address.full)}`}
                      target="_blank"
                      rel="noopener noreferrer"
                      className="inline-flex items-center gap-1.5 text-xs font-semibold text-accent hover:underline mt-2 tracking-wider uppercase transition-colors"
                    >
                      <span>Get Directions</span>
                      <Navigation className="w-3.5 h-3.5" />
                    </a>
                  </div>
                </div>

                {/* Telephone */}
                <div className="flex items-center gap-4 pt-4 border-t border-border">
                  <Phone className="w-5 h-5 text-accent shrink-0" />
                  <div>
                    <h3 className="text-xs uppercase tracking-wider font-semibold text-foreground mb-0.5">
                      Telephone
                    </h3>
                    <a
                      href={`tel:${businessData.phone}`}
                      className="text-sm text-muted-foreground hover:text-foreground font-light transition-colors"
                    >
                      {businessData.displayPhone}
                    </a>
                  </div>
                </div>

                {/* Email */}
                <div className="flex items-center gap-4 pt-4 border-t border-border">
                  <Mail className="w-5 h-5 text-accent shrink-0" />
                  <div>
                    <h3 className="text-xs uppercase tracking-wider font-semibold text-foreground mb-0.5">
                      Concierge Email
                    </h3>
                    <a
                      href={`mailto:${businessData.email}`}
                      className="text-sm text-muted-foreground hover:text-foreground font-light transition-colors"
                    >
                      {businessData.email}
                    </a>
                  </div>
                </div>

                {/* Hours */}
                <div className="pt-4 border-t border-border">
                  <div className="flex items-center gap-2 mb-3">
                    <Clock className="w-4 h-4 text-accent" />
                    <h3 className="text-xs uppercase tracking-wider font-semibold text-foreground">
                      Salon Hours
                    </h3>
                  </div>
                  <div className="space-y-1.5 text-xs sm:text-sm font-light text-muted-foreground">
                    {businessData.hours.map((h) => (
                      <div key={h.days} className="flex justify-between">
                        <span className="text-foreground font-normal">{h.days}:</span>
                        <span>{h.hours}</span>
                      </div>
                    ))}
                  </div>
                </div>

                {/* Social Channels */}
                <div className="pt-4 border-t border-border">
                  <h3 className="text-xs uppercase tracking-wider font-semibold text-foreground mb-3">
                    Social Channels
                  </h3>
                  <div className="flex items-center gap-3">
                    {businessData.socialLinks.map((s) => (
                      <a
                        key={s.platform}
                        href={s.url}
                        target="_blank"
                        rel="noopener noreferrer"
                        className="px-3 py-1.5 border border-border text-xs text-muted-foreground hover:text-foreground hover:border-accent transition-colors"
                      >
                        {s.platform}
                      </a>
                    ))}
                  </div>
                </div>
              </div>
            </FadeUp>
          </div>

          {/* Right Column: Contact & Appointment Form (7 cols) */}
          <div className="lg:col-span-7">
            <FadeUp delay={0.25}>
              <ContactForm />
            </FadeUp>
          </div>
        </div>

        {/* Map View */}
        <FadeIn delay={0.3}>
          <section aria-label="Interactive map view" className="mt-16 bg-card border border-border overflow-hidden shadow-xs">
            <div className="p-6 sm:p-8 bg-muted/30 border-b border-border flex flex-col sm:flex-row sm:items-center justify-between gap-4">
              <div>
                <span className="text-xs uppercase tracking-widest text-accent font-semibold block mb-1">
                  Map & Transit
                </span>
                <h2 className="font-serif text-2xl font-normal text-foreground">
                  Finding Lumière Atelier
                </h2>
              </div>
              <a
                href={`https://maps.google.com/?q=${encodeURIComponent(businessData.address.full)}`}
                target="_blank"
                rel="noopener noreferrer"
                className="inline-flex items-center gap-2 px-4 py-2 border border-foreground text-xs uppercase tracking-widest font-semibold text-foreground hover:bg-foreground hover:text-background transition-colors"
              >
                <Navigation className="w-3.5 h-3.5" />
                <span>Open in Google Maps</span>
              </a>
            </div>
            <div className="h-[400px] w-full bg-muted">
              <iframe
                title="Lumière Salon Location Map"
                src={businessData.mapEmbedUrl}
                width="100%"
                height="100%"
                style={{ border: 0, minHeight: "100%", width: "100%" }}
                allowFullScreen={false}
                loading="lazy"
                referrerPolicy="no-referrer-when-downgrade"
                className="w-full h-full grayscale contrast-[0.95] opacity-95 hover:grayscale-0 transition-all duration-700"
              />
            </div>
          </section>
        </FadeIn>
      </div>
    </div>
  );
}
