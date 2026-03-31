

import React from 'react';
import { useNavigate } from 'react-router-dom';
import zomatoImg from '../../assets/zomato3.png';

const ZomatoPage = () => {
  const navigate = useNavigate();

  const handleStartOnboarding = () => {
    navigate('/course/zomato-onboarding');
  };

  return (
    <div className="h-screen overflow-hidden bg-gradient-to-br from-blue-50 via-pink-50 to-yellow-50 dark:from-slate-950 dark:via-blue-950/20 dark:to-slate-950 transition-colors duration-500">
      <div className="h-full flex">

        {/* ✅ Left: Scrollable Text */}
        <div className="w-full md:w-1/2 overflow-y-auto px-6 py-20 sm:px-10 space-y-8">
          <div className="space-y-8 text-left pr-4">
            <h1 className="text-5xl sm:text-6xl font-extrabold text-gray-900 dark:text-white leading-tight tracking-tight">
              Seamless Zomato Onboarding <br />
              <span className="bg-gradient-to-r from-red-500 to-pink-600 dark:from-red-400 dark:to-pink-500 bg-clip-text text-transparent">
                For Your Restaurant
              </span>
            </h1>

            <p className="text-lg sm:text-xl text-gray-700 dark:text-gray-300 leading-relaxed font-medium">
              Getting listed on Zomato has never been easier. Our team ensures every aspect of your online presence is handled professionally — from initial registration to a fully optimized listing that draws more customers and increases your order volume.
            </p>

            <p className="text-lg sm:text-xl text-gray-700 dark:text-gray-300 leading-relaxed font-medium">
              We take the hassle out of setting up by managing everything — designing your menu, enabling delivery services, activating payment options, and making sure your brand stands out. You get a full-service experience so you can focus on running your restaurant.
            </p>

            <p className="text-lg sm:text-xl text-gray-700 dark:text-gray-300 leading-relaxed font-medium">
              Whether you’re a cloud kitchen, a multi-cuisine restaurant, or a small café, we help you make a professional first impression and reach more customers through Zomato. Our goal is simple — more visibility, more orders, and a smoother digital journey.
            </p>

            <p className="text-sm text-gray-500 dark:text-gray-400">
              Trusted by hundreds of food entrepreneurs across India.
            </p>

            <button
              onClick={handleStartOnboarding}
              className="mt-6 bg-red-600 dark:bg-red-500 hover:bg-red-700 dark:hover:bg-red-600 text-white px-6 py-3 rounded-lg text-lg shadow transition"
            >
              Start Zomato Onboarding
            </button>
          </div>
        </div>

        {/* ✅ Right: Sticky Image Section */}
        <div className="hidden md:flex md:w-1/2 items-center justify-center sticky top-0 h-screen z-10">
          <img
            src={zomatoImg}
            alt="Zomato Setup"
            className="w-full max-w-2xl rounded-3xl shadow-2xl dark:shadow-red-900/10 object-cover dark:brightness-90"
          />
        </div>
      </div>
    </div>
  );
};

export default ZomatoPage;
