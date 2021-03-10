module.exports = {
  env: {
    browser: true,
    es2021: true,
    node: true,
    jest: true,
    jquery: true,
  },
  extends: [
    "airbnb",
    "airbnb-babel",
    "eslint:recommended",
    "plugin:compat/recommended",
    "plugin:jest/recommended",
    "prettier",
    "prettier/prettier",
    "prettier/standard",
  ],
  parser: "eslint-parser",
  parserOptions: {
    ecmaVersion: 12,
    sourceType: "module",
  },
  plugins: ["@html-eslint", "jest", "json-format"],
  overrides: [
    {
      files: ["*.html"],
      parser: "@html-eslint/parser",
      extends: ["plugin:@html-eslint/recommended"],
    },
  ],
  rules: {},
};
