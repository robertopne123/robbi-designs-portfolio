module.exports = {
  content: [
    "./pages/**/*.{js,ts,jsx,tsx}",
    "./components/**/*.{js,ts,jsx,tsx}",
  ],
  options: {
    safelist: ["bg-red-500", /^text-/],
  },
  theme: {
    extend: {
      colors: {
        turquoise: "#1D3E51",
        offWhite: "#F5F5F5",
      },
      fontFamily: {
        roboto: ["Roboto", "sans-serif"],
        poppins: ["Poppins", "sans-serif"],
      },
      fontSize: {
        "2xs": "10px",
      },
    },
  },
  plugins: [],
};
