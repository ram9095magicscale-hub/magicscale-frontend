import React from "react";
import { ShoppingCart, User, X, Users, Briefcase } from "lucide-react";
import { NavLink } from "react-router-dom";
import { useAuth } from "../context/AuthContext/useAuth";

const Sidebar = ({ closeSidebar }) => {
  const { user } = useAuth();
  
  const isSellerOrAdmin = user?.role === 'seller' || user?.role === 'admin';

  const menuItems = [
    ...(isSellerOrAdmin ? [
      { label: "Users Mgt", icon: <Users size={20} />, path: "/SellerDashboard" },
      { label: "Job Posts", icon: <Briefcase size={20} />, path: "/SellerDashboard" },
    ] : []),
    { label: "Orders", icon: <ShoppingCart size={20} />, path: "/orders" },
    { label: "Profile", icon: <User size={20} />, path: "/profile" },
    { label: "Subscriptions", icon: <ShoppingCart size={20} />, path: "/subscriptions" },
  ];

  return (
    <div className="w-72 h-full bg-white dark:bg-slate-900 shadow-2xl p-6 flex flex-col transition-colors border-l dark:border-slate-800 relative z-50">
      <div className="flex justify-end mb-2">
        <button onClick={closeSidebar} className="p-1 rounded-full hover:bg-gray-100 dark:hover:bg-slate-800 text-gray-500 transition-colors">
          <X size={24} />
        </button>
      </div>

      <div className="flex items-center gap-4 mb-8 pb-6 border-b dark:border-slate-800">
        <img
          src={user?.profilePhoto ? `https://magicscale-backend.vercel.app${user.profilePhoto}` : "https://cdn-icons-png.flaticon.com/512/1144/1144760.png"}
          alt="Avatar"
          className="h-14 w-14 rounded-full border-2 border-red-500 object-cover shadow-sm"
        />
        <div className="flex flex-col overflow-hidden">
          <h3 className="font-bold text-gray-800 dark:text-white text-lg truncate">{user?.name || "User Name"}</h3>
          <p className="text-sm text-gray-500 dark:text-gray-400 capitalize truncate">{user?.role || "user"}</p>
        </div>
      </div>
      <ul className="space-y-4">
        {menuItems.map((item) => (
          <li key={item.label}>
            <NavLink
              to={item.path}
              className={({ isActive }) =>
                `flex items-center gap-3 p-2 rounded-lg transition-colors ${
                  isActive ? "bg-red-100 dark:bg-red-900/40 text-red-500 dark:text-red-400 font-semibold" : "text-gray-700 dark:text-gray-300"
                } hover:bg-red-50 dark:hover:bg-slate-800`
              }
              onClick={closeSidebar}
            >
              {item.icon}
              <span>{item.label}</span>
            </NavLink>
          </li>
        ))}
      </ul>
    </div>
  );
};

export default Sidebar;



// import React, { useState } from "react";
// import Sidebar from "../../components/userDashboard/Sidebar";
// import Topbar from "../../components/userDashboard/Topbar";
// import DashboardCard from "../../components/userDashboard/DashboardCard";
// import { ShoppingCart, Star, Clock, Menu } from "lucide-react";

// const UserDashboard = () => {
//   const [sidebarOpen, setSidebarOpen] = useState(false);

//   const toggleSidebar = () => setSidebarOpen(!sidebarOpen);
//   const closeSidebar = () => setSidebarOpen(false);

//   return (
//     <div className="flex h-screen overflow-hidden">
//       {/* ✅ Animated Sidebar */}
//       <div
//         className={`fixed inset-y-0 left-0 z-40 w-64 bg-white shadow-lg transform transition-transform duration-300 ease-in-out md:static md:translate-x-0 ${
//           sidebarOpen ? "translate-x-0" : "-translate-x-full"
//         }`}
//       >
//         <Sidebar closeSidebar={closeSidebar} />
//       </div>

//       {/* ✅ Backdrop when sidebar is open */}
//       {sidebarOpen && (
//         <div
//           className="fixed inset-0 bg-black bg-opacity-30 z-30 md:hidden transition-opacity duration-300"
//           onClick={closeSidebar}
//         />
//       )}

//       {/* ✅ Main Content Area */}
//       <div className="flex-1 flex flex-col w-full overflow-auto">
//         {/* ✅ Topbar with hamburger icon */}
//         <div className="flex items-center justify-between md:justify-end px-4 py-3 bg-white shadow-sm">
//           <button onClick={toggleSidebar} className="md:hidden text-gray-700">
//             <Menu className="h-6 w-6" />
//           </button>
//           <Topbar />
//         </div>

//         {/* ✅ Dashboard Cards */}
//         <div className="p-6 grid grid-cols-1 sm:grid-cols-2 md:grid-cols-3 gap-6">
//           <DashboardCard
//             title="Total Orders"
//             value="122"
//             icon={<ShoppingCart className="h-5 w-5" />}
//           />
//           <DashboardCard
//             title="Favorite Items"
//             value="8"
//             icon={<Star className="h-5 w-5" />}
//           />
//           <DashboardCard
//             title="Recent Orders"
//             value="3"
//             icon={<Clock className="h-5 w-5" />}
//           />
//         </div>
//       </div>
//     </div>
//   );
// };

// export default UserDashboard;
