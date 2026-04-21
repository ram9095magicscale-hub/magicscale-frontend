import React from 'react';
import { useTheme } from '../../../components/context/ThemeContext';

// Accept isDarkMode as a prop
const ZomatoFAQ = () => {
  const { isDarkMode } = useTheme();
  return (
    <div
      // Main container background and text color
      className={`py-16 px-6 md:px-20 font-poppins ${
        isDarkMode ? 'bg-gray-900 text-gray-100' : 'bg-gradient-to-br from-rose-50 to-red-100 text-gray-800'
      }`}
    >
      <div className="max-w-5xl mx-auto">
        <h2
          // Heading text color
          className={`text-4xl font-bold mb-8 text-center ${
            isDarkMode ? 'text-rose-400' : 'text-slate-900'
          }`}
        >
          Frequently Asked Questions
        </h2>

        <div className="space-y-6">
          {/* FAQ Item 1 */}
          <details
            className={`group shadow-sm border rounded-2xl p-6 cursor-pointer transition-all ${
              isDarkMode ? 'bg-slate-800/50 border-slate-700/50 text-slate-200 hover:border-red-500/30' : 'bg-white border-slate-100 text-slate-800 hover:border-red-100'
            }`}
          >
            <summary
              className={`text-lg font-bold group-open:text-red-600 transition-colors ${
                isDarkMode ? 'text-white' : 'text-slate-900'
              }`}
            >
              What documents are required?
            </summary>
            <p className={`text-sm mt-4 leading-relaxed font-medium ${isDarkMode ? 'text-slate-400' : 'text-slate-600'}`}>
              PAN, FSSAI, GST, Bank details, and a few photos of your kitchen and food setup are required for Zomato onboarding.
            </p>
          </details>

          {/* FAQ Item 2 */}
          <details
            className={`group shadow-sm border rounded-2xl p-6 cursor-pointer transition-all ${
              isDarkMode ? 'bg-slate-800/50 border-slate-700/50 text-slate-200 hover:border-red-500/30' : 'bg-white border-slate-100 text-slate-800 hover:border-red-100'
            }`}
          >
            <summary
              className={`text-lg font-bold group-open:text-red-600 transition-colors ${
                isDarkMode ? 'text-white' : 'text-slate-900'
              }`}
            >
              How long does onboarding take?
            </summary>
            <p className={`text-sm mt-4 leading-relaxed font-medium ${isDarkMode ? 'text-slate-400' : 'text-slate-600'}`}>
              Usually, the process takes 3–5 working days after all valid documents are submitted and verified.
            </p>
          </details>

          {/* FAQ Item 3 */}
          <details
            className={`group shadow-sm border rounded-2xl p-6 cursor-pointer transition-all ${
              isDarkMode ? 'bg-slate-800/50 border-slate-700/50 text-slate-200 hover:border-red-500/30' : 'bg-white border-slate-100 text-slate-800 hover:border-red-100'
            }`}
          >
            <summary
              className={`text-lg font-bold group-open:text-red-600 transition-colors ${
                isDarkMode ? 'text-white' : 'text-slate-900'
              }`}
            >
              Can I list my restaurant without a GST number?
            </summary>
            <p className={`text-sm mt-4 leading-relaxed font-medium ${isDarkMode ? 'text-slate-400' : 'text-slate-600'}`}>
              Yes, it’s possible under specific categories (like petty food businesses) where GST is not mandatory. We will help guide you accordingly.
            </p>
          </details>

          {/* FAQ Item 4 */}
          <details
            className={`group shadow-sm border rounded-2xl p-6 cursor-pointer transition-all ${
              isDarkMode ? 'bg-slate-800/50 border-slate-700/50 text-slate-200 hover:border-red-500/30' : 'bg-white border-slate-100 text-slate-800 hover:border-red-100'
            }`}
          >
            <summary
              className={`text-lg font-bold group-open:text-red-600 transition-colors ${
                isDarkMode ? 'text-white' : 'text-slate-900'
              }`}
            >
              Is this service available in all cities?
            </summary>
            <p className={`text-sm mt-4 leading-relaxed font-medium ${isDarkMode ? 'text-slate-400' : 'text-slate-600'}`}>
              Yes, our onboarding support is available PAN India, including metro, tier 2, and tier 3 cities.
            </p>
          </details>

          {/* FAQ Item 5 */}
          <details
            className={`group shadow-sm border rounded-2xl p-6 cursor-pointer transition-all ${
              isDarkMode ? 'bg-slate-800/50 border-slate-700/50 text-slate-200 hover:border-red-500/30' : 'bg-white border-slate-100 text-slate-800 hover:border-red-100'
            }`}
          >
            <summary
              className={`text-lg font-bold group-open:text-red-600 transition-colors ${
                isDarkMode ? 'text-white' : 'text-slate-900'
              }`}
            >
              Can you help with designing my menu and logo?
            </summary>
            <p className={`text-sm mt-4 leading-relaxed font-medium ${isDarkMode ? 'text-slate-400' : 'text-slate-600'}`}>
              Absolutely! We provide end-to-end design support including logo, banner, menu card, and even QR code generation.
            </p>
          </details>
        </div>
      </div>
    </div>
  );
};

export default ZomatoFAQ;