/** @type {import("prettier").Options} */
module.exports = {
  trailingComma: "none",
  tabWidth: 2,
  semi: true,
  singleQuote: false,
  endOfLine: "auto",
  bracketSpacing: true,
  arrowParens: "always",
  bracketSameLine: true,
  printWidth: 120,
  htmlWhitespaceSensitivity: "ignore",
  plugins: ["prettier-plugin-astro"],
  overrides: [
    {
      files: "*.astro",
      options: {
        parser: "astro"
      }
    }
  ]
};
