"use client";

import React, { useState } from "react";
import { ArrowRight, Mail } from "lucide-react";

export default function JoinUsSection() {
  const brandGold = "#DDB64E";

  const [isModalOpen, setIsModalOpen] = useState(false);

  return (
    <section className="py-32 px-6 bg-white font-[Inter]" id="join-us">
      <div className="max-w-4xl mx-auto text-center space-y-10">
        {/* Heading */}
        <div className="space-y-6">
          <h2 className="text-5xl md:text-7xl font-[Playfair_Display] font-bold tracking-tight text-[#111111]">
            Ready to Join Us?
          </h2>
          <p className="text-xl text-[#333333] max-w-2xl mx-auto leading-relaxed">
            This is a great opportunity to join a dynamic and supportive team in
            one of the UK's most-loved restaurant brands.
          </p>
        </div>

        {/* Buttons */}
        <div className="flex flex-col sm:flex-row gap-4 justify-center pt-6">
          {/* Apply Button */}
          <button
            onClick={() => setIsModalOpen(true)}
            className="inline-flex items-center justify-center gap-2 whitespace-nowrap font-semibold rounded-full text-lg px-10 h-14 transition-all duration-300 shadow-md hover:shadow-[0_6px_25px_rgba(221,182,78,0.5)]"
            style={{
              backgroundColor: brandGold,
              color: "#111111",
            }}
          >
            Apply for This Position
            <ArrowRight className="ml-2 h-5 w-5" />
          </button>

          {/* Contact Button */}
          <button
            className="inline-flex items-center justify-center gap-2 whitespace-nowrap font-semibold rounded-full text-lg px-10 h-14 border transition-all duration-300 bg-white text-[#111111] hover:bg-[#F9F9F9] hover:border-[#DDB64E]"
            style={{
              borderColor: "#DDB64E",
            }}
          >
            <Mail className="mr-2 h-5 w-5 text-[#DDB64E]" />
            Contact Us
          </button>
        </div>

        {/* Footer Note */}
        <p className="text-sm text-[#4F4F4F] pt-8 leading-relaxed max-w-2xl mx-auto">
          SRK Hospitality is an equal opportunity employer. We celebrate
          diversity and are committed to creating an inclusive environment for
          all employees.
        </p>
      </div>

      {/* ========================= MODAL ========================= */}
      {isModalOpen && (
        <div className="fixed inset-0 flex items-center justify-center bg-black/50 z-50 px-4">
          <div className="bg-white rounded-2xl shadow-2xl max-w-lg w-full p-8 relative">
            {/* Close Button */}
            <button
              onClick={() => setIsModalOpen(false)}
              className="absolute top-4 right-4 text-gray-500 hover:text-[#111111] text-2xl transition-all"
            >
              ✕
            </button>

            {/* Modal Header */}
            <h2 className="text-3xl font-[Playfair_Display] font-bold text-[#111111] mb-2 text-center">
              Submit Your CV
            </h2>
            <p className="text-[#333333] text-center mb-6">
              Fill out your details and upload your resume. Our HR team will get
              back to you soon!
            </p>

            {/* Form */}
            <form className="space-y-5">
              <div>
                <label className="block text-sm font-semibold text-[#111111] mb-2">
                  Full Name
                </label>
                <input
                  type="text"
                  placeholder="Your Name"
                  className="w-full border border-[#D3D3D3] rounded-lg px-4 py-2 focus:ring-2 focus:ring-[#DDB64E] outline-none"
                  required
                />
              </div>

              <div>
                <label className="block text-sm font-semibold text-[#111111] mb-2">
                  Email Address
                </label>
                <input
                  type="email"
                  placeholder="your@email.com"
                  className="w-full border border-[#D3D3D3] rounded-lg px-4 py-2 focus:ring-2 focus:ring-[#DDB64E] outline-none"
                  required
                />
              </div>

              <div>
                <label className="block text-sm font-semibold text-[#111111] mb-2">
                  Upload CV
                </label>
                <input
                  type="file"
                  accept=".pdf,.doc,.docx"
                  className="w-full border border-[#D3D3D3] rounded-lg px-4 py-2 cursor-pointer bg-[#F9F9F9]"
                  required
                />
              </div>

              <button
                type="submit"
                className="w-full py-3 rounded-full font-semibold mt-4 transition-all duration-300 hover:shadow-[0_8px_25px_rgba(221,182,78,0.5)]"
                style={{
                  backgroundColor: brandGold,
                  color: "#111111",
                }}
              >
                Submit Application
              </button>
            </form>
          </div>
        </div>
      )}
    </section>
  );
}
