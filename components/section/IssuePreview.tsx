"use client";

import IssueCard from "@/components/issue/IssueCard";
import ComicPop from "@/components/motion/ComicPop";
import { issuesData } from "@/data/issues";

export default function IssuePreview() {
  return (
    <section id="issue" className="py-20 relative bg-black">
      {/* Background Halftone Pattern */}
      <div className="absolute inset-0 comic-halftone opacity-30 pointer-events-none"></div>
      <div className="absolute inset-0 comic-web-pattern opacity-10 pointer-events-none"></div>

      <div className="container max-w-7xl mx-auto px-4 relative z-10">
        {/* Header */}
        <ComicPop className="text-center mb-20 relative">
          <div className="inline-block relative">
            {/* Background splash */}
            <div className="absolute inset-0 bg-primary transform rotate-2 blur-sm opacity-50"></div>

            {/* Spider Decoration */}
            <div className="absolute -top-12 -right-12 text-6xl transform rotate-12 drop-shadow-[0_0_10px_rgba(255,50,50,0.8)] z-20">
              🕷️
            </div>

            <div className="relative bg-white text-black px-10 py-4 border-4 border-black shadow-[8px_8px_0px_0px_white] transform rotate-1">
              <h2 className="text-4xl md:text-6xl font-[Bangers] uppercase tracking-wider">
                FEATURED ISSUES
              </h2>
            </div>
          </div>
          <p className="mt-8 text-muted-foreground text-xl font-[Bangers] tracking-wide max-w-2xl mx-auto uppercase">
            A showcase of my recent work and creative solutions
          </p>
        </ComicPop>

        <div className="space-y-24 mb-12">
          {issuesData.map((issue, index) => (
            <IssueCard
              key={issue.id}
              issue={issue}
              index={index}
              variant="featured"
              showAllAbilities={false}
            />
          ))}
        </div>
      </div>
    </section>
  );
}
