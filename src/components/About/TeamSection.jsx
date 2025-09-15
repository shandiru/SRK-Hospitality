import React from "react";

export default function TeamSection() {
  return (
    <section className="py-20 bg-[#111b2d] px-6 lg:px-16">
      <div className="max-w-6xl mx-auto text-center">
        <h2 className="text-4xl font-bold mb-16 text-white">Meet Our Team</h2>

        <div className="grid md:grid-cols-3 gap-10">
          {/* Andrew */}
          <div className="bg-[#1a2742] rounded-lg p-8 hover:scale-105 transition-transform">
            <div className="w-24 h-24 bg-blue-600 rounded-full flex items-center justify-center mx-auto mb-6">
              <span className="text-white font-bold text-2xl">AB</span>
            </div>
            <h3 className="text-xl font-semibold mb-2 text-white">
              Andrew Thompson
            </h3>
            <p className="text-blue-400 mb-3">Founder & Master Technician</p>
            <p className="text-gray-400 text-sm leading-relaxed">
              With over 40 years of experience, Andrew founded Shahz tyres and
              continues to oversee all major repairs and training.
            </p>
          </div>

          {/* Tom */}
          <div className="bg-[#1a2742] rounded-lg p-8 hover:scale-105 transition-transform">
            <div className="w-24 h-24 bg-blue-600 rounded-full flex items-center justify-center mx-auto mb-6">
              <span className="text-white font-bold text-2xl">TB</span>
            </div>
            <h3 className="text-xl font-semibold mb-2 text-white">
              Tom Bradley
            </h3>
            <p className="text-blue-400 mb-3">Senior Technician</p>
            <p className="text-gray-400 text-sm leading-relaxed">
              Specializing in engine diagnostics and electrical systems, Tom
              brings 25 years of expertise to every repair.
            </p>
          </div>

          {/* Sarah */}
          <div className="bg-[#1a2742] rounded-lg p-8 hover:scale-105 transition-transform">
            <div className="w-24 h-24 bg-blue-600 rounded-full flex items-center justify-center mx-auto mb-6">
              <span className="text-white font-bold text-2xl">SJ</span>
            </div>
            <h3 className="text-xl font-semibold mb-2 text-white">
              Sarah Johnson
            </h3>
            <p className="text-blue-400 mb-3">Service Manager</p>
            <p className="text-gray-400 text-sm leading-relaxed">
              Sarah ensures every customer receives exceptional service and keeps
              our operations running smoothly.
            </p>
          </div>
        </div>
      </div>
    </section>
  );
}
