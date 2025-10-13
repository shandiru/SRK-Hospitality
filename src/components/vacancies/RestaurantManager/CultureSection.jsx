'use client';
import React from 'react';

export default function CultureSection() {
  const brandGold = "#DDB64E";

  const values = [
    'Caring',
    'Ambitious',
    'Respectful',
    'Inclusive',
    'Nurturing',
    'Growing',
  ];

  return (
    <section className="py-24 px-6 bg-white">
      <div className="max-w-4xl mx-auto text-center space-y-12">
        {/* Header */}
        <div className="space-y-6">
          <h2 className="text-5xl md:text-6xl font-serif font-bold tracking-tight text-[#111111]">
            Our Culture
          </h2>
          <p className="text-xl text-[#333333] leading-relaxed">
            At SRK Hospitality, we embody timeless elegance and vibrant hospitality in every guest experience. 
            Our iconic restaurants, situated across the UK and beyond, are celebrated for exceptional food, 
            outstanding service, and the creation of unforgettable moments.
          </p>
        </div>

        {/* Values Box */}
        <div
          className="rounded-2xl p-12 space-y-6 border border-[#DDB64E]/40 bg-white shadow-[0_4px_30px_rgba(221,182,78,0.15)]"
        >
          <h3 className="text-3xl font-serif font-semibold text-[#111111]">
            Our CARING Values
          </h3>
          <p className="text-lg text-[#333333] leading-relaxed max-w-3xl mx-auto">
            Our shared CARING values help create an environment where we are happy and engaged. 
            We care for ourselves, our colleagues, our guests, and we celebrate our individualities 
            and differences.
          </p>

          {/* Value Tags */}
          <div className="flex flex-wrap justify-center gap-4 pt-4">
            {values.map((item, index) => (
              <div
                key={index}
                className="px-6 py-3 rounded-full font-medium text-[#111111] transition-all duration-300 hover:scale-105"
                style={{
                  backgroundColor: `${brandGold}1A`, // soft gold tint background
                  border: `1px solid ${brandGold}`,
                }}
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
