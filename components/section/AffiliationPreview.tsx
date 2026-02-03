"use client";

import ComicPop from "@/components/motion/ComicPop";
import { Badge } from "@/components/ui/badge";
import { Button } from "@/components/ui/button";
import { jasmineTechnologySolutionAffiliation } from "@/data/affiliations/jasmine-technology-solution";
import { ruamsukPlatingAdvisor } from "@/data/affiliations/ruamsuk-plating";
import { AffiliationEntityType } from "@/enum";
import type { AffiliationItem } from "@/interface";
import { formatAffiliationDuration, isCurrentPosition } from "@/lib/utils";
import { Icon } from "@iconify/react";
import type { Route } from "next";
import Image from "next/image";
import Link from "next/link";

export default function AffiliationPreview() {
  const displayedAffiliations: AffiliationItem[] = [
    ruamsukPlatingAdvisor,
    jasmineTechnologySolutionAffiliation,
  ];

  return (
    <section
      id="affiliation"
      className="py-20 relative bg-black overflow-hidden"
    >
      {/* Background elements */}
      <div className="absolute inset-0 bg-[radial-gradient(circle_at_top_right,theme(colors.primary.DEFAULT)_0%,transparent_40%)] opacity-20 pointer-events-none"></div>

      <div className="container max-w-7xl mx-auto px-4 relative z-10">
        {/* Header */}
        <ComicPop className="text-center mb-20">
          <div className="inline-block relative">
            <div className="bg-white text-black px-10 py-4 border-4 border-black shadow-[8px_8px_0px_0px_white] transform -rotate-1">
              <h2 className="text-4xl md:text-6xl font-[Bangers] uppercase tracking-wider">
                CURRENT MISSION
              </h2>
            </div>
          </div>
        </ComicPop>

        {/* Affiliations */}
        <div className="grid grid-cols-1 lg:grid-cols-2 gap-12 max-w-7xl mx-auto mb-16">
          {displayedAffiliations.map((affiliation, index) => (
            <ComicPop
              key={affiliation.id}
              delay={index * 0.2}
              className="relative flex flex-col"
            >
              {/* Company/Affiliation Info Panel */}
              <div className="mb-6 self-start z-20">
                <div className="inline-block bg-white p-4 border-4 border-black shadow-[8px_8px_0px_0px_rgba(255,50,50,1)] hover:scale-105 transition-transform">
                  <div className="flex items-center gap-4">
                    {affiliation.affiliation.logo && (
                      <Image
                        src={affiliation.affiliation.logo}
                        alt={`${affiliation.affiliation.name} logo`}
                        width={60}
                        height={60}
                        className="rounded-none border-2 border-black"
                      />
                    )}
                    <div>
                      <h3 className="font-[Bangers] text-2xl uppercase tracking-wide text-black">
                        {affiliation.affiliation.name}
                      </h3>
                      {affiliation.affiliation.type ===
                        AffiliationEntityType.Company && (
                        <Badge
                          variant="outline"
                          className="text-xs font-[Inter] border-black text-black gap-1 rounded-none px-2"
                        >
                          <Icon icon="material-symbols:location-on" />
                          {affiliation.affiliation.location}
                        </Badge>
                      )}
                    </div>
                  </div>
                </div>
              </div>

              {/* Role Details Panel */}
              <div className="relative flex-grow">
                <div className="bg-card border-4 border-white p-6 shadow-[8px_8px_0px_0px_white] relative h-full">
                  <div className="absolute -top-3 -right-3 w-6 h-6 bg-white border-2 border-black z-20 transform rotate-45"></div>
                  <div className="absolute -bottom-3 -left-3 w-6 h-6 bg-primary border-2 border-black z-20 transform rotate-45"></div>

                  <div className="flex flex-wrap items-center justify-between gap-2 mb-4 border-b-2 border-white/20 pb-4">
                    <h4 className="font-[Bangers] text-xl md:text-2xl text-white uppercase tracking-wide">
                      {affiliation.position}
                    </h4>

                    {isCurrentPosition(affiliation.endDate) && (
                      <Badge className="bg-primary text-white font-[Bangers] tracking-widest border-2 border-white rounded-none animate-pulse">
                        ACTIVE MISSION
                      </Badge>
                    )}
                  </div>

                  <div className="flex items-center gap-2 text-sm text-gray-300 font-[Inter] mb-4">
                    <Icon
                      icon="material-symbols:calendar-month"
                      className="w-4 h-4 text-primary"
                    />
                    <span className="font-bold">
                      {formatAffiliationDuration(
                        affiliation.startDate,
                        affiliation.endDate,
                      )}
                    </span>
                    <span className="text-zinc-500">|</span>
                    <span className="uppercase text-xs font-bold tracking-wider">
                      {affiliation.type}
                    </span>
                  </div>

                  <p className="text-gray-400 font-[Inter] text-sm mb-6 line-clamp-2">
                    {affiliation.description}
                  </p>

                  {/* Ability Stack */}
                  <div className="flex flex-wrap gap-2 mb-6">
                    {affiliation.abilities.map((ability, abilityIndex) => (
                      <Badge
                        key={abilityIndex}
                        variant="outline"
                        className="text-[10px] uppercase font-bold border-white/40 text-white/80 rounded-none hover:bg-white hover:text-black transition-colors"
                      >
                        {ability.name}
                      </Badge>
                    ))}
                  </div>

                  <div className="mt-auto">
                    <Button
                      asChild
                      size="sm"
                      className="comic-button-sm bg-primary text-white border-2 border-white font-[Bangers] tracking-wider hover:bg-white hover:text-black transition-all w-full md:w-auto"
                    >
                      <Link href={`/affiliation/${affiliation.id}` as Route}>
                        MISSION BRIEF
                      </Link>
                    </Button>
                  </div>
                </div>
              </div>
            </ComicPop>
          ))}
        </div>

        {/* Footer Button for Preview */}
        <div className="flex justify-center mt-12">
          <Button
            asChild
            className="bg-transparent text-white border-4 border-white font-[Bangers] text-xl px-10 py-6 hover:bg-white hover:text-black shadow-[4px_4px_0px_0px_rgba(255,255,255,1)] transition-all"
          >
            <Link href="/affiliation">VIEW CAREER HISTORY</Link>
          </Button>
        </div>
      </div>
    </section>
  );
}
