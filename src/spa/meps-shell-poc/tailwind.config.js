/** @type {import('tailwindcss').Config} */
module.exports = {
  content: ["./src/**/*.{ts,tsx}", "./public/index.html"],
  theme: {
    extend: {
      colors: {
        meps: {
          blue: "#4472C4",
          "blue-light": "#6B8FD4",
          "blue-dark": "#3A5FA8",
          gray: "#F2F2F2",
          "gray-dark": "#E0E0E0",
        },
      },
    },
  },
  plugins: [],
};
