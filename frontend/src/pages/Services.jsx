import React from 'react';
import Navbar from '../components/Navbar';
import ServicesHero from '../components/ServicesHero';
import DetailedServicesSection from '../components/DetailedServicesSection';
import ServicesWhyChooseUs from '../components/ServicesWhyChooseUs';
import ServicesTestimonials from '../components/ServicesTestimonials';
import ServicesCallToAction from '../components/ServicesCallToAction';
import Footer from '../components/Footer';
import heroBg from '../assets/book-bg.jpg'; // Updated image

const Services = () => {
  return (
    <div className="min-h-screen bg-white">
      
      <ServicesHero backgroundImage={heroBg} />
      <DetailedServicesSection />
      <ServicesWhyChooseUs />
      <ServicesTestimonials />
      
    </div>
  );
};

export default Services;