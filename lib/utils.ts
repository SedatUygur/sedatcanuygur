import { type ClassValue, clsx } from "clsx"
import { twMerge } from "tailwind-merge"

/**
 * A wrapper around tailwind-merge and clsx to provide a similar API to
 * https://github.com/pacocoursey/clsx#readme.
 *
 * @param inputs - A list of class names to combine.
 * @returns A single class name string.
 */

export function cn(...inputs: ClassValue[]) {
  return twMerge(clsx(inputs))
}