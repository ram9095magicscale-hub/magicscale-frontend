import React, { useState, useEffect } from "react";
import axios from "axios";
import { API_URL } from "../../services/api";
import { 
  Link as LinkIcon, Copy, Check, Send, Loader2, IndianRupee, 
  User, Mail, Phone, FileText, Search, CreditCard, ArrowRight,
  ChevronDown, AlertCircle, Calculator, Wallet, Zap, Clock, UserCheck,
  ShieldCheck, Sparkles
} from "lucide-react";
import { motion, AnimatePresence } from "framer-motion";
import { ALL_SERVICES } from "../../constants/services";

const ManagePaymentLinks = () => {
  const [mode, setMode] = useState("new");
  const [paymentType, setPaymentType] = useState("full");
  const [formData, setFormData] = useState({
    name: "", email: "", phone: "", amount: "", purpose: "", totalServicePrice: "" 
  });
  
  const [searchQuery, setSearchQuery] = useState("");
  const [searching, setSearching] = useState(false);
  const [loading, setLoading] = useState(false);
  const [generatedLink, setGeneratedLink] = useState(null);
  const [history, setHistory] = useState([]);
  const [fetchingHistory, setFetchingHistory] = useState(false);
  const [copied, setCopied] = useState(false);
  const [userFound, setUserFound] = useState(false);
  const token = localStorage.getItem("token");

  useEffect(() => {
    const service = ALL_SERVICES.find(s => s.name === formData.purpose);
    if (service) {
      setFormData(prev => ({ 
        ...prev, 
        totalServicePrice: service.price.toString(),
        amount: paymentType === "full" ? service.price.toString() : prev.amount
      }));
    }
  }, [formData.purpose]);

  useEffect(() => {
    if (paymentType === "full") {
        setFormData(prev => ({ ...prev, amount: prev.totalServicePrice }));
    }
  }, [paymentType]);

  const fetchHistory = async () => {
    setFetchingHistory(true);
    try {
      const res = await axios.get(`${API_URL}/cashfree/get-all-links`, {
        headers: { Authorization: `Bearer ${token}` }
      });
      if (res.data.success) setHistory(res.data.links);
    } catch (err) { console.error(err); } finally { setFetchingHistory(false); }
  };

  useEffect(() => {
    if (mode === "history") fetchHistory();
  }, [mode]);

  const handleChange = (e) => {
    const { name, value } = e.target;
    if (name === "totalServicePrice") {
        setFormData(prev => ({ 
            ...prev, 
            totalServicePrice: value,
            amount: paymentType === "full" ? value : prev.amount 
        }));
    } else {
        setFormData(prev => ({ ...prev, [name]: value }));
    }
  };

  const handleSearch = async () => {
    if (!searchQuery) return;
    setSearching(true);
    try {
      const res = await axios.get(`${API_URL}/cashfree/user-details?identifier=${searchQuery}`, {
        headers: { Authorization: `Bearer ${token}` }
      });
      if (res.data.success && res.data.user) {
        setFormData({
          name: res.data.user.name || "", 
          email: res.data.user.email || "", 
          phone: res.data.user.phone || "", 
          amount: res.data.pendingBalance?.toString() || "", 
          purpose: res.data.lastPayment?.plan || "", 
          totalServicePrice: res.data.lastPayment?.totalAmount?.toString() || res.data.lastPayment?.amount?.toString() || ""
        });
        setUserFound(true);
      } else alert("Customer not found.");
    } catch (err) { console.error(err); } finally { setSearching(false); }
  };

  const handleSubmit = async (e) => {
    e.preventDefault();
    setLoading(true);
    setGeneratedLink(null);
    try {
      const res = await axios.post(`${API_URL}/cashfree/create-link`, {
        ...formData,
        purpose: mode === "pending" ? `Balance: ${formData.purpose}` : (paymentType === "partial" ? `Partial: ${formData.purpose}` : formData.purpose)
      }, { headers: { Authorization: `Bearer ${token}` } });
      if (res.data.success) setGeneratedLink(res.data.link_url);
    } catch (err) { 
      const errorMsg = err.response?.data?.message || err.message || "Failed to generate link.";
      alert(`Payment Error: ${errorMsg}`); 
    } finally { setLoading(false); }
  };

  const remainingBalance = Math.max(0, (parseFloat(formData.totalServicePrice) || 0) - (parseFloat(formData.amount) || 0));

  return (
    <div className="flex justify-center w-full">
      <div className="w-full max-w-xl space-y-6 pb-12">
        
        {/* VIVID HEADER */}
        <div className="flex items-center justify-between px-2 pt-6">
          <div className="space-y-1">
            <h2 className="text-2xl font-black text-slate-900 dark:text-white flex items-center gap-2 tracking-tight">
              Payment Portal <Sparkles size={18} className="text-indigo-600 dark:text-indigo-400" />
            </h2>
            <p className="text-[11px] text-slate-600 dark:text-slate-400 font-bold uppercase tracking-widest">Billing & Collections</p>
          </div>

          <div className="flex p-1 bg-white dark:bg-slate-900 rounded-xl shadow-lg shadow-slate-200/50 dark:shadow-none border border-slate-100 dark:border-slate-800">
            <button
              onClick={() => { setMode("new"); setUserFound(false); setGeneratedLink(null); }}
              className={`px-5 py-2 rounded-lg font-black text-[10px] uppercase transition-all duration-300 ${mode === "new" ? "bg-indigo-600 text-white shadow-lg shadow-indigo-200 dark:shadow-none" : "text-slate-500 hover:text-slate-900 dark:hover:text-white"}`}
            >
              New Link
            </button>
            <button
              onClick={() => { setMode("pending"); setGeneratedLink(null); }}
              className={`px-5 py-2 rounded-lg font-black text-[10px] uppercase transition-all duration-300 ${mode === "pending" ? "bg-indigo-600 text-white shadow-lg shadow-indigo-200 dark:shadow-none" : "text-slate-500 hover:text-slate-900 dark:hover:text-white"}`}
            >
              Pending
            </button>
            <button
              onClick={() => { setMode("history"); setGeneratedLink(null); }}
              className={`px-5 py-2 rounded-lg font-black text-[10px] uppercase transition-all duration-300 ${mode === "history" ? "bg-indigo-600 text-white shadow-lg shadow-indigo-200 dark:shadow-none" : "text-slate-500 hover:text-slate-900 dark:hover:text-white"}`}
            >
              History
            </button>
          </div>
        </div>

        {/* VIVID SEARCH */}
        <AnimatePresence mode="wait">
          {mode === "pending" && !userFound && (
            <motion.div
              initial={{ opacity: 0, y: 10 }} animate={{ opacity: 1, y: 0 }}
              className="bg-white dark:bg-slate-900 p-5 rounded-2xl border-2 border-indigo-500/10 dark:border-indigo-500/20 shadow-xl shadow-indigo-500/5 flex gap-3 items-center"
            >
              <div className="w-10 h-10 bg-indigo-50 dark:bg-indigo-900/30 rounded-xl flex items-center justify-center text-indigo-600">
                <Search size={18} />
              </div>
              <input
                type="text" placeholder="Search Mobile or Email..."
                value={searchQuery} onChange={(e) => setSearchQuery(e.target.value)}
                className="flex-1 bg-transparent border-none outline-none font-bold text-sm text-slate-900 dark:text-white placeholder:text-slate-400"
              />
              <button
                onClick={handleSearch} disabled={searching}
                className="px-5 py-2.5 rounded-xl bg-slate-900 dark:bg-white text-white dark:text-slate-900 font-black text-[10px] uppercase tracking-widest hover:scale-105 transition-transform"
              >
                {searching ? <Loader2 size={14} className="animate-spin" /> : "Lookup"}
              </button>
            </motion.div>
          )}
        </AnimatePresence>

        {/* MAIN VIVID CARD */}
        {(mode === "new" || userFound) && (
          <div className="space-y-6">
            {userFound && mode === "pending" && (
              <motion.div
                 initial={{ opacity: 0, scale: 0.95 }} animate={{ opacity: 1, scale: 1 }}
                 className="bg-gradient-to-r from-indigo-600 to-blue-600 p-5 rounded-2xl text-white flex items-center justify-between shadow-2xl shadow-indigo-200 dark:shadow-none"
              >
                 <div className="space-y-1">
                   <div className="text-[9px] font-black uppercase tracking-[0.2em] opacity-80 flex items-center gap-1"><ShieldCheck size={10}/> Verified Client</div>
                   <h4 className="text-lg font-black tracking-tight">{formData.name}</h4>
                   <p className="text-[11px] text-white/80 font-bold">{formData.phone} • {formData.email}</p>
                 </div>
                 <button onClick={() => { setUserFound(false); setSearchQuery(""); }} className="p-3 bg-white/20 rounded-xl hover:bg-white/30 transition-colors">
                    <ArrowRight size={18} className="rotate-180" />
                 </button>
              </motion.div>
            )}

            <div className="bg-white dark:bg-slate-900 rounded-[2rem] p-6 sm:p-8 shadow-2xl shadow-slate-200/50 dark:shadow-none border border-slate-100 dark:border-slate-800 relative overflow-hidden">
              
              {/* Subtle glass effect accent */}
              <div className="absolute top-0 right-0 w-32 h-32 bg-indigo-500/5 blur-3xl rounded-full" />

              <form onSubmit={handleSubmit} className="space-y-6 relative z-10">
                
                {/* 1. Service List */}
                <div className="space-y-3">
                  <label className="text-[11px] font-black uppercase text-slate-900 dark:text-slate-100 ml-1 flex items-center gap-2">
                    <div className="w-1.5 h-1.5 bg-indigo-600 rounded-full" /> Selection
                  </label>
                  <div className="relative">
                    <select
                      name="purpose" value={formData.purpose} onChange={handleChange} required
                      className="w-full pl-5 pr-12 py-4 rounded-xl bg-slate-50 dark:bg-slate-800 text-slate-900 dark:text-white outline-none appearance-none font-bold text-xs border border-slate-200 dark:border-slate-700 focus:border-indigo-500 transition-all shadow-inner"
                    >
                      <option value="">Choose Service...</option>
                      {ALL_SERVICES.map(s => <option key={s.id} value={s.name} className="dark:bg-slate-900">{s.name} (₹{s.price})</option>)}
                    </select>
                    <ChevronDown className="absolute right-5 top-1/2 -translate-y-1/2 text-slate-400" size={18} />
                  </div>
                </div>

                {/* 2. Vivid Pricing Area */}
                <div className="bg-white dark:bg-slate-800/20 p-6 rounded-[1.5rem] border border-slate-100 dark:border-slate-800 shadow-xl shadow-slate-100 dark:shadow-none space-y-6">
                   
                   {/* MASTER TOTAL */}
                   <div className="space-y-2">
                      <div className="flex justify-between items-center px-1">
                        <label className="text-[11px] font-black text-slate-900 dark:text-slate-100 uppercase tracking-widest">Total Valuation</label>
                        <span className="text-[10px] font-bold text-indigo-500">Editable</span>
                      </div>
                      <div className="relative group">
                        <IndianRupee className="absolute left-5 top-1/2 -translate-y-1/2 text-indigo-300 dark:text-indigo-600 group-focus-within:text-indigo-600 transition-colors" size={20} />
                        <input
                          type="number" name="totalServicePrice" value={formData.totalServicePrice} onChange={handleChange} onWheel={(e) => e.target.blur()} required
                          className="w-full pl-12 pr-5 py-4 rounded-xl bg-slate-50 dark:bg-slate-900 border border-slate-300 dark:border-slate-700 focus:border-indigo-500 outline-none font-black text-2xl text-slate-900 dark:text-white transition-all shadow-inner"
                        />
                      </div>
                   </div>

                   {/* STRATEGY TOGGLE */}
                   {mode === "new" && (
                    <div className="grid grid-cols-2 gap-2 p-1 bg-slate-100/50 dark:bg-slate-900/50 rounded-xl">
                       <button
                         type="button" onClick={() => setPaymentType("full")}
                         className={`py-2.5 rounded-lg font-black text-[10px] uppercase transition-all ${paymentType === "full" ? "bg-white dark:bg-slate-700 text-indigo-600 shadow-sm" : "text-slate-500 hover:text-slate-700"}`}
                       >
                         Full Payment
                       </button>
                       <button
                         type="button" onClick={() => setPaymentType("partial")}
                         className={`py-2.5 rounded-lg font-black text-[10px] uppercase transition-all ${paymentType === "partial" ? "bg-white dark:bg-slate-700 text-amber-600 shadow-sm" : "text-slate-500 hover:text-slate-700"}`}
                       >
                         Installment
                       </button>
                    </div>
                   )}

                   {/* FINAL COLLECTION */}
                   <div className="space-y-3 pt-4 border-t border-slate-100 dark:border-slate-800">
                      <div className="flex justify-between items-center px-1">
                        <label className="text-[11px] font-black text-emerald-600 uppercase tracking-widest">Billed Amount</label>
                        {paymentType === "partial" && (
                          <div className="text-right bg-amber-50 dark:bg-amber-900/20 px-3 py-1 rounded-lg border border-amber-100 dark:border-amber-900/30">
                            <span className="text-[9px] font-black text-amber-600 dark:text-amber-500 uppercase tracking-widest block">Balance Due</span>
                            <div className="text-lg font-black text-amber-600 dark:text-amber-500 flex items-center justify-end">
                              <IndianRupee size={16} /> {remainingBalance}
                            </div>
                          </div>
                        )}
                      </div>
                      <div className="relative group">
                        <IndianRupee className="absolute left-5 top-1/2 -translate-y-1/2 text-emerald-400/50 dark:text-emerald-900 group-focus-within:text-emerald-500 transition-colors" size={24} />
                        <input
                          type="number" name="amount" value={formData.amount} onChange={handleChange} onWheel={(e) => e.target.blur()} readOnly={paymentType === "full"}
                          className={`w-full pl-12 pr-6 py-5 rounded-2xl font-black text-3xl border-2 transition-all ${paymentType === "full" ? "bg-slate-50 dark:bg-slate-900 border-slate-200 dark:border-slate-800 text-slate-400" : "bg-white dark:bg-slate-900 border-emerald-500/30 dark:border-emerald-500/40 focus:border-emerald-500 text-emerald-600 dark:text-emerald-400 shadow-inner group-focus-within:shadow-emerald-500/5"}`}
                        />
                      </div>
                   </div>
                </div>

                {/* 3. Client Section */}
                {mode === "new" && (
                  <div className="grid grid-cols-2 gap-4">
                     <div className="space-y-2 col-span-1">
                        <label className="text-[10px] font-black uppercase text-slate-900 dark:text-slate-100 px-1">Name</label>
                        <input type="text" name="name" value={formData.name} onChange={handleChange} placeholder="Full Name" required className="w-full px-5 py-3 rounded-xl bg-slate-50 dark:bg-slate-800 outline-none font-bold text-xs text-slate-900 dark:text-white border border-slate-300 dark:border-slate-700 focus:border-indigo-500 transition-all shadow-inner" />
                     </div>
                     <div className="space-y-2 col-span-1">
                        <label className="text-[10px] font-black uppercase text-slate-900 dark:text-slate-100 px-1">Mobile</label>
                        <input type="tel" name="phone" value={formData.phone} onChange={handleChange} placeholder="9876543210" required className="w-full px-5 py-3 rounded-xl bg-slate-50 dark:bg-slate-800 outline-none font-bold text-xs text-slate-900 dark:text-white border border-slate-300 dark:border-slate-700 focus:border-indigo-500 transition-all shadow-inner" />
                     </div>
                     <div className="space-y-2 col-span-2">
                        <label className="text-[10px] font-black uppercase text-slate-900 dark:text-slate-100 px-1">Client Email</label>
                        <input type="email" name="email" value={formData.email} onChange={handleChange} placeholder="EMAIL ADDRESS" required className="w-full px-5 py-3 rounded-xl bg-slate-50 dark:bg-slate-800 outline-none font-bold text-xs text-slate-900 dark:text-white border border-slate-300 dark:border-slate-700 focus:border-indigo-500 transition-all shadow-inner" />
                     </div>
                  </div>
                )}

                <button
                  type="submit" disabled={loading}
                  className="w-full py-5 bg-slate-900 dark:bg-white text-white dark:text-slate-900 font-black rounded-2xl text-xs uppercase tracking-widest shadow-2xl hover:scale-[1.02] active:scale-[0.98] transition-all flex items-center justify-center gap-3 mt-4"
                >
                  {loading ? <Loader2 size={16} className="animate-spin" /> : <><CreditCard size={18} /> Generate Payment Link</>}
                </button>
              </form>

              {/* SUCCESS OVERLAY */}
              <AnimatePresence>
                {generatedLink && (
                  <motion.div
                    initial={{ opacity: 0, scale: 0.95 }} animate={{ opacity: 1, scale: 1 }}
                    className="mt-8 p-8 bg-gradient-to-br from-emerald-500 to-teal-600 rounded-[2.5rem] text-white space-y-6 shadow-2xl shadow-emerald-500/30"
                  >
                    <div className="flex flex-col items-center gap-4">
                       <div className="w-16 h-16 bg-white/20 backdrop-blur-xl rounded-full flex items-center justify-center border border-white/30 shadow-inner"><Check size={32} /></div>
                       <div className="text-center">
                          <h4 className="text-2xl font-black tracking-tight leading-none">Invoice Ready</h4>
                          <p className="text-[11px] font-bold opacity-90 uppercase tracking-widest mt-2">Billed for ₹{formData.amount}</p>
                       </div>
                    </div>
                    <div className="flex flex-col gap-3">
                       <div className="bg-black/10 backdrop-blur-md p-4 rounded-xl text-center font-bold text-[10px] select-all border border-white/10 uppercase tracking-wider truncate px-6">
                         {generatedLink}
                       </div>
                       <div className="flex gap-2">
                          <button onClick={() => { navigator.clipboard.writeText(generatedLink); setCopied(true); setTimeout(()=>setCopied(false), 2000); }} className="flex-1 py-4 bg-white text-emerald-600 rounded-xl font-black text-[11px] uppercase shadow-lg"> {copied ? "Link Copied!" : "Copy Link"} </button>
                          <button 
                            onClick={() => {
                              const waMessage = `Hi ${formData.name},\n\nI've generated your payment link for the *${formData.purpose}* plan.\n\n*Billing Details:*\n💰 Amount: ₹${formData.amount}\n🔗 Payment Link: ${generatedLink}\n\nThank you for choosing MagicScale! We look forward to helping your business grow.\n\nBest Regards,\n*Vikas*\nMagicScale Team\nwww.magicscale.in`;
                              window.open(`https://wa.me/${formData.phone.startsWith('91') ? formData.phone : '91' + formData.phone}?text=${encodeURIComponent(waMessage)}`, '_blank');
                            }} 
                            className="px-5 py-4 bg-emerald-400/30 dark:bg-white/10 hover:bg-white/20 rounded-xl transition-all"
                          > 
                            <Send size={18} /> 
                          </button>
                          <button onClick={() => setGeneratedLink(null)} className="px-5 py-4 bg-emerald-400/30 dark:bg-white/10 hover:bg-white/20 rounded-xl transition-all"> <ArrowRight size={18} /> </button>
                       </div>
                    </div>
                  </motion.div>
                )}
              </AnimatePresence>
            </div>
            
            <div className="flex gap-4 px-2">
               <div className="flex-1 flex items-center gap-3 p-3 bg-white dark:bg-slate-900 rounded-2xl border border-slate-100 dark:border-slate-800">
                  <div className="p-2 bg-indigo-50 dark:bg-indigo-900/30 text-indigo-600 rounded-lg"><Wallet size={14}/></div>
                  <span className="text-[9px] font-black text-slate-800 dark:text-slate-200 uppercase tracking-tight">Auto Reconciliation</span>
               </div>
               <div className="flex-1 flex items-center gap-3 p-3 bg-white dark:bg-slate-900 rounded-2xl border border-slate-100 dark:border-slate-800">
                  <div className="p-2 bg-emerald-50 dark:bg-emerald-900/30 text-emerald-600 rounded-lg"><Zap size={14}/></div>
                  <span className="text-[9px] font-black text-slate-800 dark:text-slate-200 uppercase tracking-tight">Instant Settlement</span>
               </div>
            </div>
          </div>
        )}
        {/* HISTORY LIST */}
        {mode === "history" && (
          <motion.div initial={{ opacity: 0 }} animate={{ opacity: 1 }} className="space-y-4">
             {fetchingHistory ? (
                <div className="flex justify-center py-12"><Loader2 className="animate-spin text-indigo-500" /></div>
             ) : (
                <div className="bg-white dark:bg-slate-900 rounded-[2rem] border border-slate-100 dark:border-slate-800 overflow-hidden shadow-2xl shadow-slate-200/50 dark:shadow-none">
                  <div className="overflow-x-auto">
                    <table className="w-full text-left border-collapse">
                      <thead>
                        <tr className="bg-slate-50 dark:bg-slate-800/50">
                          <th className="px-6 py-4 text-[10px] font-black uppercase text-slate-400 tracking-widest">Customer</th>
                          <th className="px-6 py-4 text-[10px] font-black uppercase text-slate-400 tracking-widest">Service</th>
                          <th className="px-6 py-4 text-[10px] font-black uppercase text-slate-400 tracking-widest">Amount</th>
                          <th className="px-6 py-4 text-[10px] font-black uppercase text-slate-400 tracking-widest">Status</th>
                          <th className="px-6 py-4 text-[10px] font-black uppercase text-slate-400 tracking-widest">Link</th>
                        </tr>
                      </thead>
                      <tbody className="divide-y divide-slate-50 dark:divide-slate-800">
                        {history.map((link) => (
                          <tr key={link._id} className="hover:bg-slate-50/50 dark:hover:bg-slate-800/30 transition-colors">
                            <td className="px-6 py-4">
                              <div className="font-bold text-slate-900 dark:text-white text-xs">{link.name}</div>
                              <div className="text-[10px] text-slate-500 font-medium">{link.email}</div>
                            </td>
                            <td className="px-6 py-4 text-[11px] font-bold text-slate-600 dark:text-slate-300">{link.plan}</td>
                            <td className="px-6 py-4">
                              <div className="font-black text-slate-900 dark:text-white text-xs">₹{link.amount}</div>
                              {link.totalAmount > link.amount && (
                                <div className="text-[9px] text-amber-600 font-bold">of ₹{link.totalAmount}</div>
                              )}
                            </td>
                            <td className="px-6 py-4">
                              <span className={`px-2 py-1 rounded-full text-[9px] font-black uppercase tracking-tighter ${link.status === "paid" ? "bg-emerald-100 text-emerald-600" : "bg-amber-100 text-amber-600"}`}>
                                {link.status}
                              </span>
                            </td>
                            <td className="px-6 py-4">
                               {link.paymentLink ? (
                                  <button 
                                    onClick={() => { navigator.clipboard.writeText(link.paymentLink); alert("Link Copied!"); }}
                                    className="p-2 bg-indigo-50 dark:bg-indigo-900/30 text-indigo-600 rounded-lg hover:bg-indigo-100 transition-colors"
                                    title="Copy Payment Link"
                                  >
                                    <Copy size={14} />
                                  </button>
                               ) : <span className="text-[10px] text-slate-400 italic">No link</span>}
                            </td>
                          </tr>
                        ))}
                      </tbody>
                    </table>
                  </div>
                  {history.length === 0 && <div className="py-12 text-center text-slate-400 font-bold text-xs">No links generated yet.</div>}
                </div>
             )}
          </motion.div>
        )}
      </div>
    </div>
  );
};

export default ManagePaymentLinks;
