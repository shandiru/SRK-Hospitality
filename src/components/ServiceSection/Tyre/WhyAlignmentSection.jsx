import React from "react";

function CheckItem({ children }) {
  return (
    <li className="flex items-start gap-3">
      <span
        className="flex-none mt-1 w-7 h-7 rounded-full ring-1 ring-sky-500/60 flex items-center justify-center"
        aria-hidden="true"
      >
        <svg
          width="14"
          height="14"
          viewBox="0 0 24 24"
          fill="none"
          xmlns="http://www.w3.org/2000/svg"
          className="text-sky-400"
        >
          <path
            d="M20 6L9 17l-5-5"
            stroke="currentColor"
            strokeWidth="2"
            strokeLinecap="round"
            strokeLinejoin="round"
          />
        </svg>
      </span>
      <span className="text-slate-200 text-sm leading-6">{children}</span>
    </li>
  );
}

export default function TyreBalancing() {
  return (
    <section className="min-h-screen bg-slate-900 py-16">
      <div className="max-w-7xl mx-auto px-6">
        <h1 className="text-center text-3xl sm:text-4xl md:text-5xl font-extrabold text-white mb-10">
          Tyre Balancing
        </h1>

        <div className="grid gap-6 md:grid-cols-2 items-start">
          {/* Left Card */}
          <article className="rounded-lg p-8 bg-slate-800/60 backdrop-blur-sm ring-1 ring-slate-700 shadow-lg">
            <p className="text-sm text-slate-300 leading-7 max-w-prose mb-6">
              Imbalanced tyres can cause steering vibrations, uneven wear, and reduce overall ride comfort. Our
              computerised tyre balancing ensures smooth rotation and improved driving dynamics.
            </p>

            <ul className="space-y-4">
              <CheckItem>Precision digital balancing machines</CheckItem>
              <CheckItem>Static and dynamic balancing methods</CheckItem>
              <CheckItem>Weights adjusted for optimal performance</CheckItem>
            </ul>
          </article>

          {/* Right Card */}
          <aside className="rounded-lg p-8 bg-slate-800/60 backdrop-blur-sm ring-1 ring-slate-700 shadow-lg">
            <h3 className="text-lg font-semibold text-slate-100 mb-4">Signs You Need Balancing</h3>

            <ul className="space-y-4">
              <CheckItem>Steering wheel vibration at certain speeds</CheckItem>
              <CheckItem>Uneven tread wear patterns</CheckItem>
              <CheckItem>Increased fuel consumption</CheckItem>
            </ul>
          </aside>
        </div>
      </div>
    </section>
  );
}
