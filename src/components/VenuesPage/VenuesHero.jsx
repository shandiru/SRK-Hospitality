"use client";

export default function VenuesHero() {
  return (
    <section className="relative h-[70vh] md:h-[80vh] flex items-center justify-center overflow-hidden">
      {/* Background Image */}
      <img
        src="/hero-bg.jpg"
        alt="Venue background"
        className="absolute inset-0 w-full h-full object-cover brightness-[0.55]"
      />

      {/* Overlay Content */}
      <div className="relative z-10 text-center text-white px-6">
        <h1 className="text-4xl md:text-6xl lg:text-7xl font-[Playfair_Display] font-bold tracking-wide drop-shadow-[0_2px_8px_rgba(0,0,0,0.6)]">
          DISCOVER OUR VENUES
        </h1>

        <p className="mt-5 text-lg md:text-xl lg:text-2xl font-[Inter] text-gray-200 leading-relaxed tracking-wide">
          From fine dining to vibrant nightlife
        </p>
      </div>
    </section>
  );
}
