module.exports = {
  root: true,
  env: {
    browser: true,
    es6: true,
    jest: true,
  },
  extends: [
    'airbnb-base',
    'eslint:recommended',
    'plugin:@typescript-eslint/recommended',
  ],
  parser: '@typescript-eslint/parser',
  rules: {
    semi: 0,
    'no-shadow': 'off',
    'import/no-unresolved': 'off',
    'import/extensions': 'off',
  },
}
