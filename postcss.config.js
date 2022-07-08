module.exports = {
  plugins: [
    process.env.NODE_ENV === 'production'
      ? [
          '@fullhuman/postcss-purgecss',
          {
            content: [
              './src/pages/**/*.{js,jsx,ts,tsx}',
              './src/components/**/*.{js,jsx,ts,tsx}',
            ],
            safelist: ['emoji-mart', /^emoji-mart-/],
            defaultExtractor: (content) =>
              content.match(/[\w-/:]+(?<!:)/g) || [],
          },
        ]
      : undefined,
    'postcss-preset-env',
  ],
};
