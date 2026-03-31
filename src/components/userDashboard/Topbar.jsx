import React from "react";
import { Bell } from "lucide-react";
import { useAuth } from "../context/AuthContext/useAuth";

const Topbar = ({ toggleSidebar, title = "Welcome Back!" }) => {
  const { user } = useAuth();

  return (
    <div className="flex justify-between items-center px-4 md:px-8 py-4 md:py-6 bg-transparent transition-colors">
      <div className="flex items-center gap-3 md:gap-4">
        <h1 className="text-2xl md:text-3xl font-bold text-gray-800 dark:text-white transition-colors">{title}</h1>
      </div>
      
      <div className="flex items-center gap-4">
        <Bell className="h-5 w-5 text-gray-600 dark:text-gray-400 cursor-pointer hover:text-red-500 transition-colors" />
        <button onClick={toggleSidebar} title="Open Profile Menu" className="focus:outline-none">
          <img
            src={user?.profilePhoto ? `http://localhost:3000${user.profilePhoto}` : "https://cdn-icons-png.flaticon.com/512/1144/1144760.png"}
            alt="Profile Avatar"
            className="h-10 w-10 rounded-full border-2 border-transparent hover:border-red-500 dark:border-slate-700 object-cover transition-all shadow-sm"
          />
        </button>
      </div>
    </div>
  );
};

export default Topbar;
