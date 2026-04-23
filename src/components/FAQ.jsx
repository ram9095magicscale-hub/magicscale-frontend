import React, { useState } from "react";
import { motion, AnimatePresence } from "framer-motion";
import { ChevronDown, HelpCircle } from "lucide-react";

const faqs = [
  {
    question: "How long does it take to onboard with Zomato or Swiggy?",
    answer: "With MagicScale, onboarding typically takes just 3 to 7 working days, assuming all your documents are ready. We handle the entire process to get your kitchen live as quickly as possible."
  },
  {
    question: "Do I need an FSSAI license to start a cloud kitchen?",
    answer: "Yes, an FSSAI license is mandatory to sell food online in India. If you don't have one, our legal team can help you register and obtain your FSSAI certificate quickly."
  },
  {
    question: "What is the cost of your services?",
    answer: "Our consulting and onboarding packages are tailored to your specific needs. Contact us via WhatsApp or the contact form for a free consultation and a detailed quote."
  },
  {
    question: "Can you help with menu optimization and pricing?",
    answer: "Absolutely! We provide data-driven insights to optimize your menu, calculate food costs, and set profitable pricing strategies tailored specifically for food delivery algorithms."
  },
  {
    question: "Do you offer post-launch support?",
    answer: "Yes. Our team acts as your dedicated account managers even after launch. We monitor your performance, help with promotions, and manage reviews to ensure sustainable growth."
  }
];

const FAQ = () => {
  const [openIndex, setOpenIndex] = useState(null);

  const toggleFaq = (index) => {
    setOpenIndex(openIndex === index ? null : index);
  };

  return (
    <section className="relative py-24 px-6 sm:px-12 lg:px-24 bg-transparent overflow-hidden font-poppins transition-colors duration-500">
      {/* Decorative background */}
      <div className="absolute top-1/2 left-1/2 -translate-x-1/2 -translate-y-1/2 w-[800px] h-[800px] bg-indigo-500/5 dark:bg-indigo-500/10 rounded-full blur-[150px] pointer-events-none"></div>

      <div className="relative z-10 max-w-4xl mx-auto">
        <div className="text-center mb-16 space-y-4">
          <motion.div
            initial={{ opacity: 0, y: 10 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
            className="inline-block px-4 py-1.5 rounded-full bg-indigo-50 dark:bg-indigo-900/30 border border-indigo-100 dark:border-indigo-800 text-indigo-600 dark:text-indigo-400 text-xs font-black uppercase tracking-[0.2em]"
          >
            Got Questions?
          </motion.div>
          <motion.h2
            initial={{ opacity: 0, y: 20 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
            transition={{ delay: 0.1 }}
            className="text-4xl md:text-5xl font-black text-gray-900 dark:text-white leading-tight tracking-tighter"
          >
            Frequently Asked <span className="text-transparent bg-clip-text bg-gradient-to-r from-indigo-600 to-sky-600 dark:from-indigo-400 dark:to-sky-400">Questions</span>
          </motion.h2>
          <motion.p
            initial={{ opacity: 0, y: 20 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
            transition={{ delay: 0.2 }}
            className="text-lg text-gray-600 dark:text-slate-400 max-w-2xl mx-auto font-medium"
          >
            Everything you need to know about MagicScale and how we can help you grow your food business.
          </motion.p>
        </div>

        <div className="space-y-4">
          {faqs.map((faq, index) => (
            <motion.div
              key={index}
              initial={{ opacity: 0, y: 20 }}
              whileInView={{ opacity: 1, y: 0 }}
              transition={{ duration: 0.5, delay: index * 0.1 }}
              viewport={{ once: true }}
              className={`group border rounded-[2.5rem] transition-all duration-500 overflow-hidden backdrop-blur-sm ${
                openIndex === index
                  ? "bg-white dark:bg-slate-900 border-indigo-500/50 shadow-2xl shadow-indigo-500/10"
                  : "bg-gray-50/50 dark:bg-slate-900/30 border-gray-100 dark:border-slate-800 hover:border-indigo-300 dark:hover:border-indigo-700/50"
              }`}
            >
              <button
                onClick={() => toggleFaq(index)}
                className="w-full text-left px-8 py-7 flex items-center justify-between gap-6 focus:outline-none"
              >
                <div className="flex items-center gap-5">
                  <div className={`w-12 h-12 rounded-2xl flex items-center justify-center transition-all duration-500 ${
                    openIndex === index 
                      ? "bg-indigo-600 text-white rotate-[360deg]" 
                      : "bg-white dark:bg-slate-800 text-indigo-500 shadow-sm border border-gray-100 dark:border-slate-700"
                  }`}>
                    <HelpCircle size={24} />
                  </div>
                  <h3 className={`text-lg font-bold transition-colors duration-300 ${
                    openIndex === index ? "text-indigo-600 dark:text-indigo-400" : "text-gray-900 dark:text-white"
                  }`}>
                    {faq.question}
                  </h3>
                </div>
                <div className={`w-10 h-10 shrink-0 rounded-full flex items-center justify-center transition-all duration-500 ${
                  openIndex === index 
                    ? "bg-indigo-100 dark:bg-indigo-900/50 text-indigo-600 dark:text-indigo-400" 
                    : "bg-gray-100 dark:bg-slate-800 text-gray-400 dark:text-gray-500"
                }`}>
                  <ChevronDown size={20} className={`transition-transform duration-500 ${openIndex === index ? "rotate-180" : ""}`} />
                </div>
              </button>

              <AnimatePresence>
                {openIndex === index && (
                  <motion.div
                    initial={{ height: 0, opacity: 0 }}
                    animate={{ height: "auto", opacity: 1 }}
                    exit={{ height: 0, opacity: 0 }}
                    transition={{ duration: 0.4, ease: [0.04, 0.62, 0.23, 0.98] }}
                  >
                    <div className="px-8 pb-8 pt-0 pl-24">
                      <div className="h-px w-full bg-gray-100 dark:bg-slate-800 mb-6"></div>
                      <p className="text-gray-600 dark:text-slate-400 leading-relaxed text-[17px] font-medium">
                        {faq.answer}
                      </p>
                    </div>
                  </motion.div>
                )}
              </AnimatePresence>
            </motion.div>
          ))}
        </div>
      </div>
    </section>
  );
};

export default FAQ;

