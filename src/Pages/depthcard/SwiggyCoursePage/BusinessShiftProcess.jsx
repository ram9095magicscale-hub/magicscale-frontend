import React from 'react';
import {
  FaRegBuilding,
  FaReceipt,
  FaUtensils,
  FaMoneyBillWave,
  FaHeadset,
  FaPenNib,
} from 'react-icons/fa';

const BusinessShiftProcess = () => {
  return (
    <div className="w-full py-20 px-6 md:px-16 font-[Poppins] bg-gradient-to-r from-blue-900 via-purple-800 to-indigo-900 relative overflow-hidden">
      {/* 🔊 Optional Background Wave Design */}
      <div className="absolute inset-0 bg-[url('/wave.svg')] bg-cover bg-center opacity-10 pointer-events-none" />

      {/* ✅ Content */}
      <div className="relative z-10 max-w-7xl mx-auto text-white">
        <h2 className="text-4xl font-bold text-center mb-4">Shift Your Business Online with Ease</h2>
        <p className="text-center text-lg text-purple-200 mb-12">
          We simplify your journey — from registration to launch, so you can focus on food & growth.
        </p>

        {/* ✅ Feature Cards */}
        <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 gap-6">
          <div className="bg-neutral-900 bg-opacity-90 rounded-2xl p-6 shadow-xl hover:scale-[1.02] transition text-white">
            <FaRegBuilding className="text-3xl mb-3 text-yellow-400" />
            <h3 className="text-xl font-semibold mb-1">Business Registration</h3>
            <p className="text-sm text-purple-100">
              We handle PAN, GST, FSSAI setup — so you’re legally ready from day one.
            </p>
          </div>

          <div className="bg-neutral-900 bg-opacity-90 rounded-2xl p-6 shadow-xl hover:scale-[1.02] transition text-white">
            <FaPenNib className="text-3xl mb-3 text-pink-400" />
            <h3 className="text-xl font-semibold mb-1">Brand Identity</h3>
            <p className="text-sm text-purple-100">
              Logo, banner, menu card — our designers build your brand visuals in hours.
            </p>
          </div>

          <div className="bg-neutral-900 bg-opacity-90 rounded-2xl p-6 shadow-xl hover:scale-[1.02] transition text-white">
            <FaUtensils className="text-3xl mb-3 text-green-400" />
            <h3 className="text-xl font-semibold mb-1">Menu Upload</h3>
            <p className="text-sm text-purple-100">
              Add all dishes, categories, prices & images — no tech skills required.
            </p>
          </div>

          <div className="bg-neutral-900 bg-opacity-90 rounded-2xl p-6 shadow-xl hover:scale-[1.02] transition text-white">
            <FaMoneyBillWave className="text-3xl mb-3 text-indigo-400" />
            <h3 className="text-xl font-semibold mb-1">Payments & Delivery</h3>
            <p className="text-sm text-purple-100">
              Activate UPI, Razorpay, Cashfree & setup delivery partners in one click.
            </p>
          </div>

          <div className="bg-neutral-900 bg-opacity-90 rounded-2xl p-6 shadow-xl hover:scale-[1.02] transition text-white">
            <FaReceipt className="text-3xl mb-3 text-orange-400" />
            <h3 className="text-xl font-semibold mb-1">Legal & Tax Support</h3>
            <p className="text-sm text-purple-100">
              We assist with compliance, invoicing & tax queries for your food business.
            </p>
          </div>

          <div className="bg-neutral-900 bg-opacity-90 rounded-2xl p-6 shadow-xl hover:scale-[1.02] transition text-white">
            <FaHeadset className="text-3xl mb-3 text-blue-400" />
            <h3 className="text-xl font-semibold mb-1">24×7 Support</h3>
            <p className="text-sm text-purple-100">
              Our team is available on WhatsApp & calls to guide you at every step.
            </p>
          </div>
        </div>
      </div>
    </div>
  );
};

export default BusinessShiftProcess;
