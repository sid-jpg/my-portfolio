import React from 'react';

const About = () => {
  return (
    <section id="about" className="section bg-gray-100 dark:bg-gray-800 py-12">
      <div className="container mx-auto px-4 sm:px-6 lg:px-8">
        <h2 className="text-2xl sm:text-3xl lg:text-4xl font-bold mb-8 text-center text-gray-800 dark:text-gray-100">
          About Me
        </h2>
        <div className="flex flex-col md:flex-row items-center">
          <div className="md:w-1/3 mb-8 md:mb-0">
            <img
              src="https://i.postimg.cc/PJS5F9Bc/Sid-Profile-Pic.jpg"
              alt="Siddalingaraju Devangavi"
              className="rounded-full w-48 h-48 sm:w-64 sm:h-64 object-cover mx-auto"
            />
          </div>
          <div className="md:w-2/3 md:pl-8">
            <p className="text-base sm:text-lg lg:text-xl mb-4 text-gray-700 dark:text-gray-300">
              I'm a highly motivated Computer Science and Engineering student with a passion for cybersecurity and back-end development. My goal is to leverage my skills in programming, analytical thinking, and project management to contribute to innovative solutions in the tech industry.
            </p>
            <p className="text-base sm:text-lg lg:text-xl mb-4 text-gray-700 dark:text-gray-300">
              Currently pursuing my Bachelor's degree at Basaveshwar Engineering College, I've developed a strong foundation in various programming languages and technologies. I'm particularly interested in enhancing efficiency and achieving successful outcomes through collaborative efforts.
            </p>
            <p className="text-base sm:text-lg lg:text-xl text-gray-700 dark:text-gray-300">
              When I'm not coding, you can find me cooking new recipes, watching documentaries, participating in theatre workshops, or exploring the latest trends in cybersecurity.
            </p>
          </div>
        </div>
      </div>
    </section>
  );
};

export default About;
