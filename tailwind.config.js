/** @type {import('tailwindcss').Config} */
export default {
  content: [
    "./index.html",
    "./src/**/*.{js,ts,jsx,tsx}",
  ],
  theme: {
    extend: {
      colors: {
        brand: '#D35400', // Terracota / Naranja
        dark: '#121212', // Dark mode background
      }
    },
  },
  plugins: [],
}