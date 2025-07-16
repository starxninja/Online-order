import React from 'react';
import { motion } from 'framer-motion';
import { AcademicCapIcon, ClockIcon, ShieldCheckIcon, ChatBubbleLeftRightIcon } from '@heroicons/react/24/outline';

const features = [
  {
    icon: <ShieldCheckIcon className="w-10 h-10" />, title: '100% Original', description: 'Plagiarism-free content guaranteed with every order.'
  },
  {
    icon: <AcademicCapIcon className="w-10 h-10" />, title: 'Expert Writers', description: 'PhD-qualified academic writers in every field.'
  },
  {
    icon: <ClockIcon className="w-10 h-10" />, title: 'On-Time Delivery', description: 'Meet all your deadlines with our timely delivery.'
  },
  {
    icon: <ChatBubbleLeftRightIcon className="w-10 h-10" />, title: '24/7 Support', description: 'Round-the-clock assistance for all your queries.'
  }
];

const container = {
  hidden: {},
  show: {
    transition: {
      staggerChildren: 0.2
    }
  }
};

const item = {
  hidden: { opacity: 0, y: 40 },
  show: { opacity: 1, y: 0, transition: { duration: 0.6 } }
};

const WhyChooseUs = () => {
  return (
    <section className="py-20 bg-white">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className="text-center mb-16">
          <h2 className="text-4xl font-bold text-primary mb-4">Why Choose GradeBoost?</h2>
          <p className="text-xl text-text max-w-3xl mx-auto">
            We deliver excellence through our commitment to quality, expertise, and customer satisfaction.
          </p>
        </div>
        <motion.div
          className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-8"
          variants={container}
          initial="hidden"
          whileInView="show"
          viewport={{ once: true, amount: 0.2 }}
        >
          {features.map((feature, index) => (
            <motion.div
              key={index}
              variants={item}
              className="text-center bg-white rounded-xl p-8 transition-all duration-300 hover:bg-neutral hover:scale-105 hover:shadow-xl group"
            >
              <div className="w-16 h-16 bg-accent/10 rounded-xl flex items-center justify-center mx-auto mb-6">
                <div className="w-10 h-10 text-primary group-hover:text-accent transition-colors duration-300">
                  {feature.icon}
                </div>
              </div>
              <h3 className="text-xl font-semibold text-text mb-4">{feature.title}</h3>
              <p className="text-text/70">{feature.description}</p>
            </motion.div>
          ))}
        </motion.div>
      </div>
    </section>
  );
};

export default WhyChooseUs;