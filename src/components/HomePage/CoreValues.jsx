'use client';

import React, { useEffect, useState } from "react";
import AOS from "aos";
import "aos/dist/aos.css";
import { FaUserFriends, FaUtensils, FaStar } from "react-icons/fa";

export default function CoreValues() {
  useEffect(() => {
    AOS.init({
      duration: 1000,
      easing: "ease-in-out",
      once: false, // triggers when scrolling up & down
      mirror: true,
      offset: 100,
    });
  }, []);

  const [activeCard, setActiveCard] = useState(null);

  const handleTouch = (index) => {
    setActiveCard(index);
    // remove active after short delay for smooth visual feedback
    setTimeout(() => setActiveCard(null), 800);
  };

  const values = [
    {
      icon: <FaUserFriends className="text-[#DDB64E] text-3xl" />,
      title: "Exceptional Service",
      description:
        "From the moment you walk through our doors to the moment you leave, we aim to make every visit unforgettable. Friendly, attentive, and always with a smile — our team is here to make you feel welcome.",
      aos: "fade-up",
    },
    {
      icon: <FaUtensils className="text-[#DDB64E] text-3xl" />,
      title: "Outstanding Food & Drinks",
      description:
        "We're passionate about flavour. With carefully curated menus and an extensive selection of drinks, we're here to delight your taste buds and elevate your experience.",
      aos: "fade-up",
    },
    {
      icon: <FaStar className="text-[#DDB64E] text-3xl" />,
      title: "Great Value",
      description:
        "We believe everyone deserves a great night out. That's why we offer fair prices, fantastic deals, and regular discounts — so you can enjoy more, without spending more.",
      aos: "fade-up",
    },
  ];

  return (
    <section className="bg-white py-20 px-4 overflow-hidden">
      <div className="max-w-7xl mx-auto text-center" data-aos="fade-down">
        <span className="inline-block bg-[#DDB64E]/20 text-[#DDB64E] text-sm font-medium px-4 py-1 rounded-full mb-4">
          Our Values
        </span>
        <h2
          className="text-4xl font-extrabold text-gray-900 mb-2"
          data-aos="zoom-in"
        >
          Built on Three Core Values
        </h2>
        <p
          className="text-gray-600 mb-12 max-w-2xl mx-auto"
          data-aos="fade-up"
          data-aos-delay="100"
        >
          Everything we do is guided by our commitment to excellence, quality, and value
        </p>

        {/* Cards Section */}
        <div className="grid grid-cols-1 md:grid-cols-3 gap-8">
          {values.map((value, index) => (
            <div
              key={index}
              data-aos={value.aos}
              data-aos-delay={index * 150}
              onClick={() => handleTouch(index)} // tap for mobile
              onMouseDown={() => handleTouch(index)} // click for desktop
              className={`bg-gray-50 rounded-xl p-8 shadow-sm transition-all duration-500 ease-out hover:shadow-[0_8px_25px_rgba(221,182,78,0.4)] hover:-translate-y-1 active:scale-[0.98] ${
                activeCard === index
                  ? "shadow-[0_8px_25px_rgba(221,182,78,0.5)] scale-[1.02]"
                  : ""
              }`}
            >
              <div className="flex justify-center mb-4">
                <div
                  className={`p-4 rounded-full transition-all duration-500 ease-out ${
                    activeCard === index
                      ? "bg-[#DDB64E]/30"
                      : "bg-[#DDB64E]/20"
                  }`}
                >
                  {value.icon}
                </div>
              </div>
              <h3 className="text-lg font-semibold text-gray-900 mb-3">
                {value.title}
              </h3>
              <p className="text-gray-600 text-sm leading-relaxed">
                {value.description}
              </p>
            </div>
          ))}
        </div>
      </div>
    </section>
  );
}
