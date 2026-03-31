





// import { FaUtensils, FaMotorcycle, FaCertificate } from "react-icons/fa";
// import { Link } from "react-router-dom";
// import zomatoImg from "../assets/zomato.png";
// import swiggyImg from "../assets/swiggy.png";
// import fssaiImg from "../assets/fssai.png";

// const services = [
//    {
//     title: "Zomato Setup",
//     icon: <FaUtensils size={24} />,
//     image: zomatoImg,
//     path: "/services/zomato",
//   },
//   {
//     title: "Swiggy Setup",
//     icon: <FaMotorcycle size={24} />,
//     image: swiggyImg,
//     path: "/services/swiggy",
//   },
//   {
//     title: "FSSAI License",
//     icon: <FaCertificate size={24} />,
//     image: fssaiImg,
//     path: "/services/fssai",
//   },
// ];
 
// const HomeServices = () => {
//   return (
//     <div className="relative py-20 px-4 sm:px-8 md:px-16 overflow-hidden bg-gradient-to-br from-sky-200 via-white to-sky-100">
//       {/* Background Circles */}
//       <div className="absolute w-80 h-80 bg-sky-300 rounded-full opacity-30 top-[-60px] left-[-60px] blur-3xl"></div>
//       <div className="absolute w-72 h-72 bg-purple-300 rounded-full opacity-30 bottom-[-60px] right-[-60px] blur-3xl"></div>

//       {/* Heading */}
//       <div className="text-center mb-16">
//         <h2 className="text-4xl font-extrabold text-purple-800">
//           Get to <span className="text-pink-600">Know</span> Our Services
//         </h2>
//         <p className="mt-4 text-lg text-gray-700 max-w-xl mx-auto">
//           Everything you need to launch and grow your food business — from online platforms to government licensing.
//         </p>
//       </div>

//       {/* First Two Cards */}
//       <div className="flex flex-col md:flex-row md:space-x-6 gap-y-10 mb-12">
//         {services.slice(0, 2).map((service, idx) => (
//           <div
//             key={idx}
//             className={`relative flex-1 h-[460px] rounded-3xl shadow-xl border border-white/30 
//                         bg-gradient-to-br from-sky-200 via-white to-sky-100 bg-opacity-80 
//                         backdrop-blur-sm p-4 hover:scale-105 transition-transform duration-500`}
//           >
//             <img
//               src={service.image}
//               alt={service.title}
//               className="w-full h-full object-contain rounded-xl"
//             />
//             <div className="absolute bottom-4 left-4 text-gray-800 text-xl font-bold flex items-center gap-2 drop-shadow-sm">
//               <span>{service.icon}</span> {service.title}
//             </div>
//           </div>
//         ))}
//       </div>

//       {/* FSSAI Card (also matching background now) */}
//       <div className="mb-12 flex justify-center">
//         <div
//           className={`relative h-[420px] w-[90%] md:w-[70%] rounded-3xl shadow-xl border border-white/30 
//                       bg-gradient-to-br from-sky-200 via-white to-sky-100 bg-opacity-80 
//                       backdrop-blur-sm p-4 hover:scale-105 transition-transform duration-500`}
//         >
//           <img
//             src={services[2].image}
//             alt={services[2].title}
//             className="w-full h-full object-contain rounded-xl"
//           />
//           <div className="absolute bottom-4 left-4 text-gray-800 text-xl font-bold flex items-center gap-2 drop-shadow-sm">
//             <span>{services[2].icon}</span> {services[2].title}
//           </div>
//         </div>
//       </div>

//       {/* Show More Button */}
//       <div className="text-center mt-6">
//         <Link to="/services">
//           <button className="px-6 py-3 bg-purple-600 text-white rounded-full hover:bg-purple-700 shadow-lg transition duration-300">
//             Show More
//           </button>
//         </Link>
//       </div>
//     </div>
//   );
// };

// export default HomeServices;
















import React from "react";
import { FaUtensils, FaMotorcycle, FaCertificate, FaArrowRight, FaChartLine, FaBuilding } from "react-icons/fa";
import { Link } from "react-router-dom";
import { motion } from "framer-motion";
import { useTheme } from "./context/ThemeContext";

// Importing the large images (for the bottom "cover")
import zomatoCover from "../assets/zomato4.png";
import swiggyCover from "../assets/swiggynew2.png";
import fssaiCover from "../assets/fssai.png";
import gstCover from "../assets/Emblem_of_India.svg";

