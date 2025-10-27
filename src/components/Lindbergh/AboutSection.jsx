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
              src="/lind4.png"
              alt="The Walnut Tree Inn"
              className="w-full h-110 object-cover"
            />
            <div
              className="text-center text-lg md:text-xl font-semibold py-3 rounded-b-xl"
              style={{
                backgroundColor: brandGold,
                color: "#111111",
              }}
            >
              Lindbergh's Sports bar
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
            className="text-[17px] md:text-[18px] leading-relaxed space-y-3 
                       text-[#333333] dark:text-[#E8E8E8] transition-all duration-300"
          >
            <p>
              Lindbergh's Sports Bar is a popular hangout spot for sports enthusiasts staying at the Grand Excelsior Hotel in Dubai's Deira district. The bar features multiple high-definition TVs showing a variety of sports events from around the world, including football, rugby, tennis, and more. Visitors can enjoy a wide selection of bar food and beverages while they cheer on their favorite teams. 
            </p>

            <p>
              The atmosphere is lively and casual, making it a great place to gather with friends or meet new people. Additionally, the bar hosts weekly live music performances and quiz nights, adding to its appeal. Overall, Lindbergh's Sports Bar is an excellent choice for anyone looking for a place to watch sports, enjoy food and drinks, and have a good time in Dubai.
            </p>
          </div>
        </div>
      </div>
    </section>
  );
}
