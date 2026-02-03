"use client";

import ComicPop from "@/components/motion/ComicPop";
import { Button } from "@/components/ui/button";
import {
  docker,
  mongodb,
  nestjs,
  nextjs,
  nodejs,
  postgresql,
  react,
  redis,
  shadcnui,
  tailwindcss,
  typescript,
  vercel,
} from "@/data/abilities";
import { Icon } from "@iconify/react";
import Link from "next/link";

export default function AbilityPreview() {
  // Show highlighted abilities
  const highlightedAbilities = [
    nextjs,
    react,
    typescript,
    nodejs,
    tailwindcss,
    postgresql,
    nestjs,
    mongodb,
    docker,
    redis,
    shadcnui,
    vercel,
  ];

  return (
    <section id="ability" className="py-20 relative bg-black">
      {/* Background Halftone Pattern */}
      <div className="absolute inset-0 comic-halftone opacity-20 pointer-events-none"></div>

      <div className="container mx-auto px-4 relative z-10">
        {/* Header Section with Tape Effect */}
        <ComicPop className="text-center mb-16 relative">
          <div className="inline-block bg-white text-black px-8 py-4 border-4 border-black shadow-[8px_8px_0px_0px_rgba(255,255,255,1)] transform -rotate-2">
            <h2 className="text-4xl md:text-6xl font-[Bangers] uppercase tracking-wider">
              TOP ABILITIES
            </h2>
          </div>
          <div className="absolute -top-4 -left-4 w-12 h-12 bg-primary/80 z-[-1] rounded-full"></div>
        </ComicPop>

        {/* Abilities Grid */}
        <div className="grid grid-cols-2 md:grid-cols-3 lg:grid-cols-4 gap-6 max-w-7xl mx-auto mb-12">
          {highlightedAbilities.map((ability, index) => (
            <ComicPop
              key={ability.name}
              delay={index * 0.1}
              whileHover={{ scale: 1.05, rotate: index % 2 === 0 ? 2 : -2 }}
              className="bg-card border-4 border-white p-4 shadow-[4px_4px_0px_0px_rgba(255,255,255,1)] hover:shadow-[8px_8px_0px_0px_rgba(255,255,255,1)] transition-all flex flex-col items-center gap-4 group"
            >
              <div className="w-16 h-16 flex items-center justify-center bg-primary text-white border-2 border-black rounded-full shadow-[2px_2px_0px_0px_black] group-hover:rotate-12 transition-transform duration-300">
                <Icon icon={ability.icon} className="w-8 h-8" />
              </div>
              <div className="text-center">
                <h3 className="text-xl font-[Bangers] uppercase text-white tracking-wide mb-1">
                  {ability.name}
                </h3>
                <div className="h-1 w-12 bg-primary mx-auto"></div>
              </div>
            </ComicPop>
          ))}
        </div>

        <div className="flex justify-center">
          <Button
            asChild
            className="bg-transparent text-white border-4 border-white font-[Bangers] text-xl px-10 py-6 hover:bg-white hover:text-black shadow-[4px_4px_0px_0px_rgba(255,255,255,1)] transition-all"
          >
            <Link href="/ability">VIEW FULL ARSENAL</Link>
          </Button>
        </div>
      </div>
    </section>
  );
}
