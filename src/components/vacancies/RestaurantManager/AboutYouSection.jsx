'use client';
import React, { useEffect, useState } from 'react';
import { Award, UsersRound, Heart, MessageCircle } from 'lucide-react';

export default function AboutYouSection() {
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

  const qualities = [
    {
      icon: <Award className="h-7 w-7" style={{ color: brandGold }} />,
      title: '2+ Years Experience',
      description:
        'Proven track record in a Restaurant Manager position or similar leadership role',
    },
    {
      icon: <UsersRound className="h-7 w-7" style={{ color: brandGold }} />,
      title: 'Team Leadership',
      description:
        'Experience overseeing and supporting a team of managers and front of house operations',
    },
    {
      icon: <Heart className="h-7 w-7" style={{ color: brandGold }} />,
      title: 'Service Excellence',
      description:
        'Passion for wowing guests with exceptional service and ability to thrive under pressure',
    },
    {
      icon: <MessageCircle className="h-7 w-7" style={{ color: brandGold }} />,
      title: 'Communication Skills',
      description:
        'Excellent English language skills and ability to communicate effectively with team and guests',
    },
  ];

  return (
    <section
      className={`py-20 px-6 transition-colors duration-700 ${
        isDark ? 'bg-black text-[#E9ECEC]' : 'bg-white text-[#111111]'
      }`}
    >
      <div className="max-w-6xl mx-auto">
        {/* Header */}
        <div className="text-center mb-16 space-y-4">
          <h2
            className="text-5xl md:text-6xl font-serif font-bold tracking-tight"
            style={{ color: brandGold }}
          >
            About You
          </h2>
          <p
            className={`text-xl max-w-2xl mx-auto ${
              isDark ? 'text-[#DADADA]' : 'text-[#333333]'
            }`}
          >
            We're looking for an experienced hospitality professional who shares
            our passion for excellence.
          </p>
        </div>

        {/* Grid */}
        <div className="grid grid-cols-1 md:grid-cols-2 gap-8">
          {qualities.map((item, index) => (
            <div
              key={index}
              className={`flex flex-col gap-6 rounded-xl border p-8 transition-all duration-300 hover:-translate-y-1 ${
                isDark
                  ? 'border-[#DDB64E]/30 bg-[#111111] hover:shadow-[0_8px_25px_rgba(221,182,78,0.25)]'
                  : 'border-[#DDB64E]/40 bg-white hover:shadow-[0_8px_25px_rgba(221,182,78,0.25)]'
              }`}
            >
              <div className="space-y-4">
                <div
                  className="w-14 h-14 rounded-full flex items-center justify-center"
                  style={{
                    backgroundColor: isDark ? `${brandGold}26` : `${brandGold}1A`,
                  }}
                >
                  {item.icon}
                </div>
                <h3
                  className={`text-2xl font-semibold ${
                    isDark ? 'text-[#F3F3F3]' : 'text-[#111111]'
                  }`}
                >
                  {item.title}
                </h3>
                <p
                  className={`leading-relaxed ${
                    isDark ? 'text-[#CFCFCF]' : 'text-[#333333]'
                  }`}
                >
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
