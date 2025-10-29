"use client";

import React, { useState, useEffect } from "react";
import { FiMenu, FiX } from "react-icons/fi";
import ThemeToggle from "./ThemeToggle"; // make sure the path is correct

export default function Header() {
  const [menuOpen, setMenuOpen] = useState(false);
  const [scrolled, setScrolled] = useState(false);
  const [isDark, setIsDark] = useState(false);

  const brandGold = "#DDB64E";

  // Detect current theme
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

  // Scroll detection
  useEffect(() => {
    const handleScroll = () => setScrolled(window.scrollY > 20);
    window.addEventListener("scroll", handleScroll);
    return () => window.removeEventListener("scroll", handleScroll);
  }, []);

  const navLinks = [
    { name: "Home", href: "/" },
    { name: "Our Venues", href: "/venues" },
    { name: "Vacancies", href: "/vacancies" },
    { name: "Event Hire", href: "/event-hire" },
  ];

  return (
    <header
      className={`fixed top-0 left-0 w-full z-50 transition-all duration-500 font-serif ${
        isDark ? "bg-[#0E1517]" : "bg-white"
      } ${scrolled ? "shadow-md" : ""}`}
    >
      <div className="max-w-7xl mx-auto flex items-center justify-between px-6 py-4 md:py-5">
        {/* Logo */}
        <a href="/" className="flex items-center space-x-3">
          <img
            src="/log.png"
            alt="SRK Hospitality"
            className="h-10 w-10 object-contain"
          />
          <span
            className={`hidden sm:block text-base tracking-wide font-serif ${
              isDark ? "text-white" : "text-black"
            }`}
          >
            SRK HOSPITALITY LIMITED
          </span>
        </a>

        {/* Desktop Navigation */}
        <nav className="hidden lg:flex items-center space-x-8">
          {navLinks.map((link) => (
            <a
              key={link.name}
              href={link.href}
              className={`text-sm font-semibold transition-all duration-300 ${
                isDark
                  ? `text-white hover:text-[${brandGold}]`
                  : `text-black hover:text-[${brandGold}]`
              }`}
            >
              {link.name.toUpperCase()}
            </a>
          ))}

          {/* Gold Accent Button */}
          <a
            href="/vacancies"
            className="px-5 py-2 rounded-full font-semibold transition-all duration-300"
            style={{
              backgroundColor: brandGold,
              color: isDark ? "#000" : "#000",
            }}
          >
            JOIN OUR TEAM
          </a>

          {/* Theme Toggle */}
          <ThemeToggle />
        </nav>

        {/* Mobile Menu Button */}
        <button
          onClick={() => setMenuOpen(!menuOpen)}
          className={`lg:hidden text-3xl transition-colors duration-300 ${
            isDark ? "text-white" : "text-black"
          }`}
        >
          {menuOpen ? <FiX /> : <FiMenu />}
        </button>
      </div>

      {/* Mobile Dropdown Menu */}
      <div
        className={`lg:hidden overflow-hidden transition-all duration-500 ${
          menuOpen ? "max-h-80" : "max-h-0"
        }`}
        style={{
          backgroundColor: brandGold,
        }}
      >
        <div className="flex flex-col items-center py-6 space-y-5 text-center">
          {navLinks.map((link) => (
            <a
              key={link.name}
              href={link.href}
              onClick={() => setMenuOpen(false)}
              className="text-white text-sm font-medium tracking-wider hover:opacity-90 transition"
            >
              {link.name.toUpperCase()}
            </a>
          ))}

          {/* CTA inside mobile menu */}
          <a
            href="/vacancies"
            onClick={() => setMenuOpen(false)}
            className="px-6 py-2 rounded-full font-semibold bg-white text-black hover:bg-opacity-90 transition"
          >
            JOIN OUR TEAM
          </a>

          {/* Theme toggle for mobile */}
          <ThemeToggle />
        </div>
      </div>
    </header>
  );
}
