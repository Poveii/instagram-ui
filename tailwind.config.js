/** @type {import('tailwindcss').Config} */
export default {
  content: ['./index.html', './src/**/*.{js,ts,jsx,tsx}'],
  theme: {
    extend: {
      fontFamily: {
        roboto: 'var(--font-roboto)',
      },
      backgroundImage: {
        gradient:
          'radial-gradient(var(--first-gradient)), radial-gradient(var(--second-gradient))',
      },
      colors: {
        gray: {
          200: '#C7C7C7',
          400: '#8E8E8E',
          500: '#737373',
          700: '#262626',
        },
        blue: '#0095F6',
        red: '#FF3040',
      },
    },
  },
  plugins: [],
}
