// import { useState } from "react";
// import { Menu, X, ChevronDown } from "lucide-react";
// import { motion, AnimatePresence } from "framer-motion";
// import { logo } from "../assets"; 

// const Header = () => {
//   const [menuOpen, setMenuOpen] = useState(false);
//   const [dropdownOpen, setDropdownOpen] = useState(false);

//   const navLinks = [
//     { name: "Home", href: "/" },
//     {
//       name: "Services",
//       href: "#services",
//     },
//     { name: "About", href: "#about" },
//     // { name: "Testimonials", href: "#testimonials" },
//     { name: "Contact", href: "#contact" },
//   ];

//   return (
//     <header className="w-full fixed top-0 z-50 backdrop-blur bg-transparent font-poppins">
//       <div className="max-w-full px-6 sm:px-12 mx-auto">
//         <div className="flex justify-between items-center h-16">
//           {/* Logo */}
//           <div className="text-2xl font-semibold text-indigo-600 tracking-wide flex items-center">
//             <img className="w-[64px]" src={logo} alt="Logo" />
//           </div>

//           {/* Desktop Nav */}
//           <nav className="hidden md:flex items-center space-x-6">
//             {navLinks.map((link, idx) =>
//               link.dropdown ? (
//                 <div
//                   key={idx}
//                   className="relative group"
//                   onMouseEnter={() => setDropdownOpen(true)}
//                   onMouseLeave={() => setDropdownOpen(false)}
//                 >
//                   <button className="flex items-center text-gray-800 hover:text-indigo-600 text-sm font-medium transition">
//                     {link.name}
//                     <ChevronDown size={16} className="ml-1" />
//                   </button>
//                   <AnimatePresence>
//                     {dropdownOpen && (
//                       <motion.div
//                         initial={{ opacity: 0, y: 10 }}
//                         animate={{ opacity: 1, y: 0 }}
//                         exit={{ opacity: 0, y: 10 }}
//                         transition={{ duration: 0.2 }}
//                         className="absolute left-0 top-8 bg-white shadow-lg rounded-md px-4 py-3 w-64 space-y-2 z-50"
//                       >
//                         {link.items.map((sub, subIdx) => (
//                           <motion.a
//                             key={subIdx}
//                             href={sub.href}
//                             whileHover={{ x: 5 }}
//                             className="block text-gray-700 hover:text-indigo-600 text-sm transition"
//                           >
//                             {sub.name}
//                           </motion.a>
//                         ))}
//                       </motion.div>
//                     )}
//                   </AnimatePresence>
//                 </div>
//               ) : (
//                 <motion.a
//                   key={idx}
//                   href={link.href}
//                   whileHover={{ scale: 1.08, color: "#4f46e5" }}
//                   transition={{ type: "spring", stiffness: 300 }}
//                   className="text-gray-800 hover:text-indigo-600 text-sm font-medium transition"
//                 >
//                   {link.name}
//                 </motion.a>
//               )
//             )}
//           </nav>

//           {/* Desktop CTA */}
//           <motion.div
//             className="hidden md:block"
//             whileHover={{ scale: 1.05 }}
//             whileTap={{ scale: 0.95 }}
//           >
//             <a
//               href="#video"
//               className="bg-indigo-600 text-white text-sm font-medium px-5 py-2 rounded-full shadow hover:bg-indigo-700 transition"
//             >
//               Get Started
//             </a>
//           </motion.div>

//           {/* Mobile: CTA + Menu Icon */}
//           <div className="md:hidden flex items-center space-x-3">
//             <motion.a
//               href="#video"
//               className="bg-indigo-600 text-white text-sm font-medium px-4 py-1.5 rounded-full shadow hover:bg-indigo-700 transition"
//               whileHover={{ scale: 1.05 }}
//               whileTap={{ scale: 0.95 }}
//             >
//               Get Started
//             </motion.a>
//             <button
//               onClick={() => setMenuOpen(!menuOpen)}
//               className="text-gray-800 z-50"
//             >
//               {menuOpen ? <X size={26} /> : <Menu size={26} />}
//             </button>
//           </div>
//         </div>
//       </div>

