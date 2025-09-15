// File: EmergencyCTA.jsx
"use client";
import React from "react";
import { FaPhone } from "react-icons/fa";

const palette = {
  primary: "#3F8D3A",          // solid green background
  fgOnPrimary: "#FFFFFF",      // white text on green
  secondaryBg: "#B9C26D",      // olive call button
  secondaryText: "#1F2A10",    // dark text on olive
  outline: "#FFFFFF",          // white outline for secondary button
};

export default function EmergencyCTA() {
  return (
    <section
      className="py-16"
      style={{ backgroundColor: palette.primary, color: palette.fgOnPrimary }}
    >
      <div className="max-w-4xl mx-auto px-4 sm:px-6 lg:px-8 text-center">
        <h2 className="text-3xl lg:text-4xl font-bold mb-4">
          Need New Tyres?
        </h2>

        <p className="text-xl mb-8 opacity-90">
         Get expert advice and competitive prices on premium tyres. Quick, efficient service guaranteed.
        </p>

        <div className="flex flex-col sm:flex-row gap-4 justify-center">
          {/* Call button */}
          <a href="tel:+441623623759" className="inline-block">
            <button
              className="inline-flex items-center justify-center gap-2 h-10 rounded-md px-6 font-semibold transition-all duration-300"
              style={{
                backgroundColor: palette.secondaryBg,
                color: palette.secondaryText,
              }}
              onMouseEnter={(e) => {
                e.currentTarget.style.boxShadow = "0 6px 20px rgba(47,125,51,0.45)";
              }}
              onMouseLeave={(e) => {
                e.currentTarget.style.boxShadow = "none";
              }}
            >
              <FaPhone className="h-5 w-5" />
              WhatsApp Quote
            </button>
          </a>

          {/* Request Quote button */}
          <button
            className="inline-flex items-center justify-center gap-2 h-10 rounded-md px-6 font-semibold border transition-all duration-300"
            style={{
              backgroundColor: "transparent",
              color: palette.fgOnPrimary,
              borderColor: palette.outline,
            }}
            onClick={() => {
              window.location.href = "/contact";
            }}
            onMouseEnter={(e) => {
              e.currentTarget.style.backgroundColor = palette.fgOnPrimary;
              e.currentTarget.style.color = palette.primary;
              e.currentTarget.style.boxShadow = "0 6px 20px rgba(47,125,51,0.35)";
            }}
            onMouseLeave={(e) => {
              e.currentTarget.style.backgroundColor = "transparent";
              e.currentTarget.style.color = palette.fgOnPrimary;
              e.currentTarget.style.boxShadow = "none";
            }}
          >
            Get Free Quote
          </button>
        </div>
      </div>
    </section>
  );
}
