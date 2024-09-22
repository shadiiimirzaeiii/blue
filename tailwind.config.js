const { only } = require("node:test");

/** @type {import('tailwindcss').Config} */
module.exports = {
  reactStrictMode: false,
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
        seachnavbarborder: "1px solid #94A3B8",
        searchnavbarbg: "#F8FAFC",
        aboutuscolor: "#575757",
        focusoutline: "#4383FE",
        dropdownbg: "#F5F8FC",
        dropdownhover: "#E3ECFC",
        cardsbg: "#FAFAFA",
        imageslider: "#EF550A",
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
        cardshadow: "0px 5px 20px 0px rgba(0, 0, 0, 0.1)",
        contactusshadow: "0px 0px 40px 0px rgba(0, 0, 0, 0.05)",
      },
      fontFamily: {
        regular: "var(--font-regular)", // Regular font
        bold: "var(--font-bold)", // Bold font
        customsm: "12px",
      },
      radius: {
        navbarradius: "20px, 20px, 0px, 0px",
      },
      screens: {
        lg: { min: "1024px", max: "1279px" },

        xlcustom: { min: "1280px", max: "1535px" },

        twoxl : { min: " 1536px" },
      },
    },
  },
  plugins: [require("tailwind-scrollbar-hide")],
};
