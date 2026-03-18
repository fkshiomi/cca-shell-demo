/** @type {import('tailwindcss').Config} */
module.exports = {
  content: ["./src/**/*.{vue,ts,js}", "./public/index.html"],
  theme: {
    extend: {
      colors: {
        "meps-blue": "#1a3a6b",
        "meps-blue-dark": "#0f2a52",
      },
    },
  },
  plugins: [],
};
