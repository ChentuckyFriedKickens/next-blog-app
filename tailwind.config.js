/** @type {import('tailwindcss').Config} */

module.exports = {
  content: [
    "./**.html",
    "./pages/**.{tsx,jsx,ts,js}",
    "./components/**.{tsx,jsx,ts,js}",
  ],
  theme: {
    extend: {
      screens: {
        mdlg: "1280px",
        xlg: "1600px",
      },
      colors: {
        dodgerBlue: "#0070f3",
      },
    },
  },
  plugins: [],
};
