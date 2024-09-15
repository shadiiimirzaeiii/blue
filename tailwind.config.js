const { only } = require('node:test')

/** @type {import('tailwindcss').Config} */
module.exports = {
  content: [
    "./app/**/*.{js,ts,jsx,tsx,mdx}",
    "./components/**/*.{js,ts,jsx,tsx,mdx}",
  ],
  theme: {
    extend: {
      colors: {
        mainblue: " #3F83F8",
        orange700: "#FE8400",
        footerbackground: "#141414",
        customlightblue: "rgba(227, 236, 252, 1)",
        advancedsearchborder: "#F1F5F9",
        searchtextcolor: "#64748B",
        buttonborder: "#F1F5F9",
        seachnavbarborder: "1px solid #F1F5F9",
        aboutuscolor: '#575757'
      },
      height: {
        footerheight: "400px",
      },
      width: {
        searchcardwidth: "536px",
      },
      boxShadow: {
        left: "-1px 0 2px #00000080 ",
        buttonshadow: "0px 1px 3px 0px rgba(30, 41, 59, 0.5)",
        cardshadow:'0px 5px 20px 0px rgba(0, 0, 0, 0.1)',
        contactusshadow: '0px 0px 40px 0px rgba(0, 0, 0, 0.05)',

      },
        fontFamily: {
        regular: 'var(--font-regular)', // Regular font
        bold: 'var(--font-bold)',       // Bold font
      },
      radius: {
        navbarradius: '20px, 20px, 0px, 0px'
      },
        screens: {
    'xlcustom' : {'min': '1280px', 'max' : '1439px'},
      xxl : {"min":'1440px'}
     
        },
    },
  },
  plugins: [require("tailwind-scrollbar-hide")],
};
