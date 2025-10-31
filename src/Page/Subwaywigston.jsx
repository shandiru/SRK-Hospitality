import React from "react";

// Sections from components/HomePage
import AboutSection from "../components/SubwayWiston/AboutSection";
import MenuFlipbook from "../components/SubwayWiston/MenuFlipbook";
import Gallery from "../components/SubwayWiston/Gallery";
import ContactSection from "../components/SubwayWiston/ContactSection";
import MapSection from "../components/SubwayWiston/MapSection";
import WelcomeSection from "../components/SubwayWiston/WelcomeSection";

export default function Subwaywigston() {
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
