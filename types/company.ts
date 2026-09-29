export type ColourName = "White" | "Yellow" | "Blue" | "Black";

export interface Brand {
  id: string;
  name: string;
  product: string;
  description: string;
  key_features: string[];
  capacities_litres: number[];
  colours: ColourName[];
  layer_options_text: string;
  layers_by_colour: Partial<Record<ColourName, string[]>>;
  data_note?: string;
}

export interface CatalogData {
  company: string;
  document: string;
  material: string;
  capacity_unit: string;
  brands: Brand[];
  reference_table: {
    title: string;
    columns: string[];
    rows: string[][];
  };
}

export const COLOUR_HEX: Record<ColourName, string> = {
  White: "#ffffff",
  Yellow: "#f2b705",
  Blue: "#1d74b8",
  Black: "#1a1a1a",
};
