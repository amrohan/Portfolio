module.exports = {
  purge: ["./pages/**/*.{js,ts,jsx,tsx}", "./components/**/*.{js,ts,jsx,tsx}"],
  darkMode: "media", // or 'media' or 'class'
  theme: {
    extend: {
      colors: {
        // added custom darl color
        gray: {
          950: "#121212",
          940: "#1c1c1c",
          930: "#212121",
          920: "#242424",
        },
        hero: {
          100: "#0d1117",
        },
      },
    },
  },
  variants: {
    extend: {},
  },
  plugins: [],
};
