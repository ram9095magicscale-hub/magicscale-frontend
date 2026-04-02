import React, { useState, useEffect } from "react";
import Sidebar from "../../components/userDashboard/Sidebar";
import Topbar from "../../components/userDashboard/Topbar";
import axios from "axios";
import { API_URL } from "../../services/api";
import { 
  ShoppingCart, 
  CreditCard, 
  Clock, 
  Package, 
  AlertCircle, 
  ChevronRight,
  ShieldCheck,
  Calendar
} from "lucide-react";

const UserDashboard = () => {
  const [sidebarOpen, setSidebarOpen] = useState(false);
  const [activeTab, setActiveTab] = useState("orders"); // orders, subscriptions
  const [orders, setOrders] = useState([]);
  const [subscriptions, setSubscriptions] = useState([]);
  const [loading, setLoading] = useState(true);
  const token = localStorage.getItem("token");

  const toggleSidebar = () => setSidebarOpen(!sidebarOpen);
  const closeSidebar = () => setSidebarOpen(false);

  useEffect(() => {
    const fetchData = async () => {
      try {
        setLoading(true);
        const [ordersRes, subsRes] = await Promise.all([
          axios.get(`${API_URL}/user/orders`, { headers: { Authorization: `Bearer ${token}` } }),
          axios.get(`${API_URL}/user/subscriptions`, { headers: { Authorization: `Bearer ${token}` } })
        ]);
        setOrders(ordersRes.data || []);
        setSubscriptions(subsRes.data || []);
      } catch (err) {
        console.error("Dashboard data fetch failed:", err);
      } finally {
        setLoading(false);
      }
    };
    if (token) fetchData();
  }, [token]);

  return (
    <div className="flex h-screen pt-[72px] overflow-hidden bg-gray-50 dark:bg-slate-950 transition-colors duration-500 font-inter">
      {/* Sidebar Overlay */}
      <div className={`fixed top-[72px] bottom-0 right-0 z-50 w-80 transition-transform duration-500 ease-out bg-white dark:bg-slate-900 shadow-2xl ${sidebarOpen ? "translate-x-0" : "translate-x-full"}`}>
        <Sidebar closeSidebar={closeSidebar} />
      </div>

      {sidebarOpen && (
        <div className="fixed inset-0 bg-slate-900/40 backdrop-blur-sm z-30 transition-opacity duration-500" onClick={closeSidebar} />
      )}

      {/* Main Content Area */}
      <div className="flex-1 flex flex-col w-full overflow-auto scrollbar-hide">
        <Topbar toggleSidebar={toggleSidebar} title="User Dashboard" />
        
        <div className="p-4 md:p-8 max-w-7xl mx-auto w-full">
          {/* Header Section */}
          <div className="mb-8 flex flex-col md:flex-row md:items-end justify-between gap-4">
            <div>
              {/* Titles Removed for Cleanliness */}
            </div>
            
            {/* Tab Navigation */}
            <div className="inline-flex bg-white dark:bg-slate-900 p-1.5 rounded-[22px] border border-slate-200 dark:border-slate-800 shadow-sm transition-colors">
              <button 
                onClick={() => setActiveTab('orders')}
                className={`flex items-center gap-2 px-6 py-2.5 rounded-2xl text-sm font-black tracking-wide transition-all ${
                  activeTab === 'orders' 
                  ? 'bg-indigo-600 text-white shadow-lg shadow-indigo-100 dark:shadow-none' 
                  : 'text-slate-500 dark:text-slate-400 hover:text-slate-800 dark:hover:text-slate-200'
                }`}
              >
                <Package size={18} />
                Orders
              </button>
              <button 
                onClick={() => setActiveTab('subscriptions')}
                className={`flex items-center gap-2 px-6 py-2.5 rounded-2xl text-sm font-black tracking-wide transition-all ${
                  activeTab === 'subscriptions' 
                  ? 'bg-indigo-600 text-white shadow-lg shadow-indigo-100 dark:shadow-none' 
                  : 'text-slate-500 dark:text-slate-400 hover:text-slate-800 dark:hover:text-slate-200'
                }`}
              >
                <CreditCard size={18} />
                Plans
              </button>
            </div>
          </div>

          {/* Dynamic Content Area */}
          <div className="bg-white dark:bg-slate-900 rounded-[32px] border border-slate-100 dark:border-slate-800 shadow-xl shadow-slate-200/40 dark:shadow-none overflow-hidden transition-all">
            {loading ? (
              <div className="py-24 flex flex-col items-center justify-center">
                <div className="w-12 h-12 border-4 border-indigo-100 border-t-indigo-600 rounded-full animate-spin mb-4"></div>
                <p className="text-slate-400 text-sm font-medium animate-pulse">Syncing your account data...</p>
              </div>
            ) : (
              <div className="overflow-x-auto">
                {activeTab === 'orders' ? (
                  <>
                    <table className="w-full">
                      <thead>
                        <tr className="bg-slate-50/50 dark:bg-slate-800/30 text-slate-500 dark:text-slate-400 border-b border-slate-50 dark:border-slate-800 transition-colors">
                          <th className="px-8 py-5 text-left text-[10px] font-black uppercase tracking-widest">Purchased Service</th>
                          <th className="px-8 py-5 text-left text-[10px] font-black uppercase tracking-widest">Transaction Date</th>
                          <th className="px-8 py-5 text-left text-[10px] font-black uppercase tracking-widest">Amount Paid</th>
                          <th className="px-8 py-5 text-left text-[10px] font-black uppercase tracking-widest">Order Reference</th>
                          <th className="px-8 py-5 text-right text-[10px] font-black uppercase tracking-widest">Full Details</th>
                        </tr>
                      </thead>
                      <tbody className="divide-y divide-slate-50 dark:divide-slate-800 transition-colors">
                        {orders.length > 0 ? orders.map((order, idx) => (
                          <tr key={idx} className="group hover:bg-slate-50/50 dark:hover:bg-slate-800/20 transition-all cursor-default">
                            <td className="px-8 py-6">
                              <div className="flex items-center gap-4">
                                <div className="w-12 h-12 rounded-2xl bg-indigo-50 dark:bg-indigo-900/20 flex items-center justify-center text-indigo-600 dark:text-indigo-400 group-hover:scale-110 transition-transform">
                                  <ShoppingCart size={22} />
                                </div>
                                <span className="font-black text-slate-800 dark:text-slate-100 capitalize tracking-tight">{order.plan}</span>
                              </div>
                            </td>
                            <td className="px-8 py-6 text-sm text-slate-500 dark:text-slate-400 font-medium tracking-tight">
                              {new Date(order.timestamp).toLocaleDateString('en-US', { day: 'numeric', month: 'long', year: 'numeric' })}
                            </td>
                            <td className="px-8 py-6">
                              <span className="text-xl font-black text-slate-900 dark:text-white">₹{order.amount}</span>
                            </td>
                            <td className="px-8 py-6">
                              <span className="px-3 py-1.5 bg-slate-100 dark:bg-slate-800 text-slate-600 dark:text-slate-300 rounded-lg text-[10px] font-bold tracking-widest uppercase">
                                #{order.orderId?.substring(0, 10).toUpperCase() || "N/A"}
                              </span>
                            </td>
                            <td className="px-8 py-6 text-right">
                              <span className="px-3 py-1 bg-green-50 dark:bg-green-900/30 text-green-600 dark:text-green-400 rounded-lg text-[10px] font-black uppercase tracking-[0.1em] shadow-sm">
                                {order.status || "Paid"}
                              </span>
                            </td>
                          </tr>
                        )) : (
                          <tr>
                            <td colSpan="5" className="py-24 text-center">
                              <div className="flex flex-col items-center gap-3 opacity-40">
                                <Package size={48} className="text-slate-300" />
                                <p className="font-bold text-slate-400">No transactions found on your account.</p>
                              </div>
                            </td>
                          </tr>
                        )}
                      </tbody>
                    </table>
                  </>
                ) : (
                  <>
                    <table className="w-full">
                      <thead>
                        <tr className="bg-slate-50/50 dark:bg-slate-800/30 text-slate-500 dark:text-slate-400 border-b border-slate-50 dark:border-slate-800 transition-colors">
                          <th className="px-8 py-5 text-left text-[10px] font-black uppercase tracking-widest">Active Plan</th>
                          <th className="px-8 py-5 text-left text-[10px] font-black uppercase tracking-widest">Plan Period</th>
                          <th className="px-8 py-5 text-left text-[10px] font-black uppercase tracking-widest">Renewal Date</th>
                          <th className="px-8 py-5 text-left text-[10px] font-black uppercase tracking-widest">Total Value</th>
                          <th className="px-8 py-5 text-right text-[10px] font-black uppercase tracking-widest">Status</th>
                        </tr>
                      </thead>
                      <tbody className="divide-y divide-slate-50 dark:divide-slate-800 transition-colors">
                        {subscriptions.length > 0 ? subscriptions.map((sub, idx) => (
                          <tr key={idx} className="group hover:bg-slate-50/50 dark:hover:bg-slate-800/20 transition-all cursor-default">
                            <td className="px-8 py-6">
                              <div className="flex items-center gap-4">
                                <div className="w-12 h-12 rounded-2xl bg-emerald-50 dark:bg-emerald-900/20 flex items-center justify-center text-emerald-600 dark:text-emerald-400 group-hover:scale-110 transition-transform">
                                  <ShieldCheck size={22} />
                                </div>
                                <span className="font-black text-slate-800 dark:text-slate-100 capitalize tracking-tight">{sub.planName}</span>
                              </div>
                            </td>
                            <td className="px-8 py-6 text-sm text-slate-500 dark:text-slate-400 font-medium tracking-tight">
                              {sub.duration} Month{sub.duration > 1 ? 's' : ''}
                            </td>
                            <td className="px-8 py-6">
                              <div className="flex items-center gap-2 text-slate-600 dark:text-slate-300 font-bold tracking-tight">
                                <Calendar size={14} className="opacity-40" />
                                {new Date(sub.endDate).toLocaleDateString()}
                              </div>
                            </td>
                            <td className="px-8 py-6">
                              <span className="text-xl font-black text-slate-900 dark:text-white">₹{sub.amount}</span>
                            </td>
                            <td className="px-8 py-6 text-right">
                              <span className={`px-3 py-1 rounded-lg text-[10px] font-black uppercase tracking-[0.1em] shadow-sm ${
                                sub.status === 'Active' 
                                ? 'bg-emerald-50 dark:bg-emerald-900/30 text-emerald-600 dark:text-emerald-400' 
                                : 'bg-rose-50 dark:bg-rose-900/30 text-rose-600 dark:text-rose-400'
                              }`}>
                                {sub.status}
                              </span>
                            </td>
                          </tr>
                        )) : (
                          <tr>
                            <td colSpan="5" className="py-24 text-center">
                              <div className="flex flex-col items-center gap-3 opacity-40">
                                <CreditCard size={48} className="text-slate-300" />
                                <p className="font-bold text-slate-400">You don't have any active licenses or plans.</p>
                              </div>
                            </td>
                          </tr>
                        )}
                      </tbody>
                    </table>
                  </>
                )}
              </div>
            )}
          </div>
        </div>
      </div>
    </div>
  );
};

export default UserDashboard;
