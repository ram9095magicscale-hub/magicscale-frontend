// src/components/Footer/SiteFooter.jsx
import React from 'react';
import { useTheme } from '../../../components/context/ThemeContext';

const SiteFooter = () => {
  const { isDarkMode } = useTheme();
  return (
    <footer className={`py-10 px-4 sm:px-6 md:px-20 mt-20 pb-32 md:pb-10 transition-colors duration-500 ${
      isDarkMode ? 'bg-gray-950 text-gray-300 border-t border-gray-800' : 'bg-gray-900 text-white'
    }`}>
      <div className="max-w-7xl mx-auto grid grid-cols-1 sm:grid-cols-2 md:grid-cols-4 gap-8 text-sm">
        <div>
          <h4 className={`text-lg font-semibold mb-4 transition-colors ${isDarkMode ? 'text-green-500' : 'text-white'}`}>MagicScale Legal</h4>
          <p className={isDarkMode ? 'text-gray-400' : 'text-gray-300'}>
            Empowering food businesses across India with expert license consultation, compliance support, and document management.
          </p>
        </div>

        <div>
          <h4 className={`text-lg font-semibold mb-4 transition-colors ${isDarkMode ? 'text-green-500' : 'text-white'}`}>Quick Links</h4>
          <ul className="space-y-2">
            <li><a href="/" className={`hover:underline transition-colors ${isDarkMode ? 'hover:text-green-400' : 'hover:text-gray-300'}`}>Home</a></li>
            <li><a href="/about" className={`hover:underline transition-colors ${isDarkMode ? 'hover:text-green-400' : 'hover:text-gray-300'}`}>About Us</a></li>
            <li><a href="/fssai-license" className={`hover:underline transition-colors ${isDarkMode ? 'hover:text-green-400' : 'hover:text-gray-300'}`}>FSSAI License</a></li>
            <li><a href="/contact" className={`hover:underline transition-colors ${isDarkMode ? 'hover:text-green-400' : 'hover:text-gray-300'}`}>Contact</a></li>
          </ul>
        </div>

        <div>
          <h4 className={`text-lg font-semibold mb-4 transition-colors ${isDarkMode ? 'text-green-500' : 'text-white'}`}>Contact Info</h4>
          <ul className="space-y-2">
            <li>Email: support@magicscale.in</li>
            <li>Phone: +91 8069029400</li>
            <li>Hours: 10AM - 6PM (Mon-Sat)</li>
          </ul>
        </div>

        <div>
          <h4 className={`text-lg font-semibold mb-4 transition-colors ${isDarkMode ? 'text-green-500' : 'text-white'}`}>Follow Us</h4>
          <div className="flex gap-4">
            <a href="#" className={`transition-colors ${isDarkMode ? 'hover:text-green-400 text-gray-400' : 'hover:text-gray-300 text-white'}`}>Facebook</a>
            <a href="#" className={`transition-colors ${isDarkMode ? 'hover:text-green-400 text-gray-400' : 'hover:text-gray-300 text-white'}`}>Instagram</a>
            <a href="#" className={`transition-colors ${isDarkMode ? 'hover:text-green-400 text-gray-400' : 'hover:text-gray-300 text-white'}`}>LinkedIn</a>
          </div>
        </div>
      </div>
      <div className={`text-center text-xs mt-10 transition-colors ${isDarkMode ? 'text-gray-600' : 'text-gray-400'}`}>
        © {new Date().getFullYear()} MagicScale Legal. All rights reserved.
      </div>
    </footer>
  );
};

export default SiteFooter;
