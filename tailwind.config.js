/** @type {import('tailwindcss').Config} */
export default {
  content: ["./index.html", "./src/**/*.{vue,js,ts,jsx,tsx}"],
  darkMode: ["selector", '[data-mode="dark"]'],
  theme: {
    extend: {
      fontSize: {
        xxsm: ["10px", "16px"],
        xsm: ["12px", "16px"],
        sm: ["14px", "16px"],
        base: ["16px", "18px"],
        lg: ["20px", "22px"],
        xl: ["24px", "28px"],
        xxl: ["32px", "36px"],
      },
      colors: {
        primary: "#3B82F6",

        textColor: ["#000000", "#36454F"],

        bg: ["#D3D3D3"],
      },
    },
  },
  plugins: [],
};
