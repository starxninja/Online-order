import React from 'react';

const Footer = () => {
  return (
    <footer className="bg-gradient-to-br from-primary to-accent text-white">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 py-16">
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-8">
          {/* About Us */}
          <div>
            <h3 className="text-lg font-semibold mb-6">About Us</h3>
            <p className="text-gray-200 leading-relaxed">
              We provide professional academic writing services to help students achieve their academic goals with confidence and excellence.
            </p>
          </div>

          {/* Services */}
          <div>
            <h3 className="text-lg font-semibold mb-6">Services</h3>
            <ul className="space-y-3">
              <li><a href="#" className="text-gray-200 hover:text-white transition-colors">Dissertation Writing</a></li>
              <li><a href="#" className="text-gray-200 hover:text-white transition-colors">Essay Writing</a></li>
              <li><a href="#" className="text-gray-200 hover:text-white transition-colors">Research Papers</a></li>
              <li><a href="#" className="text-gray-200 hover:text-white transition-colors">Literature Reviews</a></li>
            </ul>
          </div>

          {/* Quick Links */}
          <div>
            <h3 className="text-lg font-semibold mb-6">Quick Links</h3>
            <ul className="space-y-3">
              <li><a href="/about" className="text-gray-200 hover:text-white transition-colors">About</a></li>
              <li><a href="/academics" className="text-gray-200 hover:text-white transition-colors">Academics</a></li>
              <li><a href="/services" className="text-gray-200 hover:text-white transition-colors">Services</a></li>
              <li><a href="/contact" className="text-gray-200 hover:text-white transition-colors">Contact</a></li>
            </ul>
          </div>

          {/* Contact */}
          <div>
            <h3 className="text-lg font-semibold mb-6">Contact</h3>
            <div className="space-y-3">
              <div className="flex items-center space-x-3">
                <svg className="w-5 h-5 text-accent" fill="currentColor" viewBox="0 0 24 24">
                  <path d="M3 4a1 1 0 011-1h16a1 1 0 011 1v2.586l-8 8-8-8V4z"/>
                  <path d="m3 8.414 8 8 8-8V20a1 1 0 01-1 1H4a1 1 0 01-1-1V8.414z"/>
                </svg>
                <span className="text-gray-200">info@globalassigntech.com</span>
              </div>
              <div className="flex items-center space-x-3">
                <svg className="w-5 h-5 text-accent" fill="currentColor" viewBox="0 0 24 24">
                  <path d="M3 5a2 2 0 012-2h3.28a1 1 0 01.948.684l1.498 4.493a1 1 0 01-.502 1.21l-2.257 1.13a11.042 11.042 0 005.516 5.516l1.13-2.257a1 1 0 011.21-.502l4.493 1.498a1 1 0 01.684.949V19a2 2 0 01-2 2h-1C9.716 21 3 14.284 3 6V5z"/>
                </svg>
                <span className="text-gray-200">+91 576916122</span>
              </div>
              <div className="flex items-center space-x-3">
                <svg className="w-5 h-5 text-accent" fill="currentColor" viewBox="0 0 24 24">
                  <path d="M12 8v4l3 3"/>
                  <circle cx="12" cy="12" r="10"/>
                </svg>
                <span className="text-gray-200">24/7 Available</span>
              </div>
              <div className="flex space-x-4 mt-4">
                <a href="#" className="hover:scale-110 transition-transform"><svg className="w-6 h-6 text-white" fill="currentColor" viewBox="0 0 24 24"><path d="M24 4.56v14.91a2.54 2.54 0 01-2.54 2.54H2.54A2.54 2.54 0 010 19.47V4.56A2.54 2.54 0 012.54 2h18.92A2.54 2.54 0 0124 4.56zM7.19 19.47V9.5l7.62 4.99-7.62 4.98z"/></svg></a>
                <a href="#" className="hover:scale-110 transition-transform"><svg className="w-6 h-6 text-white" fill="currentColor" viewBox="0 0 24 24"><path d="M22.46 6c-.77.35-1.6.59-2.47.7a4.3 4.3 0 001.88-2.37 8.59 8.59 0 01-2.72 1.04A4.28 4.28 0 0016.11 4c-2.37 0-4.29 1.92-4.29 4.29 0 .34.04.67.11.99C7.69 8.96 4.07 7.13 1.64 4.15c-.37.64-.58 1.38-.58 2.17 0 1.5.76 2.82 1.92 3.6a4.28 4.28 0 01-1.94-.54v.05c0 2.1 1.5 3.85 3.5 4.25-.36.1-.74.16-1.13.16-.28 0-.54-.03-.8-.08.54 1.7 2.1 2.94 3.95 2.97A8.6 8.6 0 012 19.47c0 .01 0 .01 0 0z"/></svg></a>
                <a href="#" className="hover:scale-110 transition-transform"><svg className="w-6 h-6 text-white" fill="currentColor" viewBox="0 0 24 24"><path d="M12 2.04c-5.5 0-9.96 4.46-9.96 9.96 0 4.41 3.6 8.07 8.24 8.93.6.11.82-.26.82-.58v-2.02c-3.34.73-4.04-1.61-4.04-1.61-.54-1.37-1.32-1.74-1.32-1.74-1.08-.74.08-.73.08-.73 1.2.08 1.83 1.23 1.83 1.23 1.06 1.82 2.78 1.3 3.46.99.11-.77.42-1.3.76-1.6-2.67-.3-5.47-1.34-5.47-5.97 0-1.32.47-2.39 1.23-3.23-.12-.3-.53-1.52.12-3.17 0 0 1.01-.32 3.3 1.23a11.5 11.5 0 016 0c2.29-1.55 3.3-1.23 3.3-1.23.65 1.65.24 2.87.12 3.17.76.84 1.23 1.91 1.23 3.23 0 4.64-2.8 5.67-5.47 5.97.43.37.81 1.1.81 2.22v3.29c0 .32.22.7.83.58A8.6 8.6 0 0022 12c0-5.5-4.46-9.96-9.96-9.96z"/></svg></a>
              </div>
            </div>
          </div>
        </div>
        <div className="border-t border-white/30 mt-12 pt-8 text-center">
          <p className="text-gray-200">© 2025 Globalassigntech. All rights reserved.</p>
        </div>
      </div>
    </footer>
  );
};

export default Footer;