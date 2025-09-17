import React from "react";

// Sections from components/HomePage
import VenuesHero from "../components/VenuesPage/VenuesHero";
import VenuesGrid from "../components/VenuesPage/VenuesGrid";
export default function Venu() {
  return (
    <div>
      {/* Hero */}
      <section id="hero">
        <VenuesHero />
      </section>

      <section>
        <VenuesGrid />
      </section>



    </div>
  );
}
