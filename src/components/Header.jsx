"use client";

import React, { useState, useEffect } from "react";
import { FiMenu, FiX } from "react-icons/fi";

export default function Header() {
  const [menuOpen, setMenuOpen] = useState(false);
  const [scrolled, setScrolled] = useState(false);

  // Brand color from logo
  const brandGold = "#DDB64E";

  // Add scroll effect
  useEffect(() => {
    const handleScroll = () => setScrolled(window.scrollY > 20);
    window.addEventListener("scroll", handleScroll);
    return () => window.removeEventListener("scroll", handleScroll);
  }, []);

  const navLinks = [
    { name: "Home", href: "/" },
    { name: "Our Venues", href: "/venues" },
    { name: "Vacancies", href: "/vacancies" },
  ];

  return (
    <header
      className={`fixed top-0 left-0 w-full z-50 transition-all duration-500 font-serif ${
        scrolled
          ? "bg-white/95 shadow-md backdrop-blur-md"
          : "bg-transparent"
      }`}
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
            className={`hidden sm:block text-base md:text-lg tracking-wide font-serif ${
              scrolled ? "text-black" : "text-white"
            }`}
          >
            SRK HOSPITALITY LIMITED
          </span>
        </a>

        {/* Desktop Navigation */}
        <nav className="hidden md:flex items-center space-x-10">
          {navLinks.map((link) => (
            <a
              key={link.name}
              href={link.href}
              className={`text-sm font-semibold transition-all duration-300 ${
                scrolled
                  ? `text-black hover:text-[${brandGold}]`
                  : `text-white hover:text-[${brandGold}]`
              }`}
            >
              {link.name.toUpperCase()}
            </a>
          ))}

          {/* Gold Accent Button */}
          <a
            href="/vacancies"
            className={`px-5 py-2 rounded-full font-semibold transition-all duration-300 bg-[${brandGold}] text-black hover:opacity-90`}
          >
            JOIN OUR TEAM
          </a>
        </nav>

        {/* Mobile Menu Button */}
        <button
          onClick={() => setMenuOpen(!menuOpen)}
          className={`md:hidden text-3xl transition-colors duration-300 ${
            scrolled ? "text-black" : "text-white"
          }`}
        >
          {menuOpen ? <FiX /> : <FiMenu />}
        </button>
      </div>

      {/* Mobile Dropdown Menu */}
      <div
        className={`md:hidden overflow-hidden transition-all duration-500 ${
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
        </div>
      </div>
    </header>
  );
}
