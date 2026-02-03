"use client";

import ComicPop from "@/components/motion/ComicPop";
import { Badge } from "@/components/ui/badge";
import { Button } from "@/components/ui/button";
import { Issue } from "@/interface";
import { ArrowRightIcon, GithubIcon } from "lucide-react";
import type { Route } from "next";
import Image from "next/image";
import Link from "next/link";
import React from "react";

interface IssueCardProps {
  issue: Issue;
  index: number;
  variant?: "featured" | "grid";
  showAllAbilities?: boolean;
}

const IssueCard: React.FC<IssueCardProps> = ({
  issue,
  index,
  variant = "grid",
  showAllAbilities = false,
}) => {
  const abilitiesToShow = showAllAbilities
    ? issue.abilities
    : issue.abilities.slice(0, 3);

  // Comic Issue Number based on index or ID logic
  const issueNumber = `#${String(index + 1).padStart(3, "0")}`;

  if (variant === "featured") {
    const isEven = index % 2 === 0;

    return (
      <ComicPop delay={index * 0.1} className="group relative">
        {/* Comic Panel Container - Double Page Spread Style */}
        <div className="relative bg-black border-4 border-white shadow-[12px_12px_0px_0px_white] hover:shadow-[8px_8px_0px_0px_rgba(255,50,50,1)] hover:translate-x-[2px] hover:translate-y-[2px] transition-all duration-300 overflow-hidden">
          {/* Corner Tag */}
          <div
            className={`absolute top-0 z-20 bg-primary text-white font-[Bangers] text-xl px-4 py-2 border-b-4 border-black ${
              isEven ? "left-0 border-r-4" : "right-0 border-l-4"
            }`}
          >
            FEATURED ISSUE {issueNumber}
          </div>

          <div className="grid md:grid-cols-2 gap-0">
            {/* Image Panel */}
            <div
              className={`relative h-64 md:h-auto overflow-hidden border-b-4 md:border-b-0 border-white ${
                isEven ? "md:order-1 md:border-r-4" : "md:order-2 md:border-l-4"
              }`}
            >
              <div className="absolute inset-0 bg-primary/20 mix-blend-multiply z-10 opacity-0 group-hover:opacity-100 transition-opacity duration-300"></div>
              <Image
                src={issue.images.banner}
                alt={issue.title}
                fill
                className="object-cover transform group-hover:scale-110 transition-transform duration-700"
              />
              {/* Halftone Overlay */}
              <div className="absolute inset-0 comic-halftone opacity-20 pointer-events-none"></div>
            </div>

            {/* Content Panel */}
            <div
              className={`p-8 flex flex-col justify-between relative bg-card ${
                isEven ? "md:order-2" : "md:order-1"
              }`}
            >
              {/* Dialogue Box Tail */}
              <div
                className={`hidden md:block absolute top-[20%] w-6 h-6 bg-card border-b-4 border-white transform z-20 ${
                  isEven
                    ? "-left-[14px] border-l-4 rotate-45"
                    : "-right-[14px] border-r-4 -rotate-45"
                }`}
              ></div>

              <div>
                <h3 className="font-[Bangers] text-4xl md:text-5xl text-white uppercase tracking-wide mb-4 leading-none">
                  {issue.title}
                </h3>
                <p className="font-[Inter] text-gray-300 text-lg mb-6 line-clamp-3 border-l-4 border-primary pl-4">
                  {issue.description}
                </p>

                <div className="flex flex-wrap gap-2 mb-8">
                  {abilitiesToShow.map((ability, idx) => (
                    <Badge
                      key={idx}
                      variant="outline"
                      className="font-bold border-white/30 text-white/80 rounded-none uppercase text-xs px-2 py-1"
                    >
                      {ability.name}
                    </Badge>
                  ))}
                  {!showAllAbilities && issue.abilities.length > 3 && (
                    <Badge
                      variant="outline"
                      className="font-bold border-white/30 text-white/80 rounded-none uppercase text-xs px-2 py-1"
                    >
                      +{issue.abilities.length - 3} MORE
                    </Badge>
                  )}
                </div>
              </div>

              <div className="flex gap-4 mt-auto">
                <Button
                  asChild
                  className="flex-1 bg-white text-black font-[Bangers] text-xl uppercase tracking-wider border-2 border-black shadow-[4px_4px_0px_0px_rgba(255,50,50,1)] hover:scale-105 transition-transform h-12"
                >
                  <Link href={`/issue/${issue.id}` as Route}>
                    READ ISSUE
                    <ArrowRightIcon className="ml-2 w-5 h-5" />
                  </Link>
                </Button>
                {issue.links.github && (
                  <Button
                    asChild
                    size="icon"
                    variant="outline"
                    className="border-2 border-white bg-black text-white hover:bg-white hover:text-black transition-colors w-12 h-12 rounded-none"
                  >
                    <Link href={issue.links.github as Route} target="_blank">
                      <GithubIcon className="w-6 h-6" />
                    </Link>
                  </Button>
                )}
              </div>
            </div>
          </div>
        </div>
      </ComicPop>
    );
  }

  return (
    <ComicPop delay={index * 0.1} className="h-full">
      <div className="comic-panel h-full flex flex-col bg-card border-4 border-white shadow-[8px_8px_0px_0px_white] hover:shadow-[12px_12px_0px_0px_rgba(255,50,50,1)] hover:-translate-y-2 transition-all duration-300 group">
        {/* Image Section */}
        <div className="relative aspect-video border-b-4 border-white overflow-hidden">
          <div className="absolute top-2 right-2 z-20 bg-black text-white px-2 font-[Bangers] border border-white text-sm transform rotate-2">
            VOL. {new Date().getFullYear()}
          </div>

          <Image
            src={issue.images.banner}
            alt={issue.title}
            fill
            className="object-cover transition-transform duration-500 group-hover:scale-110"
          />
          <div className="absolute inset-0 bg-primary/20 opacity-0 group-hover:opacity-100 transition-opacity duration-300 mix-blend-multiply"></div>
        </div>

        {/* Content Section */}
        <div className="p-6 flex flex-col grow relative">
          {/* Decorative Dots */}
          <div className="absolute top-2 left-2 w-16 h-4 flex gap-1 opacity-50">
            <div className="w-1 h-1 bg-white rounded-full"></div>
            <div className="w-1 h-1 bg-white rounded-full"></div>
            <div className="w-1 h-1 bg-white rounded-full"></div>
          </div>

          <h3 className="font-[Bangers] text-3xl text-white uppercase tracking-wide mb-3 mt-2 line-clamp-1 group-hover:text-primary transition-colors">
            {issue.title}
          </h3>

          <p className="font-[Inter] text-gray-400 text-sm mb-6 line-clamp-2 grow">
            {issue.description}
          </p>

          <div className="space-y-4 mt-auto">
            <div className="flex flex-wrap gap-2">
              {abilitiesToShow.slice(0, 3).map((ability, idx) => (
                <span
                  key={idx}
                  className="text-[10px] font-bold uppercase font-[Inter] text-white/60 bg-white/5 px-2 py-1 border border-white/10"
                >
                  {ability.name}
                </span>
              ))}
            </div>

            <Button
              asChild
              className="w-full bg-white text-black font-[Bangers] text-lg uppercase tracking-wider border-2 border-black shadow-[4px_4px_0px_0px_rgba(255,50,50,1)] hover:translate-x-[2px] hover:translate-y-[2px] hover:shadow-[2px_2px_0px_0px_rgba(255,50,50,1)] transition-all"
            >
              <Link href={`/issue/${issue.id}` as Route}>VIEW ISSUE</Link>
            </Button>
          </div>
        </div>
      </div>
    </ComicPop>
  );
};

export default IssueCard;
