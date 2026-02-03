"use client";

import ComicPop from "@/components/motion/ComicPop";
import { AbilityCard } from "@/components/ui/ability-card";
import { ComicPanel } from "@/components/ui/comic-panel";
import { abilitiesData } from "@/data/abilitiesData";
import { cn } from "@/lib/utils";
import { Icon } from "@iconify/react";
import React from "react";

const AbilityContent: React.FC = () => {
  return (
    <div className="min-h-screen w-full relative bg-black pt-28 pb-24 overflow-x-hidden">
      {/* Background Elements */}
      <div className="fixed inset-0 comic-halftone opacity-15 pointer-events-none z-0"></div>
      <div className="fixed top-0 left-0 w-full h-full bg-[radial-gradient(circle_at_center,_var(--tw-gradient-stops))] from-zinc-900/50 via-black to-black pointer-events-none z-0"></div>

      <div className="container max-w-7xl mx-auto px-4 relative z-10">
        {/* Hero Section */}
        <ComicPop
          initial={{ opacity: 0, scale: 0.8, y: -50 }}
          animate={{ opacity: 1, scale: 1, y: 0 }}
          className="text-center mb-24 relative"
        >
          <div className="relative inline-block z-10">
            <div className="absolute inset-0 bg-primary skew-x-12 translate-x-2 translate-y-2"></div>
            <div className="relative bg-white border-4 border-black px-10 py-6 skew-x-12">
              <h1 className="text-6xl md:text-8xl font-[Bangers] uppercase tracking-wider text-black transform -skew-x-12">
                ABILITIES
              </h1>
            </div>
          </div>

          <p className="mt-8 text-2xl text-white font-[Bangers] uppercase tracking-wide max-w-3xl mx-auto text-shadow-sm">
            &quot;My comprehensive arsenal of technical skills and
            superpowers&quot;
          </p>
        </ComicPop>

        {/* Staggered Grid Layout */}
        <div className="flex flex-col gap-24">
          {abilitiesData.map((abilityGroup, groupIndex) => (
            <div
              key={abilityGroup.category}
              className={cn(
                "flex flex-col md:flex-row gap-8 md:gap-12 items-start",
                groupIndex % 2 !== 0 ? "md:flex-row-reverse" : "",
              )}
            >
              {/* Category Info Panel */}
              <ComicPop
                initial={{ opacity: 0, x: groupIndex % 2 === 0 ? -100 : 100 }}
                whileInView={{ opacity: 1, x: 0 }}
                viewport={{ once: true, margin: "-100px" }}
                className="w-full md:w-1/3 flex-shrink-0 relative z-10"
              >
                <ComicPanel
                  rotate={groupIndex % 2 === 0 ? -2 : 2}
                  className="bg-zinc-900 border-white p-8"
                >
                  {/* Floating Badge */}
                  <div className="absolute -top-6 left-1/2 -translate-x-1/2 w-16 h-16 bg-primary border-4 border-black flex items-center justify-center rotate-45 shadow-[4px_4px_0px_0px_rgba(0,0,0,1)]">
                    <Icon
                      icon={abilityGroup.icon}
                      className="w-8 h-8 text-white -rotate-45"
                    />
                  </div>

                  <div className="mt-8 text-center space-y-4">
                    <h2 className="text-4xl md:text-5xl font-[Bangers] text-white uppercase tracking-wide leading-none">
                      {abilityGroup.category}
                    </h2>

                    {/* Separation Line */}
                    <div className="w-full h-1 bg-gradient-to-r from-transparent via-primary to-transparent my-4"></div>

                    <p className="font-sans text-gray-300 leading-relaxed text-sm md:text-base">
                      {abilityGroup.description}
                    </p>
                  </div>
                </ComicPanel>
              </ComicPop>

              {/* Abilities Grid - "Masonry" feel */}
              <div className="w-full md:w-2/3">
                <div className="grid grid-cols-2 sm:grid-cols-3 gap-4 md:gap-6">
                  {abilityGroup.abilities.map((ability, idx) => (
                    <AbilityCard
                      key={ability.name}
                      index={idx}
                      name={ability.name}
                      icon={ability.icon}
                    />
                  ))}
                </div>
              </div>
            </div>
          ))}
        </div>

        {/* Final CTA / Footer */}
        <div className="mt-32 mb-12 text-center">
          <ComicPop
            initial={{ scale: 0.9, opacity: 0 }}
            whileInView={{ scale: 1, opacity: 1 }}
            className="inline-block"
          >
            <div className="bg-primary text-white border-4 border-white px-8 py-3 rotate-1 hover:-rotate-1 transition-transform">
              <span className="font-[Bangers] text-2xl tracking-widest">
                LVL {new Date().getFullYear() - 2020} || READY FOR ACTION
              </span>
            </div>
          </ComicPop>
        </div>
      </div>
    </div>
  );
};

export default AbilityContent;
