// File: /pages/UserDashboard/Subscriptions.jsx
import React, { useEffect, useState } from "react";
import axios from "axios";
import Sidebar from "../../components/userDashboard/Sidebar";
import Topbar from "../../components/userDashboard/Topbar";
import { useNavigate } from "react-router-dom";

const Subscriptions = () => {
  const [subscriptions, setSubscriptions] = useState([]);
  const [loading, setLoading] = useState(true);
  const token = localStorage.getItem("token");
  const navigate = useNavigate();

  const [sidebarOpen, setSidebarOpen] = useState(false);
  const toggleSidebar = () => setSidebarOpen(!sidebarOpen);
  const closeSidebar = () => setSidebarOpen(false);

  useEffect(() => {
    const fetchSubscriptions = async () => {
      try {
        const res = await axios.get("https://magicscale-backend.vercel.app/api/user/subscriptions", {
          headers: { Authorization: `Bearer ${token}` },
        });
        setSubscriptions(res.data);
      } catch (err) {
        console.error("Error fetching subscriptions", err);
      } finally {
        setLoading(false);
      }
    };

    fetchSubscriptions();
  }, [token]);

  const handleSubscribeClick = () => {
    window.location.href = "/#pricing"; // Redirect to homepage pricing hash
  };

  return (
    <div className="flex h-screen pt-[72px] overflow-hidden bg-gray-50 dark:bg-slate-950 transition-colors duration-500">
      <div className={`fixed top-[72px] bottom-0 right-0 z-50 w-72 transition-transform transform bg-white dark:bg-slate-900 shadow-2xl ${sidebarOpen ? "translate-x-0" : "translate-x-full"}`}>
        <Sidebar closeSidebar={closeSidebar} />
      </div>
      {sidebarOpen && <div className="fixed inset-0 bg-black opacity-30 z-30" onClick={closeSidebar} />}
      
      <div className="flex-1 flex flex-col w-full overflow-auto">
        <Topbar toggleSidebar={toggleSidebar} title="My Subscriptions" />
        <div className="p-4 md:p-6">
          <div className="bg-white dark:bg-slate-900 rounded-xl shadow p-4 transition-colors">
            {loading ? (
              <p className="text-gray-500 dark:text-gray-400 text-center">Loading...</p>
            ) : subscriptions.length === 0 ? (
              <div className="text-center py-10">
                <p className="text-gray-500 dark:text-gray-400 mb-4 transition-colors">You do not have any subscriptions.</p>
                <button
                  onClick={handleSubscribeClick}
                  className="px-6 py-2 bg-indigo-600 dark:bg-indigo-500 text-white rounded-full hover:bg-indigo-700 dark:hover:bg-indigo-600 transition-colors"
                >
                  Subscribe Now
                </button>
              </div>
            ) : (
              <table className="w-full table-auto">
                <thead className="text-gray-700 dark:text-gray-200">
                  <tr>
                    <th className="p-2 text-left">Plan</th>
                    <th className="p-2 text-left">Amount</th>
                    <th className="p-2 text-left">Duration</th>
                    <th className="p-2 text-left">Start Date</th>
                    <th className="p-2 text-left">End Date</th>
                    <th className="p-2 text-left">Status</th>
                  </tr>
                </thead>
                <tbody className="text-gray-600 dark:text-gray-300">
                  {subscriptions.map((sub, index) => (
                    <tr key={index} className="border-t border-gray-100 dark:border-slate-800">
                      <td className="p-2">{sub.planName}</td>
                      <td className="p-2">₹{sub.amount}</td>
                      <td className="p-2">{sub.duration} months</td>
                      <td className="p-2">{new Date(sub.startDate).toLocaleDateString()}</td>
                      <td className="p-2">{new Date(sub.endDate).toLocaleDateString()}</td>
                      <td className="p-2">
                        <span className={`px-2 py-1 rounded-full text-xs font-semibold ${sub.status === 'expired' ? 'bg-red-100 dark:bg-red-900/30 text-red-600 dark:text-red-400' : 'bg-green-100 dark:bg-green-900/30 text-green-600 dark:text-green-400'}`}>
                          {sub.status || "Active"}
                        </span>
                      </td>
                    </tr>
                  ))}
                </tbody>
              </table>
            )}
          </div>
        </div>
      </div>
    </div>
  );
};

export default Subscriptions;
