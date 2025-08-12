/** @type {import('tailwindcss').Config} */
export default {
  content: ['./index.html', './src/**/*.{js,jsx,ts,tsx}'],
  theme: {
    extend: {
      colors: {
        dinamita: {
          red: '#EF4444',
          dark: '#0B0B0B',
          light: '#F5F5F5'
        }
      },
      boxShadow: {
        soft: '0 10px 30px rgba(0,0,0,0.25)'
      },
      borderRadius: {
        '2xl': '1.25rem'
      }
    },
  },
  plugins: [],
}
