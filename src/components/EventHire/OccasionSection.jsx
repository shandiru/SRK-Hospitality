"use client";
import React from "react";

const OccasionSection = () => {
  const cards = [
    {
      title: "Weddings",
      desc: "Create unforgettable memories in stunning venues",
      img: "/elegant-wedding-venue.png",
    },
    {
      title: "Corporate Events",
      desc: "Professional spaces for meetings and conferences",
      img: "/modern-corporate-event-space.png",
    },
    {
      title: "Parties",
      desc: "Celebrate in style with perfect party venues",
      img: "/stylish-party-venue.jpg",
    },
    {
      title: "Conferences",
      desc: "State-of-the-art facilities for large gatherings",
      img: "/conference-hall-venue.jpg",
    },
  ];

  return (
    <section className="py-16 px-6 bg-[#FFF8E6]">
      <div className="max-w-7xl mx-auto">
        {/* Heading */}
        <h2 className="text-3xl md:text-4xl font-bold text-center mb-12 text-[#1A1A1A] font-['Poppins']">
          We Specialise In Every Occasion
        </h2>

        {/* Card Grid */}
        <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-4 gap-8">
          {cards.map((card, i) => (
            <div
              key={i}
              className="bg-white rounded-xl overflow-hidden shadow-md hover:shadow-lg transition-shadow duration-300"
            >
              <img
                src={card.img}
                alt={card.title}
                className="w-full h-52 object-cover"
              />
              <div className="p-6">
                <h3 className="text-xl font-semibold mb-2 text-[#D8B04C]">
                  {card.title}
                </h3>
                <p className="text-gray-700 leading-relaxed">
                  {card.desc}
                </p>
              </div>
            </div>
          ))}
        </div>
      </div>
    </section>
  );
};

export default OccasionSection;
