'use client';

export default function AboutSection() {
  return (
    <section className="bg-gradient-to-br from-white to-gray-100 pt-24 pb-20 px-4 md:px-12 lg:px-20">
      <div className="max-w-7xl mx-auto flex flex-col lg:flex-row items-center gap-14">
        
        {/* Left: Image */}
        <div className="w-full lg:w-1/2 flex justify-center">
          <div className="rounded-xl overflow-hidden shadow-2xl border border-gray-200 max-w-[600px] w-full bg-white">
            <img
              src="/Bardosabout.png"
              alt="Bar Dos Hermanos Exterior"
              className="w-full h-auto object-cover"
            />
            <div className="bg-red-600 text-white text-center text-lg md:text-xl font-semibold py-3 rounded-b-xl">
              Bar Dos Hermanos
            </div>
          </div>
        </div>

        {/* Right: Text Content */}
        <div className="w-full lg:w-1/2 text-center lg:text-left">
          <h2 className="text-4xl md:text-5xl font-extrabold text-gray-900 underline underline-offset-8 decoration-red-600 mb-8">
            About Us
          </h2>
          <div className="text-gray-700 text-[17px] md:text-[18px] leading-relaxed space-y-5">
            <p>
              <strong>Bar Dos Hermanos</strong> is styled as a 1940’s Cuban American bar. First opened in 2002, 
              it boasts an extensive range of Cuban cocktails, premium draught and bottled beers including several 
              cask-conditioned ales along with world rums and chupitos, as well as a large range of quality wines 
              available by bottle or glass.
            </p>
            <p>
              Our bar is open seven days a week and operates a happy hour each day for those on a budget.
            </p>
            <p>
              Feeling hungry? You can pick up a mouth-watering range of Bar tapas.
            </p>
            <p>
              Don’t miss out on our homemade breakfast and brunch served every weekend. You can also hire our 
              venue exclusively for private parties and events.
            </p>
          </div>
        </div>
      </div>
    </section>
  );
}
