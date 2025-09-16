'use client';

export default function AboutSection() {
  return (
    <section className="bg-gradient-to-br from-white to-gray-100 pt-24 pb-20 px-4 md:px-12 lg:px-20">
      <div className="max-w-7xl mx-auto flex flex-col lg:flex-row items-center gap-14">
        
        {/* Left: Image */}
        <div className="w-full lg:w-1/2 flex justify-center">
          <div className="rounded-xl overflow-hidden shadow-2xl border border-gray-200 max-w-[600px] w-full bg-white">
            <img
              src="/AL-nasee-about.png" // 🔁 Change this to your correct Al Naseeb image path
              alt="Al Naseeb Exterior"
              className="w-full h-auto object-cover"
            />
            <div className="bg-red-600 text-white text-center text-lg md:text-xl font-semibold py-3 rounded-b-xl">
              AL NASEEB
            </div>
          </div>
        </div>

        {/* Right: Text Content */}
        <div className="w-full lg:w-1/2 text-center lg:text-left">
          <h2 className="text-4xl md:text-5xl font-extrabold text-gray-900 underline underline-offset-8 decoration-red-600 mb-8">
            Welcome to Al Naseeb!
          </h2>
          <div className="text-gray-700 text-[17px] md:text-[18px] leading-relaxed space-y-5">
            <p>
              Our culinary team takes pride in crafting delectable dishes using the finest ingredients, ensuring that every bite is a flavor-packed delight.
              But it's not just about the food—it's about creating a warm and inviting ambiance where laughter echoes, conversations flow, and friendships are nurtured.
            </p>
            <p>
              We invite you to gather your loved ones, share a meal, and savor the moments that truly matter. Come to Al Naseeb and let the combination of good food, excellent service, and cherished company create an experience that will leave a smile on your face and your heart full.
            </p>
            <p>
              We also deliver, bringing the goodness of Al Naseeb food right to your doorstep.
            </p>
          </div>
        </div>
      </div>
    </section>
  );
}
