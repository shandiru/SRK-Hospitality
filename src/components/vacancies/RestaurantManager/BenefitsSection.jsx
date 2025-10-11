'use client';
import React from 'react';
import {
  Coins,
  Users,
  Gift,
  GraduationCap,
  Utensils,
  Calendar,
  Cake,
  Sparkles,
} from 'lucide-react';

export default function BenefitsSection() {
  const benefits = [
    {
      icon: <Coins className="h-6 w-6 text-[#1E3A2A]" />,
      title: 'Competitive Pay',
      description:
        'Industry-leading salary based on experience plus variable tronc for all managers',
    },
    {
      icon: <Users className="h-6 w-6 text-[#1E3A2A]" />,
      title: '50% Staff Discount',
      description:
        'For you and up to 3 friends when dining in our restaurants',
    },
    {
      icon: <Gift className="h-6 w-6 text-[#1E3A2A]" />,
      title: 'Anniversary Rewards',
      description:
        'Celebrate career milestones with gift vouchers to dine with us',
    },
    {
      icon: <GraduationCap className="h-6 w-6 text-[#1E3A2A]" />,
      title: 'Career Development',
      description:
        'Comprehensive training programs including Apprenticeships',
    },
    {
      icon: <Utensils className="h-6 w-6 text-[#1E3A2A]" />,
      title: 'Free Meals & Drinks',
      description:
        'Complimentary food and drinks to the same standard we serve guests',
    },
    {
      icon: <Calendar className="h-6 w-6 text-[#1E3A2A]" />,
      title: 'Extra Holiday Days',
      description: 'Up to 5 additional days off after 5 years of service',
    },
    {
      icon: <Cake className="h-6 w-6 text-[#1E3A2A]" />,
      title: 'Birthday Off',
      description:
        'Your birthday as a guaranteed day off - celebrate in style!',
    },
    {
      icon: <Sparkles className="h-6 w-6 text-[#1E3A2A]" />,
      title: 'Retail Discounts',
      description:
        'Access to discounts on 100s of retailers, health, entertainment & travel',
    },
  ];

  return (
    <section className="py-12 md:py-24 px-6 bg-[#F8F7F3]">
      <div className="max-w-7xl mx-auto">
        {/* Header */}
        <div className="text-center mb-16 space-y-4">
          <h2 className="text-5xl md:text-6xl font-serif font-light tracking-tight text-[#1E3A2A]">
            Benefits & Rewards
          </h2>
          <p className="text-xl text-[#4F4F4F] max-w-2xl mx-auto">
            We believe in rewarding excellence and investing in our team's wellbeing and growth
          </p>
        </div>

        {/* Cards Grid */}
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-6">
          {benefits.map((item, index) => (
            <div
              key={index}
              className="flex flex-col gap-6 rounded-xl border border-[#E3E3DD] bg-[#FFFFFF] shadow-sm p-6 hover:shadow-md transition-shadow duration-300"
            >
              <div className="space-y-4">
                <div className="w-12 h-12 rounded-full bg-[#DDE2DC] flex items-center justify-center">
                  {item.icon}
                </div>
                <h3 className="text-lg font-semibold text-[#1E3A2A]">{item.title}</h3>
                <p className="text-sm text-[#4F4F4F] leading-relaxed">
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
