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

const Home = () => {
  return (
    <div className="dark:bg-slate-950 transition-colors duration-500">
      {/* <UserDashboard /> */}
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
  );
};

export default Home;

