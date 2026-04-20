import React, { useState } from 'react';
import { FaCheckCircle, FaChevronDown, FaChevronUp } from 'react-icons/fa';
import { motion, AnimatePresence } from 'framer-motion';
import { useTheme } from '../../../components/context/ThemeContext';

const items = [
  "Full Zomato Registration — PAN, GST, FSSAI setup assistance",
  "Menu Upload with categories, pricing, and dish images",
  "Restaurant Logo, Banner, QR Code, and Menu Card Design",
  "Payment Integration (Cashfree, UPI setup)",
  "Delivery Activation — Radius, Partner enablement & dashboard",
  "Listing Optimization — SEO, location tags, photo gallery",
  "WhatsApp Support for document collection & live chat",
  "Expert guidance to get faster Zomato approval"
];

// Ensure you are accepting the isDarkMode prop here
const ZomatoWhatYouGet = () => {
  const { isDarkMode } = useTheme();
  const [expanded, setExpanded] = useState(false);
  const [selectedItem, setSelectedItem] = useState(null);
  const visibleItems = expanded ? items : items.slice(0, 4);

  return (
    <section
      // Main section background and text color
      className={`py-12 px-4 sm:px-8 md:px-12 font-poppins ${
        isDarkMode ? 'bg-gray-900 text-gray-100' : 'bg-[#e6f0ff] text-gray-800' // <-- Light mode: bg-[#e6f0ff] text-gray-800
      }`}
    >
      <div
        // Inner content box background and text color
        className={`max-w-5xl mx-auto rounded-xl shadow-lg p-6 sm:p-8 ${
          isDarkMode ? 'bg-gray-800 text-gray-100' : 'bg-white text-gray-900' // <-- Light mode: bg-white text-gray-900
        }`}
      >
        <h2
          // Heading text color
          className={`text-2xl sm:text-3xl font-bold mb-6 text-center sm:text-left ${
            isDarkMode ? 'text-purple-400' : 'text-blue-900' // <-- Light mode: text-blue-900
          }`}
        >
          What You'll Get
        </h2>

        <div className="grid grid-cols-1 sm:grid-cols-2 gap-5 text-sm">
          <AnimatePresence>
            {visibleItems.map((item, idx) => (
              <motion.div
                key={idx}
                // Individual item text and hover background color
                className={`flex items-start gap-3 cursor-pointer rounded p-2 transition ${
                  isDarkMode ? 'hover:bg-gray-700 text-gray-300' : 'hover:bg-blue-100 text-gray-700' // <-- Light mode: hover:bg-blue-100 text-gray-700
                }`}
                onClick={() => setSelectedItem(item)}
                initial={{ opacity: 0, y: 10 }}
                animate={{ opacity: 1, y: 0 }}
                exit={{ opacity: 0, y: 10 }}
                transition={{ delay: idx * 0.05, duration: 0.3 }}
              >
                <FaCheckCircle
                  // Checkmark icon color
                  className={`${isDarkMode ? 'text-purple-500' : 'text-blue-600'} mt-1 flex-shrink-0`} // <-- Light mode: text-blue-600
                />
                <p>{item}</p>
              </motion.div>
            ))}
          </AnimatePresence>
        </div>

        {/* Toggle Button */}
        <div className="text-center mt-8">
          <button
            onClick={() => setExpanded(!expanded)}
            // Toggle button background and text color
            className={`px-5 py-2 rounded-md transition inline-flex items-center gap-2 text-sm sm:text-base ${
              isDarkMode
                ? 'bg-purple-600 text-white hover:bg-purple-700'
                : 'bg-blue-600 text-white hover:bg-blue-700' // <-- Light mode: bg-blue-600 text-white hover:bg-blue-700
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
            // Modal background and text color
            className={`p-6 rounded-lg shadow-lg max-w-md w-full mx-4 ${isDarkMode ? 'bg-gray-700 text-gray-100' : 'bg-white text-gray-800'}`} // <-- Light mode: bg-white text-gray-800
          >
            <h3
              // Modal heading color
              className={`text-xl font-semibold mb-4 ${isDarkMode ? 'text-purple-400' : 'text-blue-900'}`} // <-- Light mode: text-blue-900
            >
              📦 Service Details
            </h3>
            <p className={`${isDarkMode ? 'text-gray-300' : 'text-gray-700'} mb-4`}>{selectedItem}</p> {/* <-- Light mode: text-gray-700 */}
            <div className="text-right">
              <button
                onClick={() => setSelectedItem(null)}
                // Modal close button color
                className={`px-4 py-2 rounded hover:bg-blue-700 transition ${
                  isDarkMode ? 'bg-purple-600 text-white hover:bg-purple-700' : 'bg-blue-600 text-white' // <-- Light mode: bg-blue-600 text-white
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

export default ZomatoWhatYouGet;