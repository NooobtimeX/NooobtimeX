import { clsx, type ClassValue } from "clsx";
import { twMerge } from "tailwind-merge";

export function cn(...inputs: ClassValue[]) {
  return twMerge(clsx(inputs));
}

// Utility function to check if an affiliation is current (no end date)
export function isCurrentPosition(endDate?: string): boolean {
  return !endDate;
}

// Utility function to format date range for affiliation
export function formatAffiliationDuration(
  startDate: string,
  endDate?: string,
): string {
  const start = new Date(startDate);
  const startMonth = start.toLocaleDateString("en-US", { month: "short" });
  const startYear = start.getFullYear();

  if (!endDate) {
    return `${startMonth} ${startYear} - Present`;
  }

  const end = new Date(endDate);
  const endMonth = end.toLocaleDateString("en-US", { month: "short" });
  const endYear = end.getFullYear();

  return `${startMonth} ${startYear} - ${endMonth} ${endYear}`;
}
