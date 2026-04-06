import React from "react";
import { motion } from "framer-motion";
import { portrait_vishal, portrait_ananya, portrait_rahul } from "../assets";
import { Linkedin, Twitter, Mail } from "lucide-react";

const teamMembers = [
  {
    name: "Vishal Kushwaha",
    role: "Founder & CEO",
    image: portrait_vishal,
    bio: "Visionary leader with 10+ years of experience in the food-tech industry.",
    linkedin: "#",
    twitter: "#",
  },
  {
    name: "Ananya Sharma",
    role: "Head of Operations",
    image: portrait_ananya,
    bio: "Ex-Zomato operations expert ensuring seamless onboarding for 500+ kitchens.",
    linkedin: "#",
    twitter: "#",
  },
  {
    name: "Rahul Verma",
    role: "Marketing Strategy",
    image: portrait_rahul,
    bio: "Digital growth specialist who has helped brands achieve 4x order volume.",
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
            Meet Our <span className="text-transparent bg-clip-text bg-gradient-to-r from-indigo-600 to-sky-600 dark:from-indigo-400 dark:to-sky-400">Expert Team</span>
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
