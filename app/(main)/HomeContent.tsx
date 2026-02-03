"use client";

import ComicSeparator from "@/components/ComicSeparator";
import ComicPop from "@/components/motion/ComicPop";
import AbilityPreview from "@/components/section/AbilityPreview";
import AffiliationPreview from "@/components/section/AffiliationPreview";
import IssuePreview from "@/components/section/IssuePreview";
import { Avatar, AvatarFallback, AvatarImage } from "@/components/ui/avatar";
import { Button } from "@/components/ui/button";
import { personalData } from "@/data/personal";
import { motion, useScroll, useTransform } from "framer-motion";
import Link from "next/link";
import React, { useRef } from "react";

const HomeContent: React.FC = () => {
  const containerRef = useRef<HTMLDivElement>(null);
  const { scrollYProgress } = useScroll({
    target: containerRef,
    offset: ["start start", "end start"],
  });

  const heroY = useTransform(scrollYProgress, [0, 1], ["0%", "50%"]);
  const heroOpacity = useTransform(scrollYProgress, [0, 0.5], [1, 0]);

  return (
    <div
      ref={containerRef}
      className="w-full relative overflow-hidden bg-black min-h-screen"
    >
      {/* Global Background Elements */}
      <div className="fixed inset-0 z-0 opacity-20 pointer-events-none">
        <div className="absolute inset-0 bg-[radial-gradient(circle_at_center,theme(colors.primary.DEFAULT)_1px,transparent_1px)] bg-[length:24px_24px]"></div>
        {/* Top Right Web */}
        <div className="absolute top-0 right-0 w-[500px] h-[500px] comic-web-pattern opacity-30 transform rotate-12"></div>
        {/* Bottom Left Web */}
        <div className="absolute bottom-0 left-0 w-[500px] h-[500px] comic-web-pattern opacity-30 transform -rotate-12 scale-x-[-1]"></div>
      </div>

      <div className="fixed top-0 left-0 w-full h-full z-0 opacity-10 pointer-events-none">
        <div className="absolute top-[-20%] right-[-10%] w-[600px] h-[600px] bg-primary rounded-full blur-[120px]"></div>
        <div className="absolute bottom-[-10%] left-[-10%] w-[500px] h-[500px] bg-white rounded-full blur-[100px]"></div>
      </div>

      {/* HERO SECTION - SPLASH PAGE */}
      <section className="relative min-h-[95vh] flex flex-col justify-center items-center py-20 px-4 z-10 overflow-hidden">
        {/* Comic Burst Background specifically for Hero */}
        <div className="absolute inset-0 comic-burst opacity-30 z-[-1]"></div>

        <div className="container max-w-7xl mx-auto relative">
          <motion.div
            style={{ y: heroY, opacity: heroOpacity }}
            className="grid lg:grid-cols-2 gap-12 lg:gap-20 items-center"
          >
            {/* LEFT: IMPACT TEXT */}
            <div className="relative z-20 order-2 lg:order-1 flex flex-col items-center lg:items-start text-center lg:text-left">
              {/* Speech Bubble / Intro */}
              <ComicPop
                delay={0.2}
                className="relative mb-6 self-start hidden lg:block"
              >
                <div className="bg-white text-black font-[Bangers] text-xl px-6 py-3 border-4 border-black shadow-[4px_4px_0px_0px_rgba(255,255,255,1)] rounded-[50%_20%_60%_30%]">
                  THE NEW HERO IN TECH!
                </div>
                <div className="absolute -bottom-2 left-6 w-4 h-4 bg-white border-b-4 border-r-4 border-black transform rotate-45"></div>
              </ComicPop>

              {/* Main Title Stack */}
              <div className="relativ space-y-2 mb-8 transform -rotate-2">
                <ComicPop
                  initial={{ x: -100, opacity: 0 }}
                  animate={{ x: 0, opacity: 1 }}
                  triggerOnce={true}
                  className="font-[Bangers] text-4xl md:text-6xl text-white tracking-wider stroke-black"
                  style={{ textShadow: "4px 4px 0px #000" }}
                >
                  HELLO, I&apos;M
                </ComicPop>
                <ComicPop
                  initial={{ scale: 0.8, opacity: 0 }}
                  animate={{ scale: 1, opacity: 1 }}
                  delay={0.1}
                  className="font-[Bangers] text-7xl md:text-9xl text-primary leading-[0.85] tracking-tight drop-shadow-[5px_5px_0px_rgba(255,255,255,1)]"
                >
                  {personalData.name.split(" ")[0]}
                </ComicPop>
                <ComicPop
                  initial={{ x: 100, opacity: 0 }}
                  animate={{ x: 0, opacity: 1 }}
                  delay={0.2}
                  className="bg-white inline-block transform rotate-2 mt-2"
                >
                  <span className="block font-[Bangers] text-3xl md:text-5xl text-black px-4 py-1 border-4 border-black">
                    {personalData.title}
                  </span>
                </ComicPop>
              </div>

              <ComicPop
                initial={{ opacity: 0 }}
                animate={{ opacity: 1 }}
                delay={0.4}
                className="text-lg md:text-xl text-gray-300 font-[Inter] max-w-xl leading-relaxed mb-8 bg-black/50 backdrop-blur-sm p-4 border-l-4 border-primary"
              >
                {personalData.tagline}
              </ComicPop>

              {/* Action Buttons */}
              <ComicPop
                delay={0.6}
                className="flex flex-col sm:flex-row gap-4 w-full sm:w-auto"
              >
                <Button
                  asChild
                  size="lg"
                  className="comic-button bg-primary text-white border-2 border-white text-xl h-14 px-8 shadow-[6px_6px_0px_0px_white] hover:shadow-[3px_3px_0px_0px_white] hover:translate-x-[3px] hover:translate-y-[3px]"
                >
                  <Link href="/issue">EXPLORE ISSUES</Link>
                </Button>
                <Button
                  variant="outline"
                  size="lg"
                  className="comic-button bg-transparent text-white border-2 border-white text-xl h-14 px-8 hover:bg-white hover:text-black"
                >
                  <Link href="https://github.com/NooobtimeX">GITHUB BASE</Link>
                </Button>
              </ComicPop>
            </div>

            {/* RIGHT: HERO AVATAR */}
            <ComicPop
              initial={{ scale: 0.8, opacity: 0, rotate: 5 }}
              animate={{ scale: 1, opacity: 1, rotate: 0 }}
              className="order-1 lg:order-2 relative flex justify-center"
            >
              <div className="relative w-80 h-80 md:w-[450px] md:h-[450px]">
                {/* Back panels */}
                <div className="absolute inset-0 bg-white border-4 border-black transform rotate-6 rounded-sm shadow-[12px_12px_0px_0px_rgba(255,50,50,0.5)] z-0"></div>
                <div className="absolute inset-0 bg-black border-4 border-white transform -rotate-3 rounded-sm z-10 overflow-hidden">
                  <div className="absolute inset-0 comic-halftone opacity-40"></div>
                  <Avatar className="w-full h-full rounded-none">
                    <AvatarImage
                      src={personalData.avatar}
                      alt={personalData.name}
                      className="object-cover scale-110 hover:scale-100 transition-transform duration-700"
                    />
                    <AvatarFallback className="text-9xl font-[Bangers] bg-card text-primary">
                      {personalData.name.charAt(0)}
                    </AvatarFallback>
                  </Avatar>
                </div>

                {/* Corner Badge */}
                <div className="absolute -bottom-6 -left-6 bg-primary text-white font-[Bangers] text-2xl px-4 py-2 border-4 border-black shadow-[4px_4px_0px_0px_white] transform -rotate-6 z-20">
                  Kwan
                </div>
              </div>
            </ComicPop>
          </motion.div>
        </div>
      </section>

      <ComicSeparator />
      <AbilityPreview />
      <ComicSeparator />
      <IssuePreview />
      <ComicSeparator />
      <AffiliationPreview />
    </div>
  );
};

export default HomeContent;
