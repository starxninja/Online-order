import React from 'react';

const Hero = () => {
  return (
    <section className="bg-primary relative overflow-hidden">
      <div className="absolute inset-0 bg-gradient-to-r from-primary to-red-600"></div>
      <div className="relative max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 py-24 lg:py-32">
        <div className="text-center">
          <h1 className="text-4xl md:text-6xl font-bold text-white mb-6 leading-tight">
            Expert Academic<br />
            Writing Services
          </h1>
          <p className="text-xl md:text-2xl text-white/90 mb-4 max-w-4xl mx-auto">
            Professional assistance for all your academic writing needs.
          </p>
          <p className="text-xl md:text-2xl text-white/90 mb-12 max-w-4xl mx-auto">
            Elevate your academic success with our expert writers.
          </p>
          <button className="bg-white text-primary hover:bg-gray-100 px-8 py-4 rounded-full text-lg font-semibold transition-colors shadow-lg">
            Get Started Today
          </button>
        </div>
      </div>
    </section>
  );
};

export default Hero;