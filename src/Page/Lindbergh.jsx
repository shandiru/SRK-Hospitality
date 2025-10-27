import React from "react";

// Sections from components/HomePage
import AboutSection from "../components/Lindbergh/AboutSection";
import MenuFlipbook from "../components/Lindbergh/MenuFlipbook";
import Gallery from "../components/Lindbergh/Gallery";
import ContactSection from "../components/Lindbergh/ContactSection";
import MapSection from "../components/Lindbergh/MapSection";
import WelcomeSection from "../components/Lindbergh/WelcomeSection";

export default function Lindbergh() {
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
        {/* <MenuFlipbook /> */}
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
