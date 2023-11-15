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
        'skillLogo': 'url("/skills/bg.webp")',
        'gradient-radial': 'radial-gradient(var(--tw-gradient-stops))',
        'gradient-conic':
          'conic-gradient(from 180deg at 50% 50%, var(--tw-gradient-stops))',
      },
      colors: {
        'superWhite': '#ffffff',
        'white': '#fcf5f9',
        'contact': '#d61f2c',
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
          '50': '#eff9fc',
          '100': '#d6eff7',
          '200': '#b3dfee',
          '300': '#7ec8e2',
          '400': '#349fc8',
          '500': '#268ab4',
          '600': '#237097',
          '700': '#225b7c',
          '800': '#244c66',
          '900': '#224057',
          '950': '#11293b',
        },
        'work': {
          '50': '#fef3ee',
          '100': '#fce3d8',
          '200': '#f9c3af',
          '300': '#f5997c',
          '400': '#ee5837',
          '500': '#eb3f24',
          '600': '#dd2719',
          '700': '#b71b17',
          '800': '#921a1c',
          '900': '#761819',
          '950': '#3f0b0e',
        },
      }
    },
  },
  plugins: [],
}
