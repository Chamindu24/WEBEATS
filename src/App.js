import React from "react";
import { BrowserRouter as Router, Route, Routes } from "react-router-dom";
import Home from "./Components/Home";
import Navbar from "./Components/Navbar";
import Footer from "./Components/Footer"; 
import Services from "./Components/Services";
import Events from "./Components/Events";
import About from "./Components/About";
import Contact from "./Components/Contact";
import Artists from "./Components/Artists";
import TryNow from "./Components/TryNow";
import PrivacyPolicy from "./Components/PrivacyPolicy";
import TermsOfService from "./Components/TermsOfService";
import CookiePolicy from "./Components/CookiePolicy";
import CookiePreferencesModal from "./Components/CookiePreferencesModal";
import ArtistPromotion from "./Components/ArtistPromotion";
import Workshops from "./Components/Workshops";
import AdminPortfolio from "./Components/AdminPortfolio";
import Magazine from "./Components/Magazine";
import PremathmaEventPage from "./Components/PremathmaEventPage";
import EventPlanning from "./Components/EventPlanning";
import FanEngagement from "./Components/FanEngagement";
import MusicProduction from "./Components/MusicProduction";


import "bootstrap/dist/css/bootstrap.min.css"; // Only need to import this once
import "./App.css";

function App() {
  return (
    <Router>
      <Navbar />
      <Routes>
        <Route path="/" element={<Home />} />
        <Route path="/Home" element={<Home />} />
        <Route path="/Services" element={<Services />} />
        <Route path="/Events" element={<Events />} />
        <Route path="/About" element={<About />} />
        <Route path="/Contact" element={<Contact />} />
        <Route path="/Artists" element={<Artists />} />
        <Route path="/TryNow" element={<TryNow />} />
        <Route path="/PrivacyPolicy" element={<PrivacyPolicy />} />
        <Route path="/TermsOfService" element={<TermsOfService />} />
        <Route path="/CookiePolicy" element={<CookiePolicy />} />
        <Route path="/CookiePreferencesModal" element={<CookiePreferencesModal />} />
        <Route path="/ArtistPromotion" element={<ArtistPromotion />} />
        <Route path="/Workshops" element={<Workshops />} />
        <Route path="/AdminPortfolio" element={<AdminPortfolio />} />
        <Route path="/Magazine" element={<Magazine />} />
        <Route path="/PremathmaEventPage" element={<PremathmaEventPage />} />
        <Route path="/EventPlanning" element={<EventPlanning />} />
        <Route path="/FanEngagement" element={<FanEngagement />} />
        <Route path="/MusicProduction" element={<MusicProduction />} />
       

    


      </Routes>
      <Footer /> {/* Apply the Footer here */}
    </Router>
  );
}

export default App;
