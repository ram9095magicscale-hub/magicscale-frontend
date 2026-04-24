import React, { useEffect, useState } from "react";
import { useLocation, useNavigate } from "react-router-dom";
import { CheckCircle2, Loader2, AlertCircle, Home, LayoutDashboard } from "lucide-react";
import { motion } from "framer-motion";
import { API_URL } from "../../services/api";

const PaymentSuccess = () => {
  const location = useLocation();
  const navigate = useNavigate();
  const [loading, setLoading] = useState(true);
  const [error, setError] = useState(null);
  const [details, setDetails] = useState(null);

  useEffect(() => {
    const confirmPayment = async () => {
      const queryParams = new URLSearchParams(location.search);
      const orderId = queryParams.get("order_id");
      
      const savedDetails = localStorage.getItem("checkout_order");
      let orderDetails = savedDetails ? JSON.parse(savedDetails) : {};
      
      // If we have orderId but no localStorage, we still try to confirm
      // The backend now handles fetching details from Cashfree using orderId
      setDetails(orderDetails);

      try {
        const response = await fetch(`${API_URL}/cashfree/confirm-payment`, {
          method: "POST",
          headers: { "Content-Type": "application/json" },
          body: JSON.stringify({
            order_id: orderId || orderDetails.order_id,
            userId: orderDetails.userId,
            plan: orderDetails.planSlug,
            duration: orderDetails.duration,
            amount: orderDetails.total,
            email: orderDetails.email,
            name: orderDetails.name,
            phone: orderDetails.phone
          }),
        });

        const data = await response.json();
        if (!response.ok) {
          throw new Error(data.message || "Failed to confirm payment");
        }

        console.log("Payment confirmed:", data);
        localStorage.removeItem("checkout_order");
        
        // Auto redirect to home after 5 seconds
        setTimeout(() => {
            navigate("/");
        }, 5000);

      } catch (err) {
        console.error("Confirmation Error:", err);
        setError(err.message);
      } finally {
        setLoading(false);
      }
    };

    confirmPayment();
  }, [location.search, navigate]);

  if (loading) {
    return (
      <div className="min-h-screen flex items-center justify-center bg-slate-50 dark:bg-slate-950 p-6 pt-24 font-poppins">
        <div className="flex flex-col items-center gap-4">
          <Loader2 className="w-12 h-12 animate-spin text-emerald-500" />
          <p className="text-slate-500 font-medium animate-pulse text-lg">Verifying your payment...</p>
        </div>
      </div>
    );
  }

  if (error) {
    return (
      <div className="min-h-screen flex items-center justify-center bg-slate-50 dark:bg-slate-950 p-6 pt-24 font-poppins">
        <div className="bg-white/70 dark:bg-slate-900/70 backdrop-blur-2xl p-8 md:p-12 rounded-[2.5rem] shadow-2xl text-center max-w-lg border border-red-100 dark:border-red-900/30">
          <div className="w-20 h-20 bg-red-100 dark:bg-red-900/30 rounded-2xl flex items-center justify-center mx-auto mb-6 text-red-600">
            <AlertCircle size={40} />
          </div>
          <h2 className="text-3xl font-black text-slate-900 dark:text-white mb-4">Verification Failed</h2>
          <p className="text-slate-600 dark:text-slate-400 mb-8 font-medium">
            {error}. Don't worry, if your money was deducted, our team will verify and activate your account manually.
          </p>
          <div className="flex flex-col gap-3">
            <button 
              onClick={() => navigate("/contact")}
              className="w-full py-4 bg-red-600 text-white rounded-xl font-bold transition-all hover:bg-red-700 shadow-lg shadow-red-500/20"
            >
              Contact Support
            </button>
            <button 
              onClick={() => navigate("/")}
              className="w-full py-4 bg-white dark:bg-slate-800 text-slate-600 dark:text-slate-300 rounded-xl font-bold border border-slate-200 dark:border-slate-700"
            >
              Back to Home
            </button>
          </div>
        </div>
      </div>
    );
  }

  return (
    <div className="min-h-screen flex items-center justify-center bg-slate-50 dark:bg-slate-950 p-6 pt-24 font-poppins">
      <motion.div 
        initial={{ opacity: 0, scale: 0.9 }}
        animate={{ opacity: 1, scale: 1 }}
        className="bg-white/70 dark:bg-slate-900/70 backdrop-blur-2xl p-8 md:p-12 rounded-[2.5rem] shadow-2xl text-center max-w-lg border border-white dark:border-slate-800 relative overflow-hidden"
      >
        <div className="absolute -top-10 -right-10 w-40 h-40 bg-emerald-500/10 rounded-full blur-3xl"></div>
        
        <div className="w-24 h-24 bg-emerald-100 dark:bg-emerald-900/30 rounded-3xl flex items-center justify-center mx-auto mb-8 text-emerald-600 shadow-inner relative z-10">
          <CheckCircle2 size={48} strokeWidth={2.5} />
        </div>
        
        <h1 className="text-4xl md:text-5xl font-black text-slate-900 dark:text-white mb-6 tracking-tighter">
          Payment <span className="text-transparent bg-clip-text bg-gradient-to-r from-emerald-500 to-teal-500">Successful!</span>
        </h1>
        
        <p className="text-lg text-slate-600 dark:text-slate-400 mb-10 font-medium leading-relaxed">
          Thank you {details?.name || "there"}! Your subscription has been activated and a confirmation email has been sent to {details?.email || "your inbox"}.
        </p>
        
        <div className="space-y-4">
          <button 
            onClick={() => navigate("/dashboard")}
            className="w-full py-4 bg-slate-900 dark:bg-white text-white dark:text-slate-900 rounded-2xl font-black text-base transition-all hover:-translate-y-1 shadow-xl hover:shadow-slate-500/20 active:scale-[0.98] flex items-center justify-center gap-2"
          >
            <LayoutDashboard size={20} />
            Go to Your Dashboard
          </button>
          
          <button 
            onClick={() => navigate("/")}
            className="w-full py-4 bg-white/50 dark:bg-slate-800/50 backdrop-blur-md text-slate-600 dark:text-slate-400 rounded-2xl font-bold text-sm transition-all hover:bg-slate-100 dark:hover:bg-slate-800 flex items-center justify-center gap-2"
          >
            <Home size={18} />
            Return to Homepage
          </button>
        </div>
        
        <p className="mt-8 text-[10px] font-black text-slate-400 dark:text-slate-500 uppercase tracking-[0.2em]">
          Powered by MagicScale Secure Billing
        </p>
      </motion.div>
    </div>
  );
};

export default PaymentSuccess;
