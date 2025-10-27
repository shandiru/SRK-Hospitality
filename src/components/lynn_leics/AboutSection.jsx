"use client";

import React from "react";

export default function AboutSection() {
  const brandGold = "#DDB64E";

  return (
    <section
      className="bg-gradient-to-br from-[#F5F7F8] to-[#E9ECEC] 
                 dark:from-[#0C0C0C] dark:to-[#111A1D] 
                 py-24 px-6 md:px-12 lg:px-20 transition-colors duration-700"
    >
      <div className="max-w-7xl mx-auto flex flex-col lg:flex-row items-center gap-14">
        {/* === LEFT: IMAGE === */}
        <div className="w-full lg:w-1/2 flex justify-center">
          <div
            className="rounded-xl overflow-hidden shadow-2xl border max-w-[600px] w-full 
                       transition-all duration-500 
                       bg-white dark:bg-[#0E1517] border-[#DDB64E]/40"
          >
            <img
              src="/lynn6.png"
              alt="The lynn"
              className="w-full h-auto object-cover"
            />
            <div
              className="text-center text-lg md:text-xl font-semibold py-3 rounded-b-xl"
              style={{
                backgroundColor: brandGold,
                color: "#111111",
              }}
            >
              The lynn
            </div>
          </div>
        </div>

        {/* === RIGHT: TEXT === */}
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

          <div
            className="text-[17px] md:text-[18px] leading-relaxed space-y-5 
                       text-[#333333] dark:text-[#E8E8E8] transition-all duration-300"
          >
            <p>
             Where sophistication meets unforgettable flavour
            </p>

            <p>
             Welcome to LYNN, Leicester’s premier destination for elevated dining and exquisite cocktails. Located in the heart of the city, we bring together impeccable culinary artistry, refined mixology, and a vibrant atmosphere that celebrates style and culture.
            </p>

            <p>
             Our chefs craft every dish with precision and passion, showcasing the finest seasonal ingredients and global influences. Our bar team curates a cocktail list that blends innovation with elegance, ensuring each sip delivers a memorable experience.
            </p>

            <p>
              Whether you join us for an intimate evening, a celebration with friends, or after-hours drinks, LYNN offers an experience defined by luxury, warmth, and attention to every detail.
            </p>

            <p>
              Indulge in the extraordinary. This is LYNN.
            </p>
          </div>
        </div>
      </div>
    </section>
  );
}
