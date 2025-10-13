"use client";

import React, { useEffect, useState } from "react";
import AOS from "aos";
import "aos/dist/aos.css";
import { FaUtensils, FaMusic, FaAward } from "react-icons/fa";
import { MdFreeBreakfast } from "react-icons/md";

export default function WhatWeOffer() {
  const [activeIndex, setActiveIndex] = useState(0);
  const [hovered, setHovered] = useState(false);

  const brandGreen = "#0D3B2E";
  const brandGold = "#DDB64E";
  const brandCream = "#FAF9F6";

  useEffect(() => {
    AOS.init({
      duration: 1000,
      easing: "ease-in-out",
      once: false,
      mirror: true,
      offset: 100,
    });
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

  // Auto slide
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
      className="relative py-24 px-4 md:px-12 overflow-visible"
      style={{ backgroundColor: brandCream }}
    >
      <div className="max-w-7xl mx-auto text-center font-serif">
        {/* Heading */}
        <span
          data-aos="fade-down"
          className="inline-block bg-[#DDB64E]/20 text-[#DDB64E] text-sm font-medium px-4 py-1 rounded-full mb-4"
        >
          What We Offer
        </span>

        <h2
          data-aos="fade-down"
          className="text-4xl md:text-5xl font-[Playfair_Display] font-bold text-[#0D3B2E] mb-4"
        >
          At SRK, You Can Have It All
        </h2>

        <p
          data-aos="fade-up"
          data-aos-delay="150"
          className="text-[#3C4A4E] text-lg max-w-2xl mx-auto mb-14 font-[Inter]"
        >
          From hearty breakfasts to vibrant nightlife, every SRK experience is
          crafted with passion and authenticity.
        </p>

        {/* === FLAT LIGHTSWIND STYLE CARDS === */}
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
              <div className="bg-white rounded-2xl overflow-hidden shadow-[0_10px_30px_rgba(0,0,0,0.1)] border border-[#E8D9A8]/70 hover:shadow-[0_12px_40px_rgba(221,182,78,0.3)] transition-all duration-500 h-[520px] flex flex-col">
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
                  <span className="absolute top-3 left-3 bg-white text-[#DDB64E] text-xs font-medium px-3 py-1 rounded-md flex items-center gap-1 shadow-sm">
                    {s.icon} {s.badge}
                  </span>
                </div>

                {/* Card Content */}
                <div className="p-6 text-left flex flex-col justify-between flex-grow font-[Inter]">
                  <div>
                    <h3 className="text-xl font-semibold text-[#0D3B2E] mb-2">
                      {s.title}
                    </h3>
                    <p className="text-[#3C4A4E] text-sm leading-relaxed">
                      {s.description}
                    </p>
                  </div>
                  <div className="mt-6">
                    <a
                      href="/venues"
                      className="text-[#DDB64E] font-medium hover:underline text-sm"
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
            className="absolute left-6 top-1/2 -translate-y-1/2 bg-white/80 text-[#0D3B2E] w-10 h-10 rounded-full shadow-md hover:scale-110 transition text-lg font-bold"
          >
            ‹
          </button>
          <button
            onClick={() => setActiveIndex((prev) => (prev + 1) % services.length)}
            className="absolute right-6 top-1/2 -translate-y-1/2 bg-white/80 text-[#0D3B2E] w-10 h-10 rounded-full shadow-md hover:scale-110 transition text-lg font-bold"
          >
            ›
          </button>
        </div>

        {/* CTA */}
        <div data-aos="fade-up" data-aos-delay="400" className="mt-16">
          <a
            href="/venues"
            className="inline-block px-8 py-3 rounded-full font-semibold text-[#0D3B2E] transition-all duration-500"
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
