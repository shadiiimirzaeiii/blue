/** @type {import('tailwindcss').Config} */
module.exports = {
  content: [
    "./app/**/*.{js,ts,jsx,tsx,mdx}",
    "./components/**/*.{js,ts,jsx,tsx,mdx}",
  ],
  theme: {
    extend: {
        colors: {
        // Define your custom colors
        mainblue: ' #3F83F8',
        orange700: '#FE8400',
        footerbackground : '#141414',
         customlightblue : 'rgba(227, 236, 252, 1)',
         advancedsearchborder: '#F1F5F9',
         searchtextcolor : '#64748B',
         boxshadowsearch : "#00000180"
      
       
      },
      height:{
         footerheight : "400px"
      },
      width:{
        searchcardwidth: "536px" 
      }
    },
  },
  plugins: [],
}

