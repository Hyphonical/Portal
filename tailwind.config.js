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
      animation: {
        bob: 'bob 6s ease-in-out infinite',
      },
      keyframes: {
        bob: {
          '0%, 100%': {
            transform: 'translateY(-2%)',
          },
          '50%': {
            transform: 'translateY(2%)',
          },
        },
      },
    },
  },
}