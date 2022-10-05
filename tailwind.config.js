/** @type {import('tailwindcss').Config} */
module.exports = {
  content: ["./index.html", "./src/**/*.{vue,js,ts,jsx,tsx}"],
  theme: {
    extend: {
      colors: {
        'light-orange': '#f29d4b',
        'dark-orange': '#ed6f33',
        'modal-opacity': 'rgba(0,0,0,0.4)',
      },
    },
  },
  plugins: [],
};
