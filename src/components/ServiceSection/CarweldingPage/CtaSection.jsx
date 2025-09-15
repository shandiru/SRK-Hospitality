import React from "react";
import { FaPhone } from "react-icons/fa";

export default function CtaSection() {
  return (
    <section className="py-20 bg-[#0d1525]">
      <div className="container mx-auto px-6 text-center">
        {/* Heading */}
        <h2 className="text-4xl font-bold text-white mb-6">
          Need Professional Car Welding?
        </h2>

        {/* Subtext */}
        <p className="text-lg md:text-xl text-gray-300 mb-8 max-w-2xl mx-auto">
          From simple repairs to complex fabrication, our skilled welders deliver
          quality results you can trust.
        </p>

        {/* Buttons */}
        <div className="flex flex-col sm:flex-row gap-4 justify-center">
          <button className="px-6 py-3 rounded-md text-white font-medium bg-blue-600 hover:bg-blue-700 transition-colors">
            Get Free Quote
          </button>

          <a
            href="https://wa.me/447123456789?text=Hi,%20I%20need%20car%20welding%20services"
            target="_blank"
            rel="noopener noreferrer"
            className="px-6 py-3 rounded-md text-white font-medium bg-green-600 hover:bg-green-700 flex items-center justify-center transition-colors"
          >
            <FaPhone className="w-4 h-4 mr-2" />
            WhatsApp Quote
          </a>
        </div>
      </div>
    </section>
  );
}
