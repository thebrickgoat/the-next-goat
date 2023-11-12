/** @type {import('tailwindcss').Config} */
module.exports = {
  content: [
    './pages/**/*.{js,ts,jsx,tsx,mdx}',
    './components/**/*.{js,ts,jsx,tsx,mdx}',
    './app/**/*.{js,ts,jsx,tsx,mdx}',
  ],
  theme: {
    extend: {
      fontFamily: {
        'baskerville': ['Libre Baskerville', 'serif'],
        'windows': ['windows', 'serif']
      },
      backgroundImage: {
        'gradient-radial': 'radial-gradient(var(--tw-gradient-stops))',
        'gradient-conic':
          'conic-gradient(from 180deg at 50% 50%, var(--tw-gradient-stops))',
      },
      colors: {

        'windows': {
          '50': '#eefffc',
          '100': '#c5fffa',
          '200': '#8bfff5',
          '300': '#4afef0',
          '400': '#15ece2',
          '500': '#00d0c9',
          '600': '#00a8a5',
          '700': '#008080',
          '800': '#066769',
          '900': '#0a5757',
          '950': '#003235',
        },
        'skills': {
          '50': '#edfbfe',
          '100': '#d3f2fa',
          '200': '#abe5f6',
          '300': '#72d1ee',
          '400': '#4cbde3',
          '500': '#1596c5',
          '600': '#1578a5',
          '700': '#186186',
          '800': '#1c506e',
          '900': '#1c435d',
          '950': '#0c2b40',
        },
        'work': {
          '50': '#fdfae9',
          '100': '#fbf5c6',
          '200': '#f9e88f',
          '300': '#f5d44f',
          '400': '#efbc18',
          '500': '#e0a712',
          '600': '#c1800d',
          '700': '#9a5c0e',
          '800': '#804913',
          '900': '#6d3c16',
          '950': '#3f1e09',
        },


      }
    },
  },
  plugins: [],
}
