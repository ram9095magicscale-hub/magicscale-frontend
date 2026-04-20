import React from "react";
import { Link } from "react-router-dom";
import { motion } from "framer-motion";
import { ArrowRight, Clock, User } from "lucide-react";

const stripHtml = (html) => {
  if (!html) return "";
  const temp = document.createElement("div");
  temp.innerHTML = html;
  let text = temp.textContent || temp.innerText || "";
  // Handle potential double encoding
  if (text.includes("<") && text.includes(">")) {
    temp.innerHTML = text;
    text = temp.textContent || temp.innerText || "";
  }
  return text.trim();
};

const BlogCard = ({ id, image, category, title, excerpt, date, author }) => {
  const stripped = stripHtml(excerpt);
  const cleanExcerpt = stripped.length > 120 ? stripped.substring(0, 120) + "..." : stripped;
  
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
        <div className="p-8 flex flex-col flex-grow items-start text-left space-y-4">
          <div className="flex items-center gap-4 text-[11px] font-bold text-indigo-600 dark:text-indigo-400 uppercase tracking-widest opacity-80">
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

          <h3 className="text-2xl font-black text-gray-900 dark:text-white leading-tight group-hover:text-indigo-600 dark:group-hover:text-indigo-400 transition-colors line-clamp-2">
            {title}
          </h3>

          <p className="text-gray-600 dark:text-gray-400 text-sm leading-relaxed font-medium line-clamp-3">
            {cleanExcerpt}
          </p>

          <div className="pt-4 mt-auto">
            <div className="flex items-center gap-2 text-indigo-600 dark:text-indigo-400 font-bold text-xs uppercase tracking-widest group-hover:translate-x-1 transition-transform duration-300">
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
