'use client';

import { useEffect, useState } from 'react';
import {
  FiMapPin,
  FiPhone,
  FiSend,
  FiFacebook,
  FiInstagram,
} from 'react-icons/fi';

const BRAND_GOLD = '#E1B43B';

export default function ContactSection() {
  const [isDark, setIsDark] = useState(false);

  // ✅ Detect dark/light mode dynamically
  useEffect(() => {
    const root = document.documentElement;
    const dark = root.classList.contains('dark');
    setIsDark(dark);

    const observer = new MutationObserver(() => {
      setIsDark(root.classList.contains('dark'));
    });
    observer.observe(root, { attributes: true, attributeFilter: ['class'] });

    return () => observer.disconnect();
  }, []);

  return (
    <section
      className={`transition-colors duration-700 py-20 px-4 ${
        isDark ? 'bg-black text-[#E9ECEC]' : 'bg-white text-[#1C1C1C]'
      }`}
    >
      <div className="max-w-7xl mx-auto grid grid-cols-1 md:grid-cols-2 gap-12 items-start">
        {/* Left Column */}
        <div>
          <h2
            className="text-3xl font-extrabold mb-6"
            style={{ color: BRAND_GOLD }}
          >
            Contact Us
          </h2>

          <div className="space-y-6">
            {/* Address */}
            <div className="flex items-start gap-4">
              <div
                className="p-3 rounded-full"
                style={{
                  backgroundColor: isDark ? '#1E1E1E' : '#FFF5E0',
                  color: BRAND_GOLD,
                }}
              >
                <FiMapPin size={20} />
              </div>
              <div>
                <h4 className="font-bold">Visit Us</h4>
                <a
                  href="https://www.google.com/maps?q=Lindbergh's+Sports+Bar,+Al+Muteena+-+Deira+-+Dubai,+United+Arab+Emirates"
                  target="_blank"
                  rel="noopener noreferrer"
                  className={`transition duration-300 ${
                    isDark
                      ? 'text-gray-300 hover:text-[#E1B43B]'
                      : 'text-gray-600 hover:text-[#E1B43B]'
                  }`}
                >
                  Lindbergh's Sports Bar <br />
                  Al Muteena - Deira - Dubai <br />
                  United Arab Emirates
                </a>
              </div>
            </div>

            {/* Phone */}
            <div className="flex items-start gap-4">
              <div
                className="p-3 rounded-full"
                style={{
                  backgroundColor: isDark ? '#1E1E1E' : '#FFF5E0',
                  color: BRAND_GOLD,
                }}
              >
                <FiPhone size={20} />
              </div>
              <div>
                <h4 className="font-bold">Call Us</h4>
                <p>
                  <a
                    href="tel:+97142688888"
                    className="font-medium transition duration-300 hover:text-[#E1B43B]"
                    style={{ textDecoration: 'none' }}
                  >
                    +971 4268 8888
                  </a>
                </p>
              </div>
            </div>

            {/* Email */}
            <div className="flex items-start gap-4">
              <div
                className="p-3 rounded-full"
                style={{
                  backgroundColor: isDark ? '#1E1E1E' : '#FFF5E0',
                  color: BRAND_GOLD,
                }}
              >
                <FiSend size={20} />
              </div>
              <div>
                <h4 className="font-bold">Mail Us</h4>
                <a
                  href="mailto:reservations@gehdeira.com"
                  className="font-medium transition duration-300 hover:text-[#E1B43B]"
                  style={{ textDecoration: 'none' }}
                >
                  reservations@gehdeira.com
                </a>
              </div>
            </div>

            {/* Website */}
            <div className="flex items-start gap-4">
              <div
                className="p-3 rounded-full"
                style={{
                  backgroundColor: isDark ? '#1E1E1E' : '#FFF5E0',
                  color: BRAND_GOLD,
                }}
              >
                <FiSend size={20} />
              </div>
              <div>
                <h4 className="font-bold"> Website</h4>
                <a
                  href="https://www.gehotels.com/grand-excelsior-hotel-deira/dining-deira/lindberghs-sports-bar/"
                  target="_blank"
                  rel="noopener noreferrer"
                  className="font-medium transition duration-300 hover:text-[#E1B43B]"
                  style={{ textDecoration: 'none' }}
                >
                  www.gehotels.com
                </a>
              </div>
            </div>

            {/* Social Media */}
            <div className="flex gap-4 pt-4">
              <a
                href="https://www.instagram.com/grandexcelsiorhoteldeira/?hl=en"
                target="_blank"
                rel="noopener noreferrer"
                className="flex items-center justify-center w-10 h-10 rounded-full transition hover:scale-110"
                style={{
                  backgroundColor: isDark ? '#1E1E1E' : '#FFF5E0',
                  color: BRAND_GOLD,
                }}
              >
                <FiInstagram size={20} />
              </a>
              <a
                href="https://web.facebook.com/gehdeira/?_rdc=1&_rdr#"
                target="_blank"
                rel="noopener noreferrer"
                className="flex items-center justify-center w-10 h-10 rounded-full transition hover:scale-110"
                style={{
                  backgroundColor: isDark ? '#1E1E1E' : '#FFF5E0',
                  color: BRAND_GOLD,
                }}
              >
                <FiFacebook size={20} />
              </a>
            </div>
          </div>
        </div>

        {/* Right Column - Form */}
        <div>
          <h2
            className="text-3xl font-extrabold mb-6"
            style={{ color: BRAND_GOLD }}
          >
            Send Your Message Here
          </h2>

          <form className="space-y-6">
            {/* Name */}
            <div>
              <label className="block mb-1 text-sm font-medium">Your Name</label>
              <input
                type="text"
                placeholder="John Doe"
                className={`w-full rounded-full border px-4 py-3 outline-none transition ${
                  isDark
                    ? 'bg-[#111] border-[#E1B43B]/40 focus:ring-2 focus:ring-[#E1B43B]/60 text-gray-100'
                    : 'border-gray-300 focus:ring-2 focus:ring-[#E1B43B]/60 text-gray-800'
                }`}
              />
            </div>

            {/* Phone */}
            <div>
              <label className="block mb-1 text-sm font-medium">Phone</label>
              <input
                type="text"
                placeholder="+971 123 456 789"
                className={`w-full rounded-full border px-4 py-3 outline-none transition ${
                  isDark
                    ? 'bg-[#111] border-[#E1B43B]/40 focus:ring-2 focus:ring-[#E1B43B]/60 text-gray-100'
                    : 'border-gray-300 focus:ring-2 focus:ring-[#E1B43B]/60 text-gray-800'
                }`}
              />
            </div>

            {/* Email */}
            <div>
              <label className="block mb-1 text-sm font-medium">Your Email</label>
              <input
                type="email"
                placeholder="email@example.com"
                className={`w-full rounded-full border px-4 py-3 outline-none transition ${
                  isDark
                    ? 'bg-[#111] border-[#E1B43B]/40 focus:ring-2 focus:ring-[#E1B43B]/60 text-gray-100'
                    : 'border-gray-300 focus:ring-2 focus:ring-[#E1B43B]/60 text-gray-800'
                }`}
              />
            </div>

            {/* Message */}
            <div>
              <label className="block mb-1 text-sm font-medium">
                Your Message (optional)
              </label>
              <textarea
                rows="4"
                placeholder="Write something..."
                className={`w-full rounded-2xl border px-4 py-3 outline-none resize-none transition ${
                  isDark
                    ? 'bg-[#111] border-[#E1B43B]/40 focus:ring-2 focus:ring-[#E1B43B]/60 text-gray-100'
                    : 'border-gray-300 focus:ring-2 focus:ring-[#E1B43B]/60 text-gray-800'
                }`}
              />
            </div>

            {/* Submit */}
            <div>
              <button
                type="submit"
                className="font-semibold px-8 py-3 rounded-full transition duration-300 hover:scale-105 hover:shadow-lg"
                style={{
                  backgroundColor: BRAND_GOLD,
                  color: isDark ? '#000' : '#fff',
                }}
              >
                SUBMIT
              </button>
            </div>
          </form>
        </div>
      </div>
    </section>
  );
}
