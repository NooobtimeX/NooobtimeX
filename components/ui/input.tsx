import * as React from "react";

import { cn } from "@/lib/utils";

function Input({ className, type, ...props }: React.ComponentProps<"input">) {
  return (
    <input
      type={type}
      data-slot="input"
      className={cn(
        "file:text-foreground placeholder:text-muted-foreground selection:bg-primary selection:text-primary-foreground dark:bg-black/50 border-input h-10 w-full min-w-0 rounded-none border-2 bg-transparent px-3 py-1 text-base shadow-none transition-all outline-none file:inline-flex file:h-7 file:border-0 file:bg-transparent file:text-sm file:font-medium disabled:pointer-events-none disabled:cursor-not-allowed disabled:opacity-50 md:text-sm",
        "focus-visible:border-black focus-visible:ring-0 focus-visible:shadow-[4px_4px_0px_0px_#000] dark:focus-visible:shadow-[4px_4px_0px_0px_#fff]",
        "aria-invalid:ring-destructive/20 dark:aria-invalid:ring-destructive/40 aria-invalid:border-destructive",
        "hover:border-primary",
        className,
      )}
      {...props}
    />
  );
}

export { Input };
