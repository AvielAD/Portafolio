/** @type {import('tailwindcss').Config} */
module.exports = {
  content: [
    "./src/**/*.tsx",
  ],
  theme: {
    extend: {
      gridTemplateColumns:{
        'sidebarlx': '10% 1fr',
        'sidebar': '1fr',
      },
      gridTemplateRows:{
        'headerlx': '6% 1fr',
        'header': '6% 1fr'
      }
    },
  },
  plugins: [],
}

