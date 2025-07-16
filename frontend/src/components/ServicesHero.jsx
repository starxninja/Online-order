import React from 'react';

const ServicesHero = () => {
  return (
    <section className="bg-primary relative overflow-hidden">
      <div className="absolute inset-0 bg-gradient-to-r from-primary to-secondary"></div>
      <div className="relative max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 py-24 lg:py-32">
        <div className="text-center">
          <h1 className="text-4xl md:text-6xl font-bold text-white mb-6 leading-tight">
            Our Academic Writing Services
          </h1>
          <p className="text-xl md:text-2xl text-white/90 max-w-4xl mx-auto">
            Professional writing services tailored to your academic needs
          </p>
        </div>
      </div>
    </section>
  );
};

export default ServicesHero;