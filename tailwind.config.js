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
        mainblue: '#0147F5',
        orange700: '#FE8400'
      },
    },
  },
  plugins: [],
}

