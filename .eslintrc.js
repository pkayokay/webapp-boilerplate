module.exports = {
  "parser": "babel-eslint",
  "extends": "eslint:recommended",
  "rules": {
    "space-before-blocks": ["error", "always"],
    "keyword-spacing": ["error", { "after": true, "before": true }],
    "space-before-function-paren": ["error", "never"],
    "lines-between-class-members": ["error", "always"],
    "padded-blocks": ["error", "never"],
    "indent": ["error", 2],
    "semi": ["error", "never"],
    "quotes": ["error", "single"],
    "no-unused-vars": ["error", { "vars": "all", "args": "none" }],
    "no-trailing-spaces": ["error"],
    "no-multiple-empty-lines": ["error", { "max": 1 }],
    "prefer-const": ["error"],
    "getter-return": ["error"],
    "curly": ["error", "multi-line"]
  },
  "env": {
    "browser": true,
    "node": true,
    "es6": true
  }
};