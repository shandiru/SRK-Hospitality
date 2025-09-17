import React from "react";

// Sections from components/HomePage
import HeroSection from "../components/HomePage/HeroSection.jsx";
import AboutSection from "../components/HomePage/AboutSection.jsx";
import ContactSection from "../components/HomePage/ContactSection.jsx";
export default function Home() {
  return (
    <div>
      {/* Hero */}
      <section id="hero">
        <HeroSection />
      </section>

<section>
  <AboutSection />
</section>

<section>
 <ContactSection />
  
</section>

      
   
    </div>
  );
}
