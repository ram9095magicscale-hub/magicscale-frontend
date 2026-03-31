import React, { useState } from 'react';
import { motion, AnimatePresence } from 'framer-motion';
import { FaChevronDown, FaCheckCircle, FaRocket, FaShieldAlt, FaUsers, FaArrowRight, FaHeadset, FaSearch } from 'react-icons/fa';
import HomeServices from '../components/HomeWork';
import heroBg from '../assets/services_hero_bg.png';
import { companyDetails } from '../data/companyDetails';

const ServicesPage = () => {
  const [activeFaq, setActiveFaq] = useState(null);

  const toggleFaq = (index) => {
    setActiveFaq(activeFaq === index ? null : index);
  };

  const faqs = [
    {
      question: "How long does the Zomato/Swiggy onboarding process take?",
      answer: "Typically, the onboarding process takes 7-14 business days, depending on document verification and platform approval times. We handle all the follow-ups to ensure it's as fast as possible."
    },
    {
      question: "What documents are required for FSSAI registration?",
      answer: "Basic requirements include an ID proof, address proof of the business premises, and a declaration form. Our experts will guide you through the specific list based on your business category."
    },
    {
      question: "Do you provide support after the setup is complete?",
      answer: "Yes! We offer a 30-day post-setup support period to ensure your menu is optimized, your dashboard is working correctly, and you're getting your first set of orders smoothly."
    },
    {
      question: "Can I upgrade my growth plan later?",
      answer: "Absolutely. You can start with our Basic Setup and upgrade to a Growth or Premium plan at any time as your business scales."
    }
  ];

  const processSteps = [
    {
      title: "Consultation",
      desc: "We analyze your business needs and recommend the best setup strategy.",
      icon: <FaUsers className="text-indigo-500" />
    },
    {
      title: "Execution",
      desc: "Our experts handle all paperwork, registrations, and platform listing.",
      icon: <FaRocket className="text-purple-500" />
    },
    {
      title: "Optimization",
      desc: "We fine-tune your presence for maximum visibility and revenue growth.",
      icon: <FaCheckCircle className="text-emerald-500" />
    }
  ];

  const valueProps = [
    { title: "Expert Guidance", desc: "10+ years of experience in the food tech industry.", icon: <FaShieldAlt /> },
    { title: "Fast Turnaround", desc: "Get live on platforms in record time with our streamlined process.", icon: <FaRocket /> },
    { title: "24/7 Support", desc: "Dedicated account managers to help you at every step.", icon: <FaHeadset /> },
    { title: "Compliance First", desc: "We ensure all your licenses and registrations are 100% legal.", icon: <FaCheckCircle /> }
  ];

  return (
    <div className="bg-white dark:bg-slate-950 transition-colors duration-500 overflow-hidden font-poppins">
      
      {/* Premium Hero Section */}
      <section className="relative min-h-[70vh] flex items-center pt-20 overflow-hidden">
        {/* Animated Background */}
        <div className="absolute inset-0 z-0">
          <img 
            src={heroBg} 
            alt="Hero Background" 
            className="w-full h-full object-cover opacity-90 dark:opacity-40 scale-110 animate-pulse-slow" 
          />
          <div className="absolute inset-0 bg-gradient-to-b from-white/20 via-white/40 to-white dark:from-slate-950/20 dark:via-slate-950/60 dark:to-slate-950"></div>
          {/* Floating Decorative Elements */}
          <div className="absolute top-1/4 left-1/4 w-64 h-64 bg-indigo-500/20 rounded-full blur-[100px] animate-blob"></div>
          <div className="absolute bottom-1/4 right-1/4 w-64 h-64 bg-purple-500/20 rounded-full blur-[100px] animate-blob animation-delay-2000"></div>
        </div>

        <div className="max-w-7xl mx-auto px-6 relative z-10 w-full text-center">
          <motion.div
            initial={{ opacity: 0, y: 30 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.8 }}
          >
            <span className="inline-block px-4 py-1.5 rounded-full bg-indigo-100 dark:bg-indigo-900/50 text-indigo-600 dark:text-indigo-400 text-xs font-bold tracking-widest uppercase mb-6 border border-indigo-200 dark:border-indigo-800/50">
              Transform Your Vision into Reality
            </span>
            <h1 className="text-5xl md:text-7xl font-black text-gray-900 dark:text-white mb-8 leading-[1.1] tracking-tight">
              Scale Your Food <br />
              <span className="text-transparent bg-clip-text bg-gradient-to-r from-indigo-600 to-purple-600 dark:from-indigo-400 dark:to-purple-400">
                Business Faster
              </span>
            </h1>
            <p className="text-xl text-gray-600 dark:text-slate-300 max-w-2xl mx-auto mb-10 font-medium leading-relaxed">
              We provide the tools, expertise, and support you need to launch, manage, and dominate your local food market.
            </p>
            <div className="flex flex-col sm:flex-row gap-4 justify-center items-center">
              <a 
                href="#services" 
                className="px-10 py-4 bg-indigo-600 hover:bg-indigo-700 text-white font-bold rounded-2xl shadow-xl shadow-indigo-600/20 transition-all hover:-translate-y-1 flex items-center gap-2 group"
              >
                Explore Services
                <FaArrowRight className="group-hover:translate-x-1 transition-transform" />
              </a>
              <a 
                href="#why-us" 
                className="px-10 py-4 bg-white dark:bg-slate-900 text-gray-900 dark:text-white font-bold rounded-2xl border border-gray-200 dark:border-slate-800 hover:border-indigo-500 transition-all"
              >
                Learn More
              </a>
            </div>
          </motion.div>
        </div>
      </section>

      {/* Trust Bar (Optional Marquee vibe) */}
      <div className="py-10 border-y border-gray-100 dark:border-slate-900 bg-gray-50/50 dark:bg-slate-900/20 backdrop-blur-sm">
        <div className="max-w-7xl mx-auto px-6 flex flex-wrap justify-center items-center gap-12 opacity-60 grayscale hover:grayscale-0 transition-all duration-500">
          <div className="flex items-center gap-2 font-bold text-gray-400 uppercase tracking-widest text-sm">
             Verified Partners
          </div>
          {/* Add small placeholder partner logos or icons if needed */}
        </div>
      </div>

      {/* Main Services component */}
      <div id="services">
        <HomeServices />
      </div>

      {/* Process Section */}
      <section className="py-32 relative overflow-hidden bg-white dark:bg-slate-950">
        <div className="max-w-7xl mx-auto px-6 relative z-10">
          <div className="text-center mb-20">
            <h2 className="text-sm font-bold tracking-widest text-indigo-600 dark:text-indigo-400 uppercase mb-3">Our Workflow</h2>
            <h3 className="text-4xl md:text-5xl font-extrabold text-gray-900 dark:text-white tracking-tight">
              Simplified <span className="text-indigo-600 dark:text-indigo-400">Onboarding</span>
            </h3>
          </div>

          <div className="grid md:grid-cols-3 gap-12">
            {processSteps.map((step, idx) => (
              <motion.div 
                key={idx}
                initial={{ opacity: 0, y: 20 }}
                whileInView={{ opacity: 1, y: 0 }}
                viewport={{ once: true }}
                transition={{ delay: idx * 0.2 }}
                className="relative p-10 rounded-[2.5rem] bg-gray-50 dark:bg-slate-900/50 border border-gray-100 dark:border-white/5 hover:border-indigo-500/30 transition-all group"
              >
                <div className="text-5xl font-black text-gray-200 dark:text-slate-800 absolute top-6 right-8 group-hover:text-indigo-500/10 transition-colors">
                  0{idx + 1}
                </div>
                <div className="w-16 h-16 rounded-2xl bg-white dark:bg-slate-800 shadow-lg flex items-center justify-center text-3xl mb-8 border border-gray-100 dark:border-slate-700 group-hover:scale-110 transition-transform">
                  {step.icon}
                </div>
                <h4 className="text-2xl font-bold text-gray-900 dark:text-white mb-4">{step.title}</h4>
                <p className="text-gray-600 dark:text-slate-400 font-medium leading-relaxed">
                  {step.desc}
                </p>
              </motion.div>
            ))}
          </div>
        </div>
      </section>

      {/* Why Choose Us */}
      <section id="why-us" className="py-32 bg-indigo-600 dark:bg-indigo-950 rounded-[3rem] mx-4 md:mx-8 mb-32 relative overflow-hidden">
        <div className="absolute inset-0 bg-grid-white/[0.05] bg-[size:30px_30px]"></div>
        <div className="absolute top-0 right-0 w-[500px] h-[500px] bg-white/10 rounded-full blur-[120px] -translate-y-1/2 translate-x-1/2"></div>
        
        <div className="max-w-7xl mx-auto px-6 relative z-10">
          <div className="grid lg:grid-cols-2 gap-20 items-center">
            <div>
              <h2 className="text-4xl md:text-5xl font-extrabold text-white mb-8 tracking-tight">
                Why thousands of food business owners <span className="text-indigo-200">trust MagicScale.</span>
              </h2>
              <p className="text-xl text-indigo-100 mb-12 font-medium opacity-90 leading-relaxed">
                We don't just set up your business; we engineer it for long-term success with data-driven strategies and premium support.
              </p>
              
              <div className="grid sm:grid-cols-2 gap-8">
                {valueProps.map((prop, idx) => (
                  <div key={idx} className="flex gap-4">
                    <div className="flex-shrink-0 w-12 h-12 rounded-xl bg-white/20 backdrop-blur-md flex items-center justify-center text-white text-xl">
                      {prop.icon}
                    </div>
                    <div>
                      <h5 className="text-lg font-bold text-white mb-2">{prop.title}</h5>
                      <p className="text-indigo-100 text-sm opacity-80 leading-snug">{prop.desc}</p>
                    </div>
                  </div>
                ))}
              </div>
            </div>
            
            <div className="relative">
              <div className="aspect-square rounded-[3rem] bg-white/10 backdrop-blur-md border border-white/20 p-4 shadow-2xl relative overflow-hidden group">
                <img 
                  src="https://images.unsplash.com/photo-1552566626-52f8b828add9?auto=format&fit=crop&q=80&w=800" 
                  alt="Restaurant Success" 
                  className="w-full h-full object-cover rounded-[2.5rem] grayscale group-hover:grayscale-0 transition-all duration-700" 
                />
                <div className="absolute inset-0 bg-indigo-600/20 group-hover:bg-transparent transition-colors duration-500"></div>
                
                {/* Float Card */}
                <motion.div 
                  animate={{ y: [0, -20, 0] }}
                  transition={{ duration: 4, repeat: Infinity, ease: "easeInOut" }}
                  className="absolute bottom-10 -left-6 bg-white dark:bg-slate-900 p-6 rounded-2xl shadow-2xl border border-gray-100 dark:border-slate-800"
                >
                  <div className="flex items-center gap-4 mb-3">
                    <div className="w-12 h-12 rounded-full bg-emerald-100 dark:bg-emerald-900/50 flex items-center justify-center text-emerald-600">
                      <FaRocket />
                    </div>
                    <div>
                      <p className="text-xs font-bold text-gray-500 uppercase">Success Rate</p>
                      <p className="text-2xl font-black text-gray-900 dark:text-white">99.8%</p>
                    </div>
                  </div>
                  <div className="h-2 w-48 bg-gray-100 dark:bg-slate-800 rounded-full overflow-hidden">
                    <div className="h-full w-[99.8%] bg-emerald-500 rounded-full"></div>
                  </div>
                </motion.div>
              </div>
            </div>
          </div>
        </div>
      </section>

      {/* FAQ Section */}
      <section className="py-32 max-w-4xl mx-auto px-6">
        <div className="text-center mb-16">
          <h2 className="text-sm font-bold tracking-widest text-indigo-600 dark:text-indigo-400 uppercase mb-3">Questions?</h2>
          <h3 className="text-4xl font-extrabold text-gray-900 dark:text-white">Frequently Asked Questions</h3>
        </div>

        <div className="space-y-4">
          {faqs.map((faq, idx) => (
            <div 
              key={idx} 
              className={`border rounded-2xl transition-all ${activeFaq === idx ? 'border-indigo-500 bg-indigo-50/20 dark:bg-indigo-900/10' : 'border-gray-100 dark:border-slate-900'}`}
            >
              <button 
                onClick={() => toggleFaq(idx)}
                className="w-full px-8 py-6 text-left flex justify-between items-center group"
              >
                <span className={`text-lg font-bold ${activeFaq === idx ? 'text-indigo-600 dark:text-indigo-400' : 'text-gray-900 dark:text-white'}`}>
                  {faq.question}
                </span>
                <FaChevronDown className={`transition-transform duration-300 ${activeFaq === idx ? 'rotate-180 text-indigo-600' : 'text-gray-400 group-hover:text-gray-600'}`} />
              </button>
              <AnimatePresence>
                {activeFaq === idx && (
                  <motion.div 
                    initial={{ height: 0, opacity: 0 }}
                    animate={{ height: "auto", opacity: 1 }}
                    exit={{ height: 0, opacity: 0 }}
                    transition={{ duration: 0.3 }}
                    className="overflow-hidden"
                  >
                    <div className="px-8 pb-8 text-gray-600 dark:text-slate-400 font-medium leading-relaxed">
                      {faq.answer}
                    </div>
                  </motion.div>
                )}
              </AnimatePresence>
            </div>
          ))}
        </div>
      </section>

      {/* Enhanced CTA */}
      <section className="py-20 bg-gray-50 dark:bg-slate-900/50 border-t border-gray-100 dark:border-slate-900">
        <div className="max-w-4xl mx-auto px-6 text-center">
          <div className="w-20 h-20 bg-indigo-100 dark:bg-indigo-900/50 rounded-full flex items-center justify-center mx-auto mb-8 text-indigo-600 text-3xl">
             <FaHeadset />
          </div>
          <h2 className="text-4xl font-black text-gray-900 dark:text-white mb-6 tracking-tight">Need a customized solution?</h2>
          <p className="text-xl text-gray-600 dark:text-slate-300 mb-12 font-medium leading-relaxed">
            Every business is unique. Our experts are ready to build a tailored registration and growth strategy specifically for your brand.
          </p>
          <div className="flex flex-col sm:flex-row gap-4 justify-center">
            <a 
              href="mailto:help@magicscale.in" 
              className="px-10 py-4 bg-indigo-600 hover:bg-indigo-700 text-white font-bold rounded-2xl shadow-xl shadow-indigo-600/30 transition-all hover:-translate-y-1"
            >
              Contact our Experts
            </a>
            <a 
              href={`https://wa.me/${companyDetails.phone.whatsappGroup}?text=I%20want%20to%20get%20a%20free%20quote%20for%20MagicScale%20services.`}
              target="_blank"
              rel="noopener noreferrer"
              className="px-10 py-4 bg-white dark:bg-slate-800 text-gray-900 dark:text-white font-bold rounded-2xl border border-gray-200 dark:border-slate-700 hover:border-indigo-500 transition-all flex items-center justify-center"
            >
              Get a Free Quote
            </a>
          </div>
        </div>
      </section>
    </div>
  );
};

export default ServicesPage;

