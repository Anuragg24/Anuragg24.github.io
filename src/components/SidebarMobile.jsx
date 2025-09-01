import React from "react";
import asset from "../assets/assets.js";
import './SidebarMobile.css'
const SidebarMobile = () => {
  return (
    <div
      className="md:hidden  mt-17 mx-5  p-4 bg-white dark:bg-gray-800 
                 border-b border-gray-200 dark:border-gray-700 
                 shadow-lg rounded-2xl animate-slideIn"
    >
      <div className="flex items-center gap-4">
        <img
          src={asset.avatar}
          alt="Profile"
          className="w-20 h-20 rounded-full border-2 border-gray-300 dark:border-gray-600"
        />
        <div className="flex flex-col gap-1">
          <h2 className="text-lg font-bold text-gray-900 dark:text-white">
            Anurag Saraswat
          </h2>
          <p className="text-gray-600 dark:text-gray-300 text-sm">
            📧 anurag@example.com
          </p>
          <p className="text-gray-600 dark:text-gray-300 text-sm">
            📞 +91 9876543210
          </p>
          <p className="text-gray-600 dark:text-gray-300 text-sm">
            📍 Jaipur, India
          </p>
        </div>
      </div>
    </div>
  );
};

export default SidebarMobile;
