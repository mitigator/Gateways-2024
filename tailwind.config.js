/** @type {import('tailwindcss').Config} */
export default {
  content: [
    "./index.html",
    "./src/**/*.{js,ts,jsx,tsx}",
  ],
  theme: {
    extend: {
      fontFamily: {
        'bruno-ace': ['"Bruno Ace"', 'sans-serif'],
      },
    },
    colors:{
      'Hero-text' : '#F0183F',
      'White' : '#FFFFFF' 
    }
  },
  plugins: [],
}