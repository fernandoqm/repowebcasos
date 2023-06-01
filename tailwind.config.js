/** @type {import('tailwindcss').Config} */
module.exports = {
  content: [
    "./index.html",
    "./src/**/*.{html,jsx,js,ts,tsx}"
  ],
  theme: {
    extend: {
      colors: {
        primary : "#EE6C4D",
        iconosMenu: "#F3E822",
        borde:"#CFF153",
        fondo: "#1426B9",
        secondary: {
          100: "#1E1F25",
          900: "#131517",
        },

      }
    },
  },
  plugins: [],
}
