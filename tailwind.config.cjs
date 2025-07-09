/** @type {import('tailwindcss').Config} */
module.exports = {
  content: [
    "./index.html",
    "./src/**/*.{js,ts,jsx,tsx}",
  ],
  theme: {
    extend: {
      colors: {
        primary: {
          50: '#e6f1fe',
          100: '#cce3fd',
          200: '#99c7fb',
          300: '#66aaf9',
          400: '#338ef7',
          500: '#0072f5',
          600: '#005bc4',
          700: '#004493',
          800: '#002e62',
          900: '#001731',
          950: '#000b19',
        },
        secondary: {
          50: '#f2f7fd',
          100: '#e6eef9',
          200: '#cdddf3',
          300: '#b4ccee',
          400: '#9bbbe8',
          500: '#829ae2',
          600: '#6879dc',
          700: '#4e58d6',
          800: '#3437d0',
          900: '#1a16cb',
          950: '#0d0b65',
        },
        accent: {
          50: '#edfcf3',
          100: '#d3f8e0',
          200: '#aaf0c6',
          300: '#73e3a7',
          400: '#3bd086',
          500: '#1ab76c',
          600: '#0e9257',
          700: '#0c7548',
          800: '#0c5c3b',
          900: '#0a4c32',
          950: '#052b1d',
        },
        dark: {
          50: '#f6f7f9',
          100: '#ebedf2',
          200: '#d2d6e1',
          300: '#adb4c5',
          400: '#818aa4',
          500: '#636c87',
          600: '#4d556c',
          700: '#3e4559',
          800: '#343b4c',
          900: '#1a1d24',
          950: '#0d0e12',
        },
      },
      fontFamily: {
        sans: ['Inter var', 'system-ui', 'sans-serif'],
      },
      keyframes: {
        marquee: {
          '0%': { transform: 'translateX(0)' },
          '100%': { transform: 'translateX(-33.33%)' },
        }
      },
      animation: {
        marquee: 'marquee 40s linear infinite',
      },
    },
  },
  plugins: [],
} 