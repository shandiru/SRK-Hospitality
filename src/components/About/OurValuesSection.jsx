import React from "react";
import { FaShieldAlt, FaUsers, FaAward, FaClock } from "react-icons/fa";

export default function OurValuesSection() {
  return (
    <section className="py-20 bg-[#111b2d] px-6 lg:px-16">
      <div className="max-w-7xl mx-auto">
        <h2 className="text-4xl font-bold text-center mb-16 text-white">
          Our Values
        </h2>

        <div className="grid md:grid-cols-2 lg:grid-cols-4 gap-10">
          {/* Quality First */}
          <div className="text-center">
            <div className="w-16 h-16 bg-blue-600 rounded-full flex items-center justify-center mx-auto mb-4">
              <FaShieldAlt className="w-8 h-8 text-white" />
            </div>
            <h3 className="text-xl font-semibold mb-2 text-white">
              Quality First
            </h3>
            <p className="text-gray-400">
              We never compromise on the quality of our work or the parts we use
            </p>
          </div>

          {/* Customer Focus */}
          <div className="text-center">
            <div className="w-16 h-16 bg-blue-600 rounded-full flex items-center justify-center mx-auto mb-4">
              <FaUsers className="w-8 h-8 text-white" />
            </div>
            <h3 className="text-xl font-semibold mb-2 text-white">
              Customer Focus
            </h3>
            <p className="text-gray-400">
              Your satisfaction is our priority, and we go above and beyond to achieve it
            </p>
          </div>

          {/* Expertise */}
          <div className="text-center">
            <div className="w-16 h-16 bg-blue-600 rounded-full flex items-center justify-center mx-auto mb-4">
              <FaAward className="w-8 h-8 text-white" />
            </div>
            <h3 className="text-xl font-semibold mb-2 text-white">
              Expertise
            </h3>
            <p className="text-gray-400">
              Continuous training ensures our team stays current with automotive technology
            </p>
          </div>

          {/* Reliability */}
          <div className="text-center">
            <div className="w-16 h-16 bg-blue-600 rounded-full flex items-center justify-center mx-auto mb-4">
              <FaClock className="w-8 h-8 text-white" />
            </div>
            <h3 className="text-xl font-semibold mb-2 text-white">
              Reliability
            </h3>
            <p className="text-gray-400">
              Dependable service you can count on, delivered when promised
            </p>
          </div>
        </div>
      </div>
    </section>
  );
}
