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
  const brandGold = "#DDB64E";

  const benefits = [
    {
      icon: <Coins className="h-6 w-6 text-[#DDB64E]" />,
      title: 'Competitive Pay',
      description:
        'Industry-leading salary based on experience plus variable tronc for all managers',
    },
    {
      icon: <Users className="h-6 w-6 text-[#DDB64E]" />,
      title: '50% Staff Discount',
      description:
        'For you and up to 3 friends when dining in our restaurants',
    },
    {
      icon: <Gift className="h-6 w-6 text-[#DDB64E]" />,
      title: 'Anniversary Rewards',
      description:
        'Celebrate career milestones with gift vouchers to dine with us',
    },
    {
      icon: <GraduationCap className="h-6 w-6 text-[#DDB64E]" />,
      title: 'Career Development',
      description:
        'Comprehensive training programs including Apprenticeships',
    },
    {
      icon: <Utensils className="h-6 w-6 text-[#DDB64E]" />,
      title: 'Free Meals & Drinks',
      description:
        'Complimentary food and drinks to the same standard we serve guests',
    },
    {
      icon: <Calendar className="h-6 w-6 text-[#DDB64E]" />,
      title: 'Extra Holiday Days',
      description: 'Up to 5 additional days off after 5 years of service',
    },
    {
      icon: <Cake className="h-6 w-6 text-[#DDB64E]" />,
      title: 'Birthday Off',
      description:
        'Your birthday as a guaranteed day off - celebrate in style!',
    },
    {
      icon: <Sparkles className="h-6 w-6 text-[#DDB64E]" />,
      title: 'Retail Discounts',
      description:
        'Access to discounts on 100s of retailers, health, entertainment & travel',
    },
  ];

  return (
    <section className="py-20 px-6 bg-white">
      <div className="max-w-7xl mx-auto">
        {/* Header */}
        <div className="text-center mb-16 space-y-4">
          <h2 className="text-5xl md:text-6xl font-serif font-bold tracking-tight text-[#111111]">
            Benefits & Rewards
          </h2>
          <p className="text-xl text-[#333333] max-w-2xl mx-auto">
            We believe in rewarding excellence and investing in our team's wellbeing and growth.
          </p>
        </div>

        {/* Cards Grid */}
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-6">
          {benefits.map((item, index) => (
            <div
              key={index}
              className="flex flex-col gap-6 rounded-xl border border-[#DDB64E]/40 bg-white shadow-sm p-6 hover:shadow-[0_8px_25px_rgba(221,182,78,0.25)] transition-all duration-300 hover:-translate-y-1"
            >
              <div className="space-y-4">
                <div
                  className="w-12 h-12 rounded-full flex items-center justify-center"
                  style={{ backgroundColor: `${brandGold}1A` }} // gold tint background
                >
                  {item.icon}
                </div>
                <h3 className="text-lg font-semibold text-[#111111]">
                  {item.title}
                </h3>
                <p className="text-sm text-[#333333] leading-relaxed">
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
