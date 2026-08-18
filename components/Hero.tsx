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

export default function Hero() {
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
      className="relative h-screen min-h-[600px] w-full overflow-hidden"
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
              src={slide.image}
              alt=""
              fill
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
              <div className="flex h-full max-w-[680px] flex-col justify-center pb-18 pt-24">
                <h1 className="max-w-[680px] text-4xl font-extrabold leading-[1.06] tracking-tight text-[#104b99] sm:text-5xl md:text-6xl lg:text-[68px]">
                  MANSI PLASTIC WATER TANKS
                </h1>

                {/* Description */}
                <p className="mt-5 max-w-[500px] text-base font-medium leading-7 text-gray-900 sm:text-lg">
                  Strong, durable, and reliable water storage tanks built with
                  advanced technology for a better tomorrow.
                </p>

                {/* Capacity */}
                <div className="mt-7">
                  <h3 className="text-base font-extrabold text-gray-900 sm:text-lg">
                    Available Capacity Litre
                  </h3>

                  <p className="mt-1 text-sm font-medium tracking-wide text-gray-900 sm:text-base">
                    300 | 500 | 750 | 1000 | 1500 | 2000 | 3000 | 5000 | 10000
                  </p>
                </div>

                {/* Colors */}
                <div className="mt-5">
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

                {/* Features */}
                <div className="mt-6 grid grid-cols-4 gap-3 sm:gap-6 max-w-[480px]">
                  {features.map((feature) => {
                    const Icon = feature.icon;

                    return (
                      <div
                        key={feature.title}
                        className="flex flex-col items-center text-center"
                      >
                        <div className="flex h-10 w-10 items-center justify-center rounded-full border-2 border-[#1760b7] bg-white/70 shadow-sm backdrop-blur-sm sm:h-16 sm:w-16">
                          <Icon
                            size={28}
                            strokeWidth={1.8}
                            className="text-[#104b99]"
                          />
                        </div>

                        <p className="mt-2 text-xs font-bold leading-4 text-gray-900 sm:text-sm">
                          {feature.title}
                          <br />
                          {feature.subtitle}
                        </p>
                      </div>
                    );
                  })}
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
