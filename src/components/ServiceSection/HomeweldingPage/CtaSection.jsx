import React from "react";
import { FaPhone } from "react-icons/fa";

export default function CtaSection() {
  return (
    <section className="py-20 bg-[#0d1525]">
      <div className="container mx-auto px-6 text-center">
        <h2 className="text-4xl font-bold text-white mb-6">
          Need Mobile Welding Services?
        </h2>

        <p className="text-lg md:text-xl text-gray-300 mb-8 max-w-2xl mx-auto">
          We bring professional welding services directly to you. Contact us for a
          quote and convenient scheduling.
        </p>

        <div className="flex flex-col sm:flex-row gap-4 justify-center">
          <button className="px-6 py-3 rounded-md text-white font-medium bg-blue-600 hover:bg-blue-700 transition-colors">
            Book Mobile Service
          </button>

          <a
            href="https://wa.me/447123456789?text=Hi,%20I%20need%20mobile%20welding%20services%20at%20my%20location"
            target="_blank"
            rel="noopener noreferrer"
            className="px-6 py-3 rounded-md text-white font-medium bg-green-600 hover:bg-green-700 flex items-center justify-center transition-colors"
          >
            <FaPhone className="w-4 h-4 mr-2" />
            WhatsApp for Quote
          </a>
        </div>
      </div>
    </section>
  );
}
