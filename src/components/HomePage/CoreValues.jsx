"use client";

import React, { useEffect, useState } from "react";
import AOS from "aos";
import "aos/dist/aos.css";
import { FaUserFriends, FaUtensils, FaStar } from "react-icons/fa";

export default function CoreValues() {
  const brandGold = "#DDB64E"; // Brand color
  const [isDark, setIsDark] = useState(false);
  const [activeCard, setActiveCard] = useState(null);

  useEffect(() => {
    AOS.init({
      duration: 1000,
      easing: "ease-in-out",
      once: true,
      offset: 80,
    });

    // Detect current theme
    const root = document.documentElement;
    const dark = root.classList.contains("dark");
    setIsDark(dark);

    const observer = new MutationObserver(() => {
      setIsDark(root.classList.contains("dark"));
    });

    observer.observe(root, { attributes: true, attributeFilter: ["class"] });
    return () => observer.disconnect();
  }, []);

  const handleTouch = (index) => {
    setActiveCard(index);
    setTimeout(() => setActiveCard(null), 800);
  };

  const values = [
    {
      icon: <FaUserFriends className="text-[#DDB64E] text-4xl" />,
      title: "Exceptional Service",
      description:
        "From the moment you walk through our doors to the moment you leave, we aim to make every visit unforgettable. Friendly, attentive, and always with a smile — our team is here to make you feel welcome.",
    },
    {
      icon: <FaUtensils className="text-[#DDB64E] text-4xl" />,
      title: "Outstanding Food & Drinks",
      description:
        "We're passionate about flavour. With carefully curated menus and an extensive selection of drinks, we're here to delight your taste buds and elevate your experience.",
    },
    {
      icon: <FaStar className="text-[#DDB64E] text-4xl" />,
      title: "Great Value",
      description:
        "We believe everyone deserves a great night out. That's why we offer fair prices, fantastic deals, and regular discounts — so you can enjoy more, without spending more.",
    },
  ];

  return (
    <section
      className={`py-20 px-6 md:px-12 overflow-hidden transition-colors duration-700 ${
        isDark ? "bg-[#0E1517]" : "bg-white"
      }`}
    >
      <div className="max-w-7xl mx-auto text-center font-[Inter]">
        {/* Heading Section */}
        <span
          data-aos="fade-down"
          className={`inline-block text-sm md:text-base font-medium px-5 py-1.5 rounded-full mb-5 transition-colors duration-500 ${
            isDark
              ? "bg-[#DDB64E]/25 text-[#DDB64E]"
              : "bg-[#DDB64E]/20 text-[#DDB64E]"
          }`}
        >
          Our Values
        </span>

        <h2
          data-aos="fade-down"
          className={`text-3xl md:text-5xl font-[Playfair_Display] font-bold mb-4 transition-colors duration-500 ${
            isDark ? "text-white" : "text-[#111111]"
          }`}
        >
          Built on Three Core Values
        </h2>

        <p
          data-aos="fade-up"
          data-aos-delay="150"
          className={`text-base md:text-lg max-w-2xl mx-auto mb-16 transition-colors duration-500 ${
            isDark ? "text-[#E9ECEC]" : "text-[#333333]"
          }`}
        >
          Everything we do is guided by our commitment to excellence, quality, and
          value.
        </p>

        {/* Value Cards */}
        <div className="grid grid-cols-1 md:grid-cols-3 gap-8">
          {values.map((value, index) => (
            <div
              key={index}
              data-aos="fade-up"
              data-aos-delay={index * 150}
              onClick={() => handleTouch(index)}
              onMouseDown={() => handleTouch(index)}
              className={`rounded-2xl p-10 transition-all duration-500 ease-out border border-[#E8D9A8]/60 ${
                isDark
                  ? "bg-[#111A1D] shadow-[0_10px_25px_rgba(0,0,0,0.4)] hover:shadow-[0_8px_25px_rgba(221,182,78,0.25)]"
                  : "bg-white shadow-sm hover:shadow-[0_8px_25px_rgba(221,182,78,0.3)]"
              } ${
                activeCard === index
                  ? "shadow-[0_8px_25px_rgba(221,182,78,0.5)] scale-[1.02]"
                  : ""
              }`}
            >
              {/* Icon */}
              <div className="flex justify-center mb-6">
                <div
                  className={`p-5 rounded-full transition-all duration-500 ease-out ${
                    activeCard === index
                      ? "bg-[#DDB64E]/30"
                      : "bg-[#DDB64E]/20"
                  }`}
                >
                  {value.icon}
                </div>
              </div>

              {/* Title */}
              <h3
                className={`text-xl md:text-2xl font-[Playfair_Display] font-semibold mb-4 transition-colors duration-500 ${
                  isDark ? "text-white" : "text-[#111111]"
                }`}
              >
                {value.title}
              </h3>

              {/* Description */}
              <p
                className={`text-sm md:text-base leading-relaxed transition-colors duration-500 ${
                  isDark ? "text-[#E9ECEC]" : "text-[#333333]"
                }`}
              >
                {value.description}
              </p>
            </div>
          ))}
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
            Explore Our Venues
          </a>
        </div>
      </div>
    </section>
  );
}
