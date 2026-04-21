import React, { useState, useRef, useEffect } from 'react';
import { useNavigate } from 'react-router-dom';
import bannerImg from '../../../assets/Banner2.png';
import { FaChartLine, FaDownload, FaSatelliteDish, FaSmile, FaCheckCircle, FaWhatsapp, FaArrowUp, FaChartPie, FaMobileAlt, FaLaptopCode, FaRocket } from 'react-icons/fa';
import { useTheme } from '../../../components/context/ThemeContext';
import SiteFooter from '../FssaiCoursePage/SiteFooter';
import { CheckCircle2, ChevronRight, Star, ShieldCheck, ChevronDown, ChevronUp, X } from 'lucide-react';
import { motion, AnimatePresence } from 'framer-motion';

const plansList = [
  { 
    slug: 'basic-growth', 
    label: 'Basic Growth', 
    price: 8499, 
    features: ['Dedicated Account Manager', 'Menu & Profile Optimization', 'SEO Friendly Content', 'Weekly & Monthly Reports', 'Discount & Competitor Strategy'], 
    description: 'Perfect for getting started. Supercharge your restaurant\'s visibility on Zomato & Swiggy.' 
  },
  { 
    slug: 'premium-growth', 
    label: 'Premium Growth', 
    price: 11999, 
    features: ['Everything in Basic Growth', 'Zomato Ad Campaign Management', 'Fast Priority Support', 'Weekly Consultant Calls', 'Personalized Growth Strategies', 'Daily Progress Monitoring'], 
    description: 'Everything you need to dominate the market. Aggressive scaling and promotion management.' 
  },
];



const notices = [
  { text: "Q3 Marketing trends point to a 40% increase in short-form video engagement for food brands.", date: "Just Now", link: "/blogs" },
  { text: "Swiggy and Zomato algorithms updated: Menu optimization now drastically affects search ranking.", date: "Yesterday", link: "/blogs" },
  { text: "New case study published: How Cloud Kitchen 'SpiceBox' doubled their ROI in 30 days.", date: "Last Week", link: "/blogs" },
  { text: "Reminder: Festive season approaches. Plan your promotional ad budget early to reduce CPC.", date: "Last Week", link: "/blogs" }
];

const planFeatures = [
  "Menu Score Update",
  "Dedicated Account Manager",
  "Customer Review Management",
  "Priority Support",
  "Detail Weekly Report",
  "Details Monthly Report",
  "Discount Strategy",
  "Competitor Analysis",
  "SEO Friendly Content",
  "Response To Review",
  "Menu Optimization",
  "Profile Enhancement",
  "Weekly Consultant Calls",
  "Marketing insights",
  "Boosted Promotions",
  "Zomato Ad Campaign Management",
  "Festival Specific Promotions",
  "Custom Campaign Ideas",
  "Weekly Menu Insights",
  "Target Audience Analysis",
  "Analytics and Insights Dashboards",
  "Personalized Growth Strategies",
  "Daily Monitoring of Progress",
];

const basicPlanFlags = [
  true, true, true, "Standard", true, true, true, true, true, false, true, false,
  true, false, false, false, false, false, true, true, false, true, false
];

const premiumPlanFlags = [
  true, true, true, "Fast", true, true, true, true, true, true, true, true,
  true, true, true, true, true, true, true, true, true, true, true
];

const faqData = [
  { q: "What exactly is included in the Growth Plans?", a: "Our plans cover end-to-end digital marketing, SEO, platform algorithm optimization (Swiggy/Zomato), and performance consulting tailored exactly to your food business." },
  { q: "How long until I see a return on investment (ROI)?", a: "While local SEO and organic growth take 2-3 months to compound, our targeted paid ad strategies and menu optimizations usually show measurable revenue increases within the first 14-21 days." },
  { q: "Do you handle the actual ad spend budget?", a: "No, the package prices cover our management, strategy, and creative fees. Your actual ad spend (on Facebook, Google, or food aggregators) is billed directly to your own cards to ensure full transparency." },
  { q: "Can I upgrade from Basic to Premium later?", a: "Absolutely! Many of our partners start with Basic to establish their baseline and upgrade to Premium when they are ready to scale their operations or open new outlets." },
];

