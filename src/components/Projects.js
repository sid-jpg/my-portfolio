import React from 'react';
import ProjectCard from './ProjectCard';

const Projects = () => {
  const projects = [
    {
      title: 'Retinal Disease Detection',
      description: 'AI model to detect and predict retinal diseases using fundus images.',
      tags: ['Python', 'TensorFlow', 'Keras', 'OpenCV'],
      githubLink: 'https://github.com/sid-jpg/retinal-disease-model',
      demoLink: null,
    },
    {
      title: 'Phishing Detector',
      description: 'Tool to detect potential phishing attempts using URL analysis.',
      tags: ['Python', 'Machine Learning', 'Pandas', 'Scikit-learn'],
      githubLink: 'https://github.com/sid-jpg/phishing-detection',
      demoLink: null,
    },
    {
      title: 'To-do List and Expense Tracker',
      description: 'Web application for managing tasks and tracking expenses.',
      tags: ['Python', 'Flask', 'SQLite', 'HTML/CSS'],
      githubLink: 'https://github.com/sid-jpg/todo-list',
      demoLink: null,
    },
  ];

  return (
    <section id="projects" className="section bg-gray-100 dark:bg-gray-800 py-12">
      <div className="container mx-auto px-4">
        <h2 className="text-3xl md:text-4xl font-bold mb-8 text-center text-gray-800 dark:text-white">Projects</h2>
        <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 gap-8">
          {projects.map((project, index) => (
            <ProjectCard key={index} {...project} />
          ))}
        </div>
      </div>
    </section>
  );
};

export default Projects;
