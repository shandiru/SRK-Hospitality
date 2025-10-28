"use client";

import React, { useEffect, useState } from "react";
import AOS from "aos";
import "aos/dist/aos.css";

export default function AboutSection() {
  const brandGold = "#DDB64E";
  const [isDark, setIsDark] = useState(false);

  useEffect(() => {
    AOS.init({
      duration: 800,
      easing: "ease-in-out",
      once: true,
      offset: 80,
    });

    // Detect system or saved theme
    const root = document.documentElement;
    const dark = root.classList.contains("dark");
    setIsDark(dark);

    const observer = new MutationObserver(() => {
      setIsDark(root.classList.contains("dark"));
    });

    observer.observe(root, { attributes: true, attributeFilter: ["class"] });
    return () => observer.disconnect();
  }, []);

  return (
    <section
      className={`relative py-16 sm:py-20 md:py-24 px-4 sm:px-8 md:px-12 lg:px-20 overflow-hidden transition-colors duration-700 ${
        isDark ? "bg-[#0E1517]" : "bg-white"
      }`}
    >
      {/* Subtle background glow */}
      <div
        className="absolute inset-0 pointer-events-none"
        style={{
          background:
            isDark
              ? "radial-gradient(ellipse at center, rgba(221,182,78,0.08), transparent 75%)"
              : "radial-gradient(ellipse at center, rgba(221,182,78,0.06), transparent 75%)",
        }}
      ></div>

      {/* Container */}
      <div className="max-w-7xl mx-auto grid grid-cols-1 lg:grid-cols-2 items-center gap-12 md:gap-20 lg:gap-24 relative z-10 font-serif">
        {/* === Left: Image === */}
        <div
          data-aos="fade-up"
          className="relative group rounded-2xl shadow-[0_4px_20px_rgba(0,0,0,0.08)] border border-[#E8D9A8]/70 overflow-hidden transition-all duration-500 hover:shadow-[0_6px_30px_rgba(0,0,0,0.12)]"
        >
          <div className="absolute -inset-1 bg-gradient-to-br from-[#DDB64E]/20 to-transparent rounded-2xl blur-md opacity-50 group-hover:opacity-70 transition duration-500"></div>
          <img
            src="/newabout.png"
            alt="SRK Hospitality Experience"
            className="w-full h-full object-cover transform hover:scale-105 transition-transform duration-700 ease-out rounded-2xl"
          />
        </div>

        {/* === Right: Text === */}
        <div
          data-aos="fade-up"
          className={`relative rounded-2xl shadow-[0_4px_20px_rgba(0,0,0,0.08)] border border-[#E8D9A8]/70 p-6 sm:p-8 md:p-10 transition-all duration-500 ${
            isDark ? "bg-[#111A1D]" : "bg-white"
          }`}
        >
          <div className="text-center lg:text-left">
            <h2
              className={`text-3xl sm:text-4xl md:text-5xl font-[Playfair_Display] font-bold leading-tight transition-colors duration-500 ${
                isDark ? "text-white hover:text-[#DDB64E]" : "text-[#111111] hover:text-[#DDB64E]"
              }`}
            >
              About Us
            </h2>
            <div
              className="w-20 sm:w-24 h-[3px] mt-3 mb-6 mx-auto lg:mx-0"
              style={{ backgroundColor: brandGold }}
            ></div>
          </div>

          <div
            className={`text-base sm:text-[17px] md:text-[18px] leading-relaxed space-y-5 font-[Inter] transition-colors duration-500 ${
              isDark ? "text-[#E9ECEC]" : "text-[#333333]"
            }`}
          >
            <p data-aos="fade-up" data-aos-delay="100">
              <strong>SRK</strong> stands as a symbol of independent hospitality
              and heartfelt service. With over two decades of experience, we’ve
              cultivated a network of distinctive venues — from restaurants and
              bars to nightclubs and takeaways — each rooted in authenticity,
              quality, and community.
            </p>
            <p data-aos="fade-up" data-aos-delay="200">
              Our vision has always been simple — to blend tradition with modern
              flair, offering experiences that feel both familiar and new.
              Whether it’s a quiet evening meal, a lively night out, or a shared
              moment among friends, SRK venues are designed to feel personal,
              elegant, and unforgettable.
            </p>
          </div>

          <div
            data-aos="fade-up"
            data-aos-delay="400"
            className={`mt-8 border-l-4 pl-4 italic text-base sm:text-lg leading-relaxed transition-colors duration-500 ${
              isDark
                ? "text-[#E9ECEC] border-[#DDB64E]"
                : "text-[#444444] border-[#DDB64E]"
            }`}
          >
            “At SRK, hospitality isn’t a service — it’s a feeling. Every smile,
            every flavour, and every detail tells our story.”
          </div>
        </div>
      </div>

      {/* === Secondary Narrative Block === */}
      <div
        data-aos="fade-up"
        data-aos-delay="300"
        className={`max-w-5xl mx-auto mt-16 md:mt-20 rounded-2xl shadow-[0_4px_20px_rgba(0,0,0,0.08)] border border-[#E8D9A8]/70 p-6 sm:p-10 md:p-12 text-center transition-all duration-500 relative z-10 ${
          isDark ? "bg-[#111A1D]" : "bg-white"
        }`}
      >
        <h3
          className={`text-2xl sm:text-3xl md:text-4xl font-[Playfair_Display] font-semibold transition-colors duration-500 ${
            isDark ? "text-white hover:text-[#DDB64E]" : "text-[#111111] hover:text-[#DDB64E]"
          }`}
        >
          A Legacy of Taste and Togetherness
        </h3>
        <p
          className={`text-base sm:text-lg md:text-xl leading-relaxed mt-5 sm:mt-6 max-w-3xl mx-auto font-[Inter] transition-colors duration-500 ${
            isDark ? "text-[#E9ECEC]" : "text-[#333333]"
          }`}
        >
     From our first venue in the East Midlands to our growing family across the region and now in Dubai, SRK remains committed to creating spaces where flavour meets friendship and the art of hospitality evolves, refined yet always sincere.
        </p>
        <div
          className="w-20 sm:w-24 h-[2px] mx-auto mt-8"
          style={{ backgroundColor: brandGold }}
        ></div>
      </div>
    </section>
  );
}
