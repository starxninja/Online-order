import React from 'react';

const TestimonialCard = ({ quote, author, role, initials, bgColor }) => {
  const stars = Array(5).fill(0);

  return (
    <div className="bg-white rounded-xl shadow-md p-8">
      <div className="flex mb-4">
        {stars.map((_, index) => (
          <svg key={index} className="w-5 h-5 text-yellow-400 fill-current" viewBox="0 0 24 24">
            <path d="M12 2l3.09 6.26L22 9.27l-5 4.87 1.18 6.88L12 17.77l-6.18 3.25L7 14.14 2 9.27l6.91-1.01L12 2z"/>
          </svg>
        ))}
      </div>
      <p className="text-gray-700 italic mb-6 leading-relaxed">"{quote}"</p>
      <div className="flex items-center">
        <div className={`w-12 h-12 ${bgColor} rounded-full flex items-center justify-center mr-4`}>
          <span className="text-white font-semibold">{initials}</span>
        </div>
        <div>
          <h4 className="font-semibold text-gray-900">{author}</h4>
          <p className="text-gray-500 text-sm">{role}</p>
        </div>
      </div>
    </div>
  );
};

export default TestimonialCard;