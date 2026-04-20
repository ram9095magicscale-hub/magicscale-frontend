import React, { useState, useRef, useEffect } from 'react';
import { useNavigate } from 'react-router-dom';
import swiggyImg from '../../../assets/zomato_hero_art_generated.png';
import { FaTv, FaDownload, FaSatelliteDish, FaSmile } from 'react-icons/fa';
import { useTheme } from '../../../components/context/ThemeContext';
import SwiggyFAQ from './SwiggyFAQ';
import SwiggyWhatYouGet from './SwiggyWhatYouGet';
import DocumentsRequired from './DocumentsRequired';
import SiteFooter from '../FssaiCoursePage/SiteFooter';
import { CheckCircle2, ChevronRight, Star, ShieldCheck } from 'lucide-react';

const SwiggyOnboardingCourse = () => {
  const navigate = useNavigate();
  const { isDarkMode } = useTheme();

  const plans = {
    planA: {
      name: 'Swiggy Onboarding',
      price: 1999,
      slug: 'swiggy-basic',
      description: 'Quick and essential setup to get your restaurant live on Swiggy.',
      features: [
        'Restaurant partner account setup',
        'Basic menu creation & upload',
        'Initial listing support',
      ],
    },
    planB: {
      name: 'Combo Launch Package',
      price: 3499,
      slug: 'swiggy-pro',
      description: 'Zomato & Swiggy Restaurant Account Setup & Basic Optimization.',
        features: [
        'Swiggy + Zomato account setup',
        'Professional Menu Setup & Optimization',
        'Initial Menu Item Upload (up to 50 items)',
        'Basic Branding & Profile Configuration',
      ],
    },
  };

  const notices = [
    { text: "Swiggy One integration updates: New benefits for partner restaurants.", date: "2026-03-22", link: "https://partner.swiggy.com/login" },
    { text: "Menu image guidelines strictly enforced for higher visibility.", date: "2026-03-19", link: "https://partner.swiggy.com/login" },
    { text: "Instamart cross-promotional opportunities now available for select vendors.", date: "2026-03-10", link: "https://partner.swiggy.com/login" }
  ];



  const [selectedPlan, setSelectedPlan] = useState('planA'); // Default to the first plan (Onboarding)
  const currentPlan = plans[selectedPlan];
  const [finalPrice, setFinalPrice] = useState(currentPlan.price);

  const mainContentRef = useRef(null);
  const checkoutRef = useRef(null);

  useEffect(() => {
    window.scrollTo({ top: 0, behavior: 'smooth' });
  }, []);

  useEffect(() => {
    setFinalPrice(Math.max(0, Math.round(currentPlan.price)));
  }, [selectedPlan, currentPlan.price]);



  const handleCheckout = () => {
    const featuresString = currentPlan.features.join(',');
    navigate(`/checkout/${currentPlan.slug}?finalPrice=${finalPrice}&basePrice=${currentPlan.price}&planName=${encodeURIComponent(currentPlan.name)}&planFeatures=${encodeURIComponent(featuresString)}`);
  };


  // Live Updates Notice Board
  const renderLiveNotice = (isMobile = false) => (
    <div className={`mt-6 rounded-2xl shadow-[0_4px_20px_-4px_rgba(252,128,25,0.25)] overflow-hidden transition-all duration-300 w-full ${isMobile ? 'max-w-sm mx-auto' : ''
      } ${isDarkMode ? 'bg-[#fc8019] border border-[#fc8019]/20' : 'bg-[#fc8019]'
      }`}>
      <div className="px-6 pt-6 pb-2 flex items-center gap-3">
        <span className="relative flex h-2.5 w-2.5">
          <span className="animate-ping absolute inline-flex h-full w-full rounded-full bg-white opacity-75"></span>
          <span className="relative inline-flex rounded-full h-2.5 w-2.5 bg-white"></span>
        </span>
        <h3 className="text-[22px] font-medium text-white tracking-wide leading-none">
          Live Updates
        </h3>
      </div>
      <div className="px-6 pb-7 pt-2 text-white space-y-4">
        {notices.map((notice, idx) => (
          <a
            key={idx}
            href={notice.link}
            target="_blank"
            rel="noopener noreferrer"
            className="text-[14px] leading-relaxed opacity-95 cursor-pointer hover:opacity-100 transition-opacity group flex flex-col sm:flex-row sm:items-center gap-1 sm:gap-0 block"
          >
            <span className="font-medium group-hover:underline">{notice.text}</span>
            <span className="hidden sm:inline mx-1.5 opacity-60">|</span>
            <span className="opacity-90 whitespace-nowrap text-xs sm:text-[14px]">{notice.date}</span>
          </a>
        ))}
      </div>
    </div>
  );

  // Compact, highly polished checkout card
  const renderCheckoutCard = (isMobile = false) => (
    <div
      ref={isMobile ? null : checkoutRef}
      className={`relative rounded-[2.5rem] ${isMobile ? 'mx-auto border-t-0 rounded-t-none w-full max-w-sm' : 'border w-full'
        } shadow-2xl overflow-hidden backdrop-blur-2xl transition-all duration-500 group ${isDarkMode
          ? 'bg-slate-900/80 border-slate-800/50 shadow-orange-900/10'
          : 'bg-white/90 border-white shadow-slate-200/60'
        }`}
    >
      {/* Subtle top glow line */}
      <div className="absolute top-0 left-0 right-0 h-1.5 bg-gradient-to-r from-orange-400 via-orange-600 to-amber-600 z-30" />

      {/* Condensed Image Header - Slimmer for better fit */}
      <div className="relative h-40 overflow-hidden">
        <div className="absolute inset-0 bg-gradient-to-t from-slate-900/90 via-slate-900/10 to-transparent z-10" />
        <img
          src={swiggyImg}
          alt="Swiggy setup"
          className="w-full h-full object-cover transition-transform duration-1000 group-hover:scale-110 opacity-90 sepia-[.2] hue-rotate-[-30deg]"
        />
        <div className="absolute bottom-5 left-6 z-20">
          <div className="inline-flex items-center gap-2 px-4 py-1.5 rounded-2xl bg-white/10 backdrop-blur-xl border border-white/20 text-white text-[11px] font-black uppercase tracking-widest shadow-sm">
            <Star size={12} className="text-yellow-400 fill-yellow-400" />
            Official Swiggy Partner
          </div>
        </div>
      </div>

      <div className="p-8">
        {/* Dynamic Pricing Inside the Box Details */}
        <div className="mb-6">
          <div className="flex flex-col">
             <span className={`text-[11px] font-black uppercase tracking-[0.2em] mb-2 ${isDarkMode ? 'text-slate-500' : 'text-slate-400'}`}>Total Payable</span>
             <div className="flex items-baseline gap-2">
               <h2 className={`text-5xl font-black tracking-tighter ${isDarkMode ? 'text-white' : 'text-slate-900'}`} id="plans">
                 ₹{finalPrice.toLocaleString()}
               </h2>
               <span className={`text-sm font-bold ${isDarkMode ? 'text-slate-500' : 'text-slate-400'}`}>/ one-time</span>
             </div>
          </div>
          <p className={`text-[14px] mt-4 ${isDarkMode ? 'text-slate-400' : 'text-slate-600'} leading-relaxed font-semibold`}>
            {currentPlan.description}
          </p>
        </div>

        {/* Plan Selector Bar - Compact */}
        <div className={`p-1.5 rounded-2xl mb-8 flex gap-1 ${isDarkMode ? 'bg-slate-800/80 border border-slate-700/50' : 'bg-slate-100/80 border border-slate-200/50'}`}>
          {Object.keys(plans).map((key) => (
            <button
              key={key}
              onClick={() => setSelectedPlan(key)}
              className={`flex-1 py-3 px-2 text-center text-[10px] sm:text-[11px] font-black rounded-xl transition-all duration-300 uppercase tracking-widest
              ${selectedPlan === key
                  ? 'bg-white dark:bg-slate-700 text-orange-600 dark:text-orange-400 shadow-sm transform scale-[1.02] border border-orange-100 dark:border-orange-900/30'
                  : `${isDarkMode ? 'text-slate-500 hover:text-slate-300' : 'text-slate-500 hover:text-slate-900'}`
                }`}
            >
              {plans[key].name === 'Swiggy Onboarding' ? 'Basic' : 'Combo'}
            </button>
          ))}
        </div>

        <div className={`mb-8 p-6 rounded-3xl ${isDarkMode ? 'bg-slate-800/30 border border-slate-700/30' : 'bg-slate-50 border border-slate-100'}`}>
           <h4 className={`text-[11px] font-black uppercase tracking-widest mb-4 ${isDarkMode ? 'text-slate-500' : 'text-slate-400'}`}>Plan Highlights</h4>
           <ul className="space-y-4">
            {currentPlan.features.map((feature, idx) => (
              <li key={idx} className="flex items-start gap-3 group/item">
                <div className="mt-1 p-0.5 rounded-full bg-orange-500/10">
                  <CheckCircle2 size={14} className="text-orange-500 shrink-0" />
                </div>
                <span className={`text-sm font-bold leading-snug group-hover/item:translate-x-1 transition-transform ${isDarkMode ? 'text-slate-300' : 'text-slate-700'}`}>{feature}</span>
              </li>
            ))}
          </ul>
        </div>

        <button
          onClick={handleCheckout}
          className="w-full flex items-center justify-center gap-3 bg-gradient-to-r from-orange-500 to-amber-600 text-white py-5 rounded-[1.25rem] text-lg font-black shadow-2xl shadow-orange-500/30 hover:shadow-orange-500/50 hover:scale-[1.02] active:scale-[0.98] transition-all duration-300"
        >
          Book Your Launch
          <ChevronRight size={20} />
        </button>

        <div className="mt-6 flex items-center justify-center gap-2 py-2 border-t border-slate-100 dark:border-slate-800/50">
          <ShieldCheck size={16} className="text-emerald-500" />
          <p className={`text-[10px] font-black tracking-widest uppercase ${isDarkMode ? 'text-slate-500' : 'text-slate-400'}`}>
            Secure SSL Checkout · Money Back
          </p>
        </div>
      </div>
    </div>
  );

  return (
    <div className={`min-h-screen font-[Poppins] selection:bg-orange-500/30 overflow-x-hidden ${isDarkMode ? 'bg-[#04070d] text-slate-200' : 'bg-[#fcfdfd] text-slate-800'
      }`}>

      {/* Decorative Swiggy-Themed Background Elements - More Polished */}
      <div className="absolute top-0 inset-x-0 h-[600px] overflow-hidden pointer-events-none z-0">
        <div className="absolute -top-40 -right-40 w-[600px] h-[600px] bg-orange-600/10 dark:bg-orange-600/5 blur-[120px] rounded-full mix-blend-screen" />
        <div className="absolute top-20 -left-20 w-[500px] h-[500px] bg-amber-500/10 dark:bg-amber-500/5 blur-[120px] rounded-full mix-blend-screen" />
        <div className="absolute bottom-0 inset-x-0 h-40 bg-gradient-to-t from-[#04070d] dark:from-[#04070d] to-transparent dark:block hidden" />
        <div className="absolute bottom-0 inset-x-0 h-40 bg-gradient-to-t from-[#fcfdfd] to-transparent block dark:hidden" />
      </div>

      <div className="relative z-10 max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 xl:px-12 pt-24 pb-20 lg:pt-32 lg:pb-28">

        {/* Adjusted spacing and layout for ultra polished feel */}
        <div ref={mainContentRef} className="flex flex-col lg:flex-row gap-10 lg:gap-12 xl:gap-16 items-start">

          {/* Left Section - Main Content */}
          <div className="w-full lg:w-[60%] xl:w-[62%]">

            {/* Breadcrumb Navigation - fixed to correctly navigate to /services */}
            <div className="flex items-center gap-2 text-xs sm:text-sm font-semibold mb-6 uppercase tracking-wider">
              <span onClick={() => navigate('/services')} className="text-orange-500 hover:text-orange-600 cursor-pointer transition-colors">Services</span>
              <ChevronRight size={14} className={isDarkMode ? 'text-slate-600' : 'text-slate-400'} />
              <span className={isDarkMode ? 'text-slate-400' : 'text-slate-500'}>Swiggy Onboarding</span>
            </div>

            <h1 className={`text-4xl sm:text-5xl lg:text-6xl font-black tracking-tighter leading-[1.1] mb-6 ${isDarkMode ? 'text-white' : 'text-slate-900'
              }`}>
              Swiggy Onboarding & <br /><span className="text-transparent bg-clip-text bg-gradient-to-r from-orange-500 via-amber-500 to-yellow-500 drop-shadow-sm pb-2 inline-block">Restaurant Launch A–Z</span>
            </h1>

            <p className={`text-lg sm:text-xl font-medium leading-relaxed mb-8 max-w-2xl ${isDarkMode ? 'text-slate-400' : 'text-slate-600'}`}>
              The perfect onboarding blueprint for cloud kitchens, cafés, and modern food businesses. We handle registration, professional menu setup, and optimization all in one place.
            </p>

            {/* Highlight Bar - Extra Polished */}
            <div className={`rounded-2xl p-5 sm:p-6 mb-12 flex flex-col sm:flex-row items-start sm:items-center justify-between gap-6 border backdrop-blur-md transition-shadow hover:shadow-lg ${isDarkMode
              ? 'bg-[#0f172a]/70 border-slate-700/50 hover:shadow-orange-900/5'
              : 'bg-white border-slate-200/80 hover:border-orange-100 shadow-[0_4px_20px_-4px_rgba(0,0,0,0.05)]'
              }`}>
              <div className="flex items-start gap-4">
                <div className="bg-gradient-to-br from-orange-500 to-amber-500 text-white text-[10px] sm:text-xs font-black px-3 py-1.5 rounded border border-orange-400/20 shadow-sm uppercase tracking-widest mt-1 sm:mt-0">
                  Premium
                </div>
                <div>
                  <p className={`text-sm sm:text-base font-semibold leading-relaxed ${isDarkMode ? 'text-slate-200' : 'text-slate-800'}`}>
                    Fast-track Swiggy approval with guaranteed expert review.
                    <button onClick={() => document.getElementById('plans')?.scrollIntoView({ behavior: 'smooth' })} className="ml-2 text-orange-500 font-bold hover:text-orange-600 transition-colors inline-flex items-center mt-1 sm:mt-0">
                      View Plans <ChevronRight size={14} className="ml-0.5" />
                    </button>
                  </p>
                </div>
              </div>
              <div className="flex items-center gap-6 shrink-0 border-t sm:border-t-0 sm:border-l pt-4 sm:pt-0 sm:pl-6 w-full sm:w-auto border-slate-200 dark:border-slate-700">
                <div className="flex flex-col">
                  <div className="flex items-center gap-1.5">
                    <span className={`text-xl font-black ${isDarkMode ? 'text-white' : 'text-slate-900'}`}>4.8</span>
                    <Star size={16} className="text-yellow-400 fill-yellow-400" />
                  </div>
                  <span className={`text-[10px] font-bold uppercase tracking-widest ${isDarkMode ? 'text-slate-500' : 'text-slate-400'}`}>152 reviews</span>
                </div>
                <div className="flex flex-col">
                  <span className={`text-xl font-black ${isDarkMode ? 'text-white' : 'text-slate-900'}`}>230+</span>
                  <span className={`text-[10px] font-bold uppercase tracking-widest ${isDarkMode ? 'text-slate-500' : 'text-slate-400'}`}>Onboarded</span>
                </div>
              </div>
            </div>

            {/* Mobile Checkout Card & Notice Placement */}
            <div className="w-full lg:hidden mb-12">
              {renderCheckoutCard(true)}
              {renderLiveNotice(true)}
            </div>

            {/* Main Content Details */}
            <div className="space-y-16 lg:space-y-20">

              <DocumentsRequired />

              <SwiggyWhatYouGet />

              {/* Reasons Grid */}
              <div className="pt-10 w-full border-t border-slate-200/80 dark:border-slate-800/80">
                <div className="flex flex-col items-center sm:items-start mb-10 text-center sm:text-left">
                  <h3 className={`text-2xl sm:text-3xl font-black tracking-tight ${isDarkMode ? 'text-white' : 'text-slate-900'}`}>
                    More reasons to onboard
                  </h3>
                  <p className={`mt-3 font-medium text-sm sm:text-base ${isDarkMode ? 'text-slate-400' : 'text-slate-500'}`}>Why partnering with MagicScale is the right choice for Swiggy.</p>
                </div>

                <div className="grid grid-cols-1 sm:grid-cols-2 gap-6 w-full">
                  {[
                    {
                      icon: <FaTv className="text-orange-500 text-xl" />,
                      title: 'Live Dashboard',
                      desc: 'Track orders, payments, and delivery status directly.',
                      color: 'bg-orange-500/10'
                    },
                    {
                      icon: <FaDownload className="text-amber-500 text-xl" />,
                      title: 'Menu Downloads',
                      desc: 'Enable downloadable menus for WhatsApp sharing.',
                      color: 'bg-amber-500/10'
                    },
                    {
                      icon: <FaSatelliteDish className="text-yellow-500 text-xl" />,
                      title: 'Nationwide Reach',
                      desc: 'Assistance across metros, tier 2 cities, and remote areas.',
                      color: 'bg-yellow-500/10'
                    },
                    {
                      icon: <FaSmile className="text-orange-400 text-xl" />,
                      title: 'Multi-Outlet Support',
                      desc: 'Seamlessly onboard multiple branches or kitchens.',
                      color: 'bg-orange-400/10'
                    },
                  ].map((item, idx) => (
                    <div
                      key={idx}
                      className={`group rounded-2xl p-6 sm:p-8 border transition-all duration-500 hover:-translate-y-1.5 hover:shadow-xl w-full ${isDarkMode
                        ? 'bg-[#0f172a]/40 border-slate-700/50 hover:bg-[#0f172a]/80 hover:border-orange-500/30 hover:shadow-orange-900/10'
                        : 'bg-white border-slate-200/80 hover:shadow-slate-200/80 hover:border-orange-200'
                        }`}
                    >
                      <div className={`w-12 h-12 rounded-2xl ${item.color} flex items-center justify-center mb-6 transition-transform duration-500 group-hover:scale-110 shadow-sm`}>
                        {item.icon}
                      </div>
                      <h4 className={`text-lg font-bold mb-2.5 tracking-wide ${isDarkMode ? 'text-white' : 'text-slate-900'}`}>{item.title}</h4>
                      <p className={`text-sm font-medium leading-relaxed ${isDarkMode ? 'text-slate-400' : 'text-slate-600'}`}>{item.desc}</p>
                    </div>
                  ))}
                </div>
              </div>

              <div className="pt-10 lg:hidden">
                <SwiggyFAQ />
              </div>

            </div>
          </div>

          {/* Right: Sticky Checkout Bar (Desktop Only) */}
          <div className="hidden lg:block lg:w-[40%] xl:w-[38%] relative">
            {/* The sticky container */}
            <div className="sticky top-28 xl:top-32 transition-transform duration-700 ease-out flex flex-col justify-start">
              {renderCheckoutCard()}
              {renderLiveNotice()}
              <div className="mt-8 w-full">
                <SwiggyFAQ />
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
          className="w-full bg-gradient-to-r from-orange-600 to-amber-600 text-white py-3.5 rounded-xl text-sm font-bold shadow-lg shadow-orange-500/25 active:scale-[0.98] transition-all flex items-center justify-center gap-2"
        >
          Get Started Now <span className="opacity-80 mx-1">•</span> ₹{finalPrice.toLocaleString()}
          <ChevronRight size={18} />
        </button>
      </div>
    </div>
  </div>
);
};

export default SwiggyOnboardingCourse;