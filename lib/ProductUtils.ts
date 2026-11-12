// lib/productUtils.ts
import type { ProductItem } from "@/types";

export const COLOR_HEX: Record<string, string> = {
  white: "#ffffff",
  yellow: "#facc15",
  blue: "#2563eb",
  black: "#111827",
};

export const titleCase = (s: string) => {
  const t = s.trim();
  return t.charAt(0).toUpperCase() + t.slice(1).toLowerCase();
};

// "3 Layer" | "3-Layer" -> "3-Layer"
export const normalizeLayer = (s: string) => {
  const n = s.match(/\d+/)?.[0];
  return n ? `${n}-Layer` : s;
};

// "AASHIRWAD Water Tanks" -> "AASHIRWAD"
export const getBrandName = (title: string) =>
  title.replace(/\s*Water Tanks?$/i, "").trim();

// "1000L" -> 1000
export const parseCapacity = (s: string) => parseInt(s.replace(/\D/g, ""), 10);

// Case-insensitive colour -> layers lookup, one row per colour in product.colors
export function getColourLayers(product: ProductItem) {
  const map = new Map<string, string[]>();
  Object.entries(product.layers_by_colour ?? {}).forEach(([k, v]) =>
    map.set(k.toLowerCase(), (v as string[]).map(normalizeLayer)),
  );
  return (product.colors ?? []).map((c: string) => ({
    colour: titleCase(c),
    layers: map.get(c.toLowerCase()) ?? [],
  }));
}

export const joinList = (items: string[] = []) => items.join(", ");
