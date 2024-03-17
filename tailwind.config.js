/** @type {import('tailwindcss').Config} */
export default {
  content: [
    "./index.html",
    "./src/**/*.{js,ts,jsx,tsx}",
  ],
  theme: {
    fontFamily: {
      Bergens: ['Bergen Sans','sans-serif'],
    },
    backgroundImage: {
      fondo: "url('/src/assets/images/fondo.png')",
  },
  colors: {
   brown: '#523621',
   red:'#E91D24',
   white:'#FFFFFF',
   grey: '#EBEBEB',
   greyletters: '#6F6F6F',
  },
},
  plugins: [],
}