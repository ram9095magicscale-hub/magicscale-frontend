import { motion, AnimatePresence } from "framer-motion";
import { useState } from "react";
import { ChevronDown } from "lucide-react";

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

export default function FAQ() {
  const [openIndex, setOpenIndex] = useState(null);

  const toggleFaq = (index) => {
    setOpenIndex(openIndex === index ? null : index);
  };

  return (
    <section className="relative py-24 px-6 sm:px-12 lg:px-24 bg-gray-50/50 dark:bg-slate-900/30 overflow-hidden font-poppins transition-colors duration-500">
      
      {/* Background blobs */}
      <div className="absolute top-0 left-1/4 w-[500px] h-[500px] bg-indigo-100/30 dark:bg-indigo-900/10 rounded-full blur-[100px] pointer-events-none"></div>

      <div className="relative z-10 max-w-4xl mx-auto">
        <div className="text-center mb-16 space-y-4">
          <div className="inline-block px-4 py-1.5 rounded-full bg-indigo-50 dark:bg-indigo-900/30 border border-indigo-100 dark:border-indigo-800 text-indigo-600 dark:text-indigo-400 text-xs font-bold uppercase tracking-widest">
            Got Questions?
          </div>
          <h2 className="text-4xl md:text-5xl font-extrabold text-gray-900 dark:text-white leading-tight">
            Frequently Asked <span className="text-transparent bg-clip-text bg-gradient-to-r from-indigo-600 to-sky-600 dark:from-indigo-400 dark:to-sky-400">Questions</span>
          </h2>
          <p className="text-lg text-gray-600 dark:text-gray-400 max-w-2xl mx-auto">
            Everything you need to know about MagicScale and how we can help you grow your food business.
          </p>
        </div>

        <div className="space-y-4">
          {faqs.map((faq, index) => (
            <motion.div 
              key={index}
              initial={{ opacity: 0, y: 20 }}
              whileInView={{ opacity: 1, y: 0 }}
              transition={{ duration: 0.5, delay: index * 0.1 }}
              viewport={{ once: true }}
              className={`border border-gray-200 dark:border-slate-800 rounded-2xl bg-white dark:bg-slate-900 overflow-hidden transition-all duration-300 ${openIndex === index ? 'ring-2 ring-indigo-500/50 shadow-xl shadow-indigo-100 dark:shadow-none' : 'hover:border-indigo-300 dark:hover:border-indigo-700/50 hover:shadow-md'}`}
            >
              <button
                onClick={() => toggleFaq(index)}
                className="w-full text-left px-6 py-6 flex items-center justify-between gap-6 focus:outline-none"
              >
                <h3 className={`text-lg font-bold sm:text-xl transition-colors ${openIndex === index ? 'text-indigo-600 dark:text-indigo-400' : 'text-gray-900 dark:text-white'}`}>
                  {faq.question}
                </h3>
                <div className={`w-10 h-10 shrink-0 rounded-full flex items-center justify-center transition-all duration-300 ${openIndex === index ? 'bg-indigo-100 text-indigo-600 dark:bg-indigo-900/50 dark:text-indigo-400' : 'bg-gray-50 text-gray-400 dark:bg-slate-800 dark:text-gray-500'}`}>
                  <ChevronDown size={20} className={`transition-transform duration-300 ${openIndex === index ? 'rotate-180' : ''}`} />
                </div>
              </button>
              
              <AnimatePresence>
                {openIndex === index && (
                  <motion.div
                    initial={{ height: 0, opacity: 0 }}
                    animate={{ height: "auto", opacity: 1 }}
                    exit={{ height: 0, opacity: 0 }}
                    transition={{ duration: 0.3, ease: "easeInOut" }}
                  >
                    <div className="px-6 pb-6 pt-0">
                      <p className="text-gray-600 dark:text-gray-400 leading-relaxed text-base sm:text-lg">
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
}
