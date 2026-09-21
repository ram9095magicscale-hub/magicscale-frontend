import React, { useState } from "react";
import ManagePaymentLinks from "./ManagePaymentLinks";
import ManageRazorpayLinks from "./ManageRazorpayLinks";
import { ArrowLeft, CreditCard, LayoutDashboard } from "lucide-react";
import { motion } from "framer-motion";

export default function PaymentGatewaysPortal() {
  const [selectedGateway, setSelectedGateway] = useState(null);

  if (selectedGateway === "magicscale") {
    return (
      <div className="w-full">
        <button onClick={() => setSelectedGateway(null)} className="mb-4 flex items-center gap-2 text-sm font-bold text-slate-500 hover:text-slate-900 dark:hover:text-white transition-colors">
          <ArrowLeft size={16} /> Back to Gateways
        </button>
        <ManagePaymentLinks />
      </div>
    );
  }

  if (selectedGateway === "onboarding") {
    return (
      <div className="w-full">
        <button onClick={() => setSelectedGateway(null)} className="mb-4 flex items-center gap-2 text-sm font-bold text-slate-500 hover:text-slate-900 dark:hover:text-white transition-colors">
          <ArrowLeft size={16} /> Back to Gateways
        </button>
        <ManageRazorpayLinks />
      </div>
    );
  }

  return (
    <div className="flex flex-col items-center justify-center min-h-[60vh] w-full max-w-4xl mx-auto px-4">
      <div className="text-center mb-10 space-y-2">
        <h2 className="text-3xl md:text-4xl font-black text-slate-900 dark:text-white flex items-center justify-center gap-3 tracking-tight">
          <LayoutDashboard className="text-indigo-600" size={32} />
          Payment Gateway Portal
        </h2>
        <p className="text-slate-500 font-medium text-sm md:text-base">
          Select a gateway to manage and generate payment links for your clients.
        </p>
      </div>

      <div className="grid grid-cols-1 md:grid-cols-2 gap-6 w-full">
        
        {/* Gateway 1 (Cashfree) */}
        <motion.div 
          whileHover={{ scale: 1.02, y: -5 }}
          whileTap={{ scale: 0.98 }}
          onClick={() => setSelectedGateway("magicscale")}
          className="bg-white dark:bg-slate-800 p-8 rounded-3xl border-2 border-indigo-100 dark:border-indigo-900 shadow-xl shadow-indigo-100 dark:shadow-none cursor-pointer flex flex-col items-center justify-center text-center space-y-4 group hover:border-indigo-500 transition-colors"
        >
          <div className="w-20 h-20 bg-indigo-50 dark:bg-indigo-900/30 text-indigo-600 rounded-full flex items-center justify-center mb-2 group-hover:scale-110 transition-transform">
            <CreditCard size={36} />
          </div>
          <h3 className="text-2xl font-black text-slate-900 dark:text-white tracking-tight">
            Gateway for MagicScale
          </h3>
          <p className="text-sm font-bold text-slate-400 uppercase tracking-widest">
            Primary Gateway
          </p>
        </motion.div>

        {/* Gateway 2 (Razorpay) */}
        <motion.div 
          whileHover={{ scale: 1.02, y: -5 }}
          whileTap={{ scale: 0.98 }}
          onClick={() => setSelectedGateway("onboarding")}
          className="bg-white dark:bg-slate-800 p-8 rounded-3xl border-2 border-emerald-100 dark:border-emerald-900 shadow-xl shadow-emerald-100 dark:shadow-none cursor-pointer flex flex-col items-center justify-center text-center space-y-4 group hover:border-emerald-500 transition-colors"
        >
          <div className="w-20 h-20 bg-emerald-50 dark:bg-emerald-900/30 text-emerald-600 rounded-full flex items-center justify-center mb-2 group-hover:scale-110 transition-transform">
            <CreditCard size={36} />
          </div>
          <h3 className="text-2xl font-black text-slate-900 dark:text-white tracking-tight">
            Gateway for Onboarding
          </h3>
          <p className="text-sm font-bold text-slate-400 uppercase tracking-widest">
            Secondary Gateway
          </p>
        </motion.div>

      </div>
    </div>
  );
}
