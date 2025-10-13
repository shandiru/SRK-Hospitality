"use client";

import { FaFacebookF, FaInstagram, FaLinkedinIn } from "react-icons/fa";

export default function Footer() {
  return (
    <footer
      className="bg-[#FAF9F6] border-t border-[#DDB64E]/30 text-center md:text-left font-[Inter]"
    >
      {/* === Main Footer === */}
      <div className="max-w-7xl mx-auto px-6 md:px-12 py-16 grid grid-cols-1 md:grid-cols-3 gap-12">
        {/* Left Section */}
        <div className="flex flex-col items-center md:items-start">
          <h3 className="text-xl font-[Playfair_Display] font-semibold text-[#0D3B2E] mb-3">
            SRK Hospitality Limited
          </h3>
          <p className="text-[#3C4A4E] text-sm md:text-base leading-relaxed max-w-xs">
            Celebrating the passion of independent culinary businesses across the UK.
          </p>
        </div>

        {/* Middle Section */}
        <div className="flex flex-col items-center">
          <h4 className="text-[#DDB64E] font-[Playfair_Display] font-semibold text-lg mb-3">
            Quick Links
          </h4>
          <ul className="space-y-2 text-sm md:text-base text-[#0D3B2E] font-[Inter]">
            {[
              { label: "Home", href: "/" },
              { label: "Our Venues", href: "/venues" },
              { label: "Vacancies", href: "/vacancies" },
              { label: "Contact Us", href: "mailto:info@srkhospitality.co.uk" },
            ].map((link, i) => (
              <li key={i}>
                <a
                  href={link.href}
                  className="hover:text-[#DDB64E] transition-colors duration-300"
                >
                  {link.label}
                </a>
              </li>
            ))}
          </ul>
        </div>

        {/* Right Section */}
        <div className="flex flex-col items-center md:items-end">
          <h4 className="text-[#DDB64E] font-[Playfair_Display] font-semibold text-lg mb-3">
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
                className="p-3 rounded-full bg-[#DDB64E]/10 text-[#DDB64E] hover:bg-[#DDB64E] hover:text-white transition-all duration-500 ease-out shadow-sm hover:shadow-[0_0_20px_rgba(221,182,78,0.5)] active:scale-[0.95]"
              >
                <Icon size={16} />
              </a>
            ))}
          </div>
        </div>
      </div>

      {/* === Bottom Bar === */}
      <div className="border-t border-[#DDB64E]/20 py-6 text-center bg-white">
        <p className="text-[#3C4A4E] text-sm md:text-base font-[Inter]">
          © {new Date().getFullYear()}{" "}
          <span className="text-[#0D3B2E] font-medium">
            SRK Hospitality Limited
          </span>
          . All rights reserved.
        </p>
      </div>
    </footer>
  );
}
