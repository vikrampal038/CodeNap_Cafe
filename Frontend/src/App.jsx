import React  from "react";
import ScrollToTop from './Hooks/ScrollerToTop';

import {  Routes, Route } from 'react-router-dom';
import Navbar from "./CommonField/Navbar";
import Footer from "./CommonField/Footer";
import HomePage from "./Pages/HomePage";
import MenuPage from "./Pages/MenuPage";
import ContactPage from "./Pages/ContactPage";
import ReservationPage from "./Pages/ReservationPage";
import GalleryPage from "./Pages/GalleryPage";

const App = () => {
  return (
<div
      className="overflow-x-hidden bg-[#614343]">
      <Navbar />
      <ScrollToTop />
      <Routes>
        <Route path="/" element={<HomePage />} />
        <Route path="/home" element={<HomePage />} />
        <Route path="/menu" element={<MenuPage />} />
        <Route path="/gallery" element={<GalleryPage />} />
        <Route path="/reservation" element={<ReservationPage />} />
        <Route path="/contact" element={<ContactPage />} />
      </Routes>
      <Footer />
    </div>
  );
};

export default App;
