'use client';

import { useEffect, useState } from 'react';

const BRAND_GOLD = '#E1B43B';

export default function MapSection() {
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

  return (
    <section
      className={`transition-colors duration-700 py-16 px-4 ${
        isDark ? 'bg-black text-[#E9ECEC]' : 'bg-[#F9F6F2] text-[#1C1C1C]'
      }`}
    >
      <div className="max-w-7xl mx-auto">
        {/* Heading */}
        <h2
          className="text-3xl font-extrabold mb-6 text-center"
          style={{ color: BRAND_GOLD }}
        >
          Find Us Here
        </h2>

        {/* Map Container */}
        <div
          className={`w-full h-[450px] overflow-hidden rounded-xl shadow-md border transition-colors duration-500 ${
            isDark
              ? 'border-[#E1B43B]/40 bg-[#0D0D0D]'
              : 'border-[#E1B43B]/30 bg-white'
          }`}
        >
          <iframe
            src="https://www.google.com/maps/embed?pb=!1m14!1m8!1m3!1d77399.8992789567!2d-1.8287530000000003!3d52.682609!3m2!1i1024!2i768!4f13.1!3m3!1m2!1s0x4870a78f3af5b0db%3A0x70a316ca68f66189!2s1-3%20City%20Arcade%2C%20Lichfield%20WS13%206LZ%2C%20UK!5e0!3m2!1sen!2sus!4v1758108297644!5m2!1sen!2sus"
            title="Toluca – 1-3 City Arcade, Lichfield WS13 6LZ, UK"
            aria-label="Toluca – 1-3 City Arcade, Lichfield WS13 6LZ, UK"
            loading="lazy"
            className="w-full h-full border-0 rounded-xl"
            allowFullScreen
          ></iframe>
        </div>
      </div>
    </section>
  );
}
