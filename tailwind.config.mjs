/** @type {import('tailwindcss').Config} */
export default {
  content: ['./src/**/*.{astro,html,js,jsx,ts,tsx}'],
  theme: {
    extend: {
      colors: {
        navy: '#0d1b2a',
        'navy-mid': '#162334',
        'navy-dark': '#060f18',
        orange: '#f7941d',
        'orange-dark': '#e07d0a',
        offwhite: '#faf8f4',
        warm: '#fff8f0',
      },
      fontFamily: {
        montserrat: ["'Montserrat'", 'sans-serif'],
        inter: ["'Inter'", 'sans-serif'],
        playfair: ["'Playfair Display'", 'serif'],
        oswald: ["'Oswald'", 'sans-serif'],
      },
    },
  },
  plugins: [],
};
