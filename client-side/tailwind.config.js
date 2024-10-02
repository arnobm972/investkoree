/** @type {import('tailwindcss').Config} */

export default {
  content: [
    "./index.html",
    "./src/**/*.{js,ts,jsx,tsx}",
  ],
  theme: {
    extend: {
      colors: {
        salmon: '#FA8072', // Original color
        salmonLight: '#FFB3A1', // Lighter version
      },
    },
  },
  plugins: [require("daisyui")],
}
