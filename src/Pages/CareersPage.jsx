import React, { useEffect, useState } from "react";
import Header from "../components/Header";
import Footer from "../components/Footer";
import { motion } from "framer-motion";
import { Briefcase, Users, Zap, Heart, ArrowRight } from "lucide-react";
import { companyDetails } from "../data/companyDetails";
import { Link } from "react-router-dom";
import axios from "axios";
import { API_URL } from "../services/api";

const CareersPage = () => {
  const [jobPosts, setJobPosts] = useState([]);

  useEffect(() => {
    window.scrollTo(0, 0);
    const fetchJobs = async () => {
      try {
        const res = await axios.get(`${API_URL}/jobs`);
        setJobPosts(res.data);
      } catch (err) {
        console.error("Failed to fetch jobs", err);
      }
    };
    fetchJobs();
  }, []);

  const values = [
    {
      title: "Innovation First",
      description: "We constantly reinvent how kitchens operate in the digital age.",
      icon: <Zap size={20} />
    },
    {
      title: "People Centric",
      description: "Our team's growth is just as important as our partners' growth.",
      icon: <Users size={20} />
    },
    {
      title: "Radical Speed",
      description: "We move fast, learn faster, and deliver results that matter.",
      icon: <Zap size={20} />
    }
  ];

  return (
    <div className="min-h-screen bg-white dark:bg-slate-950 transition-colors duration-500 font-poppins">

      
      <main className="pt-20">
        {/* Elegant Hero Section */}
        <div className="relative py-24 px-6 sm:px-12 md:px-24 overflow-hidden">
          <div className="absolute inset-0 z-0">
            <div className="absolute top-0 left-1/4 w-[500px] h-[500px] bg-indigo-100/50 dark:bg-indigo-500/5 rounded-full blur-[120px] -translate-y-1/2"></div>
            <div className="absolute bottom-0 right-1/4 w-[400px] h-[400px] bg-sky-100/50 dark:bg-sky-500/5 rounded-full blur-[100px] translate-y-1/2"></div>
          </div>

          <div className="max-w-7xl mx-auto relative z-10 text-center">
            <motion.div
              initial={{ opacity: 0, scale: 0.9 }}
              animate={{ opacity: 1, scale: 1 }}
              className="inline-block px-4 py-1.5 rounded-full bg-indigo-50 dark:bg-indigo-900/30 border border-indigo-100 dark:border-indigo-800 text-indigo-600 dark:text-indigo-400 text-xs font-bold uppercase tracking-widest mb-8"
            >
              Join the Revolution
            </motion.div>
            <motion.h1 
              initial={{ opacity: 0, y: 30 }}
              animate={{ opacity: 1, y: 0 }}
              transition={{ duration: 0.8 }}
              className="text-5xl md:text-7xl font-extrabold text-gray-900 dark:text-white leading-[1.1]"
            >
              Shape the Future of <br />
              <span className="text-transparent bg-clip-text bg-gradient-to-r from-indigo-600 to-sky-600 dark:from-indigo-400 dark:to-sky-400">Digital Dining</span>
            </motion.h1>
            <motion.p 
              initial={{ opacity: 0, y: 20 }}
              animate={{ opacity: 1, y: 0 }}
              transition={{ delay: 0.2, duration: 0.8 }}
              className="mt-8 text-xl text-gray-600 dark:text-gray-400 max-w-2xl mx-auto leading-relaxed"
            >
              We're looking for passionate individuals to help us empower the next generation of food entrepreneurs across India.
            </motion.p>
          </div>
        </div>

        {/* Culture Section */}
        <section className="py-24 px-6 sm:px-12 md:px-24 bg-gray-50/50 dark:bg-slate-900/30 border-y border-gray-100 dark:border-white/5">
          <div className="max-w-7xl mx-auto">
            <div className="grid grid-cols-1 md:grid-cols-3 gap-12">
              {values.map((value, idx) => (
                <motion.div 
                  key={idx}
                  initial={{ opacity: 0, y: 20 }}
                  whileInView={{ opacity: 1, y: 0 }}
                  viewport={{ once: true }}
                  transition={{ delay: idx * 0.1 }}
                  className="space-y-4 text-center md:text-left"
                >
                  <div className="w-12 h-12 bg-indigo-600 text-white rounded-xl flex items-center justify-center mx-auto md:mx-0 shadow-lg shadow-indigo-200 dark:shadow-none">
                    {value.icon}
                  </div>
                  <h3 className="text-xl font-bold text-gray-900 dark:text-white">{value.title}</h3>
                  <p className="text-gray-600 dark:text-gray-400 leading-relaxed">{value.description}</p>
                </motion.div>
              ))}
            </div>
          </div>
        </section>

        {/* Open Positions Section */}
        <section className="py-32 px-6 sm:px-12 md:px-24">
          <div className="max-w-7xl mx-auto">
            <div className="text-center mb-16 space-y-4">
              <h2 className="text-4xl font-black text-gray-900 dark:text-white">Open Positions</h2>
              <p className="text-gray-600 dark:text-gray-400">Come do the best work of your life.</p>
            </div>

            <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8">
              {jobPosts.map((job, idx) => (
                <motion.div
                  key={idx}
                  whileHover={{ y: -10 }}
                  className="group p-8 bg-white dark:bg-slate-900 rounded-[2rem] border border-gray-100 dark:border-slate-800 shadow-xl shadow-gray-200/20 dark:shadow-none hover:border-indigo-500/30 transition-all duration-300"
                >
                  <div className="flex justify-between items-start mb-6">
                    <div className="p-3 bg-gray-50 dark:bg-slate-800 rounded-2xl group-hover:bg-indigo-50 dark:group-hover:bg-indigo-900/30 transition-colors">
                      <Briefcase className="text-indigo-600 dark:text-indigo-400" size={24} />
                    </div>
                    <span className="px-3 py-1 bg-green-100 dark:bg-green-900/30 text-green-600 dark:text-green-400 text-[10px] font-bold uppercase tracking-wider rounded-full">
                      {job.type}
                    </span>
                  </div>
                  <h3 className="text-xl font-bold text-gray-900 dark:text-white mb-2">{job.title}</h3>
                  <p className="text-xs font-semibold text-indigo-600 dark:text-indigo-400 mb-4">{job.location}</p>
                  <p className="text-gray-600 dark:text-gray-400 text-sm leading-relaxed mb-6">
                    {job.description}
                  </p>
                  <Link 
                    to={`/careers/${job._id || job.id}`}
                    className="flex items-center gap-2 text-gray-900 dark:text-white font-bold text-sm group-hover:text-indigo-600 dark:group-hover:text-indigo-400 transition-colors"
                  >
                    Apply Now <ArrowRight size={16} className="group-hover:translate-x-1 transition-transform" />
                  </Link>
                </motion.div>
              ))}
            </div>
          </div>
        </section>

        {/* CTA Section */}
        <section className="py-24 px-6">
          <div className="max-w-4xl mx-auto bg-indigo-600 rounded-[3rem] p-12 md:p-20 text-center relative overflow-hidden shadow-2xl shadow-indigo-200 dark:shadow-none">
            <div className="absolute top-0 right-0 w-64 h-64 bg-white/10 blur-3xl rounded-full -translate-y-1/2 translate-x-1/2"></div>
            <h3 className="text-3xl md:text-5xl font-black text-white leading-tight relative z-10">Don’t see a perfect <br /> match?</h3>
            <p className="mt-6 text-indigo-100 text-lg opacity-90 relative z-10">We’re always looking for great talent. Send your details anyway!</p>
            <div className="mt-10 flex flex-col sm:flex-row justify-center gap-4 relative z-10">
              <a 
                href="mailto:magicscale88@gmail.com"
                className="px-10 py-4 bg-white text-indigo-600 rounded-2xl font-bold hover:bg-gray-50 transition-colors"
              >
                Mail Resume
              </a>
              <a 
                href="https://wa.me/919311330885"
                target="_blank"
                rel="noopener noreferrer"
                className="px-10 py-4 bg-indigo-700 text-white border border-indigo-400/30 rounded-2xl font-bold hover:bg-indigo-800 transition-colors"
              >
                WhatsApp Us
              </a>
            </div>
          </div>
        </section>
      </main>

      <Footer />
    </div>
  );
};

export default CareersPage;
