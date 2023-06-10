/** @type {import('tailwindcss').Config} */
module.exports = {
  content: ["./src/**/*.{js,ts,jsx,tsx,liquid}", "./theme/**/*.{js,ts,jsx,tsx,liquid}"],
  darkMode: false,
  safelist: ["bg-teal-300", "border-teal-300", "hover:bg-teal-400", "hover:border-teal-400"],
  theme: {
    extend: {},
  },
  variants: {
    extend: {},
  },
  plugins: [],
}
