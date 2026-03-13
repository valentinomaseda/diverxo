/** @type {import('tailwindcss').Config} */
export default {
  content: [
    "./index.html",
    "./src/**/*.{js,ts,jsx,tsx}",
  ],
  theme: {
    extend: {
      colors: {
        brand: '#D35400', // Terracota cálido
        dark: '#0a0a09', // Negro mas profundo (off-black)
        surface: 'rgba(24, 24, 27, 0.4)', // Fondo de tarjetas opaco Zinc-900/40
      },
      fontFamily: {
        serif: ['"Cormorant Garamond"', 'serif'], // Títulos elegantes
        sans: ['"Montserrat"', 'sans-serif'], // Cuerpo espaciado y moderno
      },
      backgroundImage: {
        'noise': "url('https://grainy-gradients.vercel.app/noise.svg')", // Textura sutil
        'hero-gradient': "linear-gradient(to bottom, transparent, #0a0a09)",
      },
      boxShadow: {
        'glow': '0 0 40px -10px rgba(211, 84, 0, 0.4)', // Sombra para hover
        'glass': '0 8px 32px 0 rgba(0, 0, 0, 0.37)'
      }
    },
  },
  plugins: [],
}