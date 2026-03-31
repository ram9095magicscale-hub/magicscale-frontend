import React, { useState } from 'react';
import { FaCheckCircle, FaChevronDown, FaChevronUp } from 'react-icons/fa';
import { motion, AnimatePresence } from 'framer-motion';
import { useTheme } from '../../../components/context/ThemeContext';

const items = [
  "Simultaneous Zomato & Swiggy Registration",
  "Unified Menu Upload & Categories Optimization",
  "Professional Branding (Logo, Banner, Menu Card)",
  "Digital QR Code for Restaurant Operations",
  "Payment Gateway Integration (Razorpay/Cashfree)",
  "SEO Listing Optimization for Both Platforms",
  "Priority Listing & Dashboard Setup",
  "Dedicated WhatsApp Support for Onboarding",
  "FSSAI License Assistance",
  "Initial 50+ Item Menu Upload (Pro Plan)"
];

const ComboWhatYouGet = () => {
  const { isDarkMode } = useTheme();
  const [expanded, setExpanded] = useState(false);
  const [selectedItem, setSelectedItem] = useState(null);
  const visibleItems = expanded ? items : items.slice(0, 4);

  return (
    <section
      className={`py-12 px-4 sm:px-8 md:px-12 font-poppins ${
        isDarkMode ? 'bg-gray-900 text-gray-100' : 'bg-[#f3e8ff] text-gray-800'
      }`}
    >
      <div
        className={`max-w-5xl mx-auto rounded-xl shadow-lg p-6 sm:p-8 ${
          isDarkMode ? 'bg-gray-800 text-gray-100' : 'bg-white text-gray-900'
        }`}
      >
        <h2
          className={`text-2xl sm:text-3xl font-bold mb-6 text-center sm:text-left ${
            isDarkMode ? 'text-purple-400' : 'text-indigo-900'
          }`}
        >
          What You'll Get in the Combo
        </h2>

        <div className="grid grid-cols-1 sm:grid-cols-2 gap-5 text-sm">
          <AnimatePresence>
            {visibleItems.map((item, idx) => (
              <motion.div
                key={idx}
                className={`flex items-start gap-3 cursor-pointer rounded p-2 transition ${
                  isDarkMode ? 'hover:bg-gray-700 text-gray-300' : 'hover:bg-purple-100 text-gray-700'
                }`}
                onClick={() => setSelectedItem(item)}
                initial={{ opacity: 0, y: 10 }}
                animate={{ opacity: 1, y: 0 }}
                exit={{ opacity: 0, y: 10 }}
                transition={{ delay: idx * 0.05, duration: 0.3 }}
              >
                <FaCheckCircle
                  className={`${isDarkMode ? 'text-purple-500' : 'text-indigo-600'} mt-1 flex-shrink-0`}
                />
                <p>{item}</p>
              </motion.div>
            ))}
          </AnimatePresence>
        </div>

        <div className="text-center mt-8">
          <button
            onClick={() => setExpanded(!expanded)}
            className={`px-5 py-2 rounded-md transition inline-flex items-center gap-2 text-sm sm:text-base ${
              isDarkMode
                ? 'bg-purple-600 text-white hover:bg-purple-700'
                : 'bg-indigo-600 text-white hover:bg-indigo-700'
            }`}
          >
            {expanded ? (
              <>
                View Less <FaChevronUp />
              </>
            ) : (
              <>
                View All Items <FaChevronDown />
              </>
            )}
          </button>
        </div>
      </div>

      {/* Modal */}
      {selectedItem && (
        <div className="fixed inset-0 bg-black bg-opacity-50 flex justify-center items-center z-50">
          <div
            className={`p-6 rounded-lg shadow-lg max-w-md w-full mx-4 ${isDarkMode ? 'bg-gray-700 text-gray-100' : 'bg-white text-gray-800'}`}
          >
            <h3
              className={`text-xl font-semibold mb-4 ${isDarkMode ? 'text-purple-400' : 'text-indigo-900'}`}
            >
              📦 Service Details
            </h3>
            <p className={`${isDarkMode ? 'text-gray-300' : 'text-gray-700'} mb-4`}>{selectedItem}</p>
            <div className="text-right">
              <button
                onClick={() => setSelectedItem(null)}
                className={`px-4 py-2 rounded hover:bg-indigo-700 transition ${
                  isDarkMode ? 'bg-purple-600 text-white hover:bg-purple-700' : 'bg-indigo-600 text-white'
                }`}
              >
                Close
              </button>
            </div>
          </div>
        </div>
      )}
    </section>
  );
};

export default ComboWhatYouGet;
