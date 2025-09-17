'use client';

import { Swiper, SwiperSlide } from 'swiper/react';
import { Navigation, Pagination } from 'swiper/modules';
import 'swiper/css';
import 'swiper/css/navigation';
import 'swiper/css/pagination';

const images = [
  '/a1.jpg',
  '/a2.png',
  '/a3.jpg',
  '/a4.jpg',
  '/a5.jpg',
  '/a6.jpg',
  '/a7.jpg',
  '/a8.jpg',
  '/a9.jpg',
];


export default function Gallery() {
  return (
    <section className="bg-[#f9f6f2] py-10 px-4">
      <div className="max-w-6xl mx-auto">
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
              <div className="overflow-hidden rounded-xl shadow-md border border-gray-200 bg-white">
                <img
                  src={src}
                  alt={`Drink ${idx + 1}`}
                  className="w-full h-[350px] object-cover"
                />
              </div>
            </SwiperSlide>
          ))}
        </Swiper>
      </div>
    </section>
  );
}
