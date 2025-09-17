import React from "react";

// Sections from components/HomePage
import AboutSection from "../components/FusicPage/AboutSection";
import MenuFlipbook from "../components/FusicPage/MenuFlipbook";
import Gallery from "../components/FusicPage/Gallery";

import ContactSection from "../components/FusicPage/ContactSection";
import MapSection from "../components/FusicPage/MapSection";
import WelcomeSection from "../components/FusicPage/WelcomeSection";
export default function Fusic() {
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
