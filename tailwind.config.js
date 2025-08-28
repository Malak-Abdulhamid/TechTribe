/** @type {import('tailwindcss').Config} */
module.exports = {
  content: [
    "./main/**/*.html",
    "./levels/**/*.html"
  ],
  theme: {
    extend: {
      fontFamily: {
        source: ['"Source Sans Pro"', 'sans-serif'],
      },
    },
  },
  plugins: [],
}
