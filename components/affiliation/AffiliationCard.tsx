"use client";

import ComicPop from "@/components/motion/ComicPop";
import { Badge } from "@/components/ui/badge";
import { AffiliationItem } from "@/interface";
import { formatAffiliationDuration, isCurrentPosition } from "@/lib/utils";
import { Icon } from "@iconify/react";
import type { Route } from "next";
import Image from "next/image";
import Link from "next/link";
import React from "react";

interface AffiliationCardProps {
  item: AffiliationItem;
  index: number;
}

const AffiliationCard: React.FC<AffiliationCardProps> = ({ item, index }) => {
  const isCurrent = isCurrentPosition(item.endDate);

  return (
    <ComicPop delay={index * 0.1} className="h-full">
      <div className="comic-panel h-full flex flex-col bg-card border-4 border-white shadow-[8px_8px_0px_0px_white] hover:shadow-[12px_12px_0px_0px_rgba(255,50,50,1)] hover:-translate-y-2 transition-all duration-300 group relative">
        {/* Image Section / Logo Section */}
        <div className="relative aspect-video border-b-4 border-white overflow-hidden bg-white flex items-center justify-center p-8">
          {item.affiliation.logo ? (
            <div className="relative w-full h-full">
              <Image
                src={item.affiliation.logo}
                alt={item.affiliation.name}
                fill
                className="object-contain transition-transform duration-500 group-hover:scale-110"
              />
            </div>
          ) : (
            <div className="text-black font-[Bangers] text-4xl text-center opacity-20">
              {item.affiliation.name}
            </div>
          )}
          <div className="absolute inset-0 bg-primary/5 opacity-0 group-hover:opacity-100 transition-opacity duration-300 mix-blend-multiply"></div>

          {/* Corner Tag */}
          <div className="absolute top-0 right-0 z-20 bg-primary text-white font-[Bangers] text-sm px-3 py-1 border-l-4 border-b-4 border-black">
            {item.type.toUpperCase()}
          </div>
        </div>

        {/* Content Section */}
        <div className="p-6 flex flex-col flex-grow relative bg-black">
          {/* Active Mission Indicator */}
          {isCurrent && (
            <div className="absolute -top-4 left-6 bg-primary text-white font-[Bangers] px-4 py-1 border-2 border-white shadow-[4px_4px_0px_0px_black] animate-pulse z-30">
              ACTIVE MISSION
            </div>
          )}

          <div className="mb-4">
            <h3 className="font-[Bangers] text-2xl text-white uppercase tracking-wide line-clamp-2 group-hover:text-primary transition-colors leading-tight mb-1">
              {item.position}
            </h3>
            <div className="text-primary font-bold text-xs uppercase tracking-widest font-[Inter]">
              {item.affiliation.name}
            </div>
          </div>

          <div className="flex items-center gap-2 text-zinc-400 font-[Inter] text-xs mb-4">
            <Icon icon="material-symbols:calendar-month" className="w-4 h-4" />
            <span>
              {formatAffiliationDuration(item.startDate, item.endDate)}
            </span>
            {item.affiliation.location && (
              <>
                <span className="text-zinc-600">|</span>
                <span>{item.affiliation.location}</span>
              </>
            )}
          </div>

          {item.description && (
            <p className="font-[Inter] text-gray-400 text-sm mb-6 line-clamp-3 border-l-2 border-white/10 pl-3">
              {item.description}
            </p>
          )}

          <div className="mt-auto space-y-4">
            <div className="flex flex-wrap gap-1.5">
              {item.abilities?.slice(0, 5).map((ability, idx) => (
                <Badge
                  key={idx}
                  variant="outline"
                  className="text-[9px] uppercase font-bold border-white/20 text-white/60 rounded-none px-1.5 py-0"
                >
                  {ability.name}
                </Badge>
              ))}
              {item.abilities && item.abilities.length > 5 && (
                <span className="text-[10px] text-zinc-500 font-bold">
                  +{item.abilities.length - 5}
                </span>
              )}
            </div>

            <div className="pt-2">
              <Link
                href={`/affiliation/${item.id}` as Route}
                className="block w-full"
              >
                <button className="w-full bg-white text-black font-[Bangers] py-2 px-4 border-2 border-black uppercase text-lg tracking-wider hover:bg-primary hover:text-white hover:shadow-[4px_4px_0px_0px_white] transition-all transform hover:-translate-y-1 cursor-pointer">
                  MISSION BRIEF
                </button>
              </Link>
            </div>
          </div>
        </div>
      </div>
    </ComicPop>
  );
};

export default AffiliationCard;
