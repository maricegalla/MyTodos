module.exports = {
  env: {
    browser: true,
    es6: true,
  },
  extends: 'airbnb-base',
  parserOptions: {
    ecmaVersion: 2018,
  },
  rules: {
    'no-console': 'off',
    camelcase: [
      2,
      {
        ignoreDestructuring: true,
      },
    ],
    'arrow-parens': [
      2,
      'always',
    ],
    quotes: [
      2,
      'single',
    ],
    'implicit-arrow-linebreak': 'off',
    'consistent-return': 'off',
    'no-unused-vars': [
      'error',
      {
        argsIgnorePattern: '^_',
        ignoreRestSiblings: true,
      },
    ],
    'object-curly-newline': 'off',
  },
};
