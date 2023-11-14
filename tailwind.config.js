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
        'windows': ['windows', 'serif']
      },
      backgroundImage: {
        'skillLogo': 'url("/skills/bg.png")',
        'gradient-radial': 'radial-gradient(var(--tw-gradient-stops))',
        'gradient-conic':
          'conic-gradient(from 180deg at 50% 50%, var(--tw-gradient-stops))',
      },
      colors: {
        'superWhite': '#ffffff',
        'white': '#fcf5f9',
        'contact': '#fe875f',
        'about': '#e12669',
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
          '50': '#f1f8fe',
          '100': '#e3effb',
          '200': '#c0e0f7',
          '300': '#89c7f0',
          '400': '#49aae7',
          '500': '#228fd5',
          '600': '#1578bf',
          '700': '#115b93',
          '800': '#124e7a',
          '900': '#154265',
          '950': '#0e2a43',
        },
        'work': {
          '50': '#fffbea',
          '100': '#fff1c5',
          '200': '#ffe485',
          '300': '#ffcf46',
          '400': '#ffb91b',
          '500': '#ff9500',
          '600': '#e26e00',
          '700': '#bb4a02',
          '800': '#983908',
          '900': '#7c2f0b',
          '950': '#481600',
        },
      }
    },
  },
  plugins: [],
}
