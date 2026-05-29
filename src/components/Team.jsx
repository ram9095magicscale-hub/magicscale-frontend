import React from "react";
import { motion } from "framer-motion";
import { founder, vishal_verma, vishal_sood, himanshu } from "../assets";
import { Linkedin, Twitter, Mail, Quote } from "lucide-react";

const teamMembers = [
  {
    name: "Vishal Kushwaha",
    role: "Co-Founder & COO",
    image: vishal_verma,
    bio: "Operations mastermind ensuring seamless onboarding, layout planning, and setups for 500+ cloud kitchens.",
    linkedin: "#",
    twitter: "#",
  },
  {
    name: "Vishal Sood",
    role: "Restaurant Growth & Strategy Specialist",
    image: vishal_sood,
    bio: "Strategic mastermind specializing in scaling restaurant order volumes, customer retention, and brand positioning across major delivery platforms.",
    linkedin: "#",
    twitter: "#",
  },
  {
    name: "Himanshu Sharma",
    role: "Lead Restaurant Growth Strategist",
    image: himanshu,
    bio: "Growth expert formulating data-backed business models and expansion strategies to maximize profitability for cloud kitchens and premium dine-ins.",
    linkedin: "#",
    twitter: "#",
  },
];

const Team = () => {
  return (
    <section className="py-32 px-6 sm:px-12 md:px-24 bg-white dark:bg-slate-950 relative overflow-hidden">
      {/* Decorative Background Elements */}
      <div className="absolute top-0 left-0 w-full h-full pointer-events-none overflow-hidden">
        <div className="absolute top-1/4 -left-20 w-96 h-96 bg-indigo-100/30 dark:bg-indigo-500/5 rounded-full blur-[100px]"></div>
        <div className="absolute bottom-1/4 -right-20 w-96 h-96 bg-sky-100/30 dark:bg-sky-500/5 rounded-full blur-[100px]"></div>
      </div>

      <div className="max-w-7xl mx-auto relative z-10">

        {/* ========================================== */}
        {/* Founder's Note Section */}
        {/* ========================================== */}
        <motion.div
          initial={{ opacity: 0, y: 40 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          transition={{ duration: 0.8 }}
          className="mb-32 p-8 md:p-14 rounded-[3rem] bg-gradient-to-br from-indigo-50/50 to-sky-50/30 dark:from-slate-900/50 dark:to-slate-900/20 border border-indigo-100/80 dark:border-slate-800 shadow-2xl shadow-indigo-100/20 dark:shadow-none relative overflow-hidden"
        >
          {/* Decorative Glowing Orbs inside the card */}
          <div className="absolute top-0 right-0 w-80 h-80 bg-indigo-200/20 dark:bg-indigo-500/5 rounded-full blur-[80px] pointer-events-none -translate-y-1/3 translate-x-1/3"></div>
          <div className="absolute bottom-0 left-0 w-80 h-80 bg-sky-200/20 dark:bg-sky-500/5 rounded-full blur-[80px] pointer-events-none translate-y-1/3 -translate-x-1/3"></div>

          <div className="grid grid-cols-1 lg:grid-cols-12 gap-12 lg:gap-16 items-center relative z-10">
            {/* Founder Image (Left side) */}
            <div className="lg:col-span-4 flex justify-center">
              <div className="relative group w-full max-w-[280px] aspect-[4/5] sm:max-w-[320px] lg:max-w-none">
                {/* Visual back-shadow elements */}
                <div className="absolute inset-0 bg-gradient-to-tr from-indigo-500 to-sky-400 rounded-[2.5rem] transform rotate-3 scale-[1.02] opacity-20 group-hover:rotate-6 transition-transform duration-500"></div>
                <div className="absolute inset-0 bg-gradient-to-tr from-indigo-600 to-sky-500 rounded-[2.5rem] transform -rotate-2 scale-[1.01] opacity-10 group-hover:-rotate-4 transition-transform duration-500"></div>

                {/* Main image border and frame */}
                <div className="relative h-full w-full rounded-[2.5rem] overflow-hidden border border-indigo-100 dark:border-slate-700/80 shadow-xl shadow-indigo-200/30 dark:shadow-none">
                  <img
                    src={founder}
                    alt="Akash Verma - Founder & CEO"
                    className="w-full h-full object-cover transition-transform duration-[750ms] group-hover:scale-105"
                  />
                  {/* Subtle dark gradient overlay at bottom of the picture */}
                  <div className="absolute inset-0 bg-gradient-to-t from-black/40 via-transparent to-transparent opacity-60"></div>
                </div>
              </div>
            </div>

            {/* Founder Note Narrative (Right side) */}
            <div className="lg:col-span-8 flex flex-col justify-center space-y-6">
              {/* Tag / Pre-title */}
              <div className="flex items-center gap-3">
                <span className="w-8 h-[2px] bg-indigo-600 dark:bg-indigo-400"></span>
                <span className="text-xs font-bold uppercase tracking-widest text-indigo-600 dark:text-indigo-400">
                  A Message From Our Founder
                </span>
              </div>

              {/* Bold Headline */}
              <h3 className="text-3xl md:text-4xl font-extrabold text-gray-900 dark:text-white leading-tight">
                Empowering the Future of India's <span className="text-transparent bg-clip-text bg-gradient-to-r from-indigo-600 to-sky-600 dark:from-indigo-400 dark:to-sky-400">Digital Dining</span>
              </h3>

              {/* Message Content */}
              <div className="relative">
                {/* Large double quote watermark */}
                <Quote className="absolute -top-6 -left-6 w-16 h-16 text-indigo-500/10 dark:text-indigo-400/5 rotate-180" />

                <p className="text-gray-600 dark:text-gray-300 text-lg leading-relaxed font-medium mb-6 relative z-10">
                  "At MagicScale, our goal is to empower the next generation of Indian foodpreneurs. We saw how talented chefs and passionate restaurant owners struggled with the complex and chaotic setup process of digital food delivery platforms, legal licenses, and marketing. We created MagicScale to simplify all of this, offering a transparent, fast, and reliable growth partner so you can focus on what you do best: cooking delicious food."
                </p>
              </div>

              {/* Founder Profile / Signature */}
              <div className="flex flex-col sm:flex-row sm:items-center sm:justify-between pt-6 border-t border-indigo-100/50 dark:border-slate-800 gap-4">
                <div>
                  <h4 className="text-2xl font-bold text-gray-900 dark:text-white">
                    Akash Verma
                  </h4>
                  <p className="text-indigo-600 dark:text-indigo-400 font-bold uppercase text-xs tracking-wider mt-1">
                    Founder & CEO, MagicScale
                  </p>
                </div>

                {/* Highlight badges */}
                <div className="flex flex-wrap gap-2.5">
                  <span className="px-3.5 py-1.5 rounded-xl bg-white dark:bg-slate-800 border border-gray-100 dark:border-slate-700 text-[11px] font-bold text-gray-600 dark:text-gray-400 shadow-sm uppercase tracking-wider">
                    ✨ 10+ Years in Food-Tech
                  </span>
                  <span className="px-3.5 py-1.5 rounded-xl bg-white dark:bg-slate-800 border border-gray-100 dark:border-slate-700 text-[11px] font-bold text-gray-600 dark:text-gray-400 shadow-sm uppercase tracking-wider">
                    🚀 2000+ Kitchens Guided
                  </span>
                </div>
              </div>
            </div>
          </div>
        </motion.div>

        {/* ========================================== */}
        {/* Core Team Section */}
        {/* ========================================== */}
        <div className="text-center mb-20">
          <motion.div
            initial={{ opacity: 0, scale: 0.9 }}
            whileInView={{ opacity: 1, scale: 1 }}
            viewport={{ once: true }}
            className="inline-block px-4 py-1.5 rounded-full bg-indigo-50 dark:bg-indigo-900/30 border border-indigo-100 dark:border-indigo-800 text-indigo-600 dark:text-indigo-400 text-xs font-bold uppercase tracking-widest mb-6"
          >
            The Minds Behind Magic
          </motion.div>
          <motion.h2
            initial={{ opacity: 0, y: 20 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
            transition={{ duration: 0.6 }}
            className="text-4xl md:text-5xl font-black text-gray-900 dark:text-white"
          >
            Meet Our <span className="text-transparent bg-clip-text bg-gradient-to-r from-indigo-600 to-sky-600 dark:from-indigo-400 dark:to-sky-400">Core Team</span>
          </motion.h2>
          <motion.p
            initial={{ opacity: 0, y: 20 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
            transition={{ duration: 0.6, delay: 0.1 }}
            className="mt-6 text-xl text-gray-600 dark:text-gray-400 max-w-2xl mx-auto leading-relaxed"
          >
            We're a group of dedicated food-tech experts, consultants, and operators committed to scaling your culinary vision.
          </motion.p>
        </div>

        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-12">
          {teamMembers.map((member, idx) => (
            <motion.div
              key={idx}
              initial={{ opacity: 0, y: 30 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true }}
              transition={{ duration: 0.6, delay: idx * 0.1 }}
              className="group"
            >
              <div className="relative mb-8 rounded-[2.5rem] overflow-hidden aspect-[4/5] shadow-2xl shadow-gray-200/50 dark:shadow-none border border-gray-100 dark:border-white/5 transition-transform duration-500 group-hover:-translate-y-2">
                {/* Member Image with Hover Effect */}
                <img
                  src={member.image}
                  alt={member.name}
                  className="w-full h-full object-cover transition-transform duration-700 group-hover:scale-110"
                />

                {/* Gradient Overlay */}
                <div className="absolute inset-0 bg-gradient-to-t from-black/80 via-black/20 to-transparent opacity-0 group-hover:opacity-100 transition-opacity duration-500 flex flex-col justify-end p-8">
                  <div className="flex gap-4 mb-4">
                    <a href={member.linkedin} className="w-10 h-10 bg-white/10 backdrop-blur-md rounded-xl flex items-center justify-center text-white hover:bg-white hover:text-indigo-600 transition-all">
                      <Linkedin size={20} />
                    </a>
                    <a href={member.twitter} className="w-10 h-10 bg-white/10 backdrop-blur-md rounded-xl flex items-center justify-center text-white hover:bg-white hover:text-sky-400 transition-all">
                      <Twitter size={20} />
                    </a>
                    <a href={`mailto:contact@magicscale.in`} className="w-10 h-10 bg-white/10 backdrop-blur-md rounded-xl flex items-center justify-center text-white hover:bg-white hover:text-rose-500 transition-all">
                      <Mail size={20} />
                    </a>
                  </div>
                </div>
              </div>

              <div className="space-y-3">
                <h3 className="text-2xl font-bold text-gray-900 dark:text-white">
                  {member.name}
                </h3>
                <div className="text-indigo-600 dark:text-indigo-400 font-bold tracking-wide uppercase text-sm">
                  {member.role}
                </div>
                <p className="text-gray-600 dark:text-gray-400 leading-relaxed font-medium">
                  {member.bio}
                </p>
              </div>
            </motion.div>
          ))}
        </div>
      </div>
    </section>
  );
};

export default Team;
