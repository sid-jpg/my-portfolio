// craco.config.js
const path = require('path');

module.exports = {
  style: {
    postcss: {
      plugins: [
        require('tailwindcss'),
        require('autoprefixer'),
      ],
    },
  },
  webpack: {
    alias: {
      '@components': path.resolve(__dirname, 'src/components'),
    },
  },
  babel: {
    presets: [
      '@babel/preset-env',
      '@babel/preset-react',
    ],
  },
};
