"use client";

import { useEffect, useRef, useState } from "react";
import Image from "next/image";
import {
  ChevronLeft,
  ChevronRight,
  ShieldCheck,
  Layers3,
  Droplets,
  Shield,
} from "lucide-react";
import { heroSlides } from "@/lib/data";

const SLIDE_DURATION = 6000;

const features = [
  {
    icon: ShieldCheck,
    title: "High Quality",
    subtitle: "Material",
  },
  {
    icon: Layers3,
    title: "Multi Layer",
    subtitle: "Protection",
  },
  {
    icon: Droplets,
    title: "Leak Proof",
    subtitle: "Design",
  },
  {
    icon: Shield,
    title: "UV Protected",
    subtitle: "& Long Life",
  },
];

export default function MobileHero() {
  const [current, setCurrent] = useState(0);
  const [key, setKey] = useState(0);
  const timerRef = useRef<ReturnType<typeof setTimeout> | null>(null);

  const goTo = (index: number) => {
    const next = (index + heroSlides.length) % heroSlides.length;
    setCurrent(next);
    setKey((k) => k + 1);
  };

  const next = () => goTo(current + 1);
  const prev = () => goTo(current - 1);

  useEffect(() => {
    if (timerRef.current) {
      clearTimeout(timerRef.current);
    }

    timerRef.current = setTimeout(() => {
      goTo(current + 1);
    }, SLIDE_DURATION);

    return () => {
      if (timerRef.current) {
        clearTimeout(timerRef.current);
      }
    };
  }, [current]);

  return (
    <section
      id="home"
      className="relative w-full min-h-[750px] overflow-hidden"
      aria-roledescription="carousel"
      aria-label="Featured products"
    >
      {heroSlides.map((slide, index) => (
        <div
          key={slide.heading}
          className={`absolute inset-0 transition-opacity duration-1000 ease-in-out ${
            index === current ? "z-10 opacity-100" : "z-0 opacity-0"
          }`}
          aria-hidden={index !== current}
        >
          {/* Background image */}
          <div
            key={index === current ? key : undefined}
            className={`absolute inset-0 ${
              index === current ? "animate-kenburn" : ""
            }`}
            style={{
              animationDuration: `${SLIDE_DURATION + 1500}ms`,
            }}
          >
            <Image
              src={slide.mobileImage}
              alt=""
              width={1600}
              height={900}
              priority={index === 0}
              sizes="100vw"
              className="object-cover object-center"
            />
          </div>

          {/* Optional subtle overlay on left side */}
          <div className="absolute inset-0 bg-gradient-to-r from-white/20 via-white/5 to-transparent" />

          {/* CONTENT OVER IMAGE */}
          <div className="absolute inset-0 z-10">
            <div className="mx-auto h-full w-full max-w-[1600px] px-6 sm:px-10 lg:px-16 xl:px-20">
              <div className="flex h-full max-w-[680px] flex-col justify-start pt-20">
                <h1 className="max-w-[680px] text-4xl font-extrabold leading-[1.06] tracking-tight text-[#104b99]">
                  MANSI PLASTIC WATER TANKS
                </h1>

                {/* Description */}
                <p className="mt-2 max-w-[500px] text-base font-medium text-gray-900 sm:text-lg">
                  Strong, durable, and reliable water storage tanks built with
                  advanced technology for a better tomorrow.
                </p>

                {/* Capacity */}
                <div className="mt-3">
                  <h3 className="text-base font-extrabold text-gray-900 sm:text-lg">
                    Available Capacity Litre
                  </h3>

                  <p className="mt-0 text-sm font-medium tracking-wide text-gray-900 sm:text-base">
                    300 | 500 | 750 | 1000 | 1500 | 2000 | 3000 | 5000 | 10000
                  </p>
                </div>

                {/* Colors */}
                <div className="mt-2">
                  <div className="inline-flex items-center gap-3 rounded-md bg-black px-4 py-2">
                    <span className="text-sm font-bold uppercase tracking-wide text-white">
                      Available Colours
                    </span>

                    <span className="h-5 w-5 rounded-full border-2 border-white bg-white" />
                    <span className="h-5 w-5 rounded-full border-2 border-white bg-blue-900" />
                    <span className="h-5 w-5 rounded-full border-2 border-white bg-green-700" />
                    <span className="h-5 w-5 rounded-full border-2 border-white bg-yellow-400" />
                  </div>

                  <p className="mt-2 text-sm font-medium text-gray-900 sm:text-base">
                    White | Black | Blue | Green | Yellow colors are available
                  </p>
                </div>
              </div>
            </div>
          </div>
        </div>
      ))}

      {/* Navigation */}
      {heroSlides.length > 1 && (
        <>
          <div className="absolute bottom-8 right-6 z-30 flex items-center gap-3 md:right-10">
            <button
              type="button"
              onClick={prev}
              aria-label="Previous slide"
              className="flex h-11 w-11 items-center justify-center rounded-full bg-white/20 text-white shadow-lg backdrop-blur-sm transition hover:bg-white/40"
            >
              <ChevronLeft size={22} />
            </button>

            <button
              type="button"
              onClick={next}
              aria-label="Next slide"
              className="flex h-11 w-11 items-center justify-center rounded-full bg-white/20 text-white shadow-lg backdrop-blur-sm transition hover:bg-white/40"
            >
              <ChevronRight size={22} />
            </button>
          </div>

          <div className="absolute bottom-8 left-6 z-30 flex items-center gap-2 md:left-10">
            {heroSlides.map((slide, index) => (
              <button
                key={slide.heading}
                type="button"
                onClick={() => goTo(index)}
                aria-label={`Go to slide ${index + 1}`}
                aria-current={index === current}
                className={`h-2.5 rounded-full transition-all duration-300 ${
                  index === current ? "w-8 bg-accent" : "w-2.5 bg-white/60"
                }`}
              />
            ))}
          </div>
        </>
      )}
    </section>
  );
}
