import { Icon } from "@iconify/react";
import Link from "next/link";

const NavigationFooter = () => {
  const currentYear = new Date().getFullYear();

  return (
    <footer className="relative w-full bg-black text-white py-12 md:py-20 border-t-4 border-white overflow-hidden mt-none">
      {/* Background Effects */}
      <div className="absolute inset-0 comic-halftone opacity-30 pointer-events-none"></div>

      <div className="container mx-auto px-4 relative z-10">
        <div className="flex flex-col items-center justify-center space-y-8">
          {/* The End Graphic */}
          <div className="relative group">
            <h2 className="font-[Bangers] text-5xl md:text-8xl p-4 bg-primary text-white transform -rotate-2 border-4 border-black shadow-[6px_6px_0px_0px_white] md:shadow-[8px_8px_0px_0px_white] hover:rotate-0 hover:scale-105 transition-transform duration-300 select-none cursor-default">
              THE END?
            </h2>
            <div className="absolute -top-4 -right-2 md:-top-6 md:-right-8 bg-white text-black font-[Bangers] text-sm md:text-xl px-2 py-1 md:px-3 rotate-12 border-2 border-black animate-pulse">
              TO BE CONTINUED...
            </div>
          </div>

          {/* Quick Access Links for Dedicated Pages */}
          <div className="flex flex-wrap justify-center gap-x-4 gap-y-2 font-[Bangers] text-lg md:text-xl uppercase tracking-wider max-w-xs md:max-w-none">
            <Link
              href="/"
              className="hover:text-primary transition-colors hover:underline decoration-wavy underline-offset-4"
            >
              Home
            </Link>
            <span className="text-white/20 hidden md:inline">|</span>
            <Link
              href="/ability"
              className="hover:text-primary transition-colors hover:underline decoration-wavy underline-offset-4"
            >
              Abilities
            </Link>
            <span className="text-white/20 hidden md:inline">|</span>
            <Link
              href="/issue"
              className="hover:text-primary transition-colors hover:underline decoration-wavy underline-offset-4"
            >
              Issues
            </Link>
            <span className="text-white/20 hidden md:inline">|</span>
            <Link
              href="/affiliation"
              className="hover:text-primary transition-colors hover:underline decoration-wavy underline-offset-4"
            >
              Affiliation
            </Link>
          </div>

          {/* Social Links Comic Strip */}
          <div className="flex items-center gap-6 p-4 bg-white/5 border-2 border-white/20 backdrop-blur-sm rounded-none transform rotate-1 hover:rotate-0 transition-transform hover:bg-white/10">
            <Link
              href="https://github.com/NooobtimeX"
              target="_blank"
              className="text-white hover:text-primary transition-colors hover:scale-125 transform duration-200"
              aria-label="GitHub"
            >
              <Icon icon="mdi:github" className="w-8 h-8" />
            </Link>
            <Link
              href="https://www.linkedin.com/in/wongsaphat-puangsorn"
              target="_blank"
              className="text-white hover:text-primary transition-colors hover:scale-125 transform duration-200"
              aria-label="LinkedIn"
            >
              <Icon icon="mdi:linkedin" className="w-8 h-8" />
            </Link>
            <Link
              href="mailto:nooobtimex@gmail.com"
              className="text-white hover:text-primary transition-colors hover:scale-125 transform duration-200"
              aria-label="Email"
            >
              <Icon icon="mdi:email" className="w-8 h-8" />
            </Link>
          </div>

          <div className="w-full max-w-md h-0.5 bg-white/20"></div>

          {/* Copyright Info */}
          <div className="text-center font-[Inter] text-sm text-gray-400 px-4">
            <p>© {currentYear} Wongsaphat Puangsorn. All rights reserved.</p>
            <p className="mt-2 text-xs opacity-60">
              Inspired by Marvel Comics & Silk (Cindy Moon)
            </p>
          </div>
        </div>
      </div>
    </footer>
  );
};

export default NavigationFooter;
