module.exports = {
  content: [
    "./components/**/*.{vue,js,ts}",
    "./layouts/**/*.vue",
    "./pages/**/*.vue",
    "./app.vue"
  ],
  plugins: [],
  darkMode: 'class',
  theme: {
  extend: {
    keyframes: {
      float: {
        '0%, 100%': { transform: 'translateY(-2px) rotate(-1deg)' },
        '50%': { transform: 'translateY(2px) rotate(1deg)' },
        },
      },
    },
  },
}