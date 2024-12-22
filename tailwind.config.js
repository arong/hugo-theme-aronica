/** @type {import('tailwindcss').Config} */
module.exports = {
  content: ['content/**/*.md', 'layouts/**/*.html', "assets/js/*.js"],
  theme: {
    extend: {},
  },
  plugins: [require('@tailwindcss/typography'), require('daisyui')],
  daisyui: {
    themes: ["light", "dark", "cupcake"],
  },
}
