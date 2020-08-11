# React Native [Web] + Monorepo
## 100% code sharing between Web, iOS and Android

### How to run

_Requirements: [React Native](https://facebook.github.io/react-native/docs/getting-started.html#native) (last tested on react-native@0.61)_

  - `$ git clone git@github.com:brunolemos/react-native-web-monorepo.git`
  - `$ cd react-native-web-monorepo`
  - `$ yarn`
  - `$ cd packages/mobile/ios`
  - `$ pod install`
  - `$ cd -`
  - `$ yarn workspace web start`
  - `$ yarn workspace mobile start`
  - Run the project
    - [iOS] Via Xcode
      - `yarn xcode` (open the project on Xcode)
      - Press the Run button
    - [Android] Via Android Studio
      - `yarn studio` (open the project on Android Studio)
      - Press the Run button
    - Via CLI
      - _You may need to launch your device emulator before the next command_
      - `$ yarn android` or  `$ yarn ios`
## Used Tech

  #### VS Code Ext
  * https://github.com/zabel-xyz/local-history
  * https://marketplace.visualstudio.com/items?itemName=eamodio.gitlens
  * https://marketplace.visualstudio.com/itemitemName=formulahendry.auto-close-tag
  * https://marketplace.visualstudio.com/itemitemName=formulahendry.auto-rename-tag
  * https://marketplace.visualstudio.com/itemitemName=steoates.autoimport
  * https://marketplace.visualstudio.com/itemitemName=naumovs.color-highlight
  * https://marketplace.visualstudio.com/itemitemName=vincaslt.highlight-matching-tag
  * https://marketplace.visualstudio.com/itemitemName=msjsdiag.vscode-react-native
  * https://marketplace.visualstudio.com/itemitemName=jpoissonnier.vscode-styled-components

  #### Eslint
  [.eslintrc](./.eslintrc.js)

  #### Pretier
   rules:
  * semi: true,
  * trailingComma: "all",
  * singleQuote: true,
  * jsxBracketSameLine: true,
  * printWidth: 80,
  * tabWidth: 2,
  * singleQuote: true,
  * useTabs: false

### file
   [.editorconfig](./.editorconfig)
   to use this file install this vs ext:

   ```
   ext install EditorConfig
   ```
#### Dependecy
    "babel-eslint"
    "better-docs"
    "eslint"
    "eslint-config-airbnb"
    "eslint-config-prettier"
    "eslint-plugin-jsx-a11y"
    "eslint-plugin-prettier"
    "husky"
    "jsdoc"
    "prettier"
    "prop-types"
    "typescript"
    "i18n-js"
    "react"
    "react-art"
    "react-dom"
    "react-native-web"
    "react-scripts"
    "react-native-video"
    "react-native-web-player"
    "react-native-gesture-handler"
    "@react-navigation/native"
    "@react-navigation/stack"
    "react-router"
    "react-router-dom"
    "@react-native-community/async-storage"
    "react-redux"
    "redux"
    "redux-persist"
    "redux-saga"
    "reduxsauce"
    "redux-devtools-extension"
    "immer"
    "@react-native-community/eslint-config"
    "@testing-library/jest-native"
    "@testing-library/react-native"
    "metro-react-native-babel-preset"
    "babel-jest"
    "jest"
    "react-test-renderer"


