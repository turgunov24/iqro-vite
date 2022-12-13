/** @type {import('tailwindcss').Config} */
module.exports = {
  content: [
    "./index.html",
    "./src/**/*.{js,ts,jsx,tsx}",
  ],
  theme: {
    extend: {},
    screens: {
      'sm': '576px',
      'md': '720px',
      'lg': '992px',
      'xl': '1280px',
      '2xl': '1440px',
    },
    borderColor: {
      "ylw": "#f2c955",
      "green": "#00c9b6",
      "red": "#ff5d53",
      "grey": "#cac5d1"
    },
    borderWidth: {
      "5": "9px",
      "1": "1px"
    },
    backgroundColor: {
      "scroll": "#3a0ca3",
      "violet": "#3a0ca3",
      "yellow": "#f2c955",
      "green": "#00c9b6",
      "red": "#ff5d53",
      "icon": "#633FB5",
    },
    textColor: {
      "yellow": "#f2c955",
      "white":"#fff"
    }
  },
  plugins: [],
}
