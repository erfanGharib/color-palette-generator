module.exports = {
  content: [
    './public/index.html',
    './src/**/*.jsx',
    './src/icons/*.jsx',
  ],
  theme: {
    extend: {
      width: {
        66: '17.3rem',
        97: '25.2rem',
        '5.5/12': '48.3%',
        '2.5/6': '36.5%'
      },
      top: {
        '-':'1px'
      }
    },
  },
  plugins: [],
}
