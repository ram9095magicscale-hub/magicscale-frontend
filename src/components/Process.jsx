import React from "react";
import { motion } from "framer-motion";
import { Lightbulb, Wrench, RefreshCcw, TrendingUp } from "lucide-react";
import Title from "./Title";

const steps = [
  {
    num: "01",
    title: "Understand Your Needs",
    description: "We start by understanding your business challenges and goals to determine the best solutions for your growth.",
    icon: Lightbulb,
    color: "from-sky-400 to-blue-600",
    shadow: "shadow-sky-200 dark:shadow-sky-900/30",
  },
  {
    num: "02",
    title: "Customize Solutions",
    description: "We design tailored strategies, whether it's consulting, or operational setup, to fit your specific requirements.",
    icon: Wrench,
    color: "from-indigo-400 to-purple-600",
    shadow: "shadow-indigo-200 dark:shadow-indigo-900/30",
  },
  {
    num: "03",
    title: "Execute with Precision",
    description: "We implement the solutions seamlessly, ensuring smooth transitions and effective results across your business.",
    icon: RefreshCcw,
    color: "from-blue-500 to-indigo-700",
    shadow: "shadow-blue-200 dark:shadow-blue-900/30",
  },
  {
    num: "04",
    title: "Support & Scale",
    description: "We continue to support your business, helping you scale and adapt as your culinary brand's needs evolve.",
    icon: TrendingUp,
    color: "from-purple-500 to-pink-600",
    shadow: "shadow-purple-200 dark:shadow-purple-900/30",
  }
];

const Process = () => {
  return (
    <section className="relative py-24 px-6 sm:px-12 lg:px-24 bg-gray-50/50 dark:bg-slate-900/30 overflow-hidden font-poppins transition-colors duration-500">
      
      {/* Background Orbs */}
      <div className="absolute top-0 right-1/4 w-[600px] h-[600px] bg-blue-100/40 dark:bg-blue-900/10 rounded-full blur-[120px] -translate-y-1/2 pointer-events-none"></div>
      <div className="absolute bottom-0 left-1/4 w-[500px] h-[500px] bg-indigo-100/40 dark:bg-indigo-900/10 rounded-full blur-[100px] translate-y-1/2 pointer-events-none"></div>
      
      <div className="max-w-7xl mx-auto relative z-10">
        
        <div className="text-center mb-24 space-y-4">
          <div className="inline-block px-4 py-1.5 rounded-full bg-blue-50 dark:bg-blue-900/30 border border-blue-100 dark:border-blue-800 text-blue-600 dark:text-blue-400 text-xs font-bold uppercase tracking-widest">
            Work Process
          </div>
          <h2 className="text-4xl md:text-5xl font-extrabold text-gray-900 dark:text-white leading-tight">
            We Follow A <span className="text-transparent bg-clip-text bg-gradient-to-r from-blue-600 to-indigo-600 dark:from-blue-400 dark:to-indigo-400">Great Process</span>
          </h2>
          <p className="text-lg text-gray-600 dark:text-gray-400 max-w-2xl mx-auto mt-4">
            A proven, four-step methodology to take your kitchen from an idea to a highly profitable reality.
          </p>
        </div>

        <div className="relative grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-12 lg:gap-8">
          
          {/* Connecting Line (Only visible on lg screens) */}
          <div className="hidden lg:block absolute top-[4.5rem] left-[10%] right-[10%] h-[2px] bg-gradient-to-r from-transparent via-gray-300 dark:via-slate-700 to-transparent -z-10"></div>

          {steps.map((step, idx) => {
            const Icon = step.icon;
            
            return (
              <motion.div
                key={idx}
                initial={{ opacity: 0, y: 30 }}
                whileInView={{ opacity: 1, y: 0 }}
                viewport={{ once: true }}
                transition={{ duration: 0.6, delay: idx * 0.2 }}
                className="relative text-center group"
              >
                {/* Arrow indicator between steps (hidden on last step) */}
                {idx < steps.length - 1 && (
                  <div className="hidden lg:block absolute top-16 -right-6 text-gray-300 dark:text-slate-600">
                    <svg width="40" height="40" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round">
                      <path d="M5 12h14M12 5l7 7-7 7" />
                    </svg>
                  </div>
                )}

                <div className="flex justify-center mb-8 relative">
                  <div className={`relative w-36 h-36 rounded-full flex items-center justify-center bg-white dark:bg-slate-800 border-2 border-transparent group-hover:border-blue-100 dark:group-hover:border-slate-700 transition-all duration-500 shadow-xl ${step.shadow} z-10`}>
                    
                    {/* Number Badge */}
                    <div className="absolute top-0 right-2 w-10 h-10 bg-gray-900 dark:bg-white text-white dark:text-gray-900 rounded-full flex items-center justify-center font-bold text-sm shadow-md ring-4 ring-white dark:ring-slate-900 z-20">
                      {step.num}
                    </div>

                    {/* Gradient Icon Circle */}
                    <div className={`w-28 h-28 rounded-full bg-gradient-to-br ${step.color} flex items-center justify-center group-hover:scale-110 transition-transform duration-500`}>
                      <Icon size={42} className="text-white drop-shadow-md" />
                    </div>
                  </div>
                </div>

                <h3 className="text-xl font-bold text-gray-900 dark:text-white mb-4">
                  {step.title}
                </h3>
                <p className="text-gray-600 dark:text-gray-400 text-sm leading-relaxed px-2">
                  {step.description}
                </p>
              </motion.div>
            );
          })}
        </div>
      </div>
    </section>
  );
};

export default Process;
