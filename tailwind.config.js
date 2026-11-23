/** @type {import('tailwindcss').Config} */
module.exports = {
  content: ['./index.html'],
  theme: {
    extend: {
      colors: { ink: '#121214', card: '#1E1E22', acc: '#FF5500' },
      fontFamily: { sans: ['Inter', 'system-ui', 'Segoe UI', 'Arial', 'sans-serif'] }
    }
  },
  plugins: []
};
