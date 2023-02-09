/** @type {import('tailwindcss').Config} */
module.exports = {
  content: [
    "./index.html",
    "./src/**/*.{js,ts,jsx,tsx}",
  ],
  theme: {
    extend: {},
    screen: {
      'xlg': {'max': '1200px'},
      'xl': {'max': '991px'},
      'md': {'max': '767px'},
      'sm': {'max': '550px'},
      'xsm': {'max': '375px'}
    },
    fontFamily: {
      sofia: ['Sofia Sans', 'sans-serif']
    }
    
  },
  plugins: [],
}