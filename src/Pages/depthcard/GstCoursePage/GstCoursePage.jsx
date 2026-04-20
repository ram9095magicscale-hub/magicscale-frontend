import React, { useState, useRef, useEffect } from 'react';
import { useNavigate } from 'react-router-dom';
import bannerImg from '../../../assets/Emblem_of_India.svg';
import { FaFileInvoice, FaDownload, FaHistory, FaCheckCircle, FaWhatsapp, FaArrowUp, FaGavel, FaEdit, FaShieldAlt, FaCalendarCheck } from 'react-icons/fa';
import { useTheme } from '../../../components/context/ThemeContext';
import SiteFooter from '../FssaiCoursePage/SiteFooter';
import { CheckCircle2, ChevronRight, Star, ShieldCheck, ChevronDown, ChevronUp, X, FileText, Info } from 'lucide-react';

const plansList = [
  { 
    slug: 'gst-registration', 
    label: 'GST Registration', 
    price: 999, 
    features: ['New GST Registration', 'GST Portal Setup', 'ARN Generation', 'Certificate Download', 'Expert Consultation'], 
    description: 'Perfect for new businesses. We handle the entire application process and documentation.' 
  },
  { 
    slug: 'gst-compliance', 
    label: 'Monthly Compliance', 
    price: 999, 
    features: ['GSTR-1 & 3B Filing', 'Input Tax Credit Review', 'Monthly Reconciliation', 'GST Consultation', 'Priority Support'], 
    description: 'Ensure monthly compliance and avoid penalties. Professional filing of your GST returns.' 
  },
];


const notices = [
  { text: "GST Portal Update: Aadhaar authentication mandatory for all new registrations.", date: "Today" },
  { text: "Due Date Reminder: GSTR-1 for February is approaching. File early to avoid late fees.", date: "2 Days Ago" },
  { text: "New Notification: GST rate changes for specific food services implemented this month.", date: "1 Week Ago" },
  { text: "Security Alert: Beware of fake GST officials. Always verify notices on the official portal.", date: "Last Month" }
];

const faqData = [
  { q: "What documents are required for GST Registration?", a: "Typically, you need the PAN and Aadhaar of the owner/directors, Proof of Business Address (Electricity Bill/Rent Agreement), Bank Account details, and a Photograph." },
  { q: "How long does it take to get a GST number?", a: "Once we submit the application, the government usually issues the TRN immediately and the final GSTIN within 3 to 7 working days, provided there are no queries from the department." },
  { q: "Is monthly filing mandatory even with zero turnover?", a: "Yes, once registered, filing Nil returns (GSTR-1 and GSTR-3B) is mandatory every month or quarter (QRMP) to avoid heavy daily late fees." },
  { q: "Can we modify GST details after registration?", a: "Yes, we can file an amendment for Core and Non-Core fields like changes in address, business name, or adding new business activities." },
];

