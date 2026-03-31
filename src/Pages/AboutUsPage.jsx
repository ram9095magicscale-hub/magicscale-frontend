import React, { useEffect } from "react";
import Header from "../components/Header";
import About from "../components/About";
import Contact from "../components/Contact";
import FAQ from "../components/FAQ";
import Footer from "../components/Footer";
import { motion } from "framer-motion";

const AboutUsPage = () => {
  useEffect(() => {
    window.scrollTo(0, 0);
  }, []);

  return (
    <div className="min-h-screen bg-white dark:bg-slate-950 transition-colors duration-500 font-poppins">

      <main className="pt-20">
        {/* Elegant Hero Section */}
        <div className="relative py-24 px-6 sm:px-12 md:px-24 overflow-hidden">
            {/* Background Decorations */}
            <div className="absolute inset-0 z-0">
                <div className="absolute top-0 left-1/4 w-[500px] h-[500px] bg-indigo-100/50 dark:bg-indigo-500/5 rounded-full blur-[120px] -translate-y-1/2"></div>
                <div className="absolute bottom-0 right-1/4 w-[400px] h-[400px] bg-sky-100/50 dark:bg-sky-500/5 rounded-full blur-[100px] translate-y-1/2"></div>
                <div className="absolute inset-0 bg-[linear-gradient(to_right,#80808005_1px,transparent_1px),linear-gradient(to_bottom,#80808005_1px,transparent_1px)] bg-[size:40px_40px] dark:bg-none"></div>
            </div>

            <div className="max-w-7xl mx-auto relative z-10">
                <div className="flex flex-col items-center text-center space-y-8">
                    <motion.div
                        initial={{ opacity: 0, scale: 0.9 }}
                        animate={{ opacity: 1, scale: 1 }}
                        className="px-4 py-1.5 rounded-full bg-indigo-50 dark:bg-indigo-900/30 border border-indigo-100 dark:border-indigo-800 text-indigo-600 dark:text-indigo-400 text-xs font-bold uppercase tracking-widest"
                    >
                        Our Story
                    </motion.div>
                    <motion.h1 
                        initial={{ opacity: 0, y: 30 }}
                        animate={{ opacity: 1, y: 0 }}
                        transition={{ duration: 0.8 }}
                        className="text-5xl md:text-7xl font-extrabold text-gray-900 dark:text-white leading-[1.1]"
                    >
                        Pioneering the Future of <br />
                        <span className="text-transparent bg-clip-text bg-gradient-to-r from-indigo-600 to-sky-600 dark:from-indigo-400 dark:to-sky-400">Digital Dining</span>
                    </motion.h1>
                    <motion.p 
                        initial={{ opacity: 0, y: 20 }}
                        animate={{ opacity: 1, y: 0 }}
                        transition={{ delay: 0.2, duration: 0.8 }}
                        className="mt-6 text-xl text-gray-600 dark:text-gray-400 max-w-3xl mx-auto leading-relaxed"
                    >
                        We’re more than a consultancy. We’re your dedicated partner in navigating the complex world of cloud kitchens and digital food platforms.
                    </motion.p>
                </div>
            </div>
        </div>

        {/* Content Section - Removing redundant title */}
        <div className="-mt-12 bg-transparent">
            <About showTitle={false} />
        </div>

        {/* Enhanced Values/Features Section */}
        <section className="py-32 px-6 sm:px-12 md:px-24 bg-gray-50/50 dark:bg-slate-900/30 border-y border-gray-100 dark:border-white/5 relative overflow-hidden">
            <div className="absolute top-0 right-0 w-64 h-64 bg-indigo-500/5 blur-3xl rounded-full"></div>
            <div className="max-w-7xl mx-auto relative z-10">
                <div className="grid grid-cols-1 md:grid-cols-3 gap-8">
                    {[
                        {
                            title: "Our Vision",
                            description: "To become the backbone of India's digital food ecosystem, making restaurant ownership accessible and profitable for everyone.",
                            icon: "1",
                            color: "indigo"
                        },
                        {
                            title: "Our Values",
                            description: "Transparency, radical speed, and real human support are at the core of every partnership we build at MagicScale.",
                            icon: "2",
                            color: "sky"
                        },
                        {
                            title: "Our Promise",
                            description: "We don't just provide services; we stick with you as partners until your kitchen is successfully scaled and truly profitable.",
                            icon: "3",
                            color: "green"
                        }
                    ].map((item, idx) => (
                        <motion.div 
                            key={idx}
                            initial={{ opacity: 0, y: 20 }}
                            whileInView={{ opacity: 1, y: 0 }}
                            viewport={{ once: true }}
                            transition={{ delay: idx * 0.1 }}
                            className="group p-10 bg-white dark:bg-slate-900/50 rounded-[2.5rem] border border-gray-100 dark:border-slate-800 shadow-xl shadow-gray-200/20 dark:shadow-none hover:border-indigo-200 dark:hover:border-indigo-500/30 transition-all duration-300"
                        >
                            <div className={`w-14 h-14 bg-${item.color}-100 dark:bg-${item.color}-900/30 rounded-2xl flex items-center justify-center text-${item.color}-600 dark:text-${item.color}-400 font-black text-2xl group-hover:scale-110 transition-transform`}>
                                {item.icon}
                            </div>
                            <h4 className="mt-8 text-2xl font-bold text-gray-900 dark:text-white leading-tight">{item.title}</h4>
                            <p className="mt-4 text-gray-600 dark:text-gray-400 leading-relaxed font-medium">{item.description}</p>
                        </motion.div>
                    ))}
                </div>
            </div>
        </section>

        {/* Call to Action - Final Polish */}
        <section className="py-24 px-6 relative overflow-hidden">
            <div className="max-w-4xl mx-auto text-center border border-indigo-100 dark:border-indigo-900 bg-indigo-600 dark:bg-indigo-600 rounded-[3rem] p-12 md:p-20 shadow-2xl shadow-indigo-200 dark:shadow-none">
                <h3 className="text-3xl md:text-5xl font-black text-white leading-tight">Ready to scale your <br /> culinary dream?</h3>
                <p className="mt-6 text-indigo-100 text-lg opacity-90">Join 300+ successful kitchens that started their journey with us.</p>
                <div className="mt-10 flex flex-col sm:flex-row justify-center gap-4">
                    <button className="px-10 py-4 bg-white text-indigo-600 rounded-2xl font-bold hover:bg-gray-50 transition-colors">Contact Us Today</button>
                    <button className="px-10 py-4 bg-indigo-700 text-white border border-indigo-400/30 rounded-2xl font-bold hover:bg-indigo-800 transition-colors">Our Services</button>
                </div>
            </div>
        </section>
        
        {/* FAQ Section */}
        <FAQ />

        {/* Contact Section */}
        <div className="bg-white dark:bg-slate-950 relative z-20">
            <Contact />
        </div>
      </main>
      <Footer />
    </div>
  );
};

export default AboutUsPage;
