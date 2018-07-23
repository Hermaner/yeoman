module.exports = {
  root: true,
  parser: 'babel-eslint',
  parserOptions: {
    sourceType: 'module'
  },
  // https://github.com/feross/standard/blob/master/RULES.md#javascript-standard-style
  extends: 'standard',
  // required to lint *.vue files
  plugins: [
    'html'
  ],
  "globals": {
    "vuer": true,
    "localStorage": true,
    "fetch": true
  },
  // add your custom rules here
  'rules': {
    'camelcase': 0,
    // "indent": [2, 2],
    'no-tabs': 0,
    'generator-star-spacing': 0,
    'no-mixed-spaces-and-tabs': 0,
    'no-debugger': process.env.NODE_ENV === 'production' ? 2 : 0
    // // allow paren-less arrow functions
    // 'arrow-parens': 0,
    // // allow async-await
    // 'generator-star-spacing': 0,
    // // allow debugger during development
    // 'no-debugger': process.env.NODE_ENV === 'production' ? 2 : 0
  }
}
