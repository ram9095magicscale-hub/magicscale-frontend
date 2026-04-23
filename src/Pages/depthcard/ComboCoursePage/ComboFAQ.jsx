import React from 'react';
import { useTheme } from '../../../components/context/ThemeContext';

const ComboFAQ = () => {
  const { isDarkMode } = useTheme();
  return (
    <div
      className={`py-16 px-6 md:px-20 font-poppins ${isDarkMode ? 'bg-gray-900 text-gray-100' : 'bg-gradient-to-br from-indigo-50 to-purple-100 text-gray-800'
        }`}
    >
      <div className="max-w-5xl mx-auto">
        <h2
          className={`text-4xl font-bold mb-8 text-center ${isDarkMode ? 'text-purple-400' : 'text-indigo-900'
            }`}
        >
          Combo Frequently Asked Questions
        </h2>

        <div className="space-y-6">
          <details
            className={`group shadow-md rounded-lg p-5 cursor-pointer ${isDarkMode ? 'bg-gray-800 text-gray-200' : 'bg-white text-gray-800'
              }`}
          >
            <summary
              className={`text-lg font-medium group-open:text-indigo-600 ${isDarkMode ? 'text-gray-100' : 'text-gray-800'
                }`}
            >
              What is included in the Zomato & Swiggy Combo?
            </summary>
            <p className={`text-sm mt-2 ${isDarkMode ? 'text-gray-400' : 'text-gray-600'}`}>
              The combo includes full registration and onboarding for both Zomato and Swiggy platforms, menu optimization, photo uploads, and branding support for one unified price.
            </p>
          </details>

          <details
            className={`group shadow-md rounded-lg p-5 cursor-pointer ${isDarkMode ? 'bg-gray-800 text-gray-200' : 'bg-white text-gray-800'
              }`}
          >
            <summary
              className={`text-lg font-medium group-open:text-indigo-600 ${isDarkMode ? 'text-gray-100' : 'text-gray-800'
                }`}
            >
              How much time does it take to go live on both platforms?
            </summary>
            <p className={`text-sm mt-2 ${isDarkMode ? 'text-gray-400' : 'text-gray-600'}`}>
              Typically, it takes 5–7 working days to get your restaurant live on both platforms once all documents are verified.
            </p>
          </details>

          <details
            className={`group shadow-md rounded-lg p-5 cursor-pointer ${isDarkMode ? 'bg-gray-800 text-gray-200' : 'bg-white text-gray-800'
              }`}
          >
            <summary
              className={`text-lg font-medium group-open:text-indigo-600 ${isDarkMode ? 'text-gray-100' : 'text-gray-800'
                }`}
            >
              Do I need a GST number for the Combo package?
            </summary>
            <p className={`text-sm mt-2 ${isDarkMode ? 'text-gray-400' : 'text-gray-600'}`}>
              If you have a GST number, it's great! If not, we can help you with registration or guide you on how to list under petty food business categories if applicable.
            </p>
          </details>

          <details
            className={`group shadow-md rounded-lg p-5 cursor-pointer ${isDarkMode ? 'bg-gray-800 text-gray-200' : 'bg-white text-gray-800'
              }`}
          >
            <summary
              className={`text-lg font-medium group-open:text-indigo-600 ${isDarkMode ? 'text-gray-100' : 'text-gray-800'
                }`}
            >
              Will you help with menu pricing and categories?
            </summary>
            <p className={`text-sm mt-2 ${isDarkMode ? 'text-gray-400' : 'text-gray-600'}`}>
              Yes, our experts will help you structure your menu categories and suggest optimized pricing to maximize your attraction on both delivery platforms.
            </p>
          </details>
        </div>
      </div>
    </div>
  );
};

export default ComboFAQ;
