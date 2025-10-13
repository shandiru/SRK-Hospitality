'use client';
import React, { useEffect, useState } from 'react';

export default function CultureSection() {
  const brandGold = '#DDB64E';
  const [isDark, setIsDark] = useState(false);

  // ✅ Detect dark/light mode dynamically
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

  const values = ['Caring', 'Ambitious', 'Respectful', 'Inclusive', 'Nurturing', 'Growing'];

  return (
    <section
      className={`py-24 px-6 transition-colors duration-700 ${
        isDark ? 'bg-black text-[#E9ECEC]' : 'bg-white text-[#111111]'
      }`}
    >
      <div className="max-w-4xl mx-auto text-center space-y-12">
        {/* Header */}
        <div className="space-y-6">
          <h2
            className="text-5xl md:text-6xl font-serif font-bold tracking-tight"
            style={{ color: brandGold }}
          >
            Our Culture
          </h2>
          <p
            className={`text-xl leading-relaxed ${
              isDark ? 'text-[#DADADA]' : 'text-[#333333]'
            }`}
          >
            At SRK Hospitality, we embody timeless elegance and vibrant hospitality in every guest
            experience. Our iconic restaurants, situated across the UK and beyond, are celebrated
            for exceptional food, outstanding service, and the creation of unforgettable moments.
          </p>
        </div>

        {/* Values Box */}
        <div
          className={`rounded-2xl p-12 space-y-6 border shadow-[0_4px_30px_rgba(221,182,78,0.15)] transition-all duration-500 ${
            isDark
              ? 'border-[#DDB64E]/30 bg-[#111111]'
              : 'border-[#DDB64E]/40 bg-white'
          }`}
        >
          <h3
            className="text-3xl font-serif font-semibold"
            style={{ color: brandGold }}
          >
            Our CARING Values
          </h3>
          <p
            className={`text-lg leading-relaxed max-w-3xl mx-auto ${
              isDark ? 'text-[#CFCFCF]' : 'text-[#333333]'
            }`}
          >
            Our shared CARING values help create an environment where we are happy and engaged.
            We care for ourselves, our colleagues, our guests, and we celebrate our individualities
            and differences.
          </p>

          {/* Value Tags */}
          <div className="flex flex-wrap justify-center gap-4 pt-4">
            {values.map((item, index) => (
              <div
                key={index}
                className="px-6 py-3 rounded-full font-medium transition-all duration-300 hover:scale-105"
                style={{
                  color: isDark ? '#E9ECEC' : '#111111',
                  backgroundColor: isDark ? `${brandGold}26` : `${brandGold}1A`,
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
