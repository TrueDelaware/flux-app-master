/** @type {import('tailwindcss').Config} */
module.exports = {
  content: ["./app/**/*.{js,jsx,ts,tsx}", "./components/**/*.{js,jsx,ts,tsx}"],
  theme: {
    extend: {
      colors: {
        primary: {
          DEFAULT: "#AA5F5A",
          100: "#884C48",
        },
        secondary: {
          DEFAULT: "#410E0B",
          100: "#EACFBC",
        },
      },
    },
  },
  plugins: [],
};
