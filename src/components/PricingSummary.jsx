import React, { useState } from "react";
import { Check, X, Zap, Crown, ArrowRight } from "lucide-react";
import { useNavigate } from "react-router-dom";
import { motion } from "framer-motion";
import { companyDetails } from "../data/companyDetails";

const planFeatures = [
  "Menu Score Update",
  "Dedicated Account Manager",
  "Menu Optimization",
  "Profile Enhancement",
  "Zomato & Swiggy Ads",
];

const basicPlanFeatures = [
  true, true, true, false, false,
];

const premiumPlanFeatures = [
  true, true, true, true, true,
];

const PricingSummary = () => {
  const navigate = useNavigate();
  const [durations, setDurations] = useState({ basic: 1, premium: 1 });

  const prices = {
    basic: 8499,
    premium: 11999,
  };

  const handleMoreInfo = () => {
    navigate(`/pricing`);
    window.scrollTo(0, 0);
  };

  return (
    <div id="pricing" className="relative pt-24 pb-32 px-6 sm:px-12 lg:px-24 bg-transparent overflow-hidden font-poppins transition-colors duration-500">
      {/* Background blobs */}
      <div className="absolute inset-0 z-0 pointer-events-none">
        <div className="absolute top-0 left-1/2 w-[800px] h-[800px] bg-indigo-50/80 dark:bg-indigo-900/10 rounded-full blur-[120px] -translate-x-1/2 -translate-y-1/2"></div>
        <div className="absolute bottom-0 right-0 w-[600px] h-[600px] bg-sky-50/60 dark:bg-sky-900/10 rounded-full blur-[100px] translate-y-1/3 translate-x-1/3"></div>
      </div>

      <div className="relative z-10 max-w-7xl mx-auto">
        <div className="text-center mb-20 space-y-4">
          <div className="inline-block px-4 py-1.5 rounded-full bg-indigo-50 dark:bg-indigo-900/30 border border-indigo-100 dark:border-indigo-800 text-indigo-600 dark:text-indigo-400 text-xs font-bold uppercase tracking-widest">
            Pricing Plans
          </div>
          <h2 className="text-5xl md:text-6xl font-extrabold text-gray-900 dark:text-white leading-tight">
            Choose Your <span className="text-transparent bg-clip-text bg-gradient-to-r from-indigo-600 to-sky-600 dark:from-indigo-400 dark:to-sky-400">Growth Plan</span>
          </h2>
          <p className="text-lg md:text-xl text-gray-600 dark:text-gray-400 max-w-2xl mx-auto leading-relaxed mt-6">
            Supercharge your restaurant's online visibility and performance on <span className="font-bold text-red-500">Zomato</span> & <span className="font-bold text-orange-500">Swiggy</span>.
          </p>
        </div>

        <div className="grid lg:grid-cols-2 gap-10 max-w-5xl mx-auto">
          {["Basic", "Premium"].map((planType, i) => {
            const planKey = planType.toLowerCase();
            const duration = durations[planKey];
            const isPremium = planType === "Premium";
            
            return (
              <motion.div
                key={planType}
                initial={{ opacity: 0, y: 30 }}
                whileInView={{ opacity: 1, y: 0 }}
                transition={{ duration: 0.8, delay: i * 0.2 }}
                viewport={{ once: true }}
                className={`relative rounded-3xl p-6 md:p-8 transition-all duration-500 ${isPremium ? 'bg-indigo-950 text-white shadow-2xl shadow-indigo-900/30 border border-indigo-800 lg:scale-[1.02] z-10' : 'bg-white dark:bg-slate-900 border border-gray-100 dark:border-slate-800 shadow-lg shadow-gray-200/50 dark:shadow-none z-0 hover:border-indigo-200 dark:hover:border-indigo-800'}`}
              >
                {isPremium && (
                  <div className="absolute top-0 right-0 w-48 h-48 bg-indigo-500/20 rounded-full blur-3xl -translate-y-1/2 translate-x-1/2 pointer-events-none"></div>
                )}
    
                {isPremium && (
                  <div className="absolute -top-4 left-1/2 -translate-x-1/2 bg-gradient-to-r from-indigo-500 to-sky-500 text-white text-[10px] font-black uppercase tracking-widest px-4 py-1.5 rounded-full shadow-md flex items-center gap-1.5">
                    <Crown size={12} /> Most Popular
                  </div>
                )}

                <div className="space-y-4 mt-2">
                  <div>
                    <h3 className={`text-xl font-black mb-1 ${isPremium ? 'text-white' : 'text-gray-900 dark:text-white'}`}>
                      {planType}
                    </h3>
                    <p className={`text-xs ${isPremium ? 'text-indigo-200' : 'text-gray-500 dark:text-gray-400'}`}>
                      {isPremium ? 'Everything to dominate.' : 'Perfect for getting started.'}
                    </p>
                  </div>

                  <div className="flex items-center justify-between gap-4">
                    <div className="flex items-baseline gap-1.5 min-w-fit">
                      <span className={`text-4xl font-black ${isPremium ? 'text-white' : 'text-gray-900 dark:text-white'}`}>
                        ₹{prices[planKey].toLocaleString()}
                      </span>
                      <span className={`text-sm font-medium ${isPremium ? 'text-indigo-300' : 'text-gray-500 dark:text-gray-400'}`}>
                        /month
                      </span>
                    </div>

                    {duration > 1 && (
                      <div className="flex flex-col items-end animate-in fade-in slide-in-from-right-2 duration-500">
                        <span className={`text-[9px] font-black uppercase tracking-widest leading-none mb-1 ${isPremium ? 'text-indigo-400' : 'text-gray-400'}`}>
                          Total Billed
                        </span>
                        <span className={`text-2xl font-black tabular-nums transition-colors duration-300 ${isPremium ? 'text-sky-400' : 'text-indigo-600 dark:text-indigo-400'}`}>
                          ₹{(prices[planKey] * duration).toLocaleString("en-IN")}
                        </span>
                      </div>
                    )}
                  </div>

                  <div className="space-y-3 pt-3 border-t border-dashed border-gray-200 dark:border-slate-700">
                    <label className={`block text-[10px] font-bold uppercase tracking-widest ${isPremium ? 'text-indigo-300' : 'text-gray-500 dark:text-gray-400'}`}>
                      Subscription Duration
                    </label>
                    <div className={`flex gap-1 p-1 rounded-xl justify-center ${isPremium ? 'bg-indigo-900/50' : 'bg-gray-50 dark:bg-slate-800/50'}`}>
                      {[1, 3, 6, 12].map((m) => {
                        const isSelected = durations[planKey] === m;
                        return (
                          <button
                            key={m}
                            onClick={() => setDurations({ ...durations, [planKey]: m })}
                            className={`flex-1 py-1.5 rounded-lg text-xs font-bold transition-all duration-300 ${isSelected ? (isPremium ? 'bg-indigo-500 text-white shadow-sm' : 'bg-indigo-600 text-white shadow-sm') : (isPremium ? 'text-indigo-200 hover:text-white hover:bg-white/10' : 'text-gray-600 dark:text-gray-400 hover:text-gray-900 hover:bg-gray-200 dark:hover:bg-slate-700/50 dark:hover:text-white')}`}
                          >
                            {m} <span className="font-medium text-[10px] opacity-80">mo</span>
                          </button>
                        )
                      })}
                    </div>

                  </div>
                  
                  <div className={`pt-4 border-t border-dashed ${isPremium ? 'border-indigo-800/50' : 'border-gray-200 dark:border-slate-800'} space-y-2.5`}>
                    {planFeatures.map((feature, idx) => {
                      const value = isPremium ? premiumPlanFeatures[idx] : basicPlanFeatures[idx];
                      const isString = typeof value === "string";
                      const isIncluded = isString || value === true;
                      
                      return (
                        <div key={idx} className={`flex items-start gap-3 ${isIncluded ? 'opacity-100' : 'opacity-40'}`}>
                           <div className={`mt-0.5 shrink-0 ${isIncluded ? (isPremium ? 'text-sky-400' : 'text-indigo-600 dark:text-indigo-400') : 'text-gray-400'}`}>
                             {isIncluded && !isString ? <Check size={16} /> : (!isString ? <X size={16} /> : 
                              <div className={`text-[9px] font-black uppercase px-1.5 py-0.5 rounded-full ${isPremium ? 'bg-sky-500/20 text-sky-300' : 'bg-indigo-100 dark:bg-indigo-900/50 text-indigo-600 dark:text-indigo-300'}`}>
                                {value}
                              </div>)}
                           </div>
                           <span className={`text-xs font-medium ${isPremium ? 'text-indigo-50' : 'text-gray-700 dark:text-gray-300'}`}>
                             {feature}
                           </span>
                        </div>
                      );
                    })}
                  </div>

                  {/* Redesigned Button for Summary */}
                  <button
                    onClick={handleMoreInfo}
                    className={`w-full py-4 rounded-xl text-sm font-bold flex items-center justify-center gap-2 transition-all duration-300 mt-4 ${isPremium ? 'bg-white text-indigo-950 hover:bg-gray-50 shadow-lg shadow-white/10 hover:-translate-y-1' : 'bg-indigo-50 dark:bg-indigo-900/30 text-indigo-600 dark:text-indigo-400 hover:bg-indigo-600 hover:text-white hover:-translate-y-1'}`}
                  >
                    View Full Details <ArrowRight size={16} />
                  </button>

                </div>
              </motion.div>
            );
          })}
        </div>
      </div>
    </div>
  );
};

export default PricingSummary;
