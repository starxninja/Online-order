/** @type {import('tailwindcss').Config} */
export default {
  content: [
    "./index.html",
    "./src/**/*.{js,ts,jsx,tsx}",
  ],
  theme: {
    extend: {
      colors: {
        primary: {
          DEFAULT: '#1E3A8A',
          50: '#F3F4F6',
          100: '#DBEAFE',
          500: '#1E3A8A',
          600: '#1E40AF',
          700: '#1E293B',
        },
        secondary: {
          DEFAULT: '#F59E0B',
          600: '#D97706',
        },
        accent: {
          DEFAULT: '#10B981',
        },
        neutral: {
          DEFAULT: '#F3F4F6',
        },
        text: {
          DEFAULT: '#111827',
        },
        white: '#FFFFFF',
      },
      fontFamily: {
        sans: ['Poppins', 'Inter', 'system-ui', 'sans-serif'],
      },
    },
  },
  plugins: [],
}