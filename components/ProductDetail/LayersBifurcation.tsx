import { CheckCircle2 } from "lucide-react";
import type { ProductItem } from "@/types";
import { getColourLayers, normalizeLayer } from "@/lib/ProductUtils";

// Composition text supplied for the 3-layer tank only
const THREE_LAYER_COMPOSITION = [
  {
    title: "The first layer",
    text: "of our 3 Layer Water Tank comprises virgin food-grade material, ensuring polluted-free water, safe for drinking.",
  },
  {
    title: "The second layer",
    text: "offers insulation to the tank, decreasing the water heating level.",
  },
  {
    title: "The outermost layer",
    text: "UV stabilized, reducing the damaging effects of the sun's rays.",
  },
];

export default function LayersBifurcation({
  product,
}: {
  product: ProductItem;
}) {
  const colourRows = getColourLayers(product);
  const allLayers: string[] = (product.AvailableIn ?? []).map(normalizeLayer);
  const hasThreeLayer = allLayers.includes("3-Layer");

  return (
    <section aria-labelledby="layers-heading" className="w-full">
      <h2
        id="layers-heading"
        className="text-xl sm:text-2xl font-bold text-[#16305e] mb-4"
      >
        Layers Bifurcation
      </h2>

      <div className="overflow-x-auto rounded-md border border-gray-200">
        <table className="w-full min-w-[420px] border-collapse text-sm">
          <caption className="sr-only">
            Layer options available in each colour
          </caption>
          <thead>
            <tr className="bg-sky-100">
              <th
                scope="col"
                className="px-4 py-3 text-left font-semibold text-slate-700"
              >
                Layers
              </th>
              <th
                scope="col"
                className="px-4 py-3 text-left font-semibold text-slate-700"
              >
                Available Colours
              </th>
            </tr>
          </thead>
          <tbody>
            {allLayers.map((layer, i) => {
              const colours = colourRows
                .filter((r) => r.layers.includes(layer))
                .map((r) => r.colour);
              return (
                <tr
                  key={layer}
                  className={i % 2 === 0 ? "bg-white" : "bg-gray-50"}
                >
                  <th
                    scope="row"
                    className="border-t border-gray-200 px-4 py-3 text-left font-semibold text-slate-700"
                  >
                    {layer}
                  </th>
                  <td className="border-t border-gray-200 px-4 py-3 text-slate-600">
                    {colours.length ? colours.join(", ") : "Contact us"}
                  </td>
                </tr>
              );
            })}
          </tbody>
        </table>
      </div>

      {hasThreeLayer && (
        <>
          <h3 className="mt-8 text-base sm:text-lg font-bold text-[#16305e]">
            3-Layer Material Composition
          </h3>
          <ul className="mt-2 space-y-2">
            {THREE_LAYER_COMPOSITION.map((item) => (
              <li
                key={item.title}
                className="flex gap-2 text-sm sm:text-[15px] text-slate-700"
              >
                <CheckCircle2
                  className="mt-0.5 h-4 w-4 shrink-0 text-sky-600"
                  aria-hidden="true"
                />
                <span>
                  <span className="font-semibold text-slate-900">
                    {item.title}
                  </span>{" "}
                  {item.text}
                </span>
              </li>
            ))}
          </ul>
        </>
      )}
    </section>
  );
}
