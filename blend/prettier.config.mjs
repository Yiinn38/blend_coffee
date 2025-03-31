/** @type {import("prettier").Config} */
export default {
  printWidth: 200,
  semi: true,
  singleQuote: false,
  jsxSingleQuote: false,
  quoteProps: "as-needed",
  tabWidth: 2,
  useTabs: false,
  trailingComma: "es5",
  endOfLine: "lf",
  arrowParens: "always",
  astroAllowShorthand: false,
  tailwindConfig: "./tailwind.config.mjs",
  plugins: ["prettier-plugin-astro", "prettier-plugin-tailwindcss", "prettier-plugin-astro-organize-imports"],
  overrides: [
    {
      files: ["*.json", "*.md", "*.toml", "*.yml"],
      options: {
        useTabs: false,
      },
    },
    {
      files: "*.astro",
      options: {
        parser: "astro",
      },
    },
  ],
};
