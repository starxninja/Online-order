import React from 'react';

const AcademicCard = ({ image, title, description, onReadMore, highlight }) => (
  <div className="bg-white rounded-2xl shadow-md overflow-hidden flex flex-col h-full">
    <img src={image} alt={title} className="w-full h-48 object-cover" />
    <div className="p-6 flex-1 flex flex-col">
      <h3 className={`text-2xl font-bold mb-2 ${highlight ? 'text-accent' : 'text-gray-900'}`}>{title}</h3>
      <p className="text-gray-700 mb-6 flex-1">{description}</p>
      <button
        className="bg-gradient-to-r from-primary to-accent text-white px-6 py-2 rounded-full font-semibold text-lg shadow hover:from-primary hover:to-secondary transition self-start"
        onClick={onReadMore}
      >
        Read More
      </button>
    </div>
  </div>
);

export default AcademicCard; 