/** @type {import('tailwindcss').Config} */
const colors = require('tailwindcss/colors');
module.exports = {
  content: ['./src/**/*.tsx'],
  theme: {
    fontSize: {
      xs: 14,
      sm: 16,
      md: 18,
      lg: 20,
      xl: 24,
      '2xl': 30,
    },
    colors: {
      transparent: colors.transparent,
      black: '#000',
      white: '#fff',
      gray: {
        900: '#121214',
        800: '#202024',
        400: '#7c7c8a',
        200: '#c4c4cc',
        100: '#e1e1e6',
      },
      cyan: {
        500: '#81d8f7',
        300: '#9BE1FB',
      },
      red: { 500: 'rgb(239 68 68)' },
    },
    extend: {
      fontFamily: {
        sans: 'Inter, sans-serif',
      },
    },
  },
  plugins: [],
};
