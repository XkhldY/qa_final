/** @type {import('tailwindcss').Config} */
module.exports = {
  content: [
    "./index.html",
    "./src/**/*.{js,jsx,ts,tsx,html}"
  ],
  theme: {
    extend: {
      colors: {
        acme: {
          DEFAULT: "#134e6f",
          light: "#61a5c2",
          accent: "#ffbe40"
        }
      }
    }
  },
  plugins: []
};