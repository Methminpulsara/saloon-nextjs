import React from "react";
import Image from "next/image";
import { teamData } from "@/data/team";
import { SectionHeading } from "@/components/common/SectionHeading";
import { FadeUp, StaggerContainer, StaggerItem } from "@/components/common/MotionWrapper";

export function TeamSection() {
  return (
    <section className="py-20 sm:py-28 bg-background border-t border-border">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <FadeUp>
          <SectionHeading
            eyebrow="The Artists"
            title="Meet our masters of craft"
            subtitle="A passionate collective of stylists, colorists, and skin therapists dedicated to bringing out your purest, most luminous self."
            align="center"
          />
        </FadeUp>

        <StaggerContainer className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-8">
          {teamData.map((member) => (
            <StaggerItem
              key={member.id}
              className="group flex flex-col bg-card border border-border overflow-hidden hover:border-accent transition-colors duration-300 shadow-xs"
            >
              {/* Portrait */}
              <div className="relative aspect-[3/4] w-full overflow-hidden bg-muted">
                <Image
                  src={member.imageUrl}
                  alt={`${member.name} - ${member.role}`}
                  fill
                  sizes="(max-width: 768px) 100vw, (max-width: 1200px) 50vw, 25vw"
                  className="object-cover object-top transition-transform duration-700 group-hover:scale-105"
                />
                <div className="absolute top-3 right-3 glass-pill px-2.5 py-1 text-[10px] uppercase tracking-wider font-semibold text-foreground">
                  {member.experience}
                </div>
              </div>

              {/* Bio Details */}
              <div className="p-6 flex flex-col justify-between flex-1">
                <div>
                  <h3 className="font-serif text-xl font-normal text-foreground mb-1">
                    {member.name}
                  </h3>
                  <p className="text-xs uppercase tracking-wider text-accent font-semibold mb-3">
                    {member.role}
                  </p>
                  <p className="text-xs text-muted-foreground font-light leading-relaxed mb-4">
                    {member.bio}
                  </p>
                </div>

                {/* Specialties */}
                <div className="pt-4 border-t border-border">
                  <span className="text-[10px] uppercase tracking-wider text-muted-foreground font-semibold block mb-2">
                    Specialties
                  </span>
                  <div className="flex flex-wrap gap-1.5">
                    {member.specialties.map((spec) => (
                      <span
                        key={spec}
                        className="text-[10px] bg-muted text-foreground px-2 py-0.5 border border-border/60"
                      >
                        {spec}
                      </span>
                    ))}
                  </div>
                </div>
              </div>
            </StaggerItem>
          ))}
        </StaggerContainer>

        {/* Demo transparency note */}
        <FadeUp delay={0.2}>
          <p className="mt-12 text-center text-xs text-muted-foreground font-light">
            Note: Artisan profiles and bios represent demonstration content for the Lumière Salon Master Template.
          </p>
        </FadeUp>
      </div>
    </section>
  );
}
