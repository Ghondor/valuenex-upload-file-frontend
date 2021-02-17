module.exports = {
  purge: ['./src/**/*.{js,jsx,ts,tsx}', './public/index.html'],
  darkMode: false, // or 'media' or 'class'
  theme: {
    extend: {
      colors: {
        main: '#008eff'
      }
    },
  },
  variants: {
    extend: {},
  },
  plugins: [],
}
