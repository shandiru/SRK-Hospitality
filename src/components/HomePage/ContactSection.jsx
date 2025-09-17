'use client';

export default function ContactSection() {
  return (
    <section className="bg-white py-20 px-4">
      <div className="max-w-3xl mx-auto text-center">

        {/* Heading */}
        <div className="flex items-center justify-center mb-10">
          <div className="flex-grow border-t border-[#DDB64E]/50"></div>
          <h2 className="px-4 text-3xl md:text-4xl font-semibold text-[#DDB64E]">
            Contact Us
          </h2>
          <div className="flex-grow border-t border-[#DDB64E]/50"></div>
        </div>

        {/* Content */}
        <p className="text-lg text-gray-800 font-medium mb-2">
          Better yet, see us in person!
        </p>

        <p className="text-gray-600 max-w-2xl mx-auto mb-8">
          We love our customers, so feel free to visit during normal business hours.
          Please check each venue for all the opening hours.
        </p>

        {/* Company Info */}
        <h3 className="text-xl font-semibold text-gray-900">SRK Hospitality</h3>
        <p className="text-gray-700 mb-10">East Midlands</p>

        {/* Button */}
        <a
          href="mailto:info@srkhospitality.co.uk"
          className="inline-block bg-[#DDB64E] text-white font-semibold px-8 py-3 rounded-full shadow-md hover:bg-[#caa63e] transition duration-300"
        >
          DROP US A LINE!
        </a>

      </div>
    </section>
  );
}
