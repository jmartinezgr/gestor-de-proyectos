/** @type {import('tailwindcss').Config} */
export default {
  content: [
    "./index.html",
    "./src/**/*.{js,ts,jsx,tsx}",
  ],
  theme: {
    extend: {
      screens: {
        '2xl': '1280px', // Pantallas extra grandes
        'lg': '1160px',  // Pantallas grandes
        'md': '1040px',   // Pantallas medianas
        'sm': '900px',   // Pantallas pequeñas
        'xs': '790px',   // Pantallas extra pequeñas
      },
    },
  },
  plugins: [],
}

