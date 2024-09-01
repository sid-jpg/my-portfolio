import React from 'react';
import { FaLinkedin, FaGithub } from 'react-icons/fa';

const Hero = () => {
  return (
    <section className="hero bg-gray-100 dark:bg-gray-900 text-black dark:text-white min-h-screen flex items-center">
      <div className="container mx-auto px-4 text-left">
        <h1 className="mb-4 md:mb-6 lg:mb-8">
          <span className="block text-2xl md:text-4xl lg:text-5xl font-bold">Hi,</span>
          <span className="block text-xl md:text-3xl lg:text-4xl font-bold">
            I'm <span className="text-blue-500 dark:text-techno-blue">S</span>iddalingaraju,
          </span>
          <span className="block text-lg md:text-2xl lg:text-3xl font-bold">computer science &</span>
          <span className="block text-lg md:text-2xl lg:text-3xl font-bold text-techno-blue dark:text-techno-blue">engineering student</span>
        </h1>
        <p className="text-sm md:text-base lg:text-lg mb-4 md:mb-6">
          Cybersecurity Enthusiast / Back-end Developer
        </p>
        <div className="flex flex-col md:flex-row justify-start space-y-3 md:space-y-0 md:space-x-4 mb-6">
          <button
            onClick={() => window.location.href = '#contact'}
            className="bg-blue-500 hover:bg-blue-600 text-white font-bold py-2 px-4 md:py-2 md:px-6 lg:py-3 lg:px-8 rounded"
          >
            Contact me!
          </button>
          <button
            onClick={() => window.open('https://raw.githubusercontent.com/sid-jpg/my-portfolio/main/public/resume.pdf')}
            className="bg-green-500 hover:bg-green-600 text-white font-bold py-2 px-4 md:py-2 md:px-6 lg:py-3 lg:px-8 rounded"
          >
            Hire me
          </button>
        </div>
        <div className="flex justify-start space-x-4">
          <a href="https://www.linkedin.com/in/siddalingaraju-d-829a93257/" target="_blank" rel="noopener noreferrer">
            <FaLinkedin className="text-xl md:text-2xl lg:text-3xl text-black dark:text-white hover:text-blue-600" />
          </a>
          <a href="https://github.com/sid-jpg" target="_blank" rel="noopener noreferrer">
            <FaGithub className="text-xl md:text-2xl lg:text-3xl text-black dark:text-white hover:text-gray-600" />
          </a>
        </div>
      </div>
    </section>
  );
};

export default Hero;
