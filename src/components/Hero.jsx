import React, { useState, useEffect } from "react";
import { ArrowRight, ChevronLeft, ChevronRight, Plus, TrendingUp } from "lucide-react";
import { motion, AnimatePresence } from "framer-motion";
import { Link, useNavigate } from "react-router-dom";

import { useTheme } from "./context/ThemeContext";

import swiggyImg from "../assets/swiggynew2.png";
import swiggyIcon from "../assets/swiggynew1.png";
import zomatoImg from "../assets/zomato4.png";
import zomatoIcon from "../assets/zomato.png";
import fssaiImg from "../assets/fssai.png";
import fssaiIcon from "../assets/fssai2.png";
import gstImg from "../assets/Emblem_of_India.svg";

// Service items for the Hero Slider
const heroSlides = [
  {
    id: 1,
    collection: "FOOD DELIVERY",
    title: "Swiggy Onboarding",
    author: "MagicScale Experts",
    desc: "Launch your restaurant on Swiggy and reach thousands of hungry customers. We manage your menu, photos, and fast-track approval.",
    bgColor: "bg-[#fc8019]", // Swiggy Orange
    patternColor: "fill-orange-900/20",
    logo: swiggyIcon,
    image: swiggyImg,
    path: "/course/swiggy-onboarding",
    buttonText: "Start on Swiggy",
  },
  {
    id: 2,
    collection: "FOOD DELIVERY",
    title: "Zomato Onboarding",
    author: "MagicScale Experts",
    desc: "Get listed on Zomato with a beautifully crafted menu and high-quality setup designed to maximize your daily orders.",
    bgColor: "bg-[#e23744]", // Zomato Red
    patternColor: "fill-red-900/20",
    logo: zomatoIcon,
    image: zomatoImg,
    path: "/course/zomato-onboarding",
    buttonText: "Start on Zomato",
  },
  {
    id: 5,
    collection: "BEST VALUE",
    title: "Combo Onboarding",
    author: "Swiggy & Zomato",
    desc: "Double your reach with our exclusive Swiggy + Zomato combo package. Professional setup for both platforms at a discounted rate.",
    bgColor: "bg-indigo-600",
    patternColor: "fill-indigo-900/40",
    logo: zomatoIcon, // Using Zomato as lead, but will show combo in desc
    image: "https://images.unsplash.com/photo-1513104890138-7c749659a591?auto=format&fit=crop&q=80&w=600&h=800",
    path: "/course/combo-onboarding",
    buttonText: "Start Combo",
  },
  {
    id: 3,
    collection: "COMPLIANCE",
    title: "FSSAI Food License",
    author: "Government Registration",
    desc: "Crucial food safety licenses obtained quickly so you can start cooking legally and safely without the headache.",
    bgColor: "bg-emerald-600", // Vibrant emerald for light mode, ternary will handle dark
    patternColor: "fill-emerald-900/40",
    logo: fssaiIcon,
    image: fssaiImg,
    path: "/course/fssai-onboarding",
    buttonText: "Get Licensed",
  },
  {
    id: 4,
    collection: "FINANCE",
    title: "GST Registration",
    author: "Tax & Compliance",
    desc: "End-to-end GST support for seamless compliance, instant filing, and business growth. 100% online process.",
    bgColor: "bg-indigo-500", // Vibrant indigo for light mode
    patternColor: "fill-indigo-900/40",
    logo: gstImg,
    image: gstImg,
    path: "/course/gst",
    buttonText: "Register Now",
  },
  {
    id: 6,
    collection: "STRATEGY",
    title: "Revenue Growth",
    author: "Performance Marketing",
    desc: "Scale your restaurant's revenue with data-driven growth strategies and offline price parity. Optimize your digital presence.",
    bgColor: "bg-fuchsia-600", // Clearly distinct from Swiggy, Zomato, and FSSAI
    patternColor: "fill-fuchsia-900/40",
    logo: null,
    image: "https://images.unsplash.com/photo-1460925895917-afdab827c52f?auto=format&fit=crop&q=80&w=800",
    path: "/course/growth",
    buttonText: "Scale Now",
    isGrowthSlide: true,
  },
];