const GstCoursePage = () => {
  const navigate = useNavigate();
  const { isDarkMode } = useTheme();

  const [selectedPlan, setSelectedPlan] = useState(plansList[0]);

  const [finalPrice, setFinalPrice] = useState(plansList[0].price);
  const [isNoticePaused, setIsNoticePaused] = useState(false);
  const [expandedFaqIndex, setExpandedFaqIndex] = useState(null);

  const checkoutRef = useRef(null);

  useEffect(() => {
    window.scrollTo({ top: 0, behavior: 'smooth' });
  }, []);

  useEffect(() => {
    setFinalPrice(Math.max(0, Math.round(selectedPlan.price)));
  }, [selectedPlan]);


  const handleCheckout = () => {
    const featuresString = selectedPlan.features.join(',');
    navigate(`/checkout/${selectedPlan.slug}?finalPrice=${finalPrice}&basePrice=${selectedPlan.price}&planName=${encodeURIComponent(selectedPlan.label)}&planFeatures=${encodeURIComponent(featuresString)}`);
  };


  const renderLiveNotice = () => (
    <div className={`mt-6 rounded-2xl shadow-[0_4px_20px_-4px_rgba(30,58,138,0.25)] overflow-hidden transition-all duration-300 w-full ${isDarkMode ? 'bg-[#0f172a] border border-blue-500/20' : 'bg-blue-800'
      }`}>
      <div className="px-6 pt-6 pb-4 flex items-center justify-between relative shadow-[0_4px_10px_rgba(0,0,0,0.1)] z-20">
        <h3 className="text-[18px] font-bold text-white tracking-wide leading-none">Compliance Board</h3>
      </div>
      <div className="px-6 pb-7 pt-4 text-white relative h-48 overflow-hidden z-10">
        <div 
          className="flex flex-col gap-4 absolute w-full pr-10"
          onMouseEnter={() => setIsNoticePaused(true)}
          onMouseLeave={() => setIsNoticePaused(false)}
          style={{ animation: isNoticePaused ? 'none' : 'scrollVerticalGst 30s linear infinite' }}
        >
          <style>{`@keyframes scrollVerticalGst { 0% { transform: translateY(0); } 100% { transform: translateY(-50%); } }`}</style>
          {[...notices, ...notices].map((notice, idx) => (
            <div key={idx} className="text-[12px] leading-relaxed p-2.5 -mx-2.5 flex flex-col gap-1 border-b border-blue-400/30">
              <span className="font-semibold text-white/95">{notice.text}</span>
              <span className="opacity-70 text-[10px] font-bold uppercase mt-1 text-blue-100">{notice.date}</span>
            </div>
          ))}
        </div>
      </div>
    </div>
  );

  const renderCheckoutCard = () => (
    <div className={`relative rounded-2xl border w-full shadow-2xl overflow-hidden backdrop-blur-md transition-all duration-300 ${
        isDarkMode ? 'bg-[#0f172a]/85 border-slate-700/50' : 'bg-white/95 border-slate-200 shadow-slate-200/50'
      }`}>
      <div className="absolute top-0 left-0 right-0 h-1 bg-gradient-to-r from-blue-700 via-indigo-600 to-sky-500 z-30" />
      <div className={`relative h-28 sm:h-36 overflow-hidden flex items-center justify-center p-6 border-b ${isDarkMode ? 'bg-[#0f1c29] border-slate-700/50' : 'bg-blue-50/50 border-slate-200/50'}`}>
        <img src={bannerImg} alt="GST Logo" className="w-full h-full object-contain opacity-20 absolute inset-0" />
        <div className="relative z-20 text-center">
            <FaFileInvoice className="text-blue-600 dark:text-blue-400 text-4xl mx-auto mb-2" />
            <h3 className={`font-black tracking-widest uppercase text-sm ${isDarkMode ? 'text-white' : 'text-blue-900'}`}>GST Service</h3>
        </div>
      </div>

      <div className="p-4 sm:p-5">
        <div className="mb-4">
          <h2 className={`text-2xl sm:text-3xl font-black tracking-tight ${isDarkMode ? 'text-white' : 'text-slate-900'}`}>₹{finalPrice.toLocaleString()}</h2>
          <p className={`text-[11px] mt-1 ${isDarkMode ? 'text-slate-300' : 'text-slate-600'} leading-relaxed`}>{selectedPlan.description}</p>
        </div>

        <div className="flex flex-col gap-3 mb-4">
          <select 
            value={selectedPlan.label}
            onChange={(e) => setSelectedPlan(plansList.find((p) => p.label === e.target.value))}
            className={`w-full appearance-none border px-3 py-2.5 rounded-lg text-xs font-bold focus:outline-none ${isDarkMode ? 'bg-[#0f172a] border-slate-700 text-white' : 'bg-slate-50 border-slate-200 text-slate-900'}`}
          >
            {plansList.map((p, i) => (<option key={i} value={p.label}>{p.label}</option>))}
          </select>
        </div>

        <ul className="space-y-2 mb-4">
          {selectedPlan.features.map((feature, idx) => (
            <li key={idx} className="flex items-start gap-2">
              <CheckCircle2 size={14} className="text-blue-500 shrink-0 mt-0.5" />
              <span className={`text-xs font-medium leading-tight ${isDarkMode ? 'text-slate-200' : 'text-slate-700'}`}>{feature}</span>
            </li>
          ))}
        </ul>

        <button onClick={handleCheckout} className="w-full flex items-center justify-center gap-1.5 bg-gradient-to-r from-blue-700 to-indigo-700 text-white py-2.5 rounded-lg text-[13px] font-bold shadow-md shadow-blue-500/25 active:scale-[0.98] transition-all">
          Proceed to Checkout <ChevronRight size={14} />
        </button>
      </div>
    </div>
  );

  return (
    <div className={`min-h-screen font-[Poppins] selection:bg-blue-500/30 overflow-x-clip ${isDarkMode ? 'bg-[#04070d] text-slate-200' : 'bg-[#fcfdfd] text-slate-800'}`}>
      <div className="absolute top-0 inset-x-0 h-[600px] overflow-hidden pointer-events-none z-0">
        <div className="absolute -top-40 -right-40 w-[600px] h-[600px] bg-blue-600/10 blur-[120px] rounded-full" />
        <div className="absolute top-20 -left-20 w-[500px] h-[500px] bg-indigo-500/10 blur-[120px] rounded-full" />
      </div>

      <div className="relative z-10 max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 pt-24 pb-20 lg:pt-32">
        <div className="flex flex-col lg:row gap-10 lg:gap-12 items-start lg:flex-row">
          {/* Left Column */}
          <div className="w-full lg:w-[60%]">
            <h1 className={`text-4xl sm:text-5xl lg:text-6xl font-black tracking-tighter leading-[1.1] mb-6 ${isDarkMode ? 'text-white' : 'text-slate-900'}`}>
              Expert GST <br /><span className="text-transparent bg-clip-text bg-gradient-to-r from-blue-700 via-indigo-600 to-sky-600">Consultancy & Filing</span>
            </h1>
            <p className={`text-lg sm:text-xl font-medium leading-relaxed mb-8 max-w-2xl ${isDarkMode ? 'text-slate-400' : 'text-slate-600'}`}>
              Professional and prompt GST registration, modification, and monthly filing services for food businesses. Ensure 100% compliance with government norms.
            </p>

            {/* Mobile Checkout Card & Notice Placement */}
            <div className="w-full lg:hidden mb-12">
              {renderCheckoutCard(true)}
              {renderLiveNotice(true)}
            </div>

            <div className="space-y-16 mt-12">
              <section>
                <h3 className={`text-2xl sm:text-3xl font-black mb-10 ${isDarkMode ? 'text-white' : 'text-slate-900'}`}>Documents Required</h3>
                <div className="grid grid-cols-1 sm:grid-cols-2 gap-6">
                  {[
                    { icon: FileText, title: 'Identity Proof', desc: 'PAN Card, Aadhaar Card, Photo.' },
                    { icon: FaGavel, title: 'Address Proof', desc: 'Electricity Bill/Rent Agreement.' },
                    { icon: FaCalendarCheck, title: 'Bank Proof', desc: 'Canceled check or Bank Statement.' },
                    { icon: Info, title: 'Authorization', desc: 'Board resolution or letter.' }
                  ].map((item, idx) => (
                    <div key={idx} className={`p-6 sm:p-8 rounded-2xl border transition-all ${isDarkMode ? 'bg-[#0f172a]/40 border-slate-700/50' : 'bg-white border-slate-200'}`}>
                      <item.icon size={24} className="text-blue-500 mb-4" />
                      <h4 className="font-bold mb-2">{item.title}</h4>
                      <p className="text-sm opacity-60 leading-relaxed">{item.desc}</p>
                    </div>
                  ))}
                </div>
              </section>

              <section>
                <h3 className={`text-2xl sm:text-3xl font-black mb-8 ${isDarkMode ? 'text-white' : 'text-slate-900'}`}>GST FAQs</h3>
                <div className="space-y-3">
                  {faqData.map((faq, index) => (
                    <div key={index} className={`rounded-xl border transition-all ${isDarkMode ? 'bg-[#0f172a]/40 border-slate-700/50' : 'bg-white border-slate-200'}`}>
                      <button onClick={() => setExpandedFaqIndex(expandedFaqIndex === index ? null : index)} className="w-full text-left px-5 py-4 font-bold flex items-center justify-between gap-4">
                        <span className="text-[13px] sm:text-sm">{faq.q}</span>
                        <ChevronDown size={18} className={`transition-transform ${expandedFaqIndex === index ? 'rotate-180' : ''}`} />
                      </button>
                      {expandedFaqIndex === index && <div className="px-5 pb-5 text-[13px] opacity-70 leading-relaxed">{faq.a}</div>}
                    </div>
                  ))}
                </div>
              </section>
            </div>
          </div>

          {/* Right Column */}
          <div className="w-full lg:w-[40%] xl:w-[38%] relative">
            <div className="lg:sticky lg:top-32 flex flex-col gap-6">
              {renderCheckoutCard()}
              {renderLiveNotice()}
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
          className="w-full bg-gradient-to-r from-blue-700 to-indigo-700 text-white py-3.5 rounded-xl text-sm font-bold shadow-lg shadow-blue-500/25 active:scale-[0.98] transition-all flex items-center justify-center gap-2"
        >
          Secure Your GST <span className="opacity-80 mx-1">•</span> ₹{finalPrice.toLocaleString()}
          <ChevronRight size={18} />
        </button>
      </div>
    </div>
  );
};

export default GstCoursePage;
