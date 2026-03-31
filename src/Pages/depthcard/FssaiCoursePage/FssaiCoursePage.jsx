import React, { useState, useRef, useEffect } from 'react';
import { useNavigate } from 'react-router-dom';
import fssaiImg from '../../../assets/fssai.png';
import bannerImg from '../../../assets/Bannerfssai.png';
import { FaTv, FaDownload, FaSatelliteDish, FaSmile, FaTag, FaCheckCircle, FaWhatsapp, FaPlus, FaMinus } from 'react-icons/fa';
import { useTheme } from '../../../components/context/ThemeContext';
import FssaiFAQ from './FssaiFAQ';
import FssaiWhatYouGet from './FssaiWhatYouGet';
import FssaiEligibility from "./FssaiEligibility";
import SiteFooter from './SiteFooter';
import { CheckCircle2, ChevronRight, Star, ShieldCheck } from 'lucide-react';

const Govt = 1000;

const plansList = [
  { slug: 'fssai-registration-1yr', label: 'Basic Reg (1 Year)', price: 1500, features: ['Basic Application Prep', 'Dedicated Filing Support', '1 Year License Validity', 'Compliance Updates'], description: 'Perfect for small home kitchens and startups needing basic registration for 1 year.' },
  { slug: 'fssai-registration-3yrs', label: 'Basic Reg (3 Year)', price: 2000, features: ['Basic Application Prep', 'Priority Filing Support', '3 Year License Validity', 'Renewal Reminders'], description: 'Lock in your registration for 3 years to avoid annual renewal hassles.' },
  { slug: 'fssai-registration-5yrs', label: 'Basic Reg (5 Year)', price: 3000, features: ['Basic Application Prep', 'Dedicated Filing Agent', '5 Year License Validity', 'Max Peace of Mind'], description: 'Maximum validity basic registration providing uninterrupted peace of mind.' },
  { slug: 'fssai-state-license', label: 'State License', price: (3999 + Govt), features: ['Complete Application Prep', 'State License Processing', 'Priority Govt Liaison', 'Expert Consultation'], description: 'Crucial for medium-sized businesses and restaurants scaling state-wide.' },
  { slug: 'fssai-tatkal-license', label: 'Tatkal Fast-Track', price: 999, features: ['Express Application Prep', '1 Year License Validity', '24h Priority Filing', 'Instant Support'], description: 'For extremely urgent basic registration needs. Bumps to the top of our queue.' },
];

const renewalPlans = [
  { slug: 'fssai-renewal-1yr', label: 'Renewal (1 Year)', price: 700, features: ['FSSAI Renewal Filing', '1 Year License Validity', 'Cloud Documentation'], description: 'Renew your basic registration for 1 year.' },
  { slug: 'fssai-renewal-3yrs', label: 'Renewal (3 Years)', price: 1200, features: ['FSSAI Renewal Filing', '3 Year License Validity', 'Priority Support'], description: 'Renew your basic registration for 3 years.' },
  { slug: 'fssai-renewal-5yrs', label: 'Renewal (5 Years)', price: 2000, features: ['FSSAI Renewal Filing', '5 Year License Validity', 'Compliance Management'], description: 'Renew your basic registration for 5 years.' },
];

