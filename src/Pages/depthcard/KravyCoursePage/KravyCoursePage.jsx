import React, { useState, useRef, useEffect } from 'react';
import { useNavigate } from 'react-router-dom';
import { FaStore, FaChartBar, FaQrcode, FaBoxOpen, FaCheckCircle, FaWhatsapp, FaArrowRight, FaShieldAlt, FaTabletAlt, FaPrint } from 'react-icons/fa';
import { useTheme } from '../../../components/context/ThemeContext';
import SiteFooter from '../FssaiCoursePage/SiteFooter';
import { CheckCircle2, ChevronRight, Star, ShieldCheck, ChevronDown, ChevronUp, X, FileText, Info } from 'lucide-react';

const plansList = [
  { 
    slug: 'kravy-basic', 
    label: 'Standard (1 Year)', 
    price: 3999, 
    features: ['Unlimited Invoicing', 'Basic Inventory', 'Customer Management', 'GST Ready Reports', 'Email Support'], 
    description: 'Essential POS features for small restaurants and retail shops to digitize their billing.' 
  },
  { 
    slug: 'kravy-pro', 
    label: 'Business (2 Year)', 
    price: 5999, 
    features: ['Table QR Ordering', 'Kitchen Display System (KDS)', 'Advanced Analytics', 'Loyalty Program', 'Priority Support'], 
    description: 'Full-stack automation with QR ordering and KDS to streamline your kitchen operations.' 
  },
  { 
    slug: 'kravy-enterprise', 
    label: 'Premium (3 Year)', 
    price: 7499, 
    features: ['Multi-outlet Sync', 'Raw Material Tracking', 'Automated Reordering', 'Dedicated Account Manager', '24/7 VIP Support'], 
    description: 'Complete business automation suite for scaling multi-outlet food brands.' 
  },
];

const faqData = [
  { q: "Does Kravy work without internet?", a: "Yes, Kravy features an offline-first architecture. You can continue billing even if the internet goes down, and data will sync automatically once you are back online." },
  { q: "Can I use my existing thermal printer?", a: "Kravy is compatible with most standard 2-inch and 3-inch Bluetooth, USB, and Wi-Fi thermal printers. Setting it up takes less than 2 minutes." },
  { q: "How does the QR Ordering system work?", a: "Customers scan a unique QR code at their table, browse your digital menu, and place orders directly. These orders pop up instantly on your KDS or Billing screen." },
  { q: "Is my business data secure?", a: "Absolutely. We use bank-grade encryption and automated daily cloud backups to ensure your sales, inventory, and customer data are always safe and available." },
];

