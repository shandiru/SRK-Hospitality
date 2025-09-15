export default function VenuesHero() {
  return (
    <section className="relative h-[60vh] flex items-center justify-center">
      <img
        src="/hero-bg.jpg"
        alt="Venue background"
        className="absolute inset-0 w-full h-full object-cover brightness-50"
      />
      <div className="relative z-10 text-center text-white px-4">
        <h1 className="text-4xl md:text-6xl font-heading font-bold">
          DISCOVER OUR VENUES
        </h1>
        <p className="mt-4 text-lg md:text-xl text-gray-200">
          From fine dining to vibrant nightlife
        </p>
      </div>
    </section>
  );
}
