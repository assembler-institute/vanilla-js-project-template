module.exports = {
  "**/*.{js,html,json}": ["npm run lint", "npm run lint:format:check"],
  "*.{css,scss,html,md,json,yml,yaml}": ["npm run lint:format:check"],
};
