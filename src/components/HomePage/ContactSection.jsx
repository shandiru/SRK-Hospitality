"use client";

import React, { useEffect, useState } from "react";
import AOS from "aos";
import "aos/dist/aos.css";

export default function ContactSection() {
  const brandGold = "#DDB64E"; // brand color
  const [active, setActive] = useState(false);
  const [isDark, setIsDark] = useState(false);

  useEffect(() => {
    AOS.init({
      duration: 1000,
      easing: "ease-in-out",
      once: true,
      offset: 80,
    });

    // Detect dark mode
    const root = document.documentElement;
    const dark = root.classList.contains("dark");
    setIsDark(dark);

    const observer = new MutationObserver(() => {
      setIsDark(root.classList.contains("dark"));
    });

    observer.observe(root, { attributes: true, attributeFilter: ["class"] });
    return () => observer.disconnect();
  }, []);

  const handleTap = () => {
    setActive(true);
    setTimeout(() => setActive(false), 600);
  };

  return (
    <section
      className={`py-20 px-6 md:px-12 overflow-hidden transition-colors duration-700 ${
        isDark ? "bg-[#0E1517]" : "bg-white"
      }`}
    >
      <div
        className="max-w-3xl mx-auto text-center font-[Inter]"
        data-aos="fade-up"
      >
        {/* Header Line with Title */}
        <div
          className="flex items-center justify-center mb-12"
          data-aos="zoom-in"
        >
          <div
            className={`flex-grow border-t transition-colors duration-500 ${
              isDark ? "border-[#DDB64E]/30" : "border-[#DDB64E]/40"
            }`}
          ></div>

          <h2
            className={`px-6 text-3xl md:text-5xl font-[Playfair_Display] font-bold tracking-wide transition-colors duration-500 ${
              isDark ? "text-white" : "text-[#111111]"
            }`}
          >
            Contact Us
          </h2>

          <div
            className={`flex-grow border-t transition-colors duration-500 ${
              isDark ? "border-[#DDB64E]/30" : "border-[#DDB64E]/40"
            }`}
          ></div>
        </div>

        {/* Subtext */}
        <p
          className={`text-lg md:text-xl font-semibold mb-2 transition-colors duration-500 ${
            isDark ? "text-[#E9ECEC]" : "text-[#111111]"
          }`}
          data-aos="fade-up"
          data-aos-delay="100"
        >
          Better yet, see us in person!
        </p>

        <p
          className={`text-base md:text-lg max-w-2xl mx-auto mb-10 leading-relaxed transition-colors duration-500 ${
            isDark ? "text-[#C9D1D5]" : "text-[#333333]"
          }`}
          data-aos="fade-up"
          data-aos-delay="200"
        >
          We love our customers, so feel free to visit during normal business hours.
          Please check each venue for all the opening hours.
        </p>

        {/* Company Info */}
        <div data-aos="fade-up" data-aos-delay="300">
          <h3
            className={`text-xl md:text-2xl font-[Playfair_Display] font-semibold mb-1 transition-colors duration-500 ${
              isDark ? "text-white" : "text-[#111111]"
            }`}
          >
            SRK Hospitality
          </h3>
          <p
            className={`text-base md:text-lg mb-12 transition-colors duration-500 ${
              isDark ? "text-[#E9ECEC]" : "text-[#333333]"
            }`}
          >
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
                : isDark
                ? "bg-[#DDB64E] text-black hover:bg-[#caa63e] hover:shadow-[0_8px_25px_rgba(221,182,78,0.3)] hover:-translate-y-1"
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
