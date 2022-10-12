/** @type {import('tailwindcss').Config} */
module.exports = {
  content: ["./index.html", "./src/**/*.{vue,js,ts,jsx,tsx}"],
  theme: {
    extend: {
      colors: {
        'light-green': '#047b04',
        'dark-green': '#044704',
        'modal-opacity': 'rgba(0,0,0,0.4)',
      },
    },
  },
  plugins: [],
};
