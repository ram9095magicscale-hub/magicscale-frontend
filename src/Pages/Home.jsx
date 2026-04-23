// import React from "react";
// import Header from "../components/Header";
// import Hero from "../components/Hero";
// // import Services from "../components/Services";
// import Testimonial from "../components/Testimonial";
// import Contact from "../components/Contact";
// import About from "../components/About";
// import Footer from "../components/Footer";
// import Video from "../components/Video";
// import HomeWork from "../components/HomeWork";
// // import Work from "../components/Work";
// import Pricing from "../components/Pricing";


// const Home = () => {
//   return (
//     <div>
//       <Header />
//       <Hero />
//       <Video />
//       <HomeWork />
//       <Pricing />
//       {/* <Services /> */}
//       {/* <Testimonial /> */}
    
//       <Contact />
//       <About />
//       <Footer />
//     </div>
//   );
// };

// export default Home;









import React from "react";
import Header from "../components/Header";
import Hero from "../components/Hero";
// import Services from "../components/Services";
import Testimonial from "../components/Testimonial";
import Contact from "../components/Contact";
import About from "../components/About";
import Footer from "../components/Footer";
import Video from "../components/Video";
import HomeWork from "../components/HomeWork";
import Work from "../components/Work";
import FAQ from "../components/FAQ";
import Gallery from "../components/Gallery";
import PricingSummary from "../components/PricingSummary";
import Process from "../components/Process";
import { useTheme } from "../components/context/ThemeContext";

const Home = () => {
  const { isDarkMode } = useTheme();

  return (
    <div className={`min-h-screen selection:bg-purple-500/30 overflow-x-hidden transition-colors duration-500 ${
      isDarkMode ? 'bg-[#04070d] text-slate-200' : 'bg-[#fcfdfd] text-slate-800'
    }`}>
      {/* Premium Background Blobs */}
      <div className="fixed inset-0 overflow-hidden pointer-events-none z-0">
        <div className="absolute -top-[10%] -right-[10%] w-[50%] h-[50%] bg-purple-600/10 dark:bg-purple-600/5 blur-[120px] rounded-full mix-blend-screen animate-pulse-slow" />
        <div className="absolute top-[40%] -left-[10%] w-[40%] h-[40%] bg-indigo-500/10 dark:bg-indigo-500/5 blur-[120px] rounded-full mix-blend-screen animate-pulse-slow" style={{ animationDelay: '2s' }} />
        <div className="absolute -bottom-[10%] right-[20%] w-[35%] h-[35%] bg-blue-500/10 dark:bg-blue-500/5 blur-[120px] rounded-full mix-blend-screen animate-pulse-slow" style={{ animationDelay: '4s' }} />
      </div>

      <div className="relative z-10">
        <Hero />
        <Video />
        <Process />
        <PricingSummary />
        {/* <Services /> */}
        {/* <Testimonial /> */}
      
        <About />
        <Gallery />
        <FAQ />
        <Contact />
        <Footer />
      </div>
    </div>
  );
};

export default Home;

