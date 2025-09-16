import React from "react";

// Sections from components/HomePage
import AboutSection from "../components/AlnaseebrestaurantPage/AboutSection";
import MenuFlipbook from "../components/AlnaseebrestaurantPage/MenuFlipbook";
import Gallery from "../components/AlnaseebrestaurantPage/Gallery";

import ContactSection from "../components/AlnaseebrestaurantPage/ContactSection";
import MapSection from "../components/AlnaseebrestaurantPage/MapSection";
import WelcomeSection from "../components/AlnaseebrestaurantPage/WelcomeSection";
export default function Alnaseeb() {
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
