'use client';
import React, { useEffect, useState } from 'react';
import { ArrowRight } from 'lucide-react';

export default function HeroSection() {
  const brandGold = '#DDB64E';
  const [isDark, setIsDark] = useState(false);

  // Detect dark/light mode dynamically
  useEffect(() => {
    const root = document.documentElement;
    const dark = root.classList.contains('dark');
    setIsDark(dark);

    const observer = new MutationObserver(() => {
      setIsDark(root.classList.contains('dark'));
    });
    observer.observe(root, { attributes: true, attributeFilter: ['class'] });

    return () => observer.disconnect();
  }, []);

  return (
    <section
      className={`relative flex items-center justify-center px-6 py-24 overflow-hidden transition-colors duration-700 ${
        isDark ? 'bg-black text-[#E9ECEC]' : 'bg-white text-[#111111]'
      }`}
    >
      <div className="relative max-w-5xl mx-auto text-center space-y-8">
        {/* Badge */}
        <div
          className="inline-block px-4 py-2 rounded-full mb-4"
          style={{
            backgroundColor: isDark ? `${brandGold}26` : `${brandGold}1A`, // faint gold tint
          }}
        >
          <p
            className={`text-sm font-medium ${
              isDark ? 'text-[#F3F3F3]' : 'text-[#111111]'
            }`}
          >
            Now Hiring
          </p>
        </div>

        {/* Title */}
        <h1
          className={`text-5xl md:text-7xl font-serif font-bold tracking-tight ${
            isDark ? 'text-[#F9F9F9]' : 'text-[#111111]'
          }`}
        >
          Restaurant Manager
        </h1>

        {/* Subtext Row */}
        <div
          className={`flex flex-wrap items-center justify-center gap-3 text-lg ${
            isDark ? 'text-[#CCCCCC]' : 'text-[#333333]'
          }`}
        >
          <span
            className={`font-semibold ${
              isDark ? 'text-[#F5F5F5]' : 'text-[#111111]'
            }`}
          >
            SRK Hospitality
          </span>
          <span>•</span>
          <span>Full-time</span>
          <span>•</span>
          <span>Competitive Salary</span>
        </div>

        {/* Description */}
        <p
          className={`text-xl md:text-2xl max-w-3xl mx-auto leading-relaxed ${
            isDark ? 'text-[#DADADA]' : 'text-[#333333]'
          }`}
        >
          Join us in creating timeless elegance and vibrant hospitality. We're
          searching for a confident leader to join one of the UK's most-loved
          restaurant brands.
        </p>

        {/* Buttons */}
        <div className="flex flex-col sm:flex-row gap-4 justify-center pt-6">
          {/* Apply Now */}
          <button
            className="inline-flex items-center justify-center gap-2 whitespace-nowrap font-medium rounded-full px-8 h-12 text-base transition-all hover:opacity-90"
            style={{
              backgroundColor: brandGold,
              color: isDark ? '#000' : '#111111',
            }}
          >
            Apply Now
            <ArrowRight className="ml-2 h-5 w-5" />
          </button>

          {/* Learn More */}
          <button
            className="inline-flex items-center justify-center gap-2 whitespace-nowrap font-medium rounded-full px-8 h-12 text-base border transition-all"
            style={{
              borderColor: brandGold,
              color: brandGold,
              backgroundColor: isDark ? '#111111' : '#FFFFFF',
            }}
          >
            Learn More
          </button>
        </div>
      </div>
    </section>
  );
}
