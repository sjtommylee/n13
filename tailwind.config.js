const plugin = require("tailwindcss/plugin");

module.exports = {
  // mode: "jit",
  darkMode: ["class", '[data-theme="dark"]'],
  content: ["!.node_modules", "./app/**/*.{js,ts,jsx,tsx}"],
  theme: {
    container: {
      center: true,
    },
    screens: {
      // desktop: "1200px",
      // tablet: "960px",
      // small: "375px",
    },
    extend: {
      fontFamily: {
        default: [],
      },
      fontSize: {
        default: "",
        xs: "",
        sm: "",
        lg: "",
        xl: "",
      },
      keyframes: {},
      colors: {
        gray: {
          100: "#f7fafc",
          200: "#edf2f7",
          300: "#e2e8f0",
          400: "#cbd5e0",
          500: "#a0aec0",
          600: "#718096",
          700: "#4a5568",
          800: "#2d3748",
          900: "#1a202c",
        },
        blue: {},
      },
    },
  },
  plugins: [],
};
