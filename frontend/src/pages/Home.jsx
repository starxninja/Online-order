import React from 'react';
import Hero from '../components/Hero';
import ServicesSection from '../components/ServicesSection';
import FeaturesHighlight from '../components/FeaturesHighlight';
import WhyChooseUs from '../components/WhyChooseUs';
import Testimonials from '../components/Testimonials';
import CallToAction from '../components/CallToAction';

const Home = () => {
  return (
    <div className="bg-white w-full">
      <Hero />
      <ServicesSection />
      <FeaturesHighlight />
      <WhyChooseUs />
      <Testimonials />
      <CallToAction />
    </div>
  );
};

export default Home;
