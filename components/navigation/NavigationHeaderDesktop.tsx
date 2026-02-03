"use client";

import { ComicPanel } from "@/components/ui/comic-panel";
import { ComicTooltip } from "@/components/ui/comic-tooltip";
import { TooltipProvider } from "@/components/ui/tooltip";
import MenuItem from "@/interface/menuItem";
import { Icon } from "@iconify/react";
import type { Route } from "next";
import Image from "next/image";
import Link from "next/link";

interface NavigationHeaderDesktopProps {
  menuItems: MenuItem[];
}

export default function NavigationHeaderDesktop({
  menuItems,
}: NavigationHeaderDesktopProps) {
  return (
    <div className="flex w-full items-center justify-between p-2 mx-auto mt-4 max-w-5xl">
      {/* Main Header Container - Comic Strip Style */}
      <ComicPanel className="flex items-center justify-between w-full bg-black z-50 p-0 overflow-hidden">
        {/* Logo Section */}
        <div className="relative flex items-center gap-3 px-6 py-3 border-r-4 border-white bg-black overflow-hidden group/logo">
          {/* Web Pattern Background */}
          <div className="absolute inset-0 comic-web-pattern opacity-30 group-hover/logo:opacity-50 transition-opacity"></div>

          <Link href="/" className="relative z-10">
            <div className="relative w-10 h-10 border-2 border-white rounded-full overflow-hidden shadow-[0_0_10px_rgba(255,50,50,0.5)] group-hover/logo:shadow-[0_0_20px_rgba(255,50,50,0.8)] transition-all">
              <Image
                src="/favicon.ico"
                alt="Portfolio Logo"
                className="object-cover"
                width={40}
                height={40}
                quality={100}
              />
            </div>
          </Link>
          <Link
            href="/"
            className="relative z-10 font-[Bangers] text-2xl uppercase tracking-wider text-white group-hover/logo:text-primary transition-colors stroke-black"
            style={{ textShadow: "2px 2px 0px #000" }}
          >
            NooobtimeX
          </Link>
        </div>

        {/* Navigation Items */}
        <div className="flex items-center flex-1 justify-center bg-card relative overflow-hidden h-full">
          <TooltipProvider>
            {menuItems.map((item, index) => (
              <ComicTooltip
                key={item.href}
                content={
                  <div className="flex items-center gap-2">
                    <Icon
                      icon={item.icon.icon}
                      className="w-4 h-4 text-primary"
                    />
                    <span>{item.icon.description}</span>
                  </div>
                }
              >
                <Link
                  href={item.href as Route}
                  className={`
                                        group relative px-8 py-4 h-full flex items-center justify-center
                                        font-[Bangers] text-xl uppercase tracking-wide text-zinc-400
                                        hover:text-white transition-all
                                        ${index !== menuItems.length - 1 ? "border-r-4 border-white" : ""}
                                    `}
                >
                  <span className="relative z-10 group-hover:scale-110 group-hover:rotate-2 transition-transform duration-200 drop-shadow-md">
                    {item.title}
                  </span>
                  {/* Hover Effect Background */}
                  <div className="absolute inset-0 bg-primary/0 group-hover:bg-primary transition-colors duration-300 ease-out" />
                  {/* Hover Web Effect */}
                  <div className="absolute inset-0 comic-web-pattern opacity-0 group-hover:opacity-20 transition-opacity duration-300" />
                </Link>
              </ComicTooltip>
            ))}
          </TooltipProvider>
        </div>

        {/* End Cap / Decorative */}
        <div className="w-12 h-full bg-[radial-gradient(circle,white_2px,transparent_2.5px)] bg-[length:8px_8px] opacity-20 self-stretch"></div>
      </ComicPanel>
    </div>
  );
}
