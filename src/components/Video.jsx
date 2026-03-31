import React from "react";
import YoutubeVideo from "./YoutubeVideo";
import { motion } from "framer-motion";
import { CheckCircle2 } from "lucide-react";

const Video = () => {
  return (
    <div 
      id="video" 
      className="relative py-24 px-6 sm:px-12 md:px-24 overflow-hidden bg-white dark:bg-slate-950 font-poppins transition-colors duration-500"
    >
      {/* Decorative Background grid/blobs */}
      <div className="absolute inset-0 bg-[linear-gradient(to_right,#80808008_1px,transparent_1px),linear-gradient(to_bottom,#80808008_1px,transparent_1px)] bg-[size:32px_32px] dark:opacity-20"></div>
      <div className="absolute top-0 right-0 -translate-y-1/2 translate-x-1/2 w-[600px] h-[600px] bg-indigo-50/50 dark:bg-indigo-500/5 rounded-full blur-[120px] pointer-events-none"></div>
      <div className="absolute bottom-0 left-0 translate-y-1/2 -translate-x-1/2 w-[600px] h-[600px] bg-sky-50/50 dark:bg-indigo-500/5 rounded-full blur-[120px] pointer-events-none"></div>

      <div className="max-w-7xl mx-auto relative z-10">
        <div className="flex flex-col lg:flex-row items-center gap-16 lg:gap-24">
          
          {/* Left Content: The Story/Mission */}
          <motion.div 
            initial={{ opacity: 0, x: -40 }}
            whileInView={{ opacity: 1, x: 0 }}
            viewport={{ once: true }}
            transition={{ duration: 0.8, ease: "easeOut" }}
            className="flex-1 space-y-8"
          >
            <div>
              <motion.h2 
                initial={{ opacity: 0, y: 10 }}
                whileInView={{ opacity: 1, y: 0 }}
                viewport={{ once: true }}
                className="text-indigo-600 dark:text-indigo-400 font-bold tracking-widest uppercase text-sm mb-4"
              >
                Our Mission & Story
              </motion.h2>
              <h3 className="text-4xl sm:text-5xl lg:text-6xl font-extrabold text-gray-900 dark:text-white leading-[1.15]">
                Empowering the Next Generation of <span className="text-transparent bg-clip-text bg-gradient-to-r from-indigo-600 to-sky-600 dark:from-indigo-400 dark:to-sky-400">Food Entrepreneurs</span>
              </h3>
            </div>

            <p className="text-lg text-gray-600 dark:text-gray-300 leading-relaxed font-medium">
              MagicScale isn't just a service provider; we're your partner in digital transformation. We saw the struggle of local restaurants trying to keep up with the digital age, and we decided to build a bridge to their success.
            </p>

            <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-1 gap-y-4 gap-x-8">
              {[
                "Expert onboarding for Swiggy and Zomato platforms.",
                "Seamless FSSAI and GST licensing support.",
                "Data-driven growth strategies to boost revenue.",
                "Over 500+ restaurants successfully scaled nationwide."
              ].map((item, idx) => (
                <motion.div 
                  key={idx}
                  initial={{ opacity: 0, x: -20 }}
                  whileInView={{ opacity: 1, x: 0 }}
                  viewport={{ once: true }}
                  transition={{ delay: 0.2 + idx * 0.1 }}
                  className="flex items-start gap-4"
                >
                  <CheckCircle2 className="text-indigo-500 dark:text-indigo-400 w-6 h-6 flex-shrink-0 mt-1" />
                  <span className="text-gray-700 dark:text-gray-200 font-semibold">{item}</span>
                </motion.div>
              ))}
            </div>

            <div className="pt-4 flex flex-col sm:flex-row gap-4">
              <motion.button 
                whileHover={{ scale: 1.05 }}
                whileTap={{ scale: 0.95 }}
                className="px-10 py-4 bg-indigo-600 dark:bg-indigo-500 text-white rounded-2xl font-bold shadow-xl shadow-indigo-200 dark:shadow-none hover:bg-indigo-700 dark:hover:bg-indigo-600 transition-all duration-300"
              >
                Learn More About Us
              </motion.button>
            </div>
          </motion.div>

          {/* Right Content: The Video Player */}
          <motion.div 
            initial={{ opacity: 0, x: 40 }}
            whileInView={{ opacity: 1, x: 0 }}
            viewport={{ once: true }}
            transition={{ duration: 0.8, ease: "easeOut" }}
            className="flex-1 w-full lg:max-w-2xl"
          >
            <div className="relative group">
              {/* Decorative Frame */}
              <div className="absolute -inset-4 bg-gradient-to-tr from-indigo-600/20 to-sky-400/20 rounded-[2.5rem] blur-2xl group-hover:opacity-100 opacity-50 transition-opacity duration-500"></div>
              
              <div className="relative bg-white dark:bg-slate-900/80 backdrop-blur-sm p-3 rounded-[2rem] shadow-2xl dark:shadow-indigo-500/10 border border-gray-100 dark:border-slate-800/50 ring-1 ring-black/5 dark:ring-white/10 overflow-hidden transition-colors">
                <YoutubeVideo videoId={"j8cPFeu8fQQ"} title="MagicScale Intro" />
              </div>
              

            </div>
          </motion.div>

        </div>
      </div>
    </div>
  );
};

export default Video;
