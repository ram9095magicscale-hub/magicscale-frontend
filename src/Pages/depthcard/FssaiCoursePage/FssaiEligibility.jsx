import React, { useState } from "react";
import { motion, AnimatePresence } from "framer-motion";
import { useTheme } from "../../../components/context/ThemeContext";

const businesses = [
  { label: "Canteens", emoji: "🍽️", desc: "Corporate or hospital kitchens", details: "Canteens must register under FSSAI to ensure food served to large groups is safe." },
  { label: "Restaurants", emoji: "🍛", desc: "Fine-dine, cafes, casual", details: "Restaurants need an FSSAI license to legally serve food for public consumption." },
  { label: "Retailers", emoji: "🏬", desc: "Packaged or loose food", details: "Any food retail outlet must register before selling any type of food grocery items." },
  { label: "Storage Units", emoji: "📦", desc: "Cold storage, warehouses", details: "Storage facilities register to ensure food preservation standards are strictly met." },
  { label: "Distributors", emoji: "🚚", desc: "Food & beverages", details: "Distributors moving packaged or fresh food need FSSAI registration for traceability." },
  { label: "Suppliers", emoji: "🧺", desc: "Raw material suppliers", details: "Suppliers of ingredients must register to maintain safe supply chain integrity." },
  { label: "Clubs", emoji: "🍷", desc: "Clubs serving food", details: "Clubs that offer food or beverages must comply with FSSAI preparation rules." },
  { label: "Street Vendors", emoji: "🌯", desc: "Carts and hawkers", details: "Street vendors must register to legally serve food, even operating at small scale." },
];

const FssaiEligibility = () => {
  const { isDarkMode } = useTheme();
  const [selected, setSelected] = useState(null);

  const cardVariants = {
    hidden: { opacity: 0, y: 20 },
    visible: (i) => ({
      opacity: 1, y: 0, transition: { delay: i * 0.05, duration: 0.4, type: "spring" }
    }),
  };

  return (
    <section className="pt-6">
      <div className="flex flex-col items-center sm:items-start mb-10 text-center sm:text-left">
        <h2 className={`text-2xl sm:text-3xl font-black tracking-tight ${isDarkMode ? 'text-white' : 'text-slate-900'}`}>
          Who Needs an FSSAI License?
        </h2>
        <p className={`mt-3 font-medium text-sm sm:text-base ${isDarkMode ? 'text-slate-400' : 'text-slate-500'}`}>
          Almost every entity touching food items legally requires FSSAI compliance.
        </p>
      </div>

      <div className="grid grid-cols-2 sm:grid-cols-4 gap-4 w-full">
        {businesses.map((item, idx) => (
          <motion.div
            key={idx}
            className={`cursor-pointer p-5 rounded-2xl border backdrop-blur-sm transition-all duration-300 flex flex-col items-center justify-center hover:-translate-y-1 hover:shadow-xl ${
              isDarkMode 
                ? 'bg-[#0f172a]/40 border-slate-700/50 hover:bg-[#0f172a]/80 hover:border-blue-500/30 hover:shadow-blue-900/10' 
                : 'bg-white border-slate-200/80 hover:shadow-slate-200/80 hover:border-blue-200'
            }`}
            onClick={() => setSelected(item)}
            custom={idx}
            variants={cardVariants}
            initial="hidden"
            animate="visible"
          >
            <div className="text-3xl mb-3 drop-shadow-sm">{item.emoji}</div>
            <h3 className={`font-bold text-[13px] sm:text-sm mb-1 text-center leading-tight ${isDarkMode ? 'text-white' : 'text-slate-900'}`}>
              {item.label}
            </h3>
            <p className={`text-[10px] sm:text-[11px] text-center font-medium leading-relaxed px-1 ${isDarkMode ? 'text-slate-400' : 'text-slate-500'}`}>
              {item.desc}
            </p>
          </motion.div>
        ))}
      </div>

      <AnimatePresence>
        {selected && (
          <motion.div
            className="fixed inset-0 bg-slate-900/60 backdrop-blur-sm flex items-center justify-center z-[100] p-4"
            initial={{ opacity: 0 }}
            animate={{ opacity: 1 }}
            exit={{ opacity: 0 }}
            onClick={() => setSelected(null)}
          >
            <motion.div
              className={`rounded-2xl max-w-sm w-full p-8 relative shadow-2xl text-center border overflow-hidden ${
                isDarkMode ? 'bg-[#0f172a] border-slate-700/80' : 'bg-white border-slate-200'
              }`}
              initial={{ y: 50, scale: 0.95 }}
              animate={{ y: 0, scale: 1 }}
              exit={{ y: 50, scale: 0.95 }}
              onClick={(e) => e.stopPropagation()}
            >
              {/* Decorative top glow */}
              <div className="absolute top-0 left-0 right-0 h-1 bg-gradient-to-r from-blue-400 to-indigo-500" />
              
              <button
                className={`absolute top-4 right-4 p-1.5 rounded-full transition-colors ${isDarkMode ? 'bg-slate-800 text-slate-400 hover:text-white' : 'bg-slate-100 text-slate-500 hover:text-slate-900'}`}
                onClick={() => setSelected(null)}
              >
                &times;
              </button>
              
              <div className="text-6xl mb-4 drop-shadow-md">{selected.emoji}</div>
              <h3 className={`text-xl font-black mb-3 tracking-tight ${isDarkMode ? 'text-white' : 'text-slate-900'}`}>
                {selected.label}
              </h3>
              <p className={`text-sm font-medium leading-relaxed ${isDarkMode ? 'text-slate-400' : 'text-slate-500'}`}>
                {selected.details}
              </p>
              
              <button 
                onClick={() => setSelected(null)}
                className={`mt-6 w-full py-2.5 rounded-xl text-sm font-bold border transition-all duration-300 ${
                  isDarkMode 
                    ? 'bg-slate-800 border-slate-700 text-slate-300 hover:bg-slate-700 hover:text-white' 
                    : 'bg-slate-50 border-slate-200 text-slate-700 hover:bg-slate-100'
                }`}
              >
                Got it
              </button>
            </motion.div>
          </motion.div>
        )}
      </AnimatePresence>
    </section>
  );
};

export default FssaiEligibility;
