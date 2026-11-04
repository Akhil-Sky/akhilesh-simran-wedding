/** @type {import('tailwindcss').Config} */
export default {
  content: [
    "./index.html",
    "./src/**/*.{js,ts,jsx,tsx}",
  ],
  theme: {
    extend: {
      colors: {
        ruby: {
          50: '#FDF2F3',
          100: '#FBE6E8',
          200: '#F6CED2',
          300: '#EEA6AC',
          400: '#E1727D',
          500: '#CA4250',
          600: '#B02C3B',
          700: '#962632', // Primary Theme 5 Ruby
          800: '#7B1F2A',
          900: '#5C171F',
          950: '#3A0D13',
        },
        ivory: {
          50: '#FFFFFF',
          100: '#FAF8F5',
          200: '#F5F1EB',
          300: '#F1EDE4', // Theme 5 Ivory paper
          400: '#E6DFD3',
          500: '#D5CBB9',
        },
        gold: {
          light: '#F8E8C2',
          DEFAULT: '#D4AF37', // Royal Gold
          dark: '#AA8822',
          antique: '#C5A059',
        },
        bronze: {
          DEFAULT: '#654123',
          dark: '#4D453D',
        }
      },
      fontFamily: {
        serif: ['"Cormorant Garamond"', 'Georgia', 'serif'],
        script: ['"Alex Brush"', '"Great Vibes"', 'cursive'],
        calligraphy: ['"Imperial Script"', 'cursive'],
        cinzel: ['"Cinzel"', 'serif'],
        cinzelDeco: ['"Cinzel Decorative"', 'serif'],
        sans: ['"Montserrat"', 'sans-serif'],
      },
      boxShadow: {
        'royal': '0 10px 30px -5px rgba(150, 38, 50, 0.25), 0 0 15px 1px rgba(212, 175, 55, 0.15)',
        'envelope': '0 20px 40px -10px rgba(0, 0, 0, 0.3)',
      },
      animation: {
        'float': 'float 4s ease-in-out infinite',
        'pulse-slow': 'pulse 3s cubic-bezier(0.4, 0, 0.6, 1) infinite',
        'spin-slow': 'spin 12s linear infinite',
      },
      keyframes: {
        float: {
          '0%, 100%': { transform: 'translateY(0px)' },
          '50%': { transform: 'translateY(-10px)' },
        }
      }
    },
  },
  plugins: [],
}
