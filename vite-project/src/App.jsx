import React from 'react';
import { Routes, Route } from 'react-router-dom';
import Navigation from './Components/Navbar';
import Footer from './Components/Footer';
import { Home } from './Pages/Home';
import { Product } from './Pages/Product'; // <-- create this component
import AboutUs from './Pages/About';
import ContactPage from './Pages/Contact';

export const App = () => {
  return (
    <div>
      <Navigation />
      <Routes>
        <Route path="/" element={<Home />} />
        <Route path="/products" element={<Product />} />
        <Route path="/about" element={<AboutUs/>} />
        <Route path="/contact" element={<ContactPage/>} />
      </Routes>
      <Footer />
    </div>
  );
};
