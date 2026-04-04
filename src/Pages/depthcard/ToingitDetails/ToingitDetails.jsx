import React, { useState, useEffect } from 'react';
import { useNavigate } from 'react-router-dom';
import { FaUtensils, FaQrcode, FaMobileAlt, FaChartLine, FaCheckCircle, FaWhatsapp, FaRocket } from 'react-icons/fa';
import { useTheme } from '../../../components/context/ThemeContext';
import SiteFooter from '../FssaiCoursePage/SiteFooter';
import { CheckCircle2, ChevronRight, Star, ShieldCheck, ChevronDown } from 'lucide-react';
import { motion, AnimatePresence } from 'framer-motion';

const features = [
  {
    title: "Smart QR Menu",
    desc: "Interactive, high-speed digital menus that allow customers to order directly from their table.",
    icon: <FaQrcode className="text-pink-500" />
  },
  {
    title: "Price Parity",
    desc: "Maintain consistent pricing across platforms while offering better deals for direct orders.",
    icon: <FaChartLine className="text-pink-500" />
  },
  {
    title: "Direct Marketing",
    desc: "Capture customer data for targeted WhatsApp marketing and repeat business.",
    icon: <FaMobileAlt className="text-pink-500" />
  }
];

const plansList = [
  { 
    slug: 'toingit-starter', 
    label: 'Starter Setup', 
    price: 999, 
    features: ['Smart QR Menu Creation', 'Menu Optimization', 'Basic Analytics', 'WhatsApp Ordering Integration', 'Table Stickers Design'], 
    description: 'Perfect for small cafes and restaurants looking to digitize their ordering process.' 
  },
  { 
    slug: 'toingit-premium', 
    label: 'Enterprise Growth', 
    price: 1499, 
    features: ['Everything in Starter Plan', 'Advanced Marketing Suite', 'Customer Loyalty Programs', 'Inventory Management', 'Priority 24/7 Support', 'Custom Domain Integration'], 
    description: 'The ultimate solution for scaling your brand and maximizing direct-to-customer revenue.' 
  },
];

