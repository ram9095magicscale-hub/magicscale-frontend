import React from "react";
import { useNavigate } from "react-router-dom";
import { FaCheckCircle, FaRocket, FaUtensils, FaChartLine, FaStore, FaTools, FaBolt, FaBalanceScale } from "react-icons/fa";
import cloudKitchenImg from "../../assets/cloud_kitchen_setup.png";
import { useTheme } from "../../components/context/ThemeContext";
import { companyDetails } from "../../data/companyDetails";
import Footer from "../../components/Footer";
import { motion } from "framer-motion";

const CloudKitchenDetails = () => {
  const navigate = useNavigate();
  const { theme } = useTheme();
  const isDarkMode = theme === 'dark';

  const handleStartConsultation = () => {
    window.open(`https://wa.me/${companyDetails.phone.whatsappGroup}`, '_blank');
  };

  const services = [
    {
      title: "Kitchen Setup & Design",
      desc: "Optimized kitchen layouts for maximum efficiency and flow.",
      icon: <FaTools className="text-cyan-500" />,
    },
    {
      title: "Brand Identity",
      desc: "Premium logo design, brand story, and menu engineering.",
      icon: <FaStore className="text-blue-500" />,
    },
    {
      title: "Legal & Compliance",
      desc: "FSSAI, GST, Trade License, and Trademark registrations.",
      icon: <FaCheckCircle className="text-emerald-500" />,
    },
    {
      title: "Zomato & Swiggy",
      desc: "Fast-track onboarding and menu optimization for high conversion.",
      icon: <FaRocket className="text-orange-500" />,
    },
    
    {
      title: "Menu Optimization",
      desc: "Data-driven pricing and dish selection for better margins.",
      icon: <FaChartLine className="text-purple-500" />,
    },
    {
      title: "Marketing Growth",
      desc: "Performance marketing to scale from zero to lakhs in revenue.",
      icon: <FaChartLine className="text-indigo-500" />,
    },
  ];

  const steps = [
    { title: "Concept & Planning", desc: "We define your niche and plan the menu." },
    { title: "Legal & Setup", desc: "Licenses, kitchen equipment, and staff training." },
    { title: "Branding & Launch", desc: "Logo, photos, and platform onboarding." },
    { title: "Growth & Scaling", desc: "Marketing and operational excellence." },
  ];

  return (
    <div className="min-h-screen bg-white dark:bg-slate-950 transition-colors duration-500 font-poppins">

      {/* --- Hero Section --- */}
      <section className="pt-28 pb-20 px-6 overflow-hidden">
        <div className="max-w-5xl mx-auto text-center space-y-8">

          {/* Breadcrumb - matches other service pages */}
          <div className="flex items-center justify-start gap-2 text-xs sm:text-sm font-semibold uppercase tracking-wider mb-2">
            <span
              onClick={() => navigate('/services')}
              className="text-cyan-600 hover:text-cyan-700 dark:text-cyan-400 dark:hover:text-cyan-300 cursor-pointer transition-colors"
            >
              Services
            </span>
            <svg xmlns="http://www.w3.org/2000/svg" width="14" height="14" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round" className="text-slate-400 dark:text-slate-600"><polyline points="9 18 15 12 9 6"/></svg>
            <span className="text-slate-500 dark:text-slate-400">Cloud Kitchen</span>
          </div>

          <motion.h1
            initial={{ opacity: 0, y: 20 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ delay: 0.1 }}
            className="text-5xl md:text-7xl font-black text-gray-900 dark:text-white leading-[1.1] tracking-tight"
          >
            Launch Your <br />
            <span className="text-transparent bg-clip-text bg-gradient-to-r from-cyan-600 to-blue-600 dark:from-cyan-400 dark:to-blue-500">
              Cloud Kitchen Brand
            </span>
          </motion.h1>
          <motion.p
            initial={{ opacity: 0, y: 20 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ delay: 0.2 }}
            className="text-xl text-gray-600 dark:text-slate-400 max-w-3xl mx-auto leading-relaxed"
          >
            We take you from a single idea to a nationwide digital food brand. Our experts handle the kitchen setup, branding, and platform scaling while you focus on the cooking.
          </motion.p>

          <motion.div
            initial={{ opacity: 0, scale: 0.9 }}
            animate={{ opacity: 1, scale: 1 }}
            transition={{ delay: 0.3 }}
            className="relative mt-12 group"
          >
            <div className="absolute inset-0 bg-cyan-500/20 blur-[120px] rounded-full scale-75 group-hover:bg-cyan-500/30 transition-all duration-700"></div>
            <img
              src={cloudKitchenImg}
              alt="Cloud Kitchen Setup"
              className="w-full max-w-4xl mx-auto rounded-[3rem] shadow-2xl dark:shadow-cyan-900/20 object-cover aspect-video max-h-[500px] relative z-10 border border-white/20"
            />
          </motion.div>
        </div>
      </section>

      {/* --- Features Grid --- */}
      <section className="py-24 bg-gray-50/50 dark:bg-slate-900/20 relative">
        <div className="max-w-7xl mx-auto px-6">
          <div className="text-center mb-16">
            <h2 className="text-3xl md:text-4xl font-bold text-gray-900 dark:text-white">Everything You Need To Scale</h2>
          </div>
          <div className="grid md:grid-cols-3 gap-8">
            {services.map((service, idx) => (
              <motion.div
                key={idx}
                initial={{ opacity: 0, y: 20 }}
                whileInView={{ opacity: 1, y: 0 }}
                viewport={{ once: true }}
                transition={{ delay: idx * 0.1 }}
                className="p-8 rounded-[2rem] bg-white dark:bg-slate-900 border border-gray-100 dark:border-white/5 hover:border-cyan-500/30 transition-all shadow-xl shadow-gray-200/20 dark:shadow-none group"
              >
                <div className="w-14 h-14 rounded-2xl bg-gray-50 dark:bg-slate-800 flex items-center justify-center text-3xl mb-6 group-hover:scale-110 transition-transform">
                  {service.icon}
                </div>
                <h3 className="text-xl font-bold text-gray-900 dark:text-white mb-3">{service.title}</h3>
                <p className="text-gray-600 dark:text-slate-400 leading-relaxed text-sm">
                  {service.desc}
                </p>
              </motion.div>
            ))}
          </div>
        </div>
      </section>

      {/* --- Process Section --- */}
      <section className="py-24">
        <div className="max-w-7xl mx-auto px-6">
          <div className="grid lg:grid-cols-2 gap-16 items-center">
            <div className="space-y-8">
              <h2 className="text-4xl font-black text-gray-900 dark:text-white tracking-tight">The Zero to Brand Journey</h2>
              <div className="space-y-6">
                {steps.map((step, idx) => (
                  <div key={idx} className="flex gap-6 items-start group">
                    <div className="flex-shrink-0 w-12 h-12 rounded-full bg-cyan-600 text-white flex items-center justify-center font-black text-xl shadow-lg shadow-cyan-600/20">
                      {idx + 1}
                    </div>
                    <div>
                      <h4 className="text-xl font-bold text-gray-900 dark:text-white group-hover:text-cyan-600 transition-colors">{step.title}</h4>
                      <p className="text-gray-600 dark:text-slate-400 font-medium">{step.desc}</p>
                    </div>
                  </div>
                ))}
              </div>
            </div>
            <div className="bg-gradient-to-br from-cyan-600 to-blue-700 rounded-[3rem] p-12 text-white space-y-8 shadow-2xl relative overflow-hidden">
               <div className="absolute top-0 right-0 w-64 h-64 bg-white/10 rounded-full blur-3xl -translate-y-1/2 translate-x-1/2"></div>
               <FaBolt className="text-4xl text-cyan-200 mb-2" />
               <h3 className="text-3xl font-black leading-tight">Why Choose MagicScale for your Cloud Kitchen?</h3>
               <p className="text-cyan-50 text-lg opacity-90 leading-relaxed font-medium">
                 We've successfully launched 2000+ kitchens across India. We don't just give you a list of things to do; we execute them for you. Our goal is to ensure you hit ROI as fast as possible.
               </p>
               <button
                 onClick={handleStartConsultation}
                 className="w-full bg-white text-cyan-700 py-4 rounded-2xl font-bold text-lg hover:bg-cyan-50 transition-colors shadow-xl"
               >
                 Book Free Consultation
               </button>
            </div>
          </div>
        </div>
      </section>

      {/* --- Final CTA Section --- */}
      <section className="py-20 text-center space-y-10">
        <h2 className="text-4xl md:text-5xl font-black text-gray-900 dark:text-white">Ready to Cook? <br /> <span className="text-cyan-600">We'll handle the rest.</span></h2>
        <button
          onClick={handleStartConsultation}
          className="bg-cyan-600 dark:bg-cyan-500 hover:bg-cyan-700 dark:hover:bg-cyan-600 text-white px-10 py-5 rounded-[2rem] text-xl font-bold shadow-2xl shadow-cyan-600/20 transition-all hover:-translate-y-1"
        >
          Get Started Now
        </button>
      </section>

      <Footer />
    </div>
  );
};

export default CloudKitchenDetails;
