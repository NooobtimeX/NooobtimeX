import {
  Tooltip,
  TooltipContent,
  TooltipTrigger,
} from "@/components/ui/tooltip";
import React from "react";

interface ComicTooltipProps {
  children: React.ReactNode;
  content: React.ReactNode;
}

export function ComicTooltip({ children, content }: ComicTooltipProps) {
  return (
    <Tooltip>
      <TooltipTrigger asChild>{children}</TooltipTrigger>
      <TooltipContent className="bg-black border-2 border-white text-white font-[Bangers] tracking-wide rounded-none shadow-[4px_4px_0px_0px_white]">
        {content}
      </TooltipContent>
    </Tooltip>
  );
}
