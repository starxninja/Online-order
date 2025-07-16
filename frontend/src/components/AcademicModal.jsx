import React from 'react';

const AcademicModal = ({ open, onClose, title, image, description, price, benefits, demoUrl, demoLabel }) => {
  if (!open) return null;
  return (
    <div className="fixed inset-0 z-50 flex items-center justify-center bg-black bg-opacity-50">
      <div className="bg-white rounded-2xl shadow-lg max-w-2xl w-full p-8 relative">
        {/* Fancy Close Button */}
        <button
          className="absolute top-4 right-4 bg-red-100 hover:bg-red-500 hover:text-white text-red-500 rounded-full w-10 h-10 flex items-center justify-center text-2xl font-bold shadow transition-all duration-200 border border-red-200"
          onClick={onClose}
          aria-label="Close"
        >
          <svg className="w-6 h-6" fill="none" stroke="currentColor" strokeWidth="2" viewBox="0 0 24 24">
            <path strokeLinecap="round" strokeLinejoin="round" d="M6 18L18 6M6 6l12 12" />
          </svg>
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
        {/* Live Demo/Open Demo Button */}
        {demoUrl && (
          <a
            href={demoUrl}
            target="_blank"
            rel="noopener noreferrer"
            className="inline-block mt-8 px-6 py-3 bg-gradient-to-r from-red-500 to-red-400 text-white rounded-full font-semibold text-lg shadow hover:from-red-600 hover:to-red-500 transition"
          >
            {demoLabel || 'Live Demo'}
          </a>
        )}
      </div>
    </div>
  );
};

export default AcademicModal; 