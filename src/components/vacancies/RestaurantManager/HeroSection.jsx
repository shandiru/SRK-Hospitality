'use client';
import React from 'react';
import { ArrowRight } from 'lucide-react';

export default function HeroSection() {
  return (
    <section className="relative  flex items-center justify-center px-6 py-25 overflow-hidden bg-gradient-to-b from-[#FAF9F6] via-[#F8F7F3] to-[#F4F3EF]">
      {/* Content */}
      <div className="relative max-w-5xl mx-auto text-center space-y-8">
        {/* Badge */}
        <div className="inline-block px-4 py-2 bg-[#E9E9DF] rounded-full mb-4">
          <p className="text-sm font-medium text-[#1E3A2A]">Now Hiring</p>
        </div>

        {/* Title */}
        <h1 className="text-6xl md:text-8xl font-serif font-light tracking-tight text-[#1E3A2A]">
          Restaurant Manager
        </h1>

        {/* Subtext Row */}
        <div className="flex items-center justify-center gap-3 text-lg text-[#3C3C3C]">
          <span className="font-semibold text-[#1E3A2A]">SRK Hospitality</span>
          <span>•</span>
          <span>Full-time</span>
          <span>•</span>
          <span>Competitive Salary</span>
        </div>

        {/* Description */}
        <p className="text-xl md:text-2xl text-[#4F4F4F] max-w-3xl mx-auto leading-relaxed">
          Join us in creating timeless elegance and vibrant hospitality. We're searching for a confident leader to join one of the UK's most-loved restaurant brands.
        </p>

        {/* Buttons */}
        <div className="flex flex-col sm:flex-row gap-4 justify-center pt-6">
          {/* Apply Now Button */}
          <button
            className="inline-flex items-center justify-center gap-2 whitespace-nowrap font-medium rounded-md px-8 h-12 text-base bg-[#134E4A] text-white hover:bg-[#0E3E3B] transition-all"
          >
            Apply Now
            <ArrowRight className="ml-2 h-5 w-5" />
          </button>

          {/* Learn More Button */}
          <button
            className="inline-flex items-center justify-center gap-2 whitespace-nowrap font-medium rounded-md px-8 h-12 text-base border border-[#D9D9D3] text-[#1E3A2A] bg-white hover:bg-[#F5F5F0] transition-all"
          >
            Learn More
          </button>
        </div>
      </div>
    </section>
  );
}
