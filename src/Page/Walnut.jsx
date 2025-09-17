import React from "react";

// Sections from components/HomePage
import AboutSection from "../components/Walnut/AboutSection";
import MenuFlipbook from "../components/Walnut/MenuFlipbook";
import Gallery from "../components/Walnut/Gallery";
import ContactSection from "../components/Walnut/ContactSection";
import MapSection from "../components/Walnut/MapSection";
import WelcomeSection from "../components/Walnut/WelcomeSection";

export default function Walnut() {
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
