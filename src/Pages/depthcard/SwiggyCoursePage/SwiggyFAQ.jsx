import React from 'react';
import { useTheme } from '../../../components/context/ThemeContext';

const SwiggyFAQ = () => {
  const { isDarkMode } = useTheme();
  return (
    <div className={`py-16 px-6 md:px-20 font-poppins transition-colors duration-500 ${
      isDarkMode ? 'bg-gray-900' : 'bg-gradient-to-br from-orange-50 to-yellow-100'
    }`}>
      <div className="max-w-5xl mx-auto">
        <h2 className={`text-4xl font-bold mb-8 text-center ${
          isDarkMode ? 'text-orange-500' : 'text-gray-800'
        }`}>Frequently Asked Questions</h2>

        <div className="space-y-6">
          {[
            {
              q: "What documents are required?",
              a: "PAN, FSSAI, GST, bank details, and a few photos of your kitchen and food setup are required for Swiggy onboarding."
            },
            {
              q: "How long does onboarding take?",
              a: "Usually, the process takes 3–5 working days after all valid documents are submitted and verified."
            },
            {
              q: "Can I list my restaurant without a GST number?",
              a: "Yes, it’s possible under specific categories (like petty food businesses) where GST is not mandatory. We will help guide you accordingly."
            },
            {
              q: "Is this service available in all cities?",
              a: "Yes, our onboarding support is available PAN India, including metro, tier 2, and tier 3 cities."
            },
            {
              q: "Can you help with designing my menu and logo?",
              a: "Absolutely! We provide end-to-end design support including logo, banner, menu card, and even QR code generation."
            }
          ].map((faq, idx) => (
            <details key={idx} className={`group shadow-md rounded-lg p-5 cursor-pointer transition-colors duration-300 ${
              isDarkMode ? 'bg-gray-800 text-gray-200' : 'bg-white text-gray-800'
            }`}>
              <summary className={`text-lg font-medium group-open:text-orange-600 ${
                isDarkMode ? 'text-gray-100' : 'text-gray-800'
              }`}>{faq.q}</summary>
              <p className={`text-sm mt-2 ${
                isDarkMode ? 'text-gray-400' : 'text-gray-600'
              }`}>{faq.a}</p>
            </details>
          ))}
        </div>
      </div>
    </div>
  );
};

export default SwiggyFAQ;

