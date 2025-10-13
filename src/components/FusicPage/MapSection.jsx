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
            src="https://www.google.com/maps/embed?pb=!1m18!1m12!1m3!1d2429.4204931188595!2d-1.1099439236144702!3d52.64423387206779!2m3!1f0!2f0!3f0!3m2!1i1024!2i768!4f13.1!3m3!1m2!1s0x487761727665afe3%3A0x69fcfe7bba101034!2sFUSIC%20-%20Restaurant%2C%20Takeaway%20%26%20Deliveries!5e0!3m2!1sen!2suk!4v1726480000000!5m2!1sen!2suk"
            title="FUSIC Restaurant, 117 Frisby Rd, Leicester LE5 0DQ, UK"
            aria-label="FUSIC Restaurant, 117 Frisby Rd, Leicester LE5 0DQ, UK"
            loading="lazy"
            className="w-full h-full border-0 rounded-xl"
            allowFullScreen
          ></iframe>
        </div>
      </div>
    </section>
  );
}
