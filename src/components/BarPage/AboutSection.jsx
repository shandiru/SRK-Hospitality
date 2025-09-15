'use client';

export default function AboutSection() {
  return (
    <section className="bg-gradient-to-br from-white to-gray-100 pt-24 pb-20 px-4 md:px-12 lg:px-20">
      <div className="max-w-7xl mx-auto flex flex-col lg:flex-row items-center gap-14">
        
        {/* Left: Image */}
        <div className="w-full lg:w-1/2 flex justify-center">
          <div className="rounded-xl overflow-hidden shadow-2xl border border-gray-200 max-w-[600px] w-full bg-white">
            <img
              src="/about.png"
              alt="1573 Bar & Grill Exterior"
              className="w-full h-auto object-cover"
            />
            <div className="bg-red-600 text-white text-center text-lg md:text-xl font-semibold py-3 rounded-b-xl">
              1573 Bar & Restaurant
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
              The Old (Free) Grammar School is a Grade II* listed building built originally in 1573.
              The building as it stands today is one of the oldest school buildings in England and
              is now home to 1573 Bar & Grill, a fresh new concept for dining and drinks at Highcross Leicester.
            </p>
            <p>
              The 1573 Bar & Grill is a local independent restaurant first opened in August 2009
              and is located in Grammar School Court within the external area.
            </p>
            <p>
              Meals are prepared using only the best fresh seasonal produce; with fine wines &
              champagnes, serving light bites, lunch & dinner.
            </p>
            <p>
              In our unique surroundings we promise to deliver to you a fantastic meal, in a warm friendly,
              relaxed atmosphere.
            </p>
            <p>
              The menu includes Steaks, Seafood, Burgers, Open sandwiches and fresh salads, perfectly char-grilled
              with a selection of mouth watering sides and a selection of sauces from the world so you can
              choose your flavor of the day.
            </p>
            <p>Plenty of vegetarian, vegan options available.</p>
            <p>
              Situated at the front of the building is our benched terraced area where you can enjoy drinks
              and dining overlooking the external area of HighCross.
            </p>
          </div>
        </div>
      </div>
    </section>
  );
}
