module.exports = {
  root: true,
  env: {
    commonjs: true,
    es6: true,
    jest: true,
    node: true,
  },
  extends: ['plugin:@typescript-eslint/recommended'],
  plugins: ['@typescript-eslint'],
  rules: {
    '@typescript-eslint/no-explicit-any': 0,
    '@typescript-eslint/no-non-null-assertion': 0,
    '@typescript-eslint/explicit-module-boundary-types': 0,
    '@typescript-eslint/no-namespace': 0,
    '@typescript-eslint/no-empty-interface': [
      2,
      {
        allowSingleExtends: true,
      },
    ],
    '@typescript-eslint/no-unused-vars': 0,
  },
};
