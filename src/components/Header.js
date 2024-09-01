import React, { useState } from 'react';
import ThemeToggle from './ThemeToggle';

const Header = ({ darkMode, toggleDarkMode }) => {
  const [isMenuOpen, setIsMenuOpen] = useState(false);

  const toggleMenu = () => setIsMenuOpen(!isMenuOpen);

  const closeMenu = () => setIsMenuOpen(false);

  return (
    <header className="fixed top-0 left-0 right-0 z-50 bg-white dark:bg-gray-800 shadow-md py-2 md:py-4"> {/* Reduced py-4 to py-2 */}
      <nav className="container mx-auto px-6 md:px-8">
        <div className="flex items-center justify-between md:justify-start">
          {/* Hamburger Menu for Mobile */}
          <div className="md:hidden flex items-center">
            <button
              onClick={toggleMenu}
              className="text-gray-500 dark:text-gray-300 hover:text-blue-500 dark:hover:text-blue-300">
              <svg className="w-6 h-6" fill="none" stroke="currentColor" viewBox="0 0 24 24" xmlns="http://www.w3.org/2000/svg">
                <path strokeLinecap="round" strokeLinejoin="round" strokeWidth="2" d="M4 6h16M4 12h16m-7 6h7" />
              </svg>
            </button>
          </div>
          {/* Centered Logo */}
          <a href="#home" className="text-xl font-bold hover:text-blue-500 dark:hover:text-blue-300 flex-1 text-center md:text-left"> {/* Reduced text-2xl to text-xl */}
            <p className="m-0">SD</p>
          </a>
          {/* Theme Toggle for Mobile */}
          <div className="md:hidden flex items-center">
            <ThemeToggle darkMode={darkMode} toggleDarkMode={toggleDarkMode} />
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
