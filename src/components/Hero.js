import React from 'react';
import { FaLinkedin, FaGithub } from 'react-icons/fa';

const Hero = () => {
  return (
    <section className="hero bg-gray-100 dark:bg-gray-900 text-black dark:text-white min-h-screen flex items-center">
      <div className="container mx-auto px-4 text-center md:text-left">
        <h1 className="mb-6 md:mb-8">
          <span className="block text-4xl md:text-6xl lg:text-8xl font-bold">Hi,</span>
          <span className="block text-3xl md:text-5xl lg:text-6xl font-bold">
            I'm <span className="text-blue-500 dark:text-techno-blue">S</span>iddalingaraju,
          </span>
          <span className="block text-2xl md:text-4xl lg:text-5xl font-bold">computer science engineer</span>
        </h1>
        <p className="text-lg md:text-xl mb-6 md:mb-8">
          Cybersecurity Enthusiast / Back-end Developer
        </p>
        <div className="flex flex-col md:flex-row justify-center md:justify-start space-y-4 md:space-y-0 md:space-x-4 mb-8">
          <button
            onClick={() => window.location.href = '#contact'}
            className="bg-blue-500 hover:bg-blue-600 text-white font-bold py-2 px-4 rounded"
          >
            Contact me!
          </button>
          <button
            onClick={() => window.location.href = '/path/to/resume.pdf'}
            className="bg-green-500 hover:bg-green-600 text-white font-bold py-2 px-4 rounded"
          >
            Hire me
          </button>
        </div>
        <div className="flex justify-center md:justify-start space-x-4">
          <a href="https://www.linkedin.com/in/yourprofile" target="_blank" rel="noopener noreferrer">
            <FaLinkedin className="text-3xl md:text-4xl text-black dark:text-white hover:text-blue-600" />
          </a>
          <a href="https://github.com/yourprofile" target="_blank" rel="noopener noreferrer">
            <FaGithub className="text-3xl md:text-4xl text-black dark:text-white hover:text-gray-600" />
          </a>
        </div>
      </div>
    </section>
  );
};

export default Hero;
