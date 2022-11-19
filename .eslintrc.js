module.exports = {
  env: {
    browser: true,
    es2021: true,
  },
  extends: [
    'plugin:react/recommended',
    'standard-with-typescript',
    'prettier',
    'airbnb',
  ],
  overrides: [],
  parserOptions: {
    ecmaVersion: 'latest',
    sourceType: 'module',
    ecmaFeatyres: { jsx: true },
    // project: ['./tsconfig.json'],
  },
  plugins: ['react', '@typescript-eslint', 'import', 'react-hooks'],
  rules: {
    quotes: ['warn', 'single'],
    'import/extensions': ['warn', 'never'],
    'react/jsx-filename-extension': [2, { extensions: ['.ts', '.tsx'] }],
    'react/funcion-component-definition': [0],
  },
};
