const { setupFiles } = require('@testing-library/react-native/jest-preset');

module.exports = {
  preset: '@testing-library/react-native',
  verbose: true,
  setupFiles: [...setupFiles],
};
