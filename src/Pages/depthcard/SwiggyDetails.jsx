import React from 'react';
import { useNavigate } from 'react-router-dom';
import swiggyImg from '../../assets/swiggynew1.png'; // ✅ Make sure this image exists

const SwiggyPage = () => {
  const navigate = useNavigate();

  const handleStartOnboarding = () => {
    navigate('/course/swiggy-onboarding');
  };

  return (
    <div className="h-screen overflow-hidden bg-gradient-to-br from-orange-50 via-yellow-50 to-pink-50 dark:from-slate-950 dark:via-orange-950/10 dark:to-slate-950 transition-colors duration-500">
      <div className="h-full flex">

        {/* ✅ Left: Scrollable Text */}
        <div className="w-full md:w-1/2 overflow-y-auto px-6 py-20 sm:px-10 space-y-8">
          <div className="space-y-8 text-left pr-4">
            <h1 className="text-5xl sm:text-6xl font-extrabold text-gray-900 dark:text-white leading-tight tracking-tight">
              Effortless Swiggy Onboarding <br />
              <span className="bg-gradient-to-r from-orange-500 to-yellow-500 dark:from-orange-400 dark:to-orange-500 bg-clip-text text-transparent">
                For Your Restaurant
              </span>
            </h1>

            <p className="text-lg sm:text-xl text-gray-700 dark:text-gray-300 leading-relaxed font-medium">
              Getting listed on Swiggy has never been easier. Our team ensures every aspect of your online presence is handled professionally — from initial registration to a fully optimized listing that drives more orders.
            </p>

            <p className="text-lg sm:text-xl text-gray-700 dark:text-gray-300 leading-relaxed font-medium">
              We simplify the setup by handling everything — from designing your menu, enabling delivery, activating payments, to making your brand visually appealing. You get a full-service experience so you can focus on your kitchen.
            </p>

            <p className="text-lg sm:text-xl text-gray-700 dark:text-gray-300 leading-relaxed font-medium">
              Whether you’re running a cloud kitchen, multi-cuisine outlet, or local café, we help you make a strong digital presence on Swiggy. Our mission — more reach, more revenue, and a frictionless onboarding.
            </p>

            <p className="text-sm text-gray-500 dark:text-gray-400">
              Trusted by hundreds of food businesses across India.
            </p>

            <button
              onClick={handleStartOnboarding}
              className="mt-6 bg-orange-500 dark:bg-orange-600 hover:bg-orange-600 dark:hover:bg-orange-500 text-white px-6 py-3 rounded-lg text-lg shadow transition"
            >
              Start Swiggy Onboarding
            </button>
          </div>
        </div>

        {/* ✅ Right: Sticky Image Section */}
        <div className="hidden md:flex md:w-1/2 items-center justify-center sticky top-0 h-screen z-10">
          <img
            src={swiggyImg}
            alt="Swiggy Setup"
            className="w-full max-w-2xl rounded-3xl shadow-2xl dark:shadow-orange-900/10 object-cover dark:brightness-90"
          />
        </div>
      </div>
    </div>
  );
};

export default SwiggyPage;
