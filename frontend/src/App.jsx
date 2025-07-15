import React from 'react';
<<<<<<< HEAD
import Navbar from './components/Navbar';
import Hero from './components/Hero';
import ServicesSection from './components/ServicesSection';
import WhyChooseUs from './components/WhyChooseUs';
import Testimonials from './components/Testimonials';
import CallToAction from './components/CallToAction';
import Footer from './components/Footer';
=======
import { Routes, Route } from 'react-router-dom';
import Navbar from './components/Navbar';
import Footer from './components/Footer';
import Home from './pages/Home';
import AboutUs from './pages/AboutUs';
>>>>>>> master

function App() {
  return (
    <div className="min-h-screen bg-white">
      <Navbar />
<<<<<<< HEAD
      <Hero />
      <ServicesSection />
      <WhyChooseUs />
      <Testimonials />
      <CallToAction />
=======
      <Routes>
        <Route path="/" element={<Home />} />
        <Route path="/about" element={<AboutUs />} />
      </Routes>
>>>>>>> master
      <Footer />
    </div>
  );
}

export default App;