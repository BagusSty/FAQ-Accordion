module.exports = {
  purge: ["./index.html", "./src/**/*.{vue,js,ts,jsx,tsx}"],
  darkMode: false,
  theme: {
    extend: {
      colors: {
        softRed: "hsl(14, 88%, 65%)",
        veryDarkDesaturatedBlue: "hsl(238, 29%, 16%)",
        lightGreyishBlue: "(240, 5%, 91%)",
        veryDarkGrayishBlue: "hsl(237, 12%, 33%)",
        darkGrayishBlue: "hsl(240, 6%, 50%)",
      },
    },
  },
  variants: {
    extend: {},
  },
  plugins: [],
};
