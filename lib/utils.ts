import { clsx, type ClassValue } from "clsx";
import { twMerge } from "tailwind-merge";

export function cn(...inputs: ClassValue[]) {
  return twMerge(clsx(inputs));
}

// All dates across the site are displayed as "Month Year" (e.g. "June 2025")
// rather than a full "Month Day, Year" or year-only format.
export function formatDate(input: string | number): string {
  const date = new Date(input);
  return date.toLocaleDateString("en-US", {
    month: "long",
    year: "numeric",
  });
}

export function formatDateFromObj(input: Date): string {
  const date = new Date(input);
  return date.toLocaleDateString("en-US", {
    month: "long",
    year: "numeric",
  });
}

// Shared "Month Year – Month Year" / "Month Year – Present" formatter used
// by the experience timeline, card, and detail views.
export function formatDateRange(
  startDate: Date,
  endDate: Date | "Present"
): string {
  const start = formatDateFromObj(startDate);
  const end = endDate === "Present" ? "Present" : formatDateFromObj(endDate);
  return `${start} – ${end}`;
}
