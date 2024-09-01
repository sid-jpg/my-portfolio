// tailwind.config.js
module.exports = {
  content: [
    "./src/**/*.{js,jsx,ts,tsx}", // Ensure this path matches your project structure
  ],
  theme: {
    extend: {
      fontFamily: {
        'proto': ['Proto Mono', 'monospace'],
      },
      colors: {
        background: 'var(--background-color)',
        text: 'var(--text-color)',
        green: {
          'custom-light': '#00FF00', // Light green for dark mode
        },
      },
    },
  },
  darkMode: 'class', // Enable dark mode with class-based toggle
  plugins: [],
};
