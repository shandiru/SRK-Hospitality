import React from "react";

export default function WelcomeSection() {
  return (
    <section className="relative w-full h-[80vh]">
      {/* Background Video */}
      <video
        autoPlay
        loop
        muted
        className="absolute inset-0 w-full h-full object-cover"
      >
        <source src="/fusic-back.mp4" type="video/mp4" />
        {/* Add more source types if needed */}
      </video>

      {/* Dark Overlay */}
      <div className="absolute inset-0 bg-black/30" />

      {/* Content */}
      <div className="relative z-10 flex flex-col items-center justify-center h-full text-center px-6">
        <h1 className="text-white text-4xl sm:text-5xl md:text-6xl font-bold px-6 py-3 rounded-lg border-2 border-white/60 bg-black/40 backdrop-blur-md">
          FUSIC - Leicester
        </h1>     
      </div>
    </section>
  );
}
