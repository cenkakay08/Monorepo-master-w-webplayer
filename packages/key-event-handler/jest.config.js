module.exports = {
  testEnvironment: "node",
  
  moduleNameMapper: {
    'react-native': '<rootDir>/../mobile/node_modules/react-native'
  },

	globals: {
		"NODE_ENV": "test",
	},

	moduleDirectories: ['node_modules', 'src'],

	moduleFileExtensions: ['js', 'json', 'jsx', 'ts', 'tsx', 'node'],

	transform: {
		"^.+\\.js$": "babel-jest",
		'^.+\\.ts?$': 'ts-jest',
    '^.+\\.tsx?$': 'ts-jest',
    // "^.+\\.js$": "node_modules/react-native/jest/preprocessor.js"
	},

	transformIgnorePatterns: [
		'node_modules',
	],

  verbose: true,
  
  
};
