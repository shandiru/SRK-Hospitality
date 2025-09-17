'use client';

export default function AboutSection() {
  return (
    <section className="bg-gradient-to-br from-white to-gray-100 pt-24 pb-20 px-4 md:px-12 lg:px-20">
      <div className="max-w-7xl mx-auto flex flex-col lg:flex-row items-center gap-14">

        {/* Left: Image */}
        <div className="w-full lg:w-1/2 flex justify-center">
          <div className="rounded-xl overflow-hidden shadow-2xl border border-gray-200 max-w-[600px] w-full bg-white">
            <img
              src="/fusic-about.webp" // ⬅️ Replace with your actual image path
              alt="Aspects Restaurant Exterior"
              className="w-full h-auto object-cover"
            />
            <div className="bg-[#cc4894] text-white text-center text-lg md:text-xl font-semibold py-3 rounded-b-xl">
              FUSIC - Leicester
            </div>
          </div>
        </div>

        {/* Right: Text Content */}
        <div className="w-full lg:w-1/2 text-center lg:text-left">
          <h2 className="text-4xl md:text-5xl font-extrabold text-[#222] underline underline-offset-8 decoration-[#cc4894] mb-8">
            About Us
          </h2>
          <div className="text-gray-700 text-[17px] md:text-[18px] leading-relaxed space-y-5">
            <p>
              <strong>FUSIC - Restaurant</strong>
            </p>
            <p>
              We look forward to your visit or pre-order. We take pride in our cuisine, and our mission is to make people happy through our food. Thank you and hopefully see you soon! Your FUSIC - Restaurant Team
            </p>
            <strong>
              Our event space - perfect for parties upto 70 people.
            </strong>
            <p>
              Are you looking for the perfect venue for your next event? Whether it's an intimate birthday celebration or a grand party, our event space has everything you need! Our spacious and versatile area adapts to every occasion, making your event unforgettable.
            </p>
            <strong>Catering</strong>
            <p>
              Are you hosting a special event and looking for delicious Indian cuisine? Look no further! Our Indian restaurant offers outstanding catering services that will impress your guests. From traditional dishes to modern creations, our catering menu has something for everyone. Let us take care of the food while you enjoy your event. Contact us today to discuss your catering needs and make your event a memorable one!
            </p>
          </div>
        </div>
      </div>
    </section>
  );
}
