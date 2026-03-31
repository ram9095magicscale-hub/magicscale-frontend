import React, { useEffect } from "react";

const PaymentSuccess = () => {
  useEffect(() => {
    // Cleanup local storage 
    const details = localStorage.getItem("checkout_order");
    if (details) {
      console.log("Payment details found, cleaning up...");
      localStorage.removeItem("checkout_order");
    }
  }, []);

  return (
    <div className="min-h-screen flex items-center justify-center bg-slate-50 dark:bg-slate-950 p-6 pt-24 font-poppins">
      <div className="bg-white/70 dark:bg-slate-900/70 backdrop-blur-2xl p-8 md:p-12 rounded-[2.5rem] shadow-2xl text-center max-w-lg border border-white dark:border-slate-800 relative overflow-hidden">
        {/* Background Decorative Blob */}
        <div className="absolute -top-10 -right-10 w-40 h-40 bg-emerald-500/10 rounded-full blur-3xl"></div>
        
        <div className="w-24 h-24 bg-emerald-100 dark:bg-emerald-900/30 rounded-3xl flex items-center justify-center mx-auto mb-8 text-emerald-600 shadow-inner relative z-10">
          <svg xmlns="http://www.w3.org/2000/svg" className="h-12 w-12" fill="none" viewBox="0 0 24 24" stroke="currentColor">
            <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={3} d="M5 13l4 4L19 7" />
          </svg>
        </div>
        
        <h1 className="text-4xl md:text-5xl font-black text-slate-900 dark:text-white mb-6 tracking-tighter">
          Payment <span className="text-transparent bg-clip-text bg-gradient-to-r from-emerald-500 to-teal-500">Successful!</span>
        </h1>
        
        <p className="text-lg text-slate-600 dark:text-slate-400 mb-10 font-medium leading-relaxed">
          Thank you for your trust. Your subscription has been activated and a confirmation email has been sent to your inbox.
        </p>
        
        <div className="space-y-4">
          <button 
            onClick={() => window.location.href = "/dashboard"}
            className="w-full py-4 bg-slate-900 dark:bg-white text-white dark:text-slate-900 rounded-2xl font-black text-base transition-all hover:-translate-y-1 shadow-xl hover:shadow-slate-500/20 active:scale-[0.98]"
          >
            Go to Your Dashboard
          </button>
          
          <button 
            onClick={() => window.location.href = "/"}
            className="w-full py-4 bg-white/50 dark:bg-slate-800/50 backdrop-blur-md text-slate-600 dark:text-slate-400 rounded-2xl font-bold text-sm transition-all hover:bg-slate-100 dark:hover:bg-slate-800"
          >
            Return to Homepage
          </button>
        </div>
        
        <p className="mt-8 text-[10px] font-black text-slate-400 dark:text-slate-500 uppercase tracking-[0.2em]">
          Powered by MagicScale Secure Billing
        </p>
      </div>
    </div>
  );
};

export default PaymentSuccess;
