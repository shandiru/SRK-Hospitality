'use client';
import React from "react";

export default function WelcomeSection() {
  const brandGold = "#DDB64E";

  return (
    <section className="relative w-full h-[100vh] font-[Playfair_Display]">
      {/* Background Image */}
      <img
        src="/freddies-hero.png"
        alt="Freddie’s Dessert Lounge"
        className="absolute inset-0 w-full h-full object-cover"
      />

      {/* Elegant Gold-Toned Overlay */}
      <div className="absolute inset-0 bg-gradient-to-b from-black/70 via-black/50 to-black/70" />

      {/* Content */}
      <div className="relative z-10 flex flex-col items-center justify-center h-full text-center px-6">
        {/* Title */}
        <h1
          className="text-4xl sm:text-5xl md:text-6xl font-bold mb-4 tracking-wide"
          style={{
            color: brandGold,
            textShadow: "0 4px 15px rgba(0,0,0,0.6)",
          }}
        >
          FREDDIE’S
        </h1>

        {/* Subtitle */}
        <p
          className="text-lg sm:text-xl font-[Inter] max-w-2xl leading-relaxed mt-2"
          style={{
            color: "#F3F3F3",
            textShadow: "0 2px 10px rgba(0,0,0,0.5)",
          }}
        >
          Indulge in a world of irresistible desserts and handcrafted milkshakes — 
          where every treat is made with passion and a touch of luxury.
        </p>

        {/* Accent Line */}
        <div
          className="w-24 h-[3px] mt-6 rounded-full"
          style={{ backgroundColor: brandGold }}
        ></div>
      </div>
    </section>
  );
}
