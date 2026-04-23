import React, { useState, useRef, useEffect } from 'react';
import { useNavigate } from 'react-router-dom';
import { FaTv, FaDownload, FaSmile, FaUtensils, FaMotorcycle } from 'react-icons/fa';
import { useTheme } from '../../../components/context/ThemeContext';
import ComboFAQ from './ComboFAQ';
import ComboWhatYouGet from './ComboWhatYouGet';
import DocumentsRequired from '../CoursePage/DocumentsRequired';
import SiteFooter from '../FssaiCoursePage/SiteFooter';
import { CheckCircle2, ChevronRight, Star, ShieldCheck } from 'lucide-react';

const ComboCoursePage = () => {
  const navigate = useNavigate();
  const { isDarkMode } = useTheme();

  const plans = {
    planA: {
      name: 'Combo Launch Package',
      price: 3499,
      slug: 'combo-basic',
      description: 'Zomato & Swiggy Restaurant Account Setup & Basic Optimization.',
      features: [
        'Zomato & Swiggy Restaurant Account Setup',
        'Professional Menu Setup & Optimization',
        'Initial Menu Item Upload (up to 50 items)',
        'Basic Branding & Profile Configuration',
      ],
    },
    planB: {
      name: 'Combo Launch With Setup',
      price: 7999,
      slug: 'combo-pro',
      description: 'Full-stack automation with extensive photography and priority listing.',
      features: [
        'Everything in Starter Package',
        'Competitor Analysis & Detailed Monthly Report',
        'Detailed Branding & Profile Configuration',
        'Target Audience Analysis & Personalized Growth Strategies',
        '30 Days Free Consultation',
      ],
    },
  };

  const [selectedPlan, setSelectedPlan] = useState('planA');
  const currentPlan = plans[selectedPlan];

  useEffect(() => {
    window.scrollTo({ top: 0, behavior: 'smooth' });
  }, []);

  const [finalPrice, setFinalPrice] = useState(currentPlan.price);

  useEffect(() => {
    setFinalPrice(currentPlan.price);
  }, [selectedPlan, currentPlan.price]);

  const handleCheckout = () => {
    const features = currentPlan.features.join(',');
    navigate(`/checkout/${currentPlan.slug}?finalPrice=${finalPrice}&basePrice=${currentPlan.price}&planName=${encodeURIComponent(currentPlan.name)}&planFeatures=${encodeURIComponent(features)}`);
  };

  const renderCheckoutCard = (isMobile = false) => (
    <div
      className={`relative rounded-2xl ${isMobile ? 'mx-auto border-t-0 rounded-t-none w-full max-w-sm' : 'border w-full'
        } shadow-2xl overflow-hidden backdrop-blur-md transition-all duration-300 ${isDarkMode
          ? 'bg-[#0f172a]/85 border-slate-700/50 shadow-indigo-900/10 hover:shadow-indigo-900/20'
          : 'bg-white/95 border-slate-200 shadow-slate-200/50 hover:shadow-slate-200/80'
        }`}
    >
      <div className="absolute top-0 left-0 right-0 h-1 bg-gradient-to-r from-purple-400 via-indigo-500 to-purple-600 z-30" />

      <div className="relative h-32 sm:h-40 overflow-hidden bg-indigo-900/10 flex items-center justify-center p-6">
        <div className="flex -space-x-4 items-center justify-center scale-150">
          <div className="w-16 h-16 bg-white rounded-2xl flex items-center justify-center shadow-lg border-2 border-red-500 z-20">
            <FaUtensils className="text-red-600 text-3xl" />
          </div>
          <div className="w-16 h-16 bg-white rounded-2xl flex items-center justify-center shadow-lg border-2 border-orange-500 z-10 rotate-6 translate-x-2">
            <FaMotorcycle className="text-orange-500 text-3xl" />
          </div>
        </div>
        <div className="absolute bottom-4 left-5 z-20">
          <div className="inline-flex items-center gap-1.5 px-3 py-1 rounded-full bg-white/20 backdrop-blur-md border border-white/30 text-white text-[10px] font-bold uppercase tracking-wider shadow-sm">
            <Star size={10} className="text-yellow-400 fill-yellow-400" />
            2-in-1 Combo Expert
          </div>
        </div>
      </div>

      <div className="p-5 sm:p-6">
        <div className="mb-4 text-center">
          <h2 className={`text-3xl font-black tracking-tight ${isDarkMode ? 'text-white' : 'text-slate-900'}`}>
            ₹{currentPlan.price.toLocaleString()}
          </h2>

          <p className={`text-[13px] sm:text-sm mt-2 font-bold ${isDarkMode ? 'text-purple-400' : 'text-indigo-600'}`}>
            {currentPlan.name}
          </p>
        </div>

        <div className={`p-1 rounded-xl mb-5 flex gap-1 ${isDarkMode ? 'bg-[#1e293b]/80 border border-slate-700/50' : 'bg-slate-100 border border-slate-200/50'}`}>
          {Object.keys(plans).map((key) => (
            <button
              key={key}
              onClick={() => setSelectedPlan(key)}
              className={`flex-1 py-2 px-1 text-center text-[11px] sm:text-xs font-bold rounded-lg transition-all duration-300 uppercase tracking-wide
              ${selectedPlan === key
                  ? 'bg-gradient-to-r from-purple-500 to-indigo-600 text-white shadow-md transform scale-[1.02]'
                  : `${isDarkMode ? 'text-slate-400 hover:text-slate-200 hover:bg-slate-700/50' : 'text-slate-600 hover:text-slate-900 hover:bg-white/60'}`
                }`}
            >
              {plans[key].name}
            </button>
          ))}
        </div>

        <ul className="space-y-2.5 mb-6">
          {currentPlan.features.map((feature, idx) => (
            <li key={idx} className="flex items-start gap-2.5">
              <CheckCircle2 size={16} className="text-indigo-500 shrink-0 mt-0.5" />
              <span className={`text-[13px] font-medium leading-tight ${isDarkMode ? 'text-slate-200' : 'text-slate-700'}`}>{feature}</span>
            </li>
          ))}
        </ul>

        <button
          onClick={handleCheckout}
          className="w-full flex items-center justify-center gap-2 bg-gradient-to-r from-purple-600 to-indigo-500 text-white py-2.5 sm:py-3 rounded-xl text-sm font-bold shadow-lg shadow-indigo-500/25 hover:shadow-indigo-500/40 hover:-translate-y-0.5 active:scale-[0.98] transition-all duration-300"
        >
          Proceed to Checkout
          <ChevronRight size={16} />
        </button>

        <div className="mt-4 flex items-center justify-center gap-1.5 opacity-80 hover:opacity-100 transition-opacity">
          <ShieldCheck size={14} className={isDarkMode ? 'text-slate-400' : 'text-slate-500'} />
          <p className={`text-[11px] font-semibold tracking-wide uppercase ${isDarkMode ? 'text-slate-400' : 'text-slate-500'}`}>
            30-Day Support Guarantee
          </p>
        </div>
      </div>
    </div>
  );

  return (
    <div className={`min-h-screen font-[Poppins] selection:bg-purple-500/30 overflow-x-hidden ${isDarkMode ? 'bg-[#04070d] text-slate-200' : 'bg-[#fcfdfd] text-slate-800'}`}>
      <div className="absolute top-0 inset-x-0 h-[600px] overflow-hidden pointer-events-none z-0">
        <div className="absolute -top-40 -right-40 w-[600px] h-[600px] bg-purple-600/10 dark:bg-purple-600/5 blur-[120px] rounded-full mix-blend-screen" />
        <div className="absolute top-20 -left-20 w-[500px] h-[500px] bg-indigo-500/10 dark:bg-indigo-500/5 blur-[120px] rounded-full mix-blend-screen" />
      </div>

      <div className="relative z-10 max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 xl:px-12 pt-24 pb-20 lg:pt-32 lg:pb-28">
        <div className="flex flex-col lg:flex-row gap-10 lg:gap-12 xl:gap-16 items-start">
          <div className="w-full lg:w-[60%] xl:w-[62%]">
            <div className="flex items-center gap-2 text-xs sm:text-sm font-semibold mb-6 uppercase tracking-wider">
              <span onClick={() => navigate('/services')} className="text-purple-500 hover:text-purple-600 cursor-pointer transition-colors">Services</span>
              <ChevronRight size={14} className={isDarkMode ? 'text-slate-600' : 'text-slate-400'} />
              <span className={isDarkMode ? 'text-slate-400' : 'text-slate-500'}>Combo Onboarding</span>
            </div>

            <h1 className={`text-4xl sm:text-5xl lg:text-6xl font-black tracking-tighter leading-[1.1] mb-6 ${isDarkMode ? 'text-white' : 'text-slate-900'}`}>
              Zomato & Swiggy Combo <br /><span className="text-transparent bg-clip-text bg-gradient-to-r from-purple-500 via-indigo-500 to-purple-800 drop-shadow-sm pb-2 inline-block text-[0.9em]">Restaurant Launch A–Z</span>
            </h1>

            <p className={`text-lg sm:text-xl font-medium leading-relaxed mb-8 max-w-2xl ${isDarkMode ? 'text-slate-400' : 'text-slate-600'}`}>
              One package to launch on India's biggest food delivery platforms. We handle the entire registration, menu photography, and platform listing for both Zomato and Swiggy.
            </p>

            <div className="w-full lg:hidden mb-12">
              {renderCheckoutCard(true)}
            </div>

            <div className="space-y-16 lg:space-y-20">
              <DocumentsRequired />
              <ComboWhatYouGet />

              {/* Our Process Section - "we follow a great process" */}
              <div className="pt-10 border-t border-slate-200/80 dark:border-slate-800/80">
                <div className="flex flex-col items-center sm:items-start mb-10 text-center sm:text-left">
                  <h3 className={`text-2xl sm:text-3xl font-black tracking-tight ${isDarkMode ? 'text-white' : 'text-slate-900'}`}>
                    We follow a great process
                  </h3>
                  <p className={`mt-3 font-medium text-sm sm:text-base ${isDarkMode ? 'text-slate-400' : 'text-slate-500'}`}>A scientific approach to getting you live and profitable on both platforms.</p>
                </div>

                <div className="grid grid-cols-1 md:grid-cols-3 gap-6 relative">
                  {/* Process Connectors (Desktop) */}
                  <div className="hidden md:block absolute top-12 left-0 w-full h-0.5 bg-gradient-to-r from-purple-500/0 via-purple-500/20 to-purple-500/0 z-0" />

                  {[
                    {
                      step: "01",
                      title: "Consultation",
                      desc: "We analyze your menu and site location to plan the perfect launch.",
                      icon: <Star className="text-purple-500" size={24} />
                    },
                    {
                      step: "02",
                      title: "Execution",
                      desc: "Our experts handle all documentation and menu setup on both Zomato & Swiggy.",
                      icon: <ShieldCheck className="text-indigo-500" size={24} />
                    },
                    {
                      step: "03",
                      title: "Launch",
                      desc: "Go live with optimized listings designed to rank higher and sell more.",
                      icon: <CheckCircle2 className="text-purple-600" size={24} />
                    }
                  ].map((item, idx) => (
                    <div key={idx} className={`relative z-10 p-8 rounded-[2rem] border transition-all duration-500 group overflow-hidden ${isDarkMode
                        ? 'bg-[#0f172a]/40 border-slate-800 hover:border-purple-500/30'
                        : 'bg-white border-slate-100 shadow-sm hover:shadow-xl hover:border-purple-100'
                      }`}>
                      <div className="absolute top-4 right-6 text-4xl font-black opacity-[0.03] group-hover:opacity-[0.08] transition-opacity uppercase italic">
                        Step {item.step}
                      </div>
                      <div className={`w-14 h-14 rounded-2xl flex items-center justify-center mb-6 transition-transform duration-500 group-hover:scale-110 ${isDarkMode ? 'bg-slate-800/80 border border-slate-700' : 'bg-purple-50 border border-purple-100'
                        }`}>
                        {item.icon}
                      </div>
                      <h4 className={`text-xl font-extrabold mb-3 ${isDarkMode ? 'text-white' : 'text-slate-900'}`}>{item.title}</h4>
                      <p className={`text-sm leading-relaxed font-medium ${isDarkMode ? 'text-slate-400' : 'text-slate-600'}`}>
                        {item.desc}
                      </p>
                    </div>
                  ))}
                </div>
              </div>
              <div className="pt-10 w-full border-t border-slate-200/80 dark:border-slate-800/80">
                <div className="grid grid-cols-1 sm:grid-cols-2 gap-6 w-full">
                  {[
                    { title: 'Faster Approval', desc: 'Our experts ensure 100% compliant documents for quick listing.', icon: <FaSmile className="text-purple-500" /> },
                    { title: 'Menu Psychology', desc: 'Boost sales with optimized menu categories and item descriptions.', icon: <FaDownload className="text-indigo-500" /> },
                    { title: 'Branding Suite', desc: 'Get professional logos and banners designed to attract customers.', icon: <FaTv className="text-purple-600" /> },
                  ].map((item, idx) => (
                    <div key={idx} className={`p-6 rounded-2xl border ${isDarkMode ? 'bg-slate-800/50 border-slate-700/50' : 'bg-white border-slate-200'}`}>
                      <div className="mb-4">{item.icon}</div>
                      <h4 className="font-bold text-lg mb-2">{item.title}</h4>
                      <p className="text-sm opacity-60">{item.desc}</p>
                    </div>
                  ))}
                </div>
              </div>
            </div>
          </div>

          <div className="hidden lg:block lg:w-[40%] xl:w-[38%] relative">
            <div className="sticky top-28 xl:top-32 flex flex-col gap-8">
              {renderCheckoutCard()}
              <ComboFAQ />
            </div>
          </div>
        </div>
      </div>
      <SiteFooter />

      {/* Floating Bottom Bar CTA for Mobile */}
      <div className={`fixed bottom-0 left-0 right-0 p-4 lg:hidden z-50 border-t backdrop-blur-xl transition-all duration-300 ${isDarkMode ? 'bg-[#0b101d]/90 border-slate-800' : 'bg-white/95 border-slate-200 shadow-[0_-4px_25px_-4px_rgba(0,0,0,0.1)]'
        }`}>
        <button
          onClick={handleCheckout}
          className="w-full bg-gradient-to-r from-purple-600 to-indigo-500 text-white py-3.5 rounded-xl text-sm font-bold shadow-lg shadow-indigo-500/25 active:scale-[0.98] transition-all flex items-center justify-center gap-2"
        >
          Launch Your Concept <span className="opacity-80 mx-1">•</span> ₹{finalPrice.toLocaleString()}
          <ChevronRight size={18} />
        </button>
      </div>
    </div>
  );
};

export default ComboCoursePage;
