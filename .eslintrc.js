module.exports = {
  root: true,
  parser: "babel-eslint", // Specifies the ESLint parser
  parserOptions: {
    ecmaVersion: 2020, // Allows for the parsing of modern ECMAScript features
    sourceType: "module", // Allows for the use of imports
    ecmaFeatures: {
      jsx: true, // Allows for the parsing of JSX
      "modules": true
    }
  },

  settings: {
    react: {
      version: "detect" // Tells eslint-plugin-react to automatically detect the version of React to use
    },
    "import/resolver": {
      "node": {
        "extensions": [".js", ".ios.js", ".android.js", ".native.js", ".web.js"]
      }
    }
  },

  extends: [
    "airbnb", "prettier"
  ],
  plugins: ["prettier"],
  rules: {
    // Place to specify ESLint rules. Can be used to overwrite rules specified from the extended configs
    // e.g. "@typescript-eslint/explicit-function-return-type": "off",
    // TODO : think about this rule, if it is better to enable or disable it?
    "prettier/prettier": ["error", {
      "endOfLine": "auto"
    }],
    'import/extensions': [
      'error',
      'ignorePackages',
      {
        js: 'never',
        jsx: 'never',
        ts: 'never',
        tsx: 'never',
        mjs: 'never',
      },
    ],
    "import/prefer-default-export": "off",
    "react/jsx-filename-extension": [1, { "extensions": [".js", ".jsx"] }],
    "import/no-extraneous-dependencies": 1,
    "react/require-default-props": [2, { forbidDefaultForRequired: false, ignoreFunctionalComponents: true }],
    "react/forbid-prop-types": [2, { "forbid": ['any'], "checkContextTypes": true, "checkChildContextTypes": true }],
    "import/no-unresolved": 2,
    "no-unused-expressions": "off"
  },
  "globals": {
    "window": true
  },

};
