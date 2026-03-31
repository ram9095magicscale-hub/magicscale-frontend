import React, { useState } from 'react';
import { useTheme } from '../../../components/context/ThemeContext';
import { ChevronDown } from 'lucide-react';

const faqData = [
  { q: 'What is the full form of FSSAI?', a: 'FSSAI stands for Food Safety and Standards Authority of India.' },
  { q: 'What is FoSCos?', a: 'FoSCos stands for Food Safety Compliance System — it is the online portal used for FSSAI license registration and compliance.' },
  { q: 'Why Register Under FSSAI and get FoSCos License?', a: 'It is mandatory for food businesses in India. It ensures legal compliance, customer trust, and avoids penalties.' },
  { q: 'What are the types of FoSCos Food Licenses?', a: 'Basic, State, and Central licenses depending on turnover and business reach.' },
  { q: 'How much does FoSCos Food License Registration under FSSAI cost?', a: 'Costs depend on license type: Basic (from ₹100/year govt fee), State and Central vary based on turnover.' },
  { q: 'What are the documents required for FoSCos License Registration?', a: 'ID proof, address proof, passport photo, business registration, and food category details.' },
  { q: 'What is the validity period for the FSSAI FoSCos License?', a: '1 to 5 years depending on what is selected at registration.' },
  { q: 'What is FLRS?', a: 'FLRS was the older licensing portal now replaced by FoSCos.' },
  { q: 'How to check my FSSAI FoSCos License Renewal status?', a: 'Visit the FoSCos portal or contact 08069029400 for real-time help.' },
  { q: 'Do I need a different FoSCos License for different states?', a: 'Yes, different states require separate licenses unless you operate with a Central license across all regions.' },
];

const FssaiFAQ = () => {
  const { isDarkMode } = useTheme();
  const [expandedIndex, setExpandedIndex] = useState(null);
  const [showAll, setShowAll] = useState(false);

  const handleToggle = (index) => {
    setExpandedIndex(expandedIndex === index ? null : index);
  };

  const visibleFaqs = showAll ? faqData : faqData.slice(0, 5);

  return (
    <div className="w-full font-poppins">
      <h2 className={`text-2xl sm:text-3xl font-black mb-8 tracking-tight ${isDarkMode ? 'text-white' : 'text-slate-900'}`}>
        Frequently Asked Questions
      </h2>

      <div className="space-y-3">
        {visibleFaqs.map((faq, index) => (
          <div
            key={index}
            className={`rounded-xl border transition-all duration-300 overflow-hidden ${
              expandedIndex === index 
                ? isDarkMode ? 'bg-[#1e293b]/80 border-blue-500/50 shadow-md shadow-blue-500/10' : 'bg-blue-50/50 border-blue-200 shadow-md shadow-blue-500/5'
                : isDarkMode ? 'bg-[#0f172a]/40 border-slate-700/50 hover:bg-[#1e293b]/60 hover:border-slate-600' : 'bg-white border-slate-200/80 hover:bg-slate-50 hover:border-slate-300'
            }`}
          >
            <button
              onClick={() => handleToggle(index)}
              className="w-full text-left px-5 py-4 font-bold flex items-center justify-between gap-4 focus:outline-none"
            >
              <span className={`text-[13px] sm:text-sm leading-snug ${isDarkMode ? 'text-slate-200' : 'text-slate-800'}`}>
                {faq.q}
              </span>
              <ChevronDown 
                size={18} 
                className={`shrink-0 transition-transform duration-300 ${expandedIndex === index ? 'rotate-180 text-blue-500' : isDarkMode ? 'text-slate-500' : 'text-slate-400'}`} 
              />
            </button>
            <div 
              className={`px-5 text-[13px] leading-relaxed transition-all duration-300 ease-in-out ${
                expandedIndex === index ? 'max-h-40 pb-5 opacity-100' : 'max-h-0 pb-0 opacity-0'
              } ${isDarkMode ? 'text-slate-400' : 'text-slate-600'}`}
            >
              {faq.a}
            </div>
          </div>
        ))}
      </div>

      {!showAll && (
        <button
          onClick={() => setShowAll(true)}
          className={`mt-6 w-full py-3 rounded-xl text-sm font-bold border transition-all duration-300 ${
            isDarkMode 
              ? 'bg-[#0f172a]/80 border-slate-700 text-blue-400 hover:bg-[#1e293b] hover:border-blue-500/30' 
              : 'bg-white border-slate-200 text-blue-600 hover:bg-blue-50 hover:border-blue-200'
          }`}
        >
          View More Questions
        </button>
      )}
    </div>
  );
};

export default FssaiFAQ;