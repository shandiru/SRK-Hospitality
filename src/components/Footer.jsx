'use client';

import { FaFacebookF, FaInstagram, FaLinkedinIn } from "react-icons/fa";

export default function Footer() {
  return (
    <footer className="bg-white border-t border-[#DDB64E]/30 text-center md:text-left">
      <div className="max-w-7xl mx-auto px-6 py-12 grid grid-cols-1 md:grid-cols-3 gap-8">
        {/* Left Section */}
        <div className="flex flex-col items-center md:items-start">
          <h3 className="text-lg font-semibold text-gray-900 mb-2">
            SRK Hospitality Limited
          </h3>
          <p className="text-gray-600 text-sm max-w-xs">
            Celebrating the passion of independent culinary businesses across the UK.
          </p>
        </div>

        {/* Middle Section */}
        <div className="flex flex-col items-center">
          <h4 className="text-[#DDB64E] font-semibold mb-2">Quick Links</h4>
          <ul className="space-y-2 text-sm text-gray-700">
            <li>
              <a
                href="/"
                className="hover:text-[#DDB64E] transition-colors duration-300"
              >
                Home
              </a>
            </li>
            <li>
              <a
                href="/venues"
                className="hover:text-[#DDB64E] transition-colors duration-300"
              >
                Our Venues
              </a>
            </li>
            <li>
              <a
                href="/vacancies"
                className="hover:text-[#DDB64E] transition-colors duration-300"
              >
                Vacancies
              </a>
            </li>
            <li>
              <a
                href="mailto:info@srkhospitality.co.uk"
                className="hover:text-[#DDB64E] transition-colors duration-300"
              >
                Contact Us
              </a>
            </li>
          </ul>
        </div>

        {/* Right Section */}
        <div className="flex flex-col items-center md:items-end">
          <h4 className="text-[#DDB64E] font-semibold mb-2">Follow Us</h4>
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

      {/* Bottom Bar */}
      <div className="border-t border-[#DDB64E]/20 py-4 text-center">
        <p className="text-gray-600 text-sm">
          © {new Date().getFullYear()} SRK Hospitality Limited. All rights reserved.
        </p>
      </div>
    </footer>
  );
}
