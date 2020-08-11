module.exports = {
  presets: [
    '@babel/preset-flow',
    'module:react-native',
    '@babel/preset-typescript',
    'module:metro-react-native-babel-preset',
  ],
  env: {
    production: {
      plugins: ['@babel/plugin-transform-modules-commonjs'],
    },
  },
};
