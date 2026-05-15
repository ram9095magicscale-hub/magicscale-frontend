import React, { useState, useEffect } from "react";
import { motion as Motion, AnimatePresence } from "framer-motion";
import { 
  Cookie, 
  X, 
  ShieldCheck, 
  ChevronRight, 
  Settings, 
  Check, 
  Zap, 
  BarChart3, 
  Target,
  ArrowRight
} from "lucide-react";
import { Link } from "react-router-dom";

const CookieConsent = () => {
  const [isVisible, setIsVisible] = useState(false);
  const [showCustomize, setShowCustomize] = useState(false);
  const [isSaved, setIsSaved] = useState(false);
  const [preferences, setPreferences] = useState({
    necessary: true,
    analytics: true,
    marketing: false,
  });

  useEffect(() => {
    const consent = localStorage.getItem("cookieConsent");
    if (!consent) {
      const timer = setTimeout(() => setIsVisible(true), 2500);
      return () => clearTimeout(timer);
    }
  }, []);

  const savePreferences = (prefs) => {
    setIsSaved(true);
    setTimeout(() => {
      localStorage.setItem("cookieConsent", JSON.stringify(prefs));
      setIsVisible(false);
      setShowCustomize(false);
      setIsSaved(false);
    }, 800);
  };

  const handleAcceptAll = () => {
    savePreferences({ necessary: true, analytics: true, marketing: true });
  };

  const handleRejectAll = () => {
    savePreferences({ necessary: true, analytics: false, marketing: false });
  };

  const handleSaveCustom = () => {
    savePreferences(preferences);
  };

  const togglePreference = (key) => {
    if (key === 'necessary') return;
    setPreferences(prev => ({ ...prev, [key]: !prev[key] }));
  };

  return (
    <AnimatePresence mode="wait">
      {isVisible && (
        <Motion.div
          initial={{ x: -20, y: -20, opacity: 0, scale: 0.95 }}
          animate={{ x: 0, y: 0, opacity: 1, scale: 1 }}
          exit={{ x: -20, y: -20, opacity: 0, scale: 0.95 }}
          className="fixed top-6 left-6 right-6 md:right-auto md:max-w-[440px] z-[9999]"
        >
          {/* Main Card */}
          <div className="relative overflow-hidden group rounded-[32px]">
            {/* Animated Glow Backdrop */}
            <div className="absolute -inset-1 bg-gradient-to-r from-indigo-500/20 via-purple-500/20 to-blue-500/20 rounded-[34px] blur-xl group-hover:opacity-100 transition duration-1000 opacity-70" />
            
            <div className="relative bg-white/80 dark:bg-slate-900/90 backdrop-blur-3xl border border-white/20 dark:border-slate-800/50 rounded-[32px] shadow-[0_32px_64px_-16px_rgba(0,0,0,0.2)] p-1">
              <div className="bg-white/50 dark:bg-slate-900/50 rounded-[31px] p-6">
                
                {/* Header */}
                <div className="flex items-center justify-between mb-6">
                  <div className="flex items-center gap-3">
                    <div className="relative">
                      <div className="absolute inset-0 bg-indigo-500 blur-md opacity-40 animate-pulse" />
                      <div className="relative bg-indigo-600 p-2.5 rounded-xl text-white">
                        <Cookie className="w-5 h-5" />
                      </div>
                    </div>
                    <div>
                      <h3 className="text-slate-900 dark:text-white font-black text-lg leading-tight tracking-tight">Cookie Privacy</h3>
                      <p className="text-[10px] text-slate-500 dark:text-slate-400 font-bold uppercase tracking-[0.15em]">Control your data</p>
                    </div>
                  </div>
                  <button 
                    onClick={() => setIsVisible(false)}
                    className="p-2 hover:bg-slate-100 dark:hover:bg-slate-800 rounded-full transition-colors group/close"
                  >
                    <X className="w-4 h-4 text-slate-400 group-hover/close:rotate-90 transition-transform duration-300" />
                  </button>
                </div>

                <AnimatePresence mode="wait">
                  {isSaved ? (
                    <Motion.div 
                      key="saved"
                      initial={{ opacity: 0, scale: 0.9 }}
                      animate={{ opacity: 1, scale: 1 }}
                      className="flex flex-col items-center justify-center py-10"
                    >
                      <div className="w-16 h-16 bg-emerald-500/10 rounded-full flex items-center justify-center mb-4">
                        <Check className="w-8 h-8 text-emerald-500" />
                      </div>
                      <h4 className="text-slate-900 dark:text-white font-bold text-xl">Preferences Saved</h4>
                      <p className="text-slate-500 text-sm">Thank you for your choice.</p>
                    </Motion.div>
                  ) : !showCustomize ? (
                    <Motion.div
                      key="main"
                      initial={{ opacity: 0, y: 10 }}
                      animate={{ opacity: 1, y: 0 }}
                      exit={{ opacity: 0, x: -20 }}
                    >
                      <p className="text-slate-600 dark:text-slate-400 text-sm leading-relaxed mb-8 font-medium">
                        We use cookies to personalize content, provide social media features, and analyze our traffic. Your experience is our priority.
                      </p>

                      <div className="space-y-3">
                        <button
                          onClick={handleAcceptAll}
                          className="w-full bg-slate-900 dark:bg-white text-white dark:text-slate-900 font-black py-4 px-6 rounded-2xl flex items-center justify-between group overflow-hidden relative shadow-lg active:scale-[0.98] transition-all"
                        >
                          <span className="relative z-10 flex items-center gap-2">
                            Accept All Cookies
                            <Zap className="w-4 h-4 fill-current" />
                          </span>
                          <ArrowRight className="w-5 h-5 group-hover:translate-x-1 transition-transform relative z-10" />
                          <div className="absolute inset-0 bg-gradient-to-r from-indigo-500/20 to-purple-500/20 translate-x-[-100%] group-hover:translate-x-[100%] transition-transform duration-1000" />
                        </button>
                        
                        <div className="grid grid-cols-2 gap-3">
                          <button
                            onClick={handleRejectAll}
                            className="bg-slate-100 dark:bg-slate-800 text-slate-900 dark:text-white font-bold py-3.5 px-6 rounded-2xl hover:bg-slate-200 dark:hover:bg-slate-700 transition-all border border-slate-200/50 dark:border-slate-700/50 text-sm"
                          >
                            Reject All
                          </button>
                          <button
                            onClick={() => setShowCustomize(true)}
                            className="bg-transparent text-slate-500 dark:text-slate-400 font-bold py-3.5 px-6 rounded-2xl hover:bg-slate-50 dark:hover:bg-slate-800/50 transition-all border border-slate-200 dark:border-slate-800 flex items-center justify-center gap-2 text-sm"
                          >
                            <Settings className="w-4 h-4" />
                            Customize
                          </button>
                        </div>
                      </div>
                    </Motion.div>
                  ) : (
                    <Motion.div
                      key="customize"
                      initial={{ opacity: 0, x: 20 }}
                      animate={{ opacity: 1, x: 0 }}
                      exit={{ opacity: 0, x: 20 }}
                      className="space-y-4"
                    >
                      <PremiumOption 
                        icon={<ShieldCheck className="w-5 h-5 text-indigo-500" />}
                        title="Essential" 
                        description="Security, billing & core functionality."
                        enabled={true}
                        fixed={true}
                      />
                      <PremiumOption 
                        icon={<BarChart3 className="w-5 h-5 text-blue-500" />}
                        title="Analytics" 
                        description="Monitor performance & usage patterns."
                        enabled={preferences.analytics}
                        onToggle={() => togglePreference('analytics')}
                      />
                      <PremiumOption 
                        icon={<Target className="w-5 h-5 text-purple-500" />}
                        title="Marketing" 
                        description="Personalized ads & smart recommendations."
                        enabled={preferences.marketing}
                        onToggle={() => togglePreference('marketing')}
                      />

                      <div className="flex gap-3 pt-4">
                        <button
                          onClick={handleSaveCustom}
                          className="flex-1 bg-indigo-600 text-white font-bold py-4 rounded-2xl shadow-lg shadow-indigo-600/20 active:scale-[0.98] transition-all"
                        >
                          Save Choices
                        </button>
                        <button
                          onClick={() => setShowCustomize(false)}
                          className="px-6 bg-slate-100 dark:bg-slate-800 text-slate-600 dark:text-slate-300 font-bold rounded-2xl hover:bg-slate-200 transition-all"
                        >
                          Back
                        </button>
                      </div>
                    </Motion.div>
                  )}
                </AnimatePresence>

                {/* Footer */}
                {!isSaved && (
                  <div className="mt-8 pt-5 border-t border-slate-100 dark:border-slate-800/50 flex items-center justify-between">
                    <Link 
                      to="/privacy-policy" 
                      className="group flex items-center gap-1.5"
                    >
                      <span className="text-slate-400 group-hover:text-indigo-500 text-[11px] font-bold uppercase tracking-wider transition-colors">Privacy Policy</span>
                      <ChevronRight className="w-3 h-3 text-slate-300 group-hover:text-indigo-500 group-hover:translate-x-0.5 transition-all" />
                    </Link>
                    <div className="flex items-center gap-2">
                      <div className="w-1 h-1 bg-indigo-500 rounded-full animate-pulse" />
                      <span className="text-[10px] text-slate-300 dark:text-slate-600 font-black uppercase tracking-[0.2em]">
                        MagicScale 2026
                      </span>
                    </div>
                  </div>
                )}
              </div>
            </div>
          </div>
        </Motion.div>
      )}
    </AnimatePresence>
  );
};

