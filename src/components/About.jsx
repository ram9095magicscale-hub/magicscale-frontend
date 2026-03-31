import { motion, useInView } from "framer-motion";
import { restaurantLogo } from "../assets";
import { ArrowRight, CheckCircle2, Target, Rocket } from "lucide-react";
import Title from "./Title";
import { useState, useEffect, useRef } from "react";
import { companyDetails } from "../data/companyDetails";

const AnimatedCounter = ({ value, duration = 2.5 }) => {
  const ref = useRef(null);
  const isInView = useInView(ref, { once: true, margin: "-50px" });
  const [count, setCount] = useState(0);

  useEffect(() => {
    if (isInView) {
      let start = null;
      const step = (timestamp) => {
        if (!start) start = timestamp;
        const progress = Math.min((timestamp - start) / (duration * 1000), 1);
        const easeOutQuad = progress * (2 - progress);
        setCount(Math.floor(easeOutQuad * value));
        if (progress < 1) {
          window.requestAnimationFrame(step);
        }
      };
      window.requestAnimationFrame(step);
    }
  }, [isInView, value, duration]);

  return <span ref={ref}>{count}</span>;
};

export default function AboutPage({ showTitle = true }) {
  return (
    <section
      id="about"
      className="relative pt-24 pb-32 px-6 sm:px-12 lg:px-24 bg-white dark:bg-slate-950 overflow-hidden font-poppins transition-colors duration-500"
    >
      {/* Premium Background Decorations */}
      <div className="absolute inset-0 z-0 pointer-events-none">
        <div className="absolute top-0 right-1/4 w-[600px] h-[600px] bg-indigo-100/40 dark:bg-indigo-500/10 rounded-full blur-[120px] -translate-y-1/2"></div>
        <div className="absolute bottom-0 left-1/4 w-[500px] h-[500px] bg-sky-100/40 dark:bg-sky-500/10 rounded-full blur-[100px] translate-y-1/2"></div>
        <div className="absolute inset-0 bg-[linear-gradient(to_right,#80808008_1px,transparent_1px),linear-gradient(to_bottom,#80808008_1px,transparent_1px)] bg-[size:40px_40px] dark:bg-none"></div>
      </div>

      <div className="relative z-10 max-w-7xl mx-auto">
        {showTitle && (
          <div className="text-center mb-20">
             <Title preTitle="Discover" title="MagicScale" />
          </div>
        )}

        {/* Hero Section */}
        <div className="grid grid-cols-1 lg:grid-cols-2 gap-16 items-center mb-32">
          <motion.div
            initial={{ opacity: 0, y: 30 }}
            whileInView={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.8 }}
            viewport={{ once: true }}
            className="space-y-8"
          >
            <div className="inline-block px-4 py-1.5 rounded-full bg-indigo-50 dark:bg-indigo-900/30 border border-indigo-100 dark:border-indigo-800 text-indigo-600 dark:text-indigo-400 text-xs font-bold uppercase tracking-widest">
              Empowering India
            </div>
            
            <h1 className="text-5xl lg:text-6xl md:text-5xl font-extrabold text-gray-900 dark:text-white leading-[1.15]">
              Empowering India’s <br />
              <span className="text-transparent bg-clip-text bg-gradient-to-r from-indigo-600 to-sky-600 dark:from-indigo-400 dark:to-sky-400">
                Foodpreneurs
              </span>
            </h1>
            
            <p className="text-lg md:text-xl text-gray-600 dark:text-gray-400 leading-relaxed max-w-xl">
              At MagicScale, we simplify everything from cloud kitchen
              onboarding to legal registrations. You focus on cooking, we handle the chaos.
            </p>
            
            <div className="pt-4 flex flex-col sm:flex-row gap-4">
              <a
                href={`https://wa.me/${companyDetails.phone.whatsappGroup}`}
                target="_blank"
                className="inline-flex items-center justify-center gap-2 bg-indigo-600 hover:bg-indigo-700 text-white px-8 py-4 rounded-2xl font-bold transition-all shadow-xl shadow-indigo-200 dark:shadow-none hover:-translate-y-1 group"
              >
                Let’s Get You Started
                <ArrowRight size={18} className="group-hover:translate-x-1 transition-transform" />
              </a>
            </div>
          </motion.div>

          <motion.div
            initial={{ opacity: 0, scale: 0.9 }}
            whileInView={{ opacity: 1, scale: 1 }}
            transition={{ duration: 0.8 }}
            viewport={{ once: true }}
            className="relative flex justify-center lg:justify-end"
          >
             {/* Decorative blob behind image */}
            <div className="absolute inset-0 bg-gradient-to-tr from-indigo-100 to-sky-50 dark:from-indigo-900/20 dark:to-sky-900/20 rounded-[3rem] transform rotate-3 scale-105 -z-10"></div>
            <img
              src={restaurantLogo}
              alt="Brands we work with"
              className="w-full max-w-lg object-contain dark:brightness-90 drop-shadow-2xl rounded-[2rem] bg-white/50 backdrop-blur-sm dark:bg-slate-900/50 p-6 border border-white/20 dark:border-slate-800"
            />
          </motion.div>
        </div>

        {/* Mission & Why Choose Us */}
        <div className="grid grid-cols-1 md:grid-cols-2 gap-10 mb-32">
          {/* Mission Card */}
          <motion.div
            initial={{ opacity: 0, y: 30 }}
            whileInView={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.8 }}
            viewport={{ once: true }}
            className="group relative bg-white dark:bg-slate-900 border border-gray-100 dark:border-slate-800 rounded-[2.5rem] p-10 md:p-12 shadow-2xl shadow-gray-200/20 dark:shadow-none hover:border-indigo-500/30 transition-all duration-500 overflow-hidden"
          >
            <div className="absolute top-0 right-0 w-64 h-64 bg-indigo-50 dark:bg-indigo-900/20 rounded-full blur-3xl -translate-y-1/2 translate-x-1/2 transition-transform duration-700 group-hover:scale-150"></div>
            
            <div className="relative z-10 space-y-6">
              <div className="w-14 h-14 bg-indigo-600 text-white rounded-2xl flex items-center justify-center shadow-lg shadow-indigo-200 dark:shadow-none mb-8">
                <Target size={28} />
              </div>
              <h3 className="text-3xl font-black text-gray-900 dark:text-white">
                Our Mission
              </h3>
              <p className="text-gray-600 dark:text-gray-400 text-lg leading-relaxed">
                We’re on a mission to help every foodpreneur in India launch
                faster, smarter, and more profitably. No jargon. No middlemen.
                Just real support from a team that understands your journey.
              </p>
            </div>
          </motion.div>

          {/* Why Choose Us Card */}
          <motion.div
            initial={{ opacity: 0, y: 30 }}
            whileInView={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.8, delay: 0.2 }}
            viewport={{ once: true }}
            className="group relative bg-white dark:bg-slate-900 border border-gray-100 dark:border-slate-800 rounded-[2.5rem] p-10 md:p-12 shadow-2xl shadow-gray-200/20 dark:shadow-none hover:border-sky-500/30 transition-all duration-500 overflow-hidden"
          >
            <div className="absolute top-0 right-0 w-64 h-64 bg-sky-50 dark:bg-sky-900/20 rounded-full blur-3xl -translate-y-1/2 translate-x-1/2 transition-transform duration-700 group-hover:scale-150"></div>
            
            <div className="relative z-10 space-y-6">
              <div className="w-14 h-14 bg-sky-500 text-white rounded-2xl flex items-center justify-center shadow-lg shadow-sky-200 dark:shadow-none mb-8">
                <Rocket size={28} />
              </div>
              <h3 className="text-3xl font-black text-gray-900 dark:text-white">
                Why Choose Us
              </h3>
              <ul className="space-y-4">
                {[
                  "Instant Swiggy/Zomato onboarding",
                  "Expert help with FSSAI, GST, trademark",
                  "Personalised account managers",
                  "Real-time dashboard & updates"
                ].map((item, idx) => (
                  <li key={idx} className="flex items-start gap-3 text-gray-600 dark:text-gray-400 text-lg">
                    <CheckCircle2 size={24} className="text-sky-500 shrink-0 mt-0.5" />
                    <span>{item}</span>
                  </li>
                ))}
              </ul>
            </div>
          </motion.div>
        </div>

        {/* Impact / Stats */}
        <motion.div
          initial={{ opacity: 0, scale: 0.95 }}
          whileInView={{ opacity: 1, scale: 1 }}
          transition={{ duration: 0.8 }}
          viewport={{ once: true }}
          className="relative overflow-hidden bg-gradient-to-br from-indigo-700 via-indigo-600 to-indigo-800 rounded-[3rem] p-12 md:p-20 text-center shadow-2xl shadow-indigo-200 dark:shadow-none border border-indigo-400/20"
        >
          <div className="absolute top-0 right-0 w-96 h-96 bg-white/10 blur-[100px] rounded-full -translate-y-1/2 translate-x-1/2"></div>
          <div className="absolute bottom-0 left-0 w-96 h-96 bg-sky-400/20 blur-[100px] rounded-full translate-y-1/2 -translate-x-1/2"></div>
          <div className="absolute inset-0 bg-[url('data:image/svg+xml;base64,PHN2ZyB4bWxucz0iaHR0cDovL3d3dy53My5vcmcvMjAwMC9zdmciIHdpZHRoPSI4IiBoZWlnaHQ9IjgiPgo8cmVjdCB3aWR0aD0iOCIgaGVpZ2h0PSI4IiBmaWxsPSIjZmZmIiBmaWxsLW9wYWNpdHk9IjAuMDUiPjwvcmVjdD4KPHBhdGggZD0iTTAgMEw4IDhaTTAgOEw4IDBaIiBzdHJva2U9IiNmZmYiIHN0cm9rZS1vcGFjaXR5PSIwLjA1IiBzdHJva2Utd2lkdGg9IjEiPjwvcGF0aD4KPC9zdmc+')] opacity-20 Mix-blend-overlay"></div>
          
          <div className="relative z-10 max-w-5xl mx-auto space-y-12">
            <div className="space-y-6">
              <h3 className="text-4xl md:text-5xl font-black text-white leading-tight">
                Our Nationwide Impact
              </h3>
              <p className="text-indigo-100 text-lg md:text-xl opacity-90 leading-relaxed max-w-3xl mx-auto">
                We’ve helped brands across India start from zero and scale to lakhs
                in revenue — with a strong backend to support every step.
              </p>
            </div>
            
            <div className="grid grid-cols-1 md:grid-cols-3 gap-10 pt-10 border-t border-indigo-400/30">
              <div className="space-y-3 bg-white/5 backdrop-blur-sm rounded-3xl p-8 border border-white/10 hover:bg-white/10 transition-colors">
                <div className="text-5xl md:text-6xl font-black text-white flex items-center justify-center">
                  <AnimatedCounter value={2000} duration={3} /><span className="text-sky-300 ml-1">+</span>
                </div>
                <div className="text-indigo-100 uppercase tracking-widest font-bold text-sm">Kitchens Launched</div>
              </div>
              
              <div className="space-y-3 bg-white/5 backdrop-blur-sm rounded-3xl p-8 border border-white/10 hover:bg-white/10 transition-colors">
                <div className="text-5xl md:text-6xl font-black text-white flex items-center justify-center">
                  <AnimatedCounter value={300} duration={2.5} /><span className="text-sky-300 ml-1">+</span>
                </div>
                <div className="text-indigo-100 uppercase tracking-widest font-bold text-sm">Cities Covered</div>
              </div>
              
              <div className="space-y-3 bg-white/5 backdrop-blur-sm rounded-3xl p-8 border border-white/10 hover:bg-white/10 transition-colors">
                <div className="text-5xl md:text-6xl font-black text-white flex items-center justify-center">
                  <AnimatedCounter value={1} duration={1} />
                </div>
                <div className="text-indigo-100 uppercase tracking-widest font-bold text-sm">Magic Team</div>
              </div>
            </div>
          </div>
        </motion.div>
      </div>
    </section>
  );
}
