import React from "react";

// Sections from components/HomePage
import AboutSection from "../components/Subway/AboutSection";
import MenuFlipbook from "../components/Subway/MenuFlipbook";
import Gallery from "../components/Subway/Gallery";
import ContactSection from "../components/Subway/ContactSection";
import MapSection from "../components/Subway/MapSection";
import WelcomeSection from "../components/Subway/WelcomeSection";

export default function Subway() {
  return (
    <div>
      {/* Hero */}
      <section>
        <WelcomeSection />
      </section>
      <section id="hero">
        <AboutSection />
      </section>
      <section>
        <MenuFlipbook />
      </section>
      <section>
        <Gallery />
      </section>
      <section>
        <ContactSection />
      </section>
      <section>
        <MapSection />
      </section>
    </div>
  );
}
