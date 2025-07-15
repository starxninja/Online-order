import React from 'react';
import { Link, useLocation } from 'react-router-dom';

const Navbar = () => {
  const location = useLocation();
  return (
    <nav className="bg-white shadow-sm border-b border-gray-100">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className="flex justify-between items-center h-16">
          {/* Logo */}
          <div className="flex items-center">
            <div className="flex items-center space-x-2">
              <div className="w-10 h-10 bg-primary rounded-lg flex items-center justify-center">
                <div className="w-6 h-6 bg-white rounded-full flex items-center justify-center">
                  <div className="w-3 h-3 bg-primary rounded-full"></div>
                </div>
              </div>
              <div className="flex flex-col">
                <span className="text-lg font-bold text-gray-900">grade</span>
                <span className="text-xs bg-primary text-white px-2 rounded">BOOST</span>
              </div>
            </div>
          </div>

          {/* Navigation Links */}
          <div className="hidden md:block">
            <div className="ml-10 flex items-baseline space-x-8">
              <Link to="/" className={`px-3 py-2 text-sm font-medium ${location.pathname === '/' ? 'text-gray-900' : 'text-gray-500'} hover:text-primary`}>
                Home
              </Link>
              <Link to="/about" className={`px-3 py-2 text-sm font-medium ${location.pathname === '/about' ? 'text-gray-900' : 'text-gray-500'} hover:text-primary`}>
                About Us
              </Link>
              <a href="#" className="text-gray-500 hover:text-primary px-3 py-2 text-sm font-medium">
                Academics
              </a>
              <a href="#" className="text-gray-500 hover:text-primary px-3 py-2 text-sm font-medium">
                Services
              </a>
              <Link to="/contact" className={`px-3 py-2 text-sm font-medium ${location.pathname === '/contact' ? 'text-gray-900' : 'text-gray-500'} hover:text-primary`}>
                Contact
              </Link>
            </div>
          </div>

          {/* Get Started Button */}
          <div className="hidden md:block">
            <button className="bg-primary hover:bg-primary-700 text-white px-6 py-2 rounded-full text-sm font-medium transition-colors">
              Get Started
            </button>
          </div>

          {/* Mobile menu button */}
          <div className="md:hidden">
            <button className="text-gray-500 hover:text-gray-700">
              <svg className="h-6 w-6" fill="none" viewBox="0 0 24 24" stroke="currentColor">
                <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M4 6h16M4 12h16M4 18h16" />
              </svg>
            </button>
          </div>
        </div>
      </div>
    </nav>
  );
};

export default Navbar;