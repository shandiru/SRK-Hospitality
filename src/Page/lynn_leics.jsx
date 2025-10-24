import React from "react";

// Sections from components/HomePage
import AboutSection from "../components/lynn_leics/AboutSection";
import MenuFlipbook from "../components/lynn_leics/MenuFlipbook";
import Gallery from "../components/lynn_leics/Gallery";
import ContactSection from "../components/lynn_leics/ContactSection";
import MapSection from "../components/lynn_leics/MapSection";
import WelcomeSection from "../components/lynn_leics/WelcomeSection";

export default function Lynnleics() {
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
