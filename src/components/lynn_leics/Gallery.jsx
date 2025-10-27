'use client';

import React, { useEffect, useState } from 'react';
import { Swiper, SwiperSlide } from 'swiper/react';
import { Navigation, Pagination } from 'swiper/modules';
import 'swiper/css';
import 'swiper/css/navigation';
import 'swiper/css/pagination';

const BRAND_GOLD = '#E1B43B'; // Your logo gold

const images = [
  '/lynn1.png',
  '/lynn3.png',
  '/lynn4.png',
  '/lynn5.png',
  '/lynn7.png',
  '/lynn8.png',
  '/lynn2.png',
];

export default function Gallery() {
  const [isDark, setIsDark] = useState(false);

  // Detect dark/light mode via <html class="dark">
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
      className={`transition-colors duration-700 py-10 px-4 ${isDark ? 'bg-black text-[#E9ECEC]' : 'bg-[#f9f6f2] text-[#1C1C1C]'
        }`}
    >
      <div className="max-w-6xl mx-auto">
        {/* Optional Title */}
        <h2
          className="text-3xl md:text-4xl font-bold text-center mb-8 underline underline-offset-[8px]"
          style={{
            color: BRAND_GOLD,
            textDecorationColor: BRAND_GOLD,
          }}
        >
          The lynn Gallery
        </h2>

        {/* Swiper Gallery */}
        <Swiper
          modules={[Navigation, Pagination]}
          spaceBetween={20}
          slidesPerView={1}
          navigation
          pagination={{ clickable: true }}
          breakpoints={{
            640: { slidesPerView: 1 },
            768: { slidesPerView: 2 },
            1024: { slidesPerView: 3 },
          }}
          className="rounded-xl"
        >
          {images.map((src, idx) => (
            <SwiperSlide key={idx}>
              <div
                className={`overflow-hidden rounded-xl shadow-md border transition-colors duration-500 ${isDark
                    ? 'border-[#E1B43B]/40 bg-[#0D0D0D]'
                    : 'border-[#E1B43B]/30 bg-white'
                  }`}
              >
                <img
                  src={src}
                  alt={`lynn Tree Inn Image ${idx + 1}`}
                  className="w-full h-[350px] object-cover"
                />
              </div>
            </SwiperSlide>
          ))}
        </Swiper>
      </div>

      {/* Swiper Style Overrides */}
      <style jsx global>{`
        .swiper-pagination-bullet {
          background: ${isDark ? '#555555' : '#CFCFCF'};
          opacity: 1;
        }
        .swiper-pagination-bullet-active {
          background: ${BRAND_GOLD} !important;
        }
        .swiper-button-next,
        .swiper-button-prev {
          color: ${BRAND_GOLD} !important;
        }
        .swiper-button-next:hover,
        .swiper-button-prev:hover {
          color: ${isDark ? '#FFD966' : '#C99A2C'} !important;
        }
      `}</style>
    </section>
  );
}
