'use client';
import React from "react";

export default function WelcomeSection() {
  const brandGold = "#DDB64E";

  return (
    <section className="relative w-full h-[100vh] font-[Playfair_Display] overflow-hidden">
      {/* Background Video */}
      <video
        autoPlay
        loop
        muted
        playsInline
        className="absolute inset-0 w-full h-full object-cover"
      >
        <source src="/fusic-back.mp4" type="video/mp4" />
        Your browser does not support the video tag.
      </video>

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
          FUSIC – Leicester
        </h1>

        {/* Subtitle */}
        <p
          className="text-lg sm:text-xl font-[Inter] max-w-2xl leading-relaxed mt-2"
          style={{
            color: "#F3F3F3",
            textShadow: "0 2px 10px rgba(0,0,0,0.5)",
          }}
        >
          Where smoky BBQ flavours meet urban beats — the ultimate grill house
          experience with a vibe like no other.
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
