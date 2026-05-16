import React from "react";
import { useNavigate } from "react-router-dom";
import { FaArrowLeft } from "react-icons/fa";
import { ChefHat } from "lucide-react";
import cloudKitchenImg from "../../assets/cloud_kitchen_setup.png";
import { useTheme } from "../../components/context/ThemeContext";
import { companyDetails } from "../../data/companyDetails";

const CloudKitchenDetails = () => {
  const navigate = useNavigate();
  const { theme } = useTheme();
  const isDarkMode = theme === 'dark';

  const handleStartConsultation = () => {
    window.open(`https://wa.me/${companyDetails.phone.whatsappGroup}`, '_blank');
  };

  // --- Common Text Content Component ---
  const TextContent = () => (
    <div className="space-y-8 text-left pr-4">
      <h1 className="text-4xl sm:text-5xl font-extrabold leading-tight tracking-tight text-gray-900 dark:text-white">
        A to Z Cloud Kitchen <br />
        <span className="bg-gradient-to-r from-cyan-600 to-blue-500 dark:from-cyan-500 dark:to-blue-400 bg-clip-text text-transparent">
          Setup & Scaling
        </span>
      </h1>

      <p className="text-lg sm:text-xl leading-relaxed font-medium text-gray-700 dark:text-gray-300">
        Turn your culinary dream into a profitable digital brand. We provide end-to-end assistance for setting up your cloud kitchen from scratch. From finding the right equipment to building a premium brand identity, we are your growth partners.
      </p>

      <div className="space-y-6">
        <h3 className="text-2xl font-bold text-gray-900 dark:text-white flex items-center gap-3">
          <ChefHat className="text-cyan-600 dark:text-cyan-400" />
          Our Expertise:
        </h3>
        <ul className="grid grid-cols-1 sm:grid-cols-2 gap-4">
          {[
            "Kitchen Layout & Setup",
            "Brand Identity & Logo",
            "Zomato & Swiggy Onboarding",
            "Toingit Integration",
            "GST & FSSAI Licensing",
            "Menu Engineering & Pricing",
            "Marketing & Revenue Growth",
            "Operational Training"
          ].map((item, index) => (
            <li key={index} className="flex items-center gap-2 text-gray-700 dark:text-gray-300">
              <div className="w-2 h-2 rounded-full bg-cyan-500"></div>
              {item}
            </li>
          ))}
        </ul>
      </div>

      <p className="text-lg sm:text-xl leading-relaxed font-medium text-gray-700 dark:text-gray-300">
        Our experts manage the technical chaos of documentation, licenses, and digital listings while you focus on what you do best—cooking great food.
      </p>

      <p className="text-sm text-gray-500 dark:text-gray-400 italic font-medium">
        "From Zero to a Leading Cloud Kitchen Brand — We make it happen."
      </p>

      <button
        onClick={handleStartConsultation}
        className="mt-6 bg-cyan-600 dark:bg-cyan-500 hover:bg-cyan-700 dark:hover:bg-cyan-600 text-white px-8 py-4 rounded-xl text-lg font-bold shadow-xl shadow-cyan-600/20 transition-all hover:-translate-y-1"
      >
        Start Your Cloud Kitchen
      </button>
    </div>
  );

  return (
    <div className="min-h-screen relative bg-gradient-to-br from-cyan-50 via-white to-blue-50 dark:from-slate-950 dark:via-cyan-950/10 dark:to-slate-950 transition-colors duration-500">

      {/* --- Fixed Elements: Back Arrow --- */}
      <div className="fixed top-4 left-4 z-50">
        <button
          onClick={() => navigate(-1)}
          className="p-3 rounded-full shadow-lg bg-white dark:bg-slate-800 text-gray-800 dark:text-gray-200 transition-colors hover:bg-cyan-50 dark:hover:bg-slate-700"
          aria-label="Go back"
        >
          <FaArrowLeft className="text-xl" />
        </button>
      </div>

      {/* --- Main Content Area --- */}
      <div className="flex flex-col md:flex-row pt-20">

        {/* --- Mobile-Only Sticky Image Section --- */}
        <div className="md:hidden sticky top-0 z-20 w-full px-6 py-4 bg-white/80 dark:bg-slate-950/80 backdrop-blur-md shadow-md">
            <img
                src={cloudKitchenImg}
                alt="Cloud Kitchen Setup"
                className="w-full max-w-sm sm:max-w-md mx-auto rounded-3xl shadow-2xl dark:shadow-cyan-900/20 object-cover dark:brightness-90"
            />
        </div>

        {/* --- Left: Scrollable Info Section (Mobile & Desktop) --- */}
        <div className="w-full md:w-1/2 px-6 py-12 sm:px-10 md:py-20 md:overflow-y-auto space-y-8">
          <TextContent />
        </div>

        {/* --- Right: Sticky Image Section (Desktop Only) --- */}
        <div className="hidden md:flex md:w-1/2 items-center justify-center sticky top-0 h-screen z-10 p-12">
          <div className="relative group">
            <div className="absolute inset-0 bg-cyan-500/20 blur-[100px] rounded-full group-hover:bg-cyan-500/30 transition-colors"></div>
            <img
              src={cloudKitchenImg}
              alt="Cloud Kitchen Setup"
              className="w-full max-w-2xl rounded-[2.5rem] shadow-2xl dark:shadow-cyan-900/30 object-cover relative z-10 border border-white/20 transform hover:scale-[1.02] transition-transform duration-500"
            />
          </div>
        </div>
      </div>
    </div>
  );
};

export default CloudKitchenDetails;
