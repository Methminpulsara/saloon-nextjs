import React from "react";
import { Sparkles, MessageSquareHeart, ShieldCheck, Flower2 } from "lucide-react";
import { SectionHeading } from "@/components/common/SectionHeading";
import { FadeUp, StaggerContainer, StaggerItem } from "@/components/common/MotionWrapper";

export function WhyChooseUs() {
  const benefits = [
    {
      icon: Sparkles,
      title: "Experienced Master Stylists",
      description:
        "Every stylist and aesthetician brings years of advanced editorial discipline and continuous academy education in Paris and London.",
    },
    {
      icon: MessageSquareHeart,
      title: "Personalized Consultations",
      description:
        "We never rush. Your visit begins with a relaxed conversation assessing your facial harmony, lifestyle, hair texture, and styling habits.",
    },
    {
      icon: ShieldCheck,
      title: "Clean & Premium Formulations",
      description:
        "We curate low-tox, ammonia-free color and bio-active botanical hair therapies that preserve long-term cellular health and mirror shine.",
    },
    {
      icon: Flower2,
      title: "Relaxing Private Environment",
      description:
        "An intimate haven designed with natural stone, acoustic calm, organic herbal teas, and private wash suites for total decompression.",
    },
  ];

  return (
    <section className="py-20 sm:py-28 bg-muted/30 border-t border-border">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <FadeUp>
          <SectionHeading
            eyebrow="The Lumière Standard"
            title="Care without compromise"
            subtitle="We believe modern salon visits should feel restorative, personalized, and meticulously executed."
            align="center"
          />
        </FadeUp>

        <StaggerContainer className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-8">
          {benefits.map((benefit, index) => {
            const Icon = benefit.icon;
            return (
              <StaggerItem
                key={benefit.title}
                className="bg-card border border-border p-8 flex flex-col justify-between hover:border-accent transition-colors duration-300 shadow-xs"
              >
                <div>
                  <div className="w-12 h-12 bg-accent/10 flex items-center justify-center text-accent mb-6 border border-accent/20">
                    <Icon className="w-6 h-6" />
                  </div>
                  <span className="text-[10px] tracking-[0.2em] uppercase font-semibold text-muted-foreground block mb-1">
                    Pillar 0{index + 1}
                  </span>
                  <h3 className="font-serif text-xl font-normal text-foreground mb-3">
                    {benefit.title}
                  </h3>
                  <p className="text-sm text-muted-foreground font-light leading-relaxed">
                    {benefit.description}
                  </p>
                </div>
              </StaggerItem>
            );
          })}
        </StaggerContainer>
      </div>
    </section>
  );
}
