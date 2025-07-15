import React from 'react';

const AcademicModal = ({ open, onClose, title, image, description, price, benefits }) => {
  if (!open) return null;
  return (
    <div className="fixed inset-0 z-50 flex items-center justify-center bg-black bg-opacity-50">
      <div className="bg-white rounded-2xl shadow-lg max-w-2xl w-full p-8 relative">
        <button
          className="absolute top-4 right-4 text-gray-500 hover:text-red-500 text-2xl font-bold"
          onClick={onClose}
        >
          &times;
        </button>
        {image && <img src={image} alt={title} className="w-full h-48 object-cover rounded-xl mb-6" />}
        <h2 className="text-3xl font-bold mb-4">{title}</h2>
        <p className="text-lg text-gray-700 mb-4">{description}</p>
        {price && <div className="text-xl font-bold mb-4">Price: <span className="text-red-500">{price}</span></div>}
        {benefits && benefits.length > 0 && (
          <div>
            <h3 className="text-lg font-semibold mb-2">Benefits</h3>
            <ul className="list-disc list-inside space-y-1">
              {benefits.map((b, i) => <li key={i}>{b}</li>)}
            </ul>
          </div>
        )}
      </div>
    </div>
  );
};

export default AcademicModal; 