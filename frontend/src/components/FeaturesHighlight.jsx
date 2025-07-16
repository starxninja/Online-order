import React from 'react';
import { CircularProgressbar, buildStyles } from 'react-circular-progressbar';
import 'react-circular-progressbar/dist/styles.css';
import { motion } from 'framer-motion';

const features = [
  {
    title: 'On-Time Delivery',
    value: 99,
    color: '#10B981',
    desc: 'Never miss a deadline with our punctual, reliable service.'
  },
  {
    title: 'Client Satisfaction',
    value: 98,
    color: '#F59E0B',
    desc: 'Our clients consistently rate us 5 stars for quality and support.'
  },
  {
    title: 'Originality',
    value: 100,
    color: '#1E3A8A',
    desc: 'Every paper is 100% unique and plagiarism-free.'
  }
];

const FeaturesHighlight = () => {
  return (
    <section className="py-20 bg-white">
      <div className="max-w-5xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className="text-center mb-16">
          <h2 className="text-4xl font-bold text-primary mb-4">Why Students Love Us</h2>
          <p className="text-xl text-text max-w-2xl mx-auto">
            Our commitment to excellence is reflected in our results.
          </p>
        </div>
        <div className="grid grid-cols-1 md:grid-cols-3 gap-12">
          {features.map((feature, i) => (
            <motion.div
              key={feature.title}
              initial={{ opacity: 0, y: 40 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true, amount: 0.3 }}
              transition={{ duration: 0.7, delay: i * 0.2 }}
              className="flex flex-col items-center"
            >
              <div className="w-32 h-32 mb-6">
                <CircularProgressbar
                  value={feature.value}
                  text={`${feature.value}%`}
                  styles={buildStyles({
                    pathColor: feature.color,
                    textColor: feature.color,
                    trailColor: '#F3F4F6',
                    textSize: '1.5rem',
                    strokeLinecap: 'round',
                  })}
                />
              </div>
              <h3 className="text-xl font-semibold text-text mb-2">{feature.title}</h3>
              <p className="text-text/70 text-center">{feature.desc}</p>
            </motion.div>
          ))}
        </div>
      </div>
    </section>
  );
};

export default FeaturesHighlight; 