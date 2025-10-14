"use client";
import React from "react";

export default function AboutSection() {
  const brandGold = "#DDB64E";

  return (
    <section
      className="bg-gradient-to-br from-[#F5F7F8] to-[#E9ECEC] 
                 dark:from-[#0C0C0C] dark:to-[#111A1D] 
                 pt-24 pb-20 px-4 md:px-12 lg:px-20 
                 transition-colors duration-700"
    >
      <div className="max-w-7xl mx-auto flex flex-col lg:flex-row items-center gap-14">
        {/* === LEFT: IMAGE === */}
        <div className="w-full lg:w-1/2 flex justify-center">
          <div
            className="rounded-xl overflow-hidden shadow-2xl border 
                       max-w-[600px] w-full transition-all duration-500 
                       bg-white dark:bg-[#0E1517] border-[#DDB64E]/40"
          >
            <img
              src="/barcelonetarestaurant-about.jpg"
              alt="Barceloneta Restaurant"
              className="w-full h-auto object-cover"
            />
            <div
              className="text-center text-lg md:text-xl font-semibold py-3 rounded-b-xl"
              style={{
                backgroundColor: brandGold,
                color: "#111111",
              }}
            >
              Barceloneta
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
              In the popular suburb of Clarendon Park, just round the corner
              from the University of Leicester, and a short walk into the city’s
              centre, sits Barceloneta. Established in 1990, the restaurant
              serves authentic Mediterranean and Spanish tapas specialities,
              including wines, liqueurs and aperitifs.
            </p>
            <p>
              Committed to giving their customers a real flavour of Spanish
              dining, the restaurant promises a buzzing atmosphere, perfect for
              big groups of people and catching up with friends.
            </p>
            <p>
              The restaurant is full of Spanish charm and packed with life and
              character. With a bar bursting full of Mediterranean drinks, and
              blossoming, colourful greenery adorning the uniquely decorated
              windows, Barceloneta is an eclectic taste of Spanish design.
            </p>
            <p>
              The beautifully patterned tiled bar and intimate dining space
              makes for the perfect environment to spend an evening with friends
              and family, sampling the food and drink, and enjoying the lively
              ambience.
            </p>
          </div>
        </div>
      </div>
    </section>
  );
}
