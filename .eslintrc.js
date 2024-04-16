module.exports = {
  env: {
    node: true, // Changed from browser to node for React Native
    es2021: true,
    'jest/globals': true,
  },
  parser: '@typescript-eslint/parser',
  overrides: [
    {
      files: ['*.ts', '*.tsx'],
      parser: '@typescript-eslint/parser',
      parserOptions: {
        project: 'tsconfig.json',
        tsconfigRootDir: __dirname,
        sourceType: 'module',
      },
    },
  ],
  plugins: ['@typescript-eslint', 'jest'],
  ignorePatterns: ['src/state/services/'],
  extends: [
    'eslint:recommended',
    'plugin:@typescript-eslint/recommended',
    'plugin:jest/recommended',
    '@react-native', // Assuming you meant '@react-native-community/eslint-config'
  ],
  settings: {
    react: {
      version: 'detect', // Helps to avoid React version missing warning
    },
  },
  rules: {
    eqeqeq: ['error', 'always'],
  },
};
