import React from 'react';

const CallToAction = () => {
  return (
    <section className="py-20 bg-primary">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 text-center">
        <h2 className="text-4xl md:text-5xl font-bold text-white mb-6">
          Ready to Excel in Your Academic Journey?
        </h2>
        <p className="text-xl text-white/90 mb-4 max-w-3xl mx-auto">
          Join thousands of successful students who have achieved academic excellence
        </p>
        <p className="text-xl text-white/90 mb-12 max-w-3xl mx-auto">
          with our professional writing services
        </p>
        <button className="bg-white text-primary hover:bg-gray-100 px-8 py-4 rounded-full text-lg font-semibold transition-colors shadow-lg">
          Start Your Project
        </button>
      </div>
    </section>
  );
};

export default CallToAction;