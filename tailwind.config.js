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
  plugins: {"@tailwindcss/postcss": {}, "@tailwindcss/typography":{},"daisyui":{}},
  daisyui: {
    themes: ["dark", "light"],
  },
}
