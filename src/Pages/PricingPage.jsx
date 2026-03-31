import React, { useEffect } from "react";
import Header from "../components/Header";
import Footer from "../components/Footer";
import Pricing from "../components/Pricing";

const PricingPage = () => {
  // Ensure the page scrolls to top on initial load
  useEffect(() => {
    window.scrollTo(0, 0);
  }, []);

  return (
    <div className="dark:bg-slate-950 transition-colors duration-500">
      <Header />
      <div className="pt-20"> {/* Add padding top to account for fixed header if needed */}
        <Pricing />
      </div>
      <Footer />
    </div>
  );
};

export default PricingPage;
