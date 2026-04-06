import React from "react";
import { motion } from "framer-motion";
import { culture1 } from "../assets";
import { Zap, Heart, TrendingUp, Users } from "lucide-react";

const Culture = () => {
  const pillars = [
    {
      icon: <Zap className="text-amber-500" />,
      title: "Radical Speed",
      description: "We don't believe in long waiting periods. We launch tomorrow what others launch next month.",
    },
    {
      icon: <Heart className="text-rose-500" />,
      title: "Human First",
      description: "Behind every restaurant is a person. We provide the empathy and real support they deserve.",
    },
    {
      icon: <TrendingUp className="text-emerald-500" />,
      title: "Growth Obsessed",
      description: "Your scalability is our only metric for success. If you aren't growing, we aren't done.",
    },
    {
      icon: <Users className="text-indigo-500" />,
      title: "Open Collaboration",
      description: "A flat hierarchy where the best ideas win, regardless of who they come from.",
    },
  ];

  return (
    <section className="py-32 px-6 sm:px-12 md:px-24 bg-gray-50/50 dark:bg-slate-900/20 relative overflow-hidden">
      <div className="max-w-7xl mx-auto relative z-10">
        <div className="grid grid-cols-1 lg:grid-cols-2 gap-20 items-center">
          <motion.div
            initial={{ opacity: 0, x: -30 }}
            whileInView={{ opacity: 1, x: 0 }}
            viewport={{ once: true }}
            transition={{ duration: 0.8 }}
            className="space-y-8"
          >
            <div className="inline-block px-4 py-1.5 rounded-full bg-indigo-50 dark:bg-indigo-900/30 border border-indigo-100 dark:border-indigo-800 text-indigo-600 dark:text-indigo-400 text-xs font-bold uppercase tracking-widest">
              The Magic Way
            </div>
            <h2 className="text-4xl md:text-5xl font-black text-gray-900 dark:text-white leading-tight">
              A Culture Built on <br />
              <span className="text-transparent bg-clip-text bg-gradient-to-r from-indigo-600 to-sky-600 dark:from-indigo-400 dark:to-sky-400">Trust & Transparency</span>
            </h2>
            <p className="text-lg text-gray-600 dark:text-gray-400 leading-relaxed">
              At MagicScale, we aren't just building a company; we're fostering a community of innovators who care deeply about the food industry. Our culture is the engine that drives our partners' success.
            </p>

            <div className="grid grid-cols-1 sm:grid-cols-2 gap-8 pt-4">
              {pillars.map((pillar, idx) => (
                <div key={idx} className="space-y-3">
                  <div className="w-12 h-12 bg-white dark:bg-slate-800 rounded-xl flex items-center justify-center shadow-lg shadow-gray-200/50 dark:shadow-none border border-gray-100 dark:border-white/5">
                    {pillar.icon}
                  </div>
                  <h4 className="text-xl font-bold text-gray-900 dark:text-white">{pillar.title}</h4>
                  <p className="text-gray-600 dark:text-gray-400 text-sm leading-relaxed">{pillar.description}</p>
                </div>
              ))}
            </div>
          </motion.div>

          <motion.div
            initial={{ opacity: 0, scale: 0.9 }}
            whileInView={{ opacity: 1, scale: 1 }}
            viewport={{ once: true }}
            transition={{ duration: 0.8 }}
            className="relative"
          >
            <div className="absolute inset-0 bg-gradient-to-tr from-indigo-500/20 to-sky-500/20 rounded-[3rem] transform rotate-3 scale-105 -z-10 blur-2xl"></div>
            <div className="relative rounded-[3rem] overflow-hidden aspect-square shadow-2xl border-8 border-white dark:border-slate-800">
              <img
                src={culture1}
                alt="MagicScale Team Collaboration"
                className="w-full h-full object-cover"
              />
              <div className="absolute inset-0 bg-gradient-to-t from-black/40 to-transparent"></div>
              <div className="absolute bottom-8 left-8 right-8">
                <div className="bg-white/10 backdrop-blur-md rounded-2xl p-6 border border-white/20">
                  <p className="text-white font-medium text-lg italic">
                    "We don't just solve problems; we build long-term partnerships that empower restaurateurs."
                  </p>
                </div>
              </div>
            </div>
          </motion.div>
        </div>
      </div>
    </section>
  );
};

export default Culture;
