import React from "react";

// Sections from components/HomePage
import VenueHeroSection from "../components/EventHire/VenueHeroSection";
import OccasionSection from "../components/EventHire/OccasionSection"
import JourneyStepsSection from "../components/EventHire/JourneyStepsSection"
import VenueBookingForm from "../components/EventHire/VenueBookingForm"
export default function EventHire() {
  return (
    <div>
      {/* Hero */}
      <section >
        <VenueHeroSection />
        <OccasionSection />
        <JourneyStepsSection />
        <VenueBookingForm />
      </section>

      
   
    </div>
  );
}
