module.exports = {
  mode: 'jit',
  content: [
    "./src/**/*.{js,jsx,ts,tsx}", './public/index'
  ],
  darkMode: false,
  theme: {
    extend: {
      colors: {
        'color-primary': '#4AD575',
        'color-yellow': '#F88100',
        'color-secondary': '#107420',
        'color-white': '#f4fffd',
        'color-blue': '#011936',
      }
    },
  },
  plugins: [],
}