"use client";

import React, { useState } from "react";
import Image from "next/image";
import Link from "next/link";
import { Clock, Check, MessageCircle, Sparkles, HelpCircle } from "lucide-react";
import { servicesData } from "@/data/services";
import { ServiceCategory } from "@/types";
import { formatPrice } from "@/lib/utils";
import { businessData, getWhatsAppUrl } from "@/data/business";
import { Button } from "@/components/common/Button";
import { cn } from "@/lib/utils";
import { FadeUp } from "@/components/common/MotionWrapper";

type FilterTab = "all" | ServiceCategory;

export function ServicesCatalogue() {
  const [activeTab, setActiveTab] = useState<FilterTab>("all");

  const categories: { id: FilterTab; label: string }[] = [
    { id: "all", label: "All Rituals (14)" },
    { id: "hair", label: "Hair Artistry (7)" },
    { id: "beauty", label: "Skin & Beauty (4)" },
    { id: "bridal", label: "Bridal Sanctuary (3)" },
  ];

  const filteredServices =
    activeTab === "all"
      ? servicesData
      : servicesData.filter((s) => s.category === activeTab);

  const faqs = [
    {
      question: "How do I determine which hair color service is right for me?",
      answer:
        "We recommend booking a complimentary 15-minute consultation prior to your color appointment, or sending us inspirational photos via WhatsApp. We analyze your hair history, density, and natural tone to suggest either our signature balayage, foil baby-lights, or single gloss.",
    },
    {
      question: "Are your hair colors and treatments gentle on sensitive scalps?",
      answer:
        "Yes. We exclusively work with low-tox, ammonia-free, and hypoallergenic formulations enriched with organic botanical oils, soothing chamomile, and bond-building proteins.",
    },
    {
      question: "What is your bridal booking and preview trial timeline?",
      answer:
        "We recommend booking your wedding date 4 to 8 months in advance. Bridal hair and makeup previews are typically scheduled 6 to 10 weeks before your wedding day to finalize veil placement and look durability.",
    },
    {
      question: "What is the salon cancellation policy?",
      answer:
        "Because our artisans dedicate uninterrupted 1-on-1 time to each guest, we kindly request 48 hours notice for cancellations or rescheduling. This allows us to accommodate guests on our waitlist.",
    },
  ];

  return (
    <div>
      {/* Category Filter Tabs */}
      <div className="flex flex-wrap items-center justify-center gap-2 sm:gap-3 mb-12 sm:mb-16">
        {categories.map((cat) => {
          const isActive = activeTab === cat.id;
          return (
            <button
              key={cat.id}
              type="button"
              onClick={() => setActiveTab(cat.id)}
              className={cn(
                "px-5 py-2.5 text-xs uppercase tracking-widest font-semibold transition-all duration-300 border",
                isActive
                  ? "bg-foreground text-background border-foreground shadow-sm"
                  : "glass-pill text-muted-foreground hover:text-foreground hover:border-accent"
              )}
            >
              {cat.label}
            </button>
          );
        })}
      </div>

      {/* Services List Grid */}
      <div className="space-y-12">
        {filteredServices.map((service) => {
          const serviceWhatsAppUrl = getWhatsAppUrl(
            businessData.whatsapp,
            `Hello Lumière Salon, I would like to inquire about booking the "${service.name}" (${formatPrice(service.startingPrice)}).`
          );

          return (
            <FadeUp key={service.id}>
              <article
                id={service.id}
                className="group bg-card border border-border overflow-hidden hover:border-accent transition-all duration-300 shadow-xs"
              >
                <div className="grid grid-cols-1 lg:grid-cols-12 gap-0 items-stretch">
                  {/* Visual Image (5 cols) */}
                  <div className="lg:col-span-5 relative aspect-[16/10] lg:aspect-auto min-h-[260px] bg-muted overflow-hidden">
                    <Image
                      src={service.imageUrl}
                      alt={service.name}
                      fill
                      sizes="(max-width: 1024px) 100vw, 40vw"
                      className="object-cover object-center transition-transform duration-700 ease-out group-hover:scale-105"
                    />
                    <div className="absolute top-4 left-4 glass-pill px-3 py-1 text-[11px] uppercase tracking-wider font-semibold text-foreground">
                      {service.categoryLabel}
                    </div>
                    {service.featured && (
                      <div className="absolute top-4 right-4 bg-accent text-accent-foreground px-2.5 py-1 text-[10px] uppercase tracking-widest font-semibold flex items-center gap-1 shadow-sm">
                        <Sparkles className="w-3 h-3" />
                        <span>Signature</span>
                      </div>
                    )}
                  </div>

                  {/* Service Details (7 cols) */}
                  <div className="lg:col-span-7 p-6 sm:p-8 lg:p-10 flex flex-col justify-between">
                    <div>
                      {/* Header line: Title & Pricing */}
                      <div className="flex flex-col sm:flex-row sm:items-start justify-between gap-2 sm:gap-4 pb-4 border-b border-border">
                        <div>
                          <span className="text-xs uppercase tracking-wider text-accent font-semibold block mb-1">
                            {service.subcategory || service.categoryLabel}
                          </span>
                          <h2 className="font-serif text-2xl sm:text-3xl font-normal text-foreground">
                            {service.name}
                          </h2>
                        </div>
                        <div className="sm:text-right shrink-0 mt-1 sm:mt-0">
                          <span className="text-xs text-muted-foreground uppercase tracking-wider block font-light">
                            Starting at
                          </span>
                          <span className="font-serif text-2xl sm:text-3xl font-normal text-foreground">
                            {formatPrice(service.startingPrice)}
                          </span>
                        </div>
                      </div>

                      {/* Metadata: Duration */}
                      <div className="flex items-center gap-2 text-xs text-muted-foreground my-4 font-light">
                        <Clock className="w-3.5 h-3.5 text-accent" />
                        <span>Estimated Duration: {service.duration}</span>
                        <span>•</span>
                        <span>Personalized Consultation Included</span>
                      </div>

                      {/* Narrative Description */}
                      <p className="text-sm sm:text-base text-muted-foreground font-light leading-relaxed mb-6">
                        {service.fullDescription}
                      </p>

                      {/* Service Highlights / Inclusions */}
                      {service.benefits && service.benefits.length > 0 && (
                        <div className="space-y-2 mb-8 bg-muted/40 p-4 border border-border/70">
                          <span className="text-[11px] uppercase tracking-wider font-semibold text-foreground block mb-1">
                            Treatment Inclusions:
                          </span>
                          <div className="grid grid-cols-1 sm:grid-cols-2 gap-2">
                            {service.benefits.map((b) => (
                              <div
                                key={b}
                                className="flex items-center gap-2 text-xs text-muted-foreground font-light"
                              >
                                <Check className="w-3.5 h-3.5 text-accent shrink-0" />
                                <span>{b}</span>
                              </div>
                            ))}
                          </div>
                        </div>
                      )}
                    </div>

                    {/* Actions Bar */}
                    <div className="pt-4 border-t border-border flex flex-col sm:flex-row items-stretch sm:items-center justify-between gap-3">
                      <div className="flex items-center gap-3">
                        <Button
                          href="/contact"
                          variant="primary"
                          size="sm"
                        >
                          Book Appointment
                        </Button>
                        <a
                          href={serviceWhatsAppUrl}
                          target="_blank"
                          rel="noopener noreferrer"
                          className="inline-flex items-center gap-1.5 px-4 py-2 text-xs uppercase tracking-wider font-semibold border border-[#25D366] text-foreground hover:bg-[#25D366] hover:text-white transition-colors"
                        >
                          <MessageCircle className="w-3.5 h-3.5 text-[#25D366] group-hover:text-white" />
                          <span>Inquire on WhatsApp</span>
                        </a>
                      </div>
                      <span className="text-[11px] text-muted-foreground/70 font-light sm:text-right">
                        * Prices may vary based on hair length & density
                      </span>
                    </div>
                  </div>
                </div>
              </article>
            </FadeUp>
          );
        })}
      </div>

      {/* Pricing Transparency & Consultation Guide */}
      <section aria-label="Service consultation guide" className="mt-20 p-8 sm:p-12 bg-muted/40 border border-border">
        <div className="max-w-3xl mx-auto text-center space-y-4">
          <span className="text-xs uppercase tracking-[0.25em] font-semibold text-accent">
            Transparent Pricing Philosophy
          </span>
          <h3 className="font-serif text-2xl sm:text-3xl font-normal text-foreground">
            A Note on Our Pricing & Consultations
          </h3>
          <p className="text-sm sm:text-base text-muted-foreground font-light leading-relaxed">
            All listed prices are baseline demonstration estimates. During your initial consultation, your artisan provides a comprehensive breakdown before any work begins, ensuring clarity and alignment.
          </p>
          <div className="pt-2">
            <Button href="/contact" variant="outline" size="sm">
              Schedule a 15-Min Consultation
            </Button>
          </div>
        </div>
      </section>

      {/* Frequently Asked Questions */}
      <section aria-label="Frequently asked questions" className="mt-20">
        <div className="max-w-3xl mx-auto">
          <div className="text-center mb-10">
            <span className="text-xs uppercase tracking-[0.25em] font-semibold text-accent block mb-2">
              Common Inquiries
            </span>
            <h3 className="font-serif text-3xl font-normal text-foreground">
              Frequently asked questions
            </h3>
          </div>

          <div className="space-y-4">
            {faqs.map((faq, idx) => (
              <div
                key={idx}
                className="bg-card border border-border p-6 shadow-xs"
              >
                <div className="flex items-start gap-3">
                  <HelpCircle className="w-5 h-5 text-accent shrink-0 mt-0.5" />
                  <div>
                    <h4 className="font-serif text-lg font-normal text-foreground mb-2">
                      {faq.question}
                    </h4>
                    <p className="text-sm text-muted-foreground font-light leading-relaxed">
                      {faq.answer}
                    </p>
                  </div>
                </div>
              </div>
            ))}
          </div>
        </div>
      </section>
    </div>
  );
}
