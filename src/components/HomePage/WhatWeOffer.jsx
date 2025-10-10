'use client';

import { FaUtensils, FaMusic, FaAward } from 'react-icons/fa';
import { MdFreeBreakfast } from 'react-icons/md';

export default function WhatWeOffer() {
  const services = [
    {
      icon: <MdFreeBreakfast className="text-[#DDB64E]" />,
      badge: 'Breakfast',
      video: '/breakfast.mp4',
      title: 'Start Your Day Right',
      description:
        'Begin with a hearty breakfast in Nottingham, featuring fresh ingredients and expertly crafted dishes.',
    },
    {
      icon: <FaUtensils className="text-[#DDB64E]" />,
      badge: 'Fine Dining',
      video: '/steak.mp4',
      title: 'Premium Steaks',
      description:
        'Savour a perfectly cooked steak in Leicester, prepared by our skilled chefs using the finest cuts.',
    },
    {
      icon: <FaMusic className="text-[#DDB64E]" />,
      badge: 'Nightlife',
      video: '/nightlife.mp4',
      title: 'Dance the Night Away',
      description:
        'Experience our vibrant nightclubs with top DJs, premium drinks, and an electric atmosphere.',
    },
    {
      icon: <FaAward className="text-[#DDB64E]" />,
      badge: 'Award-Winning',
      video: '/indian-cuisine.mp4',
      title: 'Exotic Indian Cuisine',
      description:
        'Discover our award-winning Indian restaurant, featuring authentic flavours and traditional recipes.',
    },
  ];

  return (
    <section className="bg-gray-50 py-20 px-4">
      <div className="max-w-7xl mx-auto text-center">
        <span className="inline-block bg-[#DDB64E]/20 text-[#DDB64E] text-sm font-medium px-4 py-1 rounded-full mb-4">
          What We Offer
        </span>
        <h2 className="text-4xl font-extrabold text-gray-900 mb-2">
          At SRK, You Can Have It All
        </h2>
        <p className="text-gray-600 mb-12 max-w-2xl mx-auto">
          From hearty breakfasts to vibrant nightlife, we've got every occasion covered
        </p>

        <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-4 gap-6">
          {services.map((service, index) => (
            <div
              key={index}
              className="bg-white rounded-xl overflow-hidden shadow hover:shadow-lg transition duration-300"
            >
              <div className="relative">
                <video
                  src={service.video}
                  autoPlay
                  loop
                  muted
                  playsInline
                  className="w-full h-40 object-cover"
                />
                <span className="absolute top-2 left-2 bg-white text-[#DDB64E] text-xs font-medium px-2 py-1 rounded-md flex items-center gap-1 shadow-sm">
                  {service.icon} {service.badge}
                </span>
              </div>
              <div className="p-5 text-left">
                <h3 className="text-lg font-semibold text-gray-900 mb-1">
                  {service.title}
                </h3>
                <p className="text-gray-600 text-sm leading-relaxed">
                  {service.description}
                </p>
              </div>
            </div>
          ))}
        </div>

        <div className="mt-12">
          <a
            href="http://localhost:5173/venues"
            className="bg-[#DDB64E] text-white px-6 py-3 rounded-full font-semibold hover:bg-[#caa63e] transition duration-300 inline-block"
          >
            View All Venues
          </a>
        </div>
      </div>
    </section>
  );
}
