'use client';
import React from "react";

export default function WelcomeSection() {
  const brandGold = "#DDB64E";

  return (
    <section className="relative w-full h-[100vh] font-[Playfair_Display]">
      {/* Background Image */}
      <img
        src="/Bardos.png"
        alt="Bar Dos Hermanos"
        className="absolute inset-0 w-full h-full object-cover"
      />

      {/* Elegant Gold-Toned Overlay */}
      <div className="absolute inset-0 bg-linear-to-b from-black/70 via-black/50 to-black/70" />

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
          BAR DOS HERMANOS
        </h1>

        {/* Subtitle */}
        <p
          className="text-lg sm:text-xl font-[Inter] max-w-2xl leading-relaxed mt-2"
          style={{
            color: "#F3F3F3",
            textShadow: "0 2px 10px rgba(0,0,0,0.5)",
          }}
        >
          A vibrant Cuban-inspired bar where rhythm, flavour, and passion
          come together in every cocktail and every beat.
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
