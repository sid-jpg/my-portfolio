import React, { useState } from 'react';
import ThemeToggle from './ThemeToggle';

const Header = ({ darkMode, toggleDarkMode }) => {
  const [isMenuOpen, setIsMenuOpen] = useState(false);

  const toggleMenu = () => setIsMenuOpen(!isMenuOpen);

  const closeMenu = () => setIsMenuOpen(false);

  return (
    <header className="fixed top-0 left-0 right-0 z-50 bg-white dark:bg-gray-800 shadow-md py-2 md:py-4">
      <nav className="container mx-auto px-6 md:px-8">
        <div className="flex items-center justify-between md:justify-between">
          {/* Mobile Hamburger Menu */}
          <div className="md:hidden flex items-center">
            <button
              onClick={toggleMenu}
              className="text-gray-500 dark:text-gray-300 hover:text-blue-500 dark:hover:text-blue-300">
              <svg className="w-6 h-6" fill="none" stroke="currentColor" viewBox="0 0 24 24" xmlns="http://www.w3.org/2000/svg">
                <path strokeLinecap="round" strokeLinejoin="round" strokeWidth="2" d="M4 6h16M4 12h16m-7 6h7" />
              </svg>
            </button>
          </div>
          {/* Mobile Logo and Theme Toggle */}
          <div className="flex-1 md:hidden flex items-center justify-between">
            <a href="#home" className="text-xl font-bold hover:text-blue-500 dark:hover:text-blue-300 flex items-center justify-center flex-1">
              SD
            </a>
            <div className="flex items-center">
              <ThemeToggle darkMode={darkMode} toggleDarkMode={toggleDarkMode} />
            </div>
          </div>
          {/* Desktop Logo and Navigation */}
          <div className="hidden md:flex flex-1 items-center justify-between">
            {/* Logo */}
            <a href="#home" className="text-xl font-bold hover:text-blue-500 dark:hover:text-blue-300">
              <p className="m-0">SD</p>
            </a>
            {/* Navigation Links */}
            <div className="flex-1 flex justify-center space-x-6">
              <a href="#home" className="text-lg md:text-xl hover:text-blue-500 dark:hover:text-blue-300">Home</a>
              <a href="#about" className="text-lg md:text-xl hover:text-blue-500 dark:hover:text-blue-300">About</a>
              <a href="#skills" className="text-lg md:text-xl hover:text-blue-500 dark:hover:text-blue-300">Skills</a>
              <a href="#projects" className="text-lg md:text-xl hover:text-blue-500 dark:hover:text-blue-300">Projects</a>
              <a href="#contact" className="text-lg md:text-xl hover:text-blue-500 dark:hover:text-blue-300">Contact</a>
            </div>
            {/* Theme Toggle */}
            <div className="flex items-center">
              <ThemeToggle darkMode={darkMode} toggleDarkMode={toggleDarkMode} />
            </div>
          </div>
        </div>
        {/* Mobile Menu */}
        <div className={`md:hidden menu-dropdown ${isMenuOpen ? 'show' : ''}`}>
          <a href="#home" className="block text-lg md:text-xl hover:text-blue-500 dark:hover:text-blue-300" onClick={closeMenu}>Home</a>
          <a href="#about" className="block text-lg md:text-xl hover:text-blue-500 dark:hover:text-blue-300" onClick={closeMenu}>About</a>
          <a href="#skills" className="block text-lg md:text-xl hover:text-blue-500 dark:hover:text-blue-300" onClick={closeMenu}>Skills</a>
          <a href="#projects" className="block text-lg md:text-xl hover:text-blue-500 dark:hover:text-blue-300" onClick={closeMenu}>Projects</a>
          <a href="#contact" className="block text-lg md:text-xl hover:text-blue-500 dark:hover:text-blue-300" onClick={closeMenu}>Contact</a>
          {/* Theme Toggle for Mobile */}
          <div className="mt-4">
            <ThemeToggle darkMode={darkMode} toggleDarkMode={toggleDarkMode} />
          </div>
        </div>
      </nav>
      {/* Overlay for Mobile Menu */}
      {isMenuOpen && (
        <div className="menu-overlay" onClick={closeMenu}></div>
      )}
    </header>
  );
};

export default Header;
