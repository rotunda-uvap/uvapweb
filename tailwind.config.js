const defaultTheme = require("tailwindcss/defaultTheme")

module.exports = {
  content: ['./src/**/*.{js,jsx,ts,tsx}','node_modules/@algolia/*' ],
  theme: {
    letterSpacing: {
      tightest: '-.075em',
       tighter: '-.05em',
      tight: '-.025em',
       normal: '0',
      booped: '.05em',
       wide: '.1em',
       wider: '.2em',
      widest: '.3em',
     },
    extend: {
      colors: {
        transparent: 'transparent',
        current: 'currentColor',
        'ceci-gray-light': '#cecfce',
        'ceci-gray-mid': '#575757', 
        'ceci-gray-dark' : '#414042',
        'greige': '#f7f7f7;'
      },
      height: {
        '500': '500px',
        '250': '250px',
      },
      fontSize :{
        sm: '.9rem',
        base: '1.15em'
      },
      fontFamily: {
        serif: ["Crimson Text", ...defaultTheme.fontFamily.serif],
        sans: ["Antonio", ...defaultTheme.fontFamily.sans],
        display: ["Quicksand", ...defaultTheme.fontFamily.sans],
        playfair: ["Playfair Display SC", "serif"],
        assistant: ["Assistant", "sans-serif"]
      },
    },
  },
  plugins: [],
}