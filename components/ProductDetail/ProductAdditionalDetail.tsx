import type { ProductItem } from "@/types";
import {
  getBrandName,
  joinList,
  parseCapacity,
  titleCase,
} from "@/lib/ProductUtils";

function capacityRange(sizes: string[] = []) {
  if (!sizes.length) return "";
  const nums = sizes.map(parseCapacity).filter((n) => !isNaN(n));
  return `${Math.min(...nums)}-${Math.max(...nums)} L`;
}

export default function AdditionalInfo({ product }: { product: ProductItem }) {
  const specs = [
    { label: "Brand:", value: getBrandName(product.title) },
    { label: "Colour:", value: joinList(product.colors?.map(titleCase)) },
    { label: "Layers:", value: joinList(product.AvailableIn) },
    {
      label: "Storage Capacity:",
      value: capacityRange(product.CapiblityRange),
    },
    { label: "Available Sizes:", value: joinList(product.CapiblityRange) },
    { label: "Specifications:", value: joinList(product.Spacification) },
    { label: "Usage:", value: "Water Storage" },
    { label: "Material:", value: "LLDPE Virgin Plastic" },
    { label: "Application:", value: "Residential, Commercial" },
  ].filter((s) => s.value);

  return (
    <section aria-labelledby="additional-info-heading" className="w-full">
      <h2
        id="additional-info-heading"
        className="text-xl sm:text-2xl font-bold text-[#16305e] mb-4"
      >
        Additional information
      </h2>

      <div className="overflow-hidden rounded-md border border-gray-200">
        <table className="w-full border-collapse text-sm">
          <caption className="sr-only">
            Additional specifications for {product.title}
          </caption>
          <tbody>
            {specs.map((row, i) => (
              <tr
                key={row.label}
                className={i % 2 === 0 ? "bg-white" : "bg-gray-50"}
              >
                <th
                  scope="row"
                  className="w-1/3 sm:w-1/4 border-t border-gray-200 px-4 py-3 text-left align-top font-semibold text-slate-700"
                >
                  {row.label}
                </th>
                <td className="border-t border-gray-200 px-4 py-3 align-top italic text-slate-500">
                  {row.value}
                </td>
              </tr>
            ))}
          </tbody>
        </table>
      </div>
    </section>
  );
}
