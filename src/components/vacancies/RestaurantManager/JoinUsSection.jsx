'use client';
import React from 'react';
import { ArrowRight, Mail } from 'lucide-react';

export default function JoinUsSection() {
  return (
    <section className="py-32 px-6 bg-gradient-to-br from-[#FAF9F6] to-[#F4F3EF]">
      <div className="max-w-4xl mx-auto text-center space-y-10">
        {/* Heading */}
        <div className="space-y-6">
          <h2 className="text-5xl md:text-7xl font-serif font-light tracking-tight text-[#1E3A2A]">
            Ready to Join Us?
          </h2>
          <p className="text-xl text-[#4F4F4F] max-w-2xl mx-auto leading-relaxed">
            This is a great opportunity to join a dynamic and supportive team in one of the UK's most-loved restaurant brands.
          </p>
        </div>

        {/* Buttons */}
        <div className="flex flex-col sm:flex-row gap-4 justify-center pt-6">
          {/* Apply Button */}
          <button
            className="inline-flex items-center justify-center gap-2 whitespace-nowrap font-medium rounded-md text-lg px-10 h-14 bg-[#134E4A] text-white hover:bg-[#0E3E3B] transition-all"
          >
            Apply for This Position
            <ArrowRight className="ml-2 h-5 w-5" />
          </button>

          {/* Contact Button */}
          <button
            className="inline-flex items-center justify-center gap-2 whitespace-nowrap font-medium rounded-md text-lg px-10 h-14 border border-[#D9D9D3] text-[#1E3A2A] bg-white hover:bg-[#F5F5F0] transition-all"
          >
            <Mail className="mr-2 h-5 w-5" />
            Contact Us
          </button>
        </div>

        {/* Footer Note */}
        <p className="text-sm text-[#4F4F4F] pt-8">
          SRK Hospitality is an equal opportunity employer. We celebrate diversity and are committed to creating an inclusive environment for all employees.
        </p>
      </div>
    </section>
  );
}
