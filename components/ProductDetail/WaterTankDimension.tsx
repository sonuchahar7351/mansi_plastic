import type { ProductItem } from "@/types";
import { parseCapacity } from "@/lib/ProductUtils";

const COLUMNS = [
  "S.No",
  "Capacity (Liters)",
  "Diameter (Inches)",
  "Height (Inches)",
  "Manhole Dia (Inch)",
];

// capacity (L) -> [diameter, height, manhole]
const DIMENSIONS: Record<number, [number, number, number]> = {
  300: [29, 31.5, 16],
  500: [34, 37, 16],
  750: [39, 43.5, 16],
  1000: [42, 48, 16],
  1500: [49, 54.5, 16],
  2000: [53, 60, 16],
  3000: [58, 73.5, 16],
  5000: [74, 83.5, 16],
  // 10000L: add [diameter, height, manhole] here when available
};

export default function WaterTankDimension({
  product,
}: {
  product: ProductItem;
}) {
  const rows = (product.CapiblityRange ?? []).map((size: string, i: number) => {
    const cap = parseCapacity(size);
    const d = DIMENSIONS[cap];
    return [i + 1, cap, ...(d ?? ["On request", "On request", "On request"])];
  });

  return (
    <section aria-labelledby="dimension-heading" className="w-full">
      <h2
        id="dimension-heading"
        className="text-xl sm:text-2xl font-bold text-[#16305e] mb-2"
      >
        Water Tank Dimension
      </h2>
      <p className="text-sm text-slate-500 mb-4">
        Checking from phone? Please rotate to see full table.
      </p>

      <div className="overflow-x-auto rounded-md border border-gray-200">
        <table className="w-full min-w-[560px] border-collapse text-sm">
          <caption className="sr-only">
            {product.title} capacity and dimensions
          </caption>
          <thead>
            <tr className="bg-sky-100">
              {COLUMNS.map((col) => (
                <th
                  key={col}
                  scope="col"
                  className="px-4 py-3 text-left font-semibold text-slate-700 whitespace-nowrap"
                >
                  {col}
                </th>
              ))}
            </tr>
          </thead>
          <tbody>
            {rows.map((row, i) => (
              <tr
                key={String(row[1])}
                className={i % 2 === 0 ? "bg-white" : "bg-gray-50"}
              >
                {row.map((cell, j) => (
                  <td
                    key={COLUMNS[j]}
                    className="border-t border-gray-200 px-4 py-3 text-slate-500"
                  >
                    {cell}
                  </td>
                ))}
              </tr>
            ))}
          </tbody>
        </table>
      </div>
    </section>
  );
}
