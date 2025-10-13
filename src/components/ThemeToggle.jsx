import { useEffect, useState } from "react";
import { FaSun, FaMoon } from "react-icons/fa";

export default function ThemeToggle({ className = "" }) {
  const [isDark, setIsDark] = useState(false);

  useEffect(() => {
    setIsDark(document.documentElement.classList.contains("dark"));
  }, []);

  const toggle = () => {
    const root = document.documentElement;
    const next = !isDark;
    setIsDark(next);
    root.classList.toggle("dark", next);
    localStorage.setItem("theme", next ? "dark" : "light");
    root.style.colorScheme = next ? "dark" : "light";
  };

  return (
    <button
      type="button"
      onClick={toggle}
      aria-label={isDark ? "Switch to light mode" : "Switch to dark mode"}
      title={isDark ? "Light mode" : "Dark mode"}
      className={`inline-flex items-center gap-2 rounded-full px-3 py-2
                  text-sm border border-white/15 bg-white/10 hover:bg-white/15
                  focus:outline-none focus-visible:ring-2 focus-visible:ring-white/60 ${className}`}
    >
      {isDark ? <FaMoon /> : <FaSun />}
      <span className="hidden sm:inline">{isDark ? "" : ""}</span>
    </button>
  );
}
