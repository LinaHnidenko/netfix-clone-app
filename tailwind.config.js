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
      screens: {
        lg: "900px",
      },
    },
  },
  plugins: [],
};
