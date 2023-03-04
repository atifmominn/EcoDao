/** @type {import('tailwindcss').Config} */
module.exports = {
  content: [
    "./src/**/*.{js,jsx,ts,tsx}",
  ],
  theme: {
    extend: {},
  },
  plugins: [],
  theme: {
    extend: {
      colors: {
        'lime-green': '#00CC33',
        'eerie-black': '#202020',
        'jet': '#2A2A2A',
      },
    }
  },
}