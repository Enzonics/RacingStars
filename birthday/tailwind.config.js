/** @type {import('tailwindcss').Config} */
module.exports = {
  content: [
    "./src/**/*.{js,jsx,ts,tsx}",
  ],
  theme: {
    extend: {},
    container: {
      center: true,
      
    },
    card: {
      center: true,
    },
    colors: {
      'grey': '#0681B1',
      'white': '#FFFFFF'
    }
  },
  plugins: [],
}
