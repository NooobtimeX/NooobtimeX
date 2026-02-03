"use client";

import ComicPop from "@/components/motion/ComicPop";
import { Button } from "@/components/ui/button";
import Link from "next/link";

export default function NotFound() {
  return (
    <div className="h-screen bg-black flex flex-col items-center justify-center relative overflow-hidden">
      {/* Background Halftone */}
      <div className="absolute inset-0 comic-halftone opacity-20 pointer-events-none"></div>

      {/* Comic Burst Background */}
      <div className="absolute inset-0 comic-burst opacity-10 pointer-events-none"></div>

      <div className="z-10 text-center px-4">
        <ComicPop delay={0.2}>
          <div className="relative inline-block mb-8">
            <h1 className="text-[10rem] md:text-[15rem] leading-none font-[Bangers] text-primary relative z-10 drop-shadow-[10px_10px_0px_rgba(255,255,255,1)]">
              404
            </h1>
            {/* Background Text Stroke Effect */}
            <h1 className="text-[10rem] md:text-[15rem] leading-none font-[Bangers] text-transparent absolute inset-0 z-0 stroke-white stroke-[20px] comic-text-stroke">
              404
            </h1>
          </div>
        </ComicPop>

        <ComicPop delay={0.4}>
          <div className="bg-white text-black p-6 border-4 border-black shadow-[8px_8px_0px_0px_rgba(255,50,50,1)] max-w-2xl mx-auto transform -rotate-1 mb-10 relative">
            <h2 className="text-4xl md:text-5xl font-[Bangers] uppercase mb-2">
              ISSUE NOT FOUND!
            </h2>
            <p className="font-[Inter] text-lg md:text-xl text-gray-800">
              It seems this page has been stolen by a supervillain... or maybe
              it never existed!
            </p>

            {/* Speech Bubble Arrow */}
            <div className="absolute -bottom-6 left-1/2 -translate-x-1/2 w-8 h-8 bg-white border-b-4 border-r-4 border-black transform rotate-45"></div>
          </div>
        </ComicPop>

        <ComicPop delay={0.6}>
          <Button
            asChild
            className="bg-primary text-white border-4 border-white font-[Bangers] text-2xl px-12 py-8 hover:bg-white hover:text-black transition-all shadow-[6px_6px_0px_0px_white] hover:shadow-[10px_10px_0px_0px_white]"
          >
            <Link href="/">RETURN TO BASE</Link>
          </Button>
        </ComicPop>
      </div>
    </div>
  );
}
