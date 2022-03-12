const eslint = {
  plugins: ['@typescript-eslint', 'unicorn', 'folders', 'import', 'prettier'],
  extends: [
    'airbnb-typescript/base',
    'eslint:recommended',
    'plugin:@typescript-eslint/recommended',
    'plugin:prettier/recommended',
  ],
  parser: '@typescript-eslint/parser',
  env: {
    node: true,
  },
  rules: {
    // directories
    'unicorn/filename-case': [
      'error',
      {
        cases: {
          camelCase: true,
          pascalCase: true,
        },
      },
    ],
    'folders/match-regex': [2, '^[a-zA-Z_-]+$', '/src/'],
    'no-restricted-imports': ['error', { patterns: ['src/*'] }],
    'import/prefer-default-export': 0,

    // typescript
    '@typescript-eslint/naming-convention': 'error',
    '@typescript-eslint/no-explicit-any': 0,
    '@typescript-eslint/explicit-module-boundary-types': 0,
    '@typescript-eslint/no-unused-vars': 'error',

    // other
    'class-methods-use-this': 0,
    'max-classes-per-file': 0,
    'no-console': 0,
    'prefer-destructuring': 0,
    'no-await-in-loop': 0,
  },
};

module.exports = eslint;
