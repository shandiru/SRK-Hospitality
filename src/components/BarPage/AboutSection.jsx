"use client";

import React, { useEffect, useState } from "react";

export default function AboutSection() {
  const [isDark, setIsDark] = useState(false);
  const brandGold = "#E1B43B"; // Logo gold color only

  useEffect(() => {
    const root = document.documentElement;
    const dark = root.classList.contains("dark");
    setIsDark(dark);

    const observer = new MutationObserver(() => {
      setIsDark(root.classList.contains("dark"));
    });
    observer.observe(root, { attributes: true, attributeFilter: ["class"] });

    return () => observer.disconnect();
  }, []);

  return (
    <section
      className={`relative pt-24 pb-24 px-6 md:px-12 lg:px-20 transition-colors duration-700 ${
        isDark
          ? "bg-gradient-to-br from-[#0D0D0D] to-[#1B1B1B]"
          : "bg-gradient-to-br from-[#FFFFFF] to-[#F8F8F8]"
      }`}
    >
      {/* Soft gold glow behind content */}
      <div
        className="absolute inset-0 opacity-[0.05] pointer-events-none"
        style={{
          background: `radial-gradient(circle at center, ${brandGold} 0%, transparent 70%)`,
        }}
      ></div>

      <div className="relative max-w-7xl mx-auto flex flex-col lg:flex-row items-center gap-16">
        {/* === LEFT: IMAGE === */}
        <div className="w-full lg:w-1/2 flex justify-center">
          <div
            className={`rounded-2xl overflow-hidden shadow-xl max-w-[600px] w-full border transition-all duration-500 group ${
              isDark
                ? "border-[#E1B43B]/40 bg-[#111]"
                : "border-[#E1B43B]/20 bg-white"
            }`}
          >
            <div className="relative">
              <img
                src="/about.png"
                alt="1573 Bar & Grill Exterior"
                className="w-full h-auto object-cover transform group-hover:scale-[1.02] transition-transform duration-700 ease-out"
              />
              <div
                className="absolute bottom-0 left-0 w-full text-center text-white text-lg md:text-xl font-semibold py-3 backdrop-blur-md"
                style={{
                  background: `linear-gradient(90deg, ${brandGold}, ${brandGold}D0)`,
                }}
              >
                1573 Bar & Restaurant
              </div>
            </div>
          </div>
        </div>

        {/* === RIGHT: TEXT === */}
        <div className="w-full lg:w-1/2 text-center lg:text-left relative">
          <h2
            className="text-4xl md:text-5xl font-[Playfair_Display] font-bold mb-8 tracking-tight underline underline-offset-[10px]"
            style={{
              color: isDark ? "#FFFFFF" : "#111111",
              textDecorationColor: brandGold,
            }}
          >
            About Us
          </h2>

          <div
            className={`text-[17px] md:text-[18px] leading-relaxed space-y-5 font-[Inter] ${
              isDark ? "text-[#EAEAEA]" : "text-[#333333]"
            }`}
          >
            <p>
              The Old (Free) Grammar School, built in <strong>1573</strong>, is a
              Grade II* listed building — one of England’s oldest school
              structures. Today, it stands proudly as{" "}
              <span style={{ color: brandGold, fontWeight: "600" }}>
                1573 Bar & Grill
              </span>
              , a celebration of heritage and modern dining at Highcross
              Leicester.
            </p>

            <p>
              Since opening in 2009, we’ve become a destination for those who
              appreciate fine food, rich history, and genuine hospitality.
            </p>

            <p>
              Every meal is crafted with the freshest seasonal ingredients,
              paired with an exclusive range of wines and champagnes — creating
              unforgettable dining experiences.
            </p>

            <p>
              Our menu brings together premium cuts, ocean-fresh seafood, and
              vegetarian delicacies — all perfectly grilled and elegantly served.
            </p>

            <p>
              Step onto our outdoor terrace and enjoy a drink overlooking the
              bustling Highcross courtyard — the perfect mix of old charm and
              new energy.
            </p>
          </div>

          {/* Accent Divider */}
          <div
            className="w-28 h-[3px] mt-10 mb-10 rounded-full mx-auto lg:mx-0"
            style={{
              backgroundColor: brandGold,
            }}
          ></div>

          {/* CTA Button */}
          <div>
            <a
              href="/menu"
              className="inline-block font-semibold px-8 py-3.5 rounded-full text-base md:text-lg transition-all duration-500 shadow-md"
              style={{
                backgroundColor: brandGold,
                color: "#111111",
              }}
            >
              Explore Our Menu
            </a>
          </div>
        </div>
      </div>
    </section>
  );
}
