import React from "react";

const Title = ({ title, preTitle, color }) => {
  return (
    <div>
      <h2
        className={`md:text-5xl w-[100%] uppercase text-3xl text-center font-poppins font-bold ${color ? `text-${color}` : 'text-gray-900 dark:text-white'}`}
      >
        {preTitle}
        {/* <br className="md:hidden" /> */}
        <span className="text-indigo-500"> {title}</span>
      </h2>
      <div className="w-40 h-1 rounded-lg bg-primary mx-auto my-4"></div>
    </div>
  );
};

export default Title;
