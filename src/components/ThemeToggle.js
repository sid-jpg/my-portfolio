import React from 'react';
import { FaMoon, FaSun } from 'react-icons/fa';

const ThemeToggle = ({ darkMode, toggleDarkMode }) => {
  return (
    <button
      onClick={toggleDarkMode}
      aria-label="Toggle theme"
      className="p-2 rounded-full focus:outline-none transition-colors duration-300 hover:bg-gray-200 dark:hover:bg-gray-700"
    >
      {darkMode ? (
        <FaSun className="text-yellow-500 text-2xl md:text-3xl" />
      ) : (
        <FaMoon className="text-gray-700 text-2xl md:text-3xl" />
      )}
    </button>
  );
};

export default ThemeToggle;
