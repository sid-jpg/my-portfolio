import React from 'react';

const Footer = () => {
  return (
    <footer className="bg-black text-white py-8 px-4 font-proto">
      <div className="container mx-auto">
        <div className="grid grid-cols-1 md:grid-cols-3 gap-4">
          {/* Profile Section */}
          <div className="bg-blue-600 rounded-3xl p-6 flex flex-col justify-between items-center md:items-start">
            <div>
              <h3 className="text-2xl font-bold mb-2 text-center md:text-left">Siddalingaraju Devangavi</h3>
              <p className="text-lg text-center md:text-left">Computer Science Engineer</p>
            </div>
            <a href="#profile" className="mt-4 text-sm text-center md:text-left hover:underline">
              See my profile →
            </a>
          </div>

          {/* Projects Section */}
          <div className="bg-white text-black rounded-3xl p-6 flex items-center justify-between">
            <a href="#projects" className="text-xl font-semibold hover:underline">
              Projects
            </a>
            <span className="text-2xl">👩🏻‍💻</span>
          </div>

          {/* About Me Section */}
          <div className="bg-gray-800 rounded-3xl p-6 flex items-center justify-between">
            <a href="#about" className="text-xl font-semibold hover:underline">
              About me
            </a>
            <span className="text-2xl">📄</span>
          </div>
        </div>

        <div className="mt-8 grid grid-cols-1 md:grid-cols-2 gap-4">
          {/* Contact Me Section */}
          <div className="bg-yellow-400 text-black rounded-3xl p-6 flex items-center justify-between">
            <a href="#contact" className="text-xl font-semibold hover:underline">
              Contact me
            </a>
            <span className="text-2xl">→</span>
          </div>

          {/* Navigation Links Section */}
          <div className="bg-gray-700 rounded-3xl p-6 flex flex-col items-center md:items-start">
            <nav>
              <ul className="flex flex-wrap justify-center md:justify-start gap-4">
                <li><a href="#home" className="hover:text-blue-400">Home</a></li>
                <li><a href="#about" className="hover:text-blue-400">About</a></li>
                <li><a href="#skills" className="hover:text-blue-400">Skills</a></li>
                <li><a href="#projects" className="hover:text-blue-400">Projects</a></li>
                <li><a href="#contact" className="hover:text-blue-400">Contact</a></li>
              </ul>
            </nav>
            <span className="text-sm mt-4 text-center md:text-left">©2023</span>
          </div>
        </div>
      </div>
    </footer>
  );
};

export default Footer;
