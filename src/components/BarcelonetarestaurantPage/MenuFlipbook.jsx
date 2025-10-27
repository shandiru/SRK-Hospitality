'use client';

import React, { forwardRef, useMemo, useRef, useState, useEffect } from "react";
import HTMLFlipBook from "react-pageflip";
import { motion } from "framer-motion";
import sectionsSeed from "./menu.json";

// ---------- Colors ----------
const COLORS = {
  gold: "#DDB64E",
  light: {
    background: "#fef9f0",
    pageBg: "#FFFFFF",
    sectionBg: "rgba(255,255,255,0.8)",
    text: "#3B3B3B",
    shadow: "rgba(0,0,0,0.15)",
    buttonBg: "#FFFFFF",
  },
  dark: {
    background: "#0E1517",
    pageBg: "#1F1F1F",
    sectionBg: "rgba(31,31,31,0.85)",
    text: "#E9ECEC",
    shadow: "rgba(0,0,0,0.5)",
    buttonBg: "#222",
  },
};

// ---------- Utility ----------
const paginateByHeight = (items, maxHeight = 550) => {
  const pages = [];
  let currentPage = [];
  let currentHeight = 0;

  items.forEach((item) => {
    const isSmallScreen = typeof window !== "undefined" && window.innerWidth < 640;
    const baseHeight = isSmallScreen ? 220 : 120;
    const estimatedHeight =
      baseHeight + (item.description ? Math.min(item.description.length / 4, 100) : 0);

    if (currentHeight + estimatedHeight > maxHeight && currentPage.length > 0) {
      pages.push(currentPage);
      currentPage = [item];
      currentHeight = estimatedHeight;
    } else {
      currentPage.push(item);
      currentHeight += estimatedHeight;
    }
  });

  if (currentPage.length > 0) pages.push(currentPage);
  return pages;
};

// ---------- Shared Page ----------
const Page = forwardRef(({ children, mode }, ref) => (
  <div
    ref={ref}
    className="relative h-full w-full rounded-3xl overflow-hidden transition-all duration-500"
    style={{
      backgroundColor: mode.pageBg,
      boxShadow: `0 8px 30px ${mode.shadow}`,
      border: `4px solid ${!mode.dark ? COLORS.gold : "transparent"}`,
    }}
  >
    <div className="h-full w-full p-4 sm:p-8">{children}</div>
  </div>
));
Page.displayName = "Page";

// ---------- Cover Page ----------
const CoverPage = forwardRef(({ restaurant, tagline, mode }, ref) => (
  <Page ref={ref} mode={mode}>
    <div
      className="flex h-full w-full flex-col items-center justify-center text-center rounded-xl relative overflow-hidden"
      style={{
        background: `linear-gradient(to bottom right, ${mode.pageBg}, ${mode.background})`,
        boxShadow: `inset 0 0 30px ${mode.shadow}`,
      }}
    >
      <motion.h1
        initial={{ opacity: 0, y: 16 }}
        animate={{ opacity: 1, y: 0 }}
        transition={{ duration: 0.6 }}
        className="text-4xl sm:text-5xl font-extrabold tracking-tight text-center"
        style={{
          color: COLORS.gold,
          textShadow: `2px 2px 6px ${mode.shadow}`,
        }}
      >
        {restaurant}
      </motion.h1>
      <motion.p
        initial={{ opacity: 0, y: 10 }}
        animate={{ opacity: 1, y: 0 }}
        transition={{ duration: 0.6, delay: 0.1 }}
        className="mt-3 text-base sm:text-lg font-medium"
        style={{ color: mode.text }}
      >
        {tagline}
      </motion.p>

      <div
        className="absolute bottom-4 right-4 text-xs"
        style={{ color: mode.text }}
      >
        Swipe / drag to flip ➔
      </div>
    </div>
  </Page>
));
CoverPage.displayName = "CoverPage";

// ---------- Section Page ----------
const SectionPage = forwardRef(({ title, subtitle, items, mode }, ref) => (
  <Page ref={ref} mode={mode}>
    <div className="flex h-full flex-col">
      <div className="mb-4">
        <h2
          className="text-xl sm:text-2xl font-bold tracking-tight mb-1"
          style={{ color: COLORS.gold, textShadow: `0 2px 6px ${mode.shadow}` }}
        >
          {title}
        </h2>
        {subtitle && (
          <p className="text-sm font-medium" style={{ color: mode.text }}>
            {subtitle}
          </p>
        )}
      </div>
      <div className="grid grid-cols-1 gap-4 pb-5">
        {items.map((item) => (
          <div
            key={item.name}
            className="flex gap-3 rounded-2xl p-4 shadow-lg hover:scale-105 hover:shadow-2xl transition-all duration-300"
            style={{ backgroundColor: mode.sectionBg }}
          >
            {item.image && (
              <img
                src={item.image}
                alt={item.name}
                className="h-16 w-16 sm:h-20 sm:w-20 rounded-lg object-cover flex-shrink-0"
              />
            )}
            <div className="flex-1">
              <p className="text-base font-semibold" style={{ color: mode.text }}>
                {item.name}
              </p>
              {item.description && (
                <p className="text-sm" style={{ color: mode.text }}>
                  {item.description}
                </p>
              )}
              <div className="mt-2 flex justify-between items-center">
                <p className="text-sm sm:text-base font-semibold" style={{ color: mode.text }}>
                  {item.price}
                </p>
                {item.badge && (
                  <span
                    className="inline-block rounded-full px-2 py-0.5 text-[10px] font-medium"
                    style={{ backgroundColor: COLORS.gold, color: "#3B3B3B" }}
                  >
                    {item.badge}
                  </span>
                )}
              </div>
            </div>
          </div>
        ))}
      </div>
    </div>
  </Page>
));
SectionPage.displayName = "SectionPage";

