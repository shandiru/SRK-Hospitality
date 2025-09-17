import React from "react";

// Sections from components/HomePage
import AboutSection from "../components/AspectsPage/AboutSection";
import MenuFlipbook from "../components/AspectsPage/MenuFlipbook";
import Gallery from "../components/AspectsPage/Gallery";

import ContactSection from "../components/AspectsPage/ContactSection";
import MapSection from "../components/AspectsPage/MapSection";
import WelcomeSection from "../components/AspectsPage/WelcomeSection";
export default function Aspects() {
  return (
    <div>
      {/* Hero */}
      <section>
        <WelcomeSection />
      </section>
      <section >
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
