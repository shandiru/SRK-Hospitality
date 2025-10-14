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
      className={`inline-flex items-center rounded-full px-3 py-3
                  border border-white/15 bg-black hover:bg-black/85 dark:hover:bg-white/10 cursor-pointer
                  focus:outline-none focus-visible:ring-2 focus-visible:ring-white/60 ${className}`}
    >
      {isDark ? <FaMoon className="text-white"/> : <FaSun className="text-white"/>}
      <span className="hidden sm:inline">{isDark ? "" : ""}</span>
    </button>
  );
}
