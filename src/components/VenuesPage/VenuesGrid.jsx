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
  { name: "Subway Braunstone Gate", desc: "Fast Food", img: "/Subway Braunstone Gate.png", slug: "subway-braunstone" },
  { name: "Toluca", desc: "Mexican Bar & Grill", img: "/Toluca.png", slug: "toluca" },
  { name: "FUSIC", desc: "BBQ Special", img: "/FUSIC.png", slug: "fusic" },
];

export default function VenuesGrid() {
  const cardsRef = useRef([]);

  // ✅ Scroll animation
  useEffect(() => {
    cardsRef.current.forEach((card) => {
      if (!card) return;
      gsap.fromTo(
        card,
        { opacity: 0, y: 40 },
        {
          opacity: 1,
          y: 0,
          duration: 0.8,
          ease: "power3.out",
          scrollTrigger: {
            trigger: card,
            start: "top 85%",
            end: "bottom 15%",
            toggleActions: "play reverse play reverse",
          },
        }
      );
    });
    return () => ScrollTrigger.getAll().forEach((t) => t.kill());
  }, []);

  // ✅ 3D hover & shine effect
  useEffect(() => {
    const handleMouseMove = (e) => {
      cardsRef.current.forEach((card) => {
        if (!card) return;
        const rect = card.getBoundingClientRect();
        const x = e.clientX - rect.left;
        const y = e.clientY - rect.top;
        const centerX = rect.width / 2;
        const centerY = rect.height / 2;
        const rotateX = ((y - centerY) / centerY) * -10;
        const rotateY = ((x - centerX) / centerX) * 10;

        const shine = card.querySelector(".shine");
        if (shine) {
          const angle = Math.atan2(y - centerY, x - centerX) * (180 / Math.PI) - 90;
          shine.style.background = `linear-gradient(${angle}deg, rgba(255,255,255,0.3) 0%, transparent 80%)`;
        }

        card.style.transform = `rotateX(${rotateX}deg) rotateY(${rotateY}deg) scale(1.02)`;
      });
    };

    const handleMouseLeave = () => {
      cardsRef.current.forEach((card) => {
        if (!card) return;
        card.style.transform = "rotateX(0deg) rotateY(0deg) scale(1)";
      });
    };

    document.addEventListener("mousemove", handleMouseMove);
    document.addEventListener("mouseleave", handleMouseLeave);
    return () => {
      document.removeEventListener("mousemove", handleMouseMove);
      document.removeEventListener("mouseleave", handleMouseLeave);
    };
  }, []);

  return (
    <section className="bg-[#FAF9F6] py-24 px-6 md:px-12 font-[Inter]" id="venues-grid">
      {/* Section Heading */}
      <div className="max-w-7xl mx-auto text-center mb-16">
        <span className="inline-block bg-[#DDB64E]/20 text-[#DDB64E] text-sm font-medium px-4 py-1 rounded-full mb-4">
          Our Venues
        </span>
        <h2 className="text-4xl md:text-5xl font-[Playfair_Display] font-bold text-[#0D3B2E] mb-3">
          Experience the Heart of SRK Hospitality
        </h2>
        <p className="text-[#3C4A4E] text-base md:text-lg max-w-2xl mx-auto">
          Each venue tells its own story — from fine dining elegance to vibrant nightlife,
          we bring flavour, style, and warmth to every experience.
        </p>
      </div>

      {/* Venue Cards Grid */}
      <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 gap-12 place-items-center">
        {venues.map((v, i) => (
          <Link to={`/${v.slug}`} key={v.name}>
            <div
              ref={(el) => (cardsRef.current[i] = el)}
              className="relative w-[280px] h-[320px] overflow-hidden rounded-2xl shadow-xl border border-[#E8D9A8]/60 group cursor-pointer transition-all duration-500 hover:shadow-[0_8px_40px_rgba(221,182,78,0.4)] will-change-transform bg-center bg-cover"
              style={{ backgroundImage: `url(${v.img})` }}
            >
              {/* 3D Shine Layer */}
              <div className="shine absolute inset-0 rounded-2xl z-10 pointer-events-none transition-all duration-300"></div>

              {/* Dark Gradient Overlay */}
              <div className="absolute inset-0 bg-gradient-to-t from-black/60 via-black/40 to-transparent z-20"></div>

              {/* Text Overlay */}
              <div className="absolute bottom-0 w-full px-5 pb-6 text-white text-center z-30">
                <h3 className="text-xl font-[Playfair_Display] font-semibold mb-1">
                  {v.name}
                </h3>
                <p className="text-sm font-[Inter] text-gray-200">{v.desc}</p>
              </div>

              {/* Gold Border Glow */}
              <div className="absolute inset-0 rounded-2xl border-2 border-transparent group-hover:border-[#DDB64E] transition-all duration-500 z-20"></div>
            </div>
          </Link>
        ))}
      </div>
    </section>
  );
}
