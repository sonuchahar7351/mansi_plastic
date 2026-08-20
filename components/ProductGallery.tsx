"use client";

import { useState } from "react";
import Image from "next/image";
import { ShieldCheck, Award } from "lucide-react";

export default function ProductGallery({
  images = [],
  mainAlt = "Product image",
}: {
  images: string[];
  mainAlt: string;
}) {
  const [activeIndex, setActiveIndex] = useState(0);
  const active = images[activeIndex];

  return (
    <div className="w-full">
      {/* Main image */}
      <div className="relative aspect-square w-full max-w-md mx-auto lg:mx-0 rounded-md border border-gray-100 bg-white">
        {/* Certification badges */}
        <div className="absolute left-2 top-2 z-10 flex flex-col items-center gap-0.5 rounded-full bg-white p-2 shadow-sm ring-1 ring-gray-100">
          <ShieldCheck className="h-6 w-6 text-[#16305e]" aria-hidden="true" />
          <span className="text-[8px] font-bold leading-none text-slate-700">
            CERTIFIED
          </span>
        </div>
        <div className="absolute right-2 top-2 z-10 flex flex-col items-center justify-center gap-0.5 rounded-full bg-amber-50 p-2 shadow-sm ring-1 ring-amber-200">
          <Award className="h-6 w-6 text-amber-500" aria-hidden="true" />
          <span className="text-[10px] font-bold leading-none text-amber-600">
            10 Yrs
          </span>
        </div>

        {active ? (
          <Image
            src={active}
            alt={mainAlt}
            fill
            sizes="(max-width: 768px) 90vw, 400px"
            className="object-contain p-6"
            priority
          />
        ) : (
          <div
            role="img"
            aria-label={mainAlt}
            className="h-full w-full rounded-md bg-gradient-to-b from-gray-200 to-gray-300"
          />
        )}
      </div>

      {/* Thumbnails */}
      <div
        className="mt-4 flex gap-2 justify-center lg:justify-start"
        role="tablist"
        aria-label="Product image thumbnails"
      >
        {(images.length ? images : Array.from({ length: 4 })).map((img, i) => (
          <button
            key={i}
            type="button"
            role="tab"
            aria-selected={i === activeIndex}
            aria-label={`View image ${i + 1}`}
            onClick={() => setActiveIndex(i)}
            className={[
              "relative h-16 w-16 shrink-0 overflow-hidden rounded-md border-2 bg-gray-100",
              i === activeIndex ? "border-amber-500" : "border-gray-200",
            ].join(" ")}
          >
            {img ? (
              <Image
                src={img as string}
                alt={mainAlt}
                fill
                sizes="64px"
                className="object-cover"
              />
            ) : (
              <span className="block h-full w-full bg-gray-200" />
            )}
          </button>
        ))}
      </div>
    </div>
  );
}