const KravyCoursePage = () => {
  const navigate = useNavigate();
  const { isDarkMode } = useTheme();

  const [selectedPlan, setSelectedPlan] = useState(plansList[0]);
  const [finalPrice, setFinalPrice] = useState(plansList[0].price);
  const [expandedFaqIndex, setExpandedFaqIndex] = useState(null);

  useEffect(() => {
    window.scrollTo({ top: 0, behavior: 'smooth' });
  }, []);

  useEffect(() => {
    setFinalPrice(selectedPlan.price);
  }, [selectedPlan]);

  const handleCheckout = () => {
    const featuresString = selectedPlan.features.join(',');
    navigate(`/checkout/${selectedPlan.slug}?finalPrice=${finalPrice}&basePrice=${selectedPlan.price}&discountApplied=false&couponCode=&planName=${encodeURIComponent(selectedPlan.label)}&planFeatures=${encodeURIComponent(featuresString)}`);
  };


  const renderCheckoutCard = () => (
    <div className={`relative rounded-3xl border w-full shadow-2xl overflow-hidden backdrop-blur-xl transition-all duration-300 ${
        isDarkMode ? 'bg-[#0f172a]/90 border-emerald-500/20 shadow-emerald-900/10' : 'bg-white/95 border-emerald-100 shadow-emerald-200/50'
      }`}>
      <div className="absolute top-0 left-0 right-0 h-1.5 bg-gradient-to-r from-emerald-600 via-teal-500 to-green-400 z-30" />
      <div className={`relative h-32 sm:h-40 overflow-hidden flex flex-col items-center justify-center p-6 border-b ${isDarkMode ? 'bg-[#0b101d] border-slate-700/50' : 'bg-emerald-50/30 border-emerald-100'}`}>
        <div className="relative z-20 text-center">
            <div className="w-16 h-16 bg-emerald-500 rounded-2xl flex items-center justify-center shadow-lg shadow-emerald-500/30 mx-auto mb-3 transform -rotate-3 group-hover:rotate-0 transition-transform">
                <FaStore className="text-white text-3xl" />
            </div>
            <h3 className={`font-black tracking-widest uppercase text-[10px] ${isDarkMode ? 'text-emerald-400' : 'text-emerald-700'}`}>Kravy POS Terminal</h3>
        </div>
      </div>

      <div className="p-6">
        <div className="mb-6">
          <div className="flex items-baseline gap-2">
            <h2 className={`text-3xl sm:text-4xl font-black tracking-tight ${isDarkMode ? 'text-white' : 'text-slate-900'}`}>₹{finalPrice.toLocaleString()}</h2>
            <span className="text-xs font-bold opacity-50 uppercase tracking-widest">/ term</span>
          </div>
          <p className={`text-[11px] mt-2 font-medium ${isDarkMode ? 'text-slate-400' : 'text-slate-600'} leading-relaxed`}>{selectedPlan.description}</p>
        </div>

        <div className="space-y-4 mb-6">
          <div>
            <label className={`text-[10px] font-bold uppercase tracking-widest block mb-2 ${isDarkMode ? 'text-slate-400' : 'text-slate-500'}`}>Select Plan Term</label>
            <div className="relative">
              <select 
                value={selectedPlan.label}
                onChange={(e) => setSelectedPlan(plansList.find((p) => p.label === e.target.value))}
                className={`w-full appearance-none border px-4 py-3 rounded-xl text-xs font-bold focus:outline-none transition-all ${isDarkMode ? 'bg-[#04070d] border-slate-700 text-white focus:border-emerald-500' : 'bg-slate-50 border-slate-200 text-slate-900 focus:border-emerald-500'}`}
              >
                {plansList.map((p, i) => (<option key={i} value={p.label}>{p.label}</option>))}
              </select>
              <ChevronDown className="absolute right-4 top-1/2 -translate-y-1/2 text-slate-400 pointer-events-none" size={16} />
            </div>
          </div>
        </div>

        <ul className="space-y-3 mb-8">
          {selectedPlan.features.map((feature, idx) => (
            <li key={idx} className="flex items-start gap-3">
              <div className="mt-1 bg-emerald-500/10 p-0.5 rounded-full">
                <CheckCircle2 size={12} className="text-emerald-500 shrink-0" />
              </div>
              <span className={`text-xs font-semibold leading-tight ${isDarkMode ? 'text-slate-300' : 'text-slate-700'}`}>{feature}</span>
            </li>
          ))}
        </ul>

        <button onClick={handleCheckout} className="w-full flex items-center justify-center gap-2 bg-gradient-to-r from-emerald-600 to-teal-600 text-white py-3.5 rounded-xl text-sm font-black shadow-xl shadow-emerald-500/20 hover:shadow-emerald-500/40 hover:-translate-y-0.5 active:scale-[0.98] transition-all">
          Activate Kravy POS <ChevronRight size={18} />
        </button>
      </div>
    </div>
  );

  return (
    <div className={`min-h-screen font-poppins selection:bg-emerald-500/30 overflow-x-clip ${isDarkMode ? 'bg-[#04070d] text-slate-200' : 'bg-[#fcfdfd] text-slate-800'}`}>
      <div className="absolute top-0 inset-x-0 h-[800px] overflow-hidden pointer-events-none z-0">
        <div className="absolute -top-40 -right-40 w-[700px] h-[700px] bg-emerald-600/10 blur-[140px] rounded-full" />
        <div className="absolute top-40 -left-20 w-[600px] h-[600px] bg-teal-500/10 blur-[140px] rounded-full" />
      </div>

      <div className="relative z-10 max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 pt-24 pb-20 lg:pt-32">
        <div className="flex flex-col lg:flex-row gap-12 items-start">
          {/* Left Column */}
          <div className="w-full lg:w-[60%]">
            <div className="inline-flex items-center gap-2 px-3 py-1 rounded-full bg-emerald-500/10 border border-emerald-500/20 text-emerald-500 text-[10px] font-black uppercase tracking-widest mb-6">
              <FaShieldAlt className="text-xs" /> Next-Gen POS Ecosystem
            </div>
            
            <h1 className={`text-4xl sm:text-5xl lg:text-7xl font-black tracking-tighter leading-[1] mb-6 ${isDarkMode ? 'text-white' : 'text-slate-900'}`}>
              The Smarter Way <br /><span className="text-transparent bg-clip-text bg-gradient-to-r from-emerald-500 via-teal-400 to-green-500">To Manage Your Business.</span>
            </h1>
            
            <p className={`text-lg sm:text-xl font-medium leading-relaxed mb-12 max-w-2xl ${isDarkMode ? 'text-slate-400' : 'text-slate-600'}`}>
              Kravy is a powerful, unified billing and restaurant management platform designed to help you scale from one outlet to a national franchise.
            </p>

            {/* Mobile Checkout Card Placement */}
            <div className="w-full lg:hidden mb-12">
              {renderCheckoutCard(true)}
            </div>

            <div className="grid grid-cols-1 sm:grid-cols-2 gap-6 mb-20">
              {[
                { icon: FaChartBar, title: 'Smart Analytics', desc: 'Real-time sales reports, item-wise performance, and profit tracking.', color: 'emerald' },
                { icon: FaQrcode, title: 'QR Ordering', desc: 'Allow customers to oder from their phone. Contactless and fast.', color: 'teal' },
                { icon: FaBoxOpen, title: 'Inventory Control', desc: 'Automated stock tracking with low-inventory alerts and PO management.', color: 'green' },
                { icon: FaTabletAlt, title: 'Multi-Device', desc: 'Runs on Android, iOS, Windows, and Tablets smoothly.', color: 'emerald' }
              ].map((item, idx) => (
                <div key={idx} className={`p-8 rounded-[2rem] border transition-all hover:-translate-y-1 ${isDarkMode ? 'bg-[#0f172a]/50 border-slate-700/50' : 'bg-white border-slate-200'}`}>
                  <item.icon size={28} className={`text-${item.color}-500 mb-6`} />
                  <h4 className="text-xl font-black mb-3">{item.title}</h4>
                  <p className="text-sm font-medium opacity-60 leading-relaxed">{item.desc}</p>
                </div>
              ))}
            </div>

            <section className="mb-20">
              <h3 className={`text-3xl font-black mb-10 ${isDarkMode ? 'text-white' : 'text-slate-900'}`}>Everything You Need</h3>
              <div className="space-y-4">
                {[
                  { title: 'Tax & GST Ready', desc: 'Generate 100% compliant GST invoices and reports for easy filing.' },
                  { title: 'Kitchen Workflow (KDS)', desc: 'Digital order management for chefs to reduce errors and wait times.' },
                  { title: 'Customer Loyalty', desc: 'Built-in CRM to track preferences and run rewarding loyalty programs.' },
                  { title: 'Thermal Printing', desc: 'Support for USB, Bluetooth, and Wi-Fi thermal printers out of the box.' }
                ].map((feature, idx) => (
                  <div key={idx} className="flex gap-4 p-4 rounded-2xl hover:bg-emerald-500/5 transition-colors group">
                    <div className="w-10 h-10 rounded-full bg-emerald-500/10 flex items-center justify-center shrink-0 group-hover:bg-emerald-500 group-hover:text-white transition-all">
                      <FaCheckCircle className="text-sm" />
                    </div>
                    <div>
                      <h5 className="font-bold text-lg mb-1">{feature.title}</h5>
                      <p className="text-sm opacity-60 leading-relaxed">{feature.desc}</p>
                    </div>
                  </div>
                ))}
              </div>
            </section>

            <section>
              <h3 className={`text-3xl font-black mb-8 ${isDarkMode ? 'text-white' : 'text-slate-900'}`}>Product FAQs</h3>
              <div className="space-y-4">
                {faqData.map((faq, index) => (
                  <div key={index} className={`rounded-2xl border transition-all ${isDarkMode ? 'bg-[#0f172a]/50 border-slate-700/50' : 'bg-white border-slate-200'}`}>
                    <button onClick={() => setExpandedFaqIndex(expandedFaqIndex === index ? null : index)} className="w-full text-left px-6 py-5 font-bold flex items-center justify-between gap-4">
                      <span className="text-sm sm:text-base tracking-tight">{faq.q}</span>
                      <ChevronDown size={20} className={`transition-transform duration-300 ${expandedFaqIndex === index ? 'rotate-180 text-emerald-500' : ''}`} />
                    </button>
                    {expandedFaqIndex === index && <div className="px-6 pb-6 text-sm font-medium opacity-60 leading-relaxed max-w-2xl">{faq.a}</div>}
                  </div>
                ))}
              </div>
            </section>
          </div>

          {/* Right Column */}
          <div className="w-full lg:w-[40%] xl:w-[38%] relative">
            <div className="lg:sticky lg:top-32 flex flex-col gap-8">
              {renderCheckoutCard()}
              <div className={`p-6 rounded-3xl border ${isDarkMode ? 'bg-[#0f172a]/50 border-slate-700/50' : 'bg-slate-50 border-slate-200'}`}>
                <div className="flex items-center gap-4 mb-4">
                  <div className="w-12 h-12 bg-emerald-500 rounded-2xl flex items-center justify-center text-white text-xl">
                    <FaWhatsapp />
                  </div>
                  <div>
                    <h4 className="font-bold text-sm uppercase tracking-wider">Need a Demo?</h4>
                    <p className="text-xs opacity-60">Talk to our experts today.</p>
                  </div>
                </div>
                <a href="https://wa.me/918069029400" target="_blank" rel="noopener noreferrer" className={`w-full py-3 rounded-xl border flex items-center justify-center gap-2 text-xs font-bold transition-all ${isDarkMode ? 'border-slate-700 hover:border-emerald-500 hover:bg-emerald-500/5' : 'border-slate-200 hover:border-emerald-500 hover:bg-emerald-50'}`}>
                  Connect via WhatsApp <FaArrowRight />
                </a>
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
          className="w-full bg-gradient-to-r from-emerald-600 to-teal-600 text-white py-3.5 rounded-xl text-sm font-bold shadow-lg shadow-emerald-500/25 active:scale-[0.98] transition-all flex items-center justify-center gap-2"
        >
          Activate Kravy POS <span className="opacity-80 mx-1">•</span> ₹{finalPrice.toLocaleString()}
          <ChevronRight size={18} />
        </button>
      </div>
    </div>
  );
};

export default KravyCoursePage;
