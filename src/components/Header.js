import React from 'react';
import ThemeToggle from './ThemeToggle';

const Header = ({ darkMode, toggleDarkMode }) => {
  return (
    <header className="fixed top-0 left-0 right-0 z-50 bg-white dark:bg-gray-800 shadow-md py-4 md:py-6">
      <nav className="container mx-auto px-6 md:px-8">
        <div className="flex flex-col md:flex-row justify-between items-center">
          <a href="#home" className="text-2xl font-bold hover:text-blue-500 dark:hover:text-blue-300">
            <p className="m-0">SD</p>
          </a>
          <div className="flex flex-col md:flex-row items-center mt-4 md:mt-0 space-y-4 md:space-y-0 md:space-x-6">
            <a href="#home" className="text-lg md:text-xl hover:text-blue-500 dark:hover:text-blue-300">Home</a>
            <a href="#about" className="text-lg md:text-xl hover:text-blue-500 dark:hover:text-blue-300">About</a>
            <a href="#skills" className="text-lg md:text-xl hover:text-blue-500 dark:hover:text-blue-300">Skills</a>
            <a href="#projects" className="text-lg md:text-xl hover:text-blue-500 dark:hover:text-blue-300">Projects</a>
            <a href="#contact" className="text-lg md:text-xl hover:text-blue-500 dark:hover:text-blue-300">Contact</a>
            <ThemeToggle darkMode={darkMode} toggleDarkMode={toggleDarkMode} />
          </div>
        </div>
      </nav>
    </header>
  );
};

export default Header;
