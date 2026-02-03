"use client";

import {
  CircleCheckIcon,
  InfoIcon,
  Loader2Icon,
  OctagonXIcon,
  TriangleAlertIcon,
} from "lucide-react";
import { useTheme } from "next-themes";
import { Toaster as Sonner, type ToasterProps } from "sonner";

const Toaster = ({ ...props }: ToasterProps) => {
  const { theme = "system" } = useTheme();

  return (
    <Sonner
      theme={theme as ToasterProps["theme"]}
      className="toaster group"
      toastOptions={{
        classNames: {
          toast:
            "group toast group-[.toaster]:bg-white group-[.toaster]:text-black group-[.toaster]:border-4 group-[.toaster]:border-black group-[.toaster]:shadow-[4px_4px_0px_0px_rgba(0,0,0,1)] group-[.toaster]:font-[Bangers] group-[.toaster]:text-lg group-[.toaster]:uppercase group-[.toaster]:tracking-wide group-[.toaster]:rounded-none",
          description:
            "group-[.toast]:text-gray-700 group-[.toast]:font-[Inter] group-[.toast]:text-sm group-[.toast]:normal-case",
          actionButton:
            "group-[.toast]:bg-primary group-[.toast]:text-white font-[Bangers]",
          cancelButton:
            "group-[.toast]:bg-muted group-[.toast]:text-muted-foreground font-[Bangers]",
        },
      }}
      icons={{
        success: <CircleCheckIcon className="size-5 text-green-600" />,
        info: <InfoIcon className="size-5 text-blue-600" />,
        warning: <TriangleAlertIcon className="size-5 text-yellow-600" />,
        error: <OctagonXIcon className="size-5 text-red-600" />,
        loading: <Loader2Icon className="size-5 animate-spin text-black" />,
      }}
      {...props}
    />
  );
};

export { Toaster };
