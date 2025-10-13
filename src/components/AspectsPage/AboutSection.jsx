'use client';

import React, { useEffect } from "react";

export default function AboutSection() {
  const brandGold = "#DDB64E";

  // ✅ Auto dark/light mode detection
  useEffect(() => {
    const media = window.matchMedia("(prefers-color-scheme: dark)");
    const html = document.documentElement;
    if (media.matches) html.classList.add("dark");
    else html.classList.remove("dark");

    const listener = (e) => {
      if (e.matches) html.classList.add("dark");
      else html.classList.remove("dark");
    };

    media.addEventListener("change", listener);
    return () => media.removeEventListener("change", listener);
  }, []);

  return (
    <section className="bg-gradient-to-br from-[#F5F7F8] to-[#E9ECEC] dark:from-[#0C0C0C] dark:to-[#111A1D] pt-24 pb-20 px-4 md:px-12 lg:px-20 transition-colors duration-700">
      <div className="max-w-7xl mx-auto flex flex-col lg:flex-row items-center gap-14">
        
        {/* Left Image */}
        <div className="w-full lg:w-1/2 flex justify-center">
          <div className="rounded-xl overflow-hidden shadow-2xl border max-w-[600px] w-full transition-all duration-500 bg-white dark:bg-[#0E1517] border-[#DDB64E]/40">
            <img
              src="/aspects.png"
              alt="Aspects Restaurant Exterior"
              className="w-full h-auto object-cover"
            />
            <div
              className="text-center text-lg md:text-xl font-semibold py-3 rounded-b-xl"
              style={{
                backgroundColor: brandGold,
                color: "#111111",
              }}
            >
              Aspects Enderby
            </div>
          </div>
        </div>

        {/* Right Text */}
        <div className="w-full lg:w-1/2 text-center lg:text-left">
          <h2
            className="text-4xl md:text-5xl font-extrabold mb-8 underline underline-offset-[10px]"
            style={{
              color: brandGold,
              textDecorationColor: brandGold,
            }}
          >
            About Us
          </h2>

          <div className="text-[17px] md:text-[18px] leading-relaxed space-y-5 text-[#333333] dark:text-[#E8E8E8] transition-all duration-300">
            <p>
              <strong>Aspects</strong> is a modern Indian restaurant and bar located in Enderby, Leicestershire — offering a
              refined blend of authentic Indian flavours and classic English favourites.
            </p>
            <p>
              Our acclaimed chefs create dishes using traditional homemade spices and sauces, 
              ensuring every plate delivers an unforgettable experience. 
              Whether you’re dining in or ordering takeaway, every meal is cooked with heart and heritage.
            </p>
            <p>
              The open, contemporary restaurant design makes it ideal for family gatherings, 
              celebrations, or relaxed evenings with friends. 
              We believe dining is more than food — it’s a way to connect, laugh, and create lasting memories.
            </p>
            <p>
              <em>
                “A great chef knows the spices; an excellent chef knows how to use them.”
              </em>
            </p>
            <p>
              <strong>Welcome to Aspects — where the true taste of India comes alive.</strong>
            </p>
          </div>
        </div>
      </div>
    </section>
  );
}
