import React, { useState } from "react";
import { Check, X, Zap, Crown, ArrowRight } from "lucide-react";
import { useNavigate } from "react-router-dom";
import { motion } from "framer-motion";
import { companyDetails } from "../data/companyDetails";

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

const basicPlanFeatures = [
  true, true, true, "Standard", true, true, true, true, true, false, true, false,
  true, false, false, false, false, false, true, true, false, true, false
];

const premiumPlanFeatures = [
  true, true, true, "Fast", true, true, true, true, true, true, true, true,
  true, true, true, true, true, true, true, true, true, true, true
];

const Pricing = () => {
  const navigate = useNavigate();
  const [durations, setDurations] = useState({ basic: 1, premium: 1 });

  const prices = {
    basic: 7999,
    premium: 9999,
  };

  const handleStart = (planSlug, months) => {
    // Redirect to Growth Course page as requested
    navigate("/course/growth");
  };


  return (
    <div id="pricing" className="relative pt-24 pb-32 px-6 sm:px-12 lg:px-24 bg-white dark:bg-slate-950 overflow-hidden font-poppins transition-colors duration-500">
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
                className={`relative rounded-[2.5rem] p-8 md:p-12 transition-all duration-500 ${isPremium ? 'bg-indigo-950 text-white shadow-2xl shadow-indigo-900/30 border border-indigo-800 scale-105 z-10' : 'bg-white dark:bg-slate-900 border border-gray-100 dark:border-slate-800 shadow-xl shadow-gray-200/50 dark:shadow-none z-0 hover:border-indigo-200 dark:hover:border-indigo-800'}`}
              >
                {isPremium && (
                  <div className="absolute top-0 right-0 w-64 h-64 bg-indigo-500/20 rounded-full blur-3xl -translate-y-1/2 translate-x-1/2 pointer-events-none"></div>
                )}
    
                {isPremium && (
                  <div className="absolute -top-5 left-1/2 -translate-x-1/2 bg-gradient-to-r from-indigo-500 to-sky-500 text-white text-xs font-black uppercase tracking-widest px-6 py-2 rounded-full shadow-lg flex items-center gap-2">
                    <Crown size={14} /> Most Popular
                  </div>
                )}

                <div className="space-y-6">
                  <div>
                    <h3 className={`text-2xl font-black mb-2 ${isPremium ? 'text-white' : 'text-gray-900 dark:text-white'}`}>
                      {planType}
                    </h3>
                    <p className={`text-sm ${isPremium ? 'text-indigo-200' : 'text-gray-500 dark:text-gray-400'}`}>
                      {isPremium ? 'Everything you need to dominate the market.' : 'Perfect for getting started on platforms.'}
                    </p>
                  </div>

                  <div className="flex items-baseline gap-2">
                    <span className={`text-5xl font-black ${isPremium ? 'text-white' : 'text-gray-900 dark:text-white'}`}>
                      ₹{prices[planKey].toLocaleString()}
                    </span>
                    <span className={`text-lg font-medium ${isPremium ? 'text-indigo-300' : 'text-gray-500 dark:text-gray-400'}`}>
                      /month
                    </span>
                  </div>

                  <div className="space-y-4 pt-4 border-t border-dashed border-gray-200 dark:border-slate-700">
                    <label className={`block text-xs font-bold uppercase tracking-widest ${isPremium ? 'text-indigo-300' : 'text-gray-500 dark:text-gray-400'}`}>
                      Subscription Duration
                    </label>
                    <div className={`flex gap-2 p-1.5 rounded-2xl justify-center ${isPremium ? 'bg-indigo-900/50' : 'bg-gray-50 dark:bg-slate-800/50'}`}>
                      {[1, 3, 6, 12].map((m) => {
                        const isSelected = durations[planKey] === m;
                        return (
                          <button
                            key={m}
                            onClick={() => setDurations({ ...durations, [planKey]: m })}
                            className={`flex-1 py-3 rounded-xl text-sm font-bold transition-all duration-300 ${isSelected ? (isPremium ? 'bg-indigo-500 text-white shadow-md' : 'bg-indigo-600 text-white shadow-md') : (isPremium ? 'text-indigo-200 hover:text-white hover:bg-white/10' : 'text-gray-600 dark:text-gray-400 hover:text-gray-900 hover:bg-gray-200 dark:hover:bg-slate-700/50 dark:hover:text-white')}`}
                          >
                            {m} <span className="font-medium text-xs opacity-80">mo</span>
                          </button>
                        )
                      })}
                    </div>
                    <div className={`flex justify-between items-center py-4 px-6 rounded-2xl border ${isPremium ? 'bg-indigo-900/30 border-indigo-800' : 'bg-gray-50 border-gray-100 dark:bg-slate-800/50 dark:border-slate-700'}`}>
                       <span className={`font-bold ${isPremium ? 'text-indigo-200' : 'text-gray-500 dark:text-gray-400'}`}>Total Billed</span>
                       <span className={`text-2xl font-black ${isPremium ? 'text-white' : 'text-indigo-600 dark:text-indigo-400'}`}>
                         ₹{(prices[planKey] * duration).toLocaleString("en-IN")}
                       </span>
                    </div>
                  </div>

                  <button
                    onClick={() => handleStart(planKey, duration)}
                    className={`w-full py-5 rounded-2xl font-bold flex items-center justify-center gap-2 transition-all duration-300 ${isPremium ? 'bg-white text-indigo-950 hover:bg-gray-50 shadow-xl shadow-white/10 hover:-translate-y-1' : 'bg-indigo-50 dark:bg-indigo-900/30 text-indigo-600 dark:text-indigo-400 hover:bg-indigo-600 hover:text-white hover:-translate-y-1'}`}
                  >
                    Get Started <Zap size={18} />
                  </button>
                  
                  <div className={`pt-8 border-t border-dashed ${isPremium ? 'border-indigo-800/50' : 'border-gray-200 dark:border-slate-800'} space-y-4`}>
                    {planFeatures.map((feature, idx) => {
                      const value = isPremium ? premiumPlanFeatures[idx] : basicPlanFeatures[idx];
                      const isString = typeof value === "string";
                      const isIncluded = isString || value === true;
                      
                      return (
                        <div key={idx} className={`flex items-start gap-4 ${isIncluded ? 'opacity-100' : 'opacity-40'}`}>
                           <div className={`mt-0.5 shrink-0 ${isIncluded ? (isPremium ? 'text-sky-400' : 'text-indigo-600 dark:text-indigo-400') : 'text-gray-400'}`}>
                             {isIncluded && !isString ? <Check size={18} /> : (!isString ? <X size={18} /> : 
                              <div className={`text-[10px] font-black uppercase px-2 py-0.5 rounded-full ${isPremium ? 'bg-sky-500/20 text-sky-300' : 'bg-indigo-100 dark:bg-indigo-900/50 text-indigo-600 dark:text-indigo-300'}`}>
                                {value}
                              </div>)}
                           </div>
                           <span className={`text-sm font-medium ${isPremium ? 'text-indigo-50' : 'text-gray-700 dark:text-gray-300'}`}>
                             {feature}
                           </span>
                        </div>
                      );
                    })}
                  </div>
                </div>
              </motion.div>
            );
          })}
        </div>
        
        <div className="mt-24 text-center relative z-10 bg-indigo-50 dark:bg-indigo-900/10 p-10 rounded-[2.5rem] max-w-3xl mx-auto border border-indigo-100 dark:border-indigo-900/30 shadow-xl shadow-indigo-100 dark:shadow-none">
          <h3 className="text-2xl font-black text-gray-900 dark:text-white mb-2">Need a custom enterprise solution?</h3>
          <p className="text-gray-600 dark:text-gray-400 text-lg">
             Reach out to our experts to craft a tailored growth strategy for your brand.
          </p>
          <a
            href={`https://wa.me/${companyDetails.phone.whatsappGroup}`}
            target="_blank"
            rel="noopener noreferrer"
            className="inline-flex items-center justify-center gap-2 mt-6 px-8 py-4 bg-indigo-600 hover:bg-indigo-700 rounded-2xl text-white font-bold hover:gap-4 transition-all shadow-lg shadow-indigo-200 dark:shadow-none"
          >
            Contact Sales Team <ArrowRight size={18} />
          </a>
        </div>
      </div>
    </div>
  );
};

export default Pricing;
