module.exports = {
  parser: 'babel-eslint',
  extends: ['airbnb', 'prettier'],
  plugins: ['prettier'],
  rules: {
      'prettier/prettier': ['error'],
      'react/jsx-indent': ['error', 4],
  },
};