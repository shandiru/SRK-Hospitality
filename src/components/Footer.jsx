"use client";

import { useEffect, useState } from "react";
import { FaFacebookF, FaInstagram, FaLinkedinIn } from "react-icons/fa";
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
      className={`border-t transition-colors duration-700 font-[Inter] ${isDark
          ? "bg-[#0E1517] border-[#DDB64E]/20 text-[#E9ECEC]"
          : "bg-white border-[#DDB64E]/30 text-[#333333]"
        }`}
    >
      {/* === Main Footer === */}
      <div className="max-w-7xl mx-auto px-6 md:px-12 py-16 grid grid-cols-1 md:grid-cols-3 gap-12">
        {/* Left Section */}
        <div className="flex flex-col items-center md:items-start">
          <h3
            className={`text-xl font-[Playfair_Display] font-semibold mb-3 transition-colors duration-500 ${isDark ? "text-white" : "text-[#111111]"
              }`}
          >
            SRK Hospitality Limited
          </h3>
          <p
            className={`text-sm md:text-base leading-relaxed max-w-xs transition-colors duration-500 ${isDark ? "text-[#C9D1D5]" : "text-[#333333]"
              }`}
          >
            Celebrating the passion of independent culinary businesses across the UK.
          </p>
        </div>

        {/* Middle Section */}
        <div className="flex flex-col items-center">
          <h4
            className="font-[Playfair_Display] font-semibold text-lg mb-3"
            style={{ color: brandGold }}
          >
            Quick Links
          </h4>
          <ul
            className={`space-y-2 text-sm md:text-base font-[Inter] transition-colors duration-500 ${isDark ? "text-[#E9ECEC]" : "text-[#111111]"
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
                  className={`hover:text-[#DDB64E] transition-colors duration-300 ${isDark ? "text-[#E9ECEC]" : "text-[#111111]"
                    }`}
                >
                  {link.label}
                </a>
              </li>
            ))}
          </ul>
        </div>

        {/* Right Section */}
        <div className="flex flex-col items-center md:items-end">
          <h4
            className="font-[Playfair_Display] font-semibold text-lg mb-3"
            style={{ color: brandGold }}
          >
            Follow Us
          </h4>
          <div className="flex gap-4">
            {[
              { Icon: FaFacebookF, link: "#" },
              { Icon: FaInstagram, link: "#" },
              { Icon: FaLinkedinIn, link: "#" },
            ].map(({ Icon, link }, i) => (
              <a
                key={i}
                href={link}
                target="_blank"
                rel="noopener noreferrer"
                className={`p-3 rounded-full transition-all duration-500 ease-out shadow-sm active:scale-[0.95] ${isDark
                    ? "bg-[#DDB64E]/10 text-[#DDB64E] hover:bg-[#DDB64E] hover:text-black hover:shadow-[0_0_20px_rgba(221,182,78,0.5)]"
                    : "bg-[#DDB64E]/10 text-[#DDB64E] hover:bg-[#DDB64E] hover:text-white hover:shadow-[0_0_20px_rgba(221,182,78,0.5)]"
                  }`}
              >
                <Icon size={16} />
              </a>
            ))}
          </div>
        </div>
      </div>

      {/* === Bottom Bar === */}
      {/* Bottom Divider */}
      <div className="border-t border-gray-800 mt-8 pt-8 text-center text-gray-400">
        <p>&copy; 2025 SRK Hospitality Limited. All rights reserved.</p>
      </div>

      {/* Bottom Bar */}
      <div className="flex flex-col py-3 sm:flex-row justify-center items-center gap-3 text-center font-semibold text-gray-400">
        {/* Left: Terms & Privacy */}
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

        {/* Center: Powered by Ansely (unchanged) */}
        <p className="text-center font-semibold text-gray-400">
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
