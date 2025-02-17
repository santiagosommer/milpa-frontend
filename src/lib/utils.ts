import clsx, { type ClassValue } from "clsx"
import { twMerge } from "tailwind-merge"

export function cx(...args: ClassValue[]) {
  return twMerge(clsx(...args))
}

export const focusRing = [
  // base
  "outline outline-offset-2 outline-0 focus-visible:outline-2",
  // outline color
  "outline-blue-500 dark:outline-blue-500",
]

export const focusInput = [
  // base
  "focus:ring-1",
  // ring color
  "focus:ring-[var(--color-btn-focus-ring)] focus:dark:ring-[var(--color-btn-focus-ring-dark)]",
  // border color
  "focus:border-[var(--color-btn-focus-ring)] focus:dark:border-[var(--color-btn-focus-ring-dark)]",
]

// Tremor hasErrorInput [v0.0.1]

export const hasErrorInput = [
  // base
  "ring-2",
  // border color
  "border-red-500 dark:border-red-700",
  // ring color
  "ring-red-200 dark:ring-red-700/30",
]