const GrowthCoursePage = () => {
  const navigate = useNavigate();
  const { isDarkMode } = useTheme();

  const [selectedPlan, setSelectedPlan] = useState(plansList[0]);
  const [finalPrice, setFinalPrice] = useState(selectedPlan.price);
  
  // Noticeboard animation
  const [isNoticePaused, setIsNoticePaused] = useState(false);
  
  // FAQ toggles
  const [expandedFaqIndex, setExpandedFaqIndex] = useState(null);
  
  // Features toggle
  const [expandedFeatures, setExpandedFeatures] = useState(false);

  const mainContentRef = useRef(null);
  const checkoutRef = useRef(null);

  useEffect(() => {
    window.scrollTo({ top: 0, behavior: 'smooth' });
  }, []);

  useEffect(() => {
    setFinalPrice(Math.max(0, Math.round(selectedPlan.price)));
  }, [selectedPlan]);



  const handleCheckout = () => {
    const featuresString = selectedPlan.features.join(',');
    // Default to 1 month for growth plans as requested
    navigate(`/checkout/${selectedPlan.slug}?months=1&finalPrice=${finalPrice}&basePrice=${selectedPlan.price}&planName=${encodeURIComponent(selectedPlan.label)}&planFeatures=${encodeURIComponent(featuresString)}`);
  };



  const renderLiveNotice = (isMobile = false) => (
    <div className={`mt-6 rounded-2xl shadow-[0_4px_20px_-4px_rgba(16,185,129,0.25)] overflow-hidden transition-all duration-300 w-full ${isMobile ? 'max-w-sm mx-auto' : ''
      } ${isDarkMode ? 'bg-[#0f2922] border border-fuchsia-500/20' : 'bg-fuchsia-600'
      }`}
      onMouseEnter={() => setIsNoticePaused(true)}
      onMouseLeave={() => setIsNoticePaused(false)}
    >
      <div className="px-6 pt-6 pb-4 flex items-center justify-between relative shadow-[0_4px_10px_rgba(0,0,0,0.1)] z-20">
        <div className="flex items-center gap-3">
          <span className="relative flex h-2.5 w-2.5">
            <span className="animate-ping absolute inline-flex h-full w-full rounded-full bg-white opacity-75"></span>
            <span className="relative inline-flex rounded-full h-2.5 w-2.5 bg-white"></span>
          </span>
          <h3 className="text-[20px] font-bold text-white tracking-wide leading-none">
            Growth Insights
          </h3>
        </div>
      </div>
      <div className="px-6 pb-7 pt-4 text-white relative h-48 overflow-hidden z-10">
        <style>
          {`
            @keyframes scrollVerticalGrowth {
              0% { transform: translateY(0); }
              100% { transform: translateY(-50%); }
            }
          `}
        </style>
        <div 
          className="flex flex-col gap-4 absolute w-full pr-10"
          style={{
            animation: 'scrollVerticalGrowth 25s linear infinite',
            animationPlayState: isNoticePaused ? 'paused' : 'running'
          }}
        >
          {[...notices, ...notices].map((notice, idx) => (
            <div
              key={idx}
              className="text-[13px] leading-relaxed opacity-95 transition-all hover:bg-white/10 p-2.5 -mx-2.5 rounded-lg flex flex-col gap-1 border-b border-fuchsia-400/30 shadow-sm cursor-default"
            >
              <span className="font-semibold text-white/95 hover:text-white line-clamp-2">{notice.text}</span>
              <span className="opacity-70 text-[10px] font-bold tracking-wider uppercase mt-1 text-fuchsia-100">{notice.date}</span>
            </div>
          ))}
        </div>
      </div>
    </div>
  );

  const renderExpertAssistance = () => (
    <div className={`mt-5 rounded-xl border p-5 transition-all duration-300 shadow-sm ${
      isDarkMode ? 'bg-[#0f172a]/80 border-slate-700/50 hover:bg-[#1e293b]/70' : 'bg-slate-50 border-slate-200/80 hover:bg-slate-100'
    }`}>
       <div className="flex items-center justify-between mb-4">
          <h4 className={`text-[10px] font-bold tracking-widest uppercase flex items-center gap-2 ${isDarkMode ? 'text-slate-400' : 'text-slate-500'}`}>
            <FaCheckCircle className="text-fuchsia-500 text-xs" />
            Dedicated Strategist
          </h4>
          <span className="flex h-2 w-2 relative">
             <span className="animate-ping absolute inline-flex h-full w-full rounded-full bg-fuchsia-400 opacity-75"></span>
             <span className="relative inline-flex rounded-full h-2 w-2 bg-fuchsia-500"></span>
          </span>
       </div>
       <div className="flex items-center gap-3 border-b pb-4 border-slate-200 dark:border-slate-700/50">
          <img src="https://i.pravatar.cc/150?img=33" alt="Expert" className="w-10 h-10 rounded-full border border-fuchsia-500 p-0.5 object-cover shrink-0 shadow-sm" />
          <div className="flex-1 min-w-0">
            <p className={`text-[12px] font-black leading-tight truncate ${isDarkMode ? 'text-white' : 'text-slate-800'}`}>Rahul Verma</p>
            <p className={`text-[9.5px] font-medium leading-none mt-1 truncate ${isDarkMode ? 'text-slate-400' : 'text-slate-500'}`}>Lead Growth Consultant</p>
          </div>
       </div>
       <a href="https://wa.me/911234567890" target="_blank" rel="noopener noreferrer" className={`mt-3 w-full flex items-center justify-center gap-2 py-2 rounded-lg text-[11px] font-bold transition-all border ${
         isDarkMode ? 'bg-slate-800/50 border-slate-700 text-slate-300 hover:text-white hover:border-fuchsia-500 hover:bg-fuchsia-500/10' : 'bg-white border-slate-200 text-slate-700 hover:text-fuchsia-600 hover:border-fuchsia-500 hover:bg-fuchsia-50'
       }`}>
         <FaWhatsapp className="text-fuchsia-500 text-sm" /> Speak with Rahul
       </a>
    </div>
  );

  const renderCheckoutCard = (isMobile = false) => (
    <div
      ref={isMobile ? null : checkoutRef}
      className={`relative rounded-2xl ${isMobile ? 'mx-auto border-t-0 rounded-t-none w-full max-w-sm' : 'border w-full'} shadow-2xl overflow-hidden backdrop-blur-md transition-all duration-300 ${
        isDarkMode
          ? 'bg-[#0f172a]/85 border-slate-700/50 shadow-fuchsia-900/10 hover:shadow-fuchsia-900/20'
          : 'bg-white/95 border-slate-200 shadow-slate-200/50 hover:shadow-slate-200/80'
      }`}
    >
      <div className="absolute top-0 left-0 right-0 h-1 bg-gradient-to-r from-fuchsia-400 via-purple-500 to-cyan-500 z-30" />

      <div className={`relative h-28 sm:h-36 overflow-hidden flex items-center justify-center p-6 border-b ${isDarkMode ? 'bg-[#0f2922] border-slate-700/50' : 'bg-fuchsia-50/50 border-slate-200/50'}`}>
        <div className="absolute inset-0 bg-gradient-to-t from-black/60 to-transparent z-10" />
        <img
          src={bannerImg}
          alt="Growth Strategy"
          className="w-full h-full object-cover group-hover:scale-105 transition-transform duration-700 opacity-90 absolute inset-0"
        />
        <div className="relative z-20 text-center">
            <FaChartLine className="text-white text-4xl mx-auto drop-shadow-md mb-2" />
            <h3 className="text-white font-black tracking-widest uppercase text-sm drop-shadow-md">Scale Your Brand</h3>
        </div>
        <div className="absolute top-3 left-4 z-20">
          <div className={`inline-flex items-center gap-1.5 px-2.5 py-1 rounded-full text-[9px] font-bold uppercase tracking-wider shadow-sm border ${isDarkMode ? 'bg-fuchsia-500/20 border-fuchsia-500/40 text-fuchsia-300' : 'bg-fuchsia-500/90 border-fuchsia-400 text-white shadow-fuchsia-500/20'}`}>
            <Star size={11} className={isDarkMode ? 'text-fuchsia-400 fill-fuchsia-400' : 'text-white fill-white'} />
            Top Rated Service
          </div>
        </div>
      </div>

      <div className="p-4 sm:p-5">
        <div className="mb-3">
          <div className="flex items-baseline gap-2">
            <h2 className={`text-2xl sm:text-3xl font-black tracking-tight ${isDarkMode ? 'text-white' : 'text-slate-900'}`}>
              ₹{finalPrice.toLocaleString()} <span className="text-[12px] font-medium text-slate-500 tracking-normal uppercase">/ month</span>
            </h2>

          </div>
          <p className={`text-xs mt-1 ${isDarkMode ? 'text-slate-300' : 'text-slate-600'} leading-relaxed font-medium line-clamp-2`}>
            {selectedPlan.description}
          </p>
        </div>

        <div className="flex flex-col gap-3 mb-4 mt-4">
           <div className="flex-1">
              <label className={`text-[9px] font-bold uppercase tracking-widest block mb-1.5 ${isDarkMode ? 'text-slate-400' : 'text-slate-500'}`}>Select Growth Plan</label>
              <div className={`p-1 rounded-xl flex gap-1 ${isDarkMode ? 'bg-slate-900/50 border border-slate-700/50 shadow-inner' : 'bg-slate-100 border border-slate-200/50 shadow-inner'}`}>
                {plansList.map((p) => (
                  <button
                    key={p.slug}
                    onClick={() => {
                      setSelectedPlan(p);
                    }}
                    className={`flex-1 py-2 px-1 text-center text-[10px] sm:text-xs font-bold rounded-lg transition-all duration-300 uppercase tracking-wide
                    ${selectedPlan.slug === p.slug
                        ? 'bg-gradient-to-r from-fuchsia-500 to-purple-600 text-white shadow-md transform scale-[1.02]'
                        : `${isDarkMode ? 'text-slate-400 hover:text-slate-200 hover:bg-slate-800' : 'text-slate-600 hover:text-slate-900 hover:bg-white/60'}`
                      }`}
                  >
                    {p.label}
                  </button>
                ))}
              </div>
           </div>

        </div>

        <ul className="space-y-2 mb-4">
          {selectedPlan.features.map((feature, idx) => (
            <li key={idx} className="flex items-start gap-2">
              <CheckCircle2 size={14} className="text-fuchsia-500 shrink-0 mt-0.5" />
              <span className={`text-xs font-medium leading-tight ${isDarkMode ? 'text-slate-200' : 'text-slate-700'}`}>{feature}</span>
            </li>
          ))}
        </ul>

        <button
          onClick={handleCheckout}
          className="w-full flex items-center justify-center gap-1.5 bg-gradient-to-r from-fuchsia-500 to-purple-600 text-white py-2 sm:py-2.5 rounded-lg text-[13px] font-bold shadow-md shadow-fuchsia-500/25 hover:shadow-fuchsia-500/40 hover:-translate-y-0.5 active:scale-[0.98] transition-all duration-300"
        >
          Start Scaling Now
          <ChevronRight size={14} />
        </button>


      </div>
    </div>
  );

  return (
    <div className={`min-h-screen font-[Poppins] selection:bg-fuchsia-500/30 overflow-x-clip ${isDarkMode ? 'bg-[#04070d] text-slate-200' : 'bg-[#fcfdfd] text-slate-800'
      }`}>

      {/* Decorative Emerald Background Elements */}
      <div className="absolute top-0 inset-x-0 h-[600px] overflow-hidden pointer-events-none z-0">
        <div className="absolute -top-40 -right-40 w-[600px] h-[600px] bg-fuchsia-600/10 dark:bg-fuchsia-600/5 blur-[120px] rounded-full mix-blend-screen" />
        <div className="absolute top-20 -left-20 w-[500px] h-[500px] bg-purple-500/10 dark:bg-purple-500/5 blur-[120px] rounded-full mix-blend-screen" />
        <div className="absolute bottom-0 inset-x-0 h-40 bg-gradient-to-t from-[#04070d] dark:from-[#04070d] to-transparent dark:block hidden" />
        <div className="absolute bottom-0 inset-x-0 h-40 bg-gradient-to-t from-[#fcfdfd] to-transparent block dark:hidden" />
      </div>

      <div className="relative z-10 max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 xl:px-12 pt-24 pb-20 lg:pt-32 lg:pb-28">

        <div ref={mainContentRef} className="flex flex-col lg:flex-row gap-10 lg:gap-12 xl:gap-16 items-start">

          {/* Left Section - Main Content */}
          <div className="w-full lg:w-[60%] xl:w-[62%]">

            <div className="flex items-center gap-2 text-xs sm:text-sm font-semibold mb-6 uppercase tracking-wider">
              <span onClick={() => navigate('/services')} className="text-fuchsia-500 hover:text-fuchsia-600 cursor-pointer transition-colors">Services</span>
              <ChevronRight size={14} className={isDarkMode ? 'text-slate-600' : 'text-slate-400'} />
              <span className={isDarkMode ? 'text-slate-400' : 'text-slate-500'}>Growth Plans</span>
            </div>

            <h1 className={`text-4xl sm:text-5xl lg:text-6xl font-black tracking-tighter leading-[1.1] mb-6 ${isDarkMode ? 'text-white' : 'text-slate-900'
              }`}>
              Scale Your Kitchen with <br /><span className="text-transparent bg-clip-text bg-gradient-to-r from-fuchsia-500 via-purple-500 to-cyan-500 drop-shadow-sm pb-2 inline-block">Data-Driven Growth</span>
            </h1>

            <p className={`text-lg sm:text-xl font-medium leading-relaxed mb-8 max-w-2xl ${isDarkMode ? 'text-slate-400' : 'text-slate-600'}`}>
              Beyond basic onboarding, we deploy advanced SEO, high-converting social campaigns, and algorithm optimizations across aggregators to multiply your monthly revenue.
            </p>

            <div className={`rounded-2xl p-5 sm:p-6 mb-12 flex flex-col sm:flex-row items-start sm:items-center justify-between gap-6 border backdrop-blur-md transition-shadow hover:shadow-lg ${isDarkMode
                ? 'bg-[#0f172a]/70 border-slate-700/50 hover:shadow-fuchsia-900/5'
                : 'bg-white border-slate-200/80 hover:border-fuchsia-100 shadow-[0_4px_20px_-4px_rgba(0,0,0,0.05)]'
              }`}>
               <div className="flex items-start gap-4">
                  <div className="bg-gradient-to-br from-fuchsia-500 to-purple-600 text-white text-[10px] sm:text-xs font-black px-3 py-1.5 rounded border border-fuchsia-400/20 shadow-sm uppercase tracking-widest mt-1 sm:mt-0">
                    Proven
                  </div>
                  <div>
                    <h4 className={`text-base font-bold ${isDarkMode ? 'text-white' : 'text-slate-900'}`}>Average 300% ROI</h4>
                    <p className={`text-xs mt-1 font-medium ${isDarkMode ? 'text-slate-400' : 'text-slate-500'}`}>Our partners see significant revenue boosts within 60 days.</p>
                  </div>
               </div>
               <div className="flex items-center gap-3 w-full sm:w-auto overflow-hidden text-fuchsia-500">
                  <FaChartLine size={32} className="opacity-80" />
               </div>
            </div>

            {/* Mobile Checkout Card & Notice Placement */}
            <div className="w-full lg:hidden mb-12">
              {renderCheckoutCard(true)}
              {renderLiveNotice(true)}
            </div>

            <div className="space-y-16 lg:space-y-20">

              <section className="pt-2">
                <div className="flex flex-col items-center sm:items-start mb-10 text-center sm:text-left">
                  <h3 className={`text-2xl sm:text-3xl font-black tracking-tight ${isDarkMode ? 'text-white' : 'text-slate-900'}`}>
                    Plan Features Comparison
                  </h3>
                  <p className={`mt-3 font-medium text-sm sm:text-base ${isDarkMode ? 'text-slate-400' : 'text-slate-500'}`}>
                    Choose the plan that best fits your scaling goals. All features are managed end-to-end.
                  </p>
                </div>

                <div className="grid grid-cols-1 md:grid-cols-2 gap-8">
                  {/* Basic Plan Column */}
                  <div className={`rounded-3xl p-6 sm:p-8 border transition-all duration-300 ${
                    isDarkMode ? 'bg-slate-900/40 border-slate-800' : 'bg-white border-slate-200 shadow-xl shadow-slate-200/50'
                  }`}>
                    <div className="flex items-center justify-between mb-8">
                      <h4 className={`text-xl font-black ${isDarkMode ? 'text-white' : 'text-slate-900'}`}>Basic Growth</h4>
                      <div className="bg-fuchsia-500/10 text-fuchsia-500 text-[10px] font-bold px-3 py-1 rounded-full border border-fuchsia-500/20 uppercase">Core</div>
                    </div>
                    <div className="space-y-4">
                      {planFeatures.map((feature, idx) => {
                        const value = basicPlanFlags[idx];
                        const isString = typeof value === "string";
                        const isIncluded = isString || value === true;
                        return (
                          <div key={idx} className={`flex items-start gap-3 ${isIncluded ? 'opacity-100' : 'opacity-40'}`}>
                            <div className={`mt-0.5 shrink-0 ${isIncluded ? 'text-fuchsia-500' : 'text-slate-400'}`}>
                              {isIncluded && !isString ? <CheckCircle2 size={16} /> : (!isString ? <X size={16} className="opacity-20" /> : 
                                <div className="text-[9px] font-black uppercase px-2 py-0.5 rounded-full bg-fuchsia-100 dark:bg-fuchsia-900/50 text-fuchsia-600 dark:text-fuchsia-300">
                                  {value}
                                </div>)}
                            </div>
                            <span className={`text-[12px] font-medium leading-tight ${isDarkMode ? 'text-slate-300' : 'text-slate-700'}`}>{feature}</span>
                          </div>
                        );
                      })}
                    </div>
                  </div>

                  {/* Premium Plan Column */}
                  <div className={`relative rounded-3xl p-6 sm:p-8 border transition-all duration-300 ${
                    isDarkMode ? 'bg-fuchsia-950/20 border-fuchsia-500/30' : 'bg-fuchsia-50/30 border-fuchsia-100 shadow-xl shadow-fuchsia-500/5'
                  }`}>
                    <div className="absolute -top-3 left-1/2 -translate-x-1/2 bg-fuchsia-600 text-white text-[9px] font-black uppercase tracking-widest px-4 py-1.5 rounded-full shadow-lg z-20">
                      Most Scalable
                    </div>
                    <div className="flex items-center justify-between mb-8">
                      <h4 className={`text-xl font-black ${isDarkMode ? 'text-white' : 'text-slate-900'}`}>Premium Growth</h4>
                      <div className="bg-fuchsia-600 text-white text-[10px] font-bold px-3 py-1 rounded-full shadow-sm uppercase">Full Power</div>
                    </div>
                    <div className="space-y-4">
                      {planFeatures.map((feature, idx) => {
                        const value = premiumPlanFlags[idx];
                        const isString = typeof value === "string";
                        const isIncluded = isString || value === true;
                        return (
                          <div key={idx} className={`flex items-start gap-3 ${isIncluded ? 'opacity-100' : 'opacity-40'}`}>
                            <div className={`mt-0.5 shrink-0 ${isIncluded ? 'text-fuchsia-500' : 'text-slate-400'}`}>
                              {isIncluded && !isString ? <CheckCircle2 size={16} /> : (!isString ? <X size={16} className="opacity-20" /> : 
                                <div className="text-[9px] font-black uppercase px-2 py-0.5 rounded-full bg-fuchsia-600 text-white">
                                  {value}
                                </div>)}
                            </div>
                            <span className={`text-[12px] font-black leading-tight ${isDarkMode ? 'text-white' : 'text-slate-900'}`}>{feature}</span>
                          </div>
                        );
                      })}
                    </div>
                  </div>
                </div>
              </section>

              {/* Inline FAQ Content for Mobile only */}
              <div className="pt-10 lg:hidden">
                 <div className="w-full font-poppins">
                    <h2 className={`text-2xl sm:text-3xl font-black mb-8 tracking-tight ${isDarkMode ? 'text-white' : 'text-slate-900'}`}>
                      Growth FAQs
                    </h2>
                    <div className="space-y-3">
                      {faqData.map((faq, index) => (
                        <div
                          key={index}
                          className={`rounded-xl border transition-all duration-300 overflow-hidden ${
                            expandedFaqIndex === index 
                              ? isDarkMode ? 'bg-[#1e293b]/80 border-fuchsia-500/50 shadow-md shadow-fuchsia-500/10' : 'bg-fuchsia-50/50 border-fuchsia-200 shadow-md shadow-fuchsia-500/5'
                              : isDarkMode ? 'bg-[#0f172a]/40 border-slate-700/50 hover:bg-[#1e293b]/60 hover:border-slate-600' : 'bg-white border-slate-200/80 hover:bg-slate-50 hover:border-slate-300'
                          }`}
                        >
                          <button
                            onClick={() => setExpandedFaqIndex(expandedFaqIndex === index ? null : index)}
                            className="w-full text-left px-5 py-4 font-bold flex items-center justify-between gap-4 focus:outline-none"
                          >
                            <span className={`text-[13px] sm:text-sm leading-snug ${isDarkMode ? 'text-slate-200' : 'text-slate-800'}`}>
                              {faq.q}
                            </span>
                            <ChevronDown 
                              size={18} 
                              className={`shrink-0 transition-transform duration-300 ${expandedFaqIndex === index ? 'rotate-180 text-fuchsia-500' : isDarkMode ? 'text-slate-500' : 'text-slate-400'}`} 
                            />
                          </button>
                          <div 
                            className={`px-5 text-[13px] leading-relaxed transition-all duration-300 ease-in-out ${
                              expandedFaqIndex === index ? 'max-h-40 pb-5 opacity-100' : 'max-h-0 pb-0 opacity-0'
                            } ${isDarkMode ? 'text-slate-400' : 'text-slate-600'}`}
                          >
                            {faq.a}
                          </div>
                        </div>
                      ))}
                    </div>
                  </div>
              </div>

            </div>
          </div>

          <div className="hidden lg:block lg:w-[40%] xl:w-[38%] relative">
            <div className="sticky top-28 xl:top-32 transition-transform duration-700 ease-out flex flex-col justify-start">
              {renderCheckoutCard()}
              {renderLiveNotice()}
              {renderExpertAssistance()}
              
              <div className="mt-8 w-full">
                <div className="w-full font-poppins">
                    <h2 className={`text-2xl sm:text-3xl font-black mb-8 tracking-tight ${isDarkMode ? 'text-white' : 'text-slate-900'}`}>
                      Growth FAQs
                    </h2>
                    <div className="space-y-3">
                      {faqData.map((faq, index) => (
                        <div
                          key={index}
                          className={`rounded-xl border transition-all duration-300 overflow-hidden ${
                            expandedFaqIndex === index 
                              ? isDarkMode ? 'bg-[#1e293b]/80 border-fuchsia-500/50 shadow-md shadow-fuchsia-500/10' : 'bg-fuchsia-50/50 border-fuchsia-200 shadow-md shadow-fuchsia-500/5'
                              : isDarkMode ? 'bg-[#0f172a]/40 border-slate-700/50 hover:bg-[#1e293b]/60 hover:border-slate-600' : 'bg-white border-slate-200/80 hover:bg-slate-50 hover:border-slate-300'
                          }`}
                        >
                          <button
                            onClick={() => setExpandedFaqIndex(expandedFaqIndex === index ? null : index)}
                            className="w-full text-left px-5 py-4 font-bold flex items-center justify-between gap-4 focus:outline-none"
                          >
                            <span className={`text-[13px] sm:text-sm leading-snug ${isDarkMode ? 'text-slate-200' : 'text-slate-800'}`}>
                              {faq.q}
                            </span>
                            <ChevronDown 
                              size={18} 
                              className={`shrink-0 transition-transform duration-300 ${expandedFaqIndex === index ? 'rotate-180 text-fuchsia-500' : isDarkMode ? 'text-slate-500' : 'text-slate-400'}`} 
                            />
                          </button>
                          <div 
                            className={`px-5 text-[13px] leading-relaxed transition-all duration-300 ease-in-out ${
                              expandedFaqIndex === index ? 'max-h-40 pb-5 opacity-100' : 'max-h-0 pb-0 opacity-0'
                            } ${isDarkMode ? 'text-slate-400' : 'text-slate-600'}`}
                          >
                            {faq.a}
                          </div>
                        </div>
                      ))}
                    </div>
                </div>
              </div>

            </div>
          </div>

        </div>
      </div>
      <SiteFooter />

      <div className={`fixed bottom-0 left-0 right-0 p-4 lg:hidden z-50 border-t backdrop-blur-xl transition-all duration-300 ${isDarkMode ? 'bg-[#0b101d]/90 border-slate-800' : 'bg-white/95 border-slate-200 shadow-[0_-4px_25px_-4px_rgba(0,0,0,0.1)]'
        }`}>
        <button
          onClick={handleCheckout}
          className="w-full bg-gradient-to-r from-fuchsia-500 to-purple-600 text-white py-3.5 rounded-xl text-sm font-bold shadow-lg shadow-fuchsia-500/25 active:scale-[0.98] transition-all flex items-center justify-center gap-2"
        >
          Scale Your Business <span className="opacity-80 mx-1">•</span> ₹{finalPrice.toLocaleString()}
          <ChevronRight size={18} />
        </button>
      </div>
    </div>
);
};

export default GrowthCoursePage;
