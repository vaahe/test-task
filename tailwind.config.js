/** @type {import('tailwindcss').Config} */
module.exports = {
  content: ['./src/**/*.{js,ts,jsx,tsx}'],
  theme: {
    colors: {
      default: '#0F172A',
      input: '#475569',
      blue: '#0EA5E9',
      column: '#94A3B8',
      status: '#F1F5F9',
      white: '#FFFFFF',
    },
    fontFamily: {
      sans: ['Inter', 'sans-serif'],
    },
    extend: {
      colors: { 'grey': { DEFAULT: '#C9C9C9', dark: '#4E4E4F' } },
    },
  },
  plugins: [],
};
