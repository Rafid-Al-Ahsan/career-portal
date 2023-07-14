/* eslint-disable no-undef */
/** @type {import('tailwindcss').Config} */
export default {
  content: [
    "./index.html",
    "./src/**/*.{js,ts,jsx,tsx}",
  ],
  theme: {
    extend: {
       colors: {
           primary: "#F4F4F4",
           secondary: "#9daafc",
           gradient1: '#7E90FE',
           gradient2: '#9873FF'
       },
    },
  },
  plugins: [require("daisyui")],
}

