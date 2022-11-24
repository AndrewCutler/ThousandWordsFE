module.exports = {
  env: {
    browser: true,
    es2021: true,
  },
  extends: [
    'plugin:react/recommended',
    'standard-with-typescript',
    'airbnb',
    'plugin:import/errors',
    'plugin:import/warnings',
    'plugin:import/typescript',
    'prettier',
  ],
  overrides: [
    {
      files: ['**/*.ts', '**/*.tsx'],
      plugins: ['@typescript-eslint'],
      extends: ['eslint:recommended', 'plugin:@typescript-eslint/recommended'],
      parser: '@typescript-eslint/parser',
      parserOptions: {
        project: ['./tsconfig.json'],
      },
    },
  ],
  parserOptions: {
    ecmaVersion: 'latest',
    sourceType: 'module',
    ecmaFeatyres: { jsx: true },
    project: ['./tsconfig.json'],
  },
  plugins: ['react', '@typescript-eslint', 'import', 'react-hooks'],
  rules: {
    'no-return-await': [0],
    'implicit-arrow-linebreak': [0],
    'object-curly-newline': [0],
    'max-len': [
      'error',
      {
        code: 100,
        tabWidth: 4,
        ignoreUrls: true,
        ignoreTemplateLiterals: true,
      },
    ],
    '@typescript-eslint/strict-boolean-expressions': 'off',
    'react/require-default-props': [0],
    '@typescript-eslint/quotes': [
      'error',
      'single',
      {
        allowTemplateLiterals: true,
      },
    ],

    '@typescript-eslint/no-misused-promises': [
      'error',
      {
        checksVoidReturn: false,
      },
    ],
    'react/no-unstable-nested-components': [
      'warn',
      {
        allowAsProps: true,
      },
    ],
    'jsx-quotes': ['warn', 'prefer-single'],
    quotes: ['warn', 'single'],
    'import/extensions': ['warn', 'never'],
    'react/jsx-filename-extension': [2, { extensions: ['.ts', '.tsx'] }],
    'react/function-component-definition': [
      2,
      {
        namedComponents: 'arrow-function',
        unnamedComponents: 'arrow-function',
      },
    ],
  },
};
