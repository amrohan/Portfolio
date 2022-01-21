module.exports = {
  plugins: ["tailwindcss", "postcss-preset-env"],
  // minifying the css
  ...(process.env.NODE_ENV === "production" ? { cssnano: {} } : {}),
};
