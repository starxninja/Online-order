import React from 'react';

const DetailedServiceCard = ({ icon, title, description, price, features }) => {
  return (
    <div className="bg-white rounded-xl shadow-md p-8 hover:shadow-lg transition-shadow">
      <div className="w-16 h-16 bg-red-50 rounded-xl flex items-center justify-center mb-6">
        <div className="w-8 h-8 text-primary">
          {icon}
        </div>
      </div>
      <h3 className="text-xl font-semibold text-gray-900 mb-4">{title}</h3>
      <p className="text-gray-600 mb-6 leading-relaxed">{description}</p>
      <p className="text-2xl font-bold text-gray-900 mb-6">{price}</p>
      <ul className="space-y-3">
        {features.map((feature, index) => (
          <li key={index} className="flex items-center text-gray-600">
            <div className="w-2 h-2 bg-primary rounded-full mr-3 flex-shrink-0"></div>
            {feature}
          </li>
        ))}
      </ul>
    </div>
  );
};

export default DetailedServiceCard;