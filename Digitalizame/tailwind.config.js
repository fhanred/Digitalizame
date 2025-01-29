export default {
  purge: ['./src/**/*.{js,jsx,ts,tsx}', './public/index.html'],
  darkMode: false, // or 'media' or 'class'
  theme: {
    extend: {
      colors: {
        colorFooter: "#2B2B2B",
        colorPreguntas: "#cccccc",
        colorLogo: "#ffb422",
        colorDetalle: "#2e5059",
        fondo: "#9c69c7"
      },
      fontSize: {
        'custom': '11rem',
        'custom2': '5rem',
        'custom3': '3rem',
      },
      fontFamily: {
        nunito: ['Nunito', 'sans-serif'],
      },
    },
  },
  variants: {
    extend: {},
  },
  plugins: [],
};
