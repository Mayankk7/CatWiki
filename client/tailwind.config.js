/** @type {import('tailwindcss').Config} */
module.exports = {
  content: [
    "./src/**/*.{js,jsx,ts,tsx}",
  ],
  theme: {
    extend: {
      fontFamily: {
        'mystery': ['Mystery Quest', 'cursive'],
        'mont' : ['Montserrat', 'sans-serif']
      },
      backgroundImage: {
        'hero' : "url('../public/images/HeroImagelg.png')"
      }
    },
  },
  plugins: [],
}
