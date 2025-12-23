/** @type {import('tailwindcss').Config} */
export default {
  content: [
    "./index.html",
    "./src/**/*.{js,ts,jsx,tsx}",
  ],
  theme: {
    extend: {
      colors: {
        brand: {
          black: '#050505',
          dark: '#0a0a0a',
          gray: '#1a1a1a',
          gold: {
            DEFAULT: '#D4AF37', // Metallic Gold
            light: '#F4E4BC',
            dark: '#996515',
            hover: '#C5A028',
          }
        }
      },
      fontFamily: {
        sans: ['Inter', 'sans-serif'],
        serif: ['Playfair Display', 'serif'],
      },
      backgroundImage: {
        'gradient-gold': 'linear-gradient(135deg, #D4AF37 0%, #F4E4BC 50%, #996515 100%)',
        'gradient-dark': 'linear-gradient(to bottom, #0a0a0a, #050505)',
      }
    },
  },
  plugins: [],
}
