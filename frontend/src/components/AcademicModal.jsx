import React from 'react';

const AcademicModal = ({ open, onClose, title, image, description, price, benefits, demoUrl, demoLabel }) => {
  if (!open) return null;
  return (
    <div className="fixed inset-0 z-50 flex items-center justify-center bg-black bg-opacity-50">
      <div className="bg-white rounded-2xl shadow-lg max-w-2xl w-full p-8 relative">
        {/* Fancy Close Button */}
        <button
          className="absolute top-4 right-4 bg-accent/10 hover:bg-accent hover:text-white text-accent rounded-full w-10 h-10 flex items-center justify-center text-2xl font-bold shadow transition-all duration-200 border border-accent/20"
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
        {price && <div className="text-xl font-bold mb-4">Price: <span className="text-accent">{price}</span></div>}
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
            className="inline-block mt-8 px-6 py-3 bg-gradient-to-r from-primary to-accent text-white rounded-full font-semibold text-lg shadow hover:from-primary hover:to-secondary transition"
          >
            {demoLabel || 'Live Demo'}
          </a>
        )}
      </div>
    </div>
  );
};

export default AcademicModal; 