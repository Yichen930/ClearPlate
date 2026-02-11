/** @type {import('tailwindcss').Config} */
export default {
  content: [
    "./index.html",
    "./src/**/*.{js,ts,jsx,tsx}",
  ],
  darkMode: "class",
  theme: {
    extend: {
      colors: {
        "primary": "#4CAF50",
        "background-light": "#f6f7f6",
        "background-dark": "#151d15",
        "scanning": "#00ff41",
        "neutral-green": "#4a5d4b",
      },
      fontFamily: {
        "display": ["Epilogue", "sans-serif"],
      },
      borderRadius: {
        "DEFAULT": "0.25rem",
        "lg": "0.5rem",
        "xl": "0.75rem",
        "full": "9999px"
      },
    },
  },
  plugins: [],
}
