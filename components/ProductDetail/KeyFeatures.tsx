import { CheckCircle2 } from "lucide-react";
import type { ProductItem } from "@/types";
import { getBrandName } from "@/lib/ProductUtils";

export default function KeyFeatures({ product }: { product: ProductItem }) {
  const features: string[] = product.key_features ?? [];
  if (!features.length) return null;

  return (
    <section aria-labelledby="key-features-heading" className="w-full">
      <h2
        id="key-features-heading"
        className="text-xl sm:text-2xl font-bold text-[#16305e] mb-4"
      >
        Key Features of {getBrandName(product.title)} Water Tanks
      </h2>

      <ul className="grid grid-cols-1 gap-3 sm:grid-cols-2">
        {features.map((f) => (
          <li
            key={f}
            className="flex gap-3 rounded-md border border-gray-200 bg-white p-4 text-sm sm:text-[15px] text-slate-700"
          >
            <CheckCircle2
              className="mt-0.5 h-5 w-5 shrink-0 text-sky-600"
              aria-hidden="true"
            />
            <span>{f}</span>
          </li>
        ))}
      </ul>

      {(product.featuresBanner || product.mobileFeaturesBanner) && (
        <div className="mt-8">
          {product.featuresBanner && (
            // eslint-disable-next-line @next/next/no-img-element
            <img
              src={product.featuresBanner}
              alt={`${product.title} features`}
              className="hidden w-full rounded-md md:block"
            />
          )}
          {product.mobileFeaturesBanner && (
            // eslint-disable-next-line @next/next/no-img-element
            <img
              src={product.mobileFeaturesBanner}
              alt={`${product.title} features`}
              className="w-full rounded-md md:hidden"
            />
          )}
        </div>
      )}
    </section>
  );
}
