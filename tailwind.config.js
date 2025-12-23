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
          gray: '#121212', // Slightly darker gray for better contrast
          surface: '#1E1E1E',
          gold: {
            DEFAULT: '#D4AF37',
            light: '#F9E5B9', // Champagne gold
            dark: '#8B6508',
            hover: '#E5C158',
          }
        }
      },
      fontFamily: {
        sans: ['Inter', 'sans-serif'],
        serif: ['Playfair Display', 'serif'],
      },
      backgroundImage: {
        'gradient-gold': 'linear-gradient(135deg, #BF953F 0%, #FCF6BA 50%, #B38728 100%, #FBF5B7 100%)',
        'gradient-dark': 'linear-gradient(to bottom, #0a0a0a, #000000)',
        'gradient-radial': 'radial-gradient(var(--tw-gradient-stops))',
      },
      animation: {
        'shimmer': 'shimmer 2.5s linear infinite',
        'float': 'float 6s ease-in-out infinite',
        'pulse-slow': 'pulse 4s cubic-bezier(0.4, 0, 0.6, 1) infinite',
      },
      keyframes: {
        shimmer: {
          '0%': { backgroundPosition: '-1000px 0' },
          '100%': { backgroundPosition: '1000px 0' },
        },
        float: {
          '0%, 100%': { transform: 'translateY(0)' },
          '50%': { transform: 'translateY(-20px)' },
        }
      }
    },
  },
  plugins: [],
}