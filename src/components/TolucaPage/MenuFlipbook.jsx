'use client';

import React, { forwardRef, useMemo, useRef, useState, useEffect } from "react";
import HTMLFlipBook from "react-pageflip";
import { motion } from "framer-motion";
import sectionsSeed from "./menu.json";

// ---------- THEME COLORS ----------
const COLORS = {
  gold: "#DDB64E",
  light: {
    background: "#fef9f0",
    pageBg: "#ffffff",
    sectionBg: "rgba(255,255,255,0.8)",
    text: "#3B3B3B",
    shadow: "rgba(0,0,0,0.12)",
    buttonBg: "#ffffff",
  },
  dark: {
    background: "#0E1517",
    pageBg: "#1A1A1A",
    sectionBg: "rgba(26,26,26,0.85)",
    text: "#E9ECEC",
    shadow: "rgba(0,0,0,0.5)",
    buttonBg: "#222",
  },
};

// ---------- PAGINATION ----------
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

// ---------- PAGE COMPONENT ----------
const Page = forwardRef(({ children, mode }, ref) => (
  <div
    ref={ref}
    className="relative h-full w-full overflow-hidden rounded-3xl transition-all duration-500"
    style={{
      backgroundColor: mode.pageBg,
      boxShadow: `0 10px 30px ${mode.shadow}`,
    }}
  >
    <div className="h-full w-full p-5 sm:p-8">{children}</div>
  </div>
));
Page.displayName = "Page";

// ---------- COVER PAGE ----------
const CoverPage = forwardRef(({ restaurant, tagline, mode }, ref) => (
  <Page ref={ref} mode={mode}>
    <div
      className="flex h-full flex-col items-center justify-center text-center"
      style={{
        background: `linear-gradient(135deg, ${mode.pageBg}, ${mode.background})`,
      }}
    >
      <motion.h1
        initial={{ opacity: 0, y: 16 }}
        animate={{ opacity: 1, y: 0 }}
        transition={{ duration: 0.6 }}
        className="text-4xl sm:text-5xl font-extrabold tracking-tight"
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
      <div className="absolute bottom-4 right-4 text-xs" style={{ color: mode.text }}>
        Swipe / drag to flip ➔
      </div>
    </div>
  </Page>
));
CoverPage.displayName = "CoverPage";

