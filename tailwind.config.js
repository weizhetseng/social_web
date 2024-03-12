/** @type {import('tailwindcss').Config} */
export default {
  content: ['./index.html', './src/**/*.{vue,js,ts,jsx,tsx}'],
  theme: {
    container: {
      padding: '20px',
      center: true
    },
    extend: {
      colors: {
        main: '#EFECE7',
        black1: '#000400',
        blue1: '#03438D',
        blue2: '#E2EDFA',
        red1: '#F57375',
        red2: '#DE4B63',
        gray1: '#A8B0B9',
        gray2: '#808080',
        gray3: '#9B9893',
        gray4: '#707070',
        yellow1: '#FAA722',
        yellow2: '#EEC32A',
        green1: '#83C51D'
      },
      spacing: {
        4.5: '18px',
        7.5: '30px',
        11: '44px',
        12.5: '50px',
        25: '100px',
        38: '152px'
      },
      boxShadow: {
        shadow_black: '-2px 2px 0 #000400',
        shadow_black2: '0px 3px 0 #000400',
        shadow_gray: '-8px 8px 0 #00040029'
      },
      backgroundImage: {
        grid: "url('../assets/img/bg.svg')",
        angleD: "url('../assets/img/angleD.svg')"
      },
      backgroundPosition: {
        'right-4': 'right 16px center'
      },
      backgroundSize: {
        5: '20px 20px'
      }
    }
  },
  plugins: []
}
