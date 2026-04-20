import React, { useState, useEffect } from 'react';
import { useNavigate } from 'react-router-dom';
import { FaCamera, FaDownload, FaStar, FaCheckCircle, FaWhatsapp, FaArrowRight, FaImage, FaCloudDownloadAlt, FaFileSignature } from 'react-icons/fa';
import { useTheme } from '../../../components/context/ThemeContext';
import SiteFooter from '../FssaiCoursePage/SiteFooter';
import { CheckCircle2, ChevronRight, ChevronDown, Camera, Sparkles, Wand2 } from 'lucide-react';

const plansList = [
  { 
    slug: 'foodsnap-trial', 
    label: 'Trial Pack', 
    price: 249, 
    features: ['15 High-Res Downloads', 'Basic Dish Categories', 'Standard Support', 'Zomato/Swiggy Ready'], 
    description: 'Perfect for new restaurants looking to test the quality of our premium food library.' 
  },
  { 
    slug: 'foodsnap-basic', 
    label: 'Growth Pack', 
    price: 499, 
    features: ['40 High-Res Downloads', 'Access to Trending Packs', 'Priority Downloading', 'Unlimited License'], 
    description: 'Ideal for growing food brands that need a steady stream of high-quality visuals.' 
  },
  { 
    slug: 'foodsnap-pro', 
    label: 'Premium Pack', 
    price: 999, 
    features: ['100+ High-Res Downloads', 'Entire Image Library', 'Priority Dish Requests', 'VIP Content Support', 'Commercial License'], 
    description: 'The ultimate solution for professional food brands and marketing agencies.' 
  },
];

const faqData = [
  { q: "Are these photos really guaranteed to be approved?", a: "Yes. Every image in our library is shot and edited following the strict lighting, background, and composition guidelines of Zomato and Swiggy. If any image is rejected, we provide a replacement for free." },
  { q: "Can I use these photos on social media?", a: "Absolutely. Once you download an image, you have a perpetual license to use it across your website, menus, Instagram, Facebook, and advertising campaigns." },
  { q: "What if I can't find a specific dish?", a: "Our library is updated weekly. Pro members can also make priority requests for specific dishes, and our photography team will prioritize adding them to the collection." },
  { q: "What is the resolution of the images?", a: "All images are provided in high-resolution (300 DPI) JPEG format, optimized for both digital viewing and physical menu printing." },
];

