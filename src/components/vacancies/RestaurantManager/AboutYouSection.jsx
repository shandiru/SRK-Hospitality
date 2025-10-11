'use client';
import React from 'react';
import { Award, UsersRound, Heart, MessageCircle } from 'lucide-react';

export default function AboutYouSection() {
  const qualities = [
    {
      icon: <Award className="h-7 w-7 text-[#FFFFFF]" />,
      title: '2+ Years Experience',
      description:
        'Proven track record in a Restaurant Manager position or similar leadership role',
    },
    {
      icon: <UsersRound className="h-7 w-7 text-[#FFFFFF]" />,
      title: 'Team Leadership',
      description:
        'Experience overseeing and supporting a team of managers and front of house operations',
    },
    {
      icon: <Heart className="h-7 w-7 text-[#FFFFFF]" />,
      title: 'Service Excellence',
      description:
        'Passion for wowing guests with exceptional service and ability to thrive under pressure',
    },
    {
      icon: <MessageCircle className="h-7 w-7 text-[#FFFFFF]" />,
      title: 'Communication Skills',
      description:
        'Excellent English language skills and ability to communicate effectively with team and guests',
    },
  ];

  return (
    <section className="py-12 md:py-24 px-6 bg-[#1E3A2A] text-[#FFFFFF]">
      <div className="max-w-6xl mx-auto">
        {/* Header */}
        <div className="text-center mb-16 space-y-4">
          <h2 className="text-5xl md:text-6xl font-serif font-light tracking-tight">
            About You
          </h2>
          <p className="text-xl text-[#E0E0E0] max-w-2xl mx-auto">
            We're looking for an experienced hospitality professional who shares our passion for excellence
          </p>
        </div>

        {/* Grid */}
        <div className="grid grid-cols-1 md:grid-cols-2 gap-8">
          {qualities.map((item, index) => (
            <div
              key={index}
              className="flex flex-col gap-6 rounded-xl border border-[#FFFFFF1A] bg-[#FFFFFF1A] hover:bg-[#FFFFFF26] transition-colors duration-300 shadow-sm p-8"
            >
              <div className="space-y-4">
                <div className="w-14 h-14 rounded-full bg-[#FFFFFF33] flex items-center justify-center">
                  {item.icon}
                </div>
                <h3 className="text-2xl font-semibold text-[#FFFFFF]">{item.title}</h3>
                <p className="text-[#E0E0E0] leading-relaxed">{item.description}</p>
              </div>
            </div>
          ))}
        </div>
      </div>
    </section>
  );
}
