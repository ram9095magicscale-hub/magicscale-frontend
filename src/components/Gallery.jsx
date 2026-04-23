import React, { useState, useEffect } from "react";
import { motion, AnimatePresence } from "framer-motion";
import { Camera, ExternalLink, LayoutGrid, Zap, Loader2, X, Maximize2 } from "lucide-react";
import axios from "axios";
import { API_URL } from "../services/api";

const GalleryItem = ({ item, index, onView, onHover }) => {
  const isLarge = item.size === "large";
  const isMedium = item.size === "medium";
  const isWide = item.size === "wide";
  const isTall = item.size === "tall";
  
  // Construct image URL - handle both absolute and relative paths
  const imageUrl = item.image.startsWith("http") 
    ? item.image 
    : `${API_URL.replace("/api", "")}${item.image}`;

  return (
    <motion.div
      initial={{ opacity: 0, y: 30 }}
      whileInView={{ opacity: 1, y: 0 }}
      transition={{ duration: 0.6, delay: index * 0.1 }}
      viewport={{ once: true }}
      onClick={() => onView(item)}
      onMouseEnter={() => onHover(item)}
      onMouseLeave={() => onHover(null)}
      className={`relative group overflow-hidden rounded-[2.5rem] bg-slate-100 dark:bg-slate-800 border border-slate-200 dark:border-slate-800 cursor-pointer
        ${isLarge ? "md:col-span-2 md:row-span-2 aspect-[3/4] md:aspect-auto" : ""}
        ${isWide ? "md:col-span-2 md:row-span-1 aspect-video md:aspect-auto" : ""}
        ${isTall ? "md:col-span-1 md:row-span-2 aspect-[2/3] md:aspect-auto" : ""}
        ${isMedium ? "md:col-span-1 md:row-span-1 aspect-square" : ""}
        ${!isLarge && !isWide && !isTall && !isMedium ? "aspect-square" : ""}
      `}
    >
      {/* Background Image */}
      <img
        src={imageUrl}
        alt={item.title}
        className="absolute inset-0 w-full h-full object-cover transition-transform duration-700 group-hover:scale-110"
      />

      {/* Overlay */}
      <div className="absolute inset-0 bg-gradient-to-t from-slate-950/90 via-slate-950/20 to-transparent opacity-0 group-hover:opacity-100 transition-opacity duration-300">
        <div className="absolute bottom-0 left-0 right-0 p-8 flex flex-col items-start gap-2 translate-y-4 group-hover:translate-y-0 transition-transform duration-500">
          <span className="px-3 py-1 bg-white/10 backdrop-blur-md rounded-full text-[10px] font-bold text-white uppercase tracking-widest border border-white/20">
            {item.category}
          </span>
          <h3 className="text-xl md:text-2xl font-bold text-white tracking-tight">
            {item.title}
          </h3>
          <div className="mt-2 flex items-center gap-2 text-white/80 hover:text-white text-sm font-medium transition-colors">
            View Story <ExternalLink size={14} />
          </div>
        </div>
      </div>

      {/* Static icon for Category */}
      <div className="absolute top-6 right-6 z-10 opacity-0 group-hover:opacity-100 transition-opacity duration-300">
        <div className="p-3 bg-white/10 backdrop-blur-md rounded-2xl border border-white/20 text-white">
          <Maximize2 size={18} />
        </div>
      </div>
    </motion.div>
  );
};

const Lightbox = ({ item, isHovered, onClose }) => {
  if (!item) return null;
  const imageUrl = item.image.startsWith("http") 
    ? item.image 
    : `${API_URL.replace("/api", "")}${item.image}`;

  return (
    <motion.div
      initial={{ opacity: 0 }}
      animate={{ opacity: 1 }}
      exit={{ opacity: 0 }}
      className={`fixed inset-0 z-[100] flex items-center justify-center p-4 md:p-12 bg-slate-950/95 backdrop-blur-xl ${isHovered ? 'pointer-events-none' : ''}`}
      onClick={isHovered ? undefined : onClose}
    >
      {!isHovered && (
        <motion.button
          whileHover={{ scale: 1.1, rotate: 90 }}
          whileTap={{ scale: 0.9 }}
          onClick={onClose}
          className="absolute top-8 right-8 text-white/50 hover:text-white transition-all z-[110]"
        >
          <X size={32} />
        </motion.button>
      )}

      <motion.div
        initial={{ scale: 0.9, opacity: 0, y: 20 }}
        animate={{ scale: 1, opacity: 1, y: 0 }}
        exit={{ scale: 0.9, opacity: 0, y: 20 }}
        transition={{ type: "spring", damping: 25, stiffness: 300 }}
        className="relative max-w-6xl w-full h-full flex flex-col md:flex-row items-center gap-12"
        onClick={(e) => e.stopPropagation()}
      >
        <div className="flex-1 w-full h-full relative group">
          <img
            src={imageUrl}
            alt={item.title}
            className="w-full h-full object-contain rounded-3xl"
          />
        </div>

        <div className="w-full md:w-80 flex flex-col items-start gap-6 text-white text-center md:text-left">
          <div className="space-y-4 w-full">
             <span className="px-4 py-1.5 bg-indigo-600 rounded-full text-xs font-black uppercase tracking-widest inline-block">
               {item.category}
             </span>
             <h2 className="text-3xl md:text-5xl font-black tracking-tight leading-none leading-tight">{item.title}</h2>
             <p className="text-slate-400 text-lg leading-relaxed">
               {item.description || "This success story showcases the incredible transformation achieveable through MagicScale's data-driven strategies and restaurant optimization systems."}
             </p>
          </div>
          
          <div className="h-px w-full bg-white/10"></div>
          
          <div className="grid grid-cols-2 gap-8 w-full">
            <div>
              <p className="text-indigo-400 font-black text-2xl">45%</p>
              <p className="text-slate-500 text-[10px] font-bold uppercase tracking-widest mt-1">Growth Index</p>
            </div>
            <div>
              <p className="text-sky-400 font-black text-2xl">1.2x</p>
              <p className="text-slate-500 text-[10px] font-bold uppercase tracking-widest mt-1">ROI Multiplier</p>
            </div>
          </div>

          {!isHovered && (
            <button 
              onClick={onClose}
              className="mt-4 px-8 py-4 bg-white text-slate-950 font-black rounded-2xl w-full hover:bg-slate-200 transition-colors uppercase tracking-widest text-xs"
            >
              Back to Work
            </button>
          )}
        </div>
      </motion.div>
    </motion.div>
  );
};

