export default {
  purge: ['./src/**/*.{js,jsx,ts,tsx}', './public/index.html'],

  theme: {
    extend: {
      colors:{
        colorFooter:"#2B2B2B",
        colorPreguntas:"#cccccc",
        colorLogo:"#ffb422",
        colorDetalle:"#2e5059",
        fondo:"#9c69c7"
      },
      fontSize: {
        'custom': '11rem', // Ajusta este valor según tus necesidades
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
}
