'use client';

export default function AboutSection() {
  return (
    <section className="bg-gradient-to-br from-white to-gray-100 pt-24 pb-20 px-4 md:px-12 lg:px-20">
      <div className="max-w-7xl mx-auto flex flex-col lg:flex-row items-center gap-14">
        
        {/* Left: Image */}
        <div className="w-full lg:w-1/2 flex justify-center">
          <div className="rounded-xl overflow-hidden shadow-2xl border border-gray-200 max-w-[600px] w-full bg-white">
            <img
              src="/barcelonetarestaurant-about.jpg"
              alt="Barceloneta Exterior"
              className="w-full h-auto object-cover"
            />
            <div className="bg-red-600 text-white text-center text-lg md:text-xl font-semibold py-3 rounded-b-xl">
              Barceloneta
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
              In the popular suburb of Clarendon Park, just round the corner from the University of Leicester,
              and a short walk into the city’s centre, sits Barceloneta. Established in 1990, the restaurant
              serves authentic Mediterranean and Spanish tapas specialities, including wines, liqueurs and
              aperitifs.
            </p>
            <p>
              Committed to giving their customers a real flavour of Spanish dining, the restaurant promises a 
              buzzing atmosphere, perfect for big groups of people and catching up with friends.
            </p>
            <p>
              The restaurant is full of Spanish charm and packed with life and character. With a bar bursting
              full of Mediterranean drinks, and blossoming, colourful greenery adorning the uniquely decorated
              windows, Barceloneta is an eclectic taste of Spanish design.
            </p>
            <p>
              The beautifully patterned tiled bar and intimate dining space makes for the perfect environment to
              spend an evening with friends and family, sampling the food and drink, and enjoying the lively ambience.
            </p>
          </div>
        </div>
      </div>
    </section>
  );
}
