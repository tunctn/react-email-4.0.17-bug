import { type ClassValue, clsx } from "clsx";
import { twMerge } from "tailwind-merge";

export function cn(...inputs: ClassValue[]) {
  return twMerge(clsx(inputs));
}

export const tw = (strings: TemplateStringsArray, ...values: ClassValue[]) => {
  const classString = strings.reduce((result, str, i) => {
    return result + str + (values[i] ? values[i] : "");
  }, "");
  return classString.trim();
};
