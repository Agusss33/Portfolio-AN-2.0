module.exports = {
  darkMode: "class", // o 'media' si prefieres el modo oscuro basado en las preferencias del sistema
  content: ["./src/**/*.{js,jsx,ts,tsx}"],
  theme: {
    extend: {
      fontFamily: {
        //esta es la preterminada que esta customizada reemplazada por montserrat
        sans: ["Montserrat", "sans-serif"],
      },
    },
  },
  plugins: [],
};
