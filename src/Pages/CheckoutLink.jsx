import React, { useEffect } from "react";
import { useNavigate } from "react-router-dom";
import { AlertCircle } from "lucide-react";

const CheckoutLink = () => {
  const navigate = useNavigate();

  return (
    <div className="min-h-screen flex items-center justify-center bg-slate-50 p-6">
      <div className="bg-white p-8 rounded-3xl shadow-2xl text-center max-w-md border border-red-100">
        <AlertCircle className="w-16 h-16 text-red-500 mx-auto mb-4" />
        <h2 className="text-2xl font-bold text-slate-900 mb-2">Link Expired</h2>
        <p className="text-slate-600 mb-6">This old Cashfree payment link format is no longer supported.</p>
        <button 
          onClick={() => navigate("/")} 
          className="px-6 py-3 bg-indigo-600 text-white rounded-xl font-bold hover:bg-indigo-700 transition-all"
        >
          Go Back Home
        </button>
      </div>
    </div>
  );
};

export default CheckoutLink;
