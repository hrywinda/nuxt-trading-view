module.exports = {
  semi: true,
  quoteProps: "preserve",
  trailingComma: "es5",
  printWidth: 100,
  htmlWhitespaceSensitivity: "strict",
  tabWidth: 2,
  overrides: [
    {
      files: "**/*.{css,sass,scss,yml,yaml}",
      options: {
        singleQuote: true,
      },
    },
  ],
};
