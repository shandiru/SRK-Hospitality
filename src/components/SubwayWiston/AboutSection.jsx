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
              src="/subway2.avif"
              alt="The Walnut Tree Inn"
              className="w-full h-100 object-cover"
            />
            <div
              className="text-center text-lg md:text-xl font-semibold py-3 rounded-b-xl"
              style={{
                backgroundColor: brandGold,
                color: "#111111",
              }}
            >
              Subway Wigston
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
            At your local Subway®, Wigston, when we say you can Make It What You Want®, we really mean it. Create your own sub, salad, or wrap and fill it with everything you love.
Craving something meaty but want to skip the olives? Go ahead. Want to turn up the heat with extra hot sauce? Absolutely. Extra cheese on top of extra cheese? If that’s your thing, we’ve got you covered. Choose from our delicious range of meats or plant-based alternatives, add your favourite cheeses, pile on freshly cut veggies, and finish with one of our signature sauces.
            </p>

            <p>
            All Subway® stores are independently owned, with talented Sandwich Artists™ ready to take your order in-store, for collection via our Subcard® app, or delivered straight to your door through Just Eat, Uber Eats, or Deliveroo. So go meaty, go plant-based, go spicy, go saucy — or just go ALL OUT.
            </p>

          </div>
        </div>
      </div>
    </section>
  );
}
