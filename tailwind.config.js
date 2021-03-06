module.exports = {
  purge: ['./src/**/*.html', './src/**/*.tsx', './src/**/*.jsx'],
  darkMode: false, // or 'media' or 'class'
  theme: {
    extend: {
      boxShadow: {
        red: '0 10px 15px -3px rgba(240, 68, 68, 0.1), 0 4px 6px -2px rgba(240, 68, 68, 0.05)',
      },
      fontFamily: {
        sans: ['"Exo 2"'],
      },
      colors: {
        dark: {
          200: '#212020',
        },
      },
    },
  },
  variants: {},
  plugins: [],
}
