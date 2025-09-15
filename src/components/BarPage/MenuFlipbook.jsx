'use client';

import React, { useMemo, useRef, useState } from 'react';
import HTMLFlipBook from 'react-pageflip';
import sectionsSeed from './menu.json';

// Utilities
const paginateByHeight = (items, maxHeight = 550) => {
  const pages = [];
  let currentPage = [];
  let currentHeight = 0;

  items.forEach((item) => {
    const isSmallScreen = window.innerWidth < 640;
    const baseHeight = isSmallScreen ? 200 : 100;
    const estimatedHeight = baseHeight + (item.description ? Math.min(item.description.length / 4, 100) : 0);

    if (currentHeight + estimatedHeight > maxHeight && currentPage.length > 0) {
      pages.push(currentPage);
      currentPage = [item];
      currentHeight = estimatedHeight;
    } else {
      currentPage.push(item);
      currentHeight += estimatedHeight;
    }
  });

  if (currentPage.length > 0) {
    pages.push(currentPage);
  }

  return pages;
};

// Shared Page
const Page = React.forwardRef(({ children, className }, ref) => (
  <div
    ref={ref}
    className={
      'relative h-full w-full bg-neutral-50 shadow-xl overflow-hidden ' +
      (className || '')
    }
  >
    <div className="absolute inset-0 bg-gradient-to-br from-white via-transparent to-neutral-200 pointer-events-none" />
    <div className="h-full w-full p-6 sm:p-10">{children}</div>
  </div>
));
Page.displayName = 'Page';

// Cover Page
const CoverPage = React.forwardRef(({ restaurant, tagline }, ref) => (
  <Page ref={ref} className="bg-gradient-to-br from-amber-50 to-orange-100">
    <div className="flex h-full flex-col items-center justify-center text-center">
      <h1 className="text-4xl sm:text-5xl font-extrabold text-[#68a879]">{restaurant}</h1>
      <p className="mt-3 text-base sm:text-lg text-neutral-600">{tagline}</p>
      <div className="mt-8 rounded-xl border bg-white/80 px-4 py-2 text-sm">Open today • 11:00 – 22:30</div>
    </div>
    <div className="absolute bottom-4 right-4 text-xs text-neutral-500">Swipe / drag to flip ➔</div>
  </Page>
));
CoverPage.displayName = 'CoverPage';

// Section Page
const SectionPage = React.forwardRef(({ title, subtitle, items }, ref) => (
  <Page ref={ref}>
    <div className="flex flex-col h-full">
      <div className="mb-4">
        <h2 className="text-2xl font-bold text-[#68a879]">{title}</h2>
        {subtitle && <p className="text-sm text-neutral-500">{subtitle}</p>}
      </div>
      <div className="grid grid-cols-1 gap-4 pb-5">
        {items.map((item) => (
          <div key={item.name} className="flex gap-3 rounded-2xl border bg-white/60 p-4 shadow-sm backdrop-blur">
            {item.image && (
              <img src={item.image} alt={item.name} className="h-20 w-20 rounded-lg object-cover flex-shrink-0" />
            )}
            <div className="flex-1">
              <p className="text-base font-semibold">{item.name}</p>
              {item.description && <p className="text-sm text-neutral-600">{item.description}</p>}
              <div className="mt-1 flex justify-between items-center">
                <p className="text-base font-semibold">{item.price}</p>
                {item.badge && (
                  <span className="text-[10px] font-medium bg-amber-100 text-amber-700 px-2 py-0.5 rounded-full">
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
SectionPage.displayName = 'SectionPage';

// Info Page
const InfoPage = React.forwardRef((_, ref) => (
  <Page ref={ref}>
    <h2 className="text-2xl font-bold text-[#68a879] mb-2">About Us</h2>
    <p className="text-sm text-neutral-700 mb-6">
      Welcome to <strong>Alino African Restaurant</strong>, where seasonal produce meets cozy vibes. Our kitchen crafts
      familiar classics with a modern twist. Thank you for dining with us!
    </p>
    <div className="grid grid-cols-1 sm:grid-cols-2 gap-4 mb-auto">
      <div className="p-4 rounded-xl border bg-white/60">
        <p className="text-sm font-semibold">Location</p>
        <p className="text-sm text-neutral-600">11 Narborough Rd Leicester LE3 0LE</p>
      </div>
      <div className="p-4 rounded-xl border bg-white/60">
        <p className="text-sm font-semibold">Contact</p>
        <p className="text-sm text-neutral-600">+44 7737 098045 • alinokam2002@yahoo.fr</p>
      </div>
    </div>
    <div className="mt-8 text-[11px] text-neutral-500">© {new Date().getFullYear()} Alino. All rights reserved.</div>
  </Page>
));
InfoPage.displayName = 'InfoPage';

// Back Page
const BackCoverPage = React.forwardRef((_, ref) => (
  <Page ref={ref} className="bg-gradient-to-tr from-neutral-100 to-neutral-50">
    <div className="flex h-full items-center justify-center">
      <p className="text-sm text-neutral-600">See you again soon 👋</p>
    </div>
  </Page>
));
BackCoverPage.displayName = 'BackCoverPage';

// ---------- Main Flipbook ----------
export default function MenuFlipbook() {
  const flipRef = useRef(null);
  const [page, setPage] = useState(0);

  const pages = useMemo(() => {
    const allPages = [];

    allPages.push(
      <CoverPage
        key="cover"
        restaurant="Alino African Restaurant"
        tagline="Modern comfort food & coastal cocktails"
      />
    );

    sectionsSeed.forEach((section) => {
      const chunks = paginateByHeight(section.items, 500);
      chunks.forEach((chunk, idx) => {
        allPages.push(
          <SectionPage
            key={`${section.id}-${idx}`}
            title={section.title + (chunks.length > 1 ? ` (Page ${idx + 1})` : '')}
            subtitle={section.subtitle}
            items={chunk}
          />
        );
      });
    });

    allPages.push(<InfoPage key="info" />);
    allPages.push(<BackCoverPage key="back" />);

    return allPages;
  }, []);

  return (
    <div className="mx-auto max-w-6xl px-3 py-6 sm:py-10">
      {/* Controls */}
      <div className="flex justify-between items-center mb-6">
        <h1 className="text-2xl font-bold text-[#68a879]">Restaurant Menu</h1>
        <div className="flex items-center gap-3">
          <button onClick={() => flipRef.current.pageFlip().flipPrev()} className="px-4 py-2 border rounded-xl">
            ◀ Prev
          </button>
          <span className="text-sm tabular-nums">{String(page + 1).padStart(2, '0')} / {String(pages.length).padStart(2, '0')}</span>
          <button onClick={() => flipRef.current.pageFlip().flipNext()} className="px-4 py-2 border rounded-xl">
            Next ▶
          </button>
        </div>
      </div>

      {/* Flipbook */}
      <div className="mx-auto flex justify-center">
        <HTMLFlipBook
          width={520}
          height={700}
          size="stretch"
          minWidth={300}
          maxWidth={650}
          maxHeight={900}
          usePortrait={true}
          startPage={0}
          showCover={true}
          flippingTime={600}
          className="[perspective:1600px]"
          mobileScrollSupport={true}
          onFlip={(e) => setPage(e.data)}
          ref={flipRef}
        >
          {pages.map((node, idx) => (
            <div key={idx} className="h-full w-full">{node}</div>
          ))}
        </HTMLFlipBook>
      </div>
    </div>
  );
}