const ToingitDetails = () => {
  const navigate = useNavigate();
  const { isDarkMode } = useTheme();

  const [selectedPlan, setSelectedPlan] = useState(plansList[0]);
  const [finalPrice, setFinalPrice] = useState(plansList[0].price);
  const [expandedFaqIndex, setExpandedFaqIndex] = useState(null);

  useEffect(() => {
    window.scrollTo({ top: 0, behavior: 'smooth' });
  }, []);

  const handleCheckout = () => {
    navigate(`/checkout/${selectedPlan.slug}?finalPrice=${finalPrice}`);
  };

  const renderCheckoutCard = () => (
    <motion.div 
      initial={{ opacity: 0, y: 20 }}
      animate={{ opacity: 1, y: 0 }}
      className={`relative rounded-3xl border w-full shadow-2xl overflow-hidden backdrop-blur-md transition-all duration-300 ${
        isDarkMode
          ? 'bg-slate-900/90 border-slate-800 shadow-pink-900/10'
          : 'bg-white/95 border-gray-200 shadow-gray-200/50 hover:shadow-pink-100/50'
      }`}>
      <div className="absolute top-0 left-0 right-0 h-1.5 bg-gradient-to-r from-pink-500 via-yellow-400 to-pink-600 z-30" />

      <div className={`relative h-40 flex items-center justify-center p-6 border-b ${isDarkMode ? 'bg-pink-950/20 border-slate-800' : 'bg-pink-50/50 border-gray-100'}`}>
        <div className="relative z-20 text-center">
            <FaMobileAlt className="text-pink-500 text-4xl mx-auto mb-2 drop-shadow-sm" />
            <h3 className={`font-black tracking-widest uppercase text-sm ${isDarkMode ? 'text-white' : 'text-gray-900'}`}>Go Digital Today</h3>
        </div>
        <div className="absolute top-3 left-4 z-20">
          <div className="inline-flex items-center gap-1.5 px-3 py-1 rounded-full text-[10px] font-bold uppercase tracking-wider bg-pink-500 text-white shadow-lg">
            <Star size={12} fill="white" />
            New Feature
          </div>
        </div>
      </div>

      <div className="p-6">
        <div className="mb-4">
          <h2 className={`text-3xl font-black ${isDarkMode ? 'text-white' : 'text-gray-900'}`}>
            ₹{selectedPlan.price.toLocaleString()} <span className="text-sm font-medium text-gray-500">/ setup</span>
          </h2>
          <p className={`text-xs mt-2 font-medium leading-relaxed ${isDarkMode ? 'text-slate-400' : 'text-gray-600'}`}>
            {selectedPlan.description}
          </p>
        </div>

        <div className="mb-6">
          <label className={`text-[10px] font-bold uppercase tracking-widest block mb-1.5 ${isDarkMode ? 'text-slate-400' : 'text-gray-500'}`}>Choose Your Plan</label>
          <div className="grid grid-cols-2 gap-2">
            {plansList.map((p, i) => (
              <button
                key={i}
                onClick={() => {
                  setSelectedPlan(p);
                  setFinalPrice(p.price);
                }}
                className={`px-3 py-2 rounded-xl text-[11px] font-bold transition-all border ${
                  selectedPlan.slug === p.slug
                    ? 'bg-pink-500 border-pink-500 text-white shadow-lg shadow-pink-500/30'
                    : isDarkMode ? 'bg-slate-800 border-slate-700 text-slate-300 hover:border-pink-500/50' : 'bg-gray-50 border-gray-200 text-gray-600 hover:border-pink-400'
                }`}
              >
                {p.label}
              </button>
            ))}
          </div>
        </div>

        <ul className="space-y-3 mb-8">
          {selectedPlan.features.map((feature, idx) => (
            <li key={idx} className="flex items-start gap-3">
              <CheckCircle2 size={16} className="text-pink-500 shrink-0 mt-0.5" />
              <span className={`text-xs font-semibold ${isDarkMode ? 'text-slate-300' : 'text-gray-700'}`}>{feature}</span>
            </li>
          ))}
        </ul>

        <button
          onClick={handleCheckout}
          className="w-full flex items-center justify-center gap-2 bg-gradient-to-r from-pink-500 to-pink-600 text-white py-3 rounded-2xl text-sm font-bold shadow-xl shadow-pink-500/25 hover:shadow-pink-500/40 hover:-translate-y-0.5 transition-all duration-300"
        >
          Scale Direct Orders
          <ChevronRight size={16} />
        </button>
      </div>
    </motion.div>
  );

  return (
    <div className={`min-h-screen font-[Poppins] selection:bg-pink-500/30 overflow-x-clip ${isDarkMode ? 'bg-slate-950 text-slate-200' : 'bg-[#FFF9E6]/20 text-gray-800'}`}>
      
      {/* Decorative Elements */}
      <div className="absolute top-0 inset-x-0 h-[600px] pointer-events-none overflow-hidden">
        <motion.div 
          animate={{ scale: [1, 1.2, 1], opacity: [0.3, 0.5, 0.3] }}
          transition={{ duration: 10, repeat: Infinity }}
          className="absolute -top-40 -right-40 w-96 h-96 bg-pink-500/10 blur-[120px] rounded-full" 
        />
        <motion.div 
          animate={{ scale: [1.2, 1, 1.2], opacity: [0.3, 0.5, 0.3] }}
          transition={{ duration: 12, repeat: Infinity }}
          className="absolute top-20 -left-20 w-96 h-96 bg-yellow-400/10 blur-[120px] rounded-full" 
        />
      </div>

      <div className="relative z-10 max-w-7xl mx-auto px-6 py-24 sm:py-32">
        <div className="flex flex-col lg:flex-row gap-16 items-start">
          
          {/* Left Content */}
          <div className="w-full lg:w-[60%]">
            <motion.div 
              initial={{ opacity: 0, x: -20 }}
              animate={{ opacity: 1, x: 0 }}
              className="flex items-center gap-2 text-[10px] font-bold uppercase tracking-[0.2em] mb-8 text-pink-500"
            >
              <span onClick={() => navigate('/services')} className="cursor-pointer hover:underline">Services</span>
              <ChevronRight size={12} />
              <span>Toingit Integration</span>
            </motion.div>

            <motion.h1 
              initial={{ opacity: 0, y: 20 }}
              animate={{ opacity: 1, y: 0 }}
              transition={{ delay: 0.2 }}
              className={`text-5xl sm:text-7xl font-black leading-[1.05] tracking-tight mb-8 ${isDarkMode ? 'text-white' : 'text-gray-900'}`}
            >
              Master Your <span className="text-transparent bg-clip-text bg-gradient-to-r from-pink-500 to-yellow-500">Direct Revenue</span> with Toingit
            </motion.h1>

            <motion.p 
              initial={{ opacity: 0, y: 20 }}
              animate={{ opacity: 1, y: 0 }}
              transition={{ delay: 0.3 }}
              className={`text-lg font-medium leading-relaxed mb-12 max-w-xl ${isDarkMode ? 'text-slate-400' : 'text-gray-600'}`}
            >
              Seamlessly integrate your restaurant with the Toingit ecosystem. Bypass high aggregator commissions and build direct relationships with your customers.
            </motion.p>

            {/* Mobile Checkout Card Placement */}
            <div className="w-full lg:hidden mb-12">
              {renderCheckoutCard(true)}
            </div>

            <div className="grid sm:grid-cols-3 gap-6 mb-16">
              {features.map((f, i) => (
                <motion.div 
                  initial={{ opacity: 0, y: 20 }}
                  animate={{ opacity: 1, y: 0 }}
                  transition={{ delay: 0.4 + (i * 0.1) }}
                  key={i} 
                  className={`p-6 rounded-[2rem] border transition-all ${isDarkMode ? 'bg-slate-900/50 border-slate-800 hover:border-pink-500/30' : 'bg-white border-gray-100 hover:shadow-xl'}`}
                >
                  <div className="w-12 h-12 rounded-2xl bg-pink-500/10 flex items-center justify-center text-2xl mb-4">
                    {f.icon}
                  </div>
                  <h4 className={`text-base font-bold mb-2 ${isDarkMode ? 'text-white' : 'text-gray-900'}`}>{f.title}</h4>
                  <p className={`text-xs font-medium leading-relaxed ${isDarkMode ? 'text-slate-400' : 'text-gray-600'}`}>{f.desc}</p>
                </motion.div>
              ))}
            </div>

            <section className="space-y-12">
               <div>
                  <h3 className={`text-3xl font-black mb-6 ${isDarkMode ? 'text-white' : 'text-gray-900'}`}>Why Toingit?</h3>
                  <div className="grid gap-4">
                    {[
                       { t: "Revenue Control", d: "Increase your profit margins by up to 25% by shifting orders from aggregators to your direct channel." },
                       { t: "Customer Ownership", d: "Own your data. Build a WhatsApp list of loyal customers who order from you every week." },
                       { t: "Offline Parity", d: "Say goodbye to 'Aggregator Inflation'. Offer customers your real restaurant prices without losing money." }
                    ].map((item, i) => (
                      <motion.div 
                        initial={{ opacity: 0, x: -20 }}
                        whileInView={{ opacity: 1, x: 0 }}
                        viewport={{ once: true }}
                        key={i} 
                        className={`flex items-start gap-4 p-5 rounded-2xl border ${isDarkMode ? 'bg-slate-900/30 border-slate-800' : 'bg-pink-50/20 border-pink-100'}`}
                      >
                        <div className="mt-1"><FaRocket size={20} className="text-pink-500" /></div>
                        <div>
                          <h5 className={`font-bold ${isDarkMode ? 'text-white' : 'text-gray-900'}`}>{item.t}</h5>
                          <p className={`text-xs mt-1 font-medium ${isDarkMode ? 'text-slate-400' : 'text-gray-600'}`}>{item.d}</p>
                        </div>
                      </motion.div>
                    ))}
                  </div>
               </div>
            </section>
          </div>

          {/* Right Sidebar */}
          <div className="w-full lg:w-[40%] sticky top-32">
            {renderCheckoutCard()}
            
            <motion.div 
              initial={{ opacity: 0, scale: 0.9 }}
              animate={{ opacity: 1, scale: 1 }}
              transition={{ delay: 0.5 }}
              className={`mt-8 p-6 rounded-3xl border flex items-center gap-4 ${isDarkMode ? 'bg-slate-900/50 border-slate-800' : 'bg-white border-gray-100'}`}
            >
               <div className="w-10 h-10 rounded-full bg-emerald-500 text-white flex items-center justify-center text-xl">
                 <FaWhatsapp />
               </div>
               <div>
                 <p className={`text-xs font-bold ${isDarkMode ? 'text-white' : 'text-gray-900'}`}>Need Help?</p>
                 <p className={`text-[10px] font-medium ${isDarkMode ? 'text-slate-400' : 'text-gray-500'}`}>Speak to our integration experts</p>
               </div>
               <a href="https://wa.me/918069029400" target="_blank" rel="noopener noreferrer" className="ml-auto text-xs font-bold text-emerald-500 hover:underline">Chat Now</a>
            </motion.div>
          </div>
        </div>
      </div>
      
      <SiteFooter />

      {/* Floating Bottom Bar CTA for Mobile */}
      <div className={`fixed bottom-0 left-0 right-0 p-4 lg:hidden z-50 border-t backdrop-blur-xl transition-all duration-300 ${isDarkMode ? 'bg-[#0b101d]/90 border-slate-800' : 'bg-white/95 border-slate-200 shadow-[0_-4px_25px_-4px_rgba(0,0,0,0.1)]'
        }`}>
        <button
          onClick={handleCheckout}
          className="w-full bg-gradient-to-r from-pink-500 to-pink-600 text-white py-3.5 rounded-xl text-sm font-bold shadow-lg shadow-pink-500/25 active:scale-[0.98] transition-all flex items-center justify-center gap-2"
        >
          Scale Direct Orders <span className="opacity-80 mx-1">•</span> ₹{finalPrice.toLocaleString()}
          <ChevronRight size={18} />
        </button>
      </div>
    </div>
  );
};

export default ToingitDetails;