// SVG Pattern for background mimicking the abstract shapes in the template
const AbstractPattern = ({ color }) => (
  <svg className="absolute inset-0 w-full h-full object-cover opacity-50 pointer-events-none" xmlns="http://www.w3.org/2000/svg" width="100%" height="100%">
    <defs>
      <pattern id="abstract-pattern" x="0" y="0" width="400" height="400" patternUnits="userSpaceOnUse">
        <path d="M50 100 C 150 150, 150 0, 200 50 C 250 100, 300 200, 200 250 C 100 300, -50 200, 50 100 Z" className={color} />
        <path d="M300 300 C 350 350, 380 250, 350 200 C 320 150, 250 180, 250 220 C 250 280, 250 350, 300 300 Z" className={color} />
        <path d="M50 350 C 80 380, 150 350, 120 300 C 90 250, 20 280, 10 320 C 0 350, 20 380, 50 350 Z" className={color} />
        <circle cx="200" cy="150" r="15" className={color} />
        <circle cx="350" cy="80" r="10" className={color} />
        <circle cx="80" cy="220" r="20" className={color} />
      </pattern>
    </defs>
    <rect x="0" y="0" width="100%" height="100%" fill="url(#abstract-pattern)" />
  </svg>
);

// Toingit-style Card Component
const ToingitCard = ({ title, img, originalPrice, toingPrice }) => (
  <motion.div 
    initial={{ opacity: 0, scale: 0.9, y: 20 }}
    animate={{ opacity: 1, scale: 1, y: 0 }}
    className="w-[180px] md:w-[220px] bg-[#FFF9E6] rounded-[30px] p-4 shadow-xl flex flex-col items-center relative"
  >
    <div className="w-full aspect-square rounded-[20px] overflow-hidden mb-3 relative">
      <img src={img} alt={title} className="w-full h-full object-cover" />
      <button className="absolute bottom-2 right-2 w-8 h-8 bg-[#FF1D8E] rounded-full flex items-center justify-center text-white shadow-lg hover:scale-110 transition-transform">
        <Plus size={18} />
      </button>
    </div>
    <h4 className="text-gray-900 font-bold text-sm md:text-base mb-2 w-full text-left px-1">{title}</h4>
    <div className="flex items-center gap-2 w-full px-1">
      <span className="bg-[#FFEB3B] text-black text-[10px] md:text-xs font-bold px-2 py-0.5 rounded-full shadow-sm">
         ₹{toingPrice}
      </span>
      <span className="text-gray-400 text-[10px] md:text-xs line-through font-medium">
         ₹{originalPrice}
      </span>
    </div>
  </motion.div>
);

