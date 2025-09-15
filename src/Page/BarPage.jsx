import React from "react";

// Sections from components/HomePage
import AboutSection from "../components/BarPage/AboutSection";
import MenuFlipbook from "../components/BarPage/MenuFlipbook";
import Gallery from "../components/BarPage/Gallery";
import GiftCardSection from "../components/BarPage/GiftCardSection";
import ContactSection from "../components/BarPage/ContactSection";
import MapSection from "../components/BarPage/MapSection";
export default function BAR() {
  return (
    <div>
      {/* Hero */}
      <section id="hero">
        <AboutSection/>
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
