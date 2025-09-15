import React from "react";
import { FaHome, FaMapMarkerAlt, FaFire, FaClock } from "react-icons/fa";
import { GiAnvil } from "react-icons/gi";
import { MdBuild } from "react-icons/md";

export default function MobileWeldingServices() {
  const services = [
    {
      icon: <FaHome className="w-6 h-6 text-white" />,
      title: "At Your Home",
      desc: "Professional welding services at your home for gates, railings, and general repairs.",
      items: ["Garden gates & railings", "Security grilles", "General metal repairs"],
    },
    {
      icon: <FaMapMarkerAlt className="w-6 h-6 text-white" />,
      title: "On-Site Vehicle Repairs",
      desc: "Emergency vehicle welding repairs at your location when you can't get to our garage.",
      items: ["Exhaust repairs", "Chassis emergency repairs", "Roadside assistance"],
    },
    {
      icon: <FaFire className="w-6 h-6 text-white" />,
      title: "Commercial Services",
      desc: "Mobile welding for businesses, workshops, and commercial properties.",
      items: ["Industrial repairs", "Equipment fabrication", "Structural repairs"],
    },
    {
      icon: <FaClock className="w-6 h-6 text-white" />,
      title: "Emergency Call-Out",
      desc: "24/7 emergency mobile welding service for urgent repairs that can't wait.",
      items: ["24/7 availability", "Fast response time", "Emergency repairs"],
    },
    {
      icon: <GiAnvil className="w-6 h-6 text-white" />,
      title: "Custom Fabrication",
      desc: "Bespoke welding and fabrication work created at your location to your specifications.",
      items: ["Custom metalwork", "Bespoke solutions", "On-site installation"],
    },
    {
      icon: <MdBuild className="w-6 h-6 text-white" />,
      title: "Maintenance Contracts",
      desc: "Regular mobile welding maintenance for businesses and property managers.",
      items: ["Scheduled maintenance", "Priority service", "Competitive rates"],
    },
  ];

  return (
    <section className="py-20 bg-[#0d1525]">
      <div className="container mx-auto px-6 md:px-10 lg:px-16">
        <h2 className="text-4xl font-bold text-center text-white mb-16">
          Mobile Welding Services
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
