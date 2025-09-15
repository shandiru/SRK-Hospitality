import React from "react";
import { FaCalendarCheck, FaPhoneAlt } from "react-icons/fa";

export default function CTASection() {
  return (
    <section className="py-20 bg-[#111b2d] px-6 lg:px-16">
      <div className="max-w-4xl mx-auto text-center">
        <h2 className="text-4xl font-bold mb-6 text-white">
          Experience the Shahz tyres Difference
        </h2>

        <p className="text-lg text-gray-300 mb-10 leading-relaxed">
          Join thousands of satisfied customers who trust Shahz tyres with their
          automotive needs.
        </p>

        <div className="flex flex-col sm:flex-row gap-4 justify-center">
          {/* Book Service Today */}
          <a
            href="/contact" // 👈 change to your booking page or section (e.g. "#booking-form")
            className="flex items-center gap-2 justify-center bg-blue-600 hover:bg-blue-700 text-white px-8 py-4 text-lg rounded-md transition-colors duration-300"
          >
            <FaCalendarCheck className="w-5 h-5" />
            Book Service Today
          </a>

          {/* Contact Us */}
          <a
            href="tel:+44162365615" // 👈 or use "/contact" page link
            className="flex items-center gap-2 justify-center border border-blue-500 text-blue-400 hover:bg-blue-500 hover:text-white px-8 py-4 text-lg rounded-md transition-colors duration-300 bg-transparent"
          >
            <FaPhoneAlt className="w-5 h-5" />
            Contact Us
          </a>
        </div>
      </div>
    </section>
  );
}
