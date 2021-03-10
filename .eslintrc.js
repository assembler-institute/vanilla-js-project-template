module.exports = {
  env: {
    browser: true,
    es2021: true,
    node: true,
    jest: true,
    jquery: true,
  },
  extends: [
    "eslint:recommended",
    "plugin:compat/recommended",
    "plugin:jest/recommended",
    "prettier",
    "prettier/prettier",
  ],
  parser: "@babel/eslint-parser",
  parserOptions: {
    ecmaVersion: 12,
    sourceType: "module",
    requireConfigFile: "false",
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
