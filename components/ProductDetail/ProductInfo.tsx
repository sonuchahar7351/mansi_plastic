import { CheckCircle2 } from "lucide-react";
import type { ProductItem } from "@/types";
import {
  getBrandName,
  getColourLayers,
  joinList,
  titleCase,
} from "@/lib/ProductUtils";

interface Props {
  product: ProductItem;
  priceLabel?: string;
  category?: string;
  categoryHref?: string;
  contactHref?: string;
}

export default function ProductInfo({
  product,
  priceLabel = "Per Liter",
  category = "Mansi Plastic Water Tanks",
  categoryHref = "/products",
  contactHref = "/contact-us",
}: Props) {
  const brand = getBrandName(product.title);
  const sizes = joinList(product.CapiblityRange);
  const layers = joinList(product.AvailableIn);
  const colours = joinList(product.colors?.map(titleCase));
  const hasColourData = getColourLayers(product).some((c) => c.layers.length);

  const facts = [
    { label: "Capacities", value: sizes },
    { label: "Layers", value: layers },
    { label: "Colours", value: colours },
  ].filter((f) => f.value);

  return (
    <div className="w-full">
      <h1 className="text-2xl sm:text-3xl font-bold text-[#16305e]">
        {product.title}
      </h1>
      <p className="mt-1 text-sm font-medium text-amber-600">{priceLabel}</p>

      <h2 className="mt-5 text-lg sm:text-xl font-bold text-[#16305e]">
        {brand} by Mansi Plastic | 10 Years Warranty | ISO 9001 Certified |
        Anti-Bacterial
      </h2>

      {product?.Spacification && product?.Spacification?.length > 0 && (
        <ul className="mt-4 flex flex-wrap gap-2">
          {product?.Spacification?.map((s: string) => (
            <li
              key={s}
              className="rounded-full bg-sky-50 px-3 py-1 text-xs font-semibold text-sky-800 border border-sky-200"
            >
              {s}
            </li>
          ))}
        </ul>
      )}

      {product.key_features?.length > 0 && (
        <>
          <h3 className="mt-6 text-base sm:text-lg font-bold text-[#16305e]">
            Why choose {brand}
          </h3>
          <ul className="mt-2 space-y-2">
            {product.key_features.slice(0, 4).map((f: string) => (
              <li
                key={f}
                className="flex gap-2 text-sm sm:text-[15px] text-slate-700"
              >
                <CheckCircle2
                  className="mt-0.5 h-4 w-4 shrink-0 text-sky-600"
                  aria-hidden="true"
                />
                <span>{f}</span>
              </li>
            ))}
          </ul>
        </>
      )}

      <dl className="mt-6 space-y-2 text-sm sm:text-[15px] text-slate-700">
        {facts.map((f) => (
          <div key={f.label} className="flex gap-2">
            <dt className="w-24 shrink-0 font-semibold text-slate-900">
              {f.label}:
            </dt>
            <dd>{f.value}</dd>
          </div>
        ))}
      </dl>

      <p className="mt-6 text-sm sm:text-[15px] text-slate-700">
        {hasColourData
          ? "See the tabs below for colours, layer options, dimensions and full details, or "
          : "Check below for all details or "}
        <a
          href={contactHref}
          className="font-semibold text-sky-700 hover:underline"
        >
          Contact us
        </a>
      </p>

      <p className="mt-6 text-xs sm:text-sm text-slate-500">
        Category:{" "}
        <a href={categoryHref} className="text-sky-700 hover:underline">
          {category}
        </a>
      </p>
    </div>
  );
}
