const defaultTheme = require("tailwindcss/defaultTheme")

module.exports = {
  purge: ['./src/**/*.{js,jsx,ts,tsx}'],
  theme: {
    extend: {
      fontFamily: {
        serif: ["Crimson Text", ...defaultTheme.fontFamily.serif],
        sans: ["Antonio", ...defaultTheme.fontFamily.sans],
        display: ["Quicksand", ...defaultTheme.fontFamily.sans],
      },
      backgroundImage: theme => ({
        'hero-pattern': "url('/bemiss_blue.jpg')"
       }),
    },
  },
  variants: {},
  plugins: [],
}