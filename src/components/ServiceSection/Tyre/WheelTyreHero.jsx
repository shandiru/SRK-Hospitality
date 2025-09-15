// File: WheelTyreHero.jsx
'use client'
import React from "react";
import { FaPhoneAlt } from "react-icons/fa";

export default function WheelTyreHero() {
  const handleQuoteClick = () => {
    window.location.href = "/contact";
  };

  return (
    <section className="py-16 aircon-grad transition-colors duration-300">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className="text-center mb-12">
          {/* Badge */}
          <span
            className="
              inline-flex items-center justify-center rounded-md px-2 py-0.5
              text-xs font-medium mb-4 mt-10
            "
            style={{
              backgroundColor: "var(--aircon-badge-bg)",
              color: "var(--aircon-badge-text)",
            }}
          >
            Professional Tyre Services
          </span>

          {/* Heading */}
          <h1
            className="
              text-4xl lg:text-5xl font-black mb-6
              text-[var(--aircon-heading)]
            "
          >
           Tyre Services
          </h1>

          {/* Sub Copy */}
          <p
            className="
              text-xl max-w-3xl mx-auto leading-relaxed
              text-[var(--aircon-muted)]
            "
          >
            Professional tyre fitting, balancing, and alignment services for all vehicle types. We stock a wide range of premium tyres and offer competitive prices with expert installation.
          </p>

          {/* Actions */}
          <div className="flex flex-col sm:flex-row gap-4 justify-center mt-8">
            {/* Primary Button */}
            <a href="tel:+441623623759" className="inline-block">
              <button
                className="
                  inline-flex items-center justify-center gap-2 h-10 rounded-md px-6 font-semibold
                  bg-[var(--aircon-primary)] text-white
                  transition-all duration-300
                  hover:shadow-[0_6px_20px_rgba(47,125,51,0.45)]
                  focus-visible:outline-none focus-visible:ring-2 focus-visible:ring-[var(--aircon-primary)]
                  focus-visible:ring-offset-2 focus-visible:ring-offset-[var(--aircon-grad-top)]
                  dark:focus-visible:ring-offset-[var(--aircon-grad-top-dark)]
                "
              >
                <FaPhoneAlt className="h-5 w-5" />
                WhatsApp Us
              </button>
            </a>

            {/* Outline Button */}
            <button
              onClick={handleQuoteClick}
              className="
                inline-flex items-center justify-center gap-2 h-10 rounded-md px-6 font-semibold
                border border-[var(--aircon-outline)]
                bg-[var(--aircon-button-bg)] text-[var(--aircon-heading)]
                transition-all duration-300
                hover:bg-[var(--aircon-grad-bottom)]
                hover:shadow-[0_6px_20px_rgba(47,125,51,0.35)]
                focus-visible:outline-none focus-visible:ring-2 focus-visible:ring-[var(--aircon-primary)]
                focus-visible:ring-offset-2 focus-visible:ring-offset-[var(--aircon-grad-top)]
                dark:focus-visible:ring-offset-[var(--aircon-grad-top-dark)]
              "
            >
              Get Tyre Quote
            </button>
          </div>
        </div>
      </div>
    </section>
  );
}
