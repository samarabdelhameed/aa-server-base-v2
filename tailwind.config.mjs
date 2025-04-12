/** @type {import('tailwindcss').Config} */
export default {
  content: ['./src/**/*.{astro,html,js,jsx,ts,tsx}'],
  theme: {
    extend: {
      colors: {
        alice: '#D6E0EF',
        honeydew: '#CFDECA',
        vanilla: '#FFF0A3',
        eerie: '#212121',
        ghost: '#F6F5F3',
      },
      fontFamily: {
        urbanist: ['"Urbanist"', 'sans-serif'],
      },
    },
  },
  plugins: [require('daisyui')],
  daisyui: {
    themes: [
      {
        customLight: {
          primary: '#FFF0A3',
          secondary: '#CFDECA',
          accent: '#D6E0EF',
          neutral: '#212121',
          'base-100': '#F6F5F3',
        },
      },
    ],
    darkTheme: 'customLight',
  },
}
