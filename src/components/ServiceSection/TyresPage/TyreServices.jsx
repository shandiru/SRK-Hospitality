import React from "react";
import { FaCar, FaShieldAlt, FaClock } from "react-icons/fa";

export default function TyreServices() {
  const services = [
    {
      icon: <FaCar className="w-6 h-6 text-white" />,
      title: "Tyre Fitting",
      desc: "Professional tyre fitting service with proper balancing and alignment for optimal performance.",
      items: ["Expert installation", "Wheel balancing", "Valve replacement"],
    },
    {
      icon: <FaShieldAlt className="w-6 h-6 text-white" />,
      title: "Tyre Repairs",
      desc: "Quick and reliable tyre repair services to get you back on the road safely.",
      items: ["Puncture repairs", "Sidewall damage assessment", "Emergency repairs"],
    },
    {
      icon: <FaClock className="w-6 h-6 text-white" />,
      title: "Wheel Alignment",
      desc: "Precision wheel alignment service to ensure even tyre wear and optimal handling.",
      items: ["4-wheel alignment", "Tracking adjustment", "Camber correction"],
    },
  ];

  return (
    <section className="py-20 bg-[#0d1525]">
      <div className="container mx-auto px-6 md:px-10 lg:px-16">
        <h2 className="text-4xl font-bold text-center text-white mb-16">
          Our Tyre Services
        </h2>

        <div className="grid md:grid-cols-2 lg:grid-cols-3 gap-8">
          {services.map((service, index) => (
            <div
              key={index}
              className="bg-[#111b2d] rounded-lg p-6 shadow-md hover:shadow-lg transition-shadow"
            >
              <div className="w-10 h-10 bg-blue-600 rounded-lg flex items-center justify-center mb-4">
                {service.icon}
              </div>
              <h3 className="text-lg font-semibold mb-2 text-white">
                {service.title}
              </h3>
              <p className="text-gray-400 mb-4 text-sm">{service.desc}</p>
              <ul className="space-y-1 text-gray-300 text-sm">
                {service.items.map((item, i) => (
                  <li key={i} className="flex items-center gap-2">
                    <span className="text-blue-400">✓</span>
                    <span>{item}</span>
                  </li>
                ))}
              </ul>
            </div>
          ))}
        </div>
      </div>
    </section>
  );
}
