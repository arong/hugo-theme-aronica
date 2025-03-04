/** @type {import('tailwindcss').Config} */
module.exports = {
  content: ['layouts/**/*.html', "assets/js/*.js"],
  theme: {
    extend: {
      typography: (theme) => ({
        DEFAULT: {
          css: {
            a: {
              textDecoration: 'underline',
              textDecorationColor: theme('colors.gray.500'),
              textUnderlineOffset: '4px', // 全局下划线偏移
            },
          },
        },
      }),
    },
  },
  plugins: [require('@tailwindcss/typography'), require('daisyui')],
  daisyui: {
    themes: ["corporate", "dark", "light", "dracula"],
  },
}