//       {/* Mobile Slide-in Sidebar Menu */}
//       <AnimatePresence>
//         {menuOpen && (
//           <>
//             {/* Backdrop */}
//             <motion.div
//               initial={{ opacity: 0 }}
//               animate={{ opacity: 0.5 }}
//               exit={{ opacity: 0 }}
//               transition={{ duration: 0.3 }}
//               className="fixed inset-0 bg-black z-30"
//               onClick={() => setMenuOpen(false)}
//             />

//             {/* Sidebar */}
//             <motion.div
//               initial={{ x: "-100%" }}
//               animate={{ x: 0 }}
//               exit={{ x: "-100%" }}
//               transition={{ type: "tween", duration: 0.4 }}
//               className="fixed top-0 left-0 h-screen w-[75%] bg-white z-40 p-6 overflow-y-auto"
//             >
//               <div className="space-y-5 mt-10">
//                 {navLinks.map((link, idx) =>
//                   link.dropdown ? (
//                     <div key={idx}>
//                       <div className="text-gray-800 font-semibold mb-1">
//                         {link.name}
//                       </div>
//                       <div className="pl-4 space-y-2">
//                         {link.items.map((sub, subIdx) => (
//                           <a
//                             key={subIdx}
//                             href={sub.href}
//                             className="block text-gray-600 hover:text-indigo-600 text-sm"
//                             onClick={() => setMenuOpen(false)}
//                           >
//                             {sub.name}
//                           </a>
//                         ))}
//                       </div>
//                     </div>
//                   ) : (
//                     <a
//                       key={idx}
//                       href={link.href}
//                       className="block text-gray-800 font-semibold"
//                       onClick={() => setMenuOpen(false)}
//                     >
//                       {link.name}
//                     </a>
//                   )
//                 )}
//               </div>
//             </motion.div>
//           </>
//         )}
//       </AnimatePresence>
//     </header>
//   );
// };

// export default Header;










// import { useState, useEffect } from "react";
// import { Menu, X, ChevronDown } from "lucide-react";
// import { motion, AnimatePresence } from "framer-motion";
// import { logo } from "../assets";
// import { Link, useNavigate } from "react-router-dom";

// const Header = () => {
//   const [menuOpen, setMenuOpen] = useState(false);
//   const [dropdownOpen, setDropdownOpen] = useState(false);
//   const [user, setUser] = useState(null);
//   const navigate = useNavigate();

//   useEffect(() => {
//     const storedUser = localStorage.getItem("user");
//     if (storedUser) {
//       setUser(JSON.parse(storedUser));
//     }
//   }, []);

//   const handleLogout = () => {
//     localStorage.removeItem("user");
//     localStorage.removeItem("token");
//     setUser(null);
//     navigate("/login");
//   };

//   const navLinks = [
//     { name: "Home", href: "/" },
//     { name: "Services", href: "#services" },
//     { name: "About", href: "#about" },
//     { name: "Contact", href: "#contact" },
//   ];

//   return (
//     <header className="w-full fixed top-0 z-50 backdrop-blur bg-transparent font-poppins">
//       <div className="max-w-full px-6 sm:px-12 mx-auto">
//         <div className="flex justify-between items-center h-16">
//           <div className="text-2xl font-semibold text-indigo-600 tracking-wide flex items-center">
//             <img className="w-[64px]" src={logo} alt="Logo" />
//           </div>

//           <nav className="hidden md:flex items-center space-x-6">
//             {navLinks.map((link, idx) => (
//               <motion.a
//                 key={idx}
//                 href={link.href}
//                 whileHover={{ scale: 1.08, color: "#4f46e5" }}
//                 transition={{ type: "spring", stiffness: 300 }}
//                 className="text-gray-800 hover:text-indigo-600 text-sm font-medium transition"
//               >
//                 {link.name}
//               </motion.a>
//             ))}
//           </nav>