const PremiumOption = ({ icon, title, description, enabled, onToggle, fixed = false }) => (
  <div 
    onClick={!fixed ? onToggle : undefined}
    className={`group flex items-center justify-between gap-4 p-4 rounded-2xl border transition-all duration-300 ${
      !fixed ? 'cursor-pointer hover:border-indigo-500/30 hover:bg-indigo-50/5 dark:hover:bg-indigo-500/5' : ''
    } ${enabled ? 'bg-slate-50 dark:bg-slate-800/30 border-slate-100 dark:border-slate-800 shadow-sm' : 'bg-transparent border-slate-100 dark:border-slate-800/50'}`}
  >
    <div className="flex items-center gap-4">
      <div className={`p-2.5 rounded-xl transition-colors ${enabled ? 'bg-white dark:bg-slate-800 shadow-sm' : 'bg-slate-50 dark:bg-slate-800/50'}`}>
        {icon}
      </div>
      <div>
        <h4 className="text-slate-900 dark:text-white font-bold text-sm leading-none mb-1.5">{title}</h4>
        <p className="text-slate-500 dark:text-slate-400 text-[11px] font-medium leading-tight">{description}</p>
      </div>
    </div>
    
    <div className={`relative w-10 h-5 rounded-full transition-all duration-500 flex items-center ${
      enabled ? 'bg-indigo-600' : 'bg-slate-200 dark:bg-slate-700'
    } ${fixed ? 'opacity-40' : ''}`}>
      <Motion.div 
        animate={{ x: enabled ? 22 : 4 }}
        className="w-3.5 h-3.5 bg-white rounded-full shadow-md"
      />
    </div>
  </div>
);

export default CookieConsent;



