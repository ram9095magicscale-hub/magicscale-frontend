import React, { useState, useEffect } from "react";
import { useParams, useLocation, useNavigate } from "react-router-dom";
import {
  CheckCircle2,
  ShoppingCart,
  User,
  Mail,
  Phone,
  MapPin,
  ShieldCheck,
  Zap,
  Award,
  ArrowRight,
  Loader2,
  Tag,
  AlertCircle,
  Utensils,
  ShoppingBag,
  FileText,
  TrendingUp,
  Layers,
  Box,
  Check
} from "lucide-react";
import { motion, AnimatePresence } from "framer-motion";
import { API_URL } from "../services/api";
import { useAuth } from "../components/context/AuthContext/useAuth";
import { load } from "@cashfreepayments/cashfree-js";


const SERVICE_THEMES = {
  zomato: {
    primary: "red",
    gradient: "from-red-600 to-pink-600",
    bgGradient: "bg-gradient-to-br from-red-50 via-white to-pink-50 dark:from-red-950/20 dark:via-slate-950 dark:to-pink-950/20",
    orb: "bg-red-500",
    orb2: "bg-pink-500",
    accent: "text-red-600",
    accentBg: "bg-red-50",
    check: "text-pink-500",
    activeBtn: "bg-red-600 text-white shadow-lg shadow-red-500/30",
    payBtn: "from-red-600 to-pink-600 hover:shadow-red-500/30",
    inputIcon: "group-focus-within:text-red-500",
    focusRing: "focus:ring-red-500/10",
    focusBorder: "focus:border-red-500",
    loader: "text-red-600",
    errorBtn: "bg-red-600 hover:bg-red-700",
    icon: Utensils
  },
  swiggy: {
    primary: "orange",
    gradient: "from-orange-500 to-yellow-600",
    bgGradient: "bg-gradient-to-br from-orange-50 via-white to-yellow-50 dark:from-orange-950/20 dark:via-slate-950 dark:to-yellow-950/20",
    orb: "bg-orange-500",
    orb2: "bg-yellow-500",
    accent: "text-orange-600",
    accentBg: "bg-orange-50",
    check: "text-yellow-500",
    activeBtn: "bg-orange-600 text-white shadow-lg shadow-orange-500/30",
    payBtn: "from-orange-600 to-yellow-600 hover:shadow-orange-500/30",
    inputIcon: "group-focus-within:text-orange-500",
    focusRing: "focus:ring-orange-500/10",
    focusBorder: "focus:border-orange-500",
    loader: "text-orange-600",
    errorBtn: "bg-orange-600 hover:bg-orange-700",
    icon: ShoppingBag
  },
  fssai: {
    primary: "emerald",
    gradient: "from-emerald-600 to-teal-600",
    bgGradient: "bg-gradient-to-br from-emerald-50 via-white to-teal-50 dark:from-emerald-950/20 dark:via-slate-950 dark:to-teal-950/20",
    orb: "bg-emerald-500",
    orb2: "bg-teal-500",
    accent: "text-emerald-600",
    accentBg: "bg-emerald-50",
    check: "text-teal-500",
    activeBtn: "bg-emerald-600 text-white shadow-lg shadow-emerald-500/30",
    payBtn: "from-emerald-600 to-teal-600 hover:shadow-emerald-500/30",
    inputIcon: "group-focus-within:text-emerald-500",
    focusRing: "focus:ring-emerald-500/10",
    focusBorder: "focus:border-emerald-500",
    loader: "text-emerald-600",
    errorBtn: "bg-emerald-600 hover:bg-emerald-700",
    icon: ShieldCheck
  },
  gst: {
    primary: "blue",
    gradient: "from-blue-600 to-indigo-600",
    bgGradient: "bg-gradient-to-br from-blue-50 via-white to-indigo-50 dark:from-blue-950/20 dark:via-slate-950 dark:to-indigo-950/20",
    orb: "bg-blue-500",
    orb2: "bg-indigo-500",
    accent: "text-blue-600",
    accentBg: "bg-blue-50",
    check: "text-indigo-500",
    activeBtn: "bg-blue-600 text-white shadow-lg shadow-blue-500/30",
    payBtn: "from-blue-600 to-indigo-600 hover:shadow-blue-500/30",
    inputIcon: "group-focus-within:text-blue-500",
    focusRing: "focus:ring-blue-500/10",
    focusBorder: "focus:border-blue-500",
    loader: "text-blue-600",
    errorBtn: "bg-blue-600 hover:bg-blue-700",
    icon: FileText
  },
  growth: {
    primary: "purple",
    gradient: "from-purple-600 to-indigo-600",
    bgGradient: "bg-gradient-to-br from-purple-50 via-white to-indigo-50 dark:from-purple-950/20 dark:via-slate-950 dark:to-purple-950/20",
    orb: "bg-purple-500",
    orb2: "bg-indigo-500",
    accent: "text-purple-600",
    accentBg: "bg-purple-50",
    check: "text-indigo-500",
    activeBtn: "bg-purple-600 text-white shadow-lg shadow-purple-500/30",
    payBtn: "from-purple-600 to-indigo-600 hover:shadow-purple-500/30",
    inputIcon: "group-focus-within:text-purple-500",
    focusRing: "focus:ring-purple-500/10",
    focusBorder: "focus:border-purple-500",
    loader: "text-purple-600",
    errorBtn: "bg-purple-600 hover:bg-purple-700",
    icon: TrendingUp
  },
  combo: {
    primary: "amber",
    gradient: "from-amber-500 to-orange-600",
    bgGradient: "bg-gradient-to-br from-amber-50 via-white to-orange-50 dark:from-amber-950/20 dark:via-slate-950 dark:to-orange-950/20",
    orb: "bg-amber-500",
    orb2: "bg-orange-500",
    accent: "text-amber-600",
    accentBg: "bg-amber-50",
    check: "text-orange-500",
    activeBtn: "bg-amber-600 text-white shadow-lg shadow-amber-500/30",
    payBtn: "from-amber-600 to-orange-600 hover:shadow-amber-500/30",
    inputIcon: "group-focus-within:text-amber-500",
    focusRing: "focus:ring-amber-500/10",
    focusBorder: "focus:border-amber-500",
    loader: "text-amber-600",
    errorBtn: "bg-amber-600 hover:bg-amber-700",
    icon: Layers
  },
  kravy: {
    primary: "cyan",
    gradient: "from-cyan-600 to-blue-600",
    bgGradient: "bg-gradient-to-br from-cyan-50 via-white to-blue-50 dark:from-cyan-950/20 dark:via-slate-950 dark:to-blue-950/20",
    orb: "bg-cyan-500",
    orb2: "bg-blue-500",
    accent: "text-cyan-600",
    accentBg: "bg-cyan-50",
    check: "text-blue-500",
    activeBtn: "bg-cyan-600 text-white shadow-lg shadow-cyan-500/30",
    payBtn: "from-cyan-600 to-blue-600 hover:shadow-cyan-500/30",
    inputIcon: "group-focus-within:text-cyan-500",
    focusRing: "focus:ring-cyan-500/10",
    focusBorder: "focus:border-cyan-500",
    loader: "text-cyan-600",
    errorBtn: "bg-cyan-600 hover:bg-cyan-700",
    icon: Box
  },
  default: {
    primary: "indigo",
    gradient: "from-indigo-600 to-purple-600",
    bgGradient: "bg-gradient-to-br from-indigo-50 via-white to-purple-50 dark:from-indigo-950/20 dark:via-slate-950 dark:to-purple-950/20",
    orb: "bg-indigo-500",
    orb2: "bg-purple-500",
    accent: "text-indigo-600",
    accentBg: "bg-indigo-50",
    check: "text-purple-500",
    activeBtn: "bg-indigo-600 text-white shadow-lg shadow-indigo-500/30",
    payBtn: "from-indigo-600 to-purple-600 hover:shadow-indigo-500/30",
    inputIcon: "group-focus-within:text-indigo-500",
    focusRing: "focus:ring-indigo-500/10",
    focusBorder: "focus:border-indigo-500",
    loader: "text-indigo-600",
    errorBtn: "bg-indigo-600 hover:bg-indigo-700",
    icon: ShoppingCart
  }
};

