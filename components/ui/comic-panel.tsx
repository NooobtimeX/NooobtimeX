import { cn } from "@/lib/utils";
import React from "react";

interface ComicPanelProps extends React.HTMLAttributes<HTMLDivElement> {
  children: React.ReactNode;
  className?: string;
  rotate?: number;
  hoverRotate?: number;
}

export function ComicPanel({
  children,
  className,
  rotate = -1,
  hoverRotate = 0,
  ...props
}: ComicPanelProps) {
  const [isHovered, setIsHovered] = React.useState(false);

  return (
    <div
      className={cn(
        "relative bg-background border-4 border-white shadow-[8px_8px_0px_0px_rgba(255,255,255,1)] transition-transform duration-300",
        className,
      )}
      style={
        {
          transform: `rotate(${isHovered ? hoverRotate : rotate}deg)`,
        } as React.CSSProperties
      }
      onMouseEnter={() => setIsHovered(true)}
      onMouseLeave={() => setIsHovered(false)}
      {...props}
    >
      {children}
    </div>
  );
}
