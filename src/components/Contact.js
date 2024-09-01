import React from 'react';
import { FaEnvelope, FaMapMarkerAlt, FaLinkedin, FaGithub } from 'react-icons/fa';

const Contact = () => {
  return (
    <section id="contact" className="section bg-white dark:bg-gray-900 py-8">
      <div className="container mx-auto px-4">
        <h2 className="text-3xl font-bold mb-8 text-center">Contact Information</h2>
        <div className="flex flex-col md:flex-row">
          <div className="md:w-1/2 mb-8 md:mb-0">
            <h3 className="text-xl font-bold mb-4">Contact Details</h3>
            <div className="mb-4">
              <p className="flex items-center space-x-3 text-base md:text-lg">
                <FaEnvelope className="text-blue-500 text-lg md:text-xl" />
                <a href="mailto:devangavisiddu@gmail.com" className="hover:underline">
                  Email: devangavisiddu@gmail.com
                </a>
              </p>
            </div>
            <div className="mb-4">
              <p className="flex items-center space-x-3 text-base md:text-lg">
                <FaMapMarkerAlt className="text-blue-500 text-lg md:text-xl" />
                <span>Location: Bagalkot, Karnataka, India</span>
              </p>
            </div>
            <div className="flex space-x-4 mt-8 justify-center md:justify-start">
              <a
                href="https://linkedin.com/in/siddalingaraju-d-829a93257"
                target="_blank"
                rel="noopener noreferrer"
                className="text-blue-500 hover:text-blue-600"
              >
                <FaLinkedin className="text-2xl md:text-3xl" />
              </a>
              <a
                href="https://github.com/sid-jpg"
                target="_blank"
                rel="noopener noreferrer"
                className="text-blue-500 hover:text-blue-600"
              >
                <FaGithub className="text-2xl md:text-3xl" />
              </a>
              <a
                href="mailto:devangavisiddu@gmail.com"
                className="text-blue-500 hover:text-blue-600"
              >
                <FaEnvelope className="text-2xl md:text-3xl" />
              </a>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
};

export default Contact;
