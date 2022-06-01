module.exports = {
  content: ['./**/*.{js,jsx,ts,tsx}'],
  theme: {
    extend: {
      colors: {
        brand: {
          orange: {
            500: '#F25D27',
          },
          blue: {
            500: '#115D8C',
          },
        },
        text: {
          title: '#123952',
          default: '#617480',
          complement: '#A0ACB2',
        },
      },
    },
    fontFamily: {
      display: ['Barlow', 'sans-serif'],
      body: ['Roboto', 'sans-serif'],
    },
  },
  plugins: [],
}
