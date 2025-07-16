import React from 'react';

const ServicesHero = ({ backgroundImage }) => {
  return (
    <section className="bg-primary relative overflow-hidden">
      {backgroundImage && (
        <img
          src={backgroundImage}
          alt="Books background"
          className="absolute inset-0 w-full h-full object-cover opacity-30 z-0"
        />
      )}
      {/* Make the overlay semi-transparent to reveal the background image */}
      <div className="absolute inset-0 bg-gradient-to-r from-primary/80 to-secondary/70 z-0"></div>
      <div className="relative max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 py-24 lg:py-32 text-center z-10">
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