const FoodsnapCoursePage = () => {
  const navigate = useNavigate();
  const { isDarkMode } = useTheme();

  const [selectedPlan, setSelectedPlan] = useState(plansList[0]);
  const [expandedFaqIndex, setExpandedFaqIndex] = useState(null);

  useEffect(() => {
    window.scrollTo({ top: 0, behavior: 'smooth' });
  }, []);

  const handleCheckout = () => {
    navigate(`/checkout/${selectedPlan.slug}?finalPrice=${selectedPlan.price}&basePrice=${selectedPlan.price}`);
  };

  const renderCheckoutCard = () => (
    <div className={`relative rounded-3xl border w-full shadow-2xl overflow-hidden backdrop-blur-xl transition-all duration-300 ${
        isDarkMode ? 'bg-[#1e1b4b]/80 border-indigo-500/20 shadow-indigo-900/10' : 'bg-white/95 border-indigo-100 shadow-indigo-200/50'
      }`}>
      <div className="absolute top-0 left-0 right-0 h-1.5 bg-gradient-to-r from-indigo-600 via-purple-500 to-pink-500 z-30" />
      <div className={`relative h-32 sm:h-40 overflow-hidden flex flex-col items-center justify-center p-6 border-b ${isDarkMode ? 'bg-[#111033] border-indigo-900/50' : 'bg-indigo-50/30 border-indigo-100'}`}>
        <div className="relative z-20 text-center">
            <div className="w-16 h-16 bg-gradient-to-br from-indigo-500 to-purple-600 rounded-2xl flex items-center justify-center shadow-lg shadow-indigo-500/30 mx-auto mb-3 transform rotate-3 group-hover:rotate-0 transition-transform">
                <FaCamera className="text-white text-3xl" />
            </div>
            <h3 className={`font-black tracking-widest uppercase text-[10px] ${isDarkMode ? 'text-indigo-400' : 'text-indigo-700'}`}>FoodSnap Library</h3>
        </div>
      </div>

      <div className="p-6">
        <div className="mb-6 text-center">
          <div className="flex items-center justify-center gap-1 mb-2">
            {[1, 2, 3, 4, 5].map(i => <FaStar key={i} size={10} className="text-amber-400" />)}
          </div>
          <div className="flex items-baseline justify-center gap-2">
            <h2 className={`text-3xl sm:text-4xl font-black tracking-tight ${isDarkMode ? 'text-white' : 'text-slate-900'}`}>₹{selectedPlan.price}</h2>
            <span className="text-xs font-bold opacity-50 uppercase tracking-widest">/ pack</span>
          </div>
          <p className={`text-[11px] mt-2 font-medium ${isDarkMode ? 'text-slate-400' : 'text-slate-600'} leading-relaxed`}>{selectedPlan.description}</p>
        </div>

        <div className="grid grid-cols-1 gap-3 mb-6">
          {plansList.map((p, i) => (
            <button 
              key={i} 
              onClick={() => setSelectedPlan(p)}
              className={`text-left px-4 py-3 rounded-xl border-2 transition-all ${selectedPlan.label === p.label ? 'border-indigo-500 bg-indigo-500/5' : 'border-transparent bg-slate-500/5'}`}
            >
              <div className="flex justify-between items-center mb-0.5">
                <span className={`text-xs font-black ${isDarkMode ? 'text-white' : 'text-slate-900'}`}>{p.label}</span>
                <span className={`text-[10px] font-bold ${isDarkMode ? 'text-indigo-400' : 'text-indigo-600'}`}>₹{p.price}</span>
              </div>
              <p className="text-[10px] opacity-60 font-medium">{p.features[0]}</p>
            </button>
          ))}
        </div>

        <button onClick={handleCheckout} className="w-full flex items-center justify-center gap-2 bg-gradient-to-r from-indigo-600 to-purple-600 text-white py-3.5 rounded-xl text-sm font-black shadow-xl shadow-indigo-500/20 hover:shadow-indigo-500/40 hover:-translate-y-0.5 active:scale-[0.98] transition-all">
          Download Your Pack <ChevronRight size={18} />
        </button>
      </div>
    </div>
  );

  return (
    <div className={`min-h-screen font-poppins selection:bg-indigo-500/30 overflow-x-clip ${isDarkMode ? 'bg-[#04070d] text-slate-200' : 'bg-[#fcfdff] text-slate-800'}`}>
      <div className="absolute top-0 inset-x-0 h-[800px] overflow-hidden pointer-events-none z-0">
        <div className="absolute -top-40 -right-40 w-[700px] h-[700px] bg-indigo-600/10 blur-[140px] rounded-full" />
        <div className="absolute top-40 -left-20 w-[600px] h-[600px] bg-purple-500/10 blur-[140px] rounded-full" />
      </div>

      <div className="relative z-10 max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 pt-24 pb-20 lg:pt-32">
        <div className="flex flex-col lg:flex-row gap-12 items-start">
          {/* Left Column */}
          <div className="w-full lg:w-[60%]">
            <div className="inline-flex items-center gap-2 px-3 py-1 rounded-full bg-indigo-500/10 border border-indigo-500/20 text-indigo-500 text-[10px] font-black uppercase tracking-widest mb-6 split-text-container">
              <Sparkles size={12} /> Zomato & Swiggy Approved Library
            </div>
            
            <h1 className={`text-4xl sm:text-5xl lg:text-7xl font-black tracking-tighter leading-[1] mb-6 ${isDarkMode ? 'text-white' : 'text-slate-900'}`}>
              High-Quality Food Photos <br /><span className="text-transparent bg-clip-text bg-gradient-to-r from-indigo-500 via-purple-500 to-pink-500">That Actually Sell.</span>
            </h1>
            
            <p className={`text-lg sm:text-xl font-medium leading-relaxed mb-12 max-w-2xl ${isDarkMode ? 'text-slate-400' : 'text-slate-600'}`}>
              Access India's largest library of food photography curated specifically for high-conversion restaurant listings.
            </p>

            <div className="grid grid-cols-1 sm:grid-cols-2 gap-8 mb-20">
              <div className={`group p-8 rounded-[2.5rem] border transition-all hover:bg-gradient-to-br hover:from-indigo-600 hover:to-purple-700 hover:text-white ${isDarkMode ? 'bg-[#0f172a]/50 border-slate-700/50' : 'bg-white border-slate-200'}`}>
                <div className="w-14 h-14 rounded-2xl bg-indigo-500/10 flex items-center justify-center text-indigo-500 mb-6 group-hover:bg-white/20 group-hover:text-white transition-all">
                  <Camera size={28} />
                </div>
                <h4 className="text-2xl font-black mb-3 italic tracking-tight uppercase">Perfect Lighting</h4>
                <p className="text-sm font-medium opacity-60 leading-relaxed group-hover:opacity-90">Studio-grade lighting that makes every dish look appetizing and fresh.</p>
              </div>
              <div className={`group p-8 rounded-[2.5rem] border transition-all hover:bg-gradient-to-br hover:from-purple-600 hover:to-pink-600 hover:text-white ${isDarkMode ? 'bg-[#0f172a]/50 border-slate-700/50' : 'bg-white border-slate-200'}`}>
                <div className="w-14 h-14 rounded-2xl bg-purple-500/10 flex items-center justify-center text-purple-500 mb-6 group-hover:bg-white/20 group-hover:text-white transition-all">
                  <Wand2 size={28} />
                </div>
                <h4 className="text-2xl font-black mb-3 italic tracking-tight uppercase">Platform Ready</h4>
                <p className="text-sm font-medium opacity-60 leading-relaxed group-hover:opacity-90">Pre-edited to meet Zomato & Swiggy aspects ratios and background rules.</p>
              </div>
            </div>

            <section className="mb-20">
              <h3 className={`text-3xl font-black mb-10 ${isDarkMode ? 'text-white' : 'text-slate-900'}`}>The FoodSnap Advantage</h3>
              <div className="grid grid-cols-1 sm:grid-cols-2 gap-x-12 gap-y-8">
                {[
                  { icon: FaCloudDownloadAlt, title: 'Instant Downloads', desc: 'Get access to your images immediately after purchase.' },
                  { icon: FaImage, title: '10,000+ Dishes', desc: 'From North Indian to Continental, we have every dish covered.' },
                  { icon: FaFileSignature, title: 'Lifetime License', desc: 'Use them anywhere without worrying about copyright.' },
                  { icon: FaStar, title: 'High Conversion', desc: 'Professional photos increase order rates by up to 40%.' }
                ].map((item, idx) => (
                  <div key={idx} className="flex gap-4">
                    <div className="mt-1 bg-indigo-500/10 p-2 rounded-xl">
                      <item.icon className="text-indigo-500" />
                    </div>
                    <div>
                      <h5 className="font-bold text-lg mb-1">{item.title}</h5>
                      <p className="text-sm opacity-60 leading-relaxed">{item.desc}</p>
                    </div>
                  </div>
                ))}
              </div>
            </section>

            <section>
              <h3 className={`text-3xl font-black mb-8 ${isDarkMode ? 'text-white' : 'text-slate-900'}`}>Common Questions</h3>
              <div className="space-y-4">
                {faqData.map((faq, index) => (
                  <div key={index} className={`rounded-2xl border transition-all ${isDarkMode ? 'bg-[#0f172a]/50 border-slate-700/50' : 'bg-white border-slate-200'}`}>
                    <button onClick={() => setExpandedFaqIndex(expandedFaqIndex === index ? null : index)} className="w-full text-left px-6 py-5 font-bold flex items-center justify-between gap-4 group">
                      <span className="text-sm sm:text-base tracking-tight group-hover:text-indigo-500 transition-colors">{faq.q}</span>
                      <ChevronDown size={20} className={`transition-transform duration-300 ${expandedFaqIndex === index ? 'rotate-180 text-indigo-500' : ''}`} />
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
              <div className={`p-6 rounded-3xl border ${isDarkMode ? 'bg-indigo-500/5 border-indigo-500/20 shadow-inner overflow-hidden relative' : 'bg-slate-50 border-slate-200'}`}>
                <div className="relative z-10">
                   <h4 className="font-black text-sm uppercase tracking-wider mb-2">Request Custom Photos?</h4>
                   <p className="text-xs opacity-60 mb-5">Can't find what you need? Our studio team is ready for custom shoots.</p>
                   <a href="https://wa.me/918069029400" target="_blank" rel="noopener noreferrer" className="inline-flex items-center gap-2 bg-indigo-600 text-white px-6 py-2.5 rounded-full text-xs font-bold hover:bg-indigo-700 transition-all">
                     Talk to Studio <ChevronRight size={14} />
                   </a>
                </div>
                <FaCamera className="absolute -bottom-4 -right-4 text-9xl opacity-5 text-indigo-500" />
              </div>
            </div>
          </div>
        </div>
      </div>
      <SiteFooter />
    </div>
  );
};

export default FoodsnapCoursePage;
