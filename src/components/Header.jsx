"use client";

import React, { useState } from "react";
import { FiMenu, FiX } from "react-icons/fi";

export default function Header() {
  const [menuOpen, setMenuOpen] = useState(false);

  const navLinks = [
    { name: "Home", href: "/" },
    { name: "Our Venues", href: "/venues" },
    { name: "Vacancies", href: "/vacancies" },
  ];

  return (
    <header className="fixed top-0 left-0 w-full z-50 bg-white shadow-sm font-body">
      <div className="max-w-7xl mx-auto flex items-center justify-between px-6 py-4">
        
        {/* Logo */}
        <a href="/" className="flex items-center space-x-3">
          <img
            src="/log.png"
            alt="SRK Hospitality"
            className="h-10 w-10 object-contain"
          />
          <span className="hidden sm:block text-gray-800 text-base tracking-wide font-heading">
            SRK HOSPITALITY LIMITED
          </span>
        </a>

        {/* Desktop Nav */}
        <nav className="hidden md:flex items-center space-x-10">
          {navLinks.map((link) => (
            <a
              key={link.name}
              href={link.href}
              className="text-gray-700 text-sm font-medium tracking-wide hover:text-yellow-600 transition"
            >
              {link.name.toUpperCase()}
            </a>
          ))}
        </nav>

        {/* Mobile Menu Button */}
        <button
          onClick={() => setMenuOpen(!menuOpen)}
          className="md:hidden text-2xl text-gray-800"
        >
          {menuOpen ? <FiX /> : <FiMenu />}
        </button>
      </div>

      {/* Mobile Menu */}
      <div
        className={`md:hidden bg-white overflow-hidden transition-all duration-300 ${
          menuOpen ? "max-h-64" : "max-h-0"
        }`}
      >
        <div className="flex flex-col items-center py-4 space-y-4">
          {navLinks.map((link) => (
            <a
              key={link.name}
              href={link.href}
              onClick={() => setMenuOpen(false)}
              className="text-gray-700 text-sm font-medium hover:text-yellow-600"
            >
              {link.name.toUpperCase()}
            </a>
          ))}
        </div>
      </div>
    </header>
  );
}
