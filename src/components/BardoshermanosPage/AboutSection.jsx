'use client';

import React from "react";

export default function AboutSection() {
  const brandGold = "#DDB64E";

  return (
    <section className="bg-linear-to-br from-[#F5F7F8] to-[#E9ECEC] dark:from-[#0C0C0C] dark:to-[#111A1D] pt-24 pb-20 px-4 md:px-12 lg:px-20 transition-colors duration-700">
      <div className="max-w-7xl mx-auto flex flex-col lg:flex-row items-center gap-14">
        
        {/* Left Image */}
        <div className="w-full lg:w-1/2 flex justify-center">
          <div className="rounded-xl overflow-hidden shadow-2xl border max-w-[600px] w-full transition-all duration-500 hover:scale-[1.02] bg-white dark:bg-[#0E1517] border-[#DDB64E]/40">
            <img
              src="/Bardosabout.png"
              alt="Exterior of Bar Dos Hermanos Cuban-themed bar in Leicester"
              className="w-full h-auto object-cover"
            />
            <div
              className="text-center text-lg md:text-xl font-semibold py-3 rounded-b-xl"
              style={{
                backgroundColor: brandGold,
                color: "#111111",
              }}
            >
              Bar Dos Hermanos
            </div>
          </div>
        </div>

        {/* Right Text */}
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
            <p>
              <strong>Bar Dos Hermanos</strong> brings the vibrant spirit of 1940’s Cuba to Leicester.  
              Established in 2002, it features an extensive selection of Cuban cocktails, world-class rums,  
              premium draught beers, and hand-picked wines — all served in a timeless art-deco setting.
            </p>
            <p>
              Open seven days a week, our lively bar offers daily happy hours for those looking to relax in style without compromise.
            </p>
            <p>
              Feeling hungry? Treat yourself to a mouth-watering selection of authentic Spanish and Cuban tapas paired perfectly with your favourite drink.
            </p>
            <p>
              Join us for homemade breakfast and brunch every weekend or hire our venue for private parties and exclusive events — complete with signature cocktails and music that keep the Cuban energy alive all night.
            </p>
          </div>
        </div>
      </div>
    </section>
  );
}
