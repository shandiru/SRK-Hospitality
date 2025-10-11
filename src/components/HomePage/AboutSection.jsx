'use client';

import React, { useEffect } from "react";
import AOS from "aos";
import "aos/dist/aos.css";

export default function AboutSection() {
  useEffect(() => {
    AOS.init({
      duration: 1000,
      easing: "ease-in-out",
      once: false, // ❗ Ensures animations trigger on scroll up AND down
      mirror: true, // ✅ Re-triggers AOS when scrolling back up
      offset: 100,
    });
  }, []);

  return (
    <section className="relative bg-white py-24 px-6 md:px-12 lg:px-20 font-[Inter] overflow-hidden">
      {/* Subtle background accent (optional) */}
      <div className="absolute inset-0 bg-[radial-gradient(ellipse_at_center,_rgba(255,255,255,0.6),_transparent_70%)] pointer-events-none"></div>

      {/* Main container */}
      <div className="max-w-7xl mx-auto grid grid-cols-1 lg:grid-cols-2 items-center gap-16 lg:gap-24 relative z-10">
        {/* === Left: Image Card === */}
        <div
          data-aos="fade-right"
          className="relative group bg-white rounded-3xl shadow-[0_4px_30px_rgba(0,0,0,0.08)] border border-[#E8D9A8]/70 p-4 hover:shadow-[0_8px_40px_rgba(0,0,0,0.15)] hover:-translate-y-1 transition-all duration-700"
        >
          <div className="absolute -inset-1 bg-gradient-to-br from-[#DDB64E]/20 to-transparent rounded-3xl blur-md opacity-60 group-hover:opacity-80 transition duration-700"></div>
          <div className="relative rounded-2xl overflow-hidden">
            <img
              src="/newabout.png"
              alt="SRK Hospitality Experience"
              className="w-full h-full object-cover transform hover:scale-110 transition-transform duration-700 ease-out"
            />
          </div>
        </div>

        {/* === Right: Text Card === */}
        <div
          data-aos="fade-left"
          className="relative bg-white rounded-3xl shadow-[0_4px_30px_rgba(0,0,0,0.08)] border border-[#E8D9A8]/70 p-10 hover:shadow-[0_8px_40px_rgba(0,0,0,0.15)] hover:-translate-y-1 transition-all duration-700"
        >
          <div className="text-center lg:text-left">
            <h2 className="text-5xl md:text-6xl font-bold text-[#1A1A1A] font-[Playfair_Display] leading-tight hover:text-[#DDB64E] transition-colors duration-500">
              About Us
            </h2>
            <div className="w-24 h-[3px] bg-[#DDB64E] mt-3 mb-8 mx-auto lg:mx-0"></div>
          </div>

          <div className="text-gray-700 text-[17px] md:text-[18px] leading-relaxed space-y-6">
            <p data-aos="fade-up" data-aos-delay="100">
              <strong>SRK</strong> stands as a symbol of independent hospitality and heartfelt service.
              With over two decades of experience, we’ve cultivated a network of distinctive venues — 
              from restaurants and bars to nightclubs and takeaways — each rooted in authenticity, quality, and community.
            </p>
            <p data-aos="fade-up" data-aos-delay="200">
              Our vision has always been simple — to blend tradition with modern flair,
              offering experiences that feel both familiar and new. Whether it’s a quiet evening meal,
              a lively night out, or a shared moment among friends, SRK venues are designed
              to feel personal, elegant, and unforgettable.
            </p>
          </div>

          <div
            data-aos="fade-up"
            data-aos-delay="400"
            className="mt-10 border-l-4 border-[#DDB64E] pl-6 italic text-[#4A4A4A] text-lg leading-relaxed hover:border-[#B8962C] transition-colors duration-500"
          >
            “At SRK, hospitality isn’t a service — it’s a feeling.
            Every smile, every flavour, and every detail tells our story.”
          </div>
        </div>
      </div>

      {/* Secondary narrative block */}
      <div
        data-aos="fade-up"
        data-aos-delay="300"
        className="max-w-5xl mx-auto mt-24 bg-white rounded-3xl shadow-[0_4px_30px_rgba(0,0,0,0.08)] border border-[#E8D9A8]/70 p-12 text-center hover:shadow-[0_8px_40px_rgba(0,0,0,0.15)] hover:-translate-y-1 transition-all duration-700 relative z-10"
      >
        <h3 className="text-3xl md:text-4xl font-[Playfair_Display] font-semibold text-[#1A1A1A] hover:text-[#DDB64E] transition-colors duration-500">
          A Legacy of Taste and Togetherness
        </h3>
        <p className="text-gray-700 text-lg md:text-xl leading-relaxed mt-6 max-w-3xl mx-auto">
          From our first venue in the East Midlands to our growing family across the region,
          SRK has remained committed to creating spaces where flavour meets friendship,
          and where the art of hospitality continues to evolve — refined, yet always sincere.
        </p>
        <div className="w-28 h-[2px] bg-[#DDB64E] mx-auto mt-8"></div>
      </div>
    </section>
  );
}
