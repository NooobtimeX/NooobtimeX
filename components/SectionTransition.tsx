"use client";

import ComicPop from "@/components/motion/ComicPop";
import { ReactNode } from "react";

interface SectionTransitionProps {
  children: ReactNode;
}

const SectionTransition = ({ children }: SectionTransitionProps) => {
  return <ComicPop triggerOnce={false}>{children}</ComicPop>;
};

export default SectionTransition;
