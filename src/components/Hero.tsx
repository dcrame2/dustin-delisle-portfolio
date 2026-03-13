"use client";

import Image from "next/image";
import { useEffect, useState } from "react";

export default function Hero() {
  const [loaded, setLoaded] = useState(false);

  useEffect(() => {
    setLoaded(true);
  }, []);

  return (
    <section
      id="hero"
      className="relative flex min-h-screen items-center overflow-hidden"
    >
      {/* Background */}
      <div className="absolute inset-0">
        <Image
          src="https://images.unsplash.com/photo-1477959858617-67f85cf4f1df?w=1920&q=80"
          alt="Chicago skyline"
          fill
          className={`object-cover transition-transform duration-[2000ms] ease-out ${loaded ? "scale-100" : "scale-110"}`}
          priority
        />
        <div className="absolute inset-0 bg-gradient-to-r from-navy/95 via-navy/90 to-navy/80" />
      </div>

      <div className="relative mx-auto flex w-full max-w-7xl flex-col items-center gap-10 px-6 pt-28 pb-20 md:flex-row md:items-center md:gap-12 md:pt-0">
        {/* Text */}
        <div className="flex-1 text-center md:text-left">
          <p
            className={`mb-2 text-sm font-semibold uppercase tracking-widest text-accent-light transition-all duration-700 ${loaded ? "opacity-100 translate-y-0" : "opacity-0 translate-y-4"}`}
          >
            Hello, I&apos;m
          </p>
          <h1
            className={`mb-3 text-5xl font-extrabold leading-[1.1] text-white transition-all duration-700 delay-100 md:text-6xl lg:text-7xl ${loaded ? "opacity-100 translate-y-0" : "opacity-0 translate-y-6"}`}
          >
            Dustin DeLisle
          </h1>
          <p
            className={`mb-2 text-lg font-medium text-gold-light transition-all duration-700 delay-200 md:text-xl ${loaded ? "opacity-100 translate-y-0" : "opacity-0 translate-y-4"}`}
          >
            Carrier Sales Zone Manager
          </p>
          <p
            className={`mb-8 max-w-md text-sm leading-relaxed text-gray-300 transition-all duration-700 delay-300 md:text-base ${loaded ? "opacity-100 translate-y-0" : "opacity-0 translate-y-4"}`}
          >
            Driving growth in logistics brokerage. Proven leader in carrier
            &amp; customer sales with a track record of high goal attainment and
            rapid portfolio growth.
          </p>

          {/* Stats */}
          <div className="mb-8 flex justify-center gap-6 md:justify-start md:gap-10">
            {[
              { number: "6+", label: "Years Experience" },
              { number: "100+", label: "Client Relationships" },
              { number: "5", label: "Leading Firms" },
            ].map((stat, i) => (
              <div
                key={stat.label}
                className={`text-center transition-all duration-700 ${loaded ? "opacity-100 translate-y-0" : "opacity-0 translate-y-4"}`}
                style={{ transitionDelay: `${400 + i * 100}ms` }}
              >
                <p className="text-2xl font-bold text-white md:text-3xl">
                  {stat.number}
                </p>
                <p className="mt-0.5 text-[10px] font-medium uppercase tracking-wide text-gray-400">
                  {stat.label}
                </p>
              </div>
            ))}
          </div>

          {/* CTAs */}
          <div
            className={`flex flex-col items-center gap-3 transition-all duration-700 delay-700 sm:flex-row md:items-start ${loaded ? "opacity-100 translate-y-0" : "opacity-0 translate-y-4"}`}
          >
            <a
              href="#experience"
              className="rounded-full bg-accent px-7 py-3 text-sm font-semibold text-white transition-all hover:bg-accent-dark hover:shadow-lg hover:shadow-accent/25"
            >
              View Experience
            </a>
            <a
              href="#contact"
              className="rounded-full border-2 border-white/30 px-7 py-3 text-sm font-semibold text-white transition-all hover:border-white/60 hover:bg-white/10"
            >
              Contact Me
            </a>
          </div>
        </div>

        {/* Portrait */}
        <div
          className={`relative flex-shrink-0 transition-all duration-1000 delay-300 ${loaded ? "opacity-100 translate-x-0 scale-100" : "opacity-0 translate-x-8 scale-95"}`}
        >
          <div className="absolute -inset-4 rounded-3xl bg-accent/20 blur-2xl" />
          <div className="relative h-[22rem] w-72 overflow-hidden rounded-2xl border-2 border-white/15 shadow-2xl ring-1 ring-white/5 md:h-[32rem] md:w-[26rem]">
            <Image
              src="/dustin.png"
              alt="Dustin DeLisle"
              fill
              className="object-cover object-top"
              priority
            />
          </div>
        </div>
      </div>

      {/* Scroll indicator */}
      <div
        className={`absolute bottom-6 left-1/2 flex -translate-x-1/2 flex-col items-center gap-2 transition-all duration-700 delay-1000 ${loaded ? "opacity-100" : "opacity-0"}`}
      >
        <span className="text-[10px] font-medium uppercase tracking-widest text-white/40">
          Scroll
        </span>
        <div className="h-6 w-px animate-pulse bg-white/25" />
      </div>
    </section>
  );
}
