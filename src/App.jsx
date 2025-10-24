import React from "react";
import { Routes, Route } from "react-router-dom";
import Header from "./components/Header.jsx";
import Home from "./Page/Home.jsx";

import SiteFooter from "./components/Footer.jsx";
import Venu from "./Page/VenuesPage.jsx";
import ScrollToTop from "./components/ScrollToTop.jsx";
import BARCELONE from "./Page/BarcelonetarestaurantPage.jsx";
import BARDOS from "./Page/BardoshermanosPage.jsx";
import Alnaseeb from "./Page/AlnaseebrestaurantPage.jsx";
import Freddie from "./Page/FreddiePage.jsx";
import Walnut from "./Page/Walnut.jsx";
import Aspects from "./Page/AspectsPage.jsx";
import Toluca from "./Page/Toluca.jsx";
import Fusic from "./Page/FusicPage.jsx";
import RestaurantManagerPage from "./Page/RestaurantManagerPage.jsx"
import Vacancies from "./Page/Vacancies.jsx"
import Lynnleics from "./Page/lynn_leics.jsx";
import Terrace from "./Page/Terrace.jsx";

export default function App() {
  return (
    <div className="min-h-screen flex flex-col">
      <ScrollToTop />
      <Header />
      <main className="flex-1">
        <Routes>
          <Route path="/" element={<Home />} />
          <Route path="/terrace" element={<Terrace />} />
          <Route path="/Lynn" element={<Lynnleics />} />
          <Route path="/walnut" element={<Walnut />} />
          <Route path="/barceloneta" element={<BARCELONE />} />
          <Route path="/dos-hermanos" element={<BARDOS />} />
          <Route path="/al-naseeb" element={<Alnaseeb />} />
          <Route path="/freddies" element={<Freddie />} />
          <Route path="/aspects" element={<Aspects />} />
          <Route path="/toluca" element={<Toluca />} />
          <Route path="/fusic" element={<Fusic />} />
          <Route path="/venues" element={<Venu />} />
          <Route path="/RestaurantManagerPage" element={<RestaurantManagerPage />} />
          <Route path="/vacancies" element={<Vacancies />} />
        </Routes>
        <SiteFooter />
      </main>
    </div>
  );
}
