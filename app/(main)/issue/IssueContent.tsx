"use client";

import IssueCard from "@/components/issue/IssueCard";
import ComicPop from "@/components/motion/ComicPop";
import { issuesData } from "@/data/issues";
import React from "react";

const IssueContent: React.FC = () => {
  return (
    <div className="min-h-screen w-full relative pt-24 bg-black overflow-x-hidden">
      {/* Background */}
      <div className="fixed inset-0 comic-halftone opacity-20 pointer-events-none"></div>

      {/* Header */}
      <div className="container max-w-7xl mx-auto px-4 relative z-10 mb-16 text-center">
        <ComicPop
          initial={{ y: -50, opacity: 0 }}
          animate={{ y: 0, opacity: 1 }}
          className="inline-block relative"
        >
          <div className="bg-white text-black px-12 py-6 border-4 border-black shadow-[8px_8px_0px_0px_white] transform -rotate-1">
            <h1 className="text-5xl md:text-7xl font-[Bangers] uppercase tracking-wider">
              ISSUE ARCHIVE
            </h1>
          </div>
        </ComicPop>
        <ComicPop
          initial={{ opacity: 0 }}
          animate={{ opacity: 1 }}
          delay={0.2}
          className="mt-6 text-xl text-gray-400 font-[Bangers] uppercase tracking-wide"
        >
          Select an issue to read details
        </ComicPop>
      </div>

      {/* Issues Grid */}
      <section className="pb-20 relative">
        <div className="container mx-auto px-4 relative z-10">
          <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8 md:gap-12">
            {issuesData.map((issue, index) => (
              <IssueCard
                key={issue.id}
                issue={issue}
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

export default IssueContent;
