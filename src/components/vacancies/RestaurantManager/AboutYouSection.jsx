'use client';
import React from 'react';
import { Award, UsersRound, Heart, MessageCircle } from 'lucide-react';

export default function AboutYouSection() {
  const brandGold = "#DDB64E";

  const qualities = [
    {
      icon: <Award className="h-7 w-7 text-[#DDB64E]" />,
      title: '2+ Years Experience',
      description:
        'Proven track record in a Restaurant Manager position or similar leadership role',
    },
    {
      icon: <UsersRound className="h-7 w-7 text-[#DDB64E]" />,
      title: 'Team Leadership',
      description:
        'Experience overseeing and supporting a team of managers and front of house operations',
    },
    {
      icon: <Heart className="h-7 w-7 text-[#DDB64E]" />,
      title: 'Service Excellence',
      description:
        'Passion for wowing guests with exceptional service and ability to thrive under pressure',
    },
    {
      icon: <MessageCircle className="h-7 w-7 text-[#DDB64E]" />,
      title: 'Communication Skills',
      description:
        'Excellent English language skills and ability to communicate effectively with team and guests',
    },
  ];

  return (
    <section className="py-20 px-6 bg-white text-[#111111]">
      <div className="max-w-6xl mx-auto">
        {/* Header */}
        <div className="text-center mb-16 space-y-4">
          <h2 className="text-5xl md:text-6xl font-serif font-bold tracking-tight text-[#111111]">
            About You
          </h2>
          <p className="text-xl text-[#333333] max-w-2xl mx-auto">
            We're looking for an experienced hospitality professional who shares our passion for excellence.
          </p>
        </div>

        {/* Grid */}
        <div className="grid grid-cols-1 md:grid-cols-2 gap-8">
          {qualities.map((item, index) => (
            <div
              key={index}
              className="flex flex-col gap-6 rounded-xl border border-[#DDB64E]/40 bg-white hover:shadow-[0_8px_25px_rgba(221,182,78,0.25)] transition-all duration-300 p-8"
            >
              <div className="space-y-4">
                <div
                  className="w-14 h-14 rounded-full flex items-center justify-center"
                  style={{ backgroundColor: `${brandGold}1A` }} // soft gold tint
                >
                  {item.icon}
                </div>
                <h3 className="text-2xl font-semibold text-[#111111]">
                  {item.title}
                </h3>
                <p className="text-[#333333] leading-relaxed">
                  {item.description}
                </p>
              </div>
            </div>
          ))}
        </div>
      </div>
    </section>
  );
}
