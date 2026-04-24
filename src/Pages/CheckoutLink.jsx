import React, { useEffect, useState } from "react";
import { useLocation, useNavigate } from "react-router-dom";
import { load } from "@cashfreepayments/cashfree-js";
import { Loader2, AlertCircle, ShieldCheck } from "lucide-react";

const CheckoutLink = () => {
  const location = useLocation();
  const navigate = useNavigate();
  const queryParams = new URLSearchParams(location.search);
  const sessionId = queryParams.get("session_id");
  const env = queryParams.get("env") || "production";
  
  const [loading, setLoading] = useState(true);
  const [error, setError] = useState(null);

  useEffect(() => {
    const initPayment = async () => {
      if (!sessionId) {
        setError("Missing payment session ID.");
        setLoading(false);
        return;
      }

      try {
        const cashfree = await load({
          mode: env === "prod" || env === "production" ? "production" : "sandbox"
        });

        await cashfree.checkout({
          paymentSessionId: sessionId,
          redirectTarget: "_self"
        });
      } catch (err) {
        console.error("Cashfree Error:", err);
        setError("Failed to initialize payment. Please try again.");
      } finally {
        setLoading(false);
      }
    };

    initPayment();
  }, [sessionId, env]);

  if (error) {
    return (
      <div className="min-h-screen flex items-center justify-center bg-slate-50 p-6">
        <div className="bg-white p-8 rounded-3xl shadow-2xl text-center max-w-md border border-red-100">
          <AlertCircle className="w-16 h-16 text-red-500 mx-auto mb-4" />
          <h2 className="text-2xl font-bold text-slate-900 mb-2">Payment Error</h2>
          <p className="text-slate-600 mb-6">{error}</p>
          <button 
            onClick={() => navigate("/")} 
            className="px-6 py-3 bg-indigo-600 text-white rounded-xl font-bold hover:bg-indigo-700 transition-all"
          >
            Go Back Home
          </button>
        </div>
      </div>
    );
  }

  return (
    <div className="min-h-screen flex items-center justify-center bg-slate-50">
      <div className="flex flex-col items-center gap-6 p-8 bg-white rounded-[2.5rem] shadow-xl border border-slate-100">
        <div className="relative">
          <Loader2 className="w-16 h-16 animate-spin text-indigo-600" />
          <ShieldCheck className="absolute top-1/2 left-1/2 -translate-x-1/2 -translate-y-1/2 text-indigo-600 w-6 h-6" />
        </div>
        <div className="text-center">
          <h2 className="text-2xl font-black text-slate-900 tracking-tight">Initializing Payment</h2>
          <p className="text-slate-500 font-bold mt-2 animate-pulse">Connecting to secure gateway...</p>
        </div>
        <div className="mt-4 pt-4 border-t border-slate-50 w-full text-center">
          <p className="text-[10px] font-black text-slate-400 uppercase tracking-widest">Secure SSL Protected Transaction</p>
        </div>
      </div>
    </div>
  );
};

export default CheckoutLink;
