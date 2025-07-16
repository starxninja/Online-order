import React, { useRef } from 'react';
import Wavify from 'react-wavify';
import { motion } from 'framer-motion';

const CallToAction = () => {
  const btnRef = useRef(null);

  // Simple ripple effect
  const handleRipple = (e) => {
    const button = btnRef.current;
    const circle = document.createElement('span');
    const diameter = Math.max(button.clientWidth, button.clientHeight);
    const radius = diameter / 2;
    circle.style.width = circle.style.height = `${diameter}px`;
    circle.style.left = `${e.clientX - button.getBoundingClientRect().left - radius}px`;
    circle.style.top = `${e.clientY - button.getBoundingClientRect().top - radius}px`;
    circle.classList.add('ripple');
    button.appendChild(circle);
    setTimeout(() => circle.remove(), 600);
  };

  return (
    <section className="relative py-20 bg-gradient-radial from-primary via-accent to-white overflow-hidden">
      <div className="absolute bottom-0 left-0 w-full z-0">
        <Wavify
          fill="#10B981"
          paused={false}
          options={{ height: 20, amplitude: 30, speed: 0.2, points: 3 }}
          className="opacity-30"
        />
      </div>
      <div className="relative z-10 max-w-3xl mx-auto px-4 sm:px-6 lg:px-8 text-center">
        <motion.h2
          initial={{ opacity: 0, y: 40 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true, amount: 0.3 }}
          transition={{ duration: 0.7 }}
          className="text-3xl sm:text-4xl md:text-5xl font-bold text-primary mb-6"
        >
          Boost Your Grades Today!
        </motion.h2>
        <motion.p
          initial={{ opacity: 0, y: 40 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true, amount: 0.3 }}
          transition={{ duration: 0.7, delay: 0.2 }}
          className="text-lg sm:text-xl text-text/80 mb-10 max-w-2xl mx-auto"
        >
          Professional Writing for Success
        </motion.p>
        <motion.button
          ref={btnRef}
          whileHover={{ scale: 1.08 }}
          whileTap={{ scale: 0.97 }}
          className="relative overflow-hidden px-10 py-4 rounded-full text-lg font-semibold bg-gradient-to-r from-primary to-accent text-white shadow-lg transition-all duration-300 focus:outline-none"
          onClick={handleRipple}
        >
          <span className="relative z-10">Start Writing Now</span>
        </motion.button>
      </div>
      <style>{`
        .ripple {
          position: absolute;
          border-radius: 50%;
          background: rgba(16, 185, 129, 0.3);
          animation: ripple 0.6s linear;
          pointer-events: none;
          z-index: 1;
        }
        @keyframes ripple {
          to {
            transform: scale(2.5);
            opacity: 0;
          }
        }
      `}</style>
    </section>
  );
};

export default CallToAction;