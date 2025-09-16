import React from "react";

// Sections from components/HomePage
import AboutSection from "../components/BarcelonetarestaurantPage/AboutSection";
import MenuFlipbook from "../components/BarcelonetarestaurantPage/MenuFlipbook";
import Gallery from "../components/BarcelonetarestaurantPage/Gallery";

import ContactSection from "../components/BarcelonetarestaurantPage/ContactSection";
import MapSection from "../components/BarcelonetarestaurantPage/MapSection";
import WelcomeSection from "../components/BarcelonetarestaurantPage/WelcomeSection";
export default function BARCELONE() {
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
