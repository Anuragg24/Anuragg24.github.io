
import React from "react";

export const SkillCard = ({ name, icon }) => {
  return (
    <div className="w-27 h-38 sm:h-38 sm:w-30 bg-white dark:bg-gray-800 border border-gray-200 dark:border-gray-700 rounded-xl shadow-sm p-4 flex flex-col  items-center hover:-translate-y-1 transition-all">
      <img
        src={icon}
        alt={name}
        className="sm:w-20 sm:h-20 w-15 h-15 mb-3 rounded-full object-contain"
      />
      <h5 className="text-sm font-medium text-gray-800 dark:text-gray-200 text-center">
        {name}
      </h5>
    </div>
  );
};
