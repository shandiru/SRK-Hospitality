'use client';
import React from 'react';
import { CircleCheck } from 'lucide-react';

export default function ResponsibilitiesSection() {
  const responsibilities = [
    'Provide friendly, courteous, and professional service at all times to the highest standards, leading by example',
    'Build and maintain an efficient team of employees, driving the team towards the objectives of the business',
    'Develop a learning culture and ensure that all team members feel valued and rewarded',
    'Manage all employees in line with agreed skills and standards, giving regular feedback and appraisals',
    'Ensure all guest requests and queries are responded to promptly and effectively',
    'Analyse Mystery Diner reports and communicate them back to your team, finding ways to improve and learn',
  ];

  return (
    <section className="py-12 md:py-24 px-6 bg-[#FAF9F6]">
      <div className="max-w-5xl mx-auto">
        <div className="grid md:grid-cols-2 gap-16 items-start">
          {/* Left Column */}
          <div className="space-y-6">
            <h2 className="text-3xl md:text-6xl font-serif font-light tracking-tight text-[#1E3A2A]">
              Key Responsibilities
            </h2>
            <p className="text-lg text-[#4F4F4F] leading-relaxed">
              As a Restaurant Manager at SRK Hospitality, you'll be at the heart of creating exceptional dining experiences while leading and inspiring your team to excellence.
            </p>
          </div>

          {/* Right Column */}
          <div className="space-y-4">
            {responsibilities.map((item, index) => (
              <div key={index} className="flex gap-4 group">
                <div className="flex-shrink-0 mt-1">
                  <CircleCheck className="h-6 w-6 text-[#1E3A2A] group-hover:scale-110 transition-transform duration-200" />
                </div>
                <p className="text-[#1E1E1E] leading-relaxed">{item}</p>
              </div>
            ))}
          </div>
        </div>
      </div>
    </section>
  );
}
