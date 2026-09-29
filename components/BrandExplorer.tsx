"use client";

import { useEffect, useState } from "react";
import TankPreview from "./TankPreview";
import {
  CatalogData,
  COLOUR_HEX,
  type Brand,
  type ColourName,
} from "@/types/company";
import { compnanydata } from "@/lib/company";
const data = compnanydata as CatalogData;

export default function BrandExplorer({ brandId }: { brandId: string }) {
  const { brands } = data;
  const brand = brands.find((b: Brand) => b.id === brandId)!;
  if (!brand) {
    return null;
  }
  const [colour, setColour] = useState(brand.colours[0]);

  const maxRoot = Math.sqrt(Math?.max(...brand.capacities_litres));

  return (
    <div className="grid gap-10 lg:grid-cols-[1fr_320px] lg:items-start">
      <article
        role="tabpanel"
        className="rounded-3xl border border-slate-200 bg-white p-6 sm:p-8 "
      >
        <h2 className="font-display text-4xl font-extrabold tracking-tight sm:text-5xl">
          {brand.name}
          <span className="mt-1 block font-sans text-base font-medium text-slate-500 ">
            {brand.product}
          </span>
        </h2>
        <p className="mt-5 max-w-prose text-slate-700">{brand.description}</p>

        <div className="mt-8 grid gap-8 md:grid-cols-2">
          <section>
            <h3 className="font-display text-xl font-bold">Key features</h3>
            <ul className="mt-3 list-disc space-y-2 pl-5 text-slate-700 ">
              {brand.key_features.map((f) => (
                <li key={f}>{f}</li>
              ))}
            </ul>
          </section>

          <section>
            <h3 className="font-display text-xl font-bold">
              Capacities (litres)
            </h3>
            <div
              className="mt-6 flex h-36 items-end gap-1.5"
              aria-label={`Capacities: ${brand.capacities_litres.join(", ")} litres`}
            >
              {brand.capacities_litres.map((c) => (
                <div
                  key={c}
                  className="relative flex-1 rounded-t-md bg-sky-600 "
                  style={{
                    height: `${Math.max(12, (Math.sqrt(c) / maxRoot) * 100)}%`,
                  }}
                >
                  <span className="absolute bottom-full left-1/2 mb-1 -translate-x-1/2 text-[11px] text-slate-500 ">
                    {c >= 1000 ? `${c / 1000}k` : c}
                  </span>
                </div>
              ))}
            </div>
            <p className="mt-2 text-xs text-slate-500 ">
              {brand.capacities_litres.join(" | ")}. Bar height is scaled to
              tank volume.
            </p>
          </section>
        </div>

        <section className="mt-8">
          <h3 className="font-display text-xl font-bold">Colours and layers</h3>
          <ul className="mt-3 flex flex-wrap gap-2">
            {brand.colours.map((c) => (
              <li
                key={c}
                className="inline-flex items-center gap-2 rounded-full border border-slate-300 px-3 py-1 text-sm "
              >
                <span
                  className="size-3.5 rounded-full border border-slate-300"
                  style={{ background: COLOUR_HEX[c] }}
                />
                {c}: {(brand.layers_by_colour[c] ?? []).join(", ")}
              </li>
            ))}
          </ul>
          {brand.data_note && (
            <p className="mt-3 text-xs text-slate-500 ">{brand.data_note}</p>
          )}
        </section>
      </article>

      <aside className="flex flex-col items-center gap-4 lg:sticky lg:top-28">
        <TankPreview colour={colour} />
        <div role="group" aria-label="Tank colour" className="flex gap-2.5">
          {brand.colours.map((c) => (
            <button
              key={c}
              aria-label={c}
              aria-pressed={c === colour}
              onClick={() => setColour(c)}
              style={{ background: COLOUR_HEX[c] }}
              className="size-9 rounded-full border-2 border-slate-300 aria-pressed:outline-3 aria-pressed:outline-offset-2 aria-pressed:outline-sky-600 focus-visible:outline-3 focus-visible:outline-offset-2 focus-visible:outline-sky-600"
            />
          ))}
        </div>
        <p className="text-sm text-slate-500 ">{colour}</p>
      </aside>
    </div>
  );
}
