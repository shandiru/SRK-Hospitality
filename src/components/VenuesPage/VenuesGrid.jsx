'use client';

import { useEffect, useRef } from 'react';
import gsap from 'gsap';
import { ScrollTrigger } from 'gsap/ScrollTrigger';

gsap.registerPlugin(ScrollTrigger);

const venues = [
  { name: "157 Bar and Grill", desc: "Bar and Grill", img: "/157.png" },
  { name: "The Walnut Tree Inn", desc: "Fine dining experience", img: "/walnut.png" },
  { name: "Barceloneta", desc: "Spanish bar", img: "/barceloneta.png" },
  { name: "Bar Dos Hermanos", desc: "Cuban bar", img: "/doshermanos.png" },
  { name: "Al Naseeb", desc: "Indian restaurant", img: "/alnaseeb.png" },
  { name: "Freddie’s", desc: "Dessert shop", img: "/freddies.png" },
  { name: "Aspects", desc: "Indian restaurant", img: "/aspects.png" },
  { name: "Basement", desc: "Nightclub", img: "/basement.png" },
  { name: "Subway Wigston", desc: "Fast Food", img: "/subway.png" },
];

export default function VenuesGrid() {
  const cardsRef = useRef([]);

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
          ease: 'power3.out',
          scrollTrigger: {
            trigger: card,
            start: 'top 85%',
            end: 'bottom 15%',
            toggleActions: 'play reverse play reverse',
          },
        }
      );
    });

    return () => ScrollTrigger.getAll().forEach(trigger => trigger.kill());
  }, []);

  return (
    <section className="bg-[#f7f3ec] py-20 px-4">
      <div className="max-w-7xl mx-auto">
        <div className="grid grid-cols-1 sm:grid-cols-2 md:grid-cols-3 gap-10 place-items-center">
          {venues.map((v, i) => (
            <div
              key={v.name}
              ref={el => (cardsRef.current[i] = el)}
              className="relative w-[280px] h-[280px]  overflow-hidden shadow-xl group cursor-pointer"
            >
              <img
                src={v.img}
                alt={v.name}
                className="w-full h-full object-cover transition-transform duration-500 group-hover:scale-110 group-hover:rotate-2"
              />

              {/* Overlay */}
              <div className="absolute inset-0 bg-black/40" />

              {/* Text */}
              <div className="absolute bottom-0 w-full px-6 pb-6 text-white text-center z-10">
                <h3 className="text-lg font-semibold mb-1">{v.name}</h3>
                <p className="text-sm text-gray-200">{v.desc}</p>
              </div>
            </div>
          ))}
        </div>
      </div>
    </section>
  );
}
