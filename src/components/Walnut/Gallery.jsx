'use client';

import { Swiper, SwiperSlide } from 'swiper/react';
import { Navigation, Pagination } from 'swiper/modules';
import 'swiper/css';
import 'swiper/css/navigation';
import 'swiper/css/pagination';

const images = [
  '/walnut-1.jpg',
  '/walnut-2.jpg',
  '/walnut-3.jpg',
  '/walnut-4.jpg',
  'walnut-5.jpg',
  'walnut-6.jpg',
  'walnut-7.jpg',
  'walnut-8.jpg',
  'walnut-9.jpg',
  'walnut-10.jpg',
  'walnut-11.jpg',
  'walnut-12.jpg',

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