const FssaiLicenseCourse = () => {
  const navigate = useNavigate();
  const { isDarkMode } = useTheme();
  
  const notices = [
    { text: "Food Safety guidelines updated for FY 2026. Review mandatory hygiene rating requirements.", date: "2026-03-24", link: "https://foscos.fssai.gov.in/notification-list" },
    { text: "Tatkal License processing is experiencing exceptionally fast resolution times this week.", date: "2026-03-20", link: "https://foscos.fssai.gov.in/notification-list" },
    { text: "Annual Return filing deadlines are approaching. Ensure your records are updated.", date: "2026-03-12", link: "https://foscos.fssai.gov.in/notification-list" },
    { text: "FoSCos portal maintenance scheduled for this weekend. Submissions will be paused.", date: "2026-03-08", link: "https://foscos.fssai.gov.in/notification-list" }
  ];

  const availableCoupons = [
    { code: 'MAGIC20', discount: 20, description: 'Get 20% off on your total purchase!' },
    { code: 'FSSAI100', discount: null, flatDiscount: 100, description: 'Get ₹100 off your license!' },
    { code: 'STARTUP50', discount: null, flatDiscount: 50, description: '₹50 off for new founders!' },
  ];

  const [selectedPlan, setSelectedPlan] = useState(plansList[0]);
  const [quantity, setQuantity] = useState(1);
  const [couponCode, setCouponCode] = useState('');
  const [discountApplied, setDiscountApplied] = useState(false);
  const [appliedCouponInfo, setAppliedCouponInfo] = useState(null);
  const [finalPrice, setFinalPrice] = useState(selectedPlan.price);
  const [isNoticePaused, setIsNoticePaused] = useState(false);

  const mainContentRef = useRef(null);
  const checkoutRef = useRef(null);

  useEffect(() => {
    window.scrollTo({ top: 0, behavior: 'smooth' });
  }, []);

  // Recalculate Final Price deeply checking Plan, Quantity, and Discounts
  useEffect(() => {
    let basePrice = selectedPlan.price;
    if (discountApplied && appliedCouponInfo) {
      if (appliedCouponInfo.discount) {
        basePrice = basePrice * (1 - appliedCouponInfo.discount / 100);
      } else if (appliedCouponInfo.flatDiscount) {
        basePrice = basePrice - appliedCouponInfo.flatDiscount;
      }
    }
    setFinalPrice(Math.max(0, Math.round(basePrice))); // Never below 0
  }, [selectedPlan, discountApplied, appliedCouponInfo]);

  const handleCouponApply = () => {
    const couponToApply = availableCoupons.find(coupon => coupon.code.toUpperCase() === couponCode.trim().toUpperCase());
    if (couponToApply) {
      setDiscountApplied(true);
      setAppliedCouponInfo(couponToApply);
      alert(`Coupon "${couponToApply.code}" applied! ${couponToApply.description}`);
    } else {
      setDiscountApplied(false);
      setAppliedCouponInfo(null);
      alert('Invalid coupon code. Please try again.');
    }
  };

  const handleCouponSelect = (coupon) => {
    setCouponCode(coupon.code);
    setDiscountApplied(true);
    setAppliedCouponInfo(coupon);
    alert(`Coupon "${coupon.code}" applied! ${coupon.description}`);
  };

  const handleRemoveCoupon = () => {
    setCouponCode('');
    setDiscountApplied(false);
    setAppliedCouponInfo(null);
  };

  const handlePlanChange = (e) => {
    const selected = plansList.find((p) => p.label === e.target.value);
    if (selected) {
      setSelectedPlan(selected);
      handleRemoveCoupon(); // Reset coupon on plan change
    }
  };

  const handleRenewalChange = (e) => {
    const selected = renewalPlans.find((p) => p.label === e.target.value);
    if (selected) {
      setSelectedPlan(selected);
      handleRemoveCoupon();
    }
  };

  const handleCheckout = () => {
    const isRenewal = renewalPlans.some(p => p.slug === selectedPlan.slug);
    let planName = selectedPlan.label;
    let features = selectedPlan.features;

    if (isRenewal) {
      planName = `FSSAI License ${selectedPlan.label}`;
      features = [
        `FSSAI ${selectedPlan.label}`,
        "Expert Documentation Review",
        "Fast-track Application Processing",
        "Renewal Certificate Assistance"
      ];
    }

    const featuresString = features.join(',');
    navigate(`/checkout/${selectedPlan.slug}?quantity=1&finalPrice=${finalPrice}&basePrice=${selectedPlan.price}&discountApplied=${discountApplied}&couponCode=${appliedCouponInfo ? appliedCouponInfo.code : ''}&planName=${encodeURIComponent(planName)}&planFeatures=${encodeURIComponent(featuresString)}`);
  };



  // Live Updates Notice Board
  const renderLiveNotice = (isMobile = false) => (
    <div className={`mt-6 rounded-2xl shadow-[0_4px_20px_-4px_rgba(37,99,235,0.25)] overflow-hidden transition-all duration-300 w-full ${isMobile ? 'max-w-sm mx-auto' : ''
      } ${isDarkMode ? 'bg-[#1e3a8a] border border-blue-500/20' : 'bg-blue-600'
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
            Live Updates
          </h3>
        </div>
      </div>
      <div className="px-6 pb-7 pt-4 text-white relative h-48 overflow-hidden z-10">
        <style>
          {`
            @keyframes scrollVertical {
              0% { transform: translateY(0); }
              100% { transform: translateY(-50%); }
            }
          `}
        </style>
        <div 
          className="flex flex-col gap-4 absolute w-full pr-10"
          style={{
            animation: 'scrollVertical 20s linear infinite',
            animationPlayState: isNoticePaused ? 'paused' : 'running'
          }}
        >
          {[...notices, ...notices].map((notice, idx) => (
            <a
              key={idx}
              href={notice.link}
              target="_blank"
              rel="noopener noreferrer"
              className="text-[13px] leading-relaxed opacity-95 cursor-pointer transition-all hover:bg-white/10 p-2.5 -mx-2.5 rounded-lg flex flex-col gap-1 border-b border-light-blue-500/30 shadow-sm"
            >
              <span className="font-semibold text-white/95 hover:text-white line-clamp-2">{notice.text}</span>
              <span className="opacity-70 text-[10px] font-bold tracking-wider uppercase mt-1">{notice.date}</span>
            </a>
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
            <FaCheckCircle className="text-blue-500 text-xs" />
            Dedicated Expert
          </h4>
          <span className="flex h-2 w-2 relative">
             <span className="animate-ping absolute inline-flex h-full w-full rounded-full bg-blue-400 opacity-75"></span>
             <span className="relative inline-flex rounded-full h-2 w-2 bg-blue-500"></span>
          </span>
       </div>
       <div className="flex items-center gap-3 border-b pb-4 border-slate-200 dark:border-slate-700/50">
          <img src="https://i.pravatar.cc/150?img=68" alt="Expert" className="w-10 h-10 rounded-full border border-blue-500 p-0.5 object-cover shrink-0 shadow-sm" />
          <div className="flex-1 min-w-0">
            <p className={`text-[12px] font-black leading-tight truncate ${isDarkMode ? 'text-white' : 'text-slate-800'}`}>Anita Desai</p>
            <p className={`text-[9.5px] font-medium leading-none mt-1 truncate ${isDarkMode ? 'text-slate-400' : 'text-slate-500'}`}>Senior FSSAI Consultant</p>
          </div>
       </div>
       <a href="https://wa.me/911234567890" target="_blank" rel="noopener noreferrer" className={`mt-3 w-full flex items-center justify-center gap-2 py-2 rounded-lg text-[11px] font-bold transition-all border ${
         isDarkMode ? 'bg-slate-800/50 border-slate-700 text-slate-300 hover:text-white hover:border-blue-500 hover:bg-blue-500/10' : 'bg-white border-slate-200 text-slate-700 hover:text-blue-600 hover:border-blue-500 hover:bg-blue-50'
       }`}>
         <FaWhatsapp className="text-blue-500 text-sm" /> Chat on WhatsApp
       </a>
    </div>
  );

  const renderTrustBadges = () => (
    <div className={`mt-5 rounded-2xl p-4 border flex items-center justify-center gap-4 text-center transition-all duration-300 shadow-sm ${
      isDarkMode ? 'bg-gradient-to-br from-[#0f172a]/90 to-[#0b101d] border-slate-700/50' : 'bg-gradient-to-br from-slate-50 to-white border-slate-200/80'
    }`}>
       <div className="flex -space-x-2.5">
          <img src="https://i.pravatar.cc/100?img=11" className={`w-7 h-7 rounded-full border-2 object-cover shadow-sm ${isDarkMode ? 'border-slate-800' : 'border-white'}`} alt="User" />
          <img src="https://i.pravatar.cc/100?img=44" className={`w-7 h-7 rounded-full border-2 object-cover shadow-sm ${isDarkMode ? 'border-slate-800' : 'border-white'}`} alt="User" />
          <img src="https://i.pravatar.cc/100?img=22" className={`w-7 h-7 rounded-full border-2 object-cover shadow-sm ${isDarkMode ? 'border-slate-800' : 'border-white'}`} alt="User" />
       </div>
       <p className={`text-[10px] font-semibold tracking-wide uppercase ${isDarkMode ? 'text-slate-400' : 'text-slate-500'} max-w-[120px] text-left leading-tight`}>
          Trusted by <span className="font-bold text-blue-500">500+</span> Businesses
       </p>
    </div>
  );

// New component for FSSAI Application Tracking
const FssaiTrackerCard = ({ isDarkMode }) => {
  const [arn, setArn] = useState('');
  const [isCopied, setIsCopied] = useState(false);

  const handleCopy = () => {
    if (arn.length === 17) {
      navigator.clipboard.writeText(arn);
      setIsCopied(true);
      setTimeout(() => setIsCopied(false), 2000);
    }
  };

  const handleTrack = () => {
    if (arn.length !== 17) {
      alert('Please enter a valid 17-digit Application Reference Number.');
      return;
    }
    // Copy automatically for user convenience
    navigator.clipboard.writeText(arn);
    window.open('https://foscos.fssai.gov.in/view-application', '_blank');
  };

  return (
    <div className={`rounded-2xl p-6 sm:p-8 border backdrop-blur-md transition-all ${isDarkMode ? 'bg-[#0f172a]/70 border-blue-500/20 shadow-blue-900/10 hover:shadow-blue-900/20' : 'bg-white border-blue-100 shadow-slate-200/50 hover:shadow-slate-200/80'}`}>
      <div className="flex flex-col sm:flex-row items-start sm:items-center justify-between gap-4 mb-6">
        <div>
          <h3 className={`text-xl sm:text-2xl font-black tracking-tight ${isDarkMode ? 'text-white' : 'text-slate-900'}`}>Application Tracker</h3>
          <p className={`text-xs mt-1 font-medium ${isDarkMode ? 'text-slate-400' : 'text-slate-500'}`}>Track your FoSCoS application status in real-time.</p>
        </div>
        <div className={`px-3 py-1.5 rounded-full text-[10px] font-bold uppercase tracking-wider ${isDarkMode ? 'bg-blue-500/10 text-blue-400 border border-blue-500/30' : 'bg-blue-50 text-blue-600 border border-blue-100'}`}>
          Direct Lab Link
        </div>
      </div>

      <div className="grid grid-cols-1 md:grid-cols-2 gap-8 items-center">
        <div className="space-y-4">
          <div className="relative">
            <label className={`text-[10px] font-bold uppercase tracking-widest block mb-2 ${isDarkMode ? 'text-slate-400' : 'text-slate-500'}`}>
              Application Reference Number (ARN)
            </label>
            <div className="flex gap-2">
              <input
                type="text"
                maxLength="17"
                placeholder="Ex: 12345678901234567"
                value={arn}
                onChange={(e) => setArn(e.target.value.replace(/\D/g, ''))}
                className={`flex-1 border px-4 py-3 rounded-xl text-sm font-bold transition-all ${isDarkMode ? 'bg-[#04070d] border-slate-700 text-white placeholder-slate-600 focus:border-blue-500 outline-none' : 'bg-slate-50 border-slate-200 text-slate-900 placeholder-slate-400 focus:border-blue-500 outline-none shadow-inner'}`}
              />
              <button 
                onClick={handleCopy}
                disabled={arn.length !== 17}
                className={`px-4 rounded-xl text-xs font-bold transition-all flex items-center gap-2 border ${arn.length === 17 ? (isCopied ? 'bg-emerald-500/10 border-emerald-500/30 text-emerald-500' : 'bg-blue-500/10 border-blue-500/30 text-blue-500 hover:bg-blue-500 hover:text-white') : 'bg-slate-500/5 border-slate-700/50 text-slate-500 cursor-not-allowed opacity-50'}`}
              >
                {isCopied ? <FaCheckCircle /> : <FaDownload className="rotate-180" />}
                {isCopied ? 'Copied' : 'Copy'}
              </button>
            </div>
          </div>
          
          <button 
            onClick={handleTrack}
            className={`w-full py-4 rounded-xl text-sm font-bold shadow-lg transition-all flex items-center justify-center gap-2 ${arn.length === 17 ? 'bg-gradient-to-r from-blue-600 to-indigo-600 text-white shadow-blue-500/25 hover:shadow-blue-500/40 hover:-translate-y-0.5' : 'bg-slate-200 text-slate-400 cursor-not-allowed dark:bg-slate-800'}`}
          >
            Track on FSSAI Portal <ChevronRight size={18} />
          </button>
        </div>

        <div className={`p-5 rounded-2xl border ${isDarkMode ? 'bg-blue-500/5 border-blue-500/10' : 'bg-blue-50/50 border-blue-100'}`}>
          <h4 className={`text-[11px] font-bold uppercase tracking-wider mb-3 ${isDarkMode ? 'text-blue-400' : 'text-blue-600'}`}>How to Track:</h4>
          <ul className="space-y-3">
            {[
              { step: '1', text: 'Enter your 17-digit ARN provided after filing.' },
              { step: '2', text: 'Click "Track on Portal" to open the FoSCoS website.' },
              { step: '3', text: 'Paste the ARN and solve the Captcha on the Govt portal.' }
            ].map((item, idx) => (
              <li key={idx} className="flex items-start gap-3">
                <span className="w-5 h-5 rounded-full bg-blue-500 text-white text-[10px] flex items-center justify-center font-bold shrink-0 mt-0.5">{item.step}</span>
                <p className={`text-xs font-medium leading-relaxed ${isDarkMode ? 'text-slate-300' : 'text-slate-600'}`}>{item.text}</p>
              </li>
            ))}
          </ul>
        </div>
      </div>
    </div>
  );
};

// Compact, highly polished checkout card
  const renderCheckoutCard = (isMobile = false) => (
    <div
      ref={isMobile ? null : checkoutRef}
      className={`relative rounded-2xl ${isMobile ? 'mx-auto border-t-0 rounded-t-none w-full max-w-sm' : 'border w-full'} shadow-2xl overflow-hidden backdrop-blur-md transition-all duration-300 ${
        isDarkMode
          ? 'bg-[#0f172a]/85 border-slate-700/50 shadow-blue-900/10 hover:shadow-blue-900/20'
          : 'bg-white/95 border-slate-200 shadow-slate-200/50 hover:shadow-slate-200/80'
      }`}
    >
      {/* Subtle top glow line */}
      <div className="absolute top-0 left-0 right-0 h-1 bg-gradient-to-r from-blue-400 via-indigo-500 to-sky-500 z-30" />

      {/* Condensed Image Header - Optimized for FoSCoS Logo */}
      <div className={`relative h-28 sm:h-36 overflow-hidden flex items-center justify-center p-6 border-b ${isDarkMode ? 'bg-[#0b101d] border-slate-700/50' : 'bg-slate-50 border-slate-200/50'}`}>
        <img
          src={fssaiImg}
          alt="FoSCoS licensing"
          className="w-full h-full object-contain group-hover:scale-105 transition-transform duration-700 opacity-95 drop-shadow-md relative z-10"
        />
        <div className="absolute top-3 left-4 z-20">
          <div className={`inline-flex items-center gap-1.5 px-2.5 py-1 rounded-full text-[9px] font-bold uppercase tracking-wider shadow-sm border ${isDarkMode ? 'bg-blue-500/10 border-blue-500/30 text-blue-300' : 'bg-white border-blue-100 text-blue-700 shadow-blue-500/5'}`}>
            <ShieldCheck size={11} className={isDarkMode ? 'text-blue-400' : 'text-blue-600'} />
            Govt Authorized
          </div>
        </div>
      </div>

      <div className="p-4 sm:p-5">
        {/* Dynamic Pricing Inside the Box Details */}
        <div className="mb-3">
          <div className="flex items-baseline gap-2">
            <h2 className={`text-2xl sm:text-3xl font-black tracking-tight ${isDarkMode ? 'text-white' : 'text-slate-900'}`} id="plans">
              ₹{finalPrice.toLocaleString()}
            </h2>
            {discountApplied && (
              <span className={`text-sm sm:text-base font-bold line-through ${isDarkMode ? 'text-slate-500' : 'text-slate-400'}`}>
                ₹{(selectedPlan.price * quantity).toLocaleString()}
              </span>
            )}
          </div>
          <div className="flex items-center justify-between">
            {discountApplied && appliedCouponInfo && (
              <p className="text-emerald-500 font-bold text-[10px] sm:text-[11px] mb-1">
                {appliedCouponInfo.discount ? `Save ${appliedCouponInfo.discount}%` : `Save ₹${appliedCouponInfo.flatDiscount}`} with {appliedCouponInfo.code}!
              </p>
            )}
            {quantity > 1 && !discountApplied && (
               <p className="text-blue-500 font-bold text-[10px] sm:text-[11px] mb-1">
                 Total for {quantity} outlets
               </p>
            )}
          </div>
          <p className={`text-xs mt-1 ${isDarkMode ? 'text-slate-300' : 'text-slate-600'} leading-relaxed font-medium line-clamp-2`}>
            {selectedPlan.description}
          </p>
        </div>

        {/* Polished Dropdowns for New & Renewal */}
        <div className="flex flex-col sm:flex-row gap-3 mb-4 mt-4">
           {/* Plan Select (New License) */}
           <div className="flex-1">
              <label className={`text-[9px] font-bold uppercase tracking-widest block mb-1.5 ${isDarkMode ? 'text-slate-400' : 'text-slate-500'}`}>New License</label>
              <div className="relative">
                <select 
                  value={plansList.find(p => p.slug === selectedPlan.slug) ? selectedPlan.label : "Select Option"}
                  onChange={handlePlanChange}
                  className={`w-full appearance-none border px-3 py-2 rounded-lg text-xs font-bold focus:outline-none transition-colors shadow-inner cursor-pointer ${
                    isDarkMode 
                      ? 'bg-[#0f172a] border-slate-700 text-white focus:border-blue-500' 
                      : 'bg-slate-50 border-slate-200 text-slate-900 focus:border-blue-500'
                  }`}
                >
                  {!plansList.find(p => p.slug === selectedPlan.slug) && <option disabled value="Select Option">Select Option</option>}
                  {plansList.map((p, i) => (
                    <option key={i} value={p.label} className="font-semibold">{p.label}</option>
                  ))}
                </select>
                <div className="absolute inset-y-0 right-0 flex items-center pr-3 pointer-events-none opacity-60">
                  <ChevronRight size={14} className="transform rotate-90" />
                </div>
              </div>
           </div>
           
           {/* Renewal Select */}
           <div className="flex-1">
              <label className={`text-[9px] font-bold uppercase tracking-widest block mb-1.5 ${isDarkMode ? 'text-slate-400' : 'text-slate-500'}`}>Renewal License</label>
              <div className="relative">
                <select 
                  value={renewalPlans.find(p => p.slug === selectedPlan.slug) ? selectedPlan.label : "Select Option"}
                  onChange={handleRenewalChange}
                  className={`w-full appearance-none border px-3 py-2 rounded-lg text-xs font-bold focus:outline-none transition-colors shadow-inner cursor-pointer ${
                    isDarkMode 
                      ? 'bg-[#0f172a] border-slate-700 text-white focus:border-blue-500' 
                      : 'bg-slate-50 border-slate-200 text-slate-900 focus:border-blue-500'
                  }`}
                >
                  {!renewalPlans.find(p => p.slug === selectedPlan.slug) && <option disabled value="Select Option">Select Option</option>}
                  {renewalPlans.map((p, i) => (
                    <option key={i} value={p.label} className="font-semibold">{p.label}</option>
                  ))}
                </select>
                <div className="absolute inset-y-0 right-0 flex items-center pr-3 pointer-events-none opacity-60">
                  <ChevronRight size={14} className="transform rotate-90" />
                </div>
              </div>
           </div>
        </div>

        <ul className="space-y-2 mb-4">
          {selectedPlan.features.map((feature, idx) => (
            <li key={idx} className="flex items-start gap-2">
              <CheckCircle2 size={14} className="text-blue-500 shrink-0 mt-0.5" />
              <span className={`text-xs font-medium leading-tight ${isDarkMode ? 'text-slate-200' : 'text-slate-700'}`}>{feature}</span>
            </li>
          ))}
        </ul>

        <button
          onClick={handleCheckout}
          className="w-full flex items-center justify-center gap-1.5 bg-gradient-to-r from-blue-600 to-indigo-600 text-white py-2 sm:py-2.5 rounded-lg text-[13px] font-bold shadow-md shadow-blue-500/25 hover:shadow-blue-500/40 hover:-translate-y-0.5 active:scale-[0.98] transition-all duration-300"
        >
          Proceed to Checkout
          <ChevronRight size={14} />
        </button>

        <div className="mt-3 flex items-center justify-center gap-1.5 opacity-80 hover:opacity-100 transition-opacity">
          <ShieldCheck size={12} className={isDarkMode ? 'text-slate-400' : 'text-slate-500'} />
          <p className={`text-[10px] font-semibold tracking-wide uppercase ${isDarkMode ? 'text-slate-400' : 'text-slate-500'}`}>
            30-Day Money-Back Guarantee
          </p>
        </div>

        {/* Coupon - Built-in functionality */}
        <div className={`mt-4 pt-4 border-t ${isDarkMode ? 'border-slate-700/50' : 'border-slate-200'}`}>
          <label htmlFor={`coupon-input-${isMobile ? 'm' : 'd'}`} className={`text-[10px] font-bold uppercase tracking-widest block mb-2 ${isDarkMode ? 'text-slate-400' : 'text-slate-500'}`}>
            Have a Coupon?
          </label>
          <div className="flex gap-2">
            <input
              id={`coupon-input-${isMobile ? 'm' : 'd'}`}
              type="text"
              placeholder="Enter code"
              value={couponCode}
              onChange={(e) => setCouponCode(e.target.value)}
              disabled={discountApplied}
              className={`flex-1 min-w-0 border px-3 py-2 rounded-lg text-xs font-bold transition-colors shadow-inner uppercase ${isDarkMode
                  ? 'bg-[#0b101d] border-slate-700 text-white placeholder-slate-500 focus:border-blue-500 outline-none disabled:opacity-50'
                  : 'bg-slate-50 border-slate-200 text-slate-900 placeholder-slate-400 focus:border-blue-500 outline-none disabled:opacity-50'
                }`}
            />
            {discountApplied ? (
              <button onClick={handleRemoveCoupon} className={`px-3 py-2 rounded-lg text-xs font-bold transition-colors shadow-sm bg-red-500/10 text-red-500 hover:bg-red-500/20`}>
                Remove
              </button>
            ) : (
              <button onClick={handleCouponApply} className={`px-4 py-2 rounded-lg text-xs font-bold transition-colors shadow-sm ${isDarkMode ? 'bg-blue-600 text-white hover:bg-blue-500' : 'bg-blue-600 text-white hover:bg-blue-700'
                }`}>
                Apply
              </button>
            )}
          </div>

          {/* Available Coupons List */}
          {!discountApplied && (
            <div className="mt-3 space-y-1.5 max-h-24 overflow-y-auto pr-1">
              {availableCoupons.map((coupon, idx) => (
                <div key={idx} onClick={() => handleCouponSelect(coupon)} className={`group flex items-center justify-between py-1.5 px-2.5 rounded-md border cursor-pointer transition-all ${isDarkMode ? 'bg-[#0f172a]/50 border-slate-700 hover:border-blue-500/50' : 'bg-slate-50 border-slate-200 hover:border-blue-300 hover:shadow-sm'
                  }`}>
                  <div className="flex items-center gap-2 overflow-hidden">
                    <FaTag className="text-blue-500 shrink-0 text-xs opacity-80 group-hover:opacity-100 transition-opacity" />
                    <div className="min-w-0">
                      <p className={`text-[10px] font-black tracking-wide uppercase truncate ${isDarkMode ? 'text-slate-200' : 'text-slate-800'}`}>{coupon.code}</p>
                      <p className={`text-[9px] font-medium leading-none mt-0.5 truncate ${isDarkMode ? 'text-slate-400' : 'text-slate-500'}`}>{coupon.description}</p>
                    </div>
                  </div>
                  <button className="text-[9px] font-bold text-blue-500 opacity-0 group-hover:opacity-100 transition-opacity uppercase tracking-wider pl-2 shrink-0">Apply</button>
                </div>
              ))}
            </div>
          )}
        </div>
      </div>
    </div>
  );

  return (
    <div className={`min-h-screen font-[Poppins] selection:bg-blue-500/30 overflow-x-clip ${isDarkMode ? 'bg-[#04070d] text-slate-200' : 'bg-[#fcfdfd] text-slate-800'
      }`}>

      {/* Decorative FSSAI-Themed Background Elements - Professional Blue/Orange */}
      <div className="absolute top-0 inset-x-0 h-[600px] overflow-hidden pointer-events-none z-0">
        <div className="absolute -top-40 -right-40 w-[600px] h-[600px] bg-blue-600/10 dark:bg-blue-600/5 blur-[120px] rounded-full mix-blend-screen" />
        <div className="absolute top-20 -left-20 w-[500px] h-[500px] bg-sky-500/10 dark:bg-sky-500/5 blur-[120px] rounded-full mix-blend-screen" />
        <div className="absolute bottom-0 inset-x-0 h-40 bg-gradient-to-t from-[#04070d] dark:from-[#04070d] to-transparent dark:block hidden" />
        <div className="absolute bottom-0 inset-x-0 h-40 bg-gradient-to-t from-[#fcfdfd] to-transparent block dark:hidden" />
      </div>

      <div className="relative z-10 max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 xl:px-12 pt-24 pb-20 lg:pt-32 lg:pb-28">

        {/* Adjusted spacing and layout for ultra polished feel */}
        <div ref={mainContentRef} className="flex flex-col lg:flex-row gap-10 lg:gap-12 xl:gap-16 items-start">

          {/* Left Section - Main Content */}
          <div className="w-full lg:w-[60%] xl:w-[62%]">

            {/* Breadcrumb Navigation */}
            <div className="flex items-center gap-2 text-xs sm:text-sm font-semibold mb-6 uppercase tracking-wider">
              <span onClick={() => navigate('/services')} className="text-blue-500 hover:text-blue-600 cursor-pointer transition-colors">Services</span>
              <ChevronRight size={14} className={isDarkMode ? 'text-slate-600' : 'text-slate-400'} />
              <span className={isDarkMode ? 'text-slate-400' : 'text-slate-500'}>FSSAI Registration</span>
            </div>

            <h1 className={`text-4xl sm:text-5xl lg:text-6xl font-black tracking-tighter leading-[1.1] mb-6 ${isDarkMode ? 'text-white' : 'text-slate-900'
              }`}>
              Expert Guidance for <br /><span className="text-transparent bg-clip-text bg-gradient-to-r from-blue-600 via-indigo-500 to-sky-500 drop-shadow-sm pb-2 inline-block">FSSAI Licensing</span>
            </h1>

            <p className={`text-lg sm:text-xl font-medium leading-relaxed mb-8 max-w-2xl ${isDarkMode ? 'text-slate-400' : 'text-slate-600'}`}>
              Whether you're a home kitchen, café, cloud kitchen, or multi-outlet restaurant, we streamline the entire certification process so you can focus on building your brand.
            </p>

            {/* Highlight Bar - Extra Polished */}
            <div className={`rounded-2xl p-5 sm:p-6 mb-12 flex flex-col sm:flex-row items-start sm:items-center justify-between gap-6 border backdrop-blur-md transition-shadow hover:shadow-lg ${isDarkMode
                ? 'bg-[#0f172a]/70 border-slate-700/50 hover:shadow-blue-900/5'
                : 'bg-white border-slate-200/80 hover:border-blue-100 shadow-[0_4px_20px_-4px_rgba(0,0,0,0.05)]'
              }`}>
               <div className="flex items-start gap-4">
                  <div className="bg-gradient-to-br from-blue-600 to-indigo-600 text-white text-[10px] sm:text-xs font-black px-3 py-1.5 rounded border border-blue-400/20 shadow-sm uppercase tracking-widest mt-1 sm:mt-0">
                    Trusted
                  </div>
                  <div>
                    <h4 className={`text-base font-bold ${isDarkMode ? 'text-white' : 'text-slate-900'}`}>100% Gov Compliant</h4>
                    <p className={`text-xs mt-1 font-medium ${isDarkMode ? 'text-slate-400' : 'text-slate-500'}`}>We handle everything straight with the FoSCoS portal.</p>
                  </div>
               </div>
               <div className="flex items-center gap-3 w-full sm:w-auto overflow-hidden">
                 <img src={fssaiImg} alt="FSSAI Standard" className="h-10 w-auto object-contain opacity-90 drop-shadow-sm" />
               </div>
            </div>

            {/* Main Content Details */}
            <div className="space-y-16 lg:space-y-20">

              <FssaiEligibility />

               <FssaiWhatYouGet />

              {/* FSSAI Application Tracker Section */}
              <FssaiTrackerCard isDarkMode={isDarkMode} />

              {/* Reasons Grid */}
              <div className="pt-2">
                <div className="flex flex-col items-center sm:items-start mb-10 text-center sm:text-left">
                  <h3 className={`text-2xl sm:text-3xl font-black tracking-tight ${isDarkMode ? 'text-white' : 'text-slate-900'}`}>
                    Why Choose MagicScale?
                  </h3>
                  <p className={`mt-3 font-medium text-sm sm:text-base ${isDarkMode ? 'text-slate-400' : 'text-slate-500'}`}>Your seamless corridor to compliance without the headaches.</p>
                </div>

                <div className="grid grid-cols-1 sm:grid-cols-2 gap-6 w-full">
                  {[
                    { icon: <FaTv />, title: 'Online Dashboard', desc: 'Track your application status in real-time.', color: 'bg-blue-100 text-blue-600 dark:bg-blue-500/20 dark:text-blue-400' },
                    { icon: <FaDownload />, title: 'Documents Sorted', desc: 'Securely upload docs; we do the paperwork handling.', color: 'bg-indigo-100 text-indigo-600 dark:bg-indigo-500/20 dark:text-indigo-400' },
                    { icon: <FaSatelliteDish />, title: 'Pan-India Filing', desc: 'Regardless of your state, we coordinate centrally.', color: 'bg-sky-100 text-sky-600 dark:bg-sky-500/20 dark:text-sky-400' },
                    { icon: <FaSmile />, title: 'Zero Rejection Worry', desc: 'If there is an error, we contest and re-file it for you.', color: 'bg-orange-100 text-orange-600 dark:bg-orange-500/20 dark:text-orange-400' }
                  ].map((item, idx) => (
                    <div
                      key={idx}
                      className={`group rounded-2xl p-6 sm:p-8 border transition-all duration-500 hover:-translate-y-1.5 hover:shadow-xl w-full ${isDarkMode
                          ? 'bg-[#0f172a]/40 border-slate-700/50 hover:bg-[#0f172a]/80 hover:border-blue-500/30 hover:shadow-blue-900/10'
                          : 'bg-white border-slate-200/80 hover:shadow-slate-200/80 hover:border-blue-200'
                        }`}
                    >
                      <div className={`w-12 h-12 rounded-2xl ${item.color} flex items-center justify-center mb-6 transition-transform duration-500 group-hover:scale-110 shadow-sm`}>
                        {React.cloneElement(item.icon, { className: 'text-2xl' })}
                      </div>
                      <h4 className={`text-lg font-bold mb-3 ${isDarkMode ? 'text-white' : 'text-slate-900'}`}>{item.title}</h4>
                      <p className={`text-sm leading-relaxed font-medium ${isDarkMode ? 'text-slate-400' : 'text-slate-500'}`}>{item.desc}</p>
                    </div>
                  ))}
                </div>
              </div>

              <div className="pt-10 lg:hidden">
                <FssaiFAQ />
              </div>

            </div>
          </div>

          {/* Right: Sticky Checkout Bar (Desktop Only) */}
          <div className="hidden lg:block lg:w-[40%] xl:w-[38%] relative">
            {/* The sticky container */}
            <div className="sticky top-28 xl:top-32 transition-transform duration-700 ease-out flex flex-col justify-start">
              {renderCheckoutCard()}
              {renderLiveNotice()}
              {renderExpertAssistance()}
              {renderTrustBadges()}
              <div className="mt-8 w-full">
                <FssaiFAQ />
              </div>
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
          className="w-full bg-gradient-to-r from-blue-600 to-indigo-600 text-white py-3.5 rounded-xl text-sm font-bold shadow-lg shadow-blue-500/25 active:scale-[0.98] transition-all flex items-center justify-center gap-2"
        >
          Check Eligibility <span className="opacity-80 mx-1">•</span> ₹{finalPrice.toLocaleString()}
          <ChevronRight size={18} />
        </button>
      </div>
      
    </div>
  );
};

export default FssaiLicenseCourse;
