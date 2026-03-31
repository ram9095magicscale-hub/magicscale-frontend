import React, { useState } from 'react';
import { motion, AnimatePresence } from 'framer-motion';
import { ChevronDown, ChevronUp } from 'lucide-react';
import { useTheme } from '../../../components/context/ThemeContext';

const benefits = [
  { emoji: "🤝", title: "Trust of the Customers", desc: "Authentic communication is key to gaining customers' trust and avoiding adulterated food supply." },
  { emoji: "⚖️", title: "Legal Advantages", desc: "FSSAI Certification supports legal enforcement and smoother business setup." },
  { emoji: "💰", title: "Government Funding and Loans", desc: "Easier access to government schemes and loans for registered food businesses." },
  { emoji: "✅", title: "Use of FSSAI Logo", desc: "Build goodwill and brand trust by showcasing the official FSSAI logo." },
  { emoji: "📈", title: "Brand Value", desc: "Registration boosts brand recognition and credibility in the market." },
  { emoji: "🌐", title: "Expansion of Business", desc: "FSSAI license allows business growth across multiple locations." },
  { emoji: "🏛️", title: "Recognition by Government", desc: "Official registration builds consumer trust backed by government validation." },
  { emoji: "📜", title: "Permit for Food Business", desc: "Legal proof that your food business prioritizes customer safety." },
];

const FssaiWhatYouGet = () => {
  const { isDarkMode } = useTheme();
  const [expanded, setExpanded] = useState(false);
  const visibleItems = expanded ? benefits : benefits.slice(0, 4);

  return (
    <section className="pt-8">
      <div className="flex flex-col items-center sm:items-start mb-10 text-center sm:text-left">
        <h2 className={`text-2xl sm:text-3xl font-black tracking-tight ${isDarkMode ? 'text-white' : 'text-slate-900'}`}>
          Benefits of FoSCoS Certificate
        </h2>
        <p className={`mt-3 font-medium text-sm sm:text-base ${isDarkMode ? 'text-slate-400' : 'text-slate-500'}`}>
          Secure your status as a legally compliant food business instantly.
        </p>
      </div>

      <div className="grid grid-cols-1 sm:grid-cols-2 gap-6 w-full">
        <AnimatePresence>
          {visibleItems.map((item, idx) => (
            <motion.div
              key={idx}
              className={`flex items-start gap-4 rounded-2xl p-6 sm:p-7 border backdrop-blur-sm transition-all duration-300 hover:-translate-y-1 hover:shadow-xl ${
                isDarkMode 
                  ? 'bg-[#0f172a]/40 border-slate-700/50 hover:bg-[#0f172a]/80 hover:border-blue-500/30 hover:shadow-blue-900/10' 
                  : 'bg-white border-slate-200/80 hover:shadow-slate-200/80 hover:border-blue-200'
              }`}
              initial={{ opacity: 0, y: 30 }}
              animate={{ opacity: 1, y: 0 }}
              exit={{ opacity: 0, y: 30 }}
              transition={{ delay: idx * 0.05, duration: 0.4, type: "spring" }}
            >
              <div className="text-3xl drop-shadow-sm">{item.emoji}</div>
              <div>
                <h3 className={`font-bold text-base mb-1.5 ${isDarkMode ? 'text-white' : 'text-slate-900'}`}>
                  {item.title}
                </h3>
                <p className={`text-sm leading-relaxed font-medium ${isDarkMode ? 'text-slate-400' : 'text-slate-500'}`}>
                  {item.desc}
                </p>
              </div>
            </motion.div>
          ))}
        </AnimatePresence>
      </div>

      <div className="mt-8 flex justify-center sm:justify-start">
        <button
          onClick={() => setExpanded((prev) => !prev)}
          className={`px-6 py-2.5 rounded-xl text-[13px] font-bold border transition-all duration-300 flex items-center gap-2 shadow-sm ${
            isDarkMode
              ? 'bg-[#0f172a]/80 border-slate-700 text-blue-400 hover:bg-[#1e293b] hover:border-blue-500/30'
              : 'bg-white border-slate-200 text-blue-600 hover:bg-blue-50 hover:border-blue-200'
          }`}
        >
          {expanded ? (
            <>View Less <ChevronUp size={16} /></>
          ) : (
            <>View All Benefits <ChevronDown size={16} /></>
          )}
        </button>
      </div>
    </section>
  );
};

export default FssaiWhatYouGet;
