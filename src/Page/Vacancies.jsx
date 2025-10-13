"use client";
import React, { useState, useEffect } from "react";
import { useNavigate } from "react-router-dom";

export default function Vacancies() {
  const navigate = useNavigate();
  const brandGold = "#DDB64E";
  const [isDark, setIsDark] = useState(false);

  const categories = ["All", "Restaurant", "Bar", "Kitchen", "Management"];

  const vacancies = [
    {
      id: 1,
      title: "Restaurant Manager",
      category: "Management",
      company: "SRK Hospitality",
      type: "Full-time",
      salary: "Competitive Salary",
      route: "/RestaurantManagerPage",
      description:
        "Join us in creating timeless elegance and vibrant hospitality. We're searching for a confident leader to join one of the UK’s most-loved restaurant brands.",
    },
    {
      id: 2,
      title: "Head Chef",
      category: "Kitchen",
      company: "SRK Hospitality",
      type: "Full-time",
      salary: "Attractive Salary + Benefits",
      route: "/HeadChefPage",
      description:
        "Lead a passionate kitchen team in crafting premium dishes that define our culinary excellence. Experience in fine dining is a plus.",
    },
    {
      id: 3,
      title: "Bar Supervisor",
      category: "Bar",
      company: "SRK Hospitality",
      type: "Full-time",
      salary: "Competitive Salary",
      route: "/BarSupervisorPage",
      description:
        "We’re looking for a charismatic bar leader to bring energy and sophistication to our cocktail experience.",
    },
  ];

  const [selectedCategory, setSelectedCategory] = useState("All");
  const [isModalOpen, setIsModalOpen] = useState(false);

  const filteredVacancies =
    selectedCategory === "All"
      ? vacancies
      : vacancies.filter((job) => job.category === selectedCategory);

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
      className={`py-24 px-6 lg:px-12 font-[Inter] transition-colors duration-700 ${
        isDark ? "bg-[#0E1517] text-[#E9ECEC]" : "bg-white text-[#111111]"
      }`}
    >
      {/* Header */}
      <div className="text-center mb-12">
        <span
          className={`inline-block text-sm px-4 py-1 rounded-full mb-4 font-medium ${
            isDark
              ? "bg-[#DDB64E]/20 text-[#DDB64E]"
              : "bg-[#F5F5F5] text-[#111111]"
          }`}
        >
          Now Hiring
        </span>
        <h1
          className={`text-5xl md:text-6xl font-serif font-bold mb-4 transition-colors duration-500 ${
            isDark ? "text-white" : "text-[#111111]"
          }`}
        >
          Career Opportunities
        </h1>
        <p
          className={`text-lg max-w-2xl mx-auto transition-colors duration-500 ${
            isDark ? "text-[#C9D1D5]" : "text-[#333333]"
          }`}
        >
          Explore exciting roles and be part of a team that redefines British
          hospitality with elegance and warmth.
        </p>
      </div>

      {/* Category Filter */}
      <div className="flex flex-wrap justify-center gap-4 mb-10">
        {categories.map((cat) => (
          <button
            key={cat}
            onClick={() => setSelectedCategory(cat)}
            className={`px-5 py-2 rounded-full border transition-all duration-300 font-medium ${
              selectedCategory === cat
                ? "bg-[#DDB64E] text-[#111111] border-[#DDB64E]"
                : isDark
                ? "border-[#DDB64E] text-[#E9ECEC] hover:bg-[#DDB64E] hover:text-[#111111]"
                : "border-[#DDB64E] text-[#111111] hover:bg-[#DDB64E]/80 hover:text-[#111111]"
            }`}
          >
            {cat}
          </button>
        ))}
      </div>

      {/* Vacancies Grid */}
      <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8">
        {filteredVacancies.map((job) => (
          <div
            key={job.id}
            onClick={() => navigate(job.route)}
            className={`group rounded-2xl shadow-lg transition-all duration-300 p-8 border flex flex-col justify-between cursor-pointer h-[520px] ${
              isDark
                ? "bg-[#111A1D] border-[#DDB64E]/20 hover:shadow-[0_10px_30px_rgba(221,182,78,0.25)]"
                : "bg-white border-[#EAEAEA] hover:shadow-[0_10px_30px_rgba(221,182,78,0.3)]"
            }`}
          >
            <div>
              <span
                className={`inline-block text-xs px-3 py-1 rounded-full mb-3 font-medium ${
                  isDark
                    ? "bg-[#DDB64E]/20 text-[#DDB64E]"
                    : "bg-[#FFF8E6] text-[#111111]"
                }`}
              >
                Now Hiring
              </span>
              <h2
                className={`text-3xl font-serif font-bold mb-3 transition-colors duration-300 ${
                  isDark
                    ? "text-white group-hover:text-[#DDB64E]"
                    : "text-[#111111] group-hover:text-[#DDB64E]"
                }`}
              >
                {job.title}
              </h2>
              <p
                className={`font-semibold mb-1 ${
                  isDark ? "text-[#E9ECEC]" : "text-[#111111]"
                }`}
              >
                {job.company}
              </p>
              <p
                className={`text-sm mb-4 ${
                  isDark ? "text-[#C9D1D5]" : "text-[#555555]"
                }`}
              >
                {job.type} · {job.salary}
              </p>
              <p
                className={`mb-6 leading-relaxed ${
                  isDark ? "text-[#C9D1D5]" : "text-[#333333]"
                }`}
              >
                {job.description}
              </p>
            </div>

            <div className="flex gap-3 mt-auto">
              <button
                className="px-5 py-2 rounded-lg font-semibold transition-all duration-300"
                style={{
                  backgroundColor: brandGold,
                  color: "#111111",
                }}
              >
                Apply Now
              </button>
              <button
                className={`px-5 py-2 rounded-lg font-semibold border transition-all duration-300 ${
                  isDark
                    ? "border-[#DDB64E] text-[#E9ECEC] hover:bg-[#DDB64E]/20"
                    : "border-[#DDB64E] text-[#111111] hover:bg-[#DDB64E]/20"
                }`}
              >
                Learn More
              </button>
            </div>
          </div>
        ))}
      </div>

      {/* CTA Section */}
      <div
        className={`mt-20 text-center py-16 rounded-3xl transition-colors duration-700 ${
          isDark ? "bg-[#DDB64E] text-[#111111]" : "bg-[#DDB64E] text-[#111111]"
        }`}
      >
        <h2 className="text-4xl md:text-5xl font-serif font-bold mb-6">
          Join Our Hospitality Family
        </h2>
        <p
          className={`text-lg mb-8 max-w-2xl mx-auto ${
            isDark ? "text-[#1C1C1C]" : "text-[#222222]"
          }`}
        >
          Become part of our growing legacy in hospitality. Experience, passion,
          and dedication are what we value most.
        </p>
        <button
          onClick={() => setIsModalOpen(true)}
          className="px-8 py-3 rounded-full font-semibold transition-all duration-300 bg-white hover:bg-[#F7F7F7]"
          style={{
            color: "#111111",
          }}
        >
          Submit Your CV
        </button>
      </div>

      {/* ========================= CV SUBMISSION MODAL ========================= */}
      {isModalOpen && (
        <div
          className={`fixed inset-0 flex items-center justify-center z-50 px-4 transition-colors duration-500 ${
            isDark ? "bg-black/70" : "bg-black/50"
          }`}
        >
          <div
            className={`rounded-2xl shadow-2xl max-w-lg w-full p-8 relative transition-colors duration-700 ${
              isDark ? "bg-[#111A1D] text-[#E9ECEC]" : "bg-white text-[#111111]"
            }`}
          >
            {/* Close Button */}
            <button
              onClick={() => setIsModalOpen(false)}
              className={`absolute top-4 right-4 text-2xl transition-colors duration-300 ${
                isDark
                  ? "text-[#E9ECEC] hover:text-[#DDB64E]"
                  : "text-gray-500 hover:text-[#111111]"
              }`}
            >
              ✕
            </button>

            {/* Modal Header */}
            <h2 className="text-3xl font-serif font-bold mb-2 text-center">
              Submit Your CV
            </h2>
            <p className="text-center mb-6">
              We’d love to know more about you. Please fill out the details
              below.
            </p>

            {/* Form */}
            <form className="space-y-5">
              <div>
                <label className="block text-sm font-semibold mb-2">
                  Full Name
                </label>
                <input
                  type="text"
                  placeholder="Your Name"
                  className={`w-full border rounded-lg px-4 py-2 focus:ring-2 focus:ring-[#DDB64E] outline-none transition-colors duration-500 ${
                    isDark
                      ? "bg-[#0E1517] border-[#333] text-[#E9ECEC]"
                      : "bg-white border-[#D3D3D3] text-[#111111]"
                  }`}
                  required
                />
              </div>

              <div>
                <label className="block text-sm font-semibold mb-2">
                  Email Address
                </label>
                <input
                  type="email"
                  placeholder="your@email.com"
                  className={`w-full border rounded-lg px-4 py-2 focus:ring-2 focus:ring-[#DDB64E] outline-none transition-colors duration-500 ${
                    isDark
                      ? "bg-[#0E1517] border-[#333] text-[#E9ECEC]"
                      : "bg-white border-[#D3D3D3] text-[#111111]"
                  }`}
                  required
                />
              </div>

              <div>
                <label className="block text-sm font-semibold mb-2">
                  Upload CV
                </label>
                <input
                  type="file"
                  accept=".pdf,.doc,.docx"
                  className={`w-full border rounded-lg px-4 py-2 cursor-pointer transition-colors duration-500 ${
                    isDark
                      ? "bg-[#111A1D] border-[#333] text-[#E9ECEC]"
                      : "bg-[#FAFAFA] border-[#D3D3D3] text-[#111111]"
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
