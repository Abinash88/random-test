import { clsx, type ClassValue } from "clsx"
import { twMerge } from "tailwind-merge"

export function cn(...inputs: ClassValue[]) {
  return twMerge(clsx(inputs))
}



export const formatNumber = (
  e: React.KeyboardEvent<HTMLInputElement>,
  decimal?: number,
  maxVal?: number,
  ignorePriceLimit?: boolean,
): false | void => {
  const [int, dec] = e.currentTarget.value.split(".");
  const hasDecimal = e.currentTarget.valueAsNumber;

  const formedValue = Number(e.currentTarget.value + e.key) * 100;

  if (
    decimal &&
    e.currentTarget.value.includes(".") &&
    (dec?.length || 0) > decimal &&
    ["1", "2", "3", "4", "5", "6", "7", "8", "9", "0"].includes(e.key)
  ) {
    return e.preventDefault();
  }

  if (
    maxVal &&
    !hasDecimal &&
    ["1", "2", "3", "4", "5", "6", "7", "8", "9", "0"].includes(e.key) &&
    Number(int + e.key) > maxVal
  ) {
    e.preventDefault();
  }

  if (
    maxVal &&
    hasDecimal &&
    ["1", "2", "3", "4", "5", "6", "7", "8", "9", "0"].includes(e.key) &&
    formedValue > maxVal * 100
  ) {
    e.preventDefault();
  }

  if (Number(e.currentTarget.value + e.key) > 9999999 && !ignorePriceLimit) {
    e.preventDefault();
  }

  return ["e", "E", "+", "-"].includes(e.key) && e.preventDefault();
};