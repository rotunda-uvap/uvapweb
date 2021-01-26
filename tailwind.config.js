const defaultTheme = require("tailwindcss/defaultTheme")

module.exports = {
  purge: ['./src/**/*.{js,jsx,ts,tsx}'],
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