module.exports = {
  //"semi": false,
  overrides: [
    {
      files: "**/packages/web/**/*.{js,jsx,tsx,css,json}",
      options: {
        //"semi": true
      }
    },
    {
      files: ["**/packages/mobile/**/*.{js,jsx,tsx,css,json}"],
      options: {
        //"semi": true
      }
    },
    {
      files: ["**/packages/components/**/*.{js,jsx,tsx,css,json}"],
      options: {
        //"semi": true
      }
    }
  ]

  /**
   * printWidth: 80,
   * tabWidth: 2,
   * useTabs: false,
   * semi: true,
   * singleQuote: false,
   * jsxSingleQuote: false,
   * trailingComma: 'none',
   * bracketSpacing: true,
   * jsxBracketSameLine: false,
   * arrowParens: 'avoid',
   * rangeStart: 0,
   * rangeEnd: Infinity,
   * parser: undefined,
   * filepath: undefined,
   * requirePragma: false,
   * insertPragma: false,
   * proseWrap: 'preserve',
   * htmlWhitespaceSensitivity: 'css',
   * endOfLine: 'auto',
   */
};
