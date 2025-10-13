'use client';

import React, { useEffect } from "react";

export default function AboutSection() {
  const brandGold = "#DDB64E";

  // ✅ Auto Dark/Light Mode Detection
  useEffect(() => {
    const media = window.matchMedia("(prefers-color-scheme: dark)");
    const html = document.documentElement;

    if (media.matches) html.classList.add("dark");
    else html.classList.remove("dark");

    const listener = (e) => {
      if (e.matches) html.classList.add("dark");
      else html.classList.remove("dark");
    };

    media.addEventListener("change", listener);
    return () => media.removeEventListener("change", listener);
  }, []);

  return (
    <section className="bg-gradient-to-br from-[#F5F7F8] to-[#E9ECEC] dark:from-[#0C0C0C] dark:to-[#111A1D] pt-24 pb-20 px-4 md:px-12 lg:px-20 transition-colors duration-700">
      <div className="max-w-7xl mx-auto flex flex-col lg:flex-row items-center gap-14">
        
        {/* Left Image */}
        <div className="w-full lg:w-1/2 flex justify-center">
          <div className="rounded-xl overflow-hidden shadow-2xl border max-w-[600px] w-full transition-all duration-500 bg-white dark:bg-[#0E1517] border-[#DDB64E]/40">
            <img
              src="/toluca-about.webp"
              alt="Toluca Mexican Bar & Grill"
              className="w-full h-auto object-cover"
            />
            <div
              className="text-center text-lg md:text-xl font-semibold py-3 rounded-b-xl"
              style={{
                backgroundColor: brandGold,
                color: "#111111",
              }}
            >
              Toluca Mexican Bar & Grill
            </div>
          </div>
        </div>

        {/* Right Content */}
        <div className="w-full lg:w-1/2 text-center lg:text-left">
          <h2
            className="text-4xl md:text-5xl font-extrabold mb-8 underline underline-offset-[10px]"
            style={{
              color: brandGold,
              textDecorationColor: brandGold,
            }}
          >
            About Us
          </h2>

          <div className="text-[17px] md:text-[18px] leading-relaxed space-y-5 text-[#333333] dark:text-[#E8E8E8] transition-all duration-300">
            <p className="font-medium text-lg">
              A Local Favourite with a Global Welcome
            </p>
            <p>
              Nestled in the heart of Lichfield, <strong>Toluca Mexican Bar & Grill</strong> brings a vibrant 
              slice of Mexico to your table. It’s the go-to spot for locals craving bold flavours, 
              colourful vibes, and good times.
            </p>
            <p>
              Our menu celebrates authentic Mexican cuisine — from sizzling fajitas and tacos to signature 
              loaded fries and freshly mixed margaritas. Every dish is crafted with care, combining rich 
              tradition with modern twists.
            </p>
            <p>
              The atmosphere? Pure fiesta. With live music every weekend, Toluca transforms from a 
              restaurant into a celebration — where laughter, rhythm, and flavour come together.
            </p>
            <p>
              Whether you’re joining us for a laid-back meal, a quick takeaway, or a lively night out with 
              friends, Toluca is where warmth, spice, and soul meet.
            </p>
            <p>
              <strong>¡Bienvenidos a Toluca! — Experience Mexico in the heart of England.</strong>
            </p>
          </div>
        </div>
      </div>
    </section>
  );
}
