import React, { useEffect, useState } from 'react';
import './SkillsDashboard.css'; // Import the CSS file with animations

const skills = [
  { name: 'C++', level: 90, logo: '/assets/cpp.png', color: '#00599C' },
  { name: 'Python', level: 90, logo: '/assets/python.png', color: '#3776AB' },
  { name: 'Java', level: 85, logo: '/assets/java.png', color: '#007396' },
  { name: 'C', level: 88, logo: '/assets/c.png', color: '#A8B9CC' },
  { name: 'Flask', level: 85, logo: '/assets/flask.webp', color: 'brown' },
  { name: 'HTML/CSS', level: 80, logo: '/assets/html.png', color: '#E34F26' },
  { name: 'JavaScript', level: 70, logo: '/assets/javascript.png', color: '#F7DF1E' },
  { name: 'SQL', level: 80, logo: '/assets/sql.png', color: '#4479A1' },
  { name: 'Cybersecurity', level: 85, logo: '/assets/cybersecurity.png', color: '#4CAF50' },
  { name: 'Node.js', level: 75, logo: '/assets/nodejsStackedLight.svg', color: '#FF5722' },
];

const SkillLogo = ({ logo }) => (
  <div className="w-16 h-16 flex items-center justify-center rounded-md bg-gray-200 dark:bg-gray-700 transition-transform duration-300 hover:scale-105">
    <img src={logo} alt="Skill logo" className="w-12 h-12 object-contain" />
  </div>
);

const SkillBar = ({ name, level, logo, color }) => {
  const [isVisible, setIsVisible] = useState(false);

  useEffect(() => {
    const handleScroll = () => {
      const skillBarElement = document.getElementById(name);
      if (skillBarElement) {
        const { top } = skillBarElement.getBoundingClientRect();
        const windowHeight = window.innerHeight;
        if (top < windowHeight * 0.75) {
          setIsVisible(true);
        }
      }
    };

    window.addEventListener('scroll', handleScroll);
    handleScroll();

    return () => window.removeEventListener('scroll', handleScroll);
  }, [name]);

  return (
    <div id={name} className="flex items-center space-x-4 mb-6">
      <SkillLogo logo={logo} />
      <div className="flex-grow">
        <div className="flex justify-between mb-2">
          <span className="text-lg font-semibold">{name}</span>
          <span className="text-lg font-semibold">{level}%</span>
        </div>
        <div className="h-6 bg-gray-300 dark:bg-gray-600 rounded-full">
          <div
            className={`h-full rounded-full ${isVisible ? 'animate-fill' : ''}`}
            style={{ width: `${level}%`, backgroundColor: color }}
          />
        </div>
      </div>
    </div>
  );
};

const SkillsDashboard = () => {
  const midIndex = Math.ceil(skills.length / 2);
  const skillsColumn1 = skills.slice(0, midIndex);
  const skillsColumn2 = skills.slice(midIndex);

  return (
    <section id="skills" className="bg-gray-100 dark:bg-gray-900 py-12 fade-in">
      <div className="container mx-auto px-4">
        <h1 className="text-3xl md:text-4xl font-bold mb-8 text-blue-600 dark:text-blue-400 text-center">
          My Skills
        </h1>

        <div className="grid grid-cols-1 md:grid-cols-2 gap-12">
          <div className="space-y-6">
            {skillsColumn1.map((skill) => (
              <SkillBar key={skill.name} {...skill} />
            ))}
          </div>
          <div className="space-y-6">
            {skillsColumn2.map((skill) => (
              <SkillBar key={skill.name} {...skill} />
            ))}
          </div>
        </div>
      </div>
    </section>
  );
};

export default SkillsDashboard;
