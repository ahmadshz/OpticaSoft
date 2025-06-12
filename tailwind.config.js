/** @type {import('tailwindcss').Config} */
module.exports = {
  content: [
    "./src/**/*.{js,jsx,ts,tsx}",
  ],
  darkMode: 'class',
  theme: {
    extend: {
      transform: {
        'rotate-x-180': 'rotateX(180deg)',
      },
      boxShadow: {
        'custom': '0 0 20px #1E3851', 
        'dark': '0 0 30px #d6d7d7b3', 
      },
    },
    container: {
      center: true,
      padding: {
        DEFAULT: '1rem',
        sm: '2rem',
        lg: '4rem',
        xl: '5rem',
        '2xl': '6rem',
      },
    },
  },
  plugins: [
    require('tailwind-scrollbar'),
  ],
}
