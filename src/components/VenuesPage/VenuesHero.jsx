"use client";

export default function VenuesHero() {
  const brandGold = "#DDB64E";

  return (
    <section className="relative h-[100vh] md:h-[100vh] flex items-center justify-center overflow-hidden font-[Inter]">
      {/* Background Image */}
      <img
        src="/hero-bg.jpg"
        alt="Venue background"
        className="absolute inset-0 w-full h-full object-cover brightness-[0.55]"
      />

      {/* Subtle Gold Gradient Overlay */}
      <div
        className="absolute inset-0 opacity-70"
        style={{
          background: `linear-gradient(to bottom right, rgba(0,0,0,0.6), rgba(221,182,78,0.15))`,
        }}
      ></div>

      {/* Overlay Content */}
      <div className="relative z-10 text-center text-white px-6">
        <h1 className="text-4xl md:text-6xl lg:text-7xl font-[Playfair_Display] font-bold tracking-wide drop-shadow-[0_2px_8px_rgba(0,0,0,0.6)]">
          DISCOVER OUR VENUES
        </h1>

        <p className="mt-5 text-lg md:text-xl lg:text-2xl font-[Inter] text-[#F2F2F2] leading-relaxed tracking-wide">
          From fine dining to vibrant nightlife
        </p>

        {/* Decorative Gold Line */}
        <div
          className="mt-8 mx-auto h-[4px] w-28 rounded-full"
          style={{
            backgroundColor: brandGold,
          }}
        ></div>
      </div>
    </section>
  );
}
