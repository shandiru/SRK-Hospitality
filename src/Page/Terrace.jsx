import React from "react";

// Sections from components/HomePage
import AboutSection from "../components/Terrace/AboutSection";
import MenuFlipbook from "../components/Terrace/MenuFlipbook";
import Gallery from "../components/Terrace/Gallery";
import GiftCardSection from "../components/Terrace/GiftCardSection";
import ContactSection from "../components/Terrace/ContactSection";
import MapSection from "../components/Terrace/MapSection";
import WelcomeSection from "../components/Terrace/WelcomeSection";
export default function Terrace() {
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
