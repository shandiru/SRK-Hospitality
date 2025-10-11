'use client';

import React, { useEffect, useState } from "react";
import AOS from "aos";
import "aos/dist/aos.css";

export default function ContactSection() {
  const [active, setActive] = useState(false);

  useEffect(() => {
    AOS.init({
      duration: 1000,
      easing: "ease-in-out",
      once: false,
      mirror: true, // triggers on scroll up and down
      offset: 100,
    });
  }, []);

  // Handle mobile tap effect for the button
  const handleTap = () => {
    setActive(true);
    setTimeout(() => setActive(false), 600);
  };

  return (
    <section className="bg-white py-20 px-4 overflow-hidden">
      <div
        className="max-w-3xl mx-auto text-center"
        data-aos="fade-up"
      >
        {/* Heading */}
        <div
          className="flex items-center justify-center mb-10"
          data-aos="zoom-in"
        >
          <div className="flex-grow border-t border-[#DDB64E]/50"></div>
          <h2 className="px-4 text-3xl md:text-4xl font-semibold text-[#DDB64E]">
            Contact Us
          </h2>
          <div className="flex-grow border-t border-[#DDB64E]/50"></div>
        </div>

        {/* Content */}
        <p
          className="text-lg text-gray-800 font-medium mb-2"
          data-aos="fade-up"
          data-aos-delay="100"
        >
          Better yet, see us in person!
        </p>

        <p
          className="text-gray-600 max-w-2xl mx-auto mb-8"
          data-aos="fade-up"
          data-aos-delay="200"
        >
          We love our customers, so feel free to visit during normal business hours.
          Please check each venue for all the opening hours.
        </p>

        {/* Company Info */}
        <div data-aos="fade-up" data-aos-delay="300">
          <h3 className="text-xl font-semibold text-gray-900">SRK Hospitality</h3>
          <p className="text-gray-700 mb-10">East Midlands</p>
        </div>

        {/* Button */}
        <div data-aos="fade-up" data-aos-delay="400">
          <a
            href="mailto:info@srkhospitality.co.uk"
            onClick={handleTap}
            onMouseDown={handleTap}
            className={`inline-block font-semibold px-8 py-3 rounded-full shadow-md transition-all duration-500 ease-out transform hover:-translate-y-1 hover:shadow-[0_8px_25px_rgba(221,182,78,0.4)] ${
              active
                ? "bg-[#DDB64E] shadow-[0_8px_25px_rgba(221,182,78,0.5)] scale-[1.03] text-white"
                : "bg-[#DDB64E] text-white hover:bg-[#caa63e]"
            }`}
          >
            DROP US A LINE!
          </a>
        </div>
      </div>
    </section>
  );
}
