/** @type {import('tailwindcss').Config} */
export default {
  content: ["./index.html", "./src/**/*.{js,jsx,ts,tsx}"],
  theme: {
    extend: {
      colors: {
        gray: {
          base: "#C8C8C8",
          medium: "#A7A6A6",
        },
        blue: {
          dark: "#1A1A3C",
        },
        red: { base: "#D40D1F" },
      },
      spacing: { 17.5: "70px", 68: "272px" },
      fontSize: {
        32: "32px",
      },
      animation: {
        "fade-in-fast": "fade-in 0.7s ease-out",
        "fade-in": "fade-in 0.9s ease-out",
        "fade-in-slow": "fade-in 1.1s ease-out",
        "fade-in-slower": "fade-in 1.3s ease-out",
        "fade-in-bottom": "fade-in-bottom 1.5s ease-out",
        "fade-in-right": "fade-in-right 1.5s ease-out",
      },
      keyframes: {
        "fade-in": {
          "0%": { transform: "translateX(-100vw)" },
          "100%": { transform: "translateX(0)" },
        },
        "fade-in-bottom": {
          "0%": { transform: "translateY(100vh)" },
          "100%": { transform: "translateY(0)" },
        },
        "fade-in-right": {
          "0%": { transform: "translateX(100vw)" },
          "100%": { transform: "translateX(0)" },
        },
      },
      screens: {
        lg: "900px",
      },
    },
  },
  plugins: [],
};