// Importing the smaller logo versions (for the top corner icon)
import zomatoIcon from "../assets/zomato.png";
import swiggyIcon from "../assets/swiggynew1.png";
import fssaiIcon from "../assets/fssai2.png";
const containerVariants = {
  hidden: { opacity: 0 },
  show: {
    opacity: 1,
    transition: { staggerChildren: 0.2 }
  }
};

const itemVariants = {
  hidden: { opacity: 0, y: 30 },
  show: { opacity: 1, y: 0, transition: { type: "spring", stiffness: 100, damping: 12 } }
};

const HomeServices = () => {
  const { isDarkMode } = useTheme();

  const services = [
    {
      title: "Zomato Setup",
      desc: "Complete onboarding and optimization to boost your restaurant's visibility.",
      icon: <img src={zomatoIcon} alt="Zomato Icon" className="w-8 h-8 object-contain" />,
      image: zomatoCover,
      path: "/course/zomato-onboarding",
      color: "from-red-600 to-red-800", // Zomato Red gradient
      textColor: isDarkMode ? "text-white" : "text-white", // Stays white on red bg
      descColor: isDarkMode ? "text-slate-300" : "text-red-50",
      accent: isDarkMode ? "text-red-400 bg-slate-800/80" : "text-red-600 bg-white",
      btnHover: isDarkMode ? "hover:bg-white hover:text-red-600" : "hover:bg-white hover:text-red-600",
      btnBg: "bg-red-900/50 text-white",
      badges: ["Top Rated 4.8★", "Dining & Delivery"],
    },
    {
      title: "Swiggy Setup",
      desc: "Seamless integration into Swiggy ecosystem with expert menu planning.",
      icon: <img src={swiggyIcon} alt="Swiggy Icon" className="w-8 h-8 object-contain drop-shadow-sm" />,
      image: swiggyCover,
      path: "/course/swiggy-onboarding",
      color: "from-[#fc8019] to-orange-700", // Swiggy Orange gradient
      textColor: "text-white",
      descColor: isDarkMode ? "text-slate-300" : "text-orange-50",
      accent: isDarkMode ? "text-orange-400 bg-slate-800/80" : "text-[#fc8019] bg-white",
      btnHover: "hover:bg-white hover:text-[#fc8019]",
      btnBg: "bg-orange-900/50 text-white",
      badges: ["Super Fast ⚡", "Guilt Free Options"],
    },
    {
      title: "Combo Onboarding",
      desc: "Zomato & Swiggy Restaurant Account Setup & Restaurant Launch A–Z.",
      icon: (
        <div className="flex -space-x-3 items-center justify-center">
          <img src={zomatoIcon} alt="Zomato Icon" className="w-6 h-6 object-contain border border-white/20 rounded-full bg-white p-0.5 z-10" />
          <img src={swiggyIcon} alt="Swiggy Icon" className="w-6 h-6 object-contain border border-white/20 rounded-full bg-white p-0.5" />
        </div>
      ),
      image: "https://images.unsplash.com/photo-1513104890138-7c749659a591?auto=format&fit=crop&q=80&w=400&h=300",
      path: "/course/combo-onboarding",
      color: "from-purple-600 to-indigo-800",
      textColor: "text-white",
      descColor: isDarkMode ? "text-slate-300" : "text-indigo-50",
      accent: isDarkMode ? "text-indigo-400 bg-slate-800/80" : "text-indigo-600 bg-white",
      btnHover: "hover:bg-white hover:text-indigo-600",
      btnBg: "bg-indigo-900/50 text-white",
      badges: ["Best Value 💎", "2-in-1 Bundle"],
    },
    {
      title: "FSSAI License",
      desc: "Hassle-free food safety licensing so you can operate legally and safely.",
      icon: <img src={fssaiIcon} alt="FSSAI Icon" className="w-10 h-10 object-contain drop-shadow-sm" />,
      image: fssaiCover,
      path: "/course/fssai-onboarding",
      color: "from-emerald-600 to-emerald-800",
      textColor: "text-white",
      descColor: isDarkMode ? "text-slate-300" : "text-emerald-50",
      accent: isDarkMode ? "text-emerald-400 bg-slate-800/80" : "text-[#064e3b] bg-white",
      btnHover: "hover:bg-white hover:text-[#064e3b]",
      btnBg: "bg-emerald-900/50 text-white",
      badges: ["Govt. Certified", "100% Secure"],
    },
    {
      title: "Growth Plan",
      desc: "Scale your revenue with specialized digital marketing and local SEO strategies.",
      icon: <FaChartLine size={24} />,
      image: "https://images.unsplash.com/photo-1460925895917-afdab827c52f?auto=format&fit=crop&q=80&w=400&h=300",
      path: "/course/growth",
      color: "from-fuchsia-600 to-purple-800", // New distinct theme for Growth
      textColor: "text-white",
      descColor: isDarkMode ? "text-slate-300" : "text-fuchsia-100",
      accent: isDarkMode ? "text-fuchsia-400 bg-slate-800/80" : "text-fuchsia-600 bg-white",
      btnHover: "hover:bg-white hover:text-fuchsia-600",
      btnBg: "bg-fuchsia-900/50 text-white",
      badges: ["Revenue Boost 🚀", "Data Driven"],
    },
    {
      title: "Toingit Integration",
      desc: "Smart QR menus and price parity management for high-margin direct orders.",
      icon: <FaUtensils size={24} />,
      image: "https://images.unsplash.com/photo-1552566626-52f8b828add9?auto=format&fit=crop&q=80&w=400&h=300",
      path: "/course/toingit",
      color: "from-[#FFF9E6] via-[#FFEDDA] to-[#FF4D8D]", // Toingit Cream to Pink gradient
      textColor: "text-gray-900",
      descColor: "text-gray-700",
      accent: "text-[#FF4D8D] bg-white",
      btnHover: "hover:bg-[#FF4D8D] hover:text-white",
      btnBg: "bg-[#FF4D8D]/10 text-[#FF4D8D]",
      badges: ["Smart Menu 📱", "Direct Orders"],
    },
    {
      title: "GST Registration",
      desc: "End-to-end GST support for seamless compliance and business scaling.",
      icon: <img src={gstCover} alt="GST Icon" className="w-10 h-10 object-contain mix-blend-multiply" />,
      image: gstCover,
      path: "/course/gst",
      color: "from-indigo-600 to-blue-800",
      textColor: "text-white",
      descColor: isDarkMode ? "text-slate-300" : "text-indigo-50",
      accent: isDarkMode ? "text-blue-400 bg-slate-800/80" : "text-[#312e81] bg-white",
      btnHover: "hover:bg-white hover:text-[#312e81]",
      btnBg: "bg-blue-900/50 text-white",
      badges: ["100% Online", "Tax Guidance"],
    },
  ];

  const products = [
    {
      title: "Kravy POS",
      desc: "Revolutionary billing & point-of-sale software for modern restaurants.",
      icon: <FaBuilding size={24} className="text-emerald-500" />,
      image: "https://images.unsplash.com/photo-1556742049-0cfed4f6a45d?auto=format&fit=crop&q=80&w=400&h=300",
      path: "https://kravy.in",
      color: "from-slate-900 via-slate-800 to-emerald-900",
      textColor: "text-white",
      descColor: "text-slate-400",
      accent: "bg-emerald-500/10 text-emerald-400",
      btnBg: "bg-emerald-600/20",
      badges: ["3-Click Billing", "Inventory ✅"],
    }
  ];

  return (
    <div 
      id="services" 
      className="relative py-24 px-4 sm:px-8 md:px-16 overflow-hidden bg-white dark:bg-slate-950 font-poppins transition-colors duration-500"
    >
      
      {/* Decorative Background grid */}
      <div className="absolute inset-0 bg-[linear-gradient(to_right,#80808012_1px,transparent_1px),linear-gradient(to_bottom,#80808012_1px,transparent_1px)] dark:bg-[linear-gradient(to_right,#ffffff05_1px,transparent_1px),linear-gradient(to_bottom,#ffffff05_1px,transparent_1px)] bg-[size:24px_24px] pointer-events-none"></div>

      {/* Heading */}
      <div className="text-center mb-20 relative z-10">
        <motion.div
           initial={{ opacity: 0, y: 20 }}
           whileInView={{ opacity: 1, y: 0 }}
           viewport={{ once: true, margin: "-100px" }}
           transition={{ duration: 0.6 }}
        >
          <h2 className="text-sm font-bold tracking-widest text-indigo-600 dark:text-indigo-400 uppercase mb-3">Our Expertise</h2>
          <h3 className="text-4xl md:text-5xl font-extrabold text-gray-900 dark:text-white tracking-tight">
            Premium Services for <span className="text-transparent bg-clip-text bg-gradient-to-r from-indigo-600 to-purple-600 dark:from-indigo-400 dark:to-purple-400">Growth</span>
          </h3>
          <p className="mt-5 text-lg text-gray-600 dark:text-gray-300 max-w-2xl mx-auto font-medium">
            Discover our specialized setup packages. Beautifully crafted solutions to launch your food business without the headache.
          </p>
        </motion.div>
      </div>

      {/* Cards Display mimicking an elegant collection */}
      <motion.div 
        variants={containerVariants}
        initial="hidden"
        whileInView="show"
        viewport={{ once: true, margin: "-100px" }}
        className="max-w-7xl mx-auto flex flex-wrap justify-center gap-8 relative z-10"
      >
        {services.map((service, idx) => (
          <motion.div variants={itemVariants} key={idx} className="w-full md:w-[calc(50%-2rem)] lg:w-[calc(33.333%-2rem)] flex-shrink-0">
            <Link to={service.path} className="block group h-full cursor-pointer">
              <div
                className={`flex flex-col h-[480px] rounded-[2rem] shadow-lg border border-gray-100/50 dark:border-white/5 bg-gradient-to-br ${service.color} p-8 hover:-translate-y-2 hover:shadow-2xl hover:shadow-gray-300/50 dark:hover:shadow-indigo-900/20 transition-all duration-500 overflow-hidden relative backdrop-blur-sm group-hover:ring-1 group-hover:ring-white/30`}
              >
                {/* Book-like design accents */}
                <div className="absolute left-0 top-0 bottom-0 w-3 bg-white/20 shadow-inner z-10 hidden md:block mix-blend-overlay"></div>
                <div className="absolute right-0 top-0 w-40 h-40 bg-white/20 rounded-full blur-3xl transform translate-x-10 -translate-y-10 group-hover:scale-150 transition-transform duration-700"></div>

                {/* Content Header */}
                <div className="flex justify-between items-start mb-6 relative z-10">
                  <div className={`w-14 h-14 rounded-2xl shadow-md flex items-center justify-center ${service.accent} backdrop-blur-md border border-white/10`}>
                    {service.icon}
                  </div>
                  <div className={`w-10 h-10 rounded-full ${service.btnBg} ${service.btnHover} flex items-center justify-center shadow-lg transform translate-x-4 opacity-0 group-hover:opacity-100 group-hover:translate-x-0 transition-all duration-300`}>
                    <FaArrowRight size={16} />
                  </div>
                </div>

                {/* App-like Badges */}
                <div className="flex gap-2 mb-4 relative z-10">
                   {service.badges?.map((badge, bIdx) => (
                      <span key={bIdx} className="text-[10px] font-bold px-3 py-1 bg-white/20 backdrop-blur-md rounded-full border border-white/30 backdrop-filter shadow-sm text-white mix-blend-luminosity uppercase tracking-wider">
                         {badge}
                      </span>
                   ))}
                </div>

                {/* Text Content */}
                <div className="relative z-10 mb-6">
                  <h4 className={`text-2xl font-bold mb-3 ${service.textColor}`}>{service.title}</h4>
                  <p className={`font-medium leading-relaxed ${service.descColor} text-sm`}>
                    {service.desc}
                  </p>
                </div>

                {/* Image acting as the "cover" */}
                <div className="mt-auto relative z-10 w-full h-48 rounded-xl bg-white/10 shadow-inner p-4 overflow-hidden group-hover:bg-white/20 backdrop-blur-sm transition-colors duration-300 flex items-center justify-center border border-white/5">
                   <motion.img
                     src={service.image}
                     alt={service.title}
                     className="max-h-full max-w-full object-contain transform group-hover:scale-110 drop-shadow-xl transition-transform duration-500 ease-out"
                   />
                </div>
              </div>
            </Link>
          </motion.div>
        ))}
      </motion.div>

      {/* Action Footer */}
      <motion.div 
        initial={{ opacity: 0, y: 20 }}
        whileInView={{ opacity: 1, y: 0 }}
        viewport={{ once: true }}
        transition={{ delay: 0.6, duration: 0.6 }}
        className="text-center mt-16 relative z-10"
      >
        <Link to="/services">
          <button className="relative inline-flex items-center gap-3 px-8 py-4 bg-gray-900 dark:bg-white dark:text-gray-900 text-white font-bold rounded-full shadow-xl hover:bg-gray-800 dark:hover:bg-gray-100 hover:shadow-gray-900/30 dark:hover:shadow-white/10 hover:-translate-y-1 transition-all duration-300 group">
            Explore All Services
            <span className="bg-white/20 dark:bg-gray-900/10 p-2 rounded-full group-hover:translate-x-1 transition-transform">
              <FaArrowRight size={14} />
            </span>
          </button>
        </Link>
      </motion.div>

      {/* Proprietary Product Ecosystem Separator */}
      <div className="max-w-7xl mx-auto mt-32 mb-16 px-4">
        <div className="flex flex-col md:flex-row items-center gap-6">
          <div className="h-[2px] flex-1 bg-gradient-to-r from-transparent via-indigo-500/30 to-indigo-500 dark:to-indigo-400/50 hidden md:block" />
          <h3 className="text-xl md:text-2xl font-black text-center text-gray-900 dark:text-white uppercase tracking-tighter">
            Fuel Your Vision with Our <span className="text-indigo-600 dark:text-indigo-400">Proprietary Tech Ecosystem</span>
          </h3>
          <div className="h-[2px] flex-1 bg-gradient-to-l from-transparent via-indigo-500/30 to-indigo-500 dark:to-indigo-400/50 hidden md:block" />
        </div>
      </div>

      {/* Product Cards Grid */}
      <motion.div 
        variants={containerVariants}
        initial="hidden"
        whileInView="show"
        viewport={{ once: true, margin: "-100px" }}
        className="max-w-7xl mx-auto flex flex-wrap justify-center gap-8 relative z-10"
      >
        {products.map((product, idx) => {
          const isExternal = product.path.startsWith('http');
          const CardContent = (
            <div
              className={`flex flex-col h-[480px] rounded-[2.5rem] shadow-lg border border-gray-100/50 dark:border-white/5 bg-gradient-to-br ${product.color} p-8 hover:-translate-y-2 hover:shadow-2xl transition-all duration-500 overflow-hidden relative backdrop-blur-md group-hover:ring-2 group-hover:ring-white/20`}
            >
              {/* Book-like design accents */}
              <div className="absolute left-0 top-0 bottom-0 w-3 bg-white/20 shadow-inner z-10 mix-blend-overlay"></div>
              <div className="absolute right-0 top-0 w-56 h-56 bg-white/10 rounded-full blur-[80px] transform translate-x-10 -translate-y-10 group-hover:scale-150 transition-transform duration-700"></div>

              {/* Content Header */}
              <div className="flex justify-between items-start mb-6 relative z-10">
                <div className={`w-14 h-14 rounded-2xl shadow-md flex items-center justify-center ${product.accent} backdrop-blur-md border border-white/20`}>
                  {product.icon}
                </div>
                <div className={`w-10 h-10 rounded-full ${product.btnBg} flex items-center justify-center shadow-lg transform translate-x-4 opacity-0 group-hover:opacity-100 group-hover:translate-x-0 transition-all duration-300 ${product.textColor} border border-white/10`}>
                  <FaArrowRight size={16} />
                </div>
              </div>

              {/* App-like Badges */}
              <div className="flex gap-2 mb-4 relative z-10">
                 {product.badges?.map((badge, bIdx) => (
                    <span key={bIdx} className={`text-[10px] font-black px-3 py-1 bg-white/10 backdrop-blur-md rounded-full border border-white/20 shadow-sm ${product.textColor} uppercase tracking-wider`}>
                       {badge}
                    </span>
                 ))}
              </div>

              {/* Text Content */}
              <div className="relative z-10 mb-6">
                <h4 className={`text-3xl font-black mb-3 ${product.textColor} tracking-tight`}>{product.title}</h4>
                <p className={`font-semibold leading-relaxed ${product.descColor} text-sm`}>
                  {product.desc}
                </p>
              </div>

              {/* Image acting as the "cover" */}
              <div className="mt-auto relative z-10 w-full h-52 rounded-2xl bg-black/5 dark:bg-white/5 shadow-inner p-4 overflow-hidden group-hover:bg-black/10 dark:group-hover:bg-white/10 transition-colors duration-300 flex items-center justify-center border border-white/10">
                 <motion.img
                   src={product.image}
                   alt={product.title}
                   className="min-h-full min-w-full object-cover transform group-hover:scale-110 drop-shadow-2xl transition-transform duration-700 ease-out rounded-lg"
                 />
                 <div className="absolute inset-0 bg-gradient-to-t from-black/40 via-transparent to-transparent opacity-60 group-hover:opacity-20 transition-opacity" />
                 <div className="absolute bottom-4 left-4 right-4 text-white font-black text-center text-lg uppercase tracking-widest drop-shadow-lg scale-0 group-hover:scale-100 transition-transform duration-500">
                   Explore Product
                 </div>
              </div>
            </div>
          );

          return (
            <motion.div variants={itemVariants} key={idx} className="w-full md:w-[calc(50%-2rem)] lg:w-[calc(40%-2rem)] flex-shrink-0">
              {isExternal ? (
                <a href={product.path} target="_blank" rel="noopener noreferrer" className="block group h-full cursor-pointer">
                  {CardContent}
                </a>
              ) : (
                <Link to={product.path} className="block group h-full cursor-pointer">
                  {CardContent}
                </Link>
              )}
            </motion.div>
          );
        })}
      </motion.div>

    </div>
  );
};

export default HomeServices;
