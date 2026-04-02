import React, { useEffect, useState } from "react";
import axios from "axios";
import { API_URL } from "../../services/api";
import Sidebar from "../../components/userDashboard/Sidebar";
import Topbar from "../../components/userDashboard/Topbar";

const Orders = () => {
  const [orders, setOrders] = useState([]);
  const [loading, setLoading] = useState(false);
  const token = localStorage.getItem("token");
  
  const [sidebarOpen, setSidebarOpen] = useState(false);
  const toggleSidebar = () => setSidebarOpen(!sidebarOpen);
  const closeSidebar = () => setSidebarOpen(false);

  useEffect(() => {
    // Attempt to fetch orders if an API exists, else mock for display
    const fetchOrders = async () => {
      try {
        setLoading(true);
        const res = await axios.get(`${API_URL}/user/orders`, {
          headers: { Authorization: `Bearer ${token}` },
        });
        setOrders(res.data || []);
      } catch (err) {
        console.error("No orders found or API missing", err);
      } finally {
        setLoading(false);
      }
    };
    if (token) fetchOrders();
  }, [token]);

  return (
    <div className="flex h-screen pt-[72px] overflow-hidden bg-gray-50 dark:bg-slate-950 transition-colors duration-500">
      <div className={`fixed top-[72px] bottom-0 right-0 z-50 w-72 transition-transform transform bg-white dark:bg-slate-900 shadow-2xl ${sidebarOpen ? "translate-x-0" : "translate-x-full"}`}>
        <Sidebar closeSidebar={closeSidebar} />
      </div>
      {sidebarOpen && <div className="fixed inset-0 bg-black opacity-30 z-30" onClick={closeSidebar} />}
      
      <div className="flex-1 flex flex-col w-full overflow-auto">
        <Topbar toggleSidebar={toggleSidebar} title="My Orders" />
        <div className="p-4 md:p-6">
          <div className="bg-white dark:bg-slate-900 rounded-xl shadow p-4 transition-colors">
            {loading ? (
              <p className="text-gray-500 dark:text-gray-400 text-center py-10">Loading orders...</p>
            ) : orders.length === 0 ? (
              <div className="text-center py-10 flex flex-col items-center justify-center">
                <svg className="w-16 h-16 text-gray-300 dark:text-gray-600 mb-4" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                  <path strokeLinecap="round" strokeLinejoin="round" strokeWidth="1.5" d="M16 11V7a4 4 0 00-8 0v4M5 9h14l1 12H4L5 9z"></path>
                </svg>
                <p className="text-gray-500 dark:text-gray-400 mb-4 transition-colors font-medium">No active orders found.</p>
              </div>
            ) : (
              <div className="overflow-x-auto">
                <table className="w-full table-auto">
                  <thead className="text-gray-700 dark:text-gray-200 bg-gray-100 dark:bg-slate-800 rounded-lg">
                    <tr>
                      <th className="p-3 text-left">Plan</th>
                      <th className="p-3 text-left">Date</th>
                      <th className="p-3 text-left">Amount</th>
                      <th className="p-3 text-left">Order ID</th>
                      <th className="p-3 text-left">Status</th>
                    </tr>
                  </thead>
                  <tbody className="text-gray-600 dark:text-gray-300">
                    {orders.map((order, idx) => (
                      <tr key={idx} className="border-t border-gray-100 dark:border-slate-800">
                        <td className="p-3 font-medium capitalize">{order.plan}</td>
                        <td className="p-3">{new Date(order.timestamp).toLocaleDateString()}</td>
                        <td className="p-3 font-bold">₹{order.amount}</td>
                        <td className="p-3 text-xs opacity-60 font-mono">#{order.orderId?.substring(0, 10).toUpperCase() || "N/A"}</td>
                        <td className="p-3">
                          <span className="px-3 py-1 bg-green-50 dark:bg-green-900/30 text-green-600 dark:text-green-400 rounded-full text-[10px] font-black uppercase tracking-widest">
                            {order.status || "Paid"}
                          </span>
                        </td>
                      </tr>
                    ))}
                  </tbody>
                </table>
              </div>
            )}
          </div>
        </div>
      </div>
    </div>
  );
};

export default Orders;
