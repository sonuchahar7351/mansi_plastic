import type { ProductItem } from "@/types";
import { COLOR_HEX, getColourLayers } from "@/lib/ProductUtils";

export default function ProductColors({ product }: { product: ProductItem }) {
  const rows = getColourLayers(product);
  if (!rows.length) return null;

  return (
    <section aria-labelledby="colours-heading" className="w-full">
      <h2
        id="colours-heading"
        className="text-xl sm:text-2xl font-bold text-[#16305e] mb-4"
      >
        Available Colours
      </h2>

      <ul className="grid grid-cols-2 gap-4 sm:grid-cols-4">
        {rows.map(({ colour, layers }) => (
          <li
            key={colour}
            className="flex flex-col items-center rounded-md border border-gray-200 bg-white p-4 text-center"
          >
            <span
              aria-hidden="true"
              className="h-14 w-14 rounded-full border border-gray-300 shadow-inner"
              style={{
                backgroundColor: COLOR_HEX[colour.toLowerCase()] ?? "#e5e7eb",
              }}
            />
            <span className="mt-3 text-sm font-semibold text-slate-900">
              {colour}
            </span>
            <span className="mt-1 text-xs text-slate-500">
              {layers.length ? layers.join(", ") : "Contact us for options"}
            </span>
          </li>
        ))}
      </ul>
    </section>
  );
}
