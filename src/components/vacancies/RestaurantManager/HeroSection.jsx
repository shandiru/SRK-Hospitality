'use client';
import React from 'react';
import { ArrowRight } from 'lucide-react';

export default function HeroSection() {
  const brandGold = "#DDB64E"; // your logo gold color

  return (
    <section className="relative flex items-center justify-center px-6 py-24 overflow-hidden bg-white">
      {/* Content */}
      <div className="relative max-w-5xl mx-auto text-center space-y-8">
        {/* Badge */}
        <div
          className="inline-block px-4 py-2 rounded-full mb-4"
          style={{ backgroundColor: `${brandGold}1A` }} // gold tint (10%)
        >
          <p className="text-sm font-medium text-[#111111]">Now Hiring</p>
        </div>

        {/* Title */}
        <h1 className="text-5xl md:text-7xl font-serif font-bold tracking-tight text-[#111111]">
          Restaurant Manager
        </h1>

        {/* Subtext Row */}
        <div className="flex flex-wrap items-center justify-center gap-3 text-lg text-[#333333]">
          <span className="font-semibold text-[#111111]">SRK Hospitality</span>
          <span>•</span>
          <span>Full-time</span>
          <span>•</span>
          <span>Competitive Salary</span>
        </div>

        {/* Description */}
        <p className="text-xl md:text-2xl text-[#333333] max-w-3xl mx-auto leading-relaxed">
          Join us in creating timeless elegance and vibrant hospitality. We're searching for a confident leader to join one of the UK's most-loved restaurant brands.
        </p>

        {/* Buttons */}
        <div className="flex flex-col sm:flex-row gap-4 justify-center pt-6">
          {/* Apply Now Button */}
          <button
            className="inline-flex items-center justify-center gap-2 whitespace-nowrap font-medium rounded-full px-8 h-12 text-base text-black transition-all hover:opacity-90"
            style={{ backgroundColor: brandGold }}
          >
            Apply Now
            <ArrowRight className="ml-2 h-5 w-5" />
          </button>

          {/* Learn More Button */}
          <button
            className="inline-flex items-center justify-center gap-2 whitespace-nowrap font-medium rounded-full px-8 h-12 text-base border transition-all hover:bg-[#F9F9F9]"
            style={{
              borderColor: brandGold,
              color: brandGold,
              backgroundColor: "white",
            }}
          >
            Learn More
          </button>
        </div>
      </div>
    </section>
  );
}
