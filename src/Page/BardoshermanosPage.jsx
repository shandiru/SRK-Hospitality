import React from "react";

// Sections from components/HomePage
import AboutSection from "../components/BardoshermanosPage/AboutSection";
import MenuFlipbook from "../components/BardoshermanosPage/MenuFlipbook";
import Gallery from "../components/BardoshermanosPage/Gallery";

import ContactSection from "../components/BardoshermanosPage/ContactSection";
import MapSection from "../components/BardoshermanosPage/MapSection";
import WelcomeSection from "../components/BardoshermanosPage/WelcomeSection";
export default function BARDOS() {
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
