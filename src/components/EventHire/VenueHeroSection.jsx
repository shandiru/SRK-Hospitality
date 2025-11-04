"use client";
import React from "react";
import { MapPin, Calendar, Users, Sparkles } from "lucide-react";

const VenueHeroSection = () => {
  return (
    <section className="relative bg-[#D8B04C] text-white py-16 md:py-24 px-6 sm:px-8 lg:px-12 font-['Poppins'] overflow-hidden">
      <div className="max-w-7xl mx-auto">
        <div className="max-w-4xl">
          {/* Heading */}
          <h1 className="text-4xl sm:text-5xl md:text-6xl font-bold mb-6 mt-15 text-center md:text-left leading-snug sm:leading-tight">
            Find Your Perfect Venue
          </h1>

          {/* Subtext */}
          <p className="text-lg sm:text-xl md:text-2xl text-white/90 mb-8 leading-relaxed">
            From intimate parties to grand weddings, corporate events to
            international conferences. We cover it all across the UK and Dubai.
          </p>

          {/* Features */}
          <div className="flex flex-wrap gap-4 sm:gap-6 text-sm sm:text-base">
            <div className="flex items-center gap-2 min-w-[140px]">
              <MapPin className="w-5 h-5 flex-shrink-0" />
              <span>UK & Dubai</span>
            </div>

            <div className="flex items-center gap-2 min-w-[160px]">
              <Calendar className="w-5 h-5 flex-shrink-0" />
              <span>All Event Types</span>
            </div>

            <div className="flex items-center gap-2 min-w-[160px]">
              <Users className="w-5 h-5 flex-shrink-0" />
              <span>Any Group Size</span>
            </div>

            <div className="flex items-center gap-2 min-w-[190px]">
              <Sparkles className="w-5 h-5 flex-shrink-0" />
              <span>Personalised Service</span>
            </div>
          </div>
        </div>
      </div>

      {/* Optional subtle linear overlay for premium depth */}
      <div className="absolute inset-0 bg-linear-to-b from-[#D8B04C]/0 to-[#B8922D]/20 pointer-events-none"></div>
    </section>
  );
};

export default VenueHeroSection;
