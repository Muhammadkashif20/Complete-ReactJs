/** @type {import('tailwindcss').Config} */
export default {
  content: [
    "./index.html",
    "./src/**/*.{js,ts,jsx,tsx}",
  ],
  theme: {
    extend: {
      colors:{
        // light colors
        skyBlue: '#E0F7FA',
        mintGreen: '#E8F5E9',
        lavender: '#F3E5F5',
        peach: '#FFE0B2',
        lightGray: '#F5F5F5',
        charcoal: '#263238',
        navyBlue: '#0D47A1',
        // dark colors
        charcoal: '#263238',
        midnightBlue: '#1A237E',
        forestGreen: '#2E7D32',
        darkTeal: '#004D40',
        deepPurple: '#4A148C',
        navyBlue: '#0D47A1',
        steelGray: '#37474F',
        burgundyRed: '#880E4F',
      }
    },
  },
  plugins: [],
}