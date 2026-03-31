import React from "react";

const DashboardCard = ({ title, value, icon }) => {
  return (
    <div className="bg-white dark:bg-slate-800 p-4 rounded-2xl shadow-md dark:shadow-none border border-transparent dark:border-slate-700 flex items-center gap-4 w-full transition-colors">
      <div className="bg-red-100 dark:bg-red-900/30 text-red-600 dark:text-red-400 p-2 rounded-full transition-colors">{icon}</div>
      <div>
        <p className="text-sm text-gray-500 dark:text-gray-400 transition-colors">{title}</p>
        <h3 className="text-xl font-semibold text-gray-900 dark:text-white transition-colors">{value}</h3>
      </div>
    </div>
  );
};

export default DashboardCard;
