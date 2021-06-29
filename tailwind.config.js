const production = !process.env.ROLLUP_WATCH;
module.exports = {
  mode: 'jit',
  purge: { content: [
  './src/index.html',
  './src/**/*.{js,svelte}'
  ], 
  safelist: [
    'bg-photography',
    'bg-graphic-design',
    'bg-photography-mobile',
    'bg-graphic-design-mobile',
    'bg-light-yellow',
    'bg-light-red',
    'text-dark-blue',
    'text-mid-blue',
    'text-dark-green',
    'text-mid-green',
  ]},
  darkMode: false, // or 'media' or 'class'
  theme: {
    extend: {
      colors: {
        'darkest-blue': '#24303E',
        'smokey-white': '#F2F2F2',
        'smokey-gray': '#808397',
        'light-yellow': '#FAD400',
        'light-red': '#FE7766',
        'dark-green': '#24554A',
        'mid-green': '#3E7467',
        'dark-blue': '#052C3B',
        'mid-blue': '#19536C',
        'light-gray': '#A7AAAD',
        'flat-green': '#90D4C6',
        'footer-green': '#2C7566'
      },
       spacing: {
          '18': '4.5rem',
          '35': '8.75rem',
          '100': '25rem',
          '118': '29.5rem',
          '150': '37.5rem',
          '200': '50rem',
          '360': '90rem'
       },
       backgroundImage: {
        'header': "url('/images/desktop/image-header.jpg')",
        'header-mobile': "url('/images/mobile/image-header.jpg')",
        'graphic-design': "url('/images/desktop/image-graphic-design.jpg')",
        'graphic-design-mobile': "url('/images/mobile/image-graphic-design.jpg')",
        'photography': "url('/images/desktop/image-photography.jpg')",
        'photography-mobile': "url('/images/mobile/image-photography.jpg')"
       }
    },
  },
  variants: {
    extend: {
      animation: ['hover'],
    },
  },
  plugins: []
}
