import React from "react";
import { FaWrench, FaShieldAlt, FaCheckCircle, FaFire } from "react-icons/fa";

export default function QualitySafetyStandards() {
  const features = [
    {
      icon: <FaWrench className="w-6 h-6 text-white" />,
      title: "Certified Welders",
      desc: "Qualified professionals with years of automotive welding experience",
    },
    {
      icon: <FaShieldAlt className="w-6 h-6 text-white" />,
      title: "Quality Materials",
      desc: "High-grade welding materials and consumables for lasting repairs",
    },
    {
      icon: <FaCheckCircle className="w-6 h-6 text-white" />,
      title: "Safety First",
      desc: "All work meets or exceeds automotive safety regulations",
    },
    {
      icon: <FaFire className="w-6 h-6 text-white" />,
      title: "Thorough Testing",
      desc: "All welds tested and inspected before job completion",
    },
  ];

  return (
    <section className="py-20 bg-[#0d1525]">
      <div className="container mx-auto px-6 md:px-10 lg:px-16">
        <h2 className="text-4xl font-bold text-center text-white mb-16">
          Quality &amp; Safety Standards
        </h2>

        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-12 text-center">
          {features.map((feature, index) => (
            <div key={index}>
              <div className="w-16 h-16 bg-blue-600 rounded-full flex items-center justify-center mx-auto mb-6">
                {feature.icon}
              </div>
              <h3 className="text-lg font-semibold text-white mb-2">
                {feature.title}
              </h3>
              <p className="text-gray-400 text-sm max-w-xs mx-auto">
                {feature.desc}
              </p>
            </div>
          ))}
        </div>
      </div>
    </section>
  );
}
