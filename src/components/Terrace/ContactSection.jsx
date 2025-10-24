'use client';

import { useEffect, useState } from 'react';
import { FiMapPin, FiPhone, FiSend, FiFacebook, FiInstagram, FiTwitter } from 'react-icons/fi';

const BRAND_GOLD = '#E1B43B';

export default function ContactSection() {
  const [isDark, setIsDark] = useState(false);

  // Detect dark/light mode dynamically
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
      className={`transition-colors duration-700 py-20 px-4 ${isDark ? 'bg-black text-[#E9ECEC]' : 'bg-white text-[#1C1C1C]'
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
                <h4 className="font-bold">Visit us</h4>
                <p className={`${isDark ? 'text-gray-300' : 'text-gray-600'}`}>
                  Thumbay Ltd, <br />
                  P.O. Box: 415555 <br />
                  DIFC - Dubai, United Arab Emirates
                </p>
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
                <h4 className="font-bold">Call us</h4>
                <p className={`${isDark ? 'text-gray-300' : 'text-gray-600'}`}>
                  +971 6 770 5555
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
                <h4 className="font-bold">Mail us</h4>
                <p
                  className="font-medium"
                  style={{ color: BRAND_GOLD }}
                > info@terracerestaurant.com
                </p>
              </div>
            </div>

            {/* Social Media */}
            <div className="flex gap-4 pt-4">
              <a
                href="https://www.instagram.com/terracerestaurantuae"
                target="_blank"
                rel="noopener noreferrer"
                className="flex items-center justify-center w-10 h-10 rounded-full transition"
                style={{
                  backgroundColor: isDark ? '#1E1E1E' : '#FFF5E0',
                  color: BRAND_GOLD,
                }}
              >
                <FiInstagram size={20} />
              </a>
              <a
                href="https://www.facebook.com/TerraceRestaurant"
                target="_blank"
                rel="noopener noreferrer"
                className="flex items-center justify-center w-10 h-10 rounded-full transition"
                style={{
                  backgroundColor: isDark ? '#1E1E1E' : '#FFF5E0',
                  color: BRAND_GOLD,
                }}
              >
                <FiFacebook size={20} />
              </a>
              <a
                href="https://x.com/walnut_tree_inn"
                target="_blank"
                rel="noopener noreferrer"
                className="flex items-center justify-center w-10 h-10 rounded-full transition hover:scale-105"
                style={{
                  backgroundColor: isDark ? '#1E1E1E' : '#FFF5E0',
                  color: BRAND_GOLD,
                }}
              >
                <FiTwitter size={20} />
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
            Send your message Here
          </h2>

          <form className="space-y-6">
            <div>
              <label className="block mb-1 text-sm font-medium">
                Your name
              </label>
              <input
                type="text"
                placeholder="John Doe"
                className={`w-full rounded-full border px-4 py-3 outline-none transition ${isDark
                  ? 'bg-[#111] border-[#E1B43B]/40 focus:ring-2 focus:ring-[#E1B43B]/60 text-gray-100'
                  : 'border-gray-300 focus:ring-2 focus:ring-[#E1B43B]/60 text-gray-800'
                  }`}
              />
            </div>
            <div>
              <label className="block mb-1 text-sm font-medium">Phone</label>
              <input
                type="text"
                placeholder="+44 123 456 7890"
                className={`w-full rounded-full border px-4 py-3 outline-none transition ${isDark
                  ? 'bg-[#111] border-[#E1B43B]/40 focus:ring-2 focus:ring-[#E1B43B]/60 text-gray-100'
                  : 'border-gray-300 focus:ring-2 focus:ring-[#E1B43B]/60 text-gray-800'
                  }`}
              />
            </div>
            <div>
              <label className="block mb-1 text-sm font-medium">Your email</label>
              <input
                type="email"
                placeholder="email@example.com"
                className={`w-full rounded-full border px-4 py-3 outline-none transition ${isDark
                  ? 'bg-[#111] border-[#E1B43B]/40 focus:ring-2 focus:ring-[#E1B43B]/60 text-gray-100'
                  : 'border-gray-300 focus:ring-2 focus:ring-[#E1B43B]/60 text-gray-800'
                  }`}
              />
            </div>
            <div>
              <label className="block mb-1 text-sm font-medium">
                Your message (optional)
              </label>
              <textarea
                rows="4"
                placeholder="Write something..."
                className={`w-full rounded-2xl border px-4 py-3 outline-none resize-none transition ${isDark
                  ? 'bg-[#111] border-[#E1B43B]/40 focus:ring-2 focus:ring-[#E1B43B]/60 text-gray-100'
                  : 'border-gray-300 focus:ring-2 focus:ring-[#E1B43B]/60 text-gray-800'
                  }`}
              />
            </div>
            <div>
              <button
                type="submit"
                className="font-semibold px-6 py-2 rounded-full transition duration-300"
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
