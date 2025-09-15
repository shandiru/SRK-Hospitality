import React from "react";
import { FaClock, FaUsers, FaAward } from "react-icons/fa";

export default function OurStorySection() {
  return (
    <section className="py-20 bg-[#0d1525] px-6 lg:px-16 text-white">
      <div className="max-w-6xl mx-auto">
        {/* Section Heading */}
        <h2 className="text-4xl font-bold text-center mb-16">Our Story</h2>

        <div className="grid md:grid-cols-2 gap-12 items-start">
          {/* LEFT TEXT */}
          <div>
            <h3 className="text-2xl font-semibold mb-6 text-blue-400">
              Four Decades of Excellence
            </h3>
            <div className="space-y-5 text-gray-300 leading-relaxed">
              <p>
                Founded in 1980, Shahz tyres began as a small family-run garage with a
                simple mission: to provide honest, reliable automotive services to the
                Derby community. What started as a one-man operation has grown into one
                of Derby's most trusted automotive service centers.
              </p>
              <p>
                Over the years, we've adapted to the changing automotive landscape,
                investing in the latest diagnostic equipment and training our technicians
                on the newest vehicle technologies. Despite our growth, we've never lost
                sight of our core values: quality workmanship, fair pricing, and
                exceptional customer service.
              </p>
              <p>
                Today, we're proud to serve thousands of satisfied customers throughout
                Derby and the surrounding areas, maintaining vehicles of all makes and
                models with the same attention to detail that has defined us for over
                four decades.
              </p>
            </div>
          </div>

          {/* RIGHT STATS */}
          <div className="space-y-6">
            <div className="bg-[#111b2d] rounded-lg p-6">
              <div className="flex items-center space-x-4">
                <div className="w-12 h-12 bg-blue-600 rounded-lg flex items-center justify-center">
                  <FaClock className="w-6 h-6 text-white" />
                </div>
                <div>
                  <h4 className="text-xl font-semibold">40+ Years</h4>
                  <p className="text-gray-400">Of trusted service</p>
                </div>
              </div>
            </div>

            <div className="bg-[#111b2d] rounded-lg p-6">
              <div className="flex items-center space-x-4">
                <div className="w-12 h-12 bg-blue-600 rounded-lg flex items-center justify-center">
                  <FaUsers className="w-6 h-6 text-white" />
                </div>
                <div>
                  <h4 className="text-xl font-semibold">10,000+</h4>
                  <p className="text-gray-400">Satisfied customers</p>
                </div>
              </div>
            </div>

            <div className="bg-[#111b2d] rounded-lg p-6">
              <div className="flex items-center space-x-4">
                <div className="w-12 h-12 bg-blue-600 rounded-lg flex items-center justify-center">
                  <FaAward className="w-6 h-6 text-white" />
                </div>
                <div>
                  <h4 className="text-xl font-semibold">Family Owned</h4>
                  <p className="text-gray-400">Three generations</p>
                </div>
              </div>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
}
