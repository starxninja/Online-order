import React from 'react';
import { motion } from 'framer-motion';

const DetailedServiceCard = ({ icon, title, description, price, features, index }) => {
  return (
    <motion.div
      initial={{ opacity: 0, y: 40 }}
      whileInView={{ opacity: 1, y: 0 }}
      viewport={{ once: true, amount: 0.2 }}
      transition={{ duration: 0.6, delay: index ? index * 0.1 : 0 }}
      whileHover={{ scale: 1.06, boxShadow: '0 8px 32px 0 rgba(16,185,129,0.15)' }}
      className="bg-white rounded-xl shadow-md p-8 border-2 border-transparent hover:border-accent hover:shadow-xl transition-all duration-300 group"
    >
      <motion.div
        className="w-16 h-16 bg-accent/10 rounded-xl flex items-center justify-center mb-6 mx-auto"
        whileHover={{ rotate: 12, scale: 1.1 }}
        transition={{ type: 'spring', stiffness: 300 }}
      >
        <div className="w-8 h-8 text-primary group-hover:text-accent transition-colors duration-300">
          {icon}
        </div>
      </motion.div>
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
    </motion.div>
  );
};

export default DetailedServiceCard;