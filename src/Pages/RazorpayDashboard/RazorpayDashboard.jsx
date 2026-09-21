import React, { useState } from "react";
import axios from "axios";
import { API_URL } from "../../services/api";
import { CreditCard, Loader2, Sparkles, User, Mail, IndianRupee, FileText } from "lucide-react";
import Topbar from "../../components/userDashboard/Topbar";
import Sidebar from "../../components/SellerDashboard/Sidebar";

export default function RazorpayDashboard() {
  const [formData, setFormData] = useState({
    name: "",
    email: "",
    amount: "",
    purpose: ""
  });
  const [loading, setLoading] = useState(false);

  const handleChange = (e) => {
    setFormData({ ...formData, [e.target.name]: e.target.value });
  };

  const handleRazorpayPayment = async (e) => {
    e.preventDefault();
    setLoading(true);

    try {
      // 1. Create order on the backend
      const amountInPaise = parseInt(formData.amount) * 100;
      const orderRes = await axios.post(`${API_URL}/razorpay/create-order`, {
        amount: amountInPaise,
        currency: "INR",
        receipt: `receipt_${Date.now()}`
      });

      if (!orderRes.data.success) {
        throw new Error(orderRes.data.message);
      }

      const { order_id } = orderRes.data;

      // 2. Initialize Razorpay options
      const options = {
        key: import.meta.env.VITE_RAZORPAY_KEY_ID, // Use Razorpay Key ID
        amount: amountInPaise,
        currency: "INR",
        name: "MagicScale",
        description: formData.purpose || "Service Payment",
        order_id: order_id,
        handler: async function (response) {
          // 3. Verify payment signature on the backend
          try {
            const verifyRes = await axios.post(`${API_URL}/razorpay/verify-payment`, {
              razorpay_order_id: response.razorpay_order_id,
              razorpay_payment_id: response.razorpay_payment_id,
              razorpay_signature: response.razorpay_signature,
            });

            if (verifyRes.data.success) {
              alert("Payment successful and verified!");
              setFormData({ name: "", email: "", amount: "", purpose: "" }); // Reset form
            } else {
              alert("Payment verification failed.");
            }
          } catch (error) {
            console.error("Verification error:", error);
            alert("Error verifying payment.");
          }
        },
        prefill: {
          name: formData.name,
          email: formData.email,
        },
        theme: {
          color: "#4f46e5", // Indigo-600 to match theme
        },
      };

      // 4. Open Razorpay Checkout Modal
      const rzp = new window.Razorpay(options);
      rzp.on("payment.failed", function (response) {
        alert(`Payment Failed: ${response.error.description}`);
      });
      rzp.open();
    } catch (error) {
      console.error("Payment error:", error);
      alert("Error initiating payment.");
    } finally {
      setLoading(false);
    }
  };

  return (
    <div className="flex h-screen bg-gray-100 dark:bg-slate-900">
      <Sidebar />
      <div className="flex-1 flex flex-col h-screen overflow-hidden">
        <Topbar />
        <div className="flex-1 overflow-auto p-6 md:p-10">
          <div className="max-w-2xl mx-auto space-y-6">
            
            <div className="flex items-center justify-between pb-4 border-b border-gray-200 dark:border-gray-800">
              <div>
                <h1 className="text-2xl font-black text-slate-900 dark:text-white flex items-center gap-2">
                  Razorpay Checkout <Sparkles size={18} className="text-indigo-600" />
                </h1>
                <p className="text-sm font-semibold text-slate-500 mt-1 uppercase tracking-wider">
                  Direct Payment Gateway
                </p>
              </div>
            </div>

            <div className="bg-white dark:bg-slate-800 p-8 rounded-2xl shadow-xl shadow-slate-200/50 dark:shadow-none border border-slate-100 dark:border-slate-700">
              <form onSubmit={handleRazorpayPayment} className="space-y-6">
                
                <div className="grid grid-cols-1 md:grid-cols-2 gap-6">
                  <div className="space-y-2">
                    <label className="text-[11px] font-black uppercase tracking-widest text-slate-500">Full Name</label>
                    <div className="relative">
                      <div className="absolute left-4 top-1/2 -translate-y-1/2 text-slate-400">
                        <User size={18} />
                      </div>
                      <input
                        required
                        type="text"
                        name="name"
                        value={formData.name}
                        onChange={handleChange}
                        className="w-full bg-slate-50 dark:bg-slate-900/50 border border-slate-200 dark:border-slate-700 rounded-xl py-3 pl-12 pr-4 text-sm font-semibold text-slate-900 dark:text-white focus:ring-2 focus:ring-indigo-500/20 focus:border-indigo-500 transition-all outline-none"
                        placeholder="John Doe"
                      />
                    </div>
                  </div>

                  <div className="space-y-2">
                    <label className="text-[11px] font-black uppercase tracking-widest text-slate-500">Email Address</label>
                    <div className="relative">
                      <div className="absolute left-4 top-1/2 -translate-y-1/2 text-slate-400">
                        <Mail size={18} />
                      </div>
                      <input
                        required
                        type="email"
                        name="email"
                        value={formData.email}
                        onChange={handleChange}
                        className="w-full bg-slate-50 dark:bg-slate-900/50 border border-slate-200 dark:border-slate-700 rounded-xl py-3 pl-12 pr-4 text-sm font-semibold text-slate-900 dark:text-white focus:ring-2 focus:ring-indigo-500/20 focus:border-indigo-500 transition-all outline-none"
                        placeholder="john@example.com"
                      />
                    </div>
                  </div>
                </div>

                <div className="grid grid-cols-1 md:grid-cols-2 gap-6">
                  <div className="space-y-2">
                    <label className="text-[11px] font-black uppercase tracking-widest text-slate-500">Amount (INR)</label>
                    <div className="relative">
                      <div className="absolute left-4 top-1/2 -translate-y-1/2 text-slate-400">
                        <IndianRupee size={18} />
                      </div>
                      <input
                        required
                        type="number"
                        min="1"
                        name="amount"
                        value={formData.amount}
                        onChange={handleChange}
                        className="w-full bg-slate-50 dark:bg-slate-900/50 border border-slate-200 dark:border-slate-700 rounded-xl py-3 pl-12 pr-4 text-sm font-semibold text-slate-900 dark:text-white focus:ring-2 focus:ring-indigo-500/20 focus:border-indigo-500 transition-all outline-none"
                        placeholder="1000"
                      />
                    </div>
                  </div>

                  <div className="space-y-2">
                    <label className="text-[11px] font-black uppercase tracking-widest text-slate-500">Purpose</label>
                    <div className="relative">
                      <div className="absolute left-4 top-1/2 -translate-y-1/2 text-slate-400">
                        <FileText size={18} />
                      </div>
                      <input
                        required
                        type="text"
                        name="purpose"
                        value={formData.purpose}
                        onChange={handleChange}
                        className="w-full bg-slate-50 dark:bg-slate-900/50 border border-slate-200 dark:border-slate-700 rounded-xl py-3 pl-12 pr-4 text-sm font-semibold text-slate-900 dark:text-white focus:ring-2 focus:ring-indigo-500/20 focus:border-indigo-500 transition-all outline-none"
                        placeholder="e.g. Swiggy Onboarding"
                      />
                    </div>
                  </div>
                </div>

                <div className="pt-4">
                  <button
                    type="submit"
                    disabled={loading}
                    className="w-full bg-indigo-600 hover:bg-indigo-700 text-white font-black text-sm uppercase tracking-widest py-4 rounded-xl flex items-center justify-center gap-2 transition-all shadow-lg shadow-indigo-200 dark:shadow-none disabled:opacity-70"
                  >
                    {loading ? (
                      <><Loader2 size={18} className="animate-spin" /> Processing...</>
                    ) : (
                      <><CreditCard size={18} /> Pay {formData.amount ? `₹${formData.amount}` : "Now"}</>
                    )}
                  </button>
                </div>
              </form>
            </div>

          </div>
        </div>
      </div>
    </div>
  );
}
