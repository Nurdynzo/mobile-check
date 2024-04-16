/**
 * For a detailed explanation regarding each configuration property, visit:
 * https://jestjs.io/docs/configuration
 */

/** @type {import('jest').Config} */
const config = {
  rootDir: '.',
  clearMocks: true,
  preset: 'react-native',
  modulePaths: ['<rootDir>'],
  moduleFileExtensions: ['ts', 'tsx', 'js'],
  transform: {
    '^.+\\.(js)$': '<rootDir>/node_modules/babel-jest',
    '\\.(ts|tsx)$': 'ts-jest',
  },
  testRegex: '(/__tests__/.*|\\.(test|spec))\\.(ts|tsx|js)$',
  testPathIgnorePatterns: ['\\.snap$', '<rootDir>/node_modules/'],
  cacheDirectory: '.jest/cache',
  setupFilesAfterEnv: ['dotenv/config', './jest.setup.ts'],
  transformIgnorePatterns: [
    'node_modules/(?!(jest-)?react-native|@react-native|@react-native-community|@react-navigation)',
  ],
  collectCoverageFrom: ['src/**/*.ts', 'src/**/*.tsx'],
  coveragePathIgnorePatterns: [
    'src/assets/',
    'src/mocks/',
    'src/state/services/',
  ],
  moduleNameMapper: {
    '^@/assets/(.*)$': '<rootDir>/src/assets/$1',
    '^@/components/(.*)$': '<rootDir>/src/components/$1',
    '^@/hooks/(.*)$': '<rootDir>/src/hooks/$1',
    '^@/navigation/(.*)$': '<rootDir>/src/navigation/$1',
    '^@/resources/(.*)$': '<rootDir>/src/resources/$1',
    '^@/screens/(.*)$': '<rootDir>/src/screens/$1',
    '^@/state/(.*)$': '<rootDir>/src/state/$1',
    '^@/types/(.*)$': '<rootDir>/src/types/$1',
    '^@/utils/(.*)$': '<rootDir>/src/utils/$1',
    '^@/constants/(.*)$': '<rootDir>/src/constants/$1',
    '\\.svg': '<rootDir>/__mocks__/svgMock.tsx',
  },
};

module.exports = config;
