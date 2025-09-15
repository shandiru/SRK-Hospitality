import React from "react";
import { FaPhone } from "react-icons/fa";

export default function TyreCtaSection() {
  return (
    <section className="py-20 bg-[#0d1525]">
      <div className="container mx-auto px-6 text-center">
        {/* Heading */}
        <h2 className="text-4xl font-bold text-white mb-4">
          Need New Tyres?
        </h2>

        {/* Subtext */}
        <p className="text-lg text-gray-300 mb-8 max-w-2xl mx-auto">
          Get expert advice and competitive prices on premium tyres.
          Quick, efficient service guaranteed.
        </p>

        {/* Buttons */}
        <div className="flex flex-col sm:flex-row gap-4 justify-center">
          <button className="px-6 py-3 rounded-md text-white font-medium bg-blue-600 hover:bg-blue-700 transition-colors">
            Get Free Quote
          </button>

          <a
            href="https://wa.me/447123456789?text=Hi,%20I%20need%20new%20tyres%20for%20my%20vehicle"
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
