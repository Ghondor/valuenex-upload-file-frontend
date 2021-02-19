module.exports = {
  purge: ['./src/**/*.{js,jsx,ts,tsx}', './public/index.html'],
  darkMode: false, // or 'media' or 'class'
  theme: {
    extend: {
      colors: {
        main: '#008eff',
        title: '#505565',
        'temp-grey': {
          '100': '#fafafc',
          '200': '#eeeeef',
          '300': '#dadada',
          '400': '#a1a4b1',
          '500': '#505565',
          '600': '#2c2c2c',
        }
      }
    },
  },
  variants: {
    extend: {},
  },
  plugins: [],
}
