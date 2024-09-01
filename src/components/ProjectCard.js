import React from 'react';
import './ProjectCard.css'; // Import the CSS file with animations

const ProjectCard = ({ title, description, tags, githubLink, demoLink }) => {
  return (
    <div className="project-card gradient-background bg-white dark:bg-gray-900 rounded-lg shadow-lg overflow-hidden transform transition-transform duration-300 hover:scale-105 hover:shadow-xl card-container">
      <div className="p-6">
        <h3 className="text-2xl font-semibold mb-2 neon-text">{title}</h3>
        <p className="text-base text-gray-700 dark:text-gray-400 mb-4">{description}</p>
        <div className="flex flex-wrap gap-2 mb-4">
          {tags.map((tag, index) => (
            <span
              key={index}
              className="tag px-3 py-1 bg-gray-200 dark:bg-gray-800 text-gray-800 dark:text-gray-200 rounded-full text-sm font-medium pulse"
            >
              {tag}
            </span>
          ))}
        </div>
        <div className="flex flex-col md:flex-row gap-2 md:gap-4">
          {githubLink && (
            <a
              href={githubLink}
              target="_blank"
              rel="noopener noreferrer"
              className="button-github px-4 py-2 bg-gray-800 dark:bg-gray-300 text-white dark:text-gray-900 rounded-md hover:bg-gray-700 dark:hover:bg-gray-400 transition-colors duration-300 text-center text-sm font-semibold neon-button"
            >
              View on GitHub
            </a>
          )}
          {demoLink && (
            <a
              href={demoLink}
              target="_blank"
              rel="noopener noreferrer"
              className="button-demo px-4 py-2 bg-blue-600 text-white rounded-md hover:bg-blue-700 transition-colors duration-300 text-center text-sm font-semibold neon-button"
            >
              Live Demo
            </a>
          )}
        </div>
      </div>
    </div>
  );
};

export default ProjectCard;
