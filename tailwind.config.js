/** @type {import('tailwindcss').Config} */
module.exports = {
  content: ["./index.html", "./src/**/*.{vue,js,ts,jsx,tsx}"],
  theme: {
    extend: {
      colors: {
        'light-orange': '#f29d4b',
        'dark-orange': '#f29d4b',
      },
    },
  },
  plugins: [],
};