// ---------- SECTION PAGE ----------
const SectionPage = forwardRef(({ title, subtitle, items, mode }, ref) => (
  <Page ref={ref} mode={mode}>
    <div className="flex h-full flex-col">
      <div className="mb-4">
        <h2
          className="text-xl sm:text-2xl font-bold tracking-tight mb-1"
          style={{ color: COLORS.gold }}
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
            className="flex gap-3 rounded-2xl p-4 shadow-lg hover:scale-[1.03] hover:shadow-xl transition-all duration-300"
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
                <p className="text-sm opacity-80" style={{ color: mode.text }}>
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
                    style={{
                      backgroundColor: COLORS.gold,
                      color: "#3B3B3B",
                    }}
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

// ---------- INFO PAGE ----------
const InfoPage = forwardRef(({ mode }, ref) => (
  <Page ref={ref} mode={mode}>
    <div className="flex h-full flex-col">
      <h2 className="text-2xl font-bold mb-3" style={{ color: COLORS.gold }}>
        About Us
      </h2>
      <p className="text-sm mb-6" style={{ color: mode.text }}>
        Welcome to <span className="font-semibold">Toluca Mexican Bar & Grill</span>, 
        where bold flavors, lively atmosphere, and Latin-inspired cocktails come together 
        for a unique dining experience in the heart of Leicester.
      </p>

      <div className="grid grid-cols-1 sm:grid-cols-2 gap-3">
        <div
          className="rounded-2xl border p-4"
          style={{
            borderColor: COLORS.gold,
            backgroundColor: mode.sectionBg,
          }}
        >
          <p className="text-sm font-semibold" style={{ color: COLORS.gold }}>
            Location
          </p>
          <p className="text-sm" style={{ color: mode.text }}>
            Units 1-3 City Arcade,
            <br />
            Bore Street,
            <br />
            Lichfield WS13 6LZ
          </p>
        </div>
        <div
          className="rounded-2xl border p-4"
          style={{
            borderColor: COLORS.gold,
            backgroundColor: mode.sectionBg,
          }}
        >
          <p className="text-sm font-semibold" style={{ color: COLORS.gold }}>
            Contact
          </p>
          <p className="text-sm" style={{ color: mode.text }}>
            01543 471537
          </p>
          <p className="text-sm" style={{ color: mode.text }}>
            info@toluca.co.uk
          </p>
        </div>
      </div>

      <div className="mt-auto text-[11px]" style={{ color: mode.text }}>
        © {new Date().getFullYear()} Toluca Mexican Bar & Grill. All rights reserved.
      </div>
    </div>
  </Page>
));
InfoPage.displayName = "InfoPage";

// ---------- BACK COVER ----------
const BackCoverPage = forwardRef(({ mode }, ref) => (
  <Page ref={ref} mode={mode}>
    <div className="flex h-full items-center justify-center">
      <p className="text-sm font-medium" style={{ color: mode.text }}>
        Gracias por visitarnos 🌮
      </p>
    </div>
  </Page>
));
BackCoverPage.displayName = "BackCoverPage";

// ---------- MAIN ----------
export default function MenuFlipbook() {
  const flipRef = useRef(null);
  const [page, setPage] = useState(0);
  const [bookSize, setBookSize] = useState({ width: 700, height: 900 });
  const [isDark, setIsDark] = useState(false);

  // Detect dark mode
  useEffect(() => {
    const root = document.documentElement;
    setIsDark(root.classList.contains("dark"));
    const observer = new MutationObserver(() => setIsDark(root.classList.contains("dark")));
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
        restaurant="Toluca Mexican Bar & Grill"
        tagline="Modern Comfort Food & Coastal Cocktails"
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

    arr.push(<InfoPage key="info" mode={mode} />);
    arr.push(<BackCoverPage key="back" mode={mode} />);
    return { pages: arr, sectionPageMap: map };
  }, [mode]);

  const goPrev = () => flipRef.current?.pageFlip()?.flipPrev();
  const goNext = () => flipRef.current?.pageFlip()?.flipNext();
  const goTo = (p) => flipRef.current?.pageFlip()?.flip(p);

  return (
    <div
      className="mx-auto max-w-7xl px-3 py-6 sm:py-10 rounded-3xl transition-all duration-500"
      style={{ background: mode.background }}
    >
      {/* Header */}
      <div className="mb-4 flex flex-col items-center justify-between gap-3 sm:flex-row">
        <h1 className="text-2xl font-bold tracking-tight" style={{ color: COLORS.gold }}>
          Restaurant Menu
        </h1>
        <div className="flex items-center gap-2">
          <button
            onClick={goPrev}
            className="rounded-2xl border px-3 py-2 text-sm shadow-md hover:scale-105 transition-transform font-semibold"
            style={{ color: mode.text, borderColor: COLORS.gold, backgroundColor: mode.buttonBg }}
          >
            ◀ Prev
          </button>
          <span className="text-sm tabular-nums select-none" style={{ color: mode.text }}>
            {String(page + 1).padStart(2, "0")} / {String(pages.length).padStart(2, "0")}
          </span>
          <button
            onClick={goNext}
            className="rounded-2xl border px-3 py-2 text-sm shadow-md hover:scale-105 transition-transform font-semibold"
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
              className={`rounded-2xl border px-3 py-2 text-sm shadow-md hover:scale-105 transition-transform font-semibold ${
                isActive ? "ring-2" : ""
              }`}
              style={{
                color: mode.text,
                borderColor: COLORS.gold,
                backgroundColor: mode.buttonBg,
              }}
            >
              {s.title}
            </button>
          );
        })}
      </div>
    </div>
  );
}
