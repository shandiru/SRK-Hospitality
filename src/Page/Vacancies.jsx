"use client";
import React, { useState } from "react";
import { useNavigate } from "react-router-dom";

export default function Vacancies() {
  const navigate = useNavigate();
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
    <section className="py-24 px-6 lg:px-12 bg-white text-[#111111] font-[Inter]">
      {/* Header */}
      <div className="text-center mb-12">
        <span className="inline-block bg-[#F5F5F5] text-sm px-4 py-1 rounded-full mb-4 font-medium text-[#111111]">
          Now Hiring
        </span>
        <h1 className="text-5xl md:text-6xl font-serif font-bold mb-4">
          Career Opportunities
        </h1>
        <p className="text-lg text-[#333333] max-w-2xl mx-auto">
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
                : "border-[#DDB64E] text-[#111111] hover:bg-[#DDB64E] hover:text-[#111111]"
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
            className="group bg-white rounded-2xl shadow-lg hover:shadow-[0_10px_30px_rgba(221,182,78,0.3)] transition-all duration-300 p-8 border border-[#EAEAEA] flex flex-col justify-between cursor-pointer h-[520px]"
          >
            <div>
              <span className="inline-block bg-[#FFF8E6] text-xs px-3 py-1 rounded-full mb-3 font-medium text-[#111111]">
                Now Hiring
              </span>
              <h2 className="text-3xl font-serif font-bold mb-3 text-[#111111] group-hover:text-[#DDB64E] transition-colors duration-300">
                {job.title}
              </h2>
              <p className="font-semibold mb-1 text-[#111111]">
                {job.company}
              </p>
              <p className="text-sm mb-4 text-[#555555]">
                {job.type} · {job.salary}
              </p>
              <p className="text-[#333333] mb-6 leading-relaxed">
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
                className="px-5 py-2 rounded-lg font-semibold border transition-all duration-300 hover:bg-[#DDB64E]/20"
                style={{
                  borderColor: brandGold,
                  color: "#111111",
                }}
              >
                Learn More
              </button>
            </div>
          </div>
        ))}
      </div>

      {/* CTA Section */}
      <div
        className="mt-20 text-center py-16 rounded-3xl text-[#111111]"
        style={{ backgroundColor: brandGold }}
      >
        <h2 className="text-4xl md:text-5xl font-serif font-bold mb-6">
          Join Our Hospitality Family
        </h2>
        <p className="text-lg mb-8 max-w-2xl mx-auto text-[#222222]">
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
        <div className="fixed inset-0 flex items-center justify-center bg-black/50 z-50 px-4">
          <div className="bg-white rounded-2xl shadow-2xl max-w-lg w-full p-8 relative">
            {/* Close Button */}
            <button
              onClick={() => setIsModalOpen(false)}
              className="absolute top-4 right-4 text-gray-500 hover:text-[#111111] text-2xl"
            >
              ✕
            </button>

            {/* Modal Header */}
            <h2 className="text-3xl font-serif font-bold text-[#111111] mb-2 text-center">
              Submit Your CV
            </h2>
            <p className="text-[#333333] text-center mb-6">
              We’d love to know more about you. Please fill out the details below.
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
                  className="w-full border border-[#D3D3D3] rounded-lg px-4 py-2 cursor-pointer bg-[#FAFAFA]"
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
