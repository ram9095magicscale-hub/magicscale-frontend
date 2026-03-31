// src/pages/PaymentSuccess.jsx
import React, { useEffect, useState } from "react";

const API_BASE = process.env.REACT_APP_API_BASE; // Replace with your API base URL
//https:magicscale

const PaymentSuccess = () => {
  const [status, setStatus] = useState("✅ Payment confirmed! Confirmation sent to your email.");

  useEffect(() => {
    // Cleanup local storage 
    const details = localStorage.getItem("checkout_order");
    if (details) {
      console.log("Payment details found, cleaning up...");
      localStorage.removeItem("checkout_order");
    }
  }, []);

  return (
    <div className="min-h-screen flex items-center justify-center bg-slate-50 dark:bg-slate-950 p-6">
      <div className="bg-white dark:bg-slate-900 p-8 rounded-3xl shadow-2xl text-center max-w-md border border-emerald-100 dark:border-emerald-900/30">
        <div className="w-20 h-20 bg-emerald-100 dark:bg-emerald-900/30 rounded-full flex items-center justify-center mx-auto mb-6 text-emerald-600">
          <svg xmlns="http://www.w3.org/2000/svg" className="h-10 w-10" fill="none" viewBox="0 0 24 24" stroke="currentColor">
            <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={3} d="M5 13l4 4L19 7" />
          </svg>
        </div>
        <h1 className="text-3xl font-black text-slate-900 dark:text-white mb-4">Payment Successful!</h1>
        <p className="text-slate-600 dark:text-slate-400 mb-8 font-medium leading-relaxed">
          Thank you for your trust. Your subscription has been activated and a confirmation email has been sent to your inbox.
        </p>
        <button 
          onClick={() => window.location.href = "/dashboard"}
          className="w-full py-4 bg-emerald-600 hover:bg-emerald-700 text-white rounded-xl font-bold transition-all shadow-lg shadow-emerald-200 dark:shadow-none"
        >
          Go to Dashboard
        </button>
      </div>
    </div>
  );
};

export default PaymentSuccess;
