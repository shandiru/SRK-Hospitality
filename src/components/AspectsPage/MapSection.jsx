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
            src="https://www.google.com/maps/embed?pb=!1m18!1m12!1m3!1d2432.428246942207!2d-1.2144060236171327!3d52.59273597208446!2m3!1f0!2f0!3f0!3m2!1i1024!2i768!4f13.1!3m3!1m2!1s0x48775dc1002096e5%3A0xb1372fa4ff209cff!2s7%20Mill%20Hill%2C%20Enderby%2C%20Leicester%20LE19%204AL%2C%20United%20Kingdom!5e0!3m2!1sen!2suk!4v1726313610000!5m2!1sen!2suk"
            title="Aspects Restaurant, 7 Mill Hill, Enderby, Leicester LE19 4AL, UK"
            aria-label="Aspects Restaurant, 7 Mill Hill, Enderby, Leicester LE19 4AL, UK"
            loading="lazy"
            className="w-full h-full border-0 rounded-xl"
            allowFullScreen
          ></iframe>
        </div>
      </div>
    </section>
  );
}
