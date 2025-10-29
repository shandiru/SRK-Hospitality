"use client";
import { useEffect, useState } from "react";
import { BsWhatsapp } from "react-icons/bs";
import { FaEnvelope } from "react-icons/fa";
import { Link } from "react-router-dom";

export default function Footer() {
  const brandGold = "#DDB64E";
  const [isDark, setIsDark] = useState(false);

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
    <footer
      className={`transition-colors duration-700 font-[Inter] ${
        isDark
          ? "bg-[#0B0E0F] text-[#E9ECEC]"
          : "bg-white text-[#333333]"
      }`}
    >
      {/* === Main Footer === */}
      <div className="max-w-7xl mx-auto px-6 md:px-12 py-16 grid grid-cols-1 md:grid-cols-3 gap-12 items-start">
        {/* Left Section */}
        <div className="flex flex-col items-center md:items-start">
          <h3
            className={`text-xl font-[Playfair_Display] font-semibold mb-3 ${
              isDark ? "text-white" : "text-[#111111]"
            }`}
          >
            SRK Hospitality Limited
          </h3>
          <p
            className={`text-sm md:text-base leading-relaxed max-w-xs ${
              isDark ? "text-[#C9D1D5]" : "text-[#333333]"
            }`}
          >
            Celebrating the passion of independent culinary businesses across the
            UK.
          </p>
        </div>

        {/* Middle Section */}
        <div className="flex flex-col items-center md:items-start">
          <h4
            className="font-[Playfair_Display] font-semibold text-lg mb-3"
            style={{ color: brandGold }}
          >
            Quick Links
          </h4>
          <ul
            className={`space-y-2 text-sm md:text-base font-[Inter] ${
              isDark ? "text-[#E9ECEC]" : "text-[#111111]"
            }`}
          >
            {[
              { label: "Home", href: "/" },
              { label: "Our Venues", href: "/venues" },
              { label: "Vacancies", href: "/vacancies" },
              { label: "Contact Us", href: "mailto:info@srkhospitality.co.uk" },
            ].map((link, i) => (
              <li key={i}>
                <a
                  href={link.href}
                  className={`transition-colors duration-300 ${
                    isDark
                      ? "text-[#E9ECEC] hover:text-[#DDB64E]"
                      : "text-[#111111] hover:text-[#DDB64E]"
                  }`}
                  style={{ textDecoration: "none" }}
                >
                  {link.label}
                </a>
              </li>
            ))}
          </ul>
        </div>

        {/* Right Section (Contact Info) */}
        <div className="flex flex-col items-center md:items-start">
          <h4
            className="font-[Playfair_Display] font-semibold text-lg mb-4"
            style={{ color: brandGold }}
          >
            Get in Touch
          </h4>

          <div className="flex flex-col gap-4 text-sm md:text-base">
            {/* WhatsApp */}
            <div className="flex items-center gap-3">
              <BsWhatsapp size={18} className="text-[#DDB64E]" />
              <a
                href="https://wa.me/447466093996"
                target="_blank"
                rel="noopener noreferrer"
                className={`transition-colors duration-300 ${
                  isDark
                    ? "text-[#E9ECEC] hover:text-[#DDB64E]"
                    : "text-[#111111] hover:text-[#DDB64E]"
                }`}
                style={{ textDecoration: "none" }}
              >
                07466093996
              </a>
            </div>

            {/* Email */}
            <div className="flex items-center gap-3">
              <FaEnvelope size={18} className="text-[#DDB64E]" />
              <a
                href="mailto:info@srkhospitality.co.uk"
                className={`transition-colors duration-300 ${
                  isDark
                    ? "text-[#E9ECEC] hover:text-[#DDB64E]"
                    : "text-[#111111] hover:text-[#DDB64E]"
                }`}
                style={{ textDecoration: "none" }}
              >
                info@srkhospitality.co.uk
              </a>
            </div>
          </div>
        </div>
      </div>

      {/* === Bottom Divider === */}
      <div
        className={`mt-8 pt-8 text-center text-sm ${
          isDark ? "border-t border-[#1A1A1A] text-gray-400" : "border-t border-gray-300 text-gray-600"
        }`}
      >
        <p>&copy; 2025 SRK Hospitality Limited. All rights reserved.</p>
      </div>

      {/* === Bottom Bar === */}
      <div className="flex flex-col py-3 sm:flex-row justify-center items-center gap-3 text-center font-semibold text-gray-400">
        <div className="flex gap-4 text-sm">
          <Link
            to="/terms"
            className="text-gray-400 hover:text-[#DDB64E] transition duration-300"
          >
            Terms & Conditions
          </Link>
          <span className="text-gray-500">|</span>
          <Link
            to="/privacy"
            className="text-gray-400 hover:text-[#DDB64E] transition duration-300"
          >
            Privacy Policy
          </Link>
        </div>
        <p className="text-center font-semibold text-gray-400 mt-2 sm:mt-0">
          Powered by{" "}
          <a
            href="https://www.ansely.co.uk/"
            target="_blank"
            rel="noopener noreferrer"
            className="text-[#DDB64E] hover:underline"
          >
            Ansely
          </a>
        </p>
      </div>
    </footer>
  );
}
