import React, { useState } from 'react';
import { Link, useLocation } from 'react-router-dom';
import { motion, AnimatePresence } from 'framer-motion';
import { Bars3Icon, XMarkIcon } from '@heroicons/react/24/outline';

const navLinks = [
  { to: '/', label: 'Home' },
  { to: '/about', label: 'About Us' },
  { to: '/academics', label: 'Academics' },
  { to: '/services', label: 'Services' },
  { to: '/contact', label: 'Contact' },
];

const Navbar = () => {
  const location = useLocation();
  const [menuOpen, setMenuOpen] = useState(false);

  return (
    <nav className="bg-white shadow-sm border-b border-neutral-100 font-sans sticky top-0 z-30">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className="flex justify-between items-center h-16">
          {/* Logo */}
          <Link to="/" className="flex items-center select-none">
            <span className="text-2xl font-bold tracking-tight font-sans" style={{ fontFamily: 'Poppins, Inter, sans-serif' }}>
              <span className="text-primary font-extrabold">Global</span>
              <span className="text-secondary font-semibold">assigntech</span>
            </span>
          </Link>

          {/* Navigation Links */}
          <div className="hidden md:flex ml-10 items-center space-x-8">
            {navLinks.map((link) => (
              <Link
                key={link.to}
                to={link.to}
                className={`relative px-3 py-2 text-base font-medium transition-all duration-300
                  ${location.pathname === link.to ? 'text-primary' : 'text-text'}
                  hover:text-accent
                  group
                `}
              >
                <span className="group-hover:scale-110 group-hover:text-accent transition-transform duration-300 inline-block">
                  {link.label}
                </span>
              </Link>
            ))}
          </div>

          {/* Action Button */}
          <div className="hidden md:block ml-6">
            <button
              className="bg-gradient-to-r from-primary to-secondary text-white px-6 py-2 rounded-full text-base font-semibold shadow-md transition-all duration-300 animate-pulse hover:scale-105 focus:outline-none focus:ring-2 focus:ring-accent"
            >
              Start Writing Now
            </button>
          </div>

          {/* Mobile menu button */}
          <div className="md:hidden flex items-center">
            <button
              className="text-text hover:text-primary focus:outline-none"
              onClick={() => setMenuOpen(true)}
              aria-label="Open menu"
            >
              <Bars3Icon className="h-7 w-7" />
            </button>
          </div>
        </div>
      </div>

      {/* Mobile Menu */}
      <AnimatePresence>
        {menuOpen && (
          <motion.div
            initial={{ x: '100%' }}
            animate={{ x: 0 }}
            exit={{ x: '100%' }}
            transition={{ type: 'spring', stiffness: 300, damping: 30 }}
            className="fixed top-0 right-0 w-72 h-full bg-white shadow-lg z-50 flex flex-col p-8"
          >
            <button
              className="self-end mb-8 text-text hover:text-primary focus:outline-none"
              onClick={() => setMenuOpen(false)}
              aria-label="Close menu"
            >
              <XMarkIcon className="h-7 w-7" />
            </button>
            <nav className="flex flex-col space-y-6 mt-4">
              {navLinks.map((link) => (
                <Link
                  key={link.to}
                  to={link.to}
                  className={`text-lg font-medium transition-all duration-300 ${location.pathname === link.to ? 'text-primary' : 'text-text'} hover:text-accent`}
                  onClick={() => setMenuOpen(false)}
                >
                  {link.label}
                </Link>
              ))}
              <button
                className="mt-8 bg-gradient-to-r from-primary to-secondary text-white px-6 py-2 rounded-full text-base font-semibold shadow-md transition-all duration-300 animate-pulse hover:scale-105 focus:outline-none focus:ring-2 focus:ring-accent"
              >
                Start Writing Now
              </button>
            </nav>
          </motion.div>
        )}
      </AnimatePresence>
    </nav>
  );
};

export default Navbar;
