import React, { useEffect } from "react";
import AOS from "aos";
import "aos/dist/aos.css";

export default function Hero() {
  useEffect(() => {
    AOS.init({
      duration: 1000,
      once: true,
      easing: "ease-in-out",
    });
  }, []);

  return (
    <section className="relative h-[90vh] flex items-center justify-center overflow-hidden">
      {/* Background Video */}
      <video
        autoPlay
        loop
        muted
        playsInline
        className="absolute inset-0 w-full h-full object-cover brightness-50"
      >
        <source src="/hero.mp4" type="video/mp4" />
        Your browser does not support the video tag.
      </video>

      {/* Overlay Content */}
      <div className="relative z-10 text-center px-6">
        <h1
          data-aos="fade-up"
          className="text-4xl md:text-6xl font-extrabold text-white tracking-wide"
        >
          Exceptional Taste & Hospitality
        </h1>

        <p
          data-aos="fade-up"
          data-aos-delay="200"
          className="mt-5 text-lg md:text-xl text-gray-100 max-w-2xl mx-auto"
        >
          Celebrating the passion of independent culinary businesses.
        </p>

        <div
          data-aos="zoom-in"
          data-aos-delay="400"
          className="mt-8 flex justify-center gap-4"
        >
          <a
            href="/venues"
            className="px-6 py-3 bg-yellow-500 text-black font-semibold rounded-full hover:bg-yellow-400 transition"
          >
            Explore Venues
          </a>
          <a
            href="/vacancies"
            className="px-6 py-3 border border-white text-white rounded-full hover:bg-white hover:text-black transition"
          >
            Join Our Team
          </a>
        </div>
      </div>
    </section>
  );
}
