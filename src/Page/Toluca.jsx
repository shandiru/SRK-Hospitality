import React from "react";

// Sections from components/HomePage
import AboutSection from "../components/TolucaPage/AboutSection";
import MenuFlipbook from "../components/TolucaPage/MenuFlipbook";
import Gallery from "../components/TolucaPage/Gallery";
import ContactSection from "../components/TolucaPage/ContactSection";
import MapSection from "../components/TolucaPage/MapSection";
import WelcomeSection from "../components/TolucaPage/WelcomeSection";

export default function Toluca() {
    return (
        <div>
            {/* Hero */}
            <section>
                <WelcomeSection />
            </section>
            <section id="hero">
                <AboutSection />
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
