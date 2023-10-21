/** @type {import('tailwindcss').Config} */
export default {
  content: [
    "./index.html",
    "./src/**/*.{js,jsx}"
  ],
  theme: {
    extend: {
      height: {
        "nav": "8vh",
        "main": "92vh",
      },
      maxWidth: {
        "95": "95%"
      }
    },
  },
  plugins: [],
}

