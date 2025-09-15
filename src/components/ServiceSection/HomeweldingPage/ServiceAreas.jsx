import React from "react";
import { FaMapMarkerAlt } from "react-icons/fa";

export default function ServiceAreas() {
  const areas = [
    {
      title: "Derby City",
      desc: "Full coverage within Derby city limits",
    },
    {
      title: "Surrounding Areas",
      desc: "Within 15 miles of Derby center",
    },
    {
      title: "Extended Coverage",
      desc: "Special arrangements for further distances",
    },
  ];

  return (
    <section className="py-20 bg-[#0d1525]">
      <div className="container mx-auto px-6 md:px-10 lg:px-16">
        <h2 className="text-4xl font-bold text-center text-white mb-6">
          Service Areas
        </h2>

        <p className="text-center text-gray-300 text-lg mb-12 max-w-2xl mx-auto">
          We provide mobile welding services throughout Derby and surrounding areas
        </p>

        <div className="grid md:grid-cols-3 gap-8 max-w-5xl mx-auto">
          {areas.map((area, i) => (
            <div
              key={i}
              className="bg-[#111b2d] rounded-lg p-6 text-center shadow-md hover:shadow-lg transition-shadow"
            >
              <FaMapMarkerAlt className="w-8 h-8 text-blue-400 mx-auto mb-4" />
              <h3 className="text-lg font-semibold text-white mb-2">{area.title}</h3>
              <p className="text-gray-400 text-sm">{area.desc}</p>
            </div>
          ))}
        </div>
      </div>
    </section>
  );
}
