/** @type {import('tailwindcss').Config} */
module.exports = {
  jit: true,
  content: ['./src/**/*.tsx'],
  theme: {
    fontSize: {
      sm: 14,
      md: 16,
      lg: 18,
      xl: 20,
      '2xl': 24,
      '3xl': 32,
    },
    colors: {
      transparent: 'transparent',
      black: '#000000',
      white: '#FFFFFF',
      gray: {
        900: '#121214',
        800: '#202024',
        400: '#7C7C8A',
        200: '#C4C4CC',
        100: '#E1E1E6',
      },
      cyan: {
        800: '#12B4EE',
        500: '#81D8F7',
        300: '#A7E2F6',
      },
    },
    extend: {
      fontFamily: {
        sans: 'Work Sans, sans-serif',
      },
    },
  },
  plugins: [],
  corePlugins: {
    preflight: false,
  }
}
