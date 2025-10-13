"use client";

import React, { useEffect, useState } from "react";
import AOS from "aos";
import "aos/dist/aos.css";
import { FaUtensils, FaMusic, FaAward } from "react-icons/fa";
import { MdFreeBreakfast } from "react-icons/md";

export default function WhatWeOffer() {
  const [activeIndex, setActiveIndex] = useState(0);
  const [hovered, setHovered] = useState(false);
  const [isDark, setIsDark] = useState(false);

  const brandGold = "#DDB64E"; // Brand color

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

  const services = [
    {
      icon: <MdFreeBreakfast className="text-[#DDB64E]" />,
      badge: "Breakfast",
      video: "/breakfast.mp4",
      title: "Start Your Day Right",
      description:
        "Begin with a hearty breakfast in Nottingham, featuring fresh ingredients and expertly crafted dishes.",
    },
    {
      icon: <FaUtensils className="text-[#DDB64E]" />,
      badge: "Fine Dining",
      video: "/steak.mp4",
      title: "Premium Steaks",
      description:
        "Savour a perfectly cooked steak in Leicester, prepared by our skilled chefs using the finest cuts.",
    },
    {
      icon: <FaMusic className="text-[#DDB64E]" />,
      badge: "Nightlife",
      video: "/nightlife.mp4",
      title: "Dance the Night Away",
      description:
        "Experience our vibrant nightclubs with top DJs, premium drinks, and an electric atmosphere.",
    },
    {
      icon: <FaAward className="text-[#DDB64E]" />,
      badge: "Award-Winning",
      video: "/indian-cuisine.mp4",
      title: "Exotic Indian Cuisine",
      description:
        "Discover our award-winning Indian restaurant, featuring authentic flavours and traditional recipes.",
    },
  ];

  // Auto-slide logic
  useEffect(() => {
    if (!hovered) {
      const timer = setInterval(() => {
        setActiveIndex((p) => (p + 1) % services.length);
      }, 4000);
      return () => clearInterval(timer);
    }
  }, [hovered]);

  const getCardStyle = (index) => {
    const total = services.length;
    const offset = (index - activeIndex + total) % total;

    switch (offset) {
      case 0:
        return "scale-100 opacity-100 z-30"; // Center
      case 1:
        return "translate-x-[70%] scale-95 opacity-70 z-20"; // Right
      case total - 1:
        return "translate-x-[-70%] scale-95 opacity-70 z-20"; // Left
      default:
        return "opacity-0 scale-90 z-0";
    }
  };

  return (
    <section
      className={`relative py-20 px-4 md:px-12 overflow-visible transition-colors duration-700 ${
        isDark ? "bg-[#0E1517]" : "bg-white"
      }`}
    >
      <div className="max-w-7xl mx-auto text-center font-serif relative z-10">
        {/* Heading */}
        <span
          data-aos="fade-down"
          className={`inline-block text-sm font-medium px-4 py-1 rounded-full mb-4 ${
            isDark
              ? "bg-[#DDB64E]/25 text-[#DDB64E]"
              : "bg-[#DDB64E]/20 text-[#DDB64E]"
          }`}
        >
          What We Offer
        </span>

        <h2
          data-aos="fade-down"
          className={`text-4xl md:text-5xl font-[Playfair_Display] font-bold mb-4 transition-colors duration-500 ${
            isDark ? "text-white" : "text-[#111111]"
          }`}
        >
          At SRK, You Can Have It All
        </h2>

        <p
          data-aos="fade-up"
          data-aos-delay="150"
          className={`text-lg max-w-2xl mx-auto mb-14 font-[Inter] transition-colors duration-500 ${
            isDark ? "text-[#E9ECEC]" : "text-[#333333]"
          }`}
        >
          From hearty breakfasts to vibrant nightlife, every SRK experience is
          crafted with passion and authenticity.
        </p>

        {/* === Card Slider === */}
        <div
          className="relative flex items-center justify-center h-[520px] overflow-visible"
          onMouseEnter={() => setHovered(true)}
          onMouseLeave={() => setHovered(false)}
        >
          {services.map((s, i) => (
            <div
              key={i}
              className={`absolute top-0 left-0 right-0 mx-auto w-[90%] sm:w-[60%] md:w-[420px] transition-all duration-[800ms] ease-[cubic-bezier(0.77,0,0.175,1)] transform ${getCardStyle(
                i
              )}`}
            >
              <div
                className={`rounded-2xl overflow-hidden transition-all duration-500 h-[520px] flex flex-col border border-[#E8D9A8]/70 ${
                  isDark
                    ? "bg-[#111A1D] shadow-[0_10px_30px_rgba(0,0,0,0.4)] hover:shadow-[0_12px_40px_rgba(221,182,78,0.25)]"
                    : "bg-white shadow-[0_10px_30px_rgba(0,0,0,0.1)] hover:shadow-[0_12px_40px_rgba(221,182,78,0.3)]"
                }`}
              >
                {/* Video Header */}
                <div className="relative h-[240px] overflow-hidden">
                  <video
                    src={s.video}
                    autoPlay
                    loop
                    muted
                    playsInline
                    className="w-full h-full object-cover"
                  />
                  <span
                    className={`absolute top-3 left-3 text-xs font-medium px-3 py-1 rounded-md flex items-center gap-1 shadow-sm ${
                      isDark ? "bg-[#0E1517] text-[#DDB64E]" : "bg-white text-[#DDB64E]"
                    }`}
                  >
                    {s.icon} {s.badge}
                  </span>
                </div>

                {/* Card Content */}
                <div className="p-6 text-left flex flex-col justify-between flex-grow font-[Inter]">
                  <div>
                    <h3
                      className={`text-xl font-semibold mb-2 transition-colors duration-500 ${
                        isDark ? "text-white" : "text-[#111111]"
                      }`}
                    >
                      {s.title}
                    </h3>
                    <p
                      className={`text-sm leading-relaxed transition-colors duration-500 ${
                        isDark ? "text-[#E9ECEC]" : "text-[#333333]"
                      }`}
                    >
                      {s.description}
                    </p>
                  </div>
                  <div className="mt-6">
                    <a
                      href="/venues"
                      className={`font-medium hover:underline text-sm transition-colors duration-500 ${
                        isDark ? "text-[#DDB64E]" : "text-[#DDB64E]"
                      }`}
                    >
                      Learn More →
                    </a>
                  </div>
                </div>
              </div>
            </div>
          ))}

          {/* Navigation Buttons */}
          <button
            onClick={() =>
              setActiveIndex(
                (prev) => (prev - 1 + services.length) % services.length
              )
            }
            className={`absolute left-4 sm:left-6 top-1/2 -translate-y-1/2 w-10 h-10 rounded-full shadow-md text-lg font-bold transition-all duration-300 hover:scale-110 ${
              isDark
                ? "bg-[#1C3B45] text-white"
                : "bg-white text-black bg-opacity-80"
            }`}
          >
            ‹
          </button>
          <button
            onClick={() => setActiveIndex((prev) => (prev + 1) % services.length)}
            className={`absolute right-4 sm:right-6 top-1/2 -translate-y-1/2 w-10 h-10 rounded-full shadow-md text-lg font-bold transition-all duration-300 hover:scale-110 ${
              isDark
                ? "bg-[#1C3B45] text-white"
                : "bg-white text-black bg-opacity-80"
            }`}
          >
            ›
          </button>
        </div>

        {/* CTA */}
        <div data-aos="fade-up" data-aos-delay="400" className="mt-16">
          <a
            href="/venues"
            className="inline-block px-8 py-3 rounded-full font-semibold text-black transition-all duration-500 hover:opacity-90"
            style={{
              backgroundColor: brandGold,
            }}
          >
            View All Venues
          </a>
        </div>
      </div>
    </section>
  );
}
