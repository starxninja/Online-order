import React from 'react';
import TestimonialCard from './TestimonialCard';

const Testimonials = () => {
  const testimonials = [
    {
      quote: "The dissertation writing service was exceptional. The writer understood my requirements perfectly and delivered outstanding work.",
      author: "Sarah Johnson",
      role: "PhD Student",
      initials: "S",
      bgColor: "bg-pink-400"
    },
    {
      quote: "I received an A+ on my research paper. The quality of writing and depth of research exceeded my expectations.",
      author: "Michael Chen",
      role: "Master's Student",
      initials: "M",
      bgColor: "bg-pink-400"
    },
    {
      quote: "The essay writing service helped me improve my academic performance significantly. Highly recommended!",
      author: "Emily Brown",
      role: "Undergraduate",
      initials: "E",
      bgColor: "bg-pink-400"
    }
  ];

  return (
    <section className="py-20 bg-gray-50">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className="text-center mb-16">
          <h2 className="text-4xl font-bold text-gray-900 mb-4">What Our Clients Say</h2>
          <p className="text-xl text-gray-600">
            Don't just take our word for it - hear from our satisfied clients
          </p>
        </div>
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8">
          {testimonials.map((testimonial, index) => (
            <TestimonialCard
              key={index}
              quote={testimonial.quote}
              author={testimonial.author}
              role={testimonial.role}
              initials={testimonial.initials}
              bgColor={testimonial.bgColor}
            />
          ))}
        </div>
      </div>
    </section>
  );
};

export default Testimonials;