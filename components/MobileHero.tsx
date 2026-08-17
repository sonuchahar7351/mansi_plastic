"use client";

import { useEffect, useRef, useState } from "react";
import Image from "next/image";
import { ChevronLeft, ChevronRight } from "lucide-react";
import { heroSlides } from "@/lib/data";

const SLIDE_DURATION = 6000;

export default function MobileHero() {
  const [current, setCurrent] = useState(0);
  const [key, setKey] = useState(0); // forces Ken Burns animation restart
  const timerRef = useRef<ReturnType<typeof setTimeout> | null>(null);

  const goTo = (index: number) => {
    const next = (index + heroSlides.length) % heroSlides.length;
    setCurrent(next);
    setKey((k) => k + 1);
  };

  const next = () => goTo(current + 1);
  const prev = () => goTo(current - 1);

  useEffect(() => {
    if (timerRef.current) clearTimeout(timerRef.current);
    timerRef.current = setTimeout(() => {
      goTo(current + 1);
    }, SLIDE_DURATION);
    return () => {
      if (timerRef.current) clearTimeout(timerRef.current);
    };
  }, [current]);

  return (
    <section
      id="home"
      className="relative"
      aria-roledescription="carousel"
      aria-label="Featured products"
    >
      {heroSlides.map((slide, index) => (
        <div
          key={slide.mobileImage}
          className={`${index === current ? "animate-kenburn" : ""}`}
          style={{ animationDuration: `${SLIDE_DURATION + 1500}ms` }}
        >
          <Image
            src={slide.mobileImage}
            alt=""
            width={1000}
            height={600}
            priority={index === 0}
            sizes="100vw"
            className="object-cover"
          />
        </div>
      ))}

      {heroSlides.length > 1 && (
        <>
          <div className="absolute bottom-8 right-6 md:right-10 z-20 flex items-center gap-3">
            <button
              type="button"
              onClick={prev}
              aria-label="Previous slide"
              className="flex h-11 w-11 items-center justify-center rounded-full bg-white/15 text-white backdrop-blur-sm transition-colors hover:bg-white/25"
            >
              <ChevronLeft size={22} />
            </button>
            <button
              type="button"
              onClick={next}
              aria-label="Next slide"
              className="flex h-11 w-11 items-center justify-center rounded-full bg-white/15 text-white backdrop-blur-sm transition-colors hover:bg-white/25"
            >
              <ChevronRight size={22} />
            </button>
          </div>

          <div className="absolute bottom-8 left-6 md:left-10 z-20 flex items-center gap-2">
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
