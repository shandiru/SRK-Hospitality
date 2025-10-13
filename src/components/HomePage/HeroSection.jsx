"use client";

import React, { useEffect } from "react";
import AOS from "aos";
import "aos/dist/aos.css";

export default function Hero() {
  const brandGold = "#DDB64E"; // Only brand color

  useEffect(() => {
    AOS.init({
      duration: 1000,
      once: true,
      easing: "ease-in-out",
    });
  }, []);

  return (
    <section className="relative h-[90vh] flex items-center justify-center overflow-hidden font-serif">
      {/* Background Video */}
      <video
        autoPlay
        loop
        muted
        playsInline
        className="absolute inset-0 w-full h-full object-cover brightness-50"
      >
        <source src="/hero.mp4" type="video/mp4" />
        Your browser does not support the video tag.
      </video>

      {/* Overlay Gradient */}
      <div className="absolute inset-0 bg-gradient-to-t from-black/80 via-black/30 to-transparent"></div>

      {/* Content */}
      <div className="relative z-10 text-center px-6">
        <h1
          data-aos="fade-up"
          className="text-4xl md:text-6xl font-serif font-bold text-white tracking-wide drop-shadow-lg"
        >
          Exceptional Taste & Hospitality
        </h1>

        <p
          data-aos="fade-up"
          data-aos-delay="200"
          className="mt-5 text-lg md:text-xl text-white/90 max-w-2xl mx-auto leading-relaxed"
        >
          Celebrating the passion of independent culinary experiences with
          timeless elegance and warmth.
        </p>

        <div
          data-aos="zoom-in"
          data-aos-delay="400"
          className="mt-10 flex justify-center gap-4"
        >
          {/* Primary CTA */}
          <a
            href="/venues"
            className="px-8 py-3 rounded-full font-semibold transition-all duration-300"
            style={{
              backgroundColor: brandGold,
              color: "#000000",
            }}
          >
            Explore Venues
          </a>

          {/* Secondary CTA */}
          <a
            href="/vacancies"
            className="px-8 py-3 rounded-full border font-semibold transition-all duration-300"
            style={{
              borderColor: brandGold,
              color: brandGold,
            }}
          >
            Join Our Team
          </a>
        </div>
      </div>

      {/* Bottom Decorative Bar */}
      <div
        className="absolute bottom-0 left-0 right-0 h-[6px]"
        style={{
          backgroundColor: brandGold,
        }}
      ></div>
    </section>
  );
}
