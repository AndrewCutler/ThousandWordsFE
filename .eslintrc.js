module.exports = {
  env: {
    browser: true,
    es2021: true,
  },
  extends: [
    'plugin:react/recommended',
    'plugin:@typescript-eslint/recommended',
    'airbnb',
    'prettier',
  ],
  parser: '@typescript-eslint/parser',
  parserOptions: {
    ecmaVersion: 'latest',
    sourceType: 'module',
    ecmaFeatyres: { jsx: true },
  },
  plugins: ['react', '@typescript-eslint', 'import', 'react-hooks'],
  rules: {
    quotes: ['warn', 'single'],
    'jsx-quotes': ['warn', 'prefer-single'],
    'react-hooks/exhaustive-deps': 'warn',
    'react/jsx-filename-extension': [
      2,
      {
        extensions: ['.ts', '.tsx'],
      },
    ],
    'linebreak-style': ['warn', 'unix'],
    'no-magic-numbers': [
      2,
      {
        ignore: [-1, 0, 1, 2],
      },
    ],
    'import/no-unresolved': [2, { caseSensitive: false }],
    'react/function-component-definition': [0],
    'no-tabs': [0],
    indent: ['warn', 'tab', { SwitchCase: 1 }],
    'react/jsx-indent': ['warn', 'tab'],
    'react/jsx-indent-props': ['warn', 'tab'],
    'react/jsx-props-no-spreading': 'off',
    'react/jsx-wrap-multilines': 'off',
    'import/extensions': ['warn', 'never'],
    'no-use-before-define': 'off',
    '@typescript-eslint/no-use-before-define': ['error'],
    'max-len': ['warn', 110],
    'react/jsx-closing-bracket-location': ['warn', 'tag-aligned'],
    'sort-imports': [
      'off',
      {
        ignoreCase: false,
        ignoreDeclarationSort: false,
        ignoreMemberSort: false,
        memberSyntaxSortOrder: ['all', 'single', 'multiple', 'none'],
        allowSeparatedGroups: true,
      },
    ],
    'object-curly-newline': 'off',
    'import/order': 'off',
    'comma-dangle': 'off',
    'react/jsx-one-expression-per-line': 'off',
    'no-unused-vars': 'off',
    '@typescript-eslint/no-unused-vars': ['warn'],
    'implicit-arrow-linebreak': 0,
    'no-confusing-arrow': 'off',
    'react/require-default-props': 'off',
    '@typescript-eslint/explicit-module-boundary-types': 'off',
    'operator-linebreak': 'off',
    '@typescription-eslint/no-explicit-any': 'off',
    'function-paren-newline': 'warn',
    'no-unreachable': 'warn',
  },
  settings: {
    'import/parsers': {
      '@typescript-eslint/parser': ['.ts', '.tsx'],
    },
    'import/resolver': {
      typescript: {
        alwaysTryTypes: true, // always try to resolve types under `<root>@types` directory even it doesn't contain any source code, like `@types/unist`
        // Choose from one of the "project" configs below or omit to use <root>/tsconfig.json by default
        // use <root>/path/to/folder/tsconfig.json
        project: 'path/to/folder',
        // Multiple tsconfigs (Useful for monorepos)
        // use a glob pattern
        project: 'packages/*/tsconfig.json',
        // use an array
        project: [
          'packages/module-a/tsconfig.json',
          'packages/module-b/tsconfig.json',
        ],
        // use an array of glob patterns
        project: ['packages/*/tsconfig.json', 'other-packages/*/tsconfig.json'],
      },
    },
  },
};
