import React from 'react';

const AnimatedBackground = () => {
  return (
    <div className="absolute inset-0 overflow-hidden z-0">
      <svg
        className="w-full h-full"
        xmlns="http://www.w3.org/2000/svg"
        viewBox="0 0 200 200"
        preserveAspectRatio="xMidYMid slice"
      >
        <defs>
          <pattern
            id="matrix"
            x="0"
            y="0"
            width="20"
            height="20"
            patternUnits="userSpaceOnUse"
          >
            <text
              x="0"
              y="15"
              className="text-gray-800 dark:text-green-custom-light opacity-10 font-proto text-xs"
            >
              101010101
            </text>
          </pattern>
        </defs>
        <rect width="100%" height="100%" fill="url(#matrix)">
          <animate
            attributeName="y"
            from="0"
            to="20"
            dur="10s"
            repeatCount="indefinite"
          />
        </rect>
      </svg>
    </div>
  );
};

export default AnimatedBackground;
