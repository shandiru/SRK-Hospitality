import React from "react";

// Sections from components/HomePage
import AboutSection from "../components/FreddiePage/AboutSection";
import MenuFlipbook from "../components/FreddiePage/MenuFlipbook";
import Gallery from "../components/FreddiePage/Gallery";

import ContactSection from "../components/FreddiePage/ContactSection";
import MapSection from "../components/FreddiePage/MapSection";
import WelcomeSection from "../components/FreddiePage/WelcomeSection";
export default function Freddie() {
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