const Hero = () => {
   const navigate = useNavigate();
  const [currentSlide, setCurrentSlide] = useState(0);
  const [isAutoPlaying, setIsAutoPlaying] = useState(true);
  const { isDarkMode } = useTheme();


  // Auto-scroll logic
  useEffect(() => {
    if (!isAutoPlaying) return;
    
    const interval = setInterval(() => {
      setCurrentSlide((prev) => (prev + 1) % heroSlides.length);
    }, 5000); // 5 seconds per slide

    return () => clearInterval(interval);
  }, [isAutoPlaying]);

  const handleNext = () => {
    setIsAutoPlaying(false);
    setCurrentSlide((prev) => (prev + 1) % heroSlides.length);
  };

  const handlePrev = () => {
    setIsAutoPlaying(false);
    setCurrentSlide((prev) => (prev - 1 + heroSlides.length) % heroSlides.length);
  };

  const handleDotClick = (index) => {
    setIsAutoPlaying(false);
    setCurrentSlide(index);
  };

  const slide = heroSlides[currentSlide];

  return (
    <div className="w-full relative bg-white dark:bg-slate-950 pt-24 pb-12 font-poppins transition-colors duration-500">
      <div 
        className="max-w-[1400px] mx-auto px-4 sm:px-8 relative"
        onMouseEnter={() => setIsAutoPlaying(false)}
        onMouseLeave={() => setIsAutoPlaying(true)}
      >
        {/* Slider Container */}
        <div className={`relative w-full h-auto min-h-[600px] md:h-[650px] rounded-2xl overflow-hidden transition-all duration-700 ease-in-out ${slide.bgColor}`}>
          




          {/* Animated Background Pattern */}
          <div className="absolute inset-0 overflow-hidden">
             <AbstractPattern color={slide.patternColor} />
          </div>

          <AnimatePresence mode="wait">
            <motion.div
              key={currentSlide}
              initial={{ opacity: 0, x: 20 }}
              animate={{ opacity: 1, x: 0 }}
              exit={{ opacity: 0, x: -20 }}
              transition={{ duration: 0.5, ease: "easeInOut" }}
              onClick={() => navigate(slide.path)}
              className="relative md:absolute md:inset-0 w-full flex flex-col md:flex-row items-center justify-between px-6 sm:px-10 md:px-20 z-10 cursor-pointer group py-6 md:py-0"
            >




              {/* Left Content (Text) */}
              <div className="w-full flex-none md:flex-1 text-white max-w-xl flex flex-col justify-center h-full pt-4 md:pt-0 mb-4 md:mb-0">



                {slide.logo ? (
                  <motion.div 
                    initial={{ opacity: 0, y: 10 }}
                    animate={{ opacity: 1, y: 0 }}
                    transition={{ delay: 0.1 }}
                    className="mb-6 bg-white/10 w-fit p-3 rounded-2xl backdrop-blur-md border border-white/20 shadow-xl"
                  >
                     <img src={slide.logo} alt="Brand" className="w-16 h-16 md:w-20 md:h-20 object-contain drop-shadow-md" />
                  </motion.div>
                ) : (
                   <motion.div 
                    initial={{ opacity: 0, y: 10 }}
                    animate={{ opacity: 1, y: 0 }}
                    transition={{ delay: 0.1 }}
                    className="mb-6 bg-white/10 w-fit p-4 rounded-2xl backdrop-blur-md border border-white/20 shadow-xl"
                  >
                     <TrendingUp className="w-10 h-10 md:w-12 md:h-12 text-white" />
                  </motion.div>
                )}

                <motion.p 
                  initial={{ opacity: 0, y: 10 }}
                  animate={{ opacity: 1, y: 0 }}
                  transition={{ delay: 0.2 }}
                  className="text-white/60 text-xs md:text-sm font-bold tracking-[0.2em] mb-4 uppercase"
                >
                  {slide.collection}
                </motion.p>
                
                <motion.h1 
                  initial={{ opacity: 0, y: 20 }}
                  animate={{ opacity: 1, y: 0 }}
                  transition={{ delay: 0.3 }}
                  className="text-3xl md:text-6xl font-serif font-medium leading-tight mb-2 text-white"
                >
                  {slide.title}
                </motion.h1>
                
                <motion.p 
                  initial={{ opacity: 0, y: 10 }}
                  animate={{ opacity: 1, y: 0 }}
                  transition={{ delay: 0.4 }}
                  className="text-white/80 text-base md:text-xl font-light mb-4 md:mb-8 font-serif italic"
                >
                  {slide.author}
                </motion.p>


                <motion.p 
                  initial={{ opacity: 0, y: 10 }}
                  animate={{ opacity: 1, y: 0 }}
                  transition={{ delay: 0.45 }}
                  className="text-white/70 text-sm md:text-lg mb-6 md:mb-8 max-w-lg leading-relaxed"
                >
                  {slide.desc}
                </motion.p>

                
                <motion.div 
                  initial={{ opacity: 0, y: 10 }}
                  animate={{ opacity: 1, y: 0 }}
                  transition={{ delay: 0.5 }}
                >
                  <Link 
                    to={slide.path}
                    className="inline-flex items-center gap-2 bg-slate-900 dark:bg-white hover:bg-white dark:hover:bg-slate-900 text-white dark:text-slate-900 hover:text-slate-900 dark:hover:text-white hover:border-white border border-transparent px-8 py-3.5 text-sm font-bold tracking-wider transition-all duration-300"
                  >
                    {slide.buttonText}
                  </Link>
                </motion.div>
              </div>

              {/* Right Content */}
              <div className="w-full flex-none md:flex-1 md:h-full flex items-center justify-center md:justify-end p-0 md:p-12 relative">


                {slide.isGrowthSlide ? (
                  /* Toingit-inspired UI for Growth Slide */
                  <div className="relative w-full h-full flex items-center justify-center">
                    <div className="relative rotate-[-5deg] bg-white/10 backdrop-blur-xl border border-white/20 p-6 md:p-10 rounded-[40px] shadow-2xl flex flex-col md:flex-row gap-6 items-center">
                       <ToingitCard 
                         title="Masala Dosa" 
                         img="https://images.unsplash.com/photo-1589301760014-d929f3979dbc?auto=format&fit=crop&q=80&w=300" 
                         originalPrice="120" 
                         toingPrice="89" 
                       />
                       <div className="hidden md:block translate-y-12">
                         <ToingitCard 
                           title="Special Pizza" 
                           img="https://images.unsplash.com/photo-1513104890138-7c749659a591?auto=format&fit=crop&q=80&w=300" 
                           originalPrice="299" 
                           toingPrice="189" 
                         />
                       </div>
                       <div className="hidden lg:block -translate-y-6">
                         <ToingitCard 
                           title="Hyderabadi Biryani" 
                           img="https://images.unsplash.com/photo-1563379091339-03b21bc4a4f8?auto=format&fit=crop&q=80&w=300" 
                           originalPrice="240" 
                           toingPrice="169" 
                         />
                       </div>

                       {/* Callout Bubble */}
                       <motion.div 
                         initial={{ scale: 0, opacity: 0 }}
                         animate={{ scale: 1, opacity: 1 }}
                         transition={{ delay: 0.8 }}
                         className="absolute -top-10 -right-6 bg-white dark:bg-slate-900 p-4 rounded-2xl shadow-2xl border border-indigo-100 dark:border-slate-800 z-30 hidden md:block"
                       >
                          <p className="text-gray-900 dark:text-white font-bold text-sm">30% High Profits! 🚀</p>
                       </motion.div>
                    </div>
                  </div>
                ) : (
                  /* Existing Book Style Card */
                   <motion.div 
                    initial={{ opacity: 0, scale: 0.9, y: 30 }}
                    animate={{ opacity: 1, scale: 1, y: 0 }}
                    transition={{ delay: 0.3, duration: 0.6, type: "spring" }}
                    className="w-[180px] sm:w-[260px] md:w-[340px] aspect-[3/4] bg-white p-3 md:p-4 shadow-2xl relative rotate-2 group-hover:rotate-0 transition-transform duration-500 ease-out z-20 mx-auto md:mx-0 mt-0 md:mt-0 mb-4 md:mb-0"
                  >



                      {/* Inner image container */}
                      <div className="w-full h-full relative overflow-hidden bg-gray-100 dark:bg-slate-800 border border-gray-200 dark:border-slate-700 flex flex-col">
                         <img 
                           src={slide.image} 
                           alt={slide.title} 
                           className="w-full h-full object-cover absolute inset-0 opacity-20 dark:opacity-10"
                         />
                         {/* Simulating a book cover text overlay since user asked for the book template look */}
                         <div className="absolute inset-0 flex flex-col justify-center items-center text-center p-6 bg-white/90 dark:bg-slate-900/90">
                            <h3 className="text-gray-400 dark:text-gray-500 text-xs font-bold tracking-[0.2em] mb-4 uppercase text-center w-full">MagicScale Editions</h3>
                            <h2 className="text-2xl md:text-4xl font-serif font-bold text-gray-900 dark:text-white mb-4">{slide.title}</h2>
                            <div className="w-12 h-px bg-gray-300 dark:bg-slate-700 my-4"></div>
                            <p className="text-gray-500 dark:text-gray-400 text-sm font-serif italic">{slide.author}</p>
                         </div>
                      </div>
                     
                     {/* Book spine simulation effect on the left edge */}
                     <div className="absolute left-0 top-0 bottom-0 w-3 md:w-4 bg-gradient-to-r from-gray-300 to-transparent mix-blend-multiply"></div>
                  </motion.div>
                )}
              </div>
            </motion.div>
          </AnimatePresence>

          {/* Navigation Arrows */}
          <button 
            onClick={handlePrev}
            className="absolute left-4 md:left-6 top-1/2 -translate-y-1/2 w-10 h-10 md:w-12 md:h-12 bg-white/20 hover:bg-white text-white hover:text-black rounded-full flex items-center justify-center backdrop-blur-sm transition-all z-30"
            aria-label="Previous slide"
          >
            <ChevronLeft size={24} />
          </button>
          
          <button 
            onClick={handleNext}
            className="absolute right-4 md:right-6 top-1/2 -translate-y-1/2 w-10 h-10 md:w-12 md:h-12 bg-white/20 hover:bg-white text-white hover:text-black rounded-full flex items-center justify-center backdrop-blur-sm transition-all z-30"
            aria-label="Next slide"
          >
            <ChevronRight size={24} />
          </button>
        </div>

        {/* Carousel Indicators (Dots) beneath the slider */}
        <div className="flex justify-center items-center space-x-3 mt-6">
          {heroSlides.map((_, index) => (
            <button
              key={index}
              onClick={() => handleDotClick(index)}
              className={`w-2.5 h-2.5 rounded-full transition-all duration-300 ${
                currentSlide === index ? "bg-gray-600 dark:bg-gray-200 scale-125" : "bg-gray-300 dark:bg-gray-700 hover:bg-gray-400 dark:hover:bg-gray-600"
              }`}
              aria-label={`Go to slide ${index + 1}`}
            />
          ))}
        </div>
      </div>
    </div>
  );
};

export default Hero;
