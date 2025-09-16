import React from "react";
import { Routes, Route } from "react-router-dom";
import Header from "./components/Header.jsx";
import Home from "./Page/Home.jsx";

import SiteFooter from "./components/Footer.jsx";
import Venu from "./Page/VenuesPage.jsx";
import ScrollToTop from "./components/ScrollToTop.jsx";
import BAR from "./Page/BarPage.jsx";
import BARCELONE from "./Page/BarcelonetarestaurantPage.jsx";
import BARDOS from "./Page/BardoshermanosPage.jsx";
import Alnaseeb from "./Page/AlnaseebrestaurantPage.jsx";
import Freddie from "./Page/FreddiePage.jsx";
export default function App() {
  return (
    <div className="min-h-screen flex flex-col">
      <ScrollToTop />
      <Header />
      <main className="flex-1">
        <Routes>
          <Route path="/" element={<Home />} />
           <Route path="/venues" element={<Venu />} />
            <Route path="/1573bar" element={<BAR />} />
             <Route path="/barceloneta" element={<BARCELONE />} />
              <Route path="/dos-hermanos" element={<BARDOS />} />
                <Route path="/al-naseeb" element={<Alnaseeb />} />
                 <Route path="/freddies" element={<Freddie />} />



         
        </Routes>
        <SiteFooter />
      </main>
    </div>
  );
}
