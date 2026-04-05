/** @type {import('tailwindcss').Config} */
export default {
  content: ['./index.html', './src/**/*.{js,jsx,ts,tsx}'],
  theme: {
    extend: {
      fontFamily: {
        sans: ['Inter', 'sans-serif'],
        display: ['"Space Grotesk"', 'sans-serif'],
      },
      colors: {
        void: '#050810',
        surface: '#0c0f1a',
        card: '#101520',
      },
      animation: {
        'float-slow': 'float 25s ease-in-out infinite',
        'float-medium': 'float 20s ease-in-out infinite -8s',
        'float-fast': 'float 18s ease-in-out infinite -14s',
        'cursor-blink': 'blink 1s step-end infinite',
        'bounce-slow': 'bounce-down 2.5s ease-in-out infinite',
        'spin-slow': 'spin 10s linear infinite',
        'gradient-shift': 'gradient-shift 8s ease infinite',
      },
      keyframes: {
        float: {
          '0%, 100%': { transform: 'translate(0, 0) scale(1)' },
          '33%': { transform: 'translate(35px, -25px) scale(1.06)' },
          '66%': { transform: 'translate(-20px, 15px) scale(0.94)' },
        },
        blink: {
          '0%, 100%': { opacity: '1' },
          '50%': { opacity: '0' },
        },
        'bounce-down': {
          '0%, 100%': { transform: 'translateY(0)' },
          '50%': { transform: 'translateY(10px)' },
        },
        'gradient-shift': {
          '0%, 100%': { 'background-position': '0% 50%' },
          '50%': { 'background-position': '100% 50%' },
        },
      },
    },
  },
  plugins: [],
}
