module.exports = {
  env: {
    browser: true,
    node: true,
  },
  extends: [
    'next/core-web-vitals',
    'eslint:recommended',
    'plugin:@typescript-eslint/recommended',
    'airbnb',
    'airbnb-typescript',
    'plugin:import/errors',
    'plugin:import/warnings',
    'plugin:import/typescript',
    'prettier'
  ] ,
  plugins: ['import', '@typescript-eslint'],
  settings: {
    next: {
      rootDir: [
        'apps/dash/',
        'apps/web/',
        'packages/eslint-config-acme/',
        'packages/tsconfig/',
        'packages/ui/',
      ]
    },
    'import/parsers': {
      '@typescript-eslint/parser': ['.ts', '.tsx'],
    },
    'import/resolver': {
      node: {
        extensions: ['.js', '.jsx', '.ts', '.tsx'],
        project: ['tsconfig.json', 'packages/tsconfig.json'],
      },
      typescript: {
        alwaysTryTypes: true,
        project: ['tsconfig.json', 'packages/tsconfig.json'],
      }
    },
  },
  rules: {
    'react/react-in-jsx-scope': 'off',
  },
  overrides: [
    {
      env: {
        jest: true,
      },
      files: ['**/__tests__/**/*.[jt]s?(x)', '**/?(*.)+(spec|test).[jt]s?(x)'],
      extends: ['plugin:testing-library/react', 'plugin:jest/recommended'],
    }
  ],
  ignorePatterns: [
    '**/*.js',
    '**/*.json',
    'node_modules',
    '.turbo',
    '.next',
    'public'
  ]
}