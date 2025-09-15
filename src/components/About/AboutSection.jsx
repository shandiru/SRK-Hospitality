import React from "react";
import { FaAward } from "react-icons/fa";

export default function AboutSection() {
  return (
    <div className=" bg-[#0d1525] text-white pt-10">
      <section className="relative py-20 bg-gradient-to-b from-[#111b2d] to-[#0d1525] px-6 lg:px-16">
        <div className="max-w-4xl mx-auto text-center">
          {/* Badge */}
          <div className="inline-flex items-center border border-blue-500 text-blue-400 bg-blue-500/10 px-3 py-1 rounded-full mb-6">
            <FaAward className="w-4 h-4 mr-2" />
            Established 1980
          </div>

          {/* Heading */}
          <h1 className="text-5xl lg:text-6xl font-bold mb-6">
            About <span className="text-blue-400">Shahz tyres</span>
          </h1>

          {/* Description */}
          <p className="text-xl text-gray-300 max-w-3xl mx-auto">
            For over 40 years, Shahz tyres has been Derby's trusted automotive service
            provider. We combine decades of experience with modern technology to
            deliver exceptional results for every customer.
          </p>
        </div>
      </section>
    </div>
  );
}
