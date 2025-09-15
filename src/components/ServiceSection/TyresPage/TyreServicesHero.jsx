import React from "react";
import { FaCar, FaPhone } from "react-icons/fa";

export default function TyreServicesHero() {
  return (
    <section className="relative py-24 bg-[#0d1525]">
      <div className="container mx-auto px-6">
        <div className="text-center max-w-4xl mx-auto">
          {/* Top Label */}
          <div className="inline-flex items-center border border-blue-500 text-blue-400 bg-blue-500/10 px-4 py-1.5 rounded-full mb-6 text-sm">
            <FaCar className="w-4 h-4 mr-2" />
            Professional Tyre Services
          </div>

          {/* Title */}
          <h1 className="text-4xl sm:text-5xl lg:text-6xl font-bold mb-6">
            <span className="text-blue-400">Tyre</span>{" "}
            <span className="text-white">Services</span>
          </h1>

          {/* Description */}
          <p className="text-base sm:text-lg md:text-xl text-gray-300 mb-10 max-w-3xl mx-auto leading-relaxed">
            Professional tyre fitting, balancing, and alignment services for all vehicle types.
            We stock a wide range of premium tyres and offer competitive prices with expert
            installation.
          </p>

          {/* Buttons */}
          <div className="flex flex-col sm:flex-row gap-4 justify-center">
            {/* Get Tyre Quote Button */}
            <a
              href="/contact" // 👈 change this to your target link or section id (e.g. "#quote-form")
              className="bg-blue-600 hover:bg-blue-700 text-white font-medium px-6 py-3 rounded-lg text-lg shadow-md transition-colors text-center"
            >
              Get Tyre Quote
            </a>

            {/* WhatsApp Button */}
            <a
              href="https://wa.me/447123456789?text=Hi,%20I%20need%20tyre%20services%20at%20my%20location"
              target="_blank"
              rel="noopener noreferrer"
              className="bg-green-600 hover:bg-green-700 text-white font-medium px-6 py-3 rounded-lg text-lg flex items-center justify-center shadow-md transition-colors"
            >
              <FaPhone className="w-4 h-4 mr-2" />
              WhatsApp Us
            </a>
          </div>
        </div>
      </div>
    </section>
  );
}
