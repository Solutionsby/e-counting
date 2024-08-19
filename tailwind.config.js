/** @type {import('tailwindcss').Config} */
export default {
  content: [
    "./index.html",
    "./src/**/*.{js,ts,jsx,tsx}",
  ],
  theme: {
    extend: {
      colors:{
        "primary":'#6EBB4B',
        "secendary":"#292940",
        "complBlack":'#06060A',
        "complWhite":"#F3F4F6"
      }
    },
  },
  plugins: [],
}

