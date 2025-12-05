import { useState } from "react";

import { Sun, Moon, Menu, X } from "lucide-react";
import { useTheme } from "../context/ThemeContext";

export const Navbar = () => {
  const { theme, toggleTheme } = useTheme();
  const [mobileOpen, setMobileOpen] = useState(false);

  return (
    <nav className="fixed top-0 left-0 w-full z-50 backdrop-blur-lg bg-white/70 dark:bg-black/60 shadow-md transition-colors">
      <div className="max-w-7xl mx-auto px-6 py-3 flex justify-between items-center">
        {/* Logo */}
       <h1 className="text-xl font-bold">
  Anurag<span className="dark:text-cyan-500 text-[#3a1ef0]">.DEV</span>
</h1>
        {/* Desktop Menu */}
        <ul className="hidden md:flex space-x-8 text-[#4f39f6] dark:text-gray-200">
          <li className=" hover:text-cyan-400 transition-colors">
            <a href="#home">Home</a>
            </li>
        <li className=" hover:text-cyan-400  transition-colors">
            <a href="#about">About Me</a>
          </li>
          <li className=" hover:text-cyan-400  transition-colors">
            <a href="#projects">projects</a>
          </li>
          <li className=" hover:text-cyan-400  transition-colors">
            <a href="#contact">Contact Me</a>
          </li>
        </ul>

        {/* Actions */}
        <div className="flex items-center space-x-4">
          {/* Theme toggle */}
          <button
            onClick={toggleTheme}
            className="p-2 rounded-full bg-gray-200 dark:bg-gray-700 transition"
          >
            {theme === "light" ? (
              <Moon className="h-5 w-5 text-gray-800" />
            ) : (
              <Sun className="h-5 w-5 text-yellow-400" />
            )}
          </button>

          {/* Mobile menu toggle */}
          <button
            className="md:hidden p-2 rounded-full bg-gray-200 dark:bg-gray-700"
            onClick={() => setMobileOpen(!mobileOpen)}
          >
            {mobileOpen ? <X className="h-6 w-6" /> : <Menu className="h-6 w-6" />}
          </button>
        </div>
      </div>

      {/* Mobile Menu */}
      {mobileOpen && (
        <div className="md:hidden bg-white dark:bg-black shadow-lg px-6 py-4 space-y-4 text-gray-800 dark:text-gray-200">
          <ul className="flex flex-col gap-6 md:hidden space-x-8 text-[#4f39f6] dark:text-gray-200">
          <li className=" hover:text-cyan-400 transition-colors">
            <a href="#home">Home</a>
            </li>
        <li className=" hover:text-cyan-400  transition-colors">
            <a href="#about">About Me</a>
          </li>
          <li className=" hover:text-cyan-400  transition-colors">
            <a href="#projects">projects</a>
          </li>
          <li className=" hover:text-cyan-400  transition-colors">
            <a href="#contact">Contact Me</a>
          </li>
        </ul>
        </div>
      )}
    </nav>
  );
};

