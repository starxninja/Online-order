import React from 'react';
import Navbar from '../components/Navbar';
import ServicesHero from '../components/ServicesHero';
import DetailedServicesSection from '../components/DetailedServicesSection';
import ServicesWhyChooseUs from '../components/ServicesWhyChooseUs';
import ServicesTestimonials from '../components/ServicesTestimonials';
import ServicesCallToAction from '../components/ServicesCallToAction';
import Footer from '../components/Footer';

const Services = () => {
  return (
    <div className="min-h-screen bg-white">
      
      <ServicesHero />
      <DetailedServicesSection />
      <ServicesWhyChooseUs />
      <ServicesTestimonials />
      <ServicesCallToAction />
      
    </div>
  );
};

export default Services;