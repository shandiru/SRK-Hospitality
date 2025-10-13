"use client";

import React, { useEffect, useState } from "react";
import AOS from "aos";
import "aos/dist/aos.css";

export default function ContactSection() {
  const brandGold = "#DDB64E"; // only brand color
  const [active, setActive] = useState(false);

  useEffect(() => {
    AOS.init({
      duration: 1000,
      easing: "ease-in-out",
      once: true,
      offset: 80,
    });
  }, []);

  const handleTap = () => {
    setActive(true);
    setTimeout(() => setActive(false), 600);
  };

  return (
    <section className="py-20 px-6 md:px-12 bg-white overflow-hidden">
      <div
        className="max-w-3xl mx-auto text-center font-[Inter]"
        data-aos="fade-up"
      >
        {/* Header Line with Title */}
        <div
          className="flex items-center justify-center mb-12"
          data-aos="zoom-in"
        >
          <div className="flex-grow border-t border-[#DDB64E]/40"></div>
          <h2 className="px-6 text-3xl md:text-5xl font-[Playfair_Display] font-bold text-[#111111] tracking-wide">
            Contact Us
          </h2>
          <div className="flex-grow border-t border-[#DDB64E]/40"></div>
        </div>

        {/* Subtext */}
        <p
          className="text-lg md:text-xl text-[#111111] font-semibold mb-2"
          data-aos="fade-up"
          data-aos-delay="100"
        >
          Better yet, see us in person!
        </p>

        <p
          className="text-[#333333] text-base md:text-lg max-w-2xl mx-auto mb-10 leading-relaxed"
          data-aos="fade-up"
          data-aos-delay="200"
        >
          We love our customers, so feel free to visit during normal business hours.
          Please check each venue for all the opening hours.
        </p>

        {/* Company Info */}
        <div data-aos="fade-up" data-aos-delay="300">
          <h3 className="text-xl md:text-2xl font-[Playfair_Display] font-semibold text-[#111111] mb-1">
            SRK Hospitality
          </h3>
          <p className="text-[#333333] mb-12 text-base md:text-lg">
            East Midlands
          </p>
        </div>

        {/* Button */}
        <div data-aos="fade-up" data-aos-delay="400">
          <a
            href="mailto:info@srkhospitality.co.uk"
            onClick={handleTap}
            onMouseDown={handleTap}
            className={`inline-block font-[Inter] font-semibold px-10 py-3.5 rounded-full transition-all duration-500 ease-out transform tracking-wide ${
              active
                ? "bg-[#DDB64E] text-white shadow-[0_8px_25px_rgba(221,182,78,0.5)] scale-[1.03]"
                : "bg-[#DDB64E] text-black hover:bg-[#caa63e] hover:shadow-[0_8px_25px_rgba(221,182,78,0.3)] hover:-translate-y-1"
            }`}
          >
            DROP US A LINE!
          </a>
        </div>
      </div>
    </section>
  );
}
