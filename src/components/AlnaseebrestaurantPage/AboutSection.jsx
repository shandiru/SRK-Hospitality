'use client';

import React from "react";

export default function AboutSection() {
  const brandGold = "#DDB64E";

  return (
    <section className="bg-gradient-to-br from-[#F5F7F8] to-[#E9ECEC] dark:from-[#0C0C0C] dark:to-[#111A1D] pt-24 pb-20 px-4 md:px-12 lg:px-20 transition-colors duration-700">
      <div className="max-w-7xl mx-auto flex flex-col lg:flex-row items-center gap-14">
        
        {/* Left: Image */}
        <div className="w-full lg:w-1/2 flex justify-center">
          <div className="rounded-xl overflow-hidden shadow-2xl border max-w-[600px] w-full transition-all duration-500 hover:scale-[1.02] bg-white dark:bg-[#0E1517] border-[#DDB64E]/40">
            <img
              src="/AL-nasee-about.png"
              alt="Al Naseeb Restaurant Exterior"
              className="w-full h-auto object-cover"
            />
            <div
              className="text-center text-lg md:text-xl font-semibold py-3 rounded-b-xl"
              style={{
                backgroundColor: brandGold,
                color: "#111111",
              }}
            >
              Al Naseeb
            </div>
          </div>
        </div>

        {/* Right: Text Content */}
        <div className="w-full lg:w-1/2 text-center lg:text-left">
          <h2
            className="text-4xl md:text-5xl font-extrabold mb-8 underline underline-offset-[10px]"
            style={{
              color: brandGold,
              textDecorationColor: brandGold,
            }}
          >
            Welcome to Al Naseeb
          </h2>

          <div className="text-[17px] md:text-[18px] leading-relaxed space-y-5 text-[#333333] dark:text-[#E8E8E8] transition-all duration-300">
            <p>
              At <strong>Al Naseeb</strong>, we believe that every meal should be more than just dining — 
              it should be an experience filled with warmth, flavour, and connection.
            </p>
            <p>
              Our talented chefs craft each dish using only the finest ingredients, 
              blending traditional recipes with modern flair to bring out the best of Indian cuisine. 
              Every bite is a celebration of taste and tradition.
            </p>
            <p>
              Whether you’re enjoying a family dinner, a friendly catch-up, or a special occasion, 
              our welcoming atmosphere and dedicated team ensure that every visit feels memorable.
            </p>
            <p>
              Prefer to dine at home? We also deliver, bringing the rich flavours of Al Naseeb 
              straight to your doorstep — fresh, fast, and full of love.
            </p>
          </div>
        </div>
      </div>
    </section>
  );
}
