import React from 'react';
import { FaCheckCircle } from 'react-icons/fa';
import { useTheme } from '../../../components/context/ThemeContext';

const SwiggyWhatYouGet = () => {
  const { isDarkMode } = useTheme();
  const features = [
    {
      title: 'Full Registration Assistance',
      description:
        'PAN, GST, FSSAI setup along with end-to-end Swiggy onboarding support.',
    },
    {
      title: 'Menu & Branding Design',
      description:
        'Menu Upload, Logo, QR Code, Banner & Menu Card Design for a complete setup.',
    },
    {
      title: 'Payments & Delivery Setup',
      description:
        'Integration with Cashfree, UPI and delivery partner activation.',
    },
    {
      title: 'Listing & SEO Optimization',
      description:
        'Location tags, photo gallery and listing improvements for better visibility.',
    },
    {
      title: 'Live Support & Chat',
      description:
        'WhatsApp-based document collection, real-time support and coordination.',
    },
    {
      title: 'Approval Acceleration',
      description:
        'Expert guidance for smooth and fast Swiggy onboarding & restaurant go-live.',
    },
  ];

  return (
    <section className={`py-12 transition-colors duration-500 font-poppins`}>
      <div className={`rounded-3xl shadow-xl p-6 sm:p-8 hover:shadow-2xl transition-all duration-300 border ${
        isDarkMode ? 'bg-[#0f172a]/40 border-slate-700/50' : 'bg-white border-slate-200/80'
      }`}>
        {/* ✅ Header */}
        <div className="text-center mb-10">
          <h2 className={`text-4xl font-extrabold mb-4 tracking-tight leading-tight ${
            isDarkMode ? 'text-orange-500' : 'text-orange-600'
          }`}>
            What You'll Get with Swiggy Onboarding
          </h2>
          <p className={`${isDarkMode ? 'text-gray-400' : 'text-gray-600'} text-base sm:text-lg`}>
            End-to-end solutions crafted to launch your restaurant online with speed and precision
          </p>
        </div>

        {/* ✅ Feature Grid */}
        <div className="grid grid-cols-1 sm:grid-cols-2 gap-6">
          {features.map((item, idx) => (
            <div
              key={idx}
              className={`transition-colors duration-300 rounded-xl p-6 text-left shadow-sm ${
                isDarkMode ? 'bg-gray-700 hover:bg-gray-600 border border-gray-600' : 'bg-yellow-100 hover:bg-yellow-200'
              }`}
            >
              <div className="flex items-start mb-4">
                <div className="bg-gradient-to-br from-green-500 to-green-600 text-white p-2 rounded-full shadow-sm shrink-0">
                  <FaCheckCircle className="text-base" />
                </div>
                <h3 className={`ml-3 text-base sm:text-lg font-bold leading-tight ${
                  isDarkMode ? 'text-gray-100' : 'text-gray-800'
                }`}>
                  {item.title}
                </h3>
              </div>
              <p className={`text-sm leading-relaxed ${
                isDarkMode ? 'text-gray-400' : 'text-gray-700'
              }`}>
                {item.description}
              </p>
            </div>
          ))}
        </div>

        {/* ✅ Bottom Note */}
        <div className={`mt-12 text-center text-sm ${
          isDarkMode ? 'text-gray-500' : 'text-gray-500'
        }`}>
          All services include personalized onboarding support and 24x7 assistance.
        </div>
      </div>
    </section>
  );
};

export default SwiggyWhatYouGet;

