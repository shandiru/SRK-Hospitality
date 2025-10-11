import React from "react";

// Sections from components/HomePage
import HeroSection from "../components/vacancies/RestaurantManager/HeroSection";
import BenefitsSection from "../components/vacancies/RestaurantManager/BenefitsSection"
import ResponsibilitiesSection from "../components/vacancies/RestaurantManager/ResponsibilitiesSection"
import AboutYouSection from "../components/vacancies/RestaurantManager/AboutYouSection"
import CultureSection from "../components/vacancies/RestaurantManager/CultureSection"
import JoinUsSection from "../components/vacancies/RestaurantManager/JoinUsSection"
export default function RestaurantManagerPage() {
  return (
    <div>
      {/* Hero */}
      <section >
        <HeroSection />
      </section>
        <section >
        <BenefitsSection />
      </section>
      <section >
        <ResponsibilitiesSection />
      </section>
       <section >
        <AboutYouSection />
      </section>
       <section >
        <CultureSection />
      </section>

       <section >
        <JoinUsSection />
      </section>


   
    </div>
  );
}
