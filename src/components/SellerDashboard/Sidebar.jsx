import React from "react";
import { ShoppingCart, User, Menu, X, Users, Briefcase } from "lucide-react";
import { NavLink } from "react-router-dom";
import { useAuth } from "../context/AuthContext/useAuth";

const Sidebar = ({ closeSidebar }) => {
  const { user } = useAuth();

  const menuItems = [
    { label: "Users Mgt", icon: <Users size={20} />, path: "/SellerDashboard" },
    { label: "Job Posts", icon: <Briefcase size={20} />, path: "/SellerDashboard" },
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
          <h3 className="font-bold text-gray-800 dark:text-white text-lg truncate">{user?.name || "Admin"}</h3>
          <p className="text-sm text-gray-500 dark:text-gray-400 capitalize truncate">{user?.role || "seller"}</p>
        </div>
      </div>

      {/* Menu List */}
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
              onClick={closeSidebar} // Optional: Auto close on selection (mobile UX)
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
