import React from 'react';
import { Particles } from '@tsparticles/react';
import { loadFull } from 'tsparticles';
import { motion } from 'framer-motion';

const particlesOptions = {
  background: { color: 'transparent' },
  fpsLimit: 60,
  particles: {
    color: { value: '#10B981' },
    links: { enable: true, color: '#10B981', distance: 120, opacity: 0.2 },
    move: { enable: true, speed: 1 },
    number: { value: 30 },
    opacity: { value: 0.3 },
    shape: { type: 'circle' },
    size: { value: 2 },
  },
};

const Hero = () => {
  return (
    <section className="relative overflow-hidden min-h-[60vh] flex items-center justify-center bg-gradient-to-br from-primary to-secondary">
      <div className="absolute inset-0 z-0">
        <Particles options={particlesOptions} />
      </div>
      <div className="relative z-10 max-w-4xl mx-auto px-4 sm:px-6 lg:px-8 py-24 lg:py-32 text-center">
        <motion.h1
          initial={{ opacity: 0, y: 40 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.7, delay: 0.2 }}
          className="text-3xl sm:text-4xl lg:text-5xl font-bold text-white mb-6 leading-tight drop-shadow-lg"
        >
          Unlock Your Academic Potential<br />
          with <span className="text-primary font-extrabold">Global</span><span className="text-accent font-semibold">assigntech</span>
        </motion.h1>
        <motion.p
          initial={{ opacity: 0, y: 40 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.7, delay: 0.7 }}
          className="text-lg sm:text-xl lg:text-2xl text-white/90 mb-8 max-w-2xl mx-auto"
        >
          Professional writing for essays, dissertations, research papers, and more. Elevate your grades with expert help.
        </motion.p>
        <motion.button
          whileHover={{ scale: 1.08 }}
          whileTap={{ scale: 0.97 }}
          className="px-8 py-4 rounded-full text-lg font-semibold bg-white text-primary shadow-neumorphic transition-all duration-300 hover:shadow-neumorphic-hover focus:outline-none"
          style={{ boxShadow: '8px 8px 24px #d1d5db, -8px -8px 24px #fff' }}
        >
          Start Writing Now
        </motion.button>
      </div>
    </section>
  );
};

export default Hero;