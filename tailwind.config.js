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
      },
    },
  },
  plugins: [require("tailwind-scrollbar-hide")],
};
