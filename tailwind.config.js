/** @type {import('tailwindcss').Config} */
module.exports = {
  content: ['index.html'],
  darkMode: 'class',
  theme: {
    container: {
      center: true,
      padding: '16px',
    },
    extend: {
      colors: {
        primary: '#2dd4bf',
        secondary: '#475569',
        dark: '#0f172a',
      },
      screens: {
        '2xl' : '1320px',
      },
    },
  },
  plugins: [],
}