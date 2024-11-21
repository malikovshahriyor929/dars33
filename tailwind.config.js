/** @type {import('tailwindcss').Config} */
module.exports = {
  content: ["./**/*.{html,js}"],
  theme: {
    extend: {
      fontFamily: {
        roboto: "Roboto, sans-serif",
      },
      boxShadow: {
        navbar_shadow: "0 2px 4px 0 rgba(0, 0, 0, 0.07)",
      },
    },
  },
  plugins: [],
};
