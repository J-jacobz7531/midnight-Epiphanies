/** @type {import('tailwindcss').Config} */
export default {
  content: [
    "./index.html",
    "./src/**/*.{js,ts,jsx,tsx}",
    "./components/**/*.{js,ts,jsx,tsx}",
    "./*.{js,ts,jsx,tsx}"
  ],
  theme: {
    extend: {
      fontFamily: {
        'sans': ['Poppins', 'sans-serif'],
        'serif': ['Cormorant Garamond', 'serif'],
      },
      colors: {
        'ig-dark': '#141d21',
        'ig-dark-gray': '#2c3133',
        'ig-off-white': '#f2f2f0',
        'ig-accent-teal': '#84bfc7',
        'ig-accent-orange': '#faaf40',
      }
    },
  },
  plugins: [],
}
