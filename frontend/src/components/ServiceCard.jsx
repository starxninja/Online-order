import React from 'react';

const ServiceCard = ({ icon, title, description, price }) => {
  return (
    <div className="bg-white rounded-xl shadow-md p-8 hover:shadow-lg transition-shadow">
      <div className="w-16 h-16 bg-red-50 rounded-xl flex items-center justify-center mb-6">
        <div className="w-8 h-8 text-primary">
          {icon}
        </div>
      </div>
      <h3 className="text-xl font-semibold text-gray-900 mb-4">{title}</h3>
      <p className="text-gray-600 mb-6 leading-relaxed">{description}</p>
      <p className="text-lg font-semibold text-gray-900">{price}</p>
    </div>
  );
};

export default ServiceCard;