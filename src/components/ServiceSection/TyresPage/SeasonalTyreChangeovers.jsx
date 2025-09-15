import React from "react";

export default function SeasonalTyreChangeovers() {
  return (
    <section className="py-20 bg-[#0d1525]">
      <div className="container mx-auto px-6 md:px-10 lg:px-16">
        {/* Heading */}
        <h2 className="text-4xl font-bold text-center text-white mb-12">
          Seasonal Tyre Changeovers
        </h2>

        {/* Content Card */}
        <div className="bg-[#111b2d] rounded-lg p-8 max-w-5xl mx-auto">
          <p className="text-gray-300 mb-6">
            If you drive in areas with changing climates, seasonal tyre changeovers can
            enhance grip, safety, and performance. We offer quick swaps and storage options
            for your summer and winter sets.
          </p>

          <ul className="space-y-3 text-sm text-gray-300">
            <li className="flex items-center gap-2">
              <span className="text-blue-400">✓</span>
              Summer-to-winter and winter-to-summer changeovers
            </li>
            <li className="flex items-center gap-2">
              <span className="text-blue-400">✓</span>
              Inspection of tyre condition before re-installation
            </li>
            <li className="flex items-center gap-2">
              <span className="text-blue-400">✓</span>
              Optional storage for off-season tyres
            </li>
          </ul>
        </div>
      </div>
    </section>
  );
}
