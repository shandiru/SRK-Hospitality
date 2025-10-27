"use client";

import React from "react";

export default function AboutSection() {
  const brandGold = "#E1B43B"; // Logo gold color

  return (
    <section
      className="relative pt-24 pb-24 px-6 md:px-12 lg:px-20 transition-colors duration-700 
                 bg-gradient-to-br from-[#FFFFFF] to-[#F8F8F8] dark:from-[#0D0D0D] dark:to-[#1B1B1B]"
    >
      {/* Soft gold glow behind content */}
      <div
        className="absolute inset-0 opacity-[0.05] pointer-events-none"
        style={{
          background: `radial-gradient(circle at center, ${brandGold} 0%, transparent 70%)`,
        }}
      ></div>

      <div className="relative max-w-7xl mx-auto flex flex-col lg:flex-row items-center gap-16">
        {/* === LEFT: IMAGE === */}
        <div className="w-full lg:w-1/2 flex justify-center">
          <div
            className="rounded-2xl overflow-hidden shadow-xl max-w-[600px] w-full border 
                       transition-all duration-500 group 
                       bg-white border-[#E1B43B]/20 dark:bg-[#111] dark:border-[#E1B43B]/40"
          >
            <div className="relative">
              <img
                src="/terrace1.webp"
                alt="The Terrace"
                className="w-full h-auto object-cover transform group-hover:scale-[1.02] transition-transform duration-700 ease-out"
              />
              <div
                className="absolute bottom-0 left-0 w-full text-center text-white text-lg md:text-xl font-semibold py-3 backdrop-blur-md"
                style={{
                  background: `linear-gradient(90deg, ${brandGold}, ${brandGold}D0)`,
                }}
              >
                The Terrace
              </div>
            </div>
          </div>
        </div>

        {/* === RIGHT: TEXT === */}
        <div className="w-full lg:w-1/2 text-center lg:text-left relative">
          <h2
            className="text-4xl md:text-5xl font-[Playfair_Display] font-bold mb-8 tracking-tight 
                       underline underline-offset-[10px] text-[#111111] dark:text-white"
            style={{
              textDecorationColor: brandGold,
            }}
          >
            About Us
          </h2>

          <div
            className="text-[17px] md:text-[18px] leading-relaxed space-y-5 font-[Inter] 
                       text-[#333333] dark:text-[#EAEAEA]"
          >
            <p>
              The Terrace Restaurant is a popular multi-cuisine restaurant chain operated by the Hospitality Division of Thumbay Group. The first restaurant was opened on 12th March, 2010. It won the internationally acclaimed HACCP (Hazard Analysis Control Point) certification, which is accredited by the Dubai Accreditation Center (DAC).
            </p>

            <p>
              The Terrace products and menus are prepared by skillful, specialized, and experienced chefs and nutritionists to help cater healthy and delicious food. What sets Terrace apart is the attention to detail and the focus on quality. From maintaining stringent food preparation standards to creating the perfect ambience, the team is extremely passionate about executing everything to the highest standards.
            </p>
          </div>
        </div>
      </div>
    </section>
  );
}
