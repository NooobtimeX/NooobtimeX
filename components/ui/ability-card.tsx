"use client";

import ComicPop from "@/components/motion/ComicPop";
import { cn } from "@/lib/utils";
import { Icon } from "@iconify/react";
import React from "react";

interface AbilityCardProps {
  name: string;
  icon: string;
  index?: number;
}

export function AbilityCard({ name, icon, index = 0 }: AbilityCardProps) {
  // Deterministic rotation based on name to prevent hydration mismatch
  const randomRotation = React.useMemo(() => {
    const seed = name
      .split("")
      .reduce((acc, char) => acc + char.charCodeAt(0), 0);
    return (seed % 5) - 2.5; // Range: -2.5 to 2.5 deg
  }, [name]);

  return (
    <ComicPop
      delay={index * 0.05}
      whileHover={{
        scale: 1.1,
        rotate: 0,
        transition: { type: "spring", stiffness: 400, damping: 10 },
      }}
      className="relative group perspective-500"
    >
      <div
        className={cn(
          "relative flex flex-col items-center justify-center p-4 min-h-[120px]",
          "bg-card border-2 border-white/90",
          "shadow-[4px_4px_0px_0px_rgba(255,255,255,0.2)]",
          "group-hover:shadow-[6px_6px_0px_0px_#ef4444]", // Silk Red shadow
          "group-hover:border-primary group-hover:bg-zinc-900",
          "transition-all duration-300 transform",
        )}
        style={{ transform: `rotate(${randomRotation}deg)` }}
      >
        {/* Corner accents */}
        <div className="absolute top-1 left-1 w-2 h-2 border-l-2 border-t-2 border-white/30 group-hover:border-primary"></div>
        <div className="absolute bottom-1 right-1 w-2 h-2 border-r-2 border-b-2 border-white/30 group-hover:border-primary"></div>

        {/* Icon Container with Glow */}
        <div className="relative mb-3 group-hover:animate-bounce-subtle">
          <div className="absolute inset-0 bg-primary/20 blur-xl rounded-full scale-0 group-hover:scale-150 transition-transform duration-500"></div>
          <Icon
            icon={icon}
            className="w-10 h-10 text-white/80 group-hover:text-primary transition-colors duration-300 relative z-10"
          />
        </div>

        {/* Text */}
        <span className="font-[Bangers] text-lg text-white/90 tracking-wider uppercase text-center group-hover:text-white group-hover:scale-105 transition-all">
          {name}
        </span>

        {/* Tech Level Lines (Decorative) */}
        <div className="flex gap-1 mt-2 opacity-30 group-hover:opacity-100 transition-opacity">
          {[1, 2, 3].map((i) => (
            <div
              key={i}
              className={cn(
                "w-1 h-3 -skew-x-12",
                i === 3 ? "bg-primary" : "bg-white",
              )}
            />
          ))}
        </div>
      </div>
    </ComicPop>
  );
}
