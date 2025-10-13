"use client";

import React, { useRef, useEffect } from "react";
import { Link } from "react-router-dom";
import gsap from "gsap";
import { ScrollTrigger } from "gsap/ScrollTrigger";

gsap.registerPlugin(ScrollTrigger);

const venues = [
  { name: "157 Bar and Grill", desc: "Bar and Grill", img: "/157.png", slug: "1573bar" },
  { name: "The Walnut Tree Inn", desc: "Fine dining experience", img: "/walnut.png", slug: "walnut" },
  { name: "Barceloneta", desc: "Spanish Bar", img: "/barceloneta.png", slug: "barceloneta" },
  { name: "Bar Dos Hermanos", desc: "Cuban Bar", img: "/doshermanos.png", slug: "dos-hermanos" },
  { name: "Al Naseeb", desc: "Indian Restaurant", img: "/alnaseeb.png", slug: "al-naseeb" },
  { name: "Freddie’s", desc: "Dessert Lounge", img: "/freddies.png", slug: "freddies" },
  { name: "Aspects", desc: "Indian Restaurant", img: "/aspects.png", slug: "aspects" },
  { name: "Basement", desc: "Nightclub", img: "/basement.png", slug: "basement" },
  { name: "Subway Wigston", desc: "Fast Food", img: "/subway.png", slug: "subway-wigston" },
  { name: "Toluca", desc: "Mexican Bar & Grill", img: "/Toluca.png", slug: "toluca" },
  { name: "FUSIC", desc: "BBQ Special", img: "/FUSIC.png", slug: "fusic" },
];

export default function VenuesGrid() {
  const brandGold = "#DDB64E";
  const cardsRef = useRef([]);

  // ✅ Scroll animations
  useEffect(() => {
    cardsRef.current.forEach((card) => {
      if (!card) return;
      gsap.fromTo(
        card,
        { opacity: 0, y: 50 },
        {
          opacity: 1,
          y: 0,
          duration: 0.8,
          ease: "power3.out",
          scrollTrigger: {
            trigger: card,
            start: "top 85%",
            end: "bottom 15%",
            toggleActions: "play none none reverse",
          },
        }
      );
    });
    return () => ScrollTrigger.getAll().forEach((t) => t.kill());
  }, []);

  // ✅ 3D hover effect
  useEffect(() => {
    cardsRef.current.forEach((card) => {
      if (!card) return;

      const shine = card.querySelector(".shine");

      const handleMouseMove = (e) => {
        const rect = card.getBoundingClientRect();
        const x = e.clientX - rect.left;
        const y = e.clientY - rect.top;
        const centerX = rect.width / 2;
        const centerY = rect.height / 2;

        const rotateX = ((y - centerY) / centerY) * -12;
        const rotateY = ((x - centerX) / centerX) * 12;

        card.style.transform = `rotateX(${rotateX}deg) rotateY(${rotateY}deg) scale(1.05)`;

        const angle = Math.atan2(y - centerY, x - centerX) * (180 / Math.PI) - 90;
        if (shine) {
          shine.style.background = `linear-gradient(${angle}deg, rgba(255,255,255,0.4) 0%, transparent 70%)`;
        }
      };

      const handleMouseLeave = () => {
        card.style.transform = "rotateX(0deg) rotateY(0deg) scale(1)";
        if (shine) shine.style.background = "transparent";
      };

      card.addEventListener("mousemove", handleMouseMove);
      card.addEventListener("mouseleave", handleMouseLeave);

      return () => {
        card.removeEventListener("mousemove", handleMouseMove);
        card.removeEventListener("mouseleave", handleMouseLeave);
      };
    });
  }, []);

  return (
    <section className="bg-white py-24 px-6 md:px-12 font-[Inter]" id="venues-grid">
      {/* Section Header */}
      <div className="max-w-7xl mx-auto text-center mb-16">
        <span className="inline-block bg-[#DDB64E]/15 text-[#DDB64E] text-sm font-medium px-4 py-1 rounded-full mb-4">
          Our Venues
        </span>
        <h2 className="text-4xl md:text-5xl font-[Playfair_Display] font-bold text-[#111111] mb-3">
          Experience the Heart of SRK Hospitality
        </h2>
        <p className="text-[#333333] text-base md:text-lg max-w-2xl mx-auto">
          Each venue tells its own story — from fine dining elegance to vibrant nightlife.
          We bring flavour, style, and warmth to every experience.
        </p>
      </div>

      {/* 3D Venue Grid */}
      <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 gap-12 place-items-center">
        {venues.map((v, i) => (
          <Link to={`/${v.slug}`} key={v.name}>
            <div
              ref={(el) => (cardsRef.current[i] = el)}
              className="relative w-[280px] sm:w-[300px] lg:w-[340px] h-[320px] sm:h-[340px] lg:h-[370px] rounded-2xl overflow-hidden cursor-pointer shadow-lg transition-transform duration-500 ease-out border border-[#EAEAEA]"
              style={{
                backgroundImage: `url(${v.img})`,
                backgroundSize: "cover",
                backgroundPosition: "center",
                transformStyle: "preserve-3d",
                perspective: "1000px",
              }}
            >
              {/* Shine layer */}
              <div className="shine absolute inset-0 rounded-2xl z-10 pointer-events-none"></div>

              {/* Gradient overlay */}
              <div className="absolute inset-0 bg-gradient-to-t from-black/75 via-black/50 to-transparent z-20"></div>

              {/* Text content */}
              <div className="absolute bottom-0 w-full px-6 pb-8 text-white text-center z-30">
                <h3 className="text-2xl font-[Playfair_Display] font-semibold mb-1">
                  {v.name}
                </h3>
                <p className="text-base font-[Inter] text-gray-200">{v.desc}</p>
              </div>

              {/* Gold hover glow */}
              <div
                className="absolute inset-0 rounded-2xl border-2 border-transparent transition-all duration-500 z-40"
                style={{
                  boxShadow: `0 0 0 rgba(0,0,0,0)`,
                }}
              ></div>

              {/* Gold hover ring effect */}
              <style>
                {`
                  a:hover div.relative {
                    box-shadow: 0 0 25px ${brandGold}55;
                    border-color: ${brandGold};
                  }
                `}
              </style>
            </div>
          </Link>
        ))}
      </div>
    </section>
  );
}
