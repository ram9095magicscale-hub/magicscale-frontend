import React from "react";

const DashboardCard = ({ title, count }) => {
  return (
    <div className="bg-white dark:bg-slate-800 p-6 rounded-xl shadow dark:shadow-none border border-transparent dark:border-slate-700 text-center transition-colors">
      <h3 className="text-gray-500 dark:text-gray-400 text-sm uppercase mb-2 transition-colors">{title}</h3>
      <p className="text-2xl font-bold text-red-500 dark:text-red-400 transition-colors">{count}</p>
    </div>
  );
};
