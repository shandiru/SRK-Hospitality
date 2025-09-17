'use client';

export default function AboutSection() {
  return (
    <section className="bg-gradient-to-br from-white to-gray-100 pt-24 pb-20 px-4 md:px-12 lg:px-20">
      <div className="max-w-7xl mx-auto flex flex-col lg:flex-row items-center gap-14">
        
        {/* Left: Image */}
        <div className="w-full lg:w-1/2 flex justify-center">
          <div className="rounded-xl overflow-hidden shadow-2xl border border-gray-200 max-w-[600px] w-full bg-white">
            <img
              src="/freddies.png" // ⬅️ Replace with your actual image path
              alt="Freddies Desserts Exterior"
              className="w-full h-auto object-cover"
            />
            <div className="bg-[#cc4894] text-white text-center text-lg md:text-xl font-semibold py-3 rounded-b-xl">
              FREDDIES DESSERTS
            </div>
          </div>
        </div>

        {/* Right: Text Content */}
        <div className="w-full lg:w-1/2 text-center lg:text-left">
          <h2 className="text-4xl md:text-5xl font-extrabold text-[#222] underline underline-offset-8 decoration-[#cc4894] mb-8">
            Cooked With Love
          </h2>
          <div className="text-gray-700 text-[17px] md:text-[18px] leading-relaxed space-y-5">
            <p>
              Order food online from <strong>Freddies Desserts!</strong> It’s so easy to use, fast and convenient. You can now order online all your favourite dishes and many more delicious options.
            </p>
            <p>
              Enjoy tasty treats delivered straight to your door in no time at all. Whether you're craving something sweet or just want to indulge in a dessert, we've got you covered.
            </p>
            <p>
              We’re passionate about bringing smiles with every bite – thank you for choosing Freddies!
            </p>
          </div>
        </div>
      </div>
    </section>
  );
}
