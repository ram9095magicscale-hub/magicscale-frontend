import React, { useState } from "react";
import Sidebar from "../../components/userDashboard/Sidebar";
import Topbar from "../../components/userDashboard/Topbar";
import DashboardCard from "../../components/userDashboard/DashboardCard";
import { ShoppingCart, Star, Clock, Menu } from "lucide-react";

const UserDashboard = () => {
  const [sidebarOpen, setSidebarOpen] = useState(false);

  const toggleSidebar = () => setSidebarOpen(!sidebarOpen);
  const closeSidebar = () => setSidebarOpen(false);

  return (
    <div className="flex h-screen pt-[72px] overflow-hidden bg-white dark:bg-slate-950 transition-colors duration-500">
      {/* ✅ Sidebar */}
      <div className={`fixed top-[72px] bottom-0 right-0 z-50 w-72 transition-transform transform bg-white dark:bg-slate-900 shadow-2xl ${sidebarOpen ? "translate-x-0" : "translate-x-full"}`}>
        <Sidebar closeSidebar={closeSidebar} />
      </div>

      {/* ✅ Backdrop for Mobile */}
      {sidebarOpen && (
        <div
          className="fixed inset-0 bg-black opacity-30 z-30"
          onClick={closeSidebar}
        />
      )}

      {/* ✅ Main Content */}
      <div className="flex-1 flex flex-col w-full overflow-auto">
        {/* ✅ Topbar */}
        <Topbar toggleSidebar={toggleSidebar} title="Dashboard" />

        {/* ✅ Dashboard Grid */}
        <div className="p-6 grid grid-cols-1 sm:grid-cols-2 md:grid-cols-3 gap-6">
          <DashboardCard
            title="Total Orders"
            value="122"
            icon={<ShoppingCart className="h-5 w-5" />}
          />
          <DashboardCard
            title="Favorite Items"
            value="8"
            icon={<Star className="h-5 w-5" />}
          />
          <DashboardCard
            title="Recent Orders"
            value="3"
            icon={<Clock className="h-5 w-5" />}
          />
        </div>
      </div>
    </div>
  );
};

export default UserDashboard;