//           <motion.div
//             className="hidden md:flex items-center space-x-4"
//             whileHover={{ scale: 1.05 }}
//             whileTap={{ scale: 0.95 }}
//           >
//             {user ? (
//               <div className="flex items-center space-x-3">
//                 <span className="text-sm font-medium text-gray-800">
//                   {user.name} ({user.role})
//                 </span>
//                 <button
//                   onClick={handleLogout}
//                   className="bg-red-500 text-white text-sm font-medium px-3 py-1 rounded-full hover:bg-red-600"
//                 >
//                   Logout
//                 </button>
//               </div>
//             ) : (
//               <>
//                 <Link
//                   to="/login"
//                   className="text-sm text-indigo-600 hover:underline"
//                 >
//                   Login
//                 </Link>
//                 <Link
//                   to="/signup"
//                   className="bg-indigo-600 text-white text-sm font-medium px-4 py-2 rounded-full shadow hover:bg-indigo-700 transition"
//                 >
//                   Sign Up
//                 </Link>
//               </>
//             )}
//           </motion.div>

//           <div className="md:hidden flex items-center space-x-3">
//             <button
//               onClick={() => setMenuOpen(!menuOpen)}
//               className="text-gray-800 z-50"
//             >
//               {menuOpen ? <X size={26} /> : <Menu size={26} />}
//             </button>
//           </div>
//         </div>
//       </div>

//       <AnimatePresence>
//         {menuOpen && (
//           <>
//             <motion.div
//               initial={{ opacity: 0 }}
//               animate={{ opacity: 0.5 }}
//               exit={{ opacity: 0 }}
//               transition={{ duration: 0.3 }}
//               className="fixed inset-0 bg-black z-30"
//               onClick={() => setMenuOpen(false)}
//             />

//             <motion.div
//               initial={{ x: "-100%" }}
//               animate={{ x: 0 }}
//               exit={{ x: "-100%" }}
//               transition={{ type: "tween", duration: 0.4 }}
//               className="fixed top-0 left-0 h-screen w-[75%] bg-white z-40 p-6 overflow-y-auto"
//             >
//               <div className="space-y-5 mt-10">
//                 {navLinks.map((link, idx) => (
//                   <a
//                     key={idx}
//                     href={link.href}
//                     className="block text-gray-800 font-semibold"
//                     onClick={() => setMenuOpen(false)}
//                   >
//                     {link.name}
//                   </a>
//                 ))}

//                 <div className="mt-6">
//                   {user ? (
//                     <>
//                       <div className="text-gray-800 font-medium mb-2">
//                         {user.name} ({user.role})
//                       </div>
//                       <button
//                         onClick={handleLogout}
//                         className="w-full bg-red-500 text-white py-2 rounded-full hover:bg-red-600"
//                       >
//                         Logout
//                       </button>
//                     </>
//                   ) : (
//                     <>
//                       <Link
//                         to="/login"
//                         className="block text-center bg-indigo-600 text-white py-2 rounded-full hover:bg-indigo-700 mb-2"
//                         onClick={() => setMenuOpen(false)}
//                       >
//                         Login
//                       </Link>
//                       <Link
//                         to="/signup"
//                         className="block text-center border border-indigo-600 text-indigo-600 py-2 rounded-full hover:bg-indigo-50"
//                         onClick={() => setMenuOpen(false)}
//                       >
//                         Sign Up
//                       </Link>
//                     </>
//                   )}
//                 </div>
//               </div>
//             </motion.div>
//           </>
//         )}
//       </AnimatePresence>
//     </header>
//   );
// };

// export default Header;






















import { useState, useEffect } from "react";
import { Menu, X, ChevronDown } from "lucide-react";
import { motion, AnimatePresence } from "framer-motion";
import { logo, logo2 } from "../assets";
import { Link, useNavigate } from "react-router-dom";
import { useTheme } from "./context/ThemeContext";
import { useAuth } from "./context/AuthContext/useAuth";
import { Sun, Moon } from "lucide-react";

