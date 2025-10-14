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
              src="/fusic-about.webp"
              alt="FUSIC - Leicester Restaurant"
              className="w-full h-auto object-cover"
            />
            <div
              className="text-center text-lg md:text-xl font-semibold py-3 rounded-b-xl"
              style={{
                backgroundColor: brandGold,
                color: "#111111",
              }}
            >
              FUSIC – Leicester
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
            About Us
          </h2>

          <div className="text-[17px] md:text-[18px] leading-relaxed space-y-5 text-[#333333] dark:text-[#E8E8E8] transition-all duration-300">
            <p>
              <strong>FUSIC Restaurant</strong> welcomes you to a unique dining experience that blends delicious cuisine with a lively atmosphere. 
              Our mission is simple — to bring people together over food that makes them happy.
            </p>

            <p>
              Whether you’re joining us for dinner, pre-ordering for convenience, or hosting a special event, 
              our team is dedicated to making your visit memorable.
            </p>

            <h3
              className="text-2xl font-bold mt-8 mb-3"
              style={{ color: brandGold }}
            >
              Private Events
            </h3>
            <p>
              Looking for the perfect venue for your next celebration? Our event space can host up to 70 guests — 
              ideal for birthdays, anniversaries, or any special gathering. 
              Enjoy modern décor, great music, and food that sets the mood for a truly unforgettable evening.
            </p>

            <h3
              className="text-2xl font-bold mt-8 mb-3"
              style={{ color: brandGold }}
            >
              Catering Services
            </h3>
            <p>
              Hosting an event elsewhere? Let us bring the flavour to you. 
              From traditional Indian classics to contemporary creations, our catering menu offers something for every palate. 
              We’ll handle the food — you enjoy the occasion.
            </p>

            <p>
              <strong>FUSIC – where flavour, fun, and friendship come together.</strong>
            </p>
          </div>
        </div>
      </div>
    </section>
  );
}
