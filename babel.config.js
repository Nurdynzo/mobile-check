module.exports = {
  presets: [
    'module:metro-react-native-babel-preset',
    ['@babel/preset-env', {targets: {node: 'current'}}],
    '@babel/preset-typescript',
  ],
  plugins: [
    'react-native-reanimated/plugin',
    [
      'module:react-native-dotenv',
      {
        moduleName: '@env',
        path: '.env',
      },
    ],
    [
      'module-resolver',
      {
        root: ['.'],
        alias: {
          '@/assets': './src/assets',
          '@/components': './src/components',
          '@/hooks': './src/hooks',
          '@/navigation': './src/navigation',
          '@/resources': './src/resources',
          '@/screens': './src/screens',
          '@/state': './src/state',
          '@/types': './src/types',
          '@/utils': './src/utils',
          '@/constants': './src/constants',
        },
      },
    ],
  ],
};
