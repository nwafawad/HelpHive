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
          DEFAULT: '#FFD700', // Yellow (energetic, optimistic)
          hover: '#E6C200',
        },
        secondary: {
          DEFAULT: '#000000', // Black (bold, professional)
          hover: '#1A1A1A',
        },
        background: '#FFFFFF',
      },
    },
  },
  plugins: [],
}
