'use client';
import React from 'react';

export default function CultureSection() {
  const values = [
    'Caring',
    'Ambitious',
    'Respectful',
    'Inclusive',
    'Nurturing',
    'Growing',
  ];

  return (
    <section className="py-24 px-6 bg-[#FAF9F6]">
      <div className="max-w-4xl mx-auto text-center space-y-12">
        {/* Header */}
        <div className="space-y-6">
          <h2 className="text-5xl md:text-6xl font-serif font-light tracking-tight text-[#1E3A2A]">
            Our Culture
          </h2>
          <p className="text-xl text-[#4F4F4F] leading-relaxed">
            At SRK Hospitality, we embody timeless elegance and vibrant hospitality in every guest experience. 
            Our iconic restaurants, situated across the UK and beyond, are celebrated for exceptional food, 
            outstanding service, and the creation of unforgettable moments.
          </p>
        </div>

        {/* Values Box */}
        <div className="bg-[#F2E9DA] rounded-2xl p-12 space-y-6">
          <h3 className="text-3xl font-serif font-light text-[#1E3A2A]">
            Our CARING Values
          </h3>
          <p className="text-lg text-[#4F4F4F] leading-relaxed">
            Our shared CARING values help create an environment where we are happy and engaged. 
            We care for ourselves, our colleagues, our guests, and we celebrate our individualities 
            and differences.
          </p>

          {/* Value Tags */}
          <div className="flex flex-wrap justify-center gap-4 pt-4">
            {values.map((item, index) => (
              <div
                key={index}
                className="px-6 py-3 bg-[#E1D3B3] rounded-full text-[#1E3A2A] font-medium"
              >
                {item}
              </div>
            ))}
          </div>
        </div>
      </div>
    </section>
  );
}
