/** @type {import('tailwindcss').Config} */
module.exports = {
  content: ["*.{html,js}"],
  theme: {
    container:{
      padding:{
        DEFAULT: "15px",
      },
    },
    screens: {
      sm : "640px",
      md : "768px",
      lg : "960px",
      xl : "1200px",
    },
    fontFamily: {
      primary : "Poppins",
      secondary: "Jost",
    },
    backgroundImage:{
      hero: "url(./assets/hero/bg.jpg)",
      grid: "url(./assets/grid.png)"
    },
    extend: {
      colors:{
        primary: {
          DEFAULT: "#292f36",
          hover: "#343e4e",
        },
        secondary: '#4d5853',
        accent:  {
          DEFAULT: "#cda274",
          secondary: "#f4fDec",
          hover: "#b88c5d",
        },
      }
    },
  },
  plugins: [],
}