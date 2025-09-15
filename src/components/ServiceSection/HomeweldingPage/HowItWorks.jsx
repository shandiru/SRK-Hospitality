import React from "react";

export default function HowItWorks() {
  const steps = [
    {
      title: "1. Request a Visit",
      desc: "Contact us via phone, WhatsApp, or online form. Describe the issue or upload images for a quick estimate."
    },
    {
      title: "2. Get a Quote",
      desc: "We send you a detailed quote. For urgent jobs, we can provide pricing on-site before we begin."
    },
    {
      title: "3. On-Site Welding",
      desc: "We arrive at the scheduled time with our mobile rig and complete the work at your location."
    },
    {
      title: "4. Clean-Up & Inspection",
      desc: "After welding, we inspect the work for quality and safety, and clean the work area before leaving."
    }
  ];

  return (
    <section className="py-20 bg-[#0d1525]">
      <div className="container mx-auto px-6 md:px-10 lg:px-16">
        <h2 className="text-4xl font-bold text-center text-white mb-12">
          How Our Mobile Welding Service Works
        </h2>

        <div className="grid md:grid-cols-4 gap-8 text-center md:text-left max-w-6xl mx-auto">
          {steps.map((step, i) => (
            <div
              key={i}
              className="bg-[#111b2d] rounded-lg p-6 shadow-md hover:shadow-lg transition-shadow"
            >
              <h3 className="text-lg font-semibold text-white mb-2">{step.title}</h3>
              <p className="text-gray-300 text-sm leading-relaxed">{step.desc}</p>
            </div>
          ))}
        </div>
      </div>
    </section>
  );
}
