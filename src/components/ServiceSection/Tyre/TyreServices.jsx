"use client";
import React from "react";

export default function TyreServices() {
  const services = [
    {
      title: "Michelin",
      desc: "Premium quality tyres",
    },
    {
      title: "Bridgestone",
      desc: "Premium quality tyres",
    },
    {
      title: "Continental",
      desc: "Premium quality tyres",
    },
    {
      title: "Pirelli",
      desc: "Premium quality tyres",
    },
    {
      title: "Goodyear",
      desc: "Premium quality tyres",
    },
    {
      title: "Dunlop",
      desc: "Premium quality tyres",
    },
    {
      title: "Hankook",
      desc: "Premium quality tyres",
    },
    {
      title: "Falken",
      desc: "Premium quality tyres",
    },
  ];

  return (
    <section className="py-16 bg-[var(--aircon-section-bg)] transition-colors duration-300">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        {/* Title + Subhead */}
        <div className="text-center mb-12">
          <h2
            className="font-heading font-bold tracking-tight mb-3 text-4xl md:text-5xl text-[var(--aircon-heading)]"
          >
            Premium Tyre Brands
          </h2>
        </div>

        {/* Cards */}
        <div className="grid md:grid-cols-2 lg:grid-cols-4 gap-6">
          {services.map((s) => (
            <div
              key={s.title}
              className="
                flex flex-col justify-between rounded-2xl border px-6 py-8 shadow-sm
                bg-[var(--aircon-card-bg)] border-[var(--aircon-card-border)]
                transition-all duration-300
                hover:shadow-[0_8px_24px_rgba(47,125,51,0.35)]
                hover:ring-2 hover:ring-[var(--aircon-primary)] hover:ring-offset-2
              "
            >
              <div>
                <h3 className="text-2xl font-heading font-bold mb-3 text-center text-[var(--aircon-heading)]">
                  {s.title}
                </h3>
                <p className="text-[15px] leading-6 text-center text-[var(--aircon-heading)]/90 dark:text-[var(--aircon-muted)]">
                  {s.desc}
                </p>
              </div>
            </div>
          ))}

        </div>
        <p className="font-heading font-bold mt-10 tracking-tight mb-3 text-xl text-center text-[var(--aircon-heading)]">Can't find the tyre you need? We can order any specific tyre for you!</p>
        <div className="mt-10 flex justify-center items-center">
          <button
            className="
      w-100 h-11 rounded-md text-sm font-semibold
      border bg-[var(--aircon-button-bg)] text-[var(--aircon-heading)] border-[var(--aircon-outline)]
      transition-all duration-300
      hover:bg-[var(--aircon-grad-bottom)] hover:shadow-[0_6px_18px_rgba(47,125,51,0.35)]
      hover:ring-1 hover:ring-[var(--aircon-primary)] hover:ring-offset-1
      focus-visible:outline-none focus-visible:ring-2 focus-visible:ring-[var(--aircon-primary)]
      focus-visible:ring-offset-2 focus-visible:ring-offset-[var(--aircon-section-bg)]
    "
          >
            Request Special Order
          </button>
        </div>

      </div>
    </section>
  );
}