const Gallery = () => {
  const [items, setItems] = useState([]);
  const [loading, setLoading] = useState(true);
  const [selectedItem, setSelectedItem] = useState(null);
  const [hoveredItem, setHoveredItem] = useState(null);

  useEffect(() => {
    const fetchGallery = async () => {
      try {
        const res = await axios.get(`${API_URL}/gallery`);
        setItems(res.data);
      } catch (err) {
        console.error("Failed to fetch gallery items", err);
      } finally {
        setLoading(false);
      }
    };
    fetchGallery();
  }, []);

  // Handle escape key
  useEffect(() => {
    const handleEsc = (e) => {
      if (e.key === "Escape") setSelectedItem(null);
    };
    window.addEventListener("keydown", handleEsc);
    return () => window.removeEventListener("keydown", handleEsc);
  }, []);

  return (
    <section id="work" className="relative pt-24 pb-8 px-6 sm:px-12 lg:px-24 bg-transparent transition-colors duration-500 overflow-hidden">
      
      <AnimatePresence>
        {(selectedItem || hoveredItem) && (
          <Lightbox 
            item={selectedItem || hoveredItem} 
            isHovered={!!hoveredItem && !selectedItem}
            onClose={() => {
              setSelectedItem(null);
              setHoveredItem(null);
            }} 
          />
        )}
      </AnimatePresence>

      {/* Decorative Blobs */}
      <div className="absolute top-1/2 left-0 -translate-y-1/2 w-[600px] h-[600px] bg-sky-100/30 dark:bg-sky-900/10 rounded-full blur-[120px] pointer-events-none"></div>
      <div className="absolute bottom-0 right-0 w-[500px] h-[500px] bg-indigo-100/30 dark:bg-indigo-900/10 rounded-full blur-[100px] pointer-events-none"></div>

      <div className="max-w-[1400px] mx-auto relative z-10">
        {/* Header */}
        <div className="text-center mb-16 space-y-4">
          <motion.div 
            initial={{ opacity: 0, y: 10 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
            className="inline-flex items-center gap-2 px-4 py-1.5 rounded-full bg-slate-100 dark:bg-slate-900 border border-slate-200 dark:border-slate-800 text-slate-600 dark:text-slate-400 text-xs font-bold uppercase tracking-widest"
          >
             <LayoutGrid size={14} /> Our Work
          </motion.div>
          
          <motion.h2 
            initial={{ opacity: 0, y: 20 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
            transition={{ delay: 0.1 }}
            className="text-4xl md:text-6xl font-extrabold text-slate-900 dark:text-white leading-tight tracking-tight"
          >
            MagicScale <span className="text-transparent bg-clip-text bg-gradient-to-r from-indigo-600 to-sky-600 dark:from-indigo-400 dark:to-sky-400 font-serif italic font-normal">Impact</span>
          </motion.h2>
          
          <motion.p 
            initial={{ opacity: 0, y: 10 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
            transition={{ delay: 0.2 }}
            className="text-lg md:text-xl text-slate-600 dark:text-slate-400 max-w-2xl mx-auto font-medium"
          >
            Explore how we help leading restaurants and cloud kitchens scale with data-driven precision.
          </motion.p>
        </div>

        {loading ? (
          <div className="flex flex-col items-center justify-center py-40 gap-4">
            <Loader2 className="animate-spin text-indigo-500" size={40} />
            <p className="text-slate-400 font-bold uppercase tracking-widest text-xs">Loading Gallery...</p>
          </div>
        ) : items.length > 0 ? (
          /* Bento Grid */
          <div className="grid grid-cols-1 md:grid-cols-4 auto-rows-[250px] gap-4 md:gap-6 lg:gap-8">
            {items.map((item, index) => (
              <GalleryItem 
                key={item._id} 
                item={item} 
                index={index} 
                onView={setSelectedItem}
                onHover={setHoveredItem} 
              />
            ))}
          </div>
        ) : (
          <div className="py-20 text-center text-slate-400 font-bold uppercase tracking-widest text-sm border-2 border-dashed border-slate-100 dark:border-slate-800 rounded-[2.5rem]">
            No gallery items found. Add them from the Admin Dashboard.
          </div>
        )}

      </div>
    </section>
  );
};

export default Gallery;
