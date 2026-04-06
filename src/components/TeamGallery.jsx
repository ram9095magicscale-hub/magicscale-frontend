import React from "react";
import { motion } from "framer-motion";
import { culture1, culture2, portrait_vishal, portrait_ananya, portrait_rahul, office_interior, team_meeting, office_reception } from "../assets";

const TeamGallery = () => {
  const images = [
    { src: office_reception, span: "md:col-span-2 md:row-span-2", alt: "MagicScale Headquarters" },
    { src: culture1, span: "md:col-span-2 md:row-span-1", alt: "Team Collaboration" },
    { src: team_meeting, span: "md:col-span-1 md:row-span-1", alt: "Strategy Session" },
    { src: office_interior, span: "md:col-span-1 md:row-span-1", alt: "Work Environment" },
    { src: culture2, span: "md:col-span-2 md:row-span-1", alt: "Cultural Vibes" },
    { src: portrait_ananya, span: "md:col-span-1 md:row-span-1", alt: "Operations Focus" },
    { src: portrait_vishal, span: "md:col-span-1 md:row-span-1", alt: "Leadership" },
  ];

  return (
    <section className="py-32 px-6 sm:px-12 md:px-24 bg-white dark:bg-slate-950 overflow-hidden">
      <div className="max-w-7xl mx-auto">
        <div className="text-center mb-16">
          <motion.div
            initial={{ opacity: 0, scale: 0.9 }}
            whileInView={{ opacity: 1, scale: 1 }}
            viewport={{ once: true }}
            className="inline-block px-4 py-1.5 rounded-full bg-sky-50 dark:bg-sky-900/30 border border-sky-100 dark:border-sky-800 text-sky-600 dark:text-sky-400 text-xs font-bold uppercase tracking-widest mb-6"
          >
            Life at MagicScale
          </motion.div>
          <motion.h2
            initial={{ opacity: 0, y: 20 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
            transition={{ duration: 0.6 }}
            className="text-4xl md:text-5xl font-black text-gray-900 dark:text-white"
          >
            Snapshots of Our <span className="text-transparent bg-clip-text bg-gradient-to-r from-sky-600 to-indigo-600 dark:from-sky-400 dark:to-indigo-400">Journey</span>
          </motion.h2>
        </div>

        <div className="grid grid-cols-1 md:grid-cols-4 gap-4 auto-rows-[250px]">
          {images.map((img, idx) => (
            <motion.div
              key={idx}
              initial={{ opacity: 0, scale: 0.9 }}
              whileInView={{ opacity: 1, scale: 1 }}
              viewport={{ once: true }}
              transition={{ duration: 0.6, delay: idx * 0.1 }}
              className={`${img.span} relative rounded-[2rem] overflow-hidden group shadow-xl border border-gray-100 dark:border-white/5 shadow-gray-200/50 dark:shadow-none`}
            >
              <img
                src={img.src}
                alt={img.alt}
                className="w-full h-full object-cover transition-transform duration-700 group-hover:scale-110"
              />
              <div className="absolute inset-0 bg-gradient-to-t from-black/60 to-transparent opacity-0 group-hover:opacity-100 transition-opacity duration-500 flex items-end p-6">
                <p className="text-white font-bold text-sm tracking-wide uppercase">{img.alt}</p>
              </div>
            </motion.div>
          ))}
        </div>

        <motion.div 
            initial={{ opacity: 0, y: 20 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
            className="mt-20 text-center"
        >
            <p className="text-xl text-gray-600 dark:text-gray-400 max-w-3xl mx-auto leading-relaxed italic">
                "We don't just work together, we grow together. Our team is the secret sauce behind every successful kitchen we scale."
            </p>
        </motion.div>
      </div>
    </section>
  );
};

export default TeamGallery;
