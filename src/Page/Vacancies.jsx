"use client";
import React, { useState } from "react";
import { useNavigate } from "react-router-dom";

export default function Vacancies() {
  const navigate = useNavigate();

  const brandGreen = "#0D3B2E";
  const brandCream = "#FAF9F6";
  const brandGold = "#DDB64E";

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

  return (
    <section
      className="py-24 px-6 lg:px-12"
      style={{ backgroundColor: brandCream, color: brandGreen }}
    >
      {/* Header */}
      <div className="text-center mb-12">
        <span className="inline-block bg-[#EDEBE7] text-sm px-4 py-1 rounded-full mb-4 font-medium">
          Now Hiring
        </span>
        <h1 className="text-5xl md:text-6xl font-serif font-bold mb-4">
          Career Opportunities
        </h1>
        <p className="text-lg text-gray-700 max-w-2xl mx-auto">
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
            className={`px-5 py-2 rounded-full border transition-all duration-300 ${
              selectedCategory === cat
                ? "bg-[#0D3B2E] text-white border-[#0D3B2E]"
                : "border-[#0D3B2E] text-[#0D3B2E] hover:bg-[#0D3B2E] hover:text-white"
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
            className="group bg-white rounded-2xl shadow-lg hover:shadow-xl transition-all duration-300 p-8 border border-[#EDEBE7] flex flex-col justify-between cursor-pointer h-[520px]"
          >
            <div>
              <span className="inline-block bg-[#EDEBE7] text-xs px-3 py-1 rounded-full mb-3 font-medium">
                Now Hiring
              </span>
              <h2 className="text-3xl font-serif font-bold mb-3 text-[#0D3B2E] group-hover:text-[#0B3025]">
                {job.title}
              </h2>
              <p className="font-semibold mb-1">{job.company}</p>
              <p className="text-sm mb-4 text-gray-600">
                {job.type} · {job.salary}
              </p>
              <p className="text-gray-700 mb-6 leading-relaxed">
                {job.description}
              </p>
            </div>

            <div className="flex gap-3 mt-auto">
              <button
                className="px-5 py-2 rounded-lg font-semibold transition-all duration-300"
                style={{
                  backgroundColor: brandGreen,
                  color: "#FFFFFF",
                }}
              >
                Apply Now
              </button>
              <button
                className="px-5 py-2 rounded-lg font-semibold border transition-all duration-300"
                style={{
                  borderColor: brandGreen,
                  color: brandGreen,
                }}
              >
                Learn More
              </button>
            </div>
          </div>
        ))}
      </div>

      {/* CTA Section */}
      <div className="mt-20 text-center py-16 rounded-3xl bg-[#0D3B2E] text-white">
        <h2 className="text-4xl md:text-5xl font-serif font-semibold mb-6">
          Join Our Hospitality Family
        </h2>
        <p className="text-lg mb-8 max-w-2xl mx-auto text-gray-200">
          Become part of our growing legacy in hospitality. Experience, passion,
          and dedication are what we value most.
        </p>
        <button
          onClick={() => setIsModalOpen(true)} // ✅ Open modal
          className="px-8 py-3 rounded-lg font-semibold"
          style={{
            backgroundColor: brandGold,
            color: brandGreen,
          }}
        >
          Submit Your CV
        </button>
      </div>

      {/* ========================= CV SUBMISSION MODAL ========================= */}
      {isModalOpen && (
        <div className="fixed inset-0 flex items-center justify-center bg-black/50 z-50 px-4">
          <div className="bg-white rounded-2xl shadow-2xl max-w-lg w-full p-8 relative">
            {/* Close Button */}
            <button
              onClick={() => setIsModalOpen(false)}
              className="absolute top-4 right-4 text-gray-500 hover:text-gray-800 text-2xl"
            >
              ✕
            </button>

            {/* Modal Header */}
            <h2 className="text-3xl font-serif font-bold text-[#0D3B2E] mb-2 text-center">
              Submit Your CV
            </h2>
            <p className="text-gray-600 text-center mb-6">
              We’d love to know more about you. Please fill out the details below.
            </p>

            {/* Form */}
            <form className="space-y-5">
              <div>
                <label className="block text-sm font-semibold text-[#0D3B2E] mb-2">
                  Full Name
                </label>
                <input
                  type="text"
                  placeholder="Your Name"
                  className="w-full border border-gray-300 rounded-lg px-4 py-2 focus:ring-2 focus:ring-[#DDB64E] outline-none"
                  required
                />
              </div>

              <div>
                <label className="block text-sm font-semibold text-[#0D3B2E] mb-2">
                  Email Address
                </label>
                <input
                  type="email"
                  placeholder="your@email.com"
                  className="w-full border border-gray-300 rounded-lg px-4 py-2 focus:ring-2 focus:ring-[#DDB64E] outline-none"
                  required
                />
              </div>

              <div>
                <label className="block text-sm font-semibold text-[#0D3B2E] mb-2">
                  Upload CV
                </label>
                <input
                  type="file"
                  accept=".pdf,.doc,.docx"
                  className="w-full border border-gray-300 rounded-lg px-4 py-2 cursor-pointer bg-[#FAF9F6]"
                  required
                />
              </div>

              <button
                type="submit"
                className="w-full py-3 rounded-lg font-semibold mt-4 transition-all duration-300"
                style={{
                  backgroundColor: brandGold,
                  color: brandGreen,
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
