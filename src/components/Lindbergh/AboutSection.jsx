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
              src="/walnut-about.jpg"
              alt="The Walnut Tree Inn"
              className="w-full h-auto object-cover"
            />
            <div
              className="text-center text-lg md:text-xl font-semibold py-3 rounded-b-xl"
              style={{
                backgroundColor: brandGold,
                color: "#111111",
              }}
            >
              The Walnut Tree Inn
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
              Nestled in the heart of Blisworth, The Walnut Tree Inn blends rustic
              charm with contemporary comfort — offering a perfect spot to dine,
              relax, and stay.
            </p>

            <p>
              Our recently refurbished inn features 11 beautifully appointed rooms,
              a modern British restaurant, and a warm bar atmosphere where every
              guest feels at home.
            </p>

            <p>
              Whether you're joining us for a family celebration, a business event,
              or a quiet weekend escape, we promise a welcoming environment and
              exceptional hospitality.
            </p>

            <h3
              className="text-2xl font-bold mt-10 mb-3 text-center lg:text-left"
              style={{ color: brandGold }}
            >
              Award-Winning Hospitality
            </h3>

            <p>
              We’re proud recipients of TripAdvisor’s Certificate of Excellence for
              seven consecutive years — a reflection of our dedication to quality,
              comfort, and genuine care for our guests.
            </p>
          </div>
        </div>
      </div>
    </section>
  );
}