const API_BASE = API_URL;
const discountMap = { 1: 0, 3: 25, 6: 30, 12: 40 };

const Checkout = () => {
  const { id } = useParams();
  const location = useLocation();
  const navigate = useNavigate();
  const { user } = useAuth();
  const queryParams = new URLSearchParams(location.search);
  const queryMonths = parseInt(queryParams.get("months"), 10);

  const [plan, setPlan] = useState(null);
  const [error, setError] = useState(null);
  const [duration, setDuration] = useState(queryMonths || 1);
  const [quantity, setQuantity] = useState(parseInt(queryParams.get("quantity"), 10) || 1);
  const [formData, setFormData] = useState({ name: "", email: "", phone: "", address: "" });
  const [cashfree, setCashfree] = useState(null);
  const [loading, setLoading] = useState(false);
  const [finalPriceFromQuery] = useState(parseInt(queryParams.get("finalPrice"), 10) || 0);

  useEffect(() => {
    if (user) {
      setFormData(prev => ({
        ...prev,
        name: user.name || prev.name,
        email: user.email || prev.email,
        phone: user.phone || prev.phone || "",
      }));
    }
  }, [user]);

  const getTheme = () => {
    const key = Object.keys(SERVICE_THEMES).find(k => id?.toLowerCase().includes(k)) || 'default';
    return SERVICE_THEMES[key];
  };

  const theme = getTheme();
  const Icon = theme.icon;

  const lowerId = id?.toLowerCase() || "";
  const isOneTime = (lowerId.includes("fssai") || lowerId.includes("gst") || lowerId.includes("combo") || lowerId.includes("kravy") || lowerId.includes("swiggy") || lowerId.includes("zomato") || lowerId.includes("onboarding") || lowerId.includes("basic") || lowerId.includes("prime") || lowerId.includes("pro") || lowerId.includes("toingit")) && !lowerId.includes("growth");

  useEffect(() => {
    const fetchPlan = async () => {
      if (plan && plan.id === id) return;
      setLoading(true);
      setError(null);

      const queryBasePrice = queryParams.get("basePrice");
      const queryFinalPrice = queryParams.get("finalPrice");
      const queryDiscountApplied = queryParams.get("discountApplied") === "true";
      const queryPlanName = queryParams.get("planName");
      const queryFeatures = queryParams.get("planFeatures");

      try {
        if (!id) throw new Error("Invalid plan ID");
        let data = null;
        try {
          const res = await fetch(`${API_BASE}/plan/${id}`);
          if (res.ok) data = await res.json();
        } catch (fetchErr) {
          console.error("Backend fetch error:", fetchErr.message);
        }

        if (!data) {
          if (queryBasePrice || queryFinalPrice || queryPlanName) {
            data = {
              id: id,
              slug: id,
              name: queryPlanName || (id.charAt(0).toUpperCase() + id.slice(1).replace(/-/g, ' ')),
              price: parseInt(queryBasePrice || queryFinalPrice || "0", 10),
              features: queryFeatures ? queryFeatures.split(',') : ["Expert Onboarding", "Fast-track Support", "Compliance Check"],
              isVirtual: true
            };
          } else {
            throw new Error("Could not find plan data.");
          }
        }

        let effectiveBasePrice = null;
        if (queryBasePrice) effectiveBasePrice = parseInt(queryBasePrice, 10);
        else if (queryFinalPrice && !queryDiscountApplied) effectiveBasePrice = parseInt(queryFinalPrice, 10);

        if (effectiveBasePrice && isOneTime) data.price = effectiveBasePrice;
        if (queryPlanName) data.name = queryPlanName;
        if (queryFeatures) data.features = queryFeatures.split(',');

        setPlan(data);
      } catch (err) {
        setError(err.message);
      } finally {
        setLoading(false);
      }
    };
    fetchPlan();
  }, [id, location.search]);

  useEffect(() => {
    const initCashfree = async () => {
      try {
        const cf = await load({ mode: "production" });
        setCashfree(cf);
      } catch (err) {
        console.error("Failed to load Cashfree SDK:", err);
      }
    };
    initCashfree();
  }, []);

  const handleInputChange = (e) => {
    setFormData({ ...formData, [e.target.name]: e.target.value });
  };

  const calculateTotal = () => {
    if (!plan) return 0;
    const basePrice = isOneTime ? plan.price * quantity : plan.price * duration;
    const durationDiscount = isOneTime ? 0 : (discountMap[duration] || 0);
    let total = basePrice * (1 - durationDiscount / 100);
    return Math.max(0, Math.round(total));
  };

  const handleCashfreePayment = async () => {
    if (!cashfree || !formData.name || !formData.email || !formData.phone) {
      alert("Please fill all required fields.");
      return;
    }

    const totalPrice = calculateTotal();
    setLoading(true);
    try {
      const res = await fetch(`${API_BASE}/cashfree/initiate-payment`, {
        method: "POST",
        headers: { "Content-Type": "application/json" },
        body: JSON.stringify({
          amount: totalPrice,
          name: formData.name,
          email: formData.email,
          phone: formData.phone,
          planId: id,
          customerId: user?._id || `guest_${Date.now()}`,
          return_url: `${window.location.origin}/payment-success?order_id={order_id}`
        }),
      });

      const orderData = await res.json();
      if (!res.ok || !orderData.payment_session_id) throw new Error(orderData.message || "Server error");

      localStorage.setItem("checkout_order", JSON.stringify({
        name: formData.name,
        email: formData.email,
        phone: formData.phone,
        planSlug: plan.slug || id,
        total: totalPrice,
        order_id: orderData.order_id,
        userId: user?._id || `guest_${Date.now()}`,
        duration: isOneTime ? 1 : duration
      }));

      await cashfree.checkout({
        paymentSessionId: orderData.payment_session_id,
        redirectTarget: "_self",
      });
      
    } catch (err) {
      alert(`Payment failed: ${err.message}`);
    } finally {
      setLoading(false);
    }
  };

  if (error) return (
    <div className="min-h-screen flex items-center justify-center bg-slate-50 dark:bg-slate-950 p-6">
      <div className="bg-white dark:bg-slate-900 p-8 rounded-3xl shadow-2xl text-center max-w-md border border-red-100 dark:border-red-900/30">
        <AlertCircle className="w-16 h-16 text-red-500 mx-auto mb-4" />
        <h2 className="text-2xl font-bold text-slate-900 dark:text-white mb-2">Oops!</h2>
        <p className="text-slate-600 dark:text-slate-400 mb-6">{error}</p>
        <button onClick={() => navigate(-1)} className={`px-6 py-3 text-white rounded-xl font-bold transition-all ${theme.errorBtn}`}>Go Back</button>
      </div>
    </div>
  );

  if (!plan) return (
    <div className="min-h-screen flex items-center justify-center bg-slate-50 dark:bg-slate-950">
      <div className="flex flex-col items-center gap-4">
        <Loader2 className={`w-12 h-12 animate-spin ${theme.loader}`} />
        <p className="text-slate-500 font-medium animate-pulse">Preparing checkout...</p>
      </div>
    </div>
  );

  const totalPrice = calculateTotal();
  const isFormFilled = formData.name && formData.email && formData.phone;

  return (
    <div className={`min-h-screen pt-28 pb-12 px-4 sm:px-6 lg:px-8 font-poppins transition-all duration-500 ${theme.bgGradient}`}>
      <div className="fixed inset-0 overflow-hidden pointer-events-none z-0">
        <div className={`absolute -top-[10%] -right-[10%] w-[40%] h-[40%] rounded-full blur-[120px] opacity-20 ${theme.orb}`}></div>
        <div className={`absolute -bottom-[10%] -left-[10%] w-[40%] h-[40%] rounded-full blur-[120px] opacity-20 ${theme.orb2}`}></div>
      </div>

      <div className="relative z-10 max-w-6xl mx-auto">
        <div className="text-center mb-10">
          <motion.div
            initial={{ opacity: 0, y: -20 }}
            animate={{ opacity: 1, y: 0 }}
            className="inline-flex items-center gap-2 px-3 py-1.5 rounded-full bg-white/50 dark:bg-slate-800/50 backdrop-blur-md border border-white/20 dark:border-slate-700/50 shadow-sm mb-3"
          >
            <ShieldCheck className="w-3.5 h-3.5 text-emerald-500" />
            <span className="text-[10px] font-black text-slate-700 dark:text-slate-300 uppercase tracking-widest">Secure SSL Checkout</span>
          </motion.div>
          <motion.h1
            initial={{ opacity: 0, y: -10 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ delay: 0.1 }}
            className="text-3xl md:text-5xl font-black text-slate-900 dark:text-white"
          >
            Complete Your <span className={`text-transparent bg-clip-text bg-gradient-to-r ${theme.gradient}`}>Order</span>
          </motion.h1>
        </div>

        <div className="grid lg:grid-cols-12 gap-8 items-start">
          <motion.div
            initial={{ opacity: 0, x: -30 }}
            animate={{ opacity: 1, x: 0 }}
            className="lg:col-span-7 space-y-6"
          >
            <div className="bg-white/80 dark:bg-slate-900/80 backdrop-blur-2xl p-7 rounded-[2.5rem] shadow-2xl border border-white dark:border-slate-800/50">
              <div className="flex items-center gap-3 mb-8">
                <div className={`p-2.5 rounded-2xl ${theme.accentBg} ${theme.accent} dark:bg-slate-800 shadow-sm`}>
                  <User size={22} />
                </div>
                <h2 className="text-2xl font-black text-slate-900 dark:text-white tracking-tight">Business Information</h2>
              </div>

              <div className="grid sm:grid-cols-2 gap-6">
                <div className="space-y-2">
                  <label className="text-[12px] font-black text-slate-900 dark:text-slate-300 ml-1 uppercase tracking-widest opacity-70">Full Name</label>
                  <div className="relative group">
                    <User className={`absolute left-4 top-1/2 -translate-y-1/2 text-slate-400 ${theme.inputIcon} transition-colors`} size={18} />
                    <input
                      name="name"
                      value={formData.name}
                      onChange={handleInputChange}
                      placeholder="John Doe"
                      className={`w-full pl-12 pr-4 py-3.5 bg-white/50 dark:bg-slate-800/50 border border-slate-200 dark:border-slate-700/50 focus:ring-4 ${theme.focusRing} ${theme.focusBorder} rounded-2xl outline-none transition-all text-slate-900 dark:text-white placeholder:text-slate-400 dark:placeholder:text-slate-500 text-sm font-semibold`}
                      required
                    />
                  </div>
                </div>

                <div className="space-y-2">
                  <label className="text-[12px] font-black text-slate-900 dark:text-slate-300 ml-1 uppercase tracking-widest opacity-70">Email Address</label>
                  <div className="relative group">
                    <Mail className={`absolute left-4 top-1/2 -translate-y-1/2 text-slate-400 ${theme.inputIcon} transition-colors`} size={18} />
                    <input
                      type="email"
                      name="email"
                      value={formData.email}
                      onChange={handleInputChange}
                      placeholder="john@example.com"
                      className={`w-full pl-12 pr-4 py-3.5 bg-white/50 dark:bg-slate-800/50 border border-slate-200 dark:border-slate-700/50 focus:ring-4 ${theme.focusRing} ${theme.focusBorder} rounded-2xl outline-none transition-all text-slate-900 dark:text-white placeholder:text-slate-400 dark:placeholder:text-slate-500 text-sm font-semibold`}
                      required
                    />
                  </div>
                </div>

                <div className="space-y-2">
                  <label className="text-[12px] font-black text-slate-900 dark:text-slate-300 ml-1 uppercase tracking-widest opacity-70">Phone Number</label>
                  <div className="relative group">
                    <Phone className={`absolute left-4 top-1/2 -translate-y-1/2 text-slate-400 ${theme.inputIcon} transition-colors`} size={18} />
                    <input
                      type="tel"
                      name="phone"
                      value={formData.phone}
                      onChange={handleInputChange}
                      placeholder="+91 98765 43210"
                      className={`w-full pl-12 pr-4 py-3.5 bg-white/50 dark:bg-slate-800/50 border border-slate-200 dark:border-slate-700/50 focus:ring-4 ${theme.focusRing} ${theme.focusBorder} rounded-2xl outline-none transition-all text-slate-900 dark:text-white placeholder:text-slate-400 dark:placeholder:text-slate-500 text-sm font-semibold`}
                      required
                    />
                  </div>
                </div>

                <div className="space-y-2">
                  <label className="text-[12px] font-black text-slate-900 dark:text-slate-300 ml-1 uppercase tracking-widest opacity-70">Business Address</label>
                  <div className="relative group">
                    <MapPin className={`absolute left-4 top-1/2 -translate-y-1/2 text-slate-400 ${theme.inputIcon} transition-colors`} size={18} />
                    <input
                      name="address"
                      value={formData.address}
                      onChange={handleInputChange}
                      placeholder="Street, City, Zip"
                      className={`w-full pl-12 pr-4 py-3.5 bg-white/50 dark:bg-slate-800/50 border border-slate-200 dark:border-slate-700/50 focus:ring-4 ${theme.focusRing} ${theme.focusBorder} rounded-2xl outline-none transition-all text-slate-900 dark:text-white placeholder:text-slate-400 dark:placeholder:text-slate-500 text-sm font-semibold`}
                    />
                  </div>
                </div>
              </div>
            </div>

            <div className="bg-white/80 dark:bg-slate-900/80 backdrop-blur-2xl p-7 rounded-[2.5rem] shadow-2xl border border-white dark:border-slate-800/50">
              <div className="flex items-center gap-3 mb-8">
                <div className={`p-2.5 rounded-2xl ${theme.accentBg} ${theme.accent} dark:bg-slate-800 shadow-sm`}>
                  <Icon size={22} />
                </div>
                <h2 className="text-2xl font-black text-slate-900 dark:text-white tracking-tight">Plan Features</h2>
              </div>

              <div className="space-y-6">
                <div className="p-6 rounded-3xl bg-slate-50/50 dark:bg-slate-800/50 border border-slate-100 dark:border-slate-700/50 group">
                  <h3 className="text-[13px] font-black text-slate-900 dark:text-white mb-5 uppercase tracking-widest opacity-60">What's included in {plan.name}:</h3>
                  <div className="grid sm:grid-cols-2 gap-x-8 gap-y-4">
                    {plan.features.map((feature, idx) => (
                      <div key={idx} className="flex items-start gap-3 group/item">
                        <div className={`mt-0.5 p-0.5 rounded-full ${theme.accentBg} bg-opacity-20`}>
                          <CheckCircle2 className={`w-4 h-4 shrink-0 ${theme.check}`} />
                        </div>
                        <span className="text-sm text-slate-700 dark:text-slate-300 font-bold leading-snug group-hover/item:text-slate-900 dark:group-hover/item:text-white transition-colors">{feature}</span>
                      </div>
                    ))}
                  </div>
                </div>

                <div className="grid grid-cols-2 gap-4">
                  <div className="p-4 rounded-2xl bg-emerald-50/50 dark:bg-emerald-900/20 border border-emerald-100 dark:border-emerald-900/30 flex items-center gap-3 transition-colors hover:bg-emerald-50 dark:hover:bg-emerald-900/30">
                    <ShieldCheck className="text-emerald-600" size={20} />
                    <span className="text-[11px] font-black text-emerald-800 dark:text-emerald-400 uppercase tracking-widest leading-none">Money Back Guarantee</span>
                  </div>
                  <div className="p-4 rounded-2xl bg-blue-50/50 dark:bg-blue-900/20 border border-blue-100 dark:border-blue-900/30 flex items-center gap-3 transition-colors hover:bg-blue-50 dark:hover:bg-blue-900/30">
                    <Zap className="text-blue-600" size={20} />
                    <span className="text-[11px] font-black text-blue-800 dark:text-blue-400 uppercase tracking-widest leading-none">Instant Activation</span>
                  </div>
                </div>
              </div>
            </div>
          </motion.div>

          <motion.div
            initial={{ opacity: 0, y: 30 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ delay: 0.1 }}
            className="lg:col-span-5 h-full"
          >
            <div className="sticky top-28 space-y-6 flex flex-col">
              <div className="bg-white/80 dark:bg-slate-900/80 backdrop-blur-2xl p-7 rounded-[2.5rem] shadow-2xl border border-white dark:border-slate-800/50 overflow-hidden relative flex flex-col flex-1">
                <div className={`absolute top-0 right-0 w-32 h-32 blur-[80px] opacity-10 rounded-full translate-x-1/2 -translate-y-1/2 ${theme.orb}`}></div>

                <div className="flex items-center justify-between mb-8 pb-4 border-b border-slate-100 dark:border-slate-800/50">
                  <h2 className="text-2xl font-black text-slate-900 dark:text-white tracking-tight">Order Summary</h2>
                  {!isOneTime && (
                    <div className="flex gap-1 p-1 bg-slate-100/50 dark:bg-slate-800/50 rounded-2xl border border-slate-200/50 dark:border-slate-700/50">
                      {[1, 3, 6, 12].map((m) => (
                        <button
                          key={m}
                          onClick={() => setDuration(m)}
                          className={`px-3 py-1.5 rounded-xl text-[10px] font-black transition-all ${duration === m ? theme.activeBtn : "text-slate-500"}`}
                        >
                          {m}M
                        </button>
                      ))}
                    </div>
                  )}
                </div>

                <div className="space-y-6 mb-10">
                  <div className="flex justify-between items-start gap-4">
                    <div className="max-w-[70%]">
                      <p className="font-black text-slate-900 dark:text-white text-lg leading-tight tracking-tight">{plan.name}</p>
                      <div className="flex items-center gap-1.5 mt-1.5">
                        <Tag size={12} className="text-slate-400" />
                        <p className="text-[10px] text-slate-500 dark:text-slate-400 font-black uppercase tracking-widest">
                          {isOneTime ? "One-time Onboarding" : `${duration} Month Subscription`}
                        </p>
                      </div>
                    </div>
                    <p className="font-black text-slate-900 dark:text-white text-lg">₹{plan.price.toLocaleString()}</p>
                  </div>

                  <div className="pt-6 border-t border-slate-100 dark:border-slate-800/50 space-y-4">
                    <div className="flex justify-between items-center">
                      <p className="text-slate-500 dark:text-slate-400 font-black uppercase tracking-[0.2em] text-[10px]">Total Amount</p>
                      <div className="text-right">
                        <p className="text-4xl font-black text-slate-900 dark:text-white tracking-tighter">₹{totalPrice.toLocaleString()}</p>
                        <p className="text-[9px] text-slate-400 dark:text-slate-500 font-black uppercase tracking-widest mt-1">Inclusive of all taxes</p>
                      </div>
                    </div>
                  </div>
                </div>

                <div className="mt-auto space-y-4">
                  <button
                    onClick={handleCashfreePayment}
                    disabled={!isFormFilled || loading || !cashfree}
                    className={`w-full py-5 rounded-2xl font-black text-white text-lg shadow-2xl transition-all duration-300 flex items-center justify-center gap-3 active:scale-[0.98] ${isFormFilled && !loading && cashfree ? `bg-gradient-to-r ${theme.payBtn}` : "bg-slate-200 dark:bg-slate-800 cursor-not-allowed text-slate-400"}`}
                  >
                    {loading ? <Loader2 className="animate-spin" size={22} /> : <>Pay ₹{totalPrice.toLocaleString()} <ArrowRight size={22} /></>}
                  </button>
                  <p className="text-[10px] text-center text-slate-400 font-black uppercase tracking-widest">Secure SSL Protected Transaction</p>
                </div>
              </div>

              <div className="bg-white/50 dark:bg-slate-900/50 backdrop-blur-md p-4 rounded-3xl border border-white dark:border-slate-800 flex items-center gap-4 transition-colors hover:bg-white/80">
                <div className={`w-11 h-11 rounded-2xl bg-white dark:bg-slate-800 flex items-center justify-center ${theme.supportIcon} shadow-sm border border-slate-100`}>
                  <ShoppingCart size={20} />
                </div>
                <div>
                  <p className="text-[11px] font-black text-slate-900 dark:text-white uppercase tracking-widest leading-none">Need Help?</p>
                  <p className="text-[10px] text-slate-500 dark:text-gray-400 font-bold mt-1.5">Email: support@magicscale.in</p>
                </div>
              </div>
            </div>
          </motion.div>
        </div>
      </div>
    </div>
  );
};

export default Checkout;
