/** @type {import('tailwindcss').Config} */
module.exports = {
  content: ['./src/**/*.{html,js}'],
  theme: {
    extend: {
      colors: {
        blue: '#1b98e0',
        yellow: '#f5c61e',
        'yellow-light': '#f6cf41',
        'blue-dark': 'color(display-p3 0 .478 1)',
        white: '#fff',
        'white-grey': 'color(display-p3 .974 .98 .98)',
        'white-transparent': '#ffffff8c',
        'white-transparent-2': '#ffffff1a',
        grey: 'color(display-p3 .424 .463 .494)',
        green: 'color(display-p3 .7569 1 .5294)',
        black: 'rgb(33, 37, 41)'
      },
      fontFamily: {
        sans: ['Helvetica Neue', 'Arial', 'sans-serif'],
      },
      minWidth: {
        '340': '340px',
      },
    },
  },
  plugins: [],
}

