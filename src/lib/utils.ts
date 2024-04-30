import { type ClassValue, clsx } from "clsx";
import { twMerge } from "tailwind-merge";

export function cn(...inputs: ClassValue[]) {
  return twMerge(clsx(inputs));
}

export function dateFormater(date: Date, locale = "pt-BR") {
  return new Intl.DateTimeFormat(locale).format(date);
}
