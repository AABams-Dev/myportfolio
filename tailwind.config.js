/** @type {import('tailwindcss').Config} */
export default {
  content: ["./index.html", "./src/**/*.{js,ts,jsx,tsx}"],
  theme: {
    extend: {
      colors: {
        'tg-black': '#1A1A1A',
        'tg-gray': '#F2F2F2',
        'tg-text-muted': '#999999',
      },
      letterSpacing: {
        'tg-wide': '0.3em',
      }
    },
  },
  plugins: [],
}