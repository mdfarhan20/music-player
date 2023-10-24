/** @type {import('tailwindcss').Config} */
export default {
  content: [
    "./index.html",
    "./src/**/*.{js,jsx}"
  ],
  theme: {
    colors: {
      "primary": "#8743ff",
      "white" :"#FFFFFF",
      "background": "#212121",
      "surface": "#171717"
    },

    extend: {
      borderWidth: {
        "1": "1px"
      },
      gridTemplateColumns: {
        "split": "22rem auto"
      },
      height: {
        "nav": "10vh",
      },
      fontFamily: {
        "notosans": "'Noto Sans', sans-serif",
      }
    }
  },
  plugins: [],
}

