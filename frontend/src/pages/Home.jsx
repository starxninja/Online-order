import React from 'react';
import Hero from '../components/Hero';
import ServicesSection from '../components/ServicesSection';
import FeaturesHighlight from '../components/FeaturesHighlight';
import WhyChooseUs from '../components/WhyChooseUs';
import Testimonials from '../components/Testimonials';
import CallToAction from '../components/CallToAction';
import heroBg from '../assets/book-bg.jpg'; // Add your image to assets and import

const Home = () => {
  return (
    <div className="bg-white w-full">
      <Hero backgroundImage={heroBg} />
      <ServicesSection />
      <FeaturesHighlight />
      <WhyChooseUs />
      <Testimonials />
      <CallToAction />
    </div>
  );
};

export default Home;
