import React from "react";
import { Link } from "react-router-dom";
import { motion } from "framer-motion";
import { ArrowRight, Clock, User } from "lucide-react";

const BlogCard = ({ id, image, category, title, excerpt, date, author }) => {
  return (
    <Link to={`/blogs/${id}`} className="block h-full">
      <motion.div 
        initial={{ opacity: 0, y: 20 }}
        whileInView={{ opacity: 1, y: 0 }}
        viewport={{ once: true }}
        className="group bg-white dark:bg-slate-900 rounded-[2rem] overflow-hidden border border-gray-100 dark:border-slate-800 shadow-xl shadow-gray-200/20 dark:shadow-none hover:shadow-2xl hover:border-indigo-200 dark:hover:border-indigo-500/30 transition-all duration-500 flex flex-col h-full"
      >
        {/* Image Container */}
        <div className="relative aspect-[16/10] overflow-hidden">
          <img 
            src={image} 
            alt={title} 
            className="w-full h-full object-cover transition-transform duration-700 group-hover:scale-110"
          />
          <div className="absolute top-4 left-4">
            <span className="px-4 py-1.5 rounded-full bg-white/90 dark:bg-slate-900/90 backdrop-blur-md text-indigo-600 dark:text-indigo-400 text-[10px] font-bold uppercase tracking-widest border border-indigo-50 dark:border-indigo-900/50">
              {category}
            </span>
          </div>
        </div>

          {/* Content */}
        <div className="p-10 flex flex-col flex-grow items-center text-center space-y-5">
          <div className="flex items-center justify-center gap-4 text-[11px] font-black text-indigo-600/60 dark:text-indigo-400/60 uppercase tracking-[0.2em]">
            <div className="flex items-center gap-1.5">
              <Clock size={14} />
              <span>{date}</span>
            </div>
            <div className="w-1 h-1 bg-gray-300 dark:bg-gray-700 rounded-full"></div>
            <div className="flex items-center gap-1.5">
              <User size={14} />
              <span>{author}</span>
            </div>
          </div>

          <h3 className="text-2xl md:text-3xl font-black text-gray-900 dark:text-white leading-[1.2] group-hover:text-indigo-600 dark:group-hover:text-indigo-400 transition-colors">
            {title}
          </h3>

          <p className="text-gray-600 dark:text-gray-400 text-sm leading-relaxed font-medium max-w-[90%]">
            {excerpt}
          </p>

          <div className="pt-6 mt-auto">
            <div className="flex items-center gap-2 px-6 py-2.5 rounded-full bg-gray-50 dark:bg-slate-800 text-indigo-600 dark:text-indigo-400 font-bold text-xs uppercase tracking-widest border border-gray-100 dark:border-slate-700 group-hover:bg-indigo-600 group-hover:text-white group-hover:border-indigo-600 transition-all duration-300">
              Read Article
              <ArrowRight size={16} />
            </div>
          </div>
        </div>
      </motion.div>
    </Link>
  );
};

export default BlogCard;
