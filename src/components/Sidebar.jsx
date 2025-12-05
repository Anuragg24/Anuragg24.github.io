import React from "react";
import asset from "../assets/assets.js";

export const Sidebar = () => {
  return (
    <aside className="hidden md:flex flex-col 
                       w-60 lg:w-64 xl:w-72 p-6 
                       fixed top-20 left-6 bottom-6 
                       rounded-2xl shadow-lg 
                       bg-white dark:bg-gray-800 
                       border border-gray-200 dark:border-gray-700
                       transition-transform duration-300 
                       hover:scale-105 hover:shadow-[0_20px_40px_rgba(59,130,246,0.4)] hover:-translate-y-1
                       text-center">
      <div className="flex mt-5 flex-col items-center">
        <img
          src={asset.avatar}
          alt="Profile"
          className="w-28 h-28 rounded-full mb-4 border-2 border-gray-300 dark:border-gray-600
                     transition-transform duration-300 hover:rotate-3 hover:scale-110"
        />
        <h2 className="text-xl font-bold mb-2 text-gray-900 dark:text-white
                       transition-colors duration-300 hover:text-blue-500 dark:hover:text-cyan-400
                       break-words max-w-full">
          Anurag Saraswat
        </h2>
        <p className="text-gray-600 dark:text-gray-400 text-sm mb-1
                      transition-colors duration-300 hover:text-blue-400 dark:hover:text-cyan-300">
          📧 avsaraswat24@gmail.com
        </p>
        <p className="text-gray-600 dark:text-gray-400 text-sm mb-1
                      transition-colors duration-300 hover:text-blue-400 dark:hover:text-cyan-300">
          📞 +91 9521423997
        </p>
        <p className="text-gray-600 dark:text-gray-400 text-sm
                      transition-colors duration-300 hover:text-blue-400 dark:hover:text-cyan-300">
          📍 Jaipur, India
        </p>
      </div>
    </aside>
  );
};