// ---------- Main Component ----------
export default function MenuFlipbook() {
  const flipRef = useRef(null);
  const [page, setPage] = useState(0);
  const [bookSize, setBookSize] = useState({ width: 700, height: 900 });
  const [isDark, setIsDark] = useState(false);

  useEffect(() => {
    const root = document.documentElement;
    setIsDark(root.classList.contains("dark"));
    const observer = new MutationObserver(() =>
      setIsDark(root.classList.contains("dark"))
    );
    observer.observe(root, { attributes: true, attributeFilter: ["class"] });
    return () => observer.disconnect();
  }, []);

  const mode = isDark ? COLORS.dark : COLORS.light;

  useEffect(() => {
    const handleResize = () => {
      const screenWidth = window.innerWidth;
      const isMobile = screenWidth < 640;
      setBookSize({
        width: isMobile ? screenWidth * 0.9 : 700,
        height: isMobile ? window.innerHeight * 0.7 : 900,
      });
    };
    handleResize();
    window.addEventListener("resize", handleResize);
    return () => window.removeEventListener("resize", handleResize);
  }, []);

  const { pages, sectionPageMap } = useMemo(() => {
    const arr = [];
    const map = {};

    arr.push(
      <CoverPage
        key="cover"
        restaurant="Barceloneta"
        tagline="Authentic Mediterranean Tapas & Cocktails"
        mode={mode}
      />
    );

    let currentIndex = 1;
    sectionsSeed.forEach((section) => {
      map[section.id] = currentIndex;
      const chunks = paginateByHeight(section.items, 700);
      chunks.forEach((chunk, idx) => {
        arr.push(
          <SectionPage
            key={`${section.id}-${idx}`}
            title={section.title + (chunks.length > 1 ? ` (Page ${idx + 1})` : "")}
            subtitle={section.subtitle}
            items={chunk}
            mode={mode}
          />
        );
        currentIndex++;
      });
    });

    return { pages: arr, sectionPageMap: map };
  }, [mode]);

  const goPrev = () => flipRef.current?.pageFlip()?.flipPrev();
  const goNext = () => flipRef.current?.pageFlip()?.flipNext();
  const goTo = (p) => flipRef.current?.pageFlip()?.flip(p);

  return (
    <div
      className=" px-3 py-6 sm:py-10 transition-all duration-500"
      style={{ background: mode.background }}
    >
      {/* Header */}
      <div className="mb-4  mx-auto max-w-7xl rounded-3xl  flex flex-col items-center justify-between gap-3 sm:mb-6 sm:flex-row">
        <h1 className="text-2xl font-bold tracking-tight" style={{ color: COLORS.gold }}>
          Restaurant Menu
        </h1>
        <div className="flex items-center gap-2">
          <button
            onClick={goPrev}
            className="rounded-2xl border px-3 py-2 text-sm shadow-md hover:scale-105 transition-transform duration-300 font-semibold"
            style={{ color: mode.text, borderColor: COLORS.gold, backgroundColor: mode.buttonBg }}
          >
            ◀ Prev
          </button>
          <span className="text-sm tabular-nums select-none" style={{ color: mode.text }}>
            {String(page + 1).padStart(2, "0")} / {String(pages.length).padStart(2, "0")}
          </span>
          <button
            onClick={goNext}
            className="rounded-2xl border px-3 py-2 text-sm shadow-md hover:scale-105 transition-transform duration-300 font-semibold"
            style={{ color: mode.text, borderColor: COLORS.gold, backgroundColor: mode.buttonBg }}
          >
            Next ▶
          </button>
        </div>
      </div>

      {/* Flipbook */}
      <div className="mx-auto flex w-full justify-center">
        <HTMLFlipBook
          width={bookSize.width}
          height={bookSize.height}
          minWidth={320}
          maxWidth={900}
          maxHeight={1200}
          size="stretch"
          flippingTime={800}
          usePortrait
          showCover
          drawShadow
          autoSize
          mobileScrollSupport
          onFlip={(e) => setPage(e.data)}
          ref={flipRef}
          className="w-full"
        >
          {pages.map((node, idx) => (
            <div key={idx} className="h-full w-full">
              {node}
            </div>
          ))}
        </HTMLFlipBook>
      </div>

      {/* Quick Navigation */}
      <div className="mx-auto mt-6 grid grid-cols-2 sm:grid-cols-4 gap-2">
        {sectionsSeed.map((s) => {
          const target = sectionPageMap[s.id];
          const isActive = page === target || page === target - 1 || page === target + 1;
          return (
            <button
              key={s.id}
              onClick={() => goTo(target)}
              className={`rounded-2xl border px-3 py-2 text-sm shadow-md hover:scale-105 transition-transform duration-300 font-semibold ${
                isActive ? "ring-2" : ""
              }`}
              style={{ color: mode.text, borderColor: COLORS.gold, backgroundColor: mode.buttonBg }}
            >
              {s.title}
            </button>
          );
        })}
      </div>
    </div>
  );
}
