module.exports = {
  root: true,
  env: {
    browser: true,
    es2021: true,
    node: true,
  },
  parser: '@typescript-eslint/parser',
  parserOptions: {
    ecmaVersion: 'latest',
    sourceType: 'module',
    ecmaFeatures: { jsx: true },
  },
  plugins: ['@typescript-eslint', 'sonarjs'],
  extends: [
    'eslint:recommended',
    'plugin:@typescript-eslint/recommended',
    'plugin:sonarjs/recommended',
  ],
  rules: {
    complexity: ['error', 15],
    'sonarjs/cognitive-complexity': ['error', 20],
    'sonarjs/no-duplicate-string': ['warn', 5],
    'no-console': ['error', { allow: ['warn', 'error'] }],
    'no-await-in-loop': 'error',
    'no-extra-boolean-cast': 'error',
    'no-nested-ternary': 'error',
  },
  ignorePatterns: ['**/dist/**', '**/node_modules/**', 'storybook/**'],
};
