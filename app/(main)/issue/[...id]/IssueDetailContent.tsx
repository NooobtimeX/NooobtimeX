"use client";

import ImageGallery from "@/components/issue/ImageGallery";
import IssueCard from "@/components/issue/IssueCard";
import ComicPop from "@/components/motion/ComicPop";
import { Button } from "@/components/ui/button";
import { issuesData } from "@/data/issues";
import { Icon } from "@iconify/react";
import { ArrowLeftIcon, ExternalLinkIcon, GithubIcon } from "lucide-react";
import type { Route } from "next";
import Image from "next/image";
import Link from "next/link";
import { notFound } from "next/navigation";
import React from "react";

interface IssueDetailContentProps {
  id: string;
}

const IssueDetailContent: React.FC<IssueDetailContentProps> = ({ id }) => {
  const issue = issuesData.find((p) => p.id === id);

  if (!issue) {
    notFound();
  }

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
              <Link href="/issue" className="flex items-center gap-2">
                <ArrowLeftIcon className="w-5 h-5" />
                BACK TO ARCHIVE
              </Link>
            </Button>
          </ComicPop>
        </div>
      </section>

      {/* Hero Section */}
      <section className="relative mb-16">
        <div className="container mx-auto px-4 relative z-10">
          <div className="grid lg:grid-cols-2 gap-12 items-start">
            {/* Left Column - Cover Art */}
            <ComicPop
              initial={{ opacity: 0, scale: 0.9, rotate: -2 }}
              animate={{ opacity: 1, scale: 1, rotate: -1 }}
              className="relative group perspective-1000"
            >
              <div className="relative border-4 border-white bg-black shadow-[12px_12px_0px_0px_rgba(255,255,255,1)] hover:shadow-[8px_8px_0px_0px_rgba(255,50,50,1)] hover:rotate-0 transition-all duration-300">
                {/* Badge */}
                <div className="absolute top-0 right-0 z-20 bg-primary text-white font-[Bangers] text-xl px-4 py-2 border-l-4 border-b-4 border-black">
                  ISSUE #{id?.toUpperCase().slice(0, 3)}
                </div>

                <div className="relative aspect-[16/9] overflow-hidden">
                  <Image
                    src={issue.images.banner}
                    alt={issue.title}
                    fill
                    className="object-cover"
                  />
                </div>
              </div>
            </ComicPop>

            {/* Right Column - Issue Info */}
            <ComicPop
              initial={{ opacity: 0, x: 30 }}
              animate={{ opacity: 1, x: 0 }}
              delay={0.2}
              className="space-y-8"
            >
              <div className="space-y-6 bg-card p-8 border-4 border-white shadow-[8px_8px_0px_0px_white] relative">
                <div className="absolute -top-3 -left-3 w-6 h-6 bg-primary border-2 border-black z-20 transform rotate-45"></div>

                <h1 className="text-5xl md:text-6xl lg:text-7xl font-[Bangers] uppercase leading-[0.9] text-white tracking-wide break-words">
                  {issue.title}
                </h1>

                <div className="w-full h-1 bg-white/20"></div>

                <p className="text-xl text-muted-foreground leading-relaxed font-[Inter]">
                  {issue.description}
                </p>

                {/* Action Buttons */}
                <div className="flex flex-col sm:flex-row gap-4 pt-4">
                  {issue.links.live && (
                    <Button
                      asChild
                      size="lg"
                      className="comic-button bg-primary text-white border-2 border-white px-8 h-14 text-xl shadow-[4px_4px_0px_0px_white] hover:translate-x-[2px] hover:translate-y-[2px] hover:shadow-[2px_2px_0px_0px_white]"
                    >
                      <Link
                        href={issue.links.live as Route}
                        target="_blank"
                        rel="noopener noreferrer"
                        className="flex items-center gap-2"
                      >
                        <ExternalLinkIcon className="w-5 h-5" />
                        LIVE DEMO
                      </Link>
                    </Button>
                  )}
                  {issue.links.github && (
                    <Button
                      variant="outline"
                      asChild
                      size="lg"
                      className="comic-button bg-black text-white border-2 border-white px-8 h-14 text-xl hover:bg-zinc-900 shadow-[4px_4px_0px_0px_white] hover:translate-x-[2px] hover:translate-y-[2px] hover:shadow-[2px_2px_0px_0px_white]"
                    >
                      <Link
                        href={issue.links.github as Route}
                        target="_blank"
                        rel="noopener noreferrer"
                        className="flex items-center gap-2"
                      >
                        <GithubIcon className="w-5 h-5" />
                        SOURCE CODE
                      </Link>
                    </Button>
                  )}
                </div>
              </div>
            </ComicPop>
          </div>
        </div>
      </section>

      {/* Detailed Information */}
      <section className="mb-20 relative">
        <div className="container mx-auto px-4 relative z-10">
          <div className="grid lg:grid-cols-3 gap-8 items-start">
            {/* Issue Gallery - Left Panel */}
            <ComicPop
              initial={{ opacity: 0, y: 30 }}
              animate={{ opacity: 1, y: 0 }}
              delay={0.3}
              className="lg:col-span-2"
            >
              <div className="bg-card border-4 border-white p-2 shadow-[8px_8px_0px_0px_white]">
                <div className="bg-black p-4 mb-4 border-b-2 border-white/20">
                  <h2 className="font-[Bangers] text-3xl text-white uppercase tracking-wide">
                    VISUAL EVIDENCE
                  </h2>
                </div>
                <div className="space-y-6">
                  {issue.images.photos && issue.images.photos.length > 0 && (
                    <div className="space-y-4">
                      <ImageGallery
                        images={issue.images.photos}
                        title={issue.title}
                      />
                    </div>
                  )}
                </div>
              </div>
            </ComicPop>

            {/* Abilities - Right Panel */}
            <ComicPop
              initial={{ opacity: 0, y: 30 }}
              animate={{ opacity: 1, y: 0 }}
              delay={0.4}
              className="space-y-6"
            >
              <div className="bg-card border-4 border-white p-6 shadow-[8px_8px_0px_0px_white] transform rotate-1 sticky top-24">
                <h2 className="font-[Bangers] text-3xl text-white uppercase tracking-wide mb-6 border-b-4 border-primary pb-2">
                  ARSENAL
                </h2>
                <div className="space-y-4">
                  {issue.abilities.map((ability, index) => (
                    <ComicPop
                      key={index}
                      initial={{ opacity: 0, x: 20 }}
                      animate={{ opacity: 1, x: 0 }}
                      delay={0.5 + index * 0.1}
                      className="flex items-center gap-4 p-3 border-2 border-white/10 hover:border-primary hover:bg-primary/10 transition-colors bg-black"
                    >
                      <Icon
                        icon={ability.icon}
                        className="w-8 h-8 text-primary"
                      />
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
              </div>
            </ComicPop>
          </div>
        </div>
      </section>

      {/* Related Issues */}
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
              Check out these other issues
            </p>
          </ComicPop>

          <div className="grid md:grid-cols-2 lg:grid-cols-3 gap-8">
            {issuesData
              .filter((p) => p.id !== issue.id)
              .slice(0, 3)
              .map((relatedIssue, index) => (
                <IssueCard
                  key={relatedIssue.id}
                  issue={relatedIssue}
                  index={index}
                  variant="grid"
                  showAllAbilities={false}
                />
              ))}
          </div>
        </div>
      </section>
    </div>
  );
};

export default IssueDetailContent;
