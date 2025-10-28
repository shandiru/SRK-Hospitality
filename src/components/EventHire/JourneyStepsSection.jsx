"use client";
import React from "react";
import {
  MessageCircle,
  Search,
  CircleCheckBig,
  PartyPopper,
} from "lucide-react";

const JourneyStepsSection = () => {
  const steps = [
    {
      icon: <MessageCircle className="w-8 h-8 text-[#D8B04C]" />,
      step: "Step 1",
      title: "Tell Us Your Vision",
      desc: "Share your event details, preferences, and requirements. We listen carefully to understand exactly what you need.",
    },
    {
      icon: <Search className="w-8 h-8 text-[#D8B04C]" />,
      step: "Step 2",
      title: "We Find Perfect Matches",
      desc: "Our team searches our extensive network across the UK and Dubai to find venues that tick all your boxes.",
    },
    {
      icon: <CircleCheckBig className="w-8 h-8 text-[#D8B04C]" />,
      step: "Step 3",
      title: "Review & Refine",
      desc: "We present you with carefully curated options and work with you to narrow down to your ideal venue.",
    },
    {
      icon: <PartyPopper className="w-8 h-8 text-[#D8B04C]" />,
      step: "Step 4",
      title: "Book with Confidence",
      desc: "We handle all the details and coordination, ensuring everything is perfect for your special day.",
    },
  ];

  return (
    <section className="py-20 px-6 bg-[#FFF8E6] font-['Poppins']">
      <div className="max-w-7xl mx-auto">
        {/* Heading */}
        <div className="text-center mb-16">
          <h2 className="text-3xl md:text-4xl font-bold mb-4 text-[#1A1A1A]">
            A Stress-Free Journey, Every Step of the Way
          </h2>
          <p className="text-lg text-[#4A4A4A] leading-relaxed max-w-2xl mx-auto">
            Our dedicated team guides you through the entire process, making
            venue finding effortless and enjoyable.
          </p>
        </div>

        {/* Steps Grid */}
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-10 relative">
          {steps.map((item, index) => (
            <div key={index} className="relative">
              <div className="flex flex-col items-center text-center">
                {/* Icon */}
                <div className="w-16 h-16 rounded-full bg-[#D8B04C]/10 flex items-center justify-center mb-4">
                  {item.icon}
                </div>

                {/* Step */}
                <span className="text-sm font-semibold text-[#D8B04C] mb-2">
                  {item.step}
                </span>

                {/* Title */}
                <h3 className="text-xl font-semibold mb-3 text-[#1A1A1A]">
                  {item.title}
                </h3>

                {/* Description */}
                <p className="text-[#4A4A4A] leading-relaxed">{item.desc}</p>
              </div>

              {/* Connecting line (only visible on large screens) */}
              {index < steps.length - 1 && (
                <div
                  className="hidden lg:block absolute top-8 left-[60%] w-[80%] h-0.5 bg-[#D8B04C]/30"
                  aria-hidden="true"
                ></div>
              )}
            </div>
          ))}
        </div>
      </div>
    </section>
  );
};

export default JourneyStepsSection;
