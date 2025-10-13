'use client';
import React, { useEffect, useState } from 'react';
import { CircleCheck } from 'lucide-react';

export default function ResponsibilitiesSection() {
  const brandGold = '#DDB64E';
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

  const responsibilities = [
    'Provide friendly, courteous, and professional service at all times to the highest standards, leading by example',
    'Build and maintain an efficient team of employees, driving the team towards the objectives of the business',
    'Develop a learning culture and ensure that all team members feel valued and rewarded',
    'Manage all employees in line with agreed skills and standards, giving regular feedback and appraisals',
    'Ensure all guest requests and queries are responded to promptly and effectively',
    'Analyse Mystery Diner reports and communicate them back to your team, finding ways to improve and learn',
  ];

  return (
    <section
      className={`py-20 px-6 transition-colors duration-700 ${
        isDark ? 'bg-black text-[#E9ECEC]' : 'bg-white text-[#111111]'
      }`}
    >
      <div className="max-w-5xl mx-auto">
        <div className="grid md:grid-cols-2 gap-16 items-start">
          {/* Left Column */}
          <div className="space-y-6">
            <h2
              className="text-3xl md:text-6xl font-serif font-bold tracking-tight"
              style={{ color: brandGold }}
            >
              Key Responsibilities
            </h2>
            <p
              className={`text-lg leading-relaxed ${
                isDark ? 'text-[#DADADA]' : 'text-[#333333]'
              }`}
            >
              As a Restaurant Manager at SRK Hospitality, you'll be at the heart
              of creating exceptional dining experiences while leading and
              inspiring your team to excellence.
            </p>
          </div>

          {/* Right Column */}
          <div className="space-y-4">
            {responsibilities.map((item, index) => (
              <div
                key={index}
                className="flex gap-4 group transition-all duration-300 hover:-translate-y-[2px]"
              >
                <div className="flex-shrink-0 mt-1">
                  <CircleCheck
                    className="h-6 w-6 transition-all duration-300 group-hover:scale-110"
                    style={{ color: brandGold }}
                  />
                </div>
                <p
                  className={`leading-relaxed transition-colors duration-300 ${
                    isDark ? 'text-[#E9ECEC]' : 'text-[#111111]'
                  }`}
                >
                  {item}
                </p>
              </div>
            ))}
          </div>
        </div>
      </div>
    </section>
  );
}
