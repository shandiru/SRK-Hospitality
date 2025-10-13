"use client";

import React, { useEffect, useState } from "react";
import { ArrowRight, Mail } from "lucide-react";

export default function JoinUsSection() {
  const brandGold = "#DDB64E";
  const [isModalOpen, setIsModalOpen] = useState(false);
  const [isDark, setIsDark] = useState(false);

  // ✅ Detect dark/light mode dynamically
  useEffect(() => {
    const root = document.documentElement;
    const dark = root.classList.contains("dark");
    setIsDark(dark);

    const observer = new MutationObserver(() => {
      setIsDark(root.classList.contains("dark"));
    });
    observer.observe(root, { attributes: true, attributeFilter: ["class"] });
    return () => observer.disconnect();
  }, []);

  return (
    <section
      id="join-us"
      className={`py-32 px-6 transition-colors duration-700 ${
        isDark ? "bg-black text-[#E9ECEC]" : "bg-white text-[#111111]"
      } font-[Inter]`}
    >
      <div className="max-w-4xl mx-auto text-center space-y-10">
        {/* Heading */}
        <div className="space-y-6">
          <h2
            className="text-5xl md:text-7xl font-[Playfair_Display] font-bold tracking-tight"
            style={{ color: brandGold }}
          >
            Ready to Join Us?
          </h2>
          <p
            className={`text-xl max-w-2xl mx-auto leading-relaxed ${
              isDark ? "text-[#DADADA]" : "text-[#333333]"
            }`}
          >
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
            className={`inline-flex items-center justify-center gap-2 whitespace-nowrap font-semibold rounded-full text-lg px-10 h-14 border transition-all duration-300 ${
              isDark
                ? "bg-[#111111] text-[#E9ECEC] hover:bg-[#1A1A1A]"
                : "bg-white text-[#111111] hover:bg-[#F9F9F9]"
            }`}
            style={{
              borderColor: brandGold,
            }}
          >
            <Mail
              className="mr-2 h-5 w-5"
              style={{ color: brandGold }}
            />
            Contact Us
          </button>
        </div>

        {/* Footer Note */}
        <p
          className={`text-sm pt-8 leading-relaxed max-w-2xl mx-auto ${
            isDark ? "text-[#CFCFCF]" : "text-[#4F4F4F]"
          }`}
        >
          SRK Hospitality is an equal opportunity employer. We celebrate
          diversity and are committed to creating an inclusive environment for
          all employees.
        </p>
      </div>

      {/* ========================= MODAL ========================= */}
      {isModalOpen && (
        <div className="fixed inset-0 flex items-center justify-center bg-black/60 z-50 px-4 backdrop-blur-sm transition-all duration-500">
          <div
            className={`rounded-2xl shadow-2xl max-w-lg w-full p-8 relative transition-colors duration-500 ${
              isDark ? "bg-[#111111] text-[#E9ECEC]" : "bg-white text-[#111111]"
            }`}
          >
            {/* Close Button */}
            <button
              onClick={() => setIsModalOpen(false)}
              className="absolute top-4 right-4 text-gray-500 hover:text-[#E9ECEC] text-2xl transition-all"
            >
              ✕
            </button>

            {/* Modal Header */}
            <h2
              className="text-3xl font-[Playfair_Display] font-bold mb-2 text-center"
              style={{ color: brandGold }}
            >
              Submit Your CV
            </h2>
            <p
              className={`text-center mb-6 ${
                isDark ? "text-[#CFCFCF]" : "text-[#333333]"
              }`}
            >
              Fill out your details and upload your resume. Our HR team will get
              back to you soon!
            </p>

            {/* Form */}
            <form className="space-y-5">
              <div>
                <label
                  className={`block text-sm font-semibold mb-2 ${
                    isDark ? "text-[#E9ECEC]" : "text-[#111111]"
                  }`}
                >
                  Full Name
                </label>
                <input
                  type="text"
                  placeholder="Your Name"
                  className={`w-full border rounded-lg px-4 py-2 outline-none focus:ring-2 focus:ring-[#DDB64E] ${
                    isDark
                      ? "bg-[#1A1A1A] border-[#333] text-[#E9ECEC]"
                      : "bg-white border-[#D3D3D3] text-[#111111]"
                  }`}
                  required
                />
              </div>

              <div>
                <label
                  className={`block text-sm font-semibold mb-2 ${
                    isDark ? "text-[#E9ECEC]" : "text-[#111111]"
                  }`}
                >
                  Email Address
                </label>
                <input
                  type="email"
                  placeholder="your@email.com"
                  className={`w-full border rounded-lg px-4 py-2 outline-none focus:ring-2 focus:ring-[#DDB64E] ${
                    isDark
                      ? "bg-[#1A1A1A] border-[#333] text-[#E9ECEC]"
                      : "bg-white border-[#D3D3D3] text-[#111111]"
                  }`}
                  required
                />
              </div>

              <div>
                <label
                  className={`block text-sm font-semibold mb-2 ${
                    isDark ? "text-[#E9ECEC]" : "text-[#111111]"
                  }`}
                >
                  Upload CV
                </label>
                <input
                  type="file"
                  accept=".pdf,.doc,.docx"
                  className={`w-full border rounded-lg px-4 py-2 cursor-pointer ${
                    isDark
                      ? "bg-[#1A1A1A] border-[#333] text-[#E9ECEC]"
                      : "bg-[#F9F9F9] border-[#D3D3D3] text-[#111111]"
                  }`}
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
