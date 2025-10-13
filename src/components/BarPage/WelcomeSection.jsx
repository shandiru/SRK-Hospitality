import React from "react";

export default function WelcomeSection() {
  const brandGold = "#DDB64E";

  return (
    <section className="relative w-full h-[80vh] font-[Playfair_Display]">
      {/* Background Image */}
      <img
        src="/Hero.png" // your hero image
        alt="1573 Bar & Grill"
        className="absolute inset-0 w-full h-full object-cover"
      />

      {/* Elegant Gold-Toned Overlay */}
      <div className="absolute inset-0 bg-gradient-to-b from-black/60 via-black/40 to-black/60" />

      {/* Content */}
      <div className="relative z-10 flex flex-col items-center justify-center h-full text-center px-6">
        <h1
          className="text-4xl sm:text-5xl md:text-6xl font-bold mb-4 tracking-wide"
          style={{
            color: brandGold,
            textShadow: "0 4px 15px rgba(0,0,0,0.5)",
          }}
        >
          Welcome To 1573
        </h1>

        <p
          className="text-lg sm:text-xl font-[Inter] max-w-2xl leading-relaxed mt-2"
          style={{
            color: "#F3F3F3",
            textShadow: "0 2px 10px rgba(0,0,0,0.4)",
          }}
        >
          Experience timeless dining and unforgettable moments at one of the
          Midlands’ most iconic restaurants.
        </p>

        {/* Optional Accent Line */}
        <div
          className="w-24 h-[3px] mt-6 rounded-full"
          style={{ backgroundColor: brandGold }}
        ></div>
      </div>
    </section>
  );
}
