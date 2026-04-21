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
        isDarkMode ? 'bg-[#0f172a]/40 border-slate-700/50' : 'bg-white border-slate-200/80 shadow-orange-900/5'
      }`}>
        {/* ✅ Header */}
        <div className="text-center mb-10">
          <h2 className={`text-4xl font-extrabold mb-4 tracking-tight leading-tight ${
            isDarkMode ? 'text-orange-500' : 'text-orange-600'
          }`}>
            What You'll Get with Swiggy
          </h2>
          <p className={`${isDarkMode ? 'text-gray-400' : 'text-gray-600'} text-base sm:text-lg`}>
            End-to-end solutions crafted to launch your restaurant online with speed and precision
          </p>
        </div>

        {/* ✅ Feature Grid */}
        <div className="grid grid-cols-1 sm:grid-cols-2 gap-5 text-sm">
          {features.map((item, idx) => (
            <div
              key={idx}
              className={`transition-all duration-300 rounded-2xl p-6 text-left border ${
                isDarkMode ? 'bg-slate-900/40 border-slate-800 hover:border-orange-500/30 text-slate-300' : 'bg-orange-50/50 border-orange-100 hover:border-orange-200 text-slate-700 hover:bg-orange-50'
              }`}
            >
              <div className="flex items-start mb-3">
                <div className="bg-orange-500 text-white p-1.5 rounded-full shadow-lg shadow-orange-500/20 shrink-0">
                  <FaCheckCircle className="text-xs" />
                </div>
                <h3 className={`ml-3 text-base font-bold leading-tight ${
                  isDarkMode ? 'text-white' : 'text-slate-900'
                }`}>
                  {item.title}
                </h3>
              </div>
              <p className={`text-sm leading-relaxed ${
                isDarkMode ? 'text-slate-400' : 'text-slate-600'
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