const LiveClock = () => {
  const [time, setTime] = useState(new Date());

  useEffect(() => {
    const timer = setInterval(() => setTime(new Date()), 1000);
    return () => clearInterval(timer);
  }, []);

  return (
    <div className="hidden lg:flex flex-col items-end justify-center px-4 border-l border-gray-200 dark:border-gray-800 ml-4 group">
      <div className="text-sm font-bold text-gray-800 dark:text-white group-hover:text-indigo-600 dark:group-hover:text-indigo-400 transition-colors tabular-nums">
        {time.toLocaleTimeString([], { hour: '2-digit', minute: '2-digit', second: '2-digit' })}
      </div>
      <div className="text-[10px] font-medium text-gray-500 dark:text-gray-400 uppercase tracking-widest">
        {time.toLocaleDateString([], { weekday: 'short', month: 'short', day: 'numeric' })}
      </div>
    </div>
  );
};

const Header = () => {
  const { theme, toggleTheme } = useTheme();
  const [menuOpen, setMenuOpen] = useState(false);
  const [scrolled, setScrolled] = useState(false);

  useEffect(() => {
    const handleScroll = () => {
      setScrolled(window.scrollY > 20);
    };
    window.addEventListener("scroll", handleScroll);
    return () => window.removeEventListener("scroll", handleScroll);
  }, []);

  const navLinks = [
    { name: "Home", href: "/" },
    { name: "About Us", href: "/about" },
    { name: "Services", href: "/services" },
    { name: "Blogs", href: "/blogs" },
    { name: "Pricing", href: "/pricing" },
    { name: "Careers", href: "/careers" },
  ];

  const { user, logout } = useAuth();
  const navigate = useNavigate();

  const handleLogout = () => {
    if (logout) logout();
    else {
      localStorage.removeItem("user");
      localStorage.removeItem("token");
    }
    navigate("/login");
  };

  const handleNavClick = (e, href) => {
    if (href === "/") {
      window.scrollTo({ top: 0, behavior: "smooth" });
    } else if (href.startsWith("/#")) {
      const id = href.split("#")[1];
      const element = document.getElementById(id);
      if (window.location.pathname === "/" && element) {
        e.preventDefault();
        element.scrollIntoView({ behavior: "smooth" });
        window.history.pushState(null, "", href);
      }
    }
    setMenuOpen(false); // Close mobile menu if open
  };

  return (
    <header className={`w-full fixed top-0 z-50 transition-all duration-500 ${scrolled ? 'py-3 backdrop-blur-xl bg-white/70 dark:bg-slate-950/70 shadow-lg border-b border-gray-100/50 dark:border-white/5' : 'py-5 bg-transparent'}`}>
      <div className="max-w-[1440px] px-6 sm:px-12 mx-auto">
        <div className="flex justify-between items-center h-15">
          
          {/* Logo - Left */}
          <Link to="/" onClick={(e) => handleNavClick(e, "/")} className="flex items-center group">
            <div className="relative">
              <img 
                className="w-40 md:w-38 h-auto object-contain group-hover:scale-105 transition-transform duration-300" 
                src={theme === 'dark' ? logo2 : logo} 
                alt="MagicScale" 
              />
              <div className="absolute -inset-2 bg-indigo-500 rounded-full blur opacity-0 group-hover:opacity-10 transition-opacity"></div>
            </div>
          </Link>

          {/* Desktop Nav - Center */}
          <nav className="hidden md:flex items-center space-x-1">
            {navLinks.map((link, idx) => (
              <motion.div key={idx} whileHover={{ y: -2 }} transition={{ type: "spring", stiffness: 400 }}>
                <Link
                  to={link.href}
                  onClick={(e) => handleNavClick(e, link.href)}
                  className="px-5 py-2 text-[14px] font-bold text-gray-700 dark:text-gray-300 hover:text-indigo-600 dark:hover:text-indigo-400 transition-colors relative group"
                >
                  {link.name}
                  <span className="absolute bottom-0 left-5 right-5 h-0.5 bg-indigo-600 transform scale-x-0 group-hover:scale-x-100 transition-transform duration-300 origin-center"></span>
                </Link>
              </motion.div>
            ))}
          </nav>

          {/* Right Section: Theme Toggle + Clock */}
          <div className="flex items-center">
            
            {/* Auth Section */}
            <div className="hidden lg:flex items-center mr-4 space-x-4">
              {user ? (
                <>
                  <Link 
                    to={user.role === 'seller' || user.role === 'admin' ? "/SellerDashboard" : "/dashboard"}
                    className="text-sm font-bold text-gray-700 dark:text-gray-300 hover:text-indigo-600 transition-colors"
                  >
                    Dashboard
                  </Link>
                  <button
                    onClick={handleLogout}
                    className="px-4 py-2 bg-red-500 hover:bg-red-600 text-white text-xs font-bold rounded-xl transition-all shadow-lg shadow-red-100 dark:shadow-none"
                  >
                    Logout
                  </button>
                </>
              ) : (
                <Link 
                  to="/login"
                  className="px-5 py-2.5 bg-indigo-600 hover:bg-indigo-700 text-white text-sm font-bold rounded-2xl transition-all shadow-lg shadow-indigo-200 dark:shadow-none"
                >
                  Login
                </Link>
              )}
            </div>

            {/* Theme Toggle */}
            <motion.button
              whileHover={{ scale: 1.1, rotate: 5 }}
              whileTap={{ scale: 0.9 }}
              onClick={toggleTheme}
              className="p-2.5 rounded-2xl bg-gray-100 dark:bg-slate-900 border border-gray-200 dark:border-slate-800 text-gray-700 dark:text-gray-300 hover:text-indigo-600 dark:hover:text-indigo-400 shadow-sm transition-all"
              aria-label="Toggle Theme"
            >
              {theme === "light" ? <Moon size={20} fill="currentColor" /> : <Sun size={20} fill="currentColor" />}
            </motion.button>

            {/* Live Clock */}
            <LiveClock />

            {/* Mobile Menu Trigger */}
            <div className="md:hidden ml-4">
              <button
                onClick={() => setMenuOpen(!menuOpen)}
                className="p-2 text-gray-700 dark:text-gray-300"
              >
                {menuOpen ? <X size={28} /> : <Menu size={28} />}
              </button>
            </div>
          </div>
        </div>
      </div>

      {/* Mobile Menu */}
      <AnimatePresence>
        {menuOpen && (
          <motion.div
            initial={{ opacity: 0, height: 0 }}
            animate={{ opacity: 1, height: "auto" }}
            exit={{ opacity: 0, height: 0 }}
            className="md:hidden bg-white dark:bg-slate-950 border-b border-gray-100 dark:border-white/5 overflow-hidden"
          >
            <div className="px-6 py-8 space-y-4 shadow-inner">
              {navLinks.map((link, idx) => (
                <Link
                  key={idx}
                  to={link.href}
                  onClick={(e) => handleNavClick(e, link.href)}
                  className="block text-2xl font-bold text-gray-800 dark:text-white hover:text-indigo-600 dark:hover:text-indigo-400 transition-colors"
                >
                  {link.name}
                </Link>
              ))}
              
              {/* Mobile Auth Links */}
              <div className="pt-6 mt-6 border-t border-gray-100 dark:border-white/5 space-y-4">
                {user ? (
                  <>
                    <Link
                      to={user.role === 'seller' || user.role === 'admin' ? "/SellerDashboard" : "/dashboard"}
                      onClick={() => setMenuOpen(false)}
                      className="block w-full text-left text-2xl font-bold text-indigo-600 dark:text-indigo-400 hover:opacity-80 transition-opacity"
                    >
                      Dashboard
                    </Link>
                    <button
                      onClick={() => { setMenuOpen(false); handleLogout(); }}
                      className="block w-full text-left text-xl font-bold text-red-500 hover:text-red-600 transition-colors"
                    >
                      Logout
                    </button>
                  </>
                ) : (
                  <Link
                    to="/login"
                    onClick={() => setMenuOpen(false)}
                    className="block w-full text-left text-2xl font-bold text-indigo-600 dark:text-indigo-400 hover:opacity-80 transition-opacity"
                  >
                    Login
                  </Link>
                )}
              </div>
            </div>
          </motion.div>
        )}
      </AnimatePresence>
    </header>
  );
};

export default Header;
