/** @type {import('tailwindcss').Config} */
module.exports = {
  content: ["./public/**/*.{html,js}"],
  theme: {
    extend: {
      colors: {
        primary: '#262E40ff',
        'picton-blue': '#1DA5E1ff',
        'mikado-yellow': '#FBC205ff',
        'orange-peel': '#FF9F03ff',
      },
      fontFamily: {
        lato: ['Lato'],
      }
    },
  },
  plugins: [],
}

