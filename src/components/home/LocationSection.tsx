import React from "react";
import { MapPin, Phone, Mail, Clock, MessageCircle, Navigation } from "lucide-react";
import { businessData, getWhatsAppUrl } from "@/data/business";
import { SectionHeading } from "@/components/common/SectionHeading";
import { FadeUp, FadeIn } from "@/components/common/MotionWrapper";

export function LocationSection() {
  const whatsappUrl = getWhatsAppUrl(
    businessData.whatsapp,
    "Hello Lumière Salon, I would like directions or assistance with your location."
  );

  return (
    <section className="py-20 sm:py-28 bg-background border-t border-border">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <FadeUp>
          <SectionHeading
            eyebrow="Visit Our Sanctuary"
            title="San Francisco atelier"
            subtitle="Nestled in the heart of Union Square, our salon offers a peaceful respite from the vibrant pulse of the city."
            align="center"
          />
        </FadeUp>

        <div className="grid grid-cols-1 lg:grid-cols-12 gap-8 lg:gap-12 items-stretch">
          {/* Information Column (5 cols) */}
          <div className="lg:col-span-5">
            <FadeUp delay={0.1} className="h-full">
              <div className="flex flex-col justify-between space-y-8 bg-card border border-border p-8 sm:p-10 shadow-xs h-full">
                <div className="space-y-6">
                  {/* Address */}
                  <div className="flex items-start gap-4">
                    <div className="w-10 h-10 rounded-full bg-accent/10 border border-accent/20 flex items-center justify-center text-accent shrink-0 mt-1">
                      <MapPin className="w-5 h-5" />
                    </div>
                    <div>
                      <h3 className="text-xs uppercase tracking-widest font-semibold text-foreground mb-1">
                        Address
                      </h3>
                      <p className="text-sm text-muted-foreground font-light leading-relaxed">
                        {businessData.address.street}
                        {businessData.address.suite && `, ${businessData.address.suite}`}
                        <br />
                        {businessData.address.city}, {businessData.address.state} {businessData.address.postalCode}
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

                  {/* Hours */}
                  <div className="flex items-start gap-4 pt-4 border-t border-border">
                    <div className="w-10 h-10 rounded-full bg-accent/10 border border-accent/20 flex items-center justify-center text-accent shrink-0 mt-1">
                      <Clock className="w-5 h-5" />
                    </div>
                    <div>
                      <h3 className="text-xs uppercase tracking-widest font-semibold text-foreground mb-2">
                        Opening Hours
                      </h3>
                      <div className="space-y-1.5 text-xs sm:text-sm font-light text-muted-foreground">
                        {businessData.hours.map((h) => (
                          <div key={h.days} className="flex justify-between gap-4">
                            <span className="text-foreground font-normal">{h.days}:</span>
                            <span>{h.hours}</span>
                          </div>
                        ))}
                      </div>
                    </div>
                  </div>

                  {/* Direct Communications */}
                  <div className="pt-4 border-t border-border space-y-3">
                    <div className="flex items-center gap-3 text-sm font-light text-muted-foreground">
                      <Phone className="w-4 h-4 text-accent shrink-0" />
                      <a
                        href={`tel:${businessData.phone}`}
                        className="hover:text-foreground transition-colors"
                      >
                        {businessData.displayPhone}
                      </a>
                    </div>
                    <div className="flex items-center gap-3 text-sm font-light text-muted-foreground">
                      <MessageCircle className="w-4 h-4 text-[#25D366] shrink-0" />
                      <a
                        href={whatsappUrl}
                        target="_blank"
                        rel="noopener noreferrer"
                        className="hover:text-foreground transition-colors"
                      >
                        WhatsApp: {businessData.displayWhatsapp}
                      </a>
                    </div>
                    <div className="flex items-center gap-3 text-sm font-light text-muted-foreground">
                      <Mail className="w-4 h-4 text-accent shrink-0" />
                      <a
                        href={`mailto:${businessData.email}`}
                        className="hover:text-foreground transition-colors"
                      >
                        {businessData.email}
                      </a>
                    </div>
                  </div>
                </div>

                <div className="pt-6 border-t border-border">
                  <p className="text-xs text-muted-foreground/80 font-light">
                    Convenient valet parking available at adjacent boutique hotel entrance. Union Square BART station is 2 blocks away.
                  </p>
                </div>
              </div>
            </FadeUp>
          </div>

          {/* Map Column (7 cols) */}
          <div className="lg:col-span-7 h-full min-h-[380px] sm:min-h-[460px]">
            <FadeIn delay={0.2} className="h-full">
              <div className="h-full bg-card border border-border overflow-hidden relative shadow-xs">
                <iframe
                  title="Lumière Salon Location Map"
                  src={businessData.mapEmbedUrl}
                  width="100%"
                  height="100%"
                  style={{ border: 0, minHeight: "100%", width: "100%" }}
                  allowFullScreen={false}
                  loading="lazy"
                  referrerPolicy="no-referrer-when-downgrade"
                  className="w-full h-full grayscale contrast-[0.95] opacity-90 hover:grayscale-0 hover:opacity-100 transition-all duration-700"
                />
              </div>
            </FadeIn>
          </div>
        </div>
      </div>
    </section>
  );
}
