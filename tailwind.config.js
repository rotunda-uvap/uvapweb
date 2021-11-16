const defaultTheme = require("tailwindcss/defaultTheme")

module.exports = {
  purge: ['./src/**/*.{js,jsx,ts,tsx}'],
  theme: {
    letterSpacing: {
      tightest: '-.075em',
       tighter: '-.05em',
      tight: '-.025em',
       normal: '0',
      wide: '.1em',
       wider: '.2em',
      widest: '.3em',
     },
    extend: {
      colors: {
        transparent: 'transparent',
        current: 'currentColor',
        'ceci-gray-light': '#cecfce',
        'ceci-gray-mid': '#808080',
        'ceci-gray-dark' : '#414042',
      },
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