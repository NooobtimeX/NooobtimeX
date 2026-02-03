"use client";

import AffiliationCard from "@/components/affiliation/AffiliationCard";
import ComicPop from "@/components/motion/ComicPop";
import { Button } from "@/components/ui/button";
import { affiliationData } from "@/data/affiliationData";
import { formatAffiliationDuration } from "@/lib/utils";
import { Icon } from "@iconify/react";
import { ArrowLeftIcon, CalendarIcon, MapPinIcon } from "lucide-react";
import type { Route } from "next";
import Image from "next/image";
import Link from "next/link";
import { notFound } from "next/navigation";
import React from "react";

interface AffiliationDetailContentProps {
  id: string;
}

const AffiliationDetailContent: React.FC<AffiliationDetailContentProps> = ({
  id,
}) => {
  const affiliationItem = affiliationData.find((a) => a.id === id);

  if (!affiliationItem) {
    notFound();
  }

  const {
    affiliation,
    position,
    description,
    abilities,
    startDate,
    endDate,
    type,
  } = affiliationItem;

  return (
    <div className="min-h-screen w-full relative bg-black overflow-x-hidden pt-24 pb-20">
      {/* Background */}
      <div className="fixed inset-0 comic-halftone opacity-20 pointer-events-none"></div>

      {/* Navigation */}
      <section className="relative z-20 mb-8">
        <div className="container mx-auto px-4">
          <ComicPop
            initial={{ opacity: 0, x: -20 }}
            animate={{ opacity: 1, x: 0 }}
          >
            <Button
              asChild
              className="bg-white text-black hover:bg-zinc-200 border-2 border-black font-[Bangers] uppercase text-xl h-12 px-6 rounded-none shadow-[4px_4px_0px_0px_white] hover:translate-x-[2px] hover:translate-y-[2px] hover:shadow-[2px_2px_0px_0px_white] transition-all"
            >
              <Link href="/affiliation" className="flex items-center gap-2">
                <ArrowLeftIcon className="w-5 h-5" />
                BACK TO LOGS
              </Link>
            </Button>
          </ComicPop>
        </div>
      </section>

      {/* Hero Section */}
      <section className="relative mb-16">
        <div className="container mx-auto px-4 relative z-10">
          <div className="grid lg:grid-cols-2 gap-12 items-start">
            {/* Left Column - Entity Logo/Panel */}
            <ComicPop
              initial={{ opacity: 0, scale: 0.9, rotate: -2 }}
              animate={{ opacity: 1, scale: 1, rotate: -1 }}
              className="relative group perspective-1000"
            >
              <div className="relative border-4 border-white bg-white shadow-[12px_12px_0px_0px_rgba(255,255,255,1)] hover:shadow-[8px_8px_0px_0px_rgba(255,50,50,1)] hover:rotate-0 transition-all duration-300 aspect-video flex items-center justify-center p-12">
                {/* Badge */}
                <div className="absolute top-0 right-0 z-20 bg-primary text-white font-[Bangers] text-xl px-4 py-2 border-l-4 border-b-4 border-black">
                  {type.toUpperCase()}
                </div>

                <div className="relative w-full h-full">
                  {affiliation.logo ? (
                    <Image
                      src={affiliation.logo}
                      alt={affiliation.name}
                      fill
                      className="object-contain"
                    />
                  ) : (
                    <div className="w-full h-full flex items-center justify-center text-black font-[Bangers] text-5xl text-center opacity-30">
                      {affiliation.name}
                    </div>
                  )}
                </div>
              </div>
            </ComicPop>

            {/* Right Column - Affiliation Info */}
            <ComicPop
              initial={{ opacity: 0, x: 30 }}
              animate={{ opacity: 1, x: 0 }}
              delay={0.2}
              className="space-y-8"
            >
              <div className="space-y-6 bg-card p-8 border-4 border-white shadow-[8px_8px_0px_0px_white] relative">
                <div className="absolute -top-3 -left-3 w-6 h-6 bg-primary border-2 border-black z-20 transform rotate-45"></div>

                <div className="space-y-2">
                  <h2 className="text-primary font-[Bangers] text-2xl tracking-widest uppercase">
                    {affiliation.name}
                  </h2>
                  <h1 className="text-5xl md:text-6xl font-[Bangers] uppercase leading-[0.9] text-white tracking-wide break-words">
                    {position}
                  </h1>
                </div>

                <div className="w-full h-1 bg-white/20"></div>

                <div className="flex flex-wrap gap-6 text-zinc-400 font-[Inter]">
                  <div className="flex items-center gap-2">
                    <CalendarIcon className="w-5 h-5 text-primary" />
                    <span className="text-lg">
                      {formatAffiliationDuration(startDate, endDate)}
                    </span>
                  </div>
                  {affiliation.location && (
                    <div className="flex items-center gap-2">
                      <MapPinIcon className="w-5 h-5 text-primary" />
                      <span className="text-lg">{affiliation.location}</span>
                    </div>
                  )}
                </div>

                <p className="text-xl text-muted-foreground leading-relaxed font-[Inter]">
                  {description}
                </p>

                {affiliation.url && (
                  <div className="pt-4">
                    <Button
                      asChild
                      size="lg"
                      className="comic-button bg-primary text-white border-2 border-white px-8 h-14 text-xl shadow-[4px_4px_0px_0px_white] hover:translate-x-[2px] hover:translate-y-[2px] hover:shadow-[2px_2px_0px_0px_white]"
                    >
                      <Link
                        href={affiliation.url as Route}
                        target="_blank"
                        rel="noopener noreferrer"
                        className="flex items-center gap-2"
                      >
                        <Icon
                          icon="material-symbols:link"
                          className="w-6 h-6"
                        />
                        VISIT WEBSITE
                      </Link>
                    </Button>
                  </div>
                )}
              </div>
            </ComicPop>
          </div>
        </div>
      </section>

      {/* Abilities Section */}
      <section className="mb-20 relative">
        <div className="container mx-auto px-4 relative z-10">
          <ComicPop
            initial={{ opacity: 0, y: 30 }}
            animate={{ opacity: 1, y: 0 }}
            delay={0.3}
            className="bg-card border-4 border-white p-8 shadow-[8px_8px_0px_0px_white]"
          >
            <h2 className="font-[Bangers] text-4xl text-white uppercase tracking-wide mb-8 border-b-4 border-primary pb-2 inline-block">
              MISSION ABILITIES
            </h2>

            <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 xl:grid-cols-4 gap-4">
              {abilities.map((ability, index) => (
                <ComicPop
                  key={index}
                  initial={{ opacity: 0, x: 20 }}
                  animate={{ opacity: 1, x: 0 }}
                  delay={0.4 + index * 0.05}
                  className="flex items-center gap-4 p-4 border-2 border-white/10 hover:border-primary hover:bg-primary/10 transition-colors bg-black group"
                >
                  <div className="p-2 border-2 border-white/20 group-hover:border-primary transition-colors">
                    <Icon
                      icon={ability.icon}
                      className="w-8 h-8 text-primary"
                    />
                  </div>
                  <div>
                    <h4 className="font-[Bangers] text-xl text-white tracking-wide uppercase">
                      {ability.name}
                    </h4>
                    {ability.category && (
                      <p className="text-xs text-muted-foreground font-[Inter] uppercase font-bold tracking-wider">
                        {ability.category}
                      </p>
                    )}
                  </div>
                </ComicPop>
              ))}
            </div>
          </ComicPop>
        </div>
      </section>

      {/* Related Affiliations */}
      <section className="pb-20 relative">
        <div className="container mx-auto px-4 relative z-10">
          <div className="border-t-4 border-white my-16 opacity-50"></div>

          <ComicPop className="text-center mb-12">
            <div className="inline-block bg-white text-black px-8 py-3 border-4 border-black shadow-[8px_8px_0px_0px_white] transform rotate-1 mb-8">
              <h2 className="text-3xl md:text-5xl font-[Bangers] uppercase tracking-wider">
                MEANWHILE...
              </h2>
            </div>
            <p className="text-muted-foreground text-xl font-[Bangers] uppercase tracking-wide">
              Discover other branches of my journey
            </p>
          </ComicPop>

          <div className="grid md:grid-cols-2 lg:grid-cols-3 gap-8">
            {affiliationData
              .filter((a) => a.id !== affiliationItem.id)
              .slice(0, 3)
              .map((relatedItem, index) => (
                <AffiliationCard
                  key={relatedItem.id}
                  item={relatedItem}
                  index={index}
                />
              ))}
          </div>
        </div>
      </section>
    </div>
  );
};

export default AffiliationDetailContent;
