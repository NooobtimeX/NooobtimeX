"use client";

import AffiliationCard from "@/components/affiliation/AffiliationCard";
import ComicPop from "@/components/motion/ComicPop";
import { affiliationData } from "@/data/affiliationData";
import { AffiliationEntityType } from "@/enum";
import React from "react";

const AffiliationContent: React.FC = () => {
  // Filter for Company type affiliations
  const companiesData = affiliationData.filter(
    (item) => item.affiliation.type === AffiliationEntityType.Company,
  );

  return (
    <div className="min-h-screen w-full relative bg-black pt-24 pb-20 overflow-x-hidden">
      {/* Background elements */}
      <div className="fixed inset-0 bg-[radial-gradient(circle_at_top_right,theme(colors.primary.DEFAULT)_0%,transparent_40%)] opacity-20 pointer-events-none"></div>
      <div className="fixed inset-0 comic-halftone opacity-10 pointer-events-none"></div>

      <div className="container max-w-7xl mx-auto px-4 relative z-10">
        {/* Header */}
        <ComicPop
          initial={{ opacity: 0, y: -20 }}
          animate={{ opacity: 1, y: 0 }}
          className="text-center mb-24"
        >
          <div className="inline-block relative group">
            <div className="bg-white text-black px-12 py-6 border-4 border-black shadow-[8px_8px_0px_0px_white] transform -rotate-1 group-hover:rotate-0 transition-transform">
              <h1 className="text-5xl md:text-7xl font-[Bangers] uppercase tracking-wider">
                AFFILIATIONS
              </h1>
            </div>
          </div>
          <p className="mt-8 text-xl text-gray-400 font-[Bangers] uppercase tracking-wide">
            Career & Companies
          </p>
        </ComicPop>

        {/* Grid */}
        <section className="pb-20 relative">
          <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8 md:gap-10">
            {companiesData.map((item, index) => (
              <AffiliationCard key={item.id} item={item} index={index} />
            ))}
          </div>
        </section>
      </div>
    </div>
  );
};

export default AffiliationContent;
