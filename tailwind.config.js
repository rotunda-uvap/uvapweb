const defaultTheme = require("tailwindcss/defaultTheme")

module.exports = {
  theme: {
    extend: {
      fontFamily: {
        serif: ["Merriweather", ...defaultTheme.fontFamily.serif],
        sans: ["Montserrat", ...defaultTheme.fontFamily.sans],
      },
      backgroundImage: theme => ({
        'hero-pattern': "url('/bemiss_blue.jpg')"
       }),
    },
  },
  variants: {},
  plugins: [],